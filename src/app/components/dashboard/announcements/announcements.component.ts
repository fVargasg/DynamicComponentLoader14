import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentConfigData } from 'src/app/injectors/classes/compConfigData';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styles: [':host { width: 49.5%; display: flex; float: left; flex-direction: column; margin-right: .5%}']
})
export class AnnouncementsComponent implements OnInit, OnDestroy {

  constructor(public configdata: ComponentConfigData, private commonService: CommonService) { } // this is the class that we are injecting into this component.
  

  ngOnInit(): void {
    console.log(this.configdata.Config)
    console.log(Array(this.configdata.Data));
  }

  ngOnDestroy(): void {
    this.commonService.removeElementFromDom('anComponentCss');
  }

}
