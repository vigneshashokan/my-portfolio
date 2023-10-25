export const about = `I am a software engineer based of Vancouver, Canada, with over 8 years of experience building complex backend systems, APIs, user interfaces across the security, communication and incident management spaces.
I have always been a backend heavy full-stack engineer, and am looking to diversify and strengthen my skills on frontend side of things as well.
I'm a team player, adaptable, proactive and thrive on agile work environment.
On my spare time, I try update my knowledge in the ever evolving space of computer science.
Outside of work, I like to hike, ski & travel.`;

export const experiences = [
  {
    companyName: "Splunk",
    companyLogo: {
      src: "https://www.splunk.com/content/dam/splunk2/images/2020-splunk-planet.svg",
    },
    position: "Senior Software Engineer",
    techStack: [
      "java",
      "spring",
      "python",
      "golang",
      "terraform",
      "aws",
      "docker",
      "kubernetes",
    ],
    period: "January 2023 - Present",
    jobDuties: ["N/A"],
  },
  {
    companyName: "PagerDuty",
    companyLogo: {
      src: "https://www.pagerduty.com/wp-content/uploads/2022/03/Generic-PagerDuty-blog.png",
    },
    position: "Software Engineer III",
    techStack: ["elixir", "react", "redux", "css", "mysql", "aws", "datadog"],
    period: "June 2022 - January 2023",
    jobDuties: [
      "Implemented Status Updates Notification Templates API which enables the delivery of incident notifications to relevant stakeholders as custom rich text email",
      "Led & implemented user interface for Custom Fields on Incidents which enables the users to supplement the incident data with their own custom attributes per service",
    ],
  },
  {
    companyName: "Twilio",
    companyLogo: {
      src: "https://www.svgrepo.com/show/331615/twilio.svg",
    },
    position: "Software Engineer (L3)",
    techStack: [
      "golang",
      "terraform",
      "aws",
      "mysql",
      "snowflake",
      "buildkite",
      "splunk",
    ],
    period: "April 2022 - June 2022",
    jobDuties: [
      "Designed and implemented the migration of V1 segment data to the newer V2 segment format, resulting in the reduction of snowflake costs by 30% and improving the segmentation pipeline runtime by 10 folds",
      "Bar raiser and technical interviewer for Twilio’s hiring committees for levels L3 and lower",
    ],
  },
  {
    companyName: "Twilio",
    companyLogo: {
      src: "https://www.svgrepo.com/show/331615/twilio.svg",
    },
    position: "Software Engineer (L2)",
    techStack: [
      "golang",
      "terraform",
      "aws",
      "mysql",
      "snowflake",
      "buildkite",
      "splunk",
    ],
    period: "June 2019 - March 2022",
    jobDuties: [
      "Implemented a YACC parser to parse SQL as ASTs & validate for supported syntax, transform to valid snowflake SQLs and convert the SQLs to UI expressions to achieve segmentation of contacts; this includes the reverse translation of expressions from the UI to user readable SQL to return as API response",
      "Architected and implemented sample contacts generation pipeline as part of the contact segmentation service",
      "Developed APIs to manage email templates, campaigns, resource clean-up services for SOC/GDPR compliance as part of SendGrid’s Marketing Campaigns platform; this included design discussions with the product managers, design & implementation, testing and releasing the APIs with documentation to the end users",
    ],
  },
  {
    companyName: "Securonix",
    companyLogo: {
      src: "https://media.licdn.com/dms/image/D560BAQHOWaQd-NlCJQ/company-logo_200_200/0/1688373542815/securonix_logo?e=2147483647&v=beta&t=9YPE1-Su9RmJHzh4EFqwqwTUyS1mMYP9TZ0JSceeRGM",
    },
    position: "Senior Software Engineer",
    techStack: [
      "java",
      "python",
      "js",
      "groovy",
      "grails",
      "html",
      "css",
      "mysql",
    ],
    period: "April 2018 - June 2019",
    jobDuties: [
      "Architected and implemented parsing engines as well as redesigned existing ones for audit logs, increasing efficiency by a 50% to 60% reduction in parse time",
      "Implemented an orchestration framework for manual and auto-triggering response actions in the form of insight on activities/violators & remediation steps to manage violations and maintain cases for further investigation",
      "Led the integrations team for developing new & maintaining existing product and orchestration frameworks integrations",
      "Led client facing discussions for design & implementation of integrations; collaborated with developers from 3rd party vendors to develop integrations for the data ingestion pipeline",
    ],
  },
  {
    companyName: "Securonix",
    companyLogo: {
      src: "https://media.licdn.com/dms/image/D560BAQHOWaQd-NlCJQ/company-logo_200_200/0/1688373542815/securonix_logo?e=2147483647&v=beta&t=9YPE1-Su9RmJHzh4EFqwqwTUyS1mMYP9TZ0JSceeRGM",
    },
    position: "Software Engineer",
    techStack: [
      "java",
      "python",
      "js",
      "groovy",
      "grails",
      "html",
      "css",
      "mysql",
    ],
    period: "July 2015 - March 2018",
    jobDuties: [
      "Implemented multiple product integrations including but not limited to Tanium, Qualys, Google suite, etc. to pull audit logs, user/asset metadata, and security logs from external APIs as part of Securonix’s Snypr platform",
      "Redesigned and implemented Third Party Intelligence module to pull malware intelligence data, process and store them in data stores as part of Securonix’s threat search interface",
    ],
  },
];

export const projects = [
  {
    title: "This Website",
    imgSrc:
      "https://lh3.googleusercontent.com/pw/ADCreHd4WdixWZIdgkKdOOr7V3oPpZD9R7nsg4lPcZe0a96J5ayScmI5zcekpCwuGyb1p1KpQODjkEa7xLMJFEKM-AZImxtXe3rXAY5_j-3LaR-urrVc2fEv=w2400",
    description:
      "This website is a Next.js project created using React, tailwindcss & Framer Motion and deployed on Vercel",
  },
  {
    title: "This Website",
    imgSrc:
      "https://lh3.googleusercontent.com/pw/ADCreHd4WdixWZIdgkKdOOr7V3oPpZD9R7nsg4lPcZe0a96J5ayScmI5zcekpCwuGyb1p1KpQODjkEa7xLMJFEKM-AZImxtXe3rXAY5_j-3LaR-urrVc2fEv=w2400",
    description:
      "This website is a Next.js project created using React, tailwindcss & Framer Motion and deployed on Vercel",
  },
  {
    title: "This Website",
    imgSrc:
      "https://lh3.googleusercontent.com/pw/ADCreHd4WdixWZIdgkKdOOr7V3oPpZD9R7nsg4lPcZe0a96J5ayScmI5zcekpCwuGyb1p1KpQODjkEa7xLMJFEKM-AZImxtXe3rXAY5_j-3LaR-urrVc2fEv=w2400",
    description:
      "This website is a Next.js project created using React, tailwindcss & Framer Motion and deployed on Vercel",
  },
];
