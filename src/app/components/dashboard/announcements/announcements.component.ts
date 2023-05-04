import { Component, OnDestroy, OnInit, reflectComponentType } from '@angular/core';
import { ComponentConfigData } from 'src/app/injectors/classes/compConfigData';
import { CommonService } from 'src/app/services/common.service';
import { style, transition, trigger, animate, state } from '@angular/animations';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  host: { class: 'announcements-host-class'},
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(500, style({opacity: 1}))
      ]) 
    ])
    // trigger('flyInOut', [
    //   state('in', style({ transform: 'translateX(0)' })),
    //   transition('void => *', [
    //     style({ transform: 'translateX(-100%)' }),
    //     animate(100)
    //   ]),
    //   transition('* => void', [
    //     animate(100, style({ transform: 'translateX(100%)' }))
    //   ])
    //])
  ]
  //styleUrls: ['./announcements.component.css'],
  //styles: [':host { width: 49.5%; float: left; display: flex; flex-direction: column; margin-left: .5%}']
})
export class AnnouncementsComponent implements OnInit, OnDestroy {
  constructor(public configdata: ComponentConfigData, private commonService: CommonService) { } // this is the class that we are injecting into this component.
  

  ngOnInit(): void {
    // const metadata = reflectComponentType(AnnouncementsComponent);
    // const selector = metadata?.selector
    // console.log(metadata?.type?.name)
    console.log(this.configdata.Config)
    console.log(Array(this.configdata.Data));
  }

  ngOnDestroy(): void {
    this.commonService.removeElementFromDom('anComponentCss');
  }

}
