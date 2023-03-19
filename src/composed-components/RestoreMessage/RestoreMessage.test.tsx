import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import RestoreMessage from './RestoreMessage';

describe('RestoreMessage UI tests', () => {
  test('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <RestoreMessage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <RestoreMessage />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
  });
});
