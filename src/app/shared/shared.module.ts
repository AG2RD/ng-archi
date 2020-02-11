import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MessagesComponent
  ]
})
export class SharedModule { }
