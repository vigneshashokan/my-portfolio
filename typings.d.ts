export interface Logo {
  src: string;
  alt: string;
}

export interface Experience {
  id: string;
  companyName: string;
  companyLogo: Logo;
  position: string;
  techLogos: [Logo];
  period: string;
  jobDuties: [string];
}
