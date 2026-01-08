import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  // ❗ дозволяємо сторінку логіну без перевірки
  if (pathname === '/administration/login') {
    return NextResponse.next()
  }

  const res = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cookies) =>
          cookies.forEach(c =>
            res.cookies.set(c.name, c.value, c.options)
          ),
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user && pathname.startsWith('/administration')) {
    return NextResponse.redirect(new URL('/administration/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/administration/:path*'],
}
