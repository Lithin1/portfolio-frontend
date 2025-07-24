export interface ExperienceType {
  _id: string;
  company: string;
  role: string;
  designation: string;
  location: string;
  description?: string;
  startDate: string;
  endDate: string;
  techUsed: string[];
  logo?: string;
  createdAt: string;
  updatedAt: string;
}
