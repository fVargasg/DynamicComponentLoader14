import { Component, ComponentRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ComponentConfigData } from 'src/app/injectors/classes/compConfigData';
import { Configuration } from 'src/app/injectors/classes/configuration';
import { Styles } from 'src/app/injectors/classes/styles';
import { ModuleEnumType } from 'src/app/modules/moduleenumtype';
import { CommonService } from 'src/app/services/common.service';
import { ComponentsloaderService } from 'src/app/services/componentsloader.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  
  constructor(private componentLoaderService: ComponentsloaderService, private commonService: CommonService, private dataService: DataService, public configdata: ComponentConfigData) { } // this is the class that we are injecting into this component.
  

  ngOnInit(): void {
    console.log(this.configdata.Config)
    console.log(Array(this.configdata.Data));
  }

  ngOnDestroy(): void {
    this.commonService.removeElementFromDom('loginComponentCss');
  }

  login() {
    localStorage.setItem('IsAuthenticated', 'true');
    this.componentLoaderService.loadComponentToParentContainer('Dashboard', new Styles('dashboardSelector', this.dataService.getDashCss()), ModuleEnumType.DASHBOARD,
                                                                            new ComponentConfigData(new Configuration(), { numberArray: [1,2,3,4,5] }));
  }

  removeCss() {
    document.getElementById('loginComponentCss')?.remove();
  }

}
