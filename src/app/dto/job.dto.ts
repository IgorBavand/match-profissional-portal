export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  contractType: string;
  salary: string;
  seniority: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  company: {
    id: string;
    name: string;
    cnpj: string;
    email: string;
    password: string;
    businessArea: string;
    createdAt: string;
    updatedAt: string;
  };
  applications: any[];
}
