import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CategoriesMenu } from './CategoriesMenu';

describe('CategoriesMenu UI tests', () => {
  test('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <CategoriesMenu />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <CategoriesMenu />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
