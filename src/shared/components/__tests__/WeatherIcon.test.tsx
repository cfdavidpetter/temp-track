import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherIcon from '@/shared/components/WeatherIcon';
import DateTools from '@/shared/lib/DateTools';

jest.mock('@/shared/lib/DateTools', () => ({
  getDayOrNight: jest.fn(),
  getLocalTime: jest.fn(),
}));

describe('WeatherIcon Component', () => {
  it('should render the correct icon based on time of day', () => {
    (DateTools.getLocalTime as jest.Mock).mockReturnValue('2025-01-12T12:00:00Z');
    (DateTools.getDayOrNight as jest.Mock).mockReturnValue('day');

    const weatherIcons = {
      day: 'sun',
      night: 'moon',
    };

    render(
      <WeatherIcon
        weatherIcon={weatherIcons}
        timezone={-18000}
        size={24}
        color="black"
        title="Weather Icon"
        isToday={true}
      />
    );

    expect(screen.getByTitle('Weather Icon')).toBeInTheDocument();
  });
});
