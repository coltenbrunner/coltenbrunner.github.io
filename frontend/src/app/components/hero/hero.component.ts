import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedTitle = '';
  private titles = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver'];
  private titleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  scrollToAbout(): void {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProjects(): void {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  private type(): void {
    const current = this.titles[this.titleIndex];

    if (!this.deleting) {
      this.displayedTitle = current.slice(0, ++this.charIndex);
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 2000);
        return;
      }
    } else {
      this.displayedTitle = current.slice(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.deleting = false;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      }
    }

    this.timer = setTimeout(() => this.type(), this.deleting ? 60 : 100);
  }
}
