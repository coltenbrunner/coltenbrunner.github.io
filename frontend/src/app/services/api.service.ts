import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  // TODO: sign up at formspree.io, create a form, and paste your form ID here
  private formspreeId = 'YOUR_FORMSPREE_ID';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/assets/data/projects.json');
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>('/assets/data/experience.json');
  }

  sendContact(payload: { name: string; email: string; subject: string; message: string }): Observable<{ ok: boolean }> {
    const headers = new HttpHeaders({ Accept: 'application/json' });
    return this.http.post<{ ok: boolean }>(
      `https://formspree.io/f/${this.formspreeId}`,
      payload,
      { headers }
    );
  }
}
