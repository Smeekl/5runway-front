import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ServiceProvider } from '@services/services';
import { createServices } from '@services/index';
import RestorePassword from './RestorePassword';

describe('RestorePassword UI tests', () => {
  test('should render correctly', () => {
    const services = createServices();

    const { container } = render(
      <MemoryRouter>
        <ServiceProvider services={services}>
          <RestorePassword />
        </ServiceProvider>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const services = createServices();

    const { container } = render(
      <MemoryRouter>
        <ServiceProvider services={services}>
          <RestorePassword />
        </ServiceProvider>
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
