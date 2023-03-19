import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PageNotFound from './PageNotFound';

describe('PageNotFound UI tests', () => {
  test('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
