import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, searchText:any, type: any, complexity:any):any {
    if(type == 'Complexity'){
      if(searchText && complexity) {
          searchText = searchText.toUpperCase();
          return complexity.filter(item => {
              return JSON.stringify(item).toUpperCase().indexOf(searchText)!== -1;

          });
      }
      else if(searchText){
          searchText = searchText.toUpperCase();
          return value.filter(item => {
              return JSON.stringify(item).toUpperCase().indexOf(searchText)!== -1;

          });
      }
      else return value;
  }
     if(type == 'ID'){
         if(searchText && complexity) {
             searchText = searchText.toUpperCase();
             return complexity.filter(item => {
                 return (item.toUpperCase().includes(searchText.toUpperCase()))
             });
         }else if(searchText){
             searchText = searchText.toUpperCase();
             return value.filter(item => {
                 return (item.toUpperCase().includes(searchText.toUpperCase()))
             });
         }
         else return value;
     }
  }
}
