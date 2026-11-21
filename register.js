// Paste the Google Forms EMBED URL here after creating your form.
// Example: https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true
const GOOGLE_FORM_EMBED_URL = "";
const mount = document.getElementById("formMount");
if (GOOGLE_FORM_EMBED_URL.trim()) {
  const frame = document.createElement("iframe");
  frame.className = "google-form";
  frame.src = GOOGLE_FORM_EMBED_URL.trim();
  frame.title = "AES SOUTH registration form";
  frame.loading = "lazy";
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  mount.replaceChildren(frame);
}
document.getElementById("year").textContent = new Date().getFullYear();
