export interface Project {
  id: number;
  title: string;
  description: string;
  /** Optional link to a public implementation; omitted while work is unpublished. */
  github?: string;
}
