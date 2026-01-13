type AvatarPlaceholderProps = {
  name: string
  size?: number
}

const COLORS = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#009688',
  '#4CAF50',
  '#FF9800',
  '#FF5722',
]

function getColorFromString(str: string) {
  let hash = 0

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  return COLORS[Math.abs(hash) % COLORS.length]
}

export function AvatarPlaceholder({
  name,
}: AvatarPlaceholderProps) {
  const letter = name.trim().charAt(0).toUpperCase()
  const backgroundColor = getColorFromString(name)

  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 600,
        fontSize: '1rem',
        userSelect: 'none',
        flexShrink: 0,
      }}
      aria-hidden
    >
      {letter}
    </div>
  )
}
