import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { siteTitle } from '@/lib/site'

export const alt = siteTitle
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), 'public/portraits/light-gray-studio.jpg'))
  const src = `data:image/jpeg;base64,${photo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#eef2f8',
          color: '#0b1220',
        }}
      >
        <img src={src} width={520} height={630} style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: '56px 64px',
            gap: 18,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#2152ff',
            }}
          >
            Portfolio
          </div>
          <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.5 }}>
            Shafique Malik
          </div>
          <div style={{ display: 'flex', fontSize: 30, color: '#556074' }}>Senior Frontend Engineer</div>
          <div style={{ display: 'flex', fontSize: 24, marginTop: 8 }}>React.js · Next.js · TypeScript</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
