

PREMIUM MEMBERSHIP & YOUTH PORTAL
- register.html is the separate recruitment and registration page.
- register.css contains its independent premium styling.
- register.js is where the Google Forms embed URL is configured.
- Main-site navigation and youth calls-to-action link to register.html.

GOOGLE FORMS SETUP
1. Create your form in Google Forms.
2. Click Send, then the <> Embed HTML option.
3. Copy the iframe src URL (the URL ending in viewform?embedded=true).
4. In register.js, paste it inside the quotes for GOOGLE_FORM_EMBED_URL.
5. Commit and push the updated files to GitHub.
