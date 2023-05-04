import { CommonService } from './services/common.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentsloaderService } from './services/componentsloader.service';
import { Configuration } from './injectors/classes/configuration';
import { ComponentConfigData } from './injectors/classes/compConfigData';
import { Styles } from './injectors/classes/styles';
import { ModuleEnumType } from './modules/moduleenumtype';
import { MultipleComponents } from './injectors/classes/multiplecomponents';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DynamicComponentLoader14';
  @ViewChild("container", { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  loadComponentToParentContainer!: Subscription;

  constructor(private componentLoaderService: ComponentsloaderService, private dataService: DataService) {}

  ngOnInit(): void {

    this.loadComponentToParentContainer = this.componentLoaderService.toParentContainer.subscribe(componentRef => {
      if(componentRef !== undefined) {
        this.container.clear();
        this.container.insert(componentRef.hostView);
      } else {
        alert('Review the component name.')
      }
      
    });

    let IsAuthenticated = localStorage.getItem('IsAuthenticated');

    if(IsAuthenticated === 'true') {

      
      // let componentNames: string[] = ['Login', 'Announcements', 'Sales'];
      // let componentModules: ModuleEnumType[] = [ModuleEnumType.AUTH, ModuleEnumType.DASHBOARD, ModuleEnumType.DASHBOARD];
      // let componentStyles: Styles[] = [new Styles(idElement, css), new Styles('anComponentCss', `.pAn {font-size: 30px; color: blue; text-align: center; margin-top: 30px}`), new Styles('salesComponentCss', `.pSales {font-size: 30px; color: red; text-align: center; margin-top: 30px}`)];
      
      // let componentConfigData: ComponentConfigData[] = [new ComponentConfigData(new Configuration(true, 'Login', true), { numberArray: [1,2,3,4,5] }),
      //                                                   new ComponentConfigData(new Configuration(true, 'Announcements', true), { numberArray: [1,2,3,4,5,6,7] }), 
      //                                                   new ComponentConfigData(new Configuration(true, 'Sales', true), { numberArray: [1,2,3,4,5,6,7,8,9,10] })];

      // let multiple = new MultipleComponents();
      // multiple.ComponentNames = componentNames;
      // multiple.ComponentModules = componentModules;
      // multiple.ComponentStyles = componentStyles;
      // multiple.ComponentConfugurationData = componentConfigData;

      // this.componentLoaderService.loadMultipleComponents(multiple).forEach(componentRef => {
      //   this.container.insert(componentRef.hostView);
      // });

      this.container.insert(this.componentLoaderService.loadComponent('Dashboard', 
                                                                      new Styles('dashboardSelector', this.dataService.getDashCss()), 
                                                                      ModuleEnumType.DASHBOARD,
                                                                      new ComponentConfigData(new Configuration(false, '', false), { numberArray: [1,2,3,4,5] })).hostView);
      
                                                             
    } else {
      // Assuming this info is coming from the database.
      let idElement = 'loginComponentCss';
      this.container.insert(this.componentLoaderService.loadComponent('Login', 
                                                                      new Styles(idElement, this.dataService.getLoginCss()), 
                                                                      ModuleEnumType.AUTH,
                                                                      new ComponentConfigData(new Configuration(true, 'Login', true), { numberArray: [1,2,3,4,5] })).hostView);
      
    }
  }

}
