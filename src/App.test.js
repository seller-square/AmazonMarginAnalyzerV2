import { render, screen } from '@testing-library/react';
import EmptyDiv from './EmptyDiv';

test('renders an empty div', () => {
  render(<EmptyDiv />);
  const emptyDiv = screen.getByTestId('empty-div');
  expect(emptyDiv).toBeInTheDocument();
  expect(emptyDiv.textContent).toBe('');
});
