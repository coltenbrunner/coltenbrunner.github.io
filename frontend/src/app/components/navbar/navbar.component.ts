import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  theme = inject(ThemeService);
  scrolled = false;
  menuOpen = false;

  // Résumé is kept private for now. Flip to true (and add assets/resume.pdf) to show it.
  showResume = false;

  navLinks = [
    { label: 'About',      anchor: 'about' },
    { label: 'Education',  anchor: 'education' },
    { label: 'Experience', anchor: 'experience' },
    { label: 'Projects',   anchor: 'projects' },
    { label: 'Skills',     anchor: 'skills' },
    { label: 'Contact',    anchor: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  scrollTo(anchor: string): void {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }
}
