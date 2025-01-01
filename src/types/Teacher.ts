export interface Teacher {
    IdTeacher?: number;
    FirstName: string;
    LastName: string;
    Phone?: string;
    Description: string;
    Mail?: string;
    BirthDate?: string;
    WorkExperiences: WorkExperience[]; 
    TeachingExperiences: ExperienceTeacher[]; 
    ThesisAdvisingExperiences: ExperienceThesisAdvisor[];
  }
  
  export interface WorkExperience {
    Id?: number;
    Institution: string;
    Job: string;
    JobDescription: string;
    JobIDI: string;
    StartDate: string;
    EndDate?: string;
  }
  
  export interface ExperienceTeacher {
    Id?: number;
    Institution: string;
    InstitutionType: string;
    TeacherType: string;
    JobDescription: string;
    StartDate: string;
    EndDate?: string;
  }
  
  export interface ExperienceThesisAdvisor {
    Id?: number;
    University: string;
    Thesis: string;
    ThesisStudent: string;
    Repository: string;
    ThesisAcceptanceDate: string;
  }
  