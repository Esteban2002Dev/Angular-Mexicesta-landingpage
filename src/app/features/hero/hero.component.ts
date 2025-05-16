import { Component } from '@angular/core';
import { BackgroundComponent } from "../../shared/components/background/background.component";
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-hero',
  imports: [BackgroundComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  constructor(
    private _scrollService: ScrollService,
  ) {}


  public scrollToSection(sectionId: string): void {
    this._scrollService.scrollToSectionById(sectionId);
  }
}
