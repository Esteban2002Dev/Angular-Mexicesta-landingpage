import { Component } from '@angular/core';
import { BackgroundComponent } from "../../shared/components/background/background.component";

@Component({
  selector: 'app-hero',
  imports: [BackgroundComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {

}
