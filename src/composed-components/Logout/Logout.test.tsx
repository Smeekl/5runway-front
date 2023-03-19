import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Logout from './Logout';

describe('Logout UI tests', () => {
  test('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
