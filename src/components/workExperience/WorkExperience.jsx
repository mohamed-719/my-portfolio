import './workExperience.scss';



export default function WorkExperience() {
  const experiences = [
    {
      company: " National Telecommunication Institute(NTI)",
      role: "MEAN-Stack developer",
      period: "Aug 2024 – Nov 2024",
      description:
        `Master Essential Technologies: JavaScript, Node.js, Express.js, Angular, and MongoDB. 
        Creating an e-commerce application involves several key components: authentication, authorization, product categorization, shopping cart functionality, wishlists, and reviews. User Registration: Email and password fields / Email and password verification process`,
    },
    {
  company: "Coursera",
  role: ".NET FullStack Developer Specialization",
  period: "Nov 2023 – Feb 2024",
  description:
    "Creating an HR application using ASP.NET MVC to manage employee records involves several components, including displaying a list of employees, adding new employees, and implementing validation.",
},
    // {
    //   company: "ZAD Solutions",
    //   role: "Odoo implementor",
    //   period: "Jul 2023 – May 2023 ",
    //   description:
    //     "Understanding of business processes across various functional areas.",
    // },
    // {
    //   company: "Jupiter",
    //   role: "Financial Accountant",
    //   period: "Sep 2022 – Nov 2022",
    //   description:
    //     "Configuration: leading analysis and design in the SAP FI  End User: Work as a user of a financial accountant understanding of (Accounts Receivable - Accounts Payable –Asset  Accounting -Account Consolidation -General Ledgers)",
    // },
  ];
  return(
<div className="work-experience" id="workexperience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="period">{exp.period}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
        </div>
      </div>
  )
}