import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SimpleDialog } from '../../../../shared/components/index';

test('renders dialog component', () => {
  render(
    <BrowserRouter>
      <SimpleDialog open={true} />
    </BrowserRouter>
  );
  expect(screen.getByTestId('modalcomponent')).toBeInTheDocument();
});
