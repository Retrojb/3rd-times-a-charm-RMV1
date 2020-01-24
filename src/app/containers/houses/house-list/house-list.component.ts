import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'sdk-v1/models/House';
import { IAppState } from 'src/app/store/reducers/app.reducer';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectHouseList } from 'src/app/store/selectors/house.selector';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  houses$ = this.store.pipe(select(selectHouseList));

  constructor(private store: Store<IAppState>,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  navToHouse(id){
    this.router.navigate(['houses', id]);
    // this.route.data.subscribe(routerDate => {
    //   const data = routerDate.data;
    //   if (data) {
    //     this.houses$ = data.house;
    //   }
    // });
  }
}
