
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/api/auth/login', () => {
    return HttpResponse.json(
      { message: 'Login successful' },
      {
        headers: {
          'Location': '/',
          'Set-Cookie': 'auth-token=your-auth-token; Path=/; HttpOnly',
        },
        status: 302,
        statusText: 'Found',
      }
    )
  }),
]