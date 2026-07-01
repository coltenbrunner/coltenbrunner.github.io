import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  school: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  gpa?: string;
  note?: string;
  honors: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  education: Education[] = [
    {
      school: 'Purdue University',
      degree: 'Ph.D., Computer Science',
      location: 'West Lafayette, IN',
      start: 'Aug 2024',
      end: 'Present',
      gpa: '3.93',
      note: 'Freedom Research Lab, advised by Prof. Aniket Kate — secure multiparty computation and asynchronous distributed protocols.',
      honors: ['Presidential Fellowship'],
    },
    {
      school: 'University of Illinois Urbana–Champaign',
      degree: 'B.S., Computer Engineering',
      location: 'Champaign, IL',
      start: 'Aug 2020',
      end: 'May 2024',
      gpa: '3.79',
      note: 'Concentration in cryptography and computer security.',
      honors: ['James Scholar', 'Graduated with Honors', 'Eta Kappa Nu', "Dean's List"],
    },
  ];
}
