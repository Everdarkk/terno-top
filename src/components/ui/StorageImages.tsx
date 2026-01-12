'use client'

import Image from 'next/image'
import { removeImage } from '@/app/administration/actions'
import { useTransition } from 'react'

type FileItem = {
  name: string
}

export default function StorageImages({
  images,
}: {
  images: FileItem[]
}) {
  const [pending, startTransition] = useTransition()

  return (
    <div style={{ marginTop: 32 }}>
      <h3>Зображення в Storage</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
          gap: 16,
        }}
      >
        {images.map(file => {
          const src = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/TernoTop/${file.name}`

          return (
            <div key={file.name}>
              <Image
                src={src}
                alt={file.name}
                width={200}
                height={120}
                style={{ objectFit: 'cover' }}
              />

              <button
                disabled={pending}
                onClick={() =>
                  startTransition(async () => {
                    await removeImage(file.name)
                  })
                }
                style={{
                  marginTop: 6,
                  width: '100%',
                  background: '#b00020',
                  color: '#fff',
                  border: 'none',
                  padding: 6,
                  cursor: 'pointer',
                }}
              >
                Видалити
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
