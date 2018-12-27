import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {pipe} from 'rxjs';

@Pipe({
    name: 'searchIn'
})
@Injectable()

export class SearchPipe implements PipeTransform {

    transform(items: any, term: any): any {
        if (term === undefined) {
            return items;
        }

        return items.filter(function (item) {
            return item.neighborhood.toLowerCase().includes(term.toLowerCase());
        });
    }

}
