import { Component } from '@angular/core';
import { BackgroundComponent } from "../../shared/components/background/background.component";
import { IDescription } from '../data/interfaces/description.interface';

@Component({
  selector: 'app-cta',
  imports: [BackgroundComponent],
  templateUrl: './cta.component.html',
})
export class  CTAComponent {
  public descriptions: IDescription[] = [
    {
      title: 'Easy to Use and Navigate',
      description: `Mexicesta's interface is designed to be simple and smooth, making browsing through your shopping carts quick and effortless.`
    },
    {
      title: 'Customize Your Experience',
      description: `Adapt the app's design to your taste by choosing gradient colors that fit your personal style.`
    },
    {
      title: 'Easily Organize Your Shopping',
      description: 'Create and manage multiple carts with an unlimited number of items. Keep track of everything you need to buy in an efficient way.'
    },
    {
      title: 'Always With You, Even Offline',
      description: 'Mexicesta works offline, allowing you to create and manage shopping carts anytime, anywhere, without worrying about connectivity.'
    },
  ];
}
