import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public sections: HTMLElement[] = [];
  public currentSectionIndex: number = 0;

  constructor() { }

  public scrollToNextSection() {
    if (this.currentSectionIndex < this.sections.length - 1) {
      this.currentSectionIndex++;
      this.scrollToSection(this.currentSectionIndex);
    }
  }

  public scrollToPreviousSection() {
    if (this.currentSectionIndex > 0) {
      this.currentSectionIndex--;
      this.scrollToSection(this.currentSectionIndex);
    }
  }

  public scrollToSectionById(sectionId: string) {
    const index = this.sections.findIndex(section => section.id === sectionId);
    if (index !== -1) {
      this.currentSectionIndex = index;
      this.scrollToSection(index);
    }
  }

  private scrollToSection(index: number) {
    const section = this.sections[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
