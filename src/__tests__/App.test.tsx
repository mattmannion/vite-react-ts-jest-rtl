import { App } from 'src/App';
import { render, screen } from '@testing-library/react';

describe('testing 12', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('hello gamers', async () => {
    expect(await screen.findByTestId('testing')).toBeInTheDocument();
  });
});
