import { MemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { ServiceProvider } from '@services/services';
import { createServices } from '@services/index';
import { SearchProvider } from './service';
import Search from './Search';

describe('RestorePassword UI tests', () => {
  test('should render correctly', () => {
    const services = createServices();

    const { container } = render(
      <MemoryRouter>
        <ServiceProvider services={services}>
          <SearchProvider>
            <Search />
          </SearchProvider>
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
          <SearchProvider>
            <Search />
          </SearchProvider>
        </ServiceProvider>
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test("component shouldn't render more that 10 elements", () => {
    const services = createServices();

    const arr = [];

    for (let i = 0; i < 50; i++) {
      arr.push('test');
    }

    global.localStorage.setItem('searchedItem', JSON.stringify(arr));

    const { getAllByText } = render(
      <MemoryRouter>
        <ServiceProvider services={services}>
          <SearchProvider>
            <Search />
          </SearchProvider>
        </ServiceProvider>
      </MemoryRouter>
    );

    waitFor(() => expect(getAllByText('test')).toHaveLength(10));
  });

  test('should clear history', () => {
    const services = createServices();

    const arr = [];

    for (let i = 0; i < 50; i++) {
      arr.push('test');
    }

    global.localStorage.setItem('searchedItem', JSON.stringify(arr));

    const { getAllByText, getByText } = render(
      <MemoryRouter>
        <ServiceProvider services={services}>
          <SearchProvider>
            <Search />
          </SearchProvider>
        </ServiceProvider>
      </MemoryRouter>
    );

    waitFor(() => {
      getByText('CLEAR').click();
      expect(global.localStorage.getItem('searchedItem') as string).toBeNull();
      expect(getAllByText('test')).toHaveLength(0);
    });
  });
});
