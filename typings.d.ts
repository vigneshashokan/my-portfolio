export type Logo = {
  src: string;
  alt?: string;
};

export type Icon = [string, JSX.Element];

export type Experience = {
  companyName: string;
  companyLogo: Logo;
  position: string;
  techStack: [string];
  techLogos: [Logo];
  period: string;
  jobDuties: [string];
};
