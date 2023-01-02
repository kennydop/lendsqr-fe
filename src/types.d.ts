export interface User {
  id: string;
  userName: string;
  email: string;
  password?: string;
  profile: UserProfile;
  phoneNumber: string;
  createdAt: string;
  orgName: string;
  lastActiveDate: string;
  guarantor: UserProfile;
  accountBalance: string;
  accountNumber: string;
  status?: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: UserEducation;
}

interface UserEducation {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar?: string;
  gender: string;
  bvn?: string;
  address: string;
  currency?: string;
  email?: string;
}
