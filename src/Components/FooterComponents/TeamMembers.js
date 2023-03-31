import React from 'react';
import { FiFacebook } from 'react-icons/fi';



// import CEO from '../../../src/assets/ceo-1.jpg'
import CEO from '../../../src/assets/employers/ceo.jpg'
import COO from '../../../src/assets/coo.jpg'
import MEDIA from '../../../src/assets/tracey.JPG'
import male from '../../../src/assets/male-icons.png'
import female from '../../../src/assets/female-icon.png'
import saleem from '../../../src/assets/employers/saleem.jpg'
import aumy from '../../../src/assets/employers/Aumy.JPG'
import tariqul from '../../../src/assets/employers/tariqul.jpg'
import alIsrak from '../../../src/assets/employers/al-israk.jpg'

const TeamMembers = () => {
    window.scrollTo(0, 0);


    const employers = [

        {	img:CEO,
            name : "Navin Shivpal",
            designation: "CEO & Administrator",
            description: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
            links:[
                
            ],
    
    
    
        },
        {   img:COO,
            name : "Nusrat Shova",
            designation: "Chief Operating Officer (COO)",
            description: "The COO – sometimes known as the vice president of operations – is typically the second in command in a company and reports to the CEO.",
            links:[
                
            ],
    
    
    
        },
        {   img: male,
            name : "Alex Tullao",
            designation: " DPS",
            description: "Prevent crime and terrorism. Save lives and protect property. Maintain public order. Provide effective, efficient and secure licensing services.",
            links:[
                
            ],
    
    
    
        },
        {   img: MEDIA,
            name : "Tracey Khan",
            designation: "Marketing Coordinator",
            description: "Marketing coordinators are professionals who coordinate all the marketing activities and initiatives of an organization.",
            links:[
                
            ],
    
    
    
        },
       
        {   img: female,
            name : "Sadaf Ramzan",
            designation: " LI Office Manager",
            description: "An office manager job can be a good choice for people with administration experience who want to advance their careers.",
            links:[
                
            ],
    
    
    
        },
        {   img: female,
            name : "Cecilia",
            designation: " Intake Coordinator",
            description: "An intake coordinator manages the registration process of patients or clients as they enter a health care facility for medical services.",
            links:[
                
            ],
    
    
    
        },
        {   img: female,
            name : "Shaila Sumi",
            designation: " CDPAP Coordinator",
            description: "CDPAP Coordinators are responsible for processing referrals received from marketing sources such as hospitals, nursing homes, and community physicians and online campaigns.",
            links:[
                
            ],
    
    
    
        },
        {   img: female,
            name : "Diana Algu",
            designation: "Billing/Payroll Coordinator",
            description: "Payroll coordinator responsibilities include processing timesheets, updating payroll records and answering employee questions about payments. Ultimately, you'll ensure employees are compensated correctly and on time.",
            links:[
                
            ],
    
    
    
        },
        {   img: female,
            name : "Anoosha Mumnoon",
            designation: "HHA Coordinator",
            description: "Contacts agency staffing coordinator to arrange all scheduling of clients, including but not limited to acceptance of assignments, sick or late calls and directions to client home.",
            links:[
                
            ],
    
    
    
        },
        {   img: female,
            name : "Alicia Khan",
            designation: "Human Resource",
            description: "Human resources (HR) is the set of people who make up the workforce of an organization, business sector, industry, or economy. A narrower concept is human",
            links:[
                
            ],
    
    
    
        },
        {   img: female,
            name : "Annecieya Dhaniram",
            designation: " Intake Coordinator",
            description: "An intake coordinator manages the registration process of patients or clients as they enter a health care facility for medical services.",
            links:[
                
            ],
    
    
    
        },
        {   img: female,
            name : "Robia Imtiaz",
            designation: " CDPAP Coordinator",
            description: "CDPAP Coordinators are responsible for processing referrals received from marketing sources such as hospitals, nursing homes, and community physicians and online campaigns.",
            links:[
                
            ],
    
    
    
        },
        {   img: female,
            name : "Sunju Yeasmin",
            designation: "HHA Coordinator",
            description: "Contacts agency staffing coordinator to arrange all scheduling of clients, including but not limited to acceptance of assignments, sick or late calls and directions to client home.",
            links:[
                
            ],
    
    
    
        },
        {   img: aumy,
            name : "Osama Aumey",
            designation: " Intake Coordinator",
            description: "An intake coordinator manages the registration process of patients or clients as they enter a health care facility for medical services.",
            links:[
                
            ],
    
    
    
        },
        {   img: saleem,
            name : "Saleem Mannan",
            designation: " CDPAP Coordinator",
            description: "CDPAP Coordinators are responsible for processing referrals received from marketing sources such as hospitals, nursing homes, and community physicians and online campaigns.",
            links:[
                
            ],
    
    
    
        },
        {   img: alIsrak,
            name : "Al Ishraq",
            designation: "HHA Coordinator",
            description: "Contacts agency staffing coordinator to arrange all scheduling of clients, including but not limited to acceptance of assignments, sick or late calls and directions to client home.",
            links:[
                
            ],
    
    
    
        },
        {   img: tariqul,
            name : "Tariqul Islam",
            designation: " Intake Coordinator",
            description: "An intake coordinator manages the registration process of patients or clients as they enter a health care facility for medical services.",
            links:[
                
            ],
    
    
    
        },
        {   img: female,
            name : "Divya Ramdial",
            designation: " CDPAP Coordinator",
            description: "CDPAP Coordinators are responsible for processing referrals received from marketing sources such as hospitals, nursing homes, and community physicians and online campaigns.",
            links:[
                
            ],
    
    
    
        },
    
    ]
    return (
        <div>

            <div>
                <div className="container flex justify-center mx-auto pt-10">
                    <div>
                        <p className="text-gray-500 text-lg text-center font-normal pb-3">Meet our Team</p>
                        <h1 className="xl:text-3xl text-2xl text-center text-primary font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto playrify">The Talented People Behind the Scenes of the Organization</h1>
                    </div>
                </div>
                <div className="w-full bg-gray-100 px-10 pt-10">
                    <div className="container mx-auto">
                        <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            {
                                employers?.map((employer,index)=><div 
                                
                                key={index}
                                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                                >


                                <div className="rounded overflow-hidden shadow-md bg-white"
                                
                                >
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={employer?.img} alt className="rounded-full object-cover h-full w-full shadow-md" loading="lazy"/>
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <div className="font-bold text-3xl text-center pb-1">{employer?.name}</div>
                                        <p className="text-gray-800 text-sm text-center">{employer?.designation}</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">{employer?.description}</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div>
                                                    <FiFacebook className='text-[#828FA3] text-2xl '/>
                                                
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                        <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                            }
                            

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TeamMembers;