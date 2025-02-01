export interface ExperienceLaboral {
  id?: number;
  institution: string;
  Charge: string;
  descriptionJob: string;
  idiCharge: string;
  startDate: string;
  endDate: string;
}

export interface ExperienceLaboralDocente {
  id?: number;
  institution: string;
  typeInstitution: number;
  typeTeacher: number;
  descriptionJob: string;
  startDate: string;
  endDate: string;
}

export interface ExperienceTesis {
  id?: number;
  university: string;
  thesis: string;
  thesisStudent: string;
  repository: string;
  acceptanceDate: string;
}
