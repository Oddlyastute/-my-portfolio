'use strict';
const form = document.querySelector('#compose-form');
const status = document.querySelector('#status');
const ids = ['from', 'to', 'cc', 'bcc', 'subject', 'message'];
const fields = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
const KEY = 'ang-email-composer-draft-v1';
const addresses = value => value.split(',').map(item => item.trim()).filter(Boolean);
function setVisible(type, visible) {
  const group = document.getElementById(`${type}-group`);
  const toggle = document.getElementById(`toggle-${type}`);
  group.hidden = !visible;
  toggle.setAttribute('aria-expanded', String(visible));
  toggle.textContent = visible ? `Hide ${type === 'cc' ? 'Cc' : 'Bcc'}` : `Add ${type === 'cc' ? 'Cc' : 'Bcc'}`;
}
for (const type of ['cc', 'bcc']) {
  document.getElementById(`toggle-${type}`).addEventListener('click', () => {
    const hidden = document.getElementById(`${type}-group`).hidden;
    setVisible(type, hidden);
    if (hidden) fields[type].focus();
    else if(fields[type].value.trim()) status.textContent = `Hidden ${type.toUpperCase()} field still contains an address. Clear it if you do not want it included in your draft.`;
  });
}
function render() {
  for (const id of ['from', 'to', 'cc', 'bcc']) {
    const el = document.getElementById(`preview-${id}`);
    el.textContent = fields[id].value.trim() || '—';
  }
  for (const id of ['cc', 'bcc']) document.getElementById(`preview-${id}-row`).hidden = !fields[id].value.trim();
  document.getElementById('preview-subject').textContent = fields.subject.value.trim() || 'Your email subject';
  document.getElementById('preview-message').textContent = fields.message.value || 'Your message will appear here as you type.';
}
function errorFor(id, text) {
  const field = fields[id];
  document.getElementById(`${id}-error`).textContent = text;
  if (text) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
  return !!text;
}
function validate() {
  let first = null;
  for(const id of ids) {
    const field = fields[id];
    let error = '';
    if (field.required && !field.value.trim()) error = `${id[0].toUpperCase()+id.slice(1)} is required.`;
    else if (['from','to','cc','bcc'].includes(id) && field.value.trim() && !field.checkValidity()) error = 'Enter valid email addresses, separated by commas if needed.';
    if (errorFor(id, error) && !first) first = field;
  }
  if (first) {
    if (first.id === 'cc' || first.id === 'bcc') setVisible(first.id, true);
    first.focus();
    status.textContent = 'Please correct the highlighted fields.';
    return false;
  }
  return true;
}
form.addEventListener('input', event => {
  if (event.target.id in fields) {
    errorFor(event.target.id, '');
    status.textContent = '';
    render();
  }
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!validate()) return;
  render();
  document.getElementById('preview-heading').focus?.();
  status.textContent = 'Preview ready. No email has been sent.';
  document.querySelector('.preview-panel').scrollIntoView({behavior:'auto',block:'nearest'});
});
document.getElementById('save-draft').addEventListener('click', () => {
  try {
    const draft = Object.fromEntries(ids.map(id => [id, fields[id].value]));
    localStorage.setItem(KEY, JSON.stringify(draft));
    status.textContent = 'Draft saved in this browser only. Avoid entering sensitive information.';
  } catch {status.textContent='Browser storage is unavailable. Draft was not saved.';}
});
document.getElementById('clear-draft').addEventListener('click', () => {
  form.reset();
  ids.forEach(id => errorFor(id, ''));
  setVisible('cc', false);setVisible('bcc', false);
  try {localStorage.removeItem(KEY);} catch {}
  render();status.textContent='Composer and saved local draft cleared.';
  fields.from.focus();
});
try {
  const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
  if (saved && typeof saved === 'object') {
    for (const id of ids) if(typeof saved[id] === 'string') fields[id].value = saved[id];
    if (fields.cc.value) setVisible('cc', true);
    if (fields.bcc.value) setVisible('bcc', true);
    status.textContent='Your local draft has been restored.';
  }
} catch {}
render();
