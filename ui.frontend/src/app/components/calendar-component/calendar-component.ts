import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calendar-component.html',
  styleUrls: ['./calendar-component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarComponent {
  // Received from AEM properties.getHeading
  @Input() heading: string = 'Default Heading';

  // Form control for the date picker
  datePickerControl = new FormControl('');

  // Blocked dates to be passed into the calendar (format depends on wdpr component)
  @Input() blockedDates: string[] = [];

  // Whether the inline calendar is visible
  showCalendar: boolean = false;

  // Helper to get the value for display
  get selectedDate() {
    return this.datePickerControl.value;
  }

  toggleCalendar(): void {
    this.showCalendar = !this.showCalendar;
  }

  onDateSelected(event: any): void {
    console.log('Date selected', event);

    // Try to extract payload from common CustomEvent shapes
    let cand: any = event?.detail ?? event;

    // Some implementations wrap the date inside various properties
    cand = cand?.date ?? cand?.value ?? cand?.selected ?? cand?.dateString ?? cand;

    // Handle objects like { year, month, day }
    if (cand && typeof cand === 'object' && ('year' in cand || 'month' in cand || 'day' in cand)) {
      const y = (cand.year ?? cand.y) as number;
      const m = (cand.month ?? cand.m) as number;
      const d = (cand.day ?? cand.d) as number;
      if (y && m && d) {
        cand = new Date(y, m - 1, d);
      }
    }

    let dateObj: Date | null = null;

    if (cand instanceof Date) {
      dateObj = cand;
    } else if (typeof cand === 'string') {
      // Accept ISO yyyy-MM-dd directly (the input expects this format)
      if (/^\d{4}-\d{2}-\d{2}$/.test(cand)) {
        this.datePickerControl.setValue(cand);
        this.showCalendar = false;
        return;
      }

      // Try Date constructor first
      dateObj = new Date(cand);
      if (isNaN(dateObj.getTime())) {
        // try mm/dd/yyyy or other common variants
        const parts = cand.split(/[-\/]/);
        if (parts.length === 3) {
          // If first part is 4-digit year -> YYYY-MM-DD
          if (parts[0].length === 4) {
            dateObj = new Date(+parts[0], +parts[1] - 1, +parts[2]);
          } else {
            // assume MM/DD/YYYY
            dateObj = new Date(+parts[2], +parts[0] - 1, +parts[1]);
          }
        }
      }
    } else if (typeof cand === 'number') {
      dateObj = new Date(cand);
    }

    if (dateObj && !isNaN(dateObj.getTime())) {
      const formatted = this.formatDateToYYYYMMDD(dateObj);
      this.datePickerControl.setValue(formatted);
    } else {
      console.warn('Unrecognized date payload from calendar', event);
    }

    // Hide the calendar after selection
    this.showCalendar = false;
  }

  private formatDateToYYYYMMDD(date: Date): string {
    const y = date.getFullYear();
    const m = ('0' + (date.getMonth() + 1)).slice(-2);
    const d = ('0' + date.getDate()).slice(-2);
    return `${y}-${m}-${d}`;
  }

  onRangeDatesSelected(event: any): void {
    console.log('Range dates selected', event);
  }
}