import vacanciesImg from '../assets/images/Vacancies.png'
import Button from '../components/button'

const jobs = [
    {
        id: 1,
        job: 'Operational Excellence - Warehouse, Operations',
        position:'Operations',
        level:'Experienced (Individual Contributor)',
        location: 'Vietnam - Hanoi'
    },
    {
        id: 2,
        job: 'Hub Team Leader - Avion Xpress',
        position:'Product Management',
        level:'Experienced (Team Lead)',
        location: 'Vietnam - Hanoi'
    },
    {
        id: 3,
        job: 'Logistics Associate - Operations',
        position:'People',
        level:'Experienced (Individual Contributor)',
        location: 'Vietnam - Ho Chi Minh City'
    },
    {
        id: 4,
        job: 'Recruitment Lead - People Team, Avion Xpress Vietnam',
        position:'Data Science',
        level:'Internship',
        location: 'Vietnam - Ho Chi Minh City'
    },
    {
        id: 5,
        job: 'Business Development Intern - Business Development, Avion Xpress Viet Nam',
        position:'Business Development and Partnerships',
        level:'Experienced (Individual Contributor)',
        location: 'Vietnam - Hanoi'
    },
    {
        id: 6,
        job: 'Lead Anti-Fraud Specialist - Risk Management, Avion Xpress Vietnam',
        position:'Risk Management',
        level:'Experienced (Team Lead)',
        location: 'Vietnam - Ho Chi Minh City'
    },
    {
        id: 7,
        job: 'Key Account Management - Business Development, AvionFood',
        position:'Business Development and Partnerships',
        level:'Internship',
        location: 'Vietnam - Hanoi'
    },
    {
        id: 8,
        job: 'Senior Client Insights - SBS Experience, Operations',
        position:'Operations',
        level:'Experienced (Team Lead)',
        location: 'Vietnam - Ho Chi Minh City'
    },
    {
        id: 9,
        job: 'Operational Excellence - Warehouse, Operations',
        position:'Operations',
        level:'Experienced (Individual Contributor)',
        location: 'Vietnam - Hanoi'
    },
    {
        id: 10,
        job: 'Workforce Planning Analyst - Recruitment, Avion Xpress Vietnam',
        position:'Operations',
        level:'Experienced (Individual Contributor)',
        location: 'Vietnam - Hanoi'
    },
    {
        id: 11,
        job: 'Assistant Business Intelligence Manager - Business Intelligence, Avion',
        position:'Operations',
        level:'Experienced (Individual Contributor)',
        location: 'Vietnam - Ho Chi Minh City'
    },
    {
        id: 12,
        job: 'Operational Excellence - Warehouse, Operations',
        position:'Operations',
        level:'Experienced (Individual Contributor)',
        location: 'Vietnam - Ho Chi Minh City'
    }
]

function Job({job, position, level, location}) {
    return (
        <div className="border-t-2 border-border_dark py-3">
            <h4 className='text-body-md font-bold'>{job}</h4>
            <p className='text-body-sm font-normal text-dark_primary mt-2'>{position}</p>
            <p className='text-body-sm font-normal text-dark_primary'>{level}</p>
            <p className='text-body-sm font-normal text-dark_primary'>{location}</p>
        </div>  
    )
}

function Vacancies(){
    return (
        <div>
             <div>
                <img className='w-full object-cover' src={vacanciesImg} alt="vaccancies" />
                <div className='mt-5 mx-6'><Button Color='primary'>Contact Us Now</Button></div>
             </div>
             {/* List Job */}
             <div className="mx-6 border-b-2 border-border_dark mt-10 mb-20">
                <h3 className='text-center text-body-lg font-bold mb-5'>Available Positions</h3>
                {
                    jobs.map(job => (
                        <Job key={job.id} job={job.job} position={job.position} level={job.level} location={job.location}/>
                    ))
                }
             </div>
            {/* Hiring Process */}
            <div className="mx-6">
                <h3 className='text-center text-body-lg font-bold mt-10 mb-5'>Our Hiring Process</h3>
                {/* list process */}
                <div className="mb-20">
                    <div className="flex justify-center items-center bg-border_grey p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl">
                        <p className='text-center'>Apply for the Position</p>
                        <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute left-0 -translate-x-1/2">
                            <span className='text-white'>1</span>
                        </div>  
                    </div>                                                    
                    <div className="flex justify-center items-center bg-border_grey p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl">
                        <p className='text-center'>Online Test or Assignment (if applicable)</p>
                        <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute left-0 -translate-x-1/2">
                            <span className='text-white'>2</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-border_grey p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl">
                        <p className='text-center'>Face to Face interview with our Hiring Manager</p>
                        <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute left-0 -translate-x-1/2">
                            <span className='text-white'>3</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-border_grey p-5 min-h-[120px] rounded-2xl relative mb-4 shadow-xl">
                        <p className='text-center'>Offer</p>
                        <div className="flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-full absolute left-0 -translate-x-1/2">
                            <span className='text-white'>4</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hiring */}
            <div className="bg-light_grey px-6 py-8">
                <h3 className='text-center pb-8 text-body-lg font-bold'>We're Hiring</h3>
                <p className='text-justify'>
                    Avion creates products and services that push boundaries and innovate business. We're looking for curious,
                     hand-working leaders to join our team and help empower our global commuity of sellers. Have an idea? pitch
                     it - entrepreneurial minds thrive at Avion.
                </p>
            </div>
        </div>
    )
}

export default Vacancies