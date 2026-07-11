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

  ngOnInit(): void {
    this.api.getProjects().subscribe({
      next: data => (this.projects = data),
      error: () => (this.projects = []),
    });
  }
}
