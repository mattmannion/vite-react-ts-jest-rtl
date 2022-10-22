import data from 'src/data/data.json';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from 'src/pages/home';
import { NotFound } from 'src/pages/nf';
import { Stuff } from 'src/pages/stuff';
import { StuffSlug } from 'src/pages/stuff-slug';

export function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to='/'>home</Link>
          <Link to='/stuff'>stuff</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stuff'>
            <Route index element={<Stuff />} />
            {data.map((data) => (
              <Route
                key={data.title}
                path={data.title}
                element={<StuffSlug {...data} />}
              />
            ))}
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
