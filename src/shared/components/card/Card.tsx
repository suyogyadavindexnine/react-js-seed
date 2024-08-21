import * as React from 'react';
import { Card as MuiCard, CardProps } from '@mui/material';

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, ...props }, ref) => {
  return <MuiCard ref={ref} {...props}>{children}</MuiCard>;
});

Card.displayName = 'Card'; // Optional: helps with debugging by providing a meaningful name in React DevTools

export default Card;
