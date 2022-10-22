// set up testing
import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom';
import { expect } from 'vitest';

expect.extend(matchers);

// testing util
import type { ReactElement, JSXElementConstructor } from 'react';
import { render } from '@testing-library/react';

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export const custom_render = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options = {}
) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
