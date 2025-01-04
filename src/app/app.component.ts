import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { HeroComponent } from "./features/hero/hero.component";
import { CTAComponent } from "./features/cta/cta.component";
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { ScrollService } from './shared/services/scroll.service';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, CTAComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private touchStartY: number = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _scrollService: ScrollService
  ) { }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this._scrollService.sections = Array.from(document.querySelectorAll('.section'));
    }
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      this._scrollService.scrollToNextSection();
    } else {
      this._scrollService.scrollToPreviousSection();
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const touchEndY = event.changedTouches[0].clientY;

    if (this.touchStartY - touchEndY > 50) {
      this._scrollService.scrollToNextSection();
    } else if (touchEndY - this.touchStartY > 50) {
      this._scrollService.scrollToPreviousSection();
    }
  }

}
