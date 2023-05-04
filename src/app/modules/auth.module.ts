import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from './base.module';
import { LoginComponent } from '../components/auth/login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule extends BaseModule {
  DynamicComponents = [LoginComponent];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
