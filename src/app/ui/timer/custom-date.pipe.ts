import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
  pure: false
})
export class CustomDatePipe {
  transform(value: Date): string {
    return value.toISOString();
  }
}
