import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { ServiceProvider } from '@services/services';
import { UserService } from '@services/user.service';
import { TUser } from '@composed-components/types/index';
import Profile from './Profile';

describe('Profile UI tests', () => {
  let queryClient: QueryClient = null;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
        },
      },
    });
  });

  test('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Profile />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Profile />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
  });

  test('should render data after response', async () => {
    const userServiceSpy = jest.spyOn(new UserService({}, {}), 'getUser');
    const delay = (value: TUser): Promise<TUser> =>
      new Promise((resolve) => setTimeout(resolve, 50, value));

    userServiceSpy.mockImplementation(() =>
      delay({
        data: {
          email: 'bigBebra@gmail.com',
          expiringDate: 3,
          subscriptionPlan: 'Premium',
        },
      })
    );

    render(
      <MemoryRouter>
        <ServiceProvider
          services={{ userService: { getUser: userServiceSpy } }}
        >
          <QueryClientProvider client={queryClient}>
            <Profile />
          </QueryClientProvider>
        </ServiceProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(
      () => {
        expect(userServiceSpy).toHaveBeenCalledTimes(1);

        expect(screen.getByText('bigBebra@gmail.com')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('Premium')).toBeInTheDocument();
      },
      { timeout: 100 }
    );
  });
});
