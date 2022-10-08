import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faCircle,
  faSun,
} from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import {
  faAtom,
  faCircleArrowDown,
  faCircleNodes,
  faCircleNotch,
  faRotate,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon
          icon={faAddressCard}
          size={'2x'}
          style={{ color: 'black' }}
        />
        <FontAwesomeIcon
          icon={faSun}
          size={'2x'}
          className='spin'
          style={{ color: 'black' }}
        />
      </div>
      <div>
        <button onClick={() => setTab(Tabs.a)}>a</button>
        <button onClick={() => setTab(Tabs.b)}>b</button>
      </div>
      {ShowTab(tab)}
    </div>
  );
}
