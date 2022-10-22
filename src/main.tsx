import 'src/util/hmr';
import 'src/sass/_scss/main.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'src/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
