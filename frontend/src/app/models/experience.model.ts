export interface Experience {
  id: number;
  type: 'research' | 'teaching' | 'work';
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  category?: string; // 'Research' | 'Teaching' | 'Industry' — used to group the timeline
}
