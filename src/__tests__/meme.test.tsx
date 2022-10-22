import { render, screen } from '@testing-library/react';
import { AppRouter } from 'src/router/Router';

describe('testing 12', () => {
  beforeEach(() => {
    render(<AppRouter />);
  });

  it('hello gamers', async () => {
    expect(await screen.findByTestId('testing')).toBeInTheDocument();
  });
});
