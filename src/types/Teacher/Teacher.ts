export interface ProfileTeacher {
  id?: String;
  firstName: string;
  lastName: string;
  dni: string;
  school: number;
  mail: string;

  orcid?: string;
  scopus?: string;
  concytec: string;
  registrationCode?: string;

  description: string;
  image: string;
  password: string;

  linkedIn?: string;
  facebook?: string;
}

export interface ProfileTeacherRegister extends ProfileTeacher {
  confirmPassword: string;
}
