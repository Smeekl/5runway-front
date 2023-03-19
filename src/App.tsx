import 'antd/dist/antd.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorIndicator from '@components/ErrorIndicator/ErrorIndicator';
import { SearchProvider } from '@composed-components/Search/service';
import { ServiceProvider } from '@services/services';
import { createServices } from '@services/index';
import MainRouter from '@routers/MainRouter/MainRouter';
import { AuthProvider } from '@providers/auth.provider';
import './App.css';

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  const services = createServices();

  return (
    <ErrorBoundary FallbackComponent={ErrorIndicator}>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
        <ServiceProvider services={services}>
          <SearchProvider>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <MainRouter />
              </AuthProvider>
            </QueryClientProvider>
          </SearchProvider>
        </ServiceProvider>
      </GoogleOAuthProvider>;
    </ErrorBoundary>
  );
}
