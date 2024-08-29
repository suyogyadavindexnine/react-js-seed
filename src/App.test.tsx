import { render, act, waitFor } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders my component', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  await waitFor(() => {
    // Resolve the suspended data
  });
  // expect(screen.getByRole('button')).toBeInTheDocument();
});
