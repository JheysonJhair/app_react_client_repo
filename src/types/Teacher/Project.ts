export interface ProjectFormData {
  id?:number;
  title: string;
  authors: string;
  year: string;
  description: string;
  file: File | null;
}
