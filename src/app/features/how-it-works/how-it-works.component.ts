import { Component } from '@angular/core';
import { BackgroundComponent } from "../../shared/components/background/background.component";
import { IDescription } from '../data/interfaces/description.interface';

@Component({
  selector: 'app-how-it-works',
  imports: [BackgroundComponent],
  templateUrl: './how-it-works.component.html',
})
export class HowItWorksComponent {
  public steps: IDescription[] = [
    {
      title: "Start your cart with just one click.",
      description:
        'Thanks to our optimized UX/UI design, the "Create Cart" button is easy to spot and even easier to use. Begin organizing your items instantly and manage everything effortlessly.'
    },
    {
      title: "Add items in seconds.",
      description:
        "Our intuitive interface makes it easy to enter item names, quantities, and descriptions without friction. Stay organized and in control—no extra steps, just smooth, efficient input."
    },
    {
      title: "Track progress with ease.",
      description:
        "Once your cart is saved, simply slide to update the status of each item. Mark them as completed and instantly add a price—seamless interaction designed for effortless control."
    }
  ];
}
