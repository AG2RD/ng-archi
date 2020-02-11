import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MyLovelyService {

  constructor() { }

  logMessage(message: string): void {
      console.log(message);
  }
}
