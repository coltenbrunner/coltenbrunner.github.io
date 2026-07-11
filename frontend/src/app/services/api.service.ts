import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/assets/data/projects.json');
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>('/assets/data/experience.json');
  }
}
