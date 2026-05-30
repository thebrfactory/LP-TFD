import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MELFIORE — Em breve'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blob vermelho top-left */}
        <div
          style={{
            position: 'absolute',
            width: 900,
            height: 900,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(180,10,10,0.45) 0%, rgba(120,5,5,0.20) 45%, transparent 70%)',
            top: -300,
            left: -200,
          }}
        />
        {/* Blob vermelho bottom-right */}
        <div
          style={{
            position: 'absolute',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(150,8,8,0.35) 0%, transparent 70%)',
            bottom: -250,
            right: -150,
          }}
        />

        {/* MELFIORE */}
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: '#FFF004',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          MELFIORE
        </div>

        {/* Barra amarela */}
        <div
          style={{
            width: 520,
            height: 10,
            background: '#FFF004',
            marginBottom: 48,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#CC2020',
            letterSpacing: '0.10em',
            opacity: 0.85,
            display: 'flex',
          }}
        >
          algo está chegando.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
