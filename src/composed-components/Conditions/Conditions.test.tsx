import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Conditions } from './Conditions';

describe('Conditions UI tests', () => {
  test('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Conditions />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <Conditions />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
