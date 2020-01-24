import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'sdk-v1/models/House';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers/app.reducer';
import { ActivatedRoute } from '@angular/router';
import { GetHouses } from 'src/app/store/actions/house.action';
import { selectHouseList } from 'src/app/store/selectors/house.selector';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  @Input() houses: House;
  @Output() houseSelected: EventEmitter<House> = new EventEmitter();

  constructor(private store: Store<IAppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('HOUSE COMPONENT ONINIT');
    console.log('houses component data', this.houses);
    this.store.dispatch(new GetHouses());
    console.log('HOUSE COMPONENT ONINIT FINISHED');
  }

  navToSelectedHouse(id) {
    this.route.data.subscribe(routerDate => {
      const data = routerDate.data;
      if (data) {
        this.houses = data.house;
      }
    });
    this.houseSelected.emit(id);
}


}
