import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../interfaces/task.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Tasks[], searchTask: string): Tasks[] {
    if (!items || !searchTask) {
      return items;
    }

    searchTask = searchTask.toLowerCase();

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchTask);
    });
  }
}
