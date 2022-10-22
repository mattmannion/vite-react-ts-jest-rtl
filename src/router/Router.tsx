import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from 'src/pages/home';
import { NotFound } from 'src/pages/nf';
import { StuffRouter } from 'src/router/StuffRouter';

export function AppRouter() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div
          data-testid='testing'
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
        >
          <Link to='/'>home</Link>
          <Link to='/stuff'>stuff</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          {StuffRouter}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
