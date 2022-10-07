import { useState } from 'react';

enum Tabs {
  a = 'a',
  b = 'b',
}

function ShowTab(tab: Tabs) {
  switch (tab) {
    case Tabs.a:
      return <div>a</div>;
    case Tabs.b:
      return <div>b</div>;
  }
}

export function App() {
  const [tab, setTab] = useState<Tabs>(Tabs.a);

  return (
    <div className='App'>
      <div>
        <button onClick={() => setTab(Tabs.a)}>a</button>
        <button onClick={() => setTab(Tabs.b)}>b</button>
      </div>
      {ShowTab(tab)}
    </div>
  );
}
