// lib/auth-api.ts
// Password reset client. The site is static: accounts, OTP e-mails and passwords live in the partner system.
// Set NEXT_PUBLIC_AUTH_API_URL to the partner auth base URL. The partner implements three JSON endpoints:
//   POST {base}/password-reset/request  { email }                 -> 200  (sends a one-time code to that e-mail)
//   POST {base}/password-reset/verify   { email, otp }            -> 200  { resetToken }
//   POST {base}/password-reset/confirm  { resetToken, password }  -> 200
// Any non-2xx answer is shown to the user as an error. Without the base URL nothing is sent and an error is raised,
// so the flow never pretends to have sent an e-mail.

export const AUTH_API_BASE = (process.env.NEXT_PUBLIC_AUTH_API_URL || '').replace(/\/$/, '');

export class AuthApiError extends Error {
  code: 'not-configured' | 'network' | 'rejected';
  constructor(code: AuthApiError['code'], message: string) {
    super(message);
    this.code = code;
  }
}

async function post<T>(path: string, body: Record<string, string>): Promise<T> {
  if (!AUTH_API_BASE) throw new AuthApiError('not-configured', 'Auth API is not configured');
  let res: Response;
  try {
    res = await fetch(`${AUTH_API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    throw new AuthApiError('network', 'Network error');
  }
  if (!res.ok) throw new AuthApiError('rejected', `Request rejected (${res.status})`);
  try {
    return (await res.json()) as T;
  } catch {
    return {} as T;
  }
}

export const requestPasswordReset = (email: string) => post<unknown>('/password-reset/request', { email });
export const verifyResetOtp = (email: string, otp: string) => post<{ resetToken: string }>('/password-reset/verify', { email, otp });
export const confirmPasswordReset = (resetToken: string, password: string) => post<unknown>('/password-reset/confirm', { resetToken, password });
