import React from 'react';
import { render, screen } from '@testing-library/react';
import ToggleSwitch from '@/shared/components/ui/ToggleSwitch';

describe('ToggleSwitch Component', () => {
  it('should render with the correct active and inactive labels', () => {
    render(
      <ToggleSwitch
        isActive={true}
        onToggle={() => {}}
        activeLabel="On"
        inactiveLabel="Off"
        activeColor="bg-green-500"
        inactiveColor="bg-gray-300"
      />
    );
    
    expect(screen.getByText('On')).toBeInTheDocument();
  });

  it('should render with the correct inactive label when not active', () => {
    render(
      <ToggleSwitch
        isActive={false}
        onToggle={() => {}}
        activeLabel="On"
        inactiveLabel="Off"
        activeColor="bg-green-500"
        inactiveColor="bg-gray-300"
      />
    );
    
    expect(screen.getByText('Off')).toBeInTheDocument();
  });
});
