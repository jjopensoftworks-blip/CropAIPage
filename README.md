# CropAI — Marketing Site

The public marketing site for CropAI (Farm Field Scanner): features overview, changelog,
privacy policy, and disclaimer. Hosted via GitHub Pages.

**📲 [Download on Google Play](https://play.google.com/store/apps/details?id=com.cropai.tier)**

This repo intentionally contains **only** the marketing site — no application source code.

## Security Architecture

We prioritize the security and privacy of our farmers' data. Recent enhancements include:

*   **Hardened Supabase RLS Security**: Row-Level Security policies reject anonymous direct REST link inserts.
*   **Cryptographic HMAC Payload Signing**: Attached `X-CropAI-Timestamp` and `X-CropAI-Signature` headers to defeat proxy tampering.
*   **5-Attempt PIN Lockout & 24h Account Protection**: Enforced 24-hour lockout after 5 consecutive failed PIN attempts to prevent brute-force attacks.
*   **Client-Side Request Throttling**: HTTP 429 rate limiting on API request bursts exceeding 60 req/min.
*   **Certified PDF Validation**: Exported field inspection reports feature a SHA-256 cryptographic verification token.
