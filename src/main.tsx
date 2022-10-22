import 'src/util/hmr';
import 'src/sass/_scss/main.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from 'src/router/Router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
