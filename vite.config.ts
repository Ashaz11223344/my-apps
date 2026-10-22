import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { IncomingMessage, ServerResponse } from 'http'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const getAuthPasscode = () => (env.AUTH_PASSCODE || process.env.AUTH_PASSCODE || '2008').toString().trim()

  const authMiddleware = (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    const url = req.url?.split('?')[0]
    if (url === '/api/verify-passcode') {
      if (req.method !== 'POST') {
        res.statusCode = 405
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ success: false, error: 'Method not allowed' }))
        return
      }

      let body = ''
      req.on('data', (chunk: Buffer) => {
        body += chunk.toString()
      })
      req.on('end', () => {
        try {
          const parsed = body ? JSON.parse(body) : {}
          const entered = (parsed.passcode || '').toString().trim()
          const correct = getAuthPasscode()

          res.setHeader('Content-Type', 'application/json')
          if (entered === correct) {
            res.statusCode = 200
            res.end(
              JSON.stringify({
                success: true,
                redirectUrl: 'https://tomylovesmiti.qzz.io',
                message: 'Welcome — You are Trusted by Ashaz ✨',
              })
            )
          } else {
            res.statusCode = 401
            res.end(
              JSON.stringify({
                success: false,
                redirectUrl: 'https://youtu.be/iik25wqIuFo?list=RDiik25wqIuFo',
                message: 'Access denied — wrong passcode',
              })
            )
          }
        } catch {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: false, error: 'Invalid request body' }))
        }
      })
      return
    }
    next()
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'auth-passcode-api',
        configureServer(server) {
          server.middlewares.use(authMiddleware)
        },
        configurePreviewServer(server) {
          server.middlewares.use(authMiddleware)
        },
      },
    ],
  }
})

