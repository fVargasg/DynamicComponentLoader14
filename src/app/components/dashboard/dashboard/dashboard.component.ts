import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentConfigData } from 'src/app/injectors/classes/compConfigData';
import { Configuration } from 'src/app/injectors/classes/configuration';
import { MultipleComponents } from 'src/app/injectors/classes/multiplecomponents';
import { Styles } from 'src/app/injectors/classes/styles';
import { ModuleEnumType } from 'src/app/modules/moduleenumtype';
import { CommonService } from 'src/app/services/common.service';
import { ComponentsloaderService } from 'src/app/services/componentsloader.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild("dashboardcontainer", { read: ViewContainerRef, static: true }) dashboardcontainer!: ViewContainerRef;
  loadComponentToDashboardContainer!: Subscription;
  
  constructor(private componentLoaderService: ComponentsloaderService, private commonService: CommonService, private dataService: DataService, public configdata: ComponentConfigData, public elem: ElementRef) { }

  ngOnInit(): void {

    this.loadComponentToDashboardContainer = this.componentLoaderService.toDashboardContainer.subscribe(componentRef => {
      if(componentRef !== undefined) {
        this.dashboardcontainer.clear();
        this.dashboardcontainer.insert(componentRef.hostView);
      } else {
        alert('Review the component name.')
      }
      
    });

    this.getDashboard();
    
    // console.log(this.elem.nativeElement.tagName)
    // let d = document.getElementsByTagName('app-announcements')
    //d[0].style 
    //console.log(d[0])
  }

  ngOnDestroy(): void {
    this.commonService.removeElementFromDom('dashboardSelector');
    this.loadComponentToDashboardContainer.unsubscribe();
  }

  getDashboard() {
    this.dashboardcontainer.clear();
    let componentNames: string[] = ['Announcements', 'Sales'];
    let componentModules: ModuleEnumType[] = [ModuleEnumType.DASHBOARD, ModuleEnumType.SALES];
    let componentStyles: Styles[] = [new Styles('anComponentCss', this.dataService.getAnCss()), new Styles('salesCss', this.dataService.getSalesCss())];
      
    let componentConfigData: ComponentConfigData[] = [new ComponentConfigData(new Configuration(true, 'Announcements', true), { numberArray: [1,2,3,4,5,6,7] }), 
                                                      new ComponentConfigData(new Configuration(true, 'Sales', true), { numberArray: [1,2,3,4,5,6,7,8,9,10] })];

    let multiple = new MultipleComponents();
    multiple.ComponentNames = componentNames;
    multiple.ComponentModules = componentModules;
    multiple.ComponentStyles = componentStyles;
    multiple.ComponentConfugurationData = componentConfigData;

    this.componentLoaderService.loadMultipleComponents(multiple).forEach(componentRef => {
      this.dashboardcontainer.insert(componentRef.hostView);
    });
  }

  signOut() {
    localStorage.setItem('IsAuthenticated', 'false');
    this.dashboardcontainer.clear();
    location.reload();
  }

}
