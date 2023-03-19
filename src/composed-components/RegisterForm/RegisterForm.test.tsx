import { act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RegisterForm } from './RegisterForm';

describe('RegisterForm  UI tests', () => {
  let queryClient: QueryClient = null;
  let container: HTMLElement = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
        },
      },
    });
  });

  test('should render correctly', async () => {
    await act(() => {
      render(
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <RegisterForm />
          </QueryClientProvider>
        </MemoryRouter>,
        container
      );
    });

    expect(container).toMatchSnapshot();
  });

  test('should be in the document', async () => {
    await act(() => {
      render(
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <RegisterForm />
          </QueryClientProvider>
        </MemoryRouter>,
        container
      );
    });

    expect(container).toBeInTheDocument();
  });
});
