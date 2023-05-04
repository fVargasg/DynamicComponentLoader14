import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from './base.module';
import { SalesComponent } from '../components/sales/sales/sales.component';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule
  ]
})
export class SalesModule extends BaseModule {
  DynamicComponents = [SalesComponent];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
  
 }
