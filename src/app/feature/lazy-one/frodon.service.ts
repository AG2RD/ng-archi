import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrodonService  implements OnDestroy  {

  constructor() {
      console.log(`Hello, I'm Frodon.`);
   }

   ngOnDestroy() { console.log('FrodonService instance destroyed.'); }

   
}
