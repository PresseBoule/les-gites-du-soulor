const encoder = new TextEncoder();
export async function digest(value) {
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value))), byte => byte.toString(16).padStart(2, '0')).join('');
}
export async function passwordHash(password, salt = crypto.randomUUID()) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: encoder.encode(salt), iterations: 210000 }, key, 256);
  return { algorithm: 'pbkdf2-sha256', salt, hash: Array.from(new Uint8Array(bits), byte => byte.toString(16).padStart(2, '0')).join('') };
}
export async function passwordMatches(supplied, stored) {
  if (typeof supplied !== 'string' || supplied.length > 512 || !stored) return false;
  if (typeof stored === 'string') {
    // Never re-enable the old public default password.
    return stored !== 'admin123' && await digest(supplied) === await digest(stored);
  }
  if (stored.algorithm !== 'pbkdf2-sha256' || typeof stored.salt !== 'string') return false;
  return (await passwordHash(supplied, stored.salt)).hash === stored.hash;
}
export function validateNewPassword(password) {
  if (typeof password !== 'string' || password.length < 12 || password.length > 128) throw new Error('Choisissez un mot de passe de 12 à 128 caractères.');
}
export function detectImage(bytes) {
  if (bytes.length > 3 && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) return { ext: 'jpg', mime: 'image/jpeg' };
  if ([137,80,78,71,13,10,26,10].every((byte, i) => bytes[i] === byte)) return { ext: 'png', mime: 'image/png' };
  if (String.fromCharCode(...bytes.slice(0,4)) === 'RIFF' && String.fromCharCode(...bytes.slice(8,12)) === 'WEBP') return { ext: 'webp', mime: 'image/webp' };
  return null;
}
