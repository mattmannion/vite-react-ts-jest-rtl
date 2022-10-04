import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'src/App';
import 'src/sass/_scss/main.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
