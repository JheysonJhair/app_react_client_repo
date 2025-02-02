export interface ProjectFormData {
  id?: number;
  title: string;
  authors: string;
  description: string;
  summary: string;
  year: string;
  doi: string;
  editor: string;
  file: File | null;
  idTeacher?: string;
}

export interface ProjectGetAll {
  id?: number;
  name: string;
  description: string;
  summary: string;
  date: string;
  doi: string;
  authors: string;
  pdf: string;
  editor: string;
}
