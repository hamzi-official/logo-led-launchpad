export function sanitizeInput(value: string, maxLength = 2000) {
  return value.replace(/<[^>]*>/g, "").replace(/javascript\s*:/gi, "").replace(/[<>\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, maxLength);
}
export function validPhone(value: string) { return /^\+?[\d\s().-]{7,25}$/.test(value) && value.replace(/\D/g, "").length >= 7; }
export function validEmail(value: string) { return value === "" || /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value); }
export const SUBMISSION_COOLDOWN_MS = 30000;
export function canSubmitNow(lastSubmission: number | null, now: number, honeypot: string) { return honeypot === "" && (lastSubmission === null || now - lastSubmission >= SUBMISSION_COOLDOWN_MS); }