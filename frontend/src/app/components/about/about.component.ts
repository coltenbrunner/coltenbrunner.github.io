import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  // TODO: replace with real education entries
  education = [
    { degree: 'B.S. Computer Science', school: 'University Name', year: '20XX' },
  ];
}
