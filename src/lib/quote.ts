import { COMPANY } from "./company";
import { sanitizeInput, validEmail, validPhone } from "./sanitize";
export type Quote = { name: string; phone: string; email: string; service: string; message: string; consent: boolean };
export function canSendQuote(q: Quote) { return Boolean(sanitizeInput(q.name, 120) && validPhone(q.phone.trim()) && validEmail(q.email.trim()) && q.consent); }
export function quoteLinks(q: Quote, intro: string, labels: { name: string; phoneField: string; emailField: string; service: string; message: string }, subject: string) {
  if (!canSendQuote(q)) throw new Error("Consent, name and phone required");
  q = { ...q, name: sanitizeInput(q.name, 120), phone: sanitizeInput(q.phone, 25), email: sanitizeInput(q.email, 254), service: sanitizeInput(q.service, 200), message: sanitizeInput(q.message) };
  const text = [intro, `${labels.name}: ${q.name.trim()}`, `${labels.phoneField}: ${q.phone.trim()}`, `${labels.emailField}: ${q.email.trim()}`, `${labels.service}: ${q.service}`, `${labels.message}: ${q.message.trim()}`].join("\n");
  return { whatsapp: `${COMPANY.whatsappHref}?text=${encodeURIComponent(text)}`, email: `${COMPANY.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}` };
}