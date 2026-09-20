import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Poster {
  venue: string;
  where: string;
  when: string;
  summary: string;
}

interface Attendance {
  event: string;
  where: string;
  when: string;
}

@Component({
  selector: 'app-talks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss'],
})
export class TalksComponent {
  posters: Poster[] = [
    {
      venue: 'CERIAS Security Symposium',
      where: 'Purdue University',
      when: 'Spring 2026',
      summary: 'Game-theoretic mechanisms to deter collusion in secure multiparty computation.',
    },
    {
      venue: 'Jump Arches Symposium',
      where: 'Peoria, IL',
      when: 'Sep 2022',
      summary:
        'Decentralized systems research, presented at the 9th Health Care Engineering Systems Symposium.',
    },
  ];

  attended: Attendance[] = [
    {
      event: 'Consensus Workshop',
      where: 'Columbia University',
      when: 'Spring 2026',
    },
    {
      event: 'Science of Blockchain Conference (SBC)',
      where: 'University of California, Berkeley',
      when: 'Aug 2025',
    },
  ];
}
