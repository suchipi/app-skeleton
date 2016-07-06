import callWithHi from './callWithHi';

function showHeader(message) {
  const h1 = document.createElement('h1');
  h1.textContent = message;
  document.body.appendChild(h1);
}

callWithHi(showHeader);
