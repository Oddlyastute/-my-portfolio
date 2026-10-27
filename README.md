# Accessible Email Composer — Portfolio Project

A responsive email composer built using **HTML, CSS and vanilla JavaScript**. Created to demonstrate form UX, accessible markup, client-side validation and live preview rendering.

## What works

- Editable **From**, **To**, **Cc**, **Bcc**, **Subject**, and **Message** fields.
- Cc and Bcc controls, with accessible expanded state.
- Multiple email recipients separated by commas.
- Required-field checks and browser email-address syntax validation.
- Live preview using `textContent`, avoiding HTML injection.
- Keyboard navigation, associated labels, focus outlines and live status messages.
- Draft save/restore using the browser's `localStorage` and a clear-draft control.
- Mobile-responsive layout and reduced-motion consideration.

## Important limitation

**This is a front-end demo, not a production mail client. No messages are sent, no account is authenticated, and no email service is connected.** The From address is editable for mockup purposes only. Bcc appears in the **sender's private preview**; a real email integration must keep Bcc addresses out of all recipient-visible content. Browser localStorage is not suitable for confidential information or shared devices.

## Run locally

Open `index.html` in a web browser, or serve the folder with a local static web server.

## Deploy on Netlify

1. Push the files to a public GitHub repository named `accessible-email-composer`.
2. In Netlify choose **Add new project → Import an existing project**, select GitHub and this repository.
3. Set the publish directory to the repository root (often shown as `.`), leave build command blank, and deploy.
4. Add the Netlify URL to the GitHub repository's **About → Website** field and to the Projects section of your main portfolio.

## Portfolio summary

**Accessible Email Composer** — Built a responsive, accessible email composer in HTML, CSS, and JavaScript featuring recipient validation, dynamic Cc/Bcc controls, local draft storage, keyboard-accessible form interactions, and a live message preview. Static frontend demonstration; no mail delivery.

## Production roadmap

For real sending, add server-side authentication and authorization, verified sender identities, rate limiting, input validation, anti-abuse protections, secure environment variables, and a transactional email provider via a backend such as Netlify Functions. Never expose an API key in client JavaScript.
