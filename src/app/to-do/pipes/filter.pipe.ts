import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../interfaces/task.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Tasks[], searchTerm: string): Tasks[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchTerm);
    });
  }
}
