export type Logo = {
  src: string;
  alt?: string;
};

export type Experience = {
  companyName: string;
  companyLogo: Logo;
  position: string;
  techLogos: [Logo];
  period: string;
  jobDuties: [string];
};
