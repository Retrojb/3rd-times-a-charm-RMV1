import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'sdk-v1/models/House';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  // @Input()houses$: Observable<House[]>;

  constructor() { }

  ngOnInit() {
  }

}
