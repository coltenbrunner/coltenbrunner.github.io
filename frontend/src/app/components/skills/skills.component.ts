import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  // TODO: replace with your actual skills
  skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'HTML/CSS'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Angular', 'React', 'Node.js', 'Express', 'Flask', 'Spring Boot'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Linux'],
    },
    {
      category: 'Concepts',
      skills: ['REST APIs', 'CI/CD', 'Agile', 'TDD', 'Microservices', 'System Design'],
    },
  ];
}
