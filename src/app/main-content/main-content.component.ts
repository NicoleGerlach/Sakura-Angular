import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { FindUsAtComponent } from './find-us-at/find-us-at.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule,
    LandingPageComponent,
    OurMenuComponent,
    HowToOrderComponent,
    FindUsAtComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
