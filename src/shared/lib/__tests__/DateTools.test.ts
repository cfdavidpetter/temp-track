import DateTools from './../DateTools';

describe('DateTools', () => {
  describe('getDayOrNight', () => {
    it('should return "day" for a time between 6 AM and 6 PM', () => {
      const dayTime = new Date('2025-01-12T10:00:00Z');
      const result = DateTools.getDayOrNight(dayTime);
      expect(result).toBe('day');
    });

    it('should return "night" for a time outside of 6 AM and 6 PM', () => {
      const nightTime = new Date('2025-01-12T22:00:00Z');
      const result = DateTools.getDayOrNight(nightTime);
      expect(result).toBe('night');
    });
  });
});
