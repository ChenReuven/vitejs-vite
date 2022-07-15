import { describe, expect, it } from 'vitest';
import { Counter } from './Counter';
import { render, screen } from '@testing-library/react';

describe('Counter', () => {
  it('counter is visible', () => {
    render(<Counter />);
    const counterComponent = screen.getByText(/Count/i);
    expect(counterComponent).toBeInTheDocument();

    counterComponent.click();

    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });
});
