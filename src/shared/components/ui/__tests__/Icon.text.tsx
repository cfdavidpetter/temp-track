import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '@/shared/components/ui/Icon';

describe('Icon Component', () => {
  it('should render the correct icon based on the name', () => {
    render(<Icon name="sun" />);
    expect(screen.getByTitle('')).toBeInTheDocument();
  });

  it('should apply the correct size and color', () => {
    render(<Icon name="sun" size={48} color="red" />);
    const iconElement = screen.getByTitle('');
    expect(iconElement).toBeInTheDocument();
    const iconInstance = iconElement.querySelector('svg');
    expect(iconInstance).toHaveAttribute('width', '48');
  });

  it('should render with the correct title', () => {
    const title = 'Sun Icon';
    render(<Icon name="sun" title={title} />);
    expect(screen.getByTitle(title)).toBeInTheDocument();
  });

  it('should return null for an invalid icon name', () => {
    const { container } = render(<Icon name="invalidIcon" />);
    expect(container.firstChild).toBeNull();
  });
});
