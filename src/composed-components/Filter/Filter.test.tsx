import { MemoryRouter, Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from './Filter';

describe('Filter UI tests', () => {
  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <Filter />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
  });

  test('should redirect to product list url', async () => {
    const history = createMemoryHistory({
      initialEntries: [
        '/filter',
      ],
    });

    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Filter />
      </Router>
    );

    act(() => {
      userEvent.click(getByTestId('filter__button'));
    })

    await waitFor(() => {
      expect(history.location.pathname).toEqual('/product');
    });
  });

  describe('tests for inputs', () => {
    let getElementByTestId: any = null;
    const history = createMemoryHistory({
      initialEntries: [
        '/filter',
      ],
    });

    beforeEach(() => {
      const screen = render(
        <Router location={history.location} navigator={history}>
          <Filter />
        </Router>
      );

      getElementByTestId = screen.getByTestId;
    })

    test('should pass location value to the next page', async () => {
      const input = getElementByTestId('location');

      act(() => {
        userEvent.type(input, 'Kharkiv');
        userEvent.click(getElementByTestId('filter__button'));
      })
      
      await waitFor(() => {
        expect(history.location.state).toMatchObject({ location: 'Kharkiv' });
      })
    });

    test('should pass model value to the next page', async () => {
      const input = getElementByTestId('model');

      act(() => {
        userEvent.type(input, 'Boing');
        userEvent.click(getElementByTestId('filter__button'));
      })
      
      await waitFor(() => {
        expect(history.location.state).toMatchObject({ model: 'Boing' });
      })
    });
    
    test('should pass price values to the next page', async () => {
      const minInput = getElementByTestId('minPrice');
      const maxInput = getElementByTestId('maxPrice');

      act(() => {
        userEvent.clear(minInput);
        userEvent.type(minInput, '100000');
        userEvent.clear(maxInput);
        userEvent.type(maxInput, '1000000');
        userEvent.click(getElementByTestId('filter__button'));
      })
      
      await waitFor(() => {
        expect(history.location.state).toMatchObject({ minPrice: 100000, maxPrice: 1000000 });
      })
    });
    
    test('should pass mileage values to the next page', async () => {
      const minInput = getElementByTestId('minMileage');
      const maxInput = getElementByTestId('maxMileage');

      act(() => {
        userEvent.clear(minInput);
        userEvent.type(minInput, '100');
        userEvent.clear(maxInput);
        userEvent.type(maxInput, '500');
        userEvent.click(getElementByTestId('filter__button'));
      })
      
      await waitFor(() => {
        expect(history.location.state).toMatchObject({ minMileage: 100, maxMileage: 500 });
      })
    });
  });
});
