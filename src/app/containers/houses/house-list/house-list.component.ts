import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'sdk-v1/models/House';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers/app.reducer';
import { ActivatedRoute } from '@angular/router';
import { GetHouses } from 'src/app/store/actions/house.action';
import { selectHouseList } from 'src/app/store/selectors/house.selector';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  houses$: Observable<House[]>;
  constructor(private store: Store<IAppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(new GetHouses());
    this.houses$ = this.store.pipe(select(selectHouseList));
  }

  navToSelectedHouse() {
    this.route.data.subscribe(routerDate => {
      const data = routerDate.data;
      if (data) {
        this.houses$ = data.house;
      }
    });
}
}
