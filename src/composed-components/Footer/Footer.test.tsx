import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';

describe('Footer  UI tests', () => {
  test('renders Footer', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should be in the document', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test('navigation menu routes are correct', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/menu" element={<div data-testid="menu">Menu</div>} />
          <Route path="/help" element={<div data-testid="help">Help</div>} />
        </Routes>
        <Footer />
      </MemoryRouter>
    );

    const menuLink = getByText('Menu');
    userEvent.click(menuLink);
    expect(screen.getByTestId('menu')).toBeInTheDocument();

    const helpLink = getByText('Help');
    userEvent.click(helpLink);
    expect(screen.getByTestId('help')).toBeInTheDocument();
  });
});
