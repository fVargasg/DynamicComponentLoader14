import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentConfigData } from 'src/app/injectors/classes/compConfigData';
import { Configuration } from 'src/app/injectors/classes/configuration';
import { Styles } from 'src/app/injectors/classes/styles';
import { ModuleEnumType } from 'src/app/modules/moduleenumtype';
import { CommonService } from 'src/app/services/common.service';
import { ComponentsloaderService } from 'src/app/services/componentsloader.service';
import { DataService } from 'src/app/services/data.service';
import { style, transition, trigger, animate, state } from '@angular/animations';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  host: { class: 'sales-host-class'},
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(500, style({opacity: 1}))
      ]) 
    ])
  ]
  //styles: [':host { width: 49.5%; float: left; display: flex; flex-direction: column; margin-left: .5%}']
})
export class SalesComponent implements OnInit, OnDestroy {

  constructor(public configdata: ComponentConfigData, private commonService: CommonService, private dataService: DataService, private componentLoaderService: ComponentsloaderService,) { } // this is the class that we are injecting into this component.

  ngOnInit(): void {
    console.log(this.configdata.Config)
    console.log(Array(this.configdata.Data));
  }

  ngOnDestroy(): void {
    this.commonService.removeElementFromDom('salesCss');
  }

  openUsersComponent() {
    this.componentLoaderService.loadComponentToDashboardContainer('Users', new Styles('usersSelector', this.dataService.getUsersCss()), ModuleEnumType.RETAILERS,
                                                                            new ComponentConfigData(new Configuration(true, 'Users', true), { numberArray: [1,2,3,4,5] }));
  }

}
