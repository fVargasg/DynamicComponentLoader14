import { ComponentFactory, ComponentFactoryResolver, Type } from "@angular/core";

export abstract class BaseModule {
  private componentToFactoryMap!: { [key: string]: ComponentFactory<any>; };
  protected abstract DynamicComponents: Type<any>[]; 

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Check if the component exists in the module array declaration or in the DynamicComponents array declaration and return a component factory with the type of the component.
   * @param componentName string
   * @returns ComponentFactory<any>
   */
  public getComponentFactory(componentName: string): ComponentFactory<any> {
    if (!this.componentToFactoryMap) {
      this.componentToFactoryMap = {};
      let comp = this.DynamicComponents.filter(c => c.name === componentName)[0];
      if(comp !== undefined) {
        const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(comp);
        this.componentToFactoryMap[componentFactory.componentType.name] = componentFactory;
      } else {
        throw new Error('Component ' + componentName + ' does not exists in the Module array declaration or in the DynamicComponents array declaration or the component name is incorrect (Check the spelling component name).');
      }
    }
    return this.componentToFactoryMap[componentName];
  }

}

