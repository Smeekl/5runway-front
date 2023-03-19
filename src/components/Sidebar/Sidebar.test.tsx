import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Sidebar from './Sidebar';

describe('Sidebar  UI tests', () => {
  test('should render corectly with props', () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar children={<div>example</div>} title={'example'} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should render corectly without props', () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test('should close on click close button', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/button'],
    });
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Sidebar children={<div>button</div>} title={'example'} index={0} />
      </Router>
    );

    await waitFor(() => {
      userEvent.click(getByTestId('close-button'));
    });
    expect(history.location.pathname).toBe('/');
  });
});
