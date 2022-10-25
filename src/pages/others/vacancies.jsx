import vacanciesImg from '../../assets/images/Vacancies.png'
import { Button } from '../../components/buttons'

const jobs = [
  {
    id: 1,
    job: 'Operational Excellence - Warehouse, Operations',
    position: 'Operations',
    level: 'Experienced (Individual Contributor)',
    location: 'Vietnam - Hanoi'
  },
  {
    id: 2,
    job: 'Hub Team Leader - Avion Xpress',
    position: 'Product Management',
    level: 'Experienced (Team Lead)',
    location: 'Vietnam - Hanoi'
  },
  {
    id: 3,
    job: 'Logistics Associate - Operations',
    position: 'People',
    level: 'Experienced (Individual Contributor)',
    location: 'Vietnam - Ho Chi Minh City'
  },
  {
    id: 4,
    job: 'Recruitment Lead - People Team, Avion Xpress Vietnam',
    position: 'Data Science',
    level: 'Internship',
    location: 'Vietnam - Ho Chi Minh City'
  },
  {
    id: 5,
    job: 'Business Development Intern - Business Development, Avion Xpress Viet Nam',
    position: 'Business Development and Partnerships',
    level: 'Experienced (Individual Contributor)',
    location: 'Vietnam - Hanoi'
  },
  {
    id: 6,
    job: 'Lead Anti-Fraud Specialist - Risk Management, Avion Xpress Vietnam',
    position: 'Risk Management',
    level: 'Experienced (Team Lead)',
    location: 'Vietnam - Ho Chi Minh City'
  },
  {
    id: 7,
    job: 'Key Account Management - Business Development, AvionFood',
    position: 'Business Development and Partnerships',
    level: 'Internship',
    location: 'Vietnam - Hanoi'
  },
  {
    id: 8,
    job: 'Senior Client Insights - SBS Experience, Operations',
    position: 'Operations',
    level: 'Experienced (Team Lead)',
    location: 'Vietnam - Ho Chi Minh City'
  },
  {
    id: 9,
    job: 'Operational Excellence - Warehouse, Operations',
    position: 'Operations',
    level: 'Experienced (Individual Contributor)',
    location: 'Vietnam - Hanoi'
  },
  {
    id: 10,
    job: 'Workforce Planning Analyst - Recruitment, Avion Xpress Vietnam',
    position: 'Operations',
    level: 'Experienced (Individual Contributor)',
    location: 'Vietnam - Hanoi'
  },
  {
    id: 11,
    job: 'Assistant Business Intelligence Manager - Business Intelligence, Avion',
    position: 'Operations',
    level: 'Experienced (Individual Contributor)',
    location: 'Vietnam - Ho Chi Minh City'
  },
  {
    id: 12,
    job: 'Operational Excellence - Warehouse, Operations',
    position: 'Operations',
    level: 'Experienced (Individual Contributor)',
    location: 'Vietnam - Ho Chi Minh City'
  }
]

const departments = [
  {
    id: 1,
    name: 'Business Development and Partnerships'
  },
  {
    id: 2,
    name: 'Cross Border eCommerce'
  },
  {
    id: 3,
    name: 'Data Science'
  },
  {
    id: 4,
    name: 'Design'
  },
  {
    id: 5,
    name: 'Engineering and Technology'
  },
  {
    id: 6,
    name: 'Shopee & SeaMoney Programmes'
  },
  {
    id: 7,
    name: 'Legal and Finance'
  },
  {
    id: 8,
    name: 'Marketing'
  },
  {
    id: 9,
    name: 'Operations'
  },
  {
    id: 10,
    name: 'People'
  },
  {
    id: 11,
    name: 'Operations'
  },
  {
    id: 12,
    name: 'Product Management'
  },
  {
    id: 13,
    name: 'Compliance'
  },
  {
    id: 14,
    name: 'Risk Management'
  },
  {
    id: 15,
    name: 'Devops'
  },
  {
    id: 16,
    name: 'Business Intelligence and Data Analytics'
  }
]

const levels = [
  {
    id: 1,
    name: 'Internship'
  },
  {
    id: 2,
    name: 'Entry Level'
  },
  {
    id: 3,
    name: 'Experienced'
  },
  {
    id: 4,
    name: 'Manager'
  }
]

const loacations = [
  {
    id: 1,
    name: 'Vietnam - Hanoi'
  },
  {
    id: 2,
    name: 'Vietnam - Ho Chi Minh City'
  },
  {
    id: 3,
    name: 'Thailand - Bangkok'
  },
  {
    id: 4,
    name: 'South Korea - Seoul'
  },
  {
    id: 5,
    name: 'Philippines - Manila'
  },
  {
    id: 6,
    name: 'Entry Level'
  },
  {
    id: 7,
    name: 'Japan - Tokyo'
  },
  {
    id: 8,
    name: 'China - Beijing'
  },
  {
    id: 9,
    name: 'China - Shanghai'
  },
  {
    id: 10,
    name: 'Indonesia - Medan'
  }
]

