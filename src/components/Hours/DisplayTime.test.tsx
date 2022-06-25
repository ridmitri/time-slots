import { render, screen } from '@testing-library/react';
import DisplayTime from './DisplayTime';

describe('DisplayTime component', () => {
  it('should render hyphen for odd indices', () => {
    const hourItem = {
      hour: 23,
      beforeNoon: false,
    };

    render(<DisplayTime hoursItem={hourItem} listLength={2} index={1} />);
    const result = screen.queryByText(/-/);
    expect(result).toBeInTheDocument();
  });

  it('should render uppercase AM for hoursItem with beforeNoon true', () => {
    const hourItem = {
      hour: 23,
      beforeNoon: true,
    };

    render(<DisplayTime hoursItem={hourItem} listLength={2} index={1} />);
    const result = screen.queryByText(/AM/);
    expect(result).toBeInTheDocument();
  });

  it('should render uppercase PM for hoursItem with beforeNoon false', () => {
    const hourItem = {
      hour: 23,
      beforeNoon: false,
    };

    render(<DisplayTime hoursItem={hourItem} listLength={2} index={1} />);
    const result = screen.queryByText(/PM/);
    expect(result).toBeInTheDocument();
  });

  it('should separate next hoursItem with comma when renders odd index, but not the last entry ', () => {
    const hourItem = {
      hour: 23,
      beforeNoon: false,
    };

    render(<DisplayTime hoursItem={hourItem} listLength={8} index={7} />);
    const istLast = screen.queryByText(/,/);
    expect(istLast).not.toBeInTheDocument();

    render(<DisplayTime hoursItem={hourItem} listLength={8} index={3} />);
    const isNotLast = screen.queryByText(/,/);
    expect(isNotLast).toBeInTheDocument();
  });
});
