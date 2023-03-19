import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header UI tests', () => {
  test('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
