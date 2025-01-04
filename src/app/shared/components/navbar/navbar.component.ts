import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isMenuOpen = false;

  constructor(
    private _scrollService: ScrollService,
  ) { }

  public scrollToSection(sectionId: string): void {
    this._scrollService.scrollToSectionById(sectionId);
  }

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
