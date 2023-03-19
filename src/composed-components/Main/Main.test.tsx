import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';

describe('Main UI tests', () => {
  test('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
