import { Route } from 'react-router-dom';
import data from 'src/data/data.json';
import { Stuff } from 'src/pages/stuff';
import { StuffSlug } from 'src/pages/stuff-slug';

export const StuffRouter = [
  <Route key='stuffrouter' path='/stuff'>
    <Route index element={<Stuff />} />
    {data.map((data, i) => (
      <Route key={i} path={data.title} element={<StuffSlug {...data} />} />
    ))}
  </Route>,
];
