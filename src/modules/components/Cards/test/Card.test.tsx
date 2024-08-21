import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Card, Typography } from '../../../../shared/components/index';
import { CardHeader, CardContent, Divider } from '@mui/material';
test('renders card component', () => {
  render(
    <BrowserRouter>
      <Card data-testid="card">
        <CardHeader title="Basic" />
        <Divider />
        <CardContent>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
              </Typography>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </BrowserRouter>
  );
  expect(screen.getByTestId('card')).toBeInTheDocument();
  expect(screen.getByTestId('card')).toHaveTextContent('Word of the Day');
});
