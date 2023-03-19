import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { createMemoryHistory } from 'history';
import { ServiceProvider } from '@services/services';
import NewPasswordSidebar from './NewPassword';
import { createServices } from '@services/index';
import LocalStorageMock from '@mocks/localStorage.mock';

describe('NewPasswordSidebar UI tests', () => {
  test('should render correctly', () => {
    const services = createServices();

    const { container } = render(
      <MemoryRouter>
        <ServiceProvider services={services}>
          <NewPasswordSidebar />
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
          <NewPasswordSidebar />
        </ServiceProvider>
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test('should add temp token in localStorage', () => {
    const services = createServices();
    const localStorageMock = new LocalStorageMock();

    render(
      <MemoryRouter>
        <ServiceProvider services={services}>
          <NewPasswordSidebar />
        </ServiceProvider>
      </MemoryRouter>
    );
    expect(localStorageMock.getItem('token')).toBeTruthy();
  });

  test('should redirect to url without token', async () => {
    const services = createServices();
    const history = createMemoryHistory({
      initialEntries: [
        '/login/confirm-new-password/?token=12412digjeogijsdfgs.4osdjgiauj9-428u3opiqjefpoasdfa.sdjgapdgjioj23pio4h12',
      ],
    });

    render(
      <MemoryRouter>
        <ServiceProvider services={services}>
          <NewPasswordSidebar />
        </ServiceProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/login/confirm-new-password/');
    });
  });
});
