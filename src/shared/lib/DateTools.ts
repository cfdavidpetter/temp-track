export default class DateTools {

  /**
   * Returns the full name of the weekday for the given date.
   * @param date - Date object.
   * @returns The name of the weekday (e.g., "Monday", "Tuesday").
   */
  static stringWeek(date: Date): string {
    return date.toLocaleDateString('en', { weekday: 'long' });
  }

  /**
   * Function to get the local time based on the offset in seconds.
   * @param offsetInSeconds - Offset in seconds relative to UTC.
   * @returns The local time as a Date object.
   */
  static getLocalTime(offsetInSeconds: number): Date {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utcTime + offsetInSeconds * 1000);
  }

  /**
   * Calculates the time adjusted for the specified time zone.
   * @param offsetInSeconds - Offset in seconds relative to UTC.
   * @returns Time in the format HH:mm.
   */
  static getCurrentTimeForTimezone(offsetInSeconds: number): string {
    const localTime = this.getLocalTime(offsetInSeconds);

    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  /**
   * Determines if the current time (based on the offset) is day or night.
   * @param date - Date object.
   * @returns "day" if the time is between 6:00 AM and 6:00 PM, "night" otherwise.
   */
  static getDayOrNight(date: Date): "day" | "night" {
    const hours = date.getHours();

    if (hours >= 6 && hours < 18) {
      return "day";
    }
    return "night";
  }
}
