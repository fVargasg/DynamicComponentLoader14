import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentConfigData } from 'src/app/injectors/classes/compConfigData';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(public configdata: ComponentConfigData, private commonService: CommonService) { }
  

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.commonService.removeElementFromDom('usersSelector');
  }

}
