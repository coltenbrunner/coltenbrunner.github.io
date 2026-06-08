import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  private api = inject(ApiService);
  projects: Project[] = [];
  showAll = false;

  private static fallback: Project[] = [
    { id: 1, title: 'Project One', description: 'Short description of what this project does.', tech: ['Angular', 'Node.js', 'MongoDB'], image: '', github: 'https://github.com/coltenbrunner', demo: '', featured: true },
    { id: 2, title: 'Project Two', description: 'Short description of what this project does.', tech: ['Python', 'Flask', 'PostgreSQL'], image: '', github: 'https://github.com/coltenbrunner', demo: '', featured: true },
    { id: 3, title: 'Project Three', description: 'Short description of what this project does.', tech: ['React', 'Express', 'Redis'], image: '', github: 'https://github.com/coltenbrunner', demo: '', featured: false },
  ];

  ngOnInit(): void {
    this.api.getProjects().subscribe({
      next: data => (this.projects = data),
      error: () => (this.projects = ProjectsComponent.fallback),
    });
  }

  get visibleProjects(): Project[] {
    return this.showAll ? this.projects : this.projects.filter(p => p.featured);
  }
}
