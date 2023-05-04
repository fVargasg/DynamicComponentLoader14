import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentConfigData } from 'src/app/injectors/classes/compConfigData';
import { CommonService } from 'src/app/services/common.service';
import { style, transition, trigger, animate, state } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(500, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(public configdata: ComponentConfigData, private commonService: CommonService) { }
  
  ngOnInit(): void {
    console.log(this.configdata.Config)
    console.log(Array(this.configdata.Data));
  }

  ngOnDestroy(): void {
    this.commonService.removeElementFromDom('usersSelector');
  }

}
