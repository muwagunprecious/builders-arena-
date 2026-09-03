export interface Track {
  id: string;
  name: string;
  emoji: string;
  shortDesc: string;
  fullDesc: string;
  color: string;
  borderColor: string;
  lightBg: string;
  buildAround: string[];
  sampleProblems: string[];
  recommendedTools: string[];
  ctaText: string;
  imageUrl?: string;
}

export interface TimelineStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ScheduleDay {
  dayTitle: string;
  subTitle: string;
  activities: {
    time: string;
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface BuilderProfile {
  id: string;
  name: string;
  role: string;
  category: 'lead' | 'organizer' | 'mentor' | 'judge' | 'speaker';
  organization?: string;
  bio: string;
  avatarUrl?: string;
  skills: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  badge?: string;
}

export interface SponsorTier {
  name: string;
  price: string;
  subtitle?: string;
  isPopular?: boolean;
  isTitle?: boolean;
  benefits: string[];
  cta: string;
  ctaClass: string;
}

export interface FinalistTeam {
  id: string;
  teamCode: string;
  name?: string;
  track?: string;
  membersCount: number;
  status: 'Selected' | 'Building' | 'Finalist';
}

export interface RegistrationFormData {
  teamName: string;
  track: string;
  teamLeadName: string;
  teamLeadEmail: string;
  teamLeadPhone: string;
  university: string;
  department: string;
  memberCount: number;
  members: {
    name: string;
    email: string;
    role: string;
  }[];
  githubPortfolio: string;
  projectIdea: string;
  whySelected: string;
}
