import { ComponentRef, Injectable, Injector, createNgModule, ComponentFactory } from '@angular/core';
import { AuthModule } from '../modules/auth.module';
import { BaseModule } from '../modules/base.module';
import { DataConfigurationInjector } from '../injectors/dataconfigurationInjector';
import { ComponentConfigData } from '../injectors/classes/compConfigData';
import { Styles } from '../injectors/classes/styles';
import { CommonService } from './common.service';
import { ModuleEnumType } from '../modules/moduleenumtype';
import { DashboardModule } from '../modules/dashboard.module';
import { MultipleComponents } from '../injectors/classes/multiplecomponents';
import { Subject } from 'rxjs';
import { SalesModule } from '../modules/sales.module';
import { RetailerModule } from '../modules/retailer.module';

@Injectable({
  providedIn: 'root'
})
export class ComponentsloaderService {

  constructor(private injector: Injector, private commonService: CommonService) { }

  private ToParentContainer = new Subject<ComponentRef<unknown>>();
  // observable
  toParentContainer = this.ToParentContainer.asObservable();
    
  loadComponentToParentContainer(componentName: string, styles: Styles, moduleEnumType: ModuleEnumType, configData: ComponentConfigData | undefined) {
    this.ToParentContainer.next(this.loadComponent(componentName, styles, moduleEnumType, configData));
  }

  private ToDashboardContainer = new Subject<ComponentRef<unknown>>();
  // observable
  toDashboardContainer = this.ToDashboardContainer.asObservable();
    
  loadComponentToDashboardContainer(componentName: string, styles: Styles, moduleEnumType: ModuleEnumType, configData: ComponentConfigData | undefined) {
    this.ToDashboardContainer.next(this.loadComponent(componentName, styles, moduleEnumType, configData));
  }

  /**
   * Load a component dynamically by name from the specific Module provided and inject this component into the DOM using a ViewContainerRef in the host component.
   * @param componentName (Required) string => Has to be the component name without the word Component. Example: For LoginComponent is "Login" only.
   * @param styles (Required) typeof Styles => Css for the specific component.
   * @param moduleEnumType (Required) typeof ModuleEnumType => Represent the module where the component is declared.
   * @param configData (Optional) typeof ComponentConfigData | undefined => Configuration and data to be injected in the component. Note: Data can be anything.
   * @returns ComponentRef<unknown>
   */
  loadComponent(componentName: string, styles: Styles, moduleEnumType: ModuleEnumType, configData: ComponentConfigData | undefined) : ComponentRef<unknown> {
    
    this.commonService.injectCssIntoDom(styles.IdElement, styles.Css);
    const map = new WeakMap();
    map.set(ComponentConfigData, configData);

    let module = undefined;

    switch (moduleEnumType) {

      case ModuleEnumType.AUTH:
        module = createNgModule(AuthModule, this.injector);
        break;
      case ModuleEnumType.DASHBOARD:
        module = createNgModule(DashboardModule, this.injector);
        break;
      case ModuleEnumType.SALES:
        module = createNgModule(SalesModule, this.injector);
        break;
      case ModuleEnumType.RETAILERS:
        module = createNgModule(RetailerModule, this.injector);
        break;

    }

    let component: ComponentFactory<any>;
    let componentRef: ComponentRef<unknown>;
    if (module?.instance instanceof BaseModule) {

      component = module.instance.getComponentFactory(componentName + 'Component');
      componentRef = component.create(new DataConfigurationInjector(module.injector, map));
        
    } else {
      throw new Error('Module should extend BaseModule to use "string" based component name.');
    }

    return componentRef;
  }

  /**
   * Load multiple components dynamically by name from the specific Modules provided and inject these components into the DOM using a ViewContainerRef in the host component.
   * @param multipleComponents (Required) typeof MultipleComponents => To use this class you have to provide:
   * @example 
   *let componentNames: string[] = ['Login', 'Announcements', 'Sales'];
    let componentModules: ModuleEnumType[] = [ModuleEnumType.AUTH, ModuleEnumType.DASHBOARD, ModuleEnumType.DASHBOARD];
    let componentStyles: Styles[] = [new Styles(idElement, css), new Styles(idElement, css), new Styles(idElement, css)];
      
    let componentConfigData: ComponentConfigData[] = [new ComponentConfigData(new Configuration(true, 'Login', true), { numberArray: [1,2,3,4,5] }),
                                                        new ComponentConfigData(new Configuration(true, 'Announcements', true), { numberArray: [1,2,3,4,5,6,7] }), 
                                                        new ComponentConfigData(new Configuration(true, 'Sales', true), { numberArray: [1,2,3,4,5,6,7,8,9,10] })];

    let multiple = new MultipleComponents();
    multiple.ComponentNames = componentNames;
    multiple.ComponentModules = componentModules;
    multiple.ComponentStyles = componentStyles;
    multiple.ComponentConfugurationData = componentConfigData;

    this.componentLoaderService.loadMultipleComponents(multiple)
   * @returns Array<ComponentRef<unknown>>
   */
  loadMultipleComponents(multipleComponents: MultipleComponents) : Array<ComponentRef<unknown>> {

    let componentRefArray: Array<ComponentRef<unknown>> = [];

    for (let index = 0; index < multipleComponents.ComponentNames.length; index++) {

      this.commonService.injectCssIntoDom(multipleComponents.ComponentStyles[index].IdElement, multipleComponents.ComponentStyles[index].Css);

      let map = new WeakMap();
      map.set(ComponentConfigData, multipleComponents.ComponentConfugurationData[index]);

      let module = undefined;

      switch (multipleComponents.ComponentModules[index]) {

        case ModuleEnumType.AUTH:
          module = createNgModule(AuthModule, this.injector);
          break;
        case ModuleEnumType.DASHBOARD:
          module = createNgModule(DashboardModule, this.injector);
          break;
        case ModuleEnumType.SALES:
          module = createNgModule(SalesModule, this.injector);
          break;
        case ModuleEnumType.RETAILERS:
          module = createNgModule(RetailerModule, this.injector);
          break;
  
      }

      let component: ComponentFactory<any>;

      if (module?.instance instanceof BaseModule) {

        component = module.instance.getComponentFactory(multipleComponents.ComponentNames[index] + 'Component');
        componentRefArray.push(component.create(new DataConfigurationInjector(module.injector, map)));
          
      } else {
        throw new Error('Module should extend BaseModule to use "string" based component name.');
      }

      map.delete(ComponentConfigData);

    }

    return componentRefArray;

  }
}
