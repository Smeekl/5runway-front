import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CategoriesMenuCard } from './CategoriesMenuCard';

describe('CategoriesMenuCard UI tests', () => {
  test('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <CategoriesMenuCard />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <CategoriesMenuCard />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
