import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from './base.module';
import { AnnouncementsComponent } from '../components/dashboard/announcements/announcements.component';
import { DashboardComponent } from '../components/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent, AnnouncementsComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule extends BaseModule {
  DynamicComponents = [DashboardComponent, AnnouncementsComponent];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
 }
