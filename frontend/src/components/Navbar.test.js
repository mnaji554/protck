import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { LanguageProvider } from '../context/LanguageContext';

test('switches navigation labels to Arabic', async () => {
  render(
    <MemoryRouter>
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
    </MemoryRouter>
  );

  const toggleButton = screen.getByRole('button', { name: /switch language/i });
  await userEvent.click(toggleButton);

  expect(screen.getByText('الرئيسية')).toBeTruthy();
});
