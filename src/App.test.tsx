import { describe, expect, it } from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ Vite Test \+ React/i)).toBeInTheDocument();
  });

  it('should render the query builder', () => {
    render(<App />);
    expect(screen.getByText(/Chen Example/i)).toBeInTheDocument();
  });
});
