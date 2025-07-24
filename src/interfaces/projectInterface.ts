export interface IProject {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveDemoLink?: string;
  images: string[];
  status: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}