function Job({ job, position, level, location }) {
  return (
    <div className="border-t-2 border-border_dark py-3 laptop:shadow-lg laptop:bg-light_grey laptop:mb-5 laptop:rounded-lg laptop:border-none laptop:px-8 laptop:py-7">
      <h4 className="text-body-md font-bold laptop:text-body-lg">{job}</h4>
      <p className="text-body-sm font-normal text-dark_primary mt-2 laptop:text-body-md">
        {position}
      </p>
      <p className="text-body-sm font-normal text-dark_primary laptop:text-body-md">
        {level}
      </p>
      <p className="text-body-sm font-normal text-dark_primary laptop:text-body-md">
        {location}
      </p>
    </div>
  )
}

function CheckBox({ title }) {
  return (
    <div className="flex mb-5 items-center">
      <input className="h-[20px] w-[20px] flex-shrink-0" type="checkbox" />
      <h3 className="ml-5">{title}</h3>
    </div>
  )
}

function Vacancies() {
  return (
    <div>
      <div className="laptop:relative">
        <img
          className="w-full object-cover laptop:max-h-[500px]"
          src={vacanciesImg}
          alt="vaccancies"
        />
        <div className="mt-5 mobile:mx-6 laptop:max-w-sm laptop:absolute laptop:top-1/2 laptop:-translate-y-1/2 laptop:left-1/2 laptop:-translate-x-1/2">
          <Button Color="primary">Contact Us Now</Button>
        </div>
      </div>
      {/* List Job */}
      <div className="laptop:mx-44 laptop:flex">
        <div className="mobile:hidden laptop:block laptop:w-4/12 laptop:mt-10">
          <h3 className="ml-10 text-body-lg font-bold mb-10">Department</h3>
          {departments.map((department) => (
            <CheckBox key={department.id} title={department.name} />
          ))}
          <h3 className="ml-10 text-body-lg font-bold mb-10 mt-20">Level</h3>
          {levels.map((level) => (
            <CheckBox key={level.id} title={level.name} />
          ))}
          <h3 className="ml-10 text-body-lg font-bold mb-10 mt-20">Location</h3>
          {loacations.map((location) => (
            <CheckBox key={location.id} title={location.name} />
          ))}
        </div>
        <div className="mobile:mx-6 border-b-2 border-border_dark mt-10 mb-20 laptop:w-8/12 laptop:border-none">
          <h3 className="text-center text-body-lg font-bold mb-5 laptop:mb-10">
            Available Positions
          </h3>
          {jobs.map((job) => (
            <Job
              key={job.id}
              job={job.job}
              position={job.position}
              level={job.level}
              location={job.location}
            />
          ))}
        </div>
      </div>
      {/* Hiring Process */}
      <div className="mx-6 laptop:mx-44">
        <h3 className="text-center text-body-lg font-bold mt-10 mb-5 laptop:mb-10">
          Our Hiring Process
        </h3>
        <div className="mb-20 laptop:flex gap-10">
          <div className="flex justify-center items-center bg-border_grey dark:bg-secondary p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl laptop:w-3/12 laptop:min-h-[200px]">
            <p className="text-center">Apply for the Position</p>
            <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute mobile:left-0 mobile:-translate-x-1/2 laptop:top-0 laptop:left-1/2 laptop:-translate-y-1/2 ">
              <span className="text-white">1</span>
            </div>
          </div>
          <div className="flex justify-center items-center bg-border_grey dark:bg-secondary p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl laptop:w-3/12 laptop:min-h-[200px]">
            <p className="text-center">
              Online Test or Assignment (if applicable)
            </p>
            <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute mobile:left-0 mobile:-translate-x-1/2 laptop:top-0 laptop:left-1/2 laptop:-translate-y-1/2 ">
              <span className="text-white">2</span>
            </div>
          </div>
          <div className="flex justify-center items-center bg-border_grey dark:bg-secondary p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl laptop:w-3/12 laptop:min-h-[200px]">
            <p className="text-center">
              Face to Face interview with our Hiring Manager
            </p>
            <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute mobile:left-0 mobile:-translate-x-1/2 laptop:top-0 laptop:left-1/2 laptop:-translate-y-1/2 ">
              <span className="text-white">3</span>
            </div>
          </div>
          <div className="flex justify-center items-center bg-border_grey dark:bg-secondary p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl laptop:w-3/12 laptop:min-h-[200px]">
            <p className="text-center">Offer</p>
            <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute mobile:left-0 mobile:-translate-x-1/2 laptop:top-0 laptop:left-1/2 laptop:-translate-y-1/2 ">
              <span className="text-white">4</span>
            </div>
          </div>
        </div>
      </div>
      {/* Hiring */}
      <div className="bg-light_grey dark:bg-secondary/40 px-6 py-8 laptop:py-16">
        <h3 className="text-center pb-8 text-body-lg font-bold">
          We're Hiring
        </h3>
        <p className="text-justify laptop:text-center laptop:w-9/12 laptop:mx-auto">
          Avion creates products and services that push boundaries and innovate
          business. We're looking for curious, hand-working leaders to join our
          team and help empower our global commuity of sellers. Have an idea?
          pitch it - entrepreneurial minds thrive at Avion.
        </p>
      </div>
    </div>
  )
}

export default Vacancies
