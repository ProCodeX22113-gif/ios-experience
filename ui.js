export const $ = (selector, root=document) => root.querySelector(selector);
export const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
export function escapeHTML(value='') { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
let toastTimer;
export function toast(message) { const el=$('#toast'); el.textContent=message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('show'),2600); }
export function formatDate(value, opts={month:'short',day:'numeric',year:'numeric'}) { if(!value)return ''; const d=new Date(value); return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString(undefined,opts); }
export function empty(message) { return `<div class="empty-state">${escapeHTML(message)}</div>`; }
export function card(content) { return `<div class="card">${content}</div>`; }
export function row(content, extra='') { return `<div class="list-row ${extra}">${content}</div>`; }
