import React from 'react';
import { render, screen } from '@testing-library/react';
import Clock from '@/shared/components/ui/Clock';
import DateTools from '@/shared/lib/DateTools';

jest.mock('@/shared/lib/DateTools', () => ({
  getCurrentTimeForTimezone: jest.fn(),
}));

describe('Clock', () => {
  it('should render the start time correctly', () => {
    const mockTime = '12:00 PM';
    (DateTools.getCurrentTimeForTimezone as jest.Mock).mockReturnValue(mockTime);

    render(<Clock offsetInSeconds={-18000} />);
    expect(screen.getByText(mockTime)).toBeInTheDocument();
  });

  it('should not generate gaps after component disassembly', () => {
    const spyClearInterval = jest.spyOn(global, 'clearInterval');

    const { unmount } = render(<Clock offsetInSeconds={-18000} />);
    
    unmount();
    expect(spyClearInterval).toHaveBeenCalledTimes(1);
  });
});
