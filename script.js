const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('interestForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('AES SOUTH enquiry — ' + data.get('interest'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\n' +
    'Email: ' + data.get('email') + '\n' +
    'Interest: ' + data.get('interest') + '\n\n' +
    'Message:\n' + (data.get('message') || 'No additional message.')
  );
  document.querySelector('.form-status').textContent = 'Your email app should open with the enquiry ready to send.';
  window.location.href = 'mailto:info@aessouthafrica.co.za?subject=' + subject + '&body=' + body;
});
