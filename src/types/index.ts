export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    completed: string;
    location: string;
  }
  
  export interface LoanFormData {
    fullName: string;
    email: string;
    phone: string;
    loanAmount: number;
    purpose: string;
    employmentStatus: string;
    annualIncome: number;
    message: string;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }