// Đăng nhập, đăng ký, đặt lại mật khẩu do hệ thống của đối tác xử lý (hợp đồng Điều 1). Website chỉ có giao diện.
// Khi đối tác cung cấp địa chỉ API, điền vào PARTNER_AUTH_API; trước đó mọi thao tác báo "chưa kết nối".
export const PARTNER_AUTH_API: string = '';

export class AuthError extends Error {
  constructor(public code: 'not-configured' | 'network' | 'rejected') { super(code); }
}

async function call(path: string, body: Record<string, string>) {
  if (!PARTNER_AUTH_API) throw new AuthError('not-configured');
  let res: Response;
  try {
    res = await fetch(PARTNER_AUTH_API.replace(/\/$/, '') + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  } catch { throw new AuthError('network'); }
  if (!res.ok) throw new AuthError('rejected');
  return (await res.json().catch(() => ({}))) as { resetToken?: string; redirect?: string };
}

export const login = (email: string, password: string) => call('/login', { email, password });
export const register = (name: string, email: string, password: string) => call('/register', { name, email, password });
export const requestReset = (email: string) => call('/password/forgot', { email });
export const verifyOtp = (email: string, otp: string) => call('/password/verify', { email, otp });
export const confirmReset = (resetToken: string, password: string) => call('/password/reset', { resetToken, password });
