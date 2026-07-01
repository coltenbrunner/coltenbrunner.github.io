export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  category?: string; // 'Research' | 'Teaching' | 'Industry' — used to group the timeline
}
