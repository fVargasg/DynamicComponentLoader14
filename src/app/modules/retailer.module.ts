import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../components/users/users.component';
import { BaseModule } from './base.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule
  ]
})
export class RetailerModule extends BaseModule {
  DynamicComponents = [UsersComponent];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
 }
