import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { HeroComponent } from "./features/hero/hero.component";
import { CTAComponent } from "./features/cta/cta.component";
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [HeroComponent, CTAComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private sections: HTMLElement[] = [];
  private currentSectionIndex: number = 0;
  private touchStartY: number = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.sections = Array.from(document.querySelectorAll('.section'));
    }
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.scrollToNextSection();
    } else {
      this.scrollToPreviousSection();
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
      this.scrollToNextSection();
    } else if (touchEndY - this.touchStartY > 50) {
      this.scrollToPreviousSection();
    }
  }

  private scrollToNextSection() {
    if (this.currentSectionIndex < this.sections.length - 1) {
      this.currentSectionIndex++;
      this.scrollToSection(this.currentSectionIndex);
    }
  }

  private scrollToPreviousSection() {
    if (this.currentSectionIndex > 0) {
      this.currentSectionIndex--;
      this.scrollToSection(this.currentSectionIndex);
    }
  }

  private scrollToSection(index: number) {
    const section = this.sections[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
