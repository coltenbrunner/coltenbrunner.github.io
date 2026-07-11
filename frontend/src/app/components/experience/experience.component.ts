import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  private api = inject(ApiService);
  all: Experience[] = [];

  get research(): Experience[] { return this.all.filter(e => e.type === 'research'); }
  get teaching(): Experience[] { return this.all.filter(e => e.type === 'teaching'); }
  get work():     Experience[] { return this.all.filter(e => e.type === 'work'); }

  ngOnInit(): void {
    this.api.getExperience().subscribe({
      next: data => (this.all = data),
      error: () => (this.all = []),
    });
  }
}
