import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";

    //product arrayı içinde filtre yap product name i filterText ile eşleşiyomu varsa döndür yoksa gelen value u döndür
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;

  }

}
