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
  experience: Experience[] = [];

  // Fallback static data — used until backend experience route is added
  private static fallback: Experience[] = [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Company Name',
      location: 'City, ST',
      start: 'Jan 2024',
      end: 'Present',
      bullets: [
        'Describe a key responsibility or achievement here.',
        'Quantify impact where possible (e.g., reduced latency by 30%).',
        'Highlight technologies used.',
      ],
    },
    {
      id: 2,
      role: 'Software Engineer Intern',
      company: 'Company Name',
      location: 'City, ST',
      start: 'May 2023',
      end: 'Aug 2023',
      bullets: [
        'Describe a key responsibility or achievement here.',
        'Highlight technologies used.',
      ],
    },
  ];

  ngOnInit(): void {
    this.api.getExperience().subscribe({
      next: data => (this.experience = data),
      error: () => (this.experience = ExperienceComponent.fallback),
    });
  }
}
