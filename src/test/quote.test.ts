import { describe, expect, it } from "vitest";
import { canSendQuote, quoteLinks, type Quote } from "@/lib/quote";
import { canSubmitNow, sanitizeInput, validEmail, validPhone } from "@/lib/sanitize";
import { COMPANY } from "@/lib/company";
const quote: Quote = { name: "Maha", phone: "+32 496 34 98 89", email: "maha@example.com", service: "Nettoyage", message: "Un devis & un rendez-vous", consent: true };
const labels = { name: "Name", phoneField: "Phone", emailField: "Email", service: "Service", message: "Message" };
describe("Quote requirements", () => {
  it("requires GDPR consent before preparing a request", () => { expect(canSendQuote({ ...quote, consent: false })).toBe(false); expect(canSendQuote(quote)).toBe(true); });
  it("requires name and phone", () => { expect(canSendQuote({ ...quote, name: " " })).toBe(false); expect(canSendQuote({ ...quote, phone: "" })).toBe(false); });
  it("uses the exact WhatsApp contact", () => { const link = new URL(quoteLinks(quote, "Bonjour", labels, "Devis").whatsapp); expect(link.origin + link.pathname).toBe("https://wa.me/32487334909"); expect(link.searchParams.get("text")).toContain("Un devis & un rendez-vous"); });
  it("uses the exact email address", () => { expect(quoteLinks(quote, "Bonjour", labels, "Devis").email.startsWith("mailto:Amjplus2025@gmail.com?subject=")).toBe(true); });
  it("preserves Belgian company and phone details", () => { expect(COMPANY.vat).toBe("BE 1027.549.902"); expect(COMPANY.phoneHref).toBe("tel:+32496349889"); });
  it("strips tags and script schemes from payloads", () => { expect(sanitizeInput('<script>bad</script><b>Hello</b> javascript:<>')).toBe("badHello"); expect(quoteLinks({ ...quote, message: '<b>Quote</b> javascript:alert(1)' }, "Bonjour", labels, "Devis").whatsapp).not.toContain("%3C"); });
  it("validates phone and email formats", () => { expect(validPhone("+32 496 34 98 89")).toBe(true); expect(validPhone("javascript:1234567")).toBe(false); expect(validEmail("broken@" )).toBe(false); expect(validEmail("maha@example.com")).toBe(true); });
  it("blocks a filled honeypot", () => { expect(canSubmitNow(null, 100000, "bot")).toBe(false); expect(canSubmitNow(null, 100000, "")).toBe(true); });
  it("enforces a 30-second submission cooldown", () => { expect(canSubmitNow(1000, 30999, "")).toBe(false); expect(canSubmitNow(1000, 31000, "")).toBe(true); });
});