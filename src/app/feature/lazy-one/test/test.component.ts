import { Component, OnInit } from '@angular/core';

import { FrodonService } from '../frodon.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private frodon: FrodonService) { }

  ngOnInit() {
  }

}
