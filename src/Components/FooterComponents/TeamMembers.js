import React, { useContext } from 'react';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineGlobal } from 'react-icons/ai';




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
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { AuthContext } from '../Pages/Context/AuthProvider';
import useAdmin from '../Hooks/UseAdmin';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const TeamMembers = () => {
    window.scrollTo(0, 0);

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);

    const url = "https://cottage-home-care-services-server-site.vercel.app/employees";

    const { data: employees = [], isLoading, refetch } = useQuery({
        queryKey: ['users',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })
    const deleteHandler = (employer) => {

        const proceed = window.confirm(
            `Are you sure, you want to delete ${employer?.name}?`
        );
        if (proceed) {
            fetch(`https://cottage-home-care-services-server-site.vercel.app/employees/${employer?._id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`${employer?.name} Delete SuccessFully`)
                        refetch();

                    }


                })

        }

    }


    const employers = [

        {
            img: "https://i.ibb.co/wJZ2HWD/ceo.jpg",
            name: "Navin Shivpal",
            designation: "CEO & Administrator",
            description: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",




        },
        {
            img: "https://i.ibb.co/m6m7tSk/coo.jpg",
            name: "Nusrat Shova",
            designation: "Chief Operating Officer (COO)",
            description: "The COO – sometimes known as the vice president of operations – is typically the second in command in a company and reports to the CEO.",




        },
        {
            img: "https://i.ibb.co/kDdXyBb/male-icons.png",
            name: "Alex Tullao",
            designation: " DPS",
            description: "Prevent crime and terrorism. Save lives and protect property. Maintain public order. Provide effective, efficient and secure licensing services.",




        },
        {
            img: "https://i.ibb.co/wdhwNSZ/tracey.jpg",
            name: "Tracey Khan",
            designation: "Marketing Coordinator",
            description: "Marketing coordinators are professionals who coordinate all the marketing activities and initiatives of an organization.",




        },

        {
            img: "https://i.ibb.co/bvsrCXS/female-icon.png",
            name: "Sadaf Ramzan",
            designation: " LI Office Manager",
            description: "An office manager job can be a good choice for people with administration experience who want to advance their careers.",




        },
        {
            img: "https://i.ibb.co/bvsrCXS/female-icon.png",
            name: "Cecilia",
            designation: " Intake Coordinator",
            description: "An intake coordinator manages the registration process of patients or clients as they enter a health care facility for medical services.",




        },
        {
            img: "https://i.ibb.co/bvsrCXS/female-icon.png",
            name: "Shaila Sumi",
            designation: " CDPAP Coordinator",
            description: "CDPAP Coordinators are responsible for processing referrals received from marketing sources such as hospitals, nursing homes, and community physicians and online campaigns.",




        },
        {
            img: "https://i.ibb.co/bvsrCXS/female-icon.png",
            name: "Diana Algu",
            designation: "Billing/Payroll Coordinator",
            description: "Payroll coordinator responsibilities include processing timesheets, updating payroll records and answering employee questions about payments. Ultimately, you'll ensure employees are compensated correctly and on time.",




        },
        {
            img: "https://i.ibb.co/bvsrCXS/female-icon.png",
            name: "Anoosha Mumnoon",
            designation: "HHA Coordinator",
            description: "Contacts agency staffing coordinator to arrange all scheduling of clients, including but not limited to acceptance of assignments, sick or late calls and directions to client home.",




        },
        {
            img: "https://i.ibb.co/bvsrCXS/female-icon.png",
            name: "Alicia Khan",
            designation: "Human Resource",
            description: "Human resources (HR) is the set of people who make up the workforce of an organization, business sector, industry, or economy. A narrower concept is human",




        },
        {
            img: "https://i.ibb.co/bvsrCXS/female-icon.png",
            name: "Annecieya Dhaniram",
            designation: " Intake Coordinator",
            description: "An intake coordinator manages the registration process of patients or clients as they enter a health care facility for medical services.",




        },
        {
            img: "https://i.ibb.co/bvsrCXS/female-icon.png",
            name: "Robia Imtiaz",
            designation: " CDPAP Coordinator",
            description: "CDPAP Coordinators are responsible for processing referrals received from marketing sources such as hospitals, nursing homes, and community physicians and online campaigns.",




        },
        {
            img: "https://i.ibb.co/bvsrCXS/female-icon.png",
            name: "Sunju Yeasmin",
            designation: "HHA Coordinator",
            description: "Contacts agency staffing coordinator to arrange all scheduling of clients, including but not limited to acceptance of assignments, sick or late calls and directions to client home.",




        },
        {
            img: "https://i.ibb.co/g7fZ27J/Aumy.jpg",
            name: "Osama Aumey",
            designation: " Intake Coordinator",
            description: "An intake coordinator manages the registration process of patients or clients as they enter a health care facility for medical services.",




        },
        {
            img: "https://i.ibb.co/KNJWrQC/saleem.jpg",
            name: "Saleem Mannan",
            designation: " CDPAP Coordinator",
            description: "CDPAP Coordinators are responsible for processing referrals received from marketing sources such as hospitals, nursing homes, and community physicians and online campaigns.",




        },
        {
            img: "https://i.ibb.co/LzjDV9w/al-israk.jpg",
            name: "Al Ishraq",
            designation: "HHA Coordinator",
            description: "Contacts agency staffing coordinator to arrange all scheduling of clients, including but not limited to acceptance of assignments, sick or late calls and directions to client home.",




        },
        {
            img: "https://i.ibb.co/YLPSTnx/tariqul.jpg",
            name: "Tariqul Islam",
            designation: " Intake Coordinator",
            description: "An intake coordinator manages the registration process of patients or clients as they enter a health care facility for medical services.",




        },
        {
            img: "https://i.ibb.co/bvsrCXS/female-icon.png",
            name: "Divya Ramdial",
            designation: " CDPAP Coordinator",
            description: "CDPAP Coordinators are responsible for processing referrals received from marketing sources such as hospitals, nursing homes, and community physicians and online campaigns.",




        },

    ]

    // 




    return (
        <div>

            <div className='min-h-screen'>
                <div className="container flex justify-center mx-auto pt-10">
                    <div>


                        <p className="text-gray-500 text-lg text-center font-normal pb-3">Meet our Team</p>
                        <h1 className="xl:text-3xl text-2xl text-center text-gray-700 font-extrabold  sm:w-4/6 w-5/6 mx-auto playrify">The Talented People Behind the Scenes of the Organization</h1>
                        <hr className='mt-3 border-t-[1px] border-primary w-16 mx-auto pb-6' />
                    </div>
                </div>
                <div className="w-full bg-gray-100 px-10 pt-10">
                    <div className="container mx-auto">
                        {
                            isLoading &&
                            <>
                                <Loading></Loading>
                            </>
                        }
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-20 team-member">
                            {/* lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around */}
                            {
                                employees?.map((employer, index) =>
                                    <div

                                        key={index}
                                        className=" relative mt-16 md:mb-10  mb-10 w-full  bg-white  shadow-md rounded-md lg:min-h-[22rem]
                                
                                "
                                        data-aos="zoom-in"
                                        data-aos-duration="2000"
                                    >




                                        <div className="rounded overflow-hidden  "

                                        >
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={employer?.img} alt className="rounded-full object-cover h-full w-full shadow-md" loading="lazy" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <div className="font-bold text-3xl text-center pb-1">{employer?.name}</div>
                                                <p className="text-gray-800 text-sm text-center">{employer?.designation}</p>
                                                <p className="text-justify text-gray-700 text-base pt-3 font-normal source-sans pb-8">{employer?.description}</p>
                                                {
                                                    isAdmin &&

                                                    <div className=' mt-16'>
                                                        <div className='flex items-center justify-evenly  absolute w-full right-0 left-0 bottom-12'>

                                                            <Link

                                                                to={`/employees/${employer?._id}`}

                                                            >
                                                                <button className='btn btn-sm bg-secondary px-4 py-2 rounded-md  my-5 text-white font-semibold uppercase'>
                                                                    Update
                                                                </button>

                                                            </Link>

                                                            <button

                                                                onClick={() => deleteHandler(employer)}
                                                                className='bg-red-500 px-4 py-2 rounded-md  my-5 text-white font-semibold uppercase btn btn-sm'>
                                                                Delete

                                                            </button>
                                                        </div>

                                                    </div>


                                                }
                                                <div className='pb-6'>
                                                    <div className="w-full flex justify-center   absolute bottom-0  right-0 left-0 my-5">
                                                        {
                                                            employer?.facebook == null || employer?.facebook === "" ?
                                                                <>
                                                                    <a href="javascript:void(0)" className="mx-5 bg-hov2">
                                                                        <div >
                                                                            <FiFacebook className='text-[#828FA3] text-2xl ' />

                                                                        </div>
                                                                    </a>
                                                                </>
                                                                :
                                                                <>
                                                                    <a href={employer?.facebook}
                                                                        target='_blank'
                                                                        className="mx-5 bg-hov2">
                                                                        <div>
                                                                            <FiFacebook className='text-[#828FA3] text-2xl ' />

                                                                        </div>
                                                                    </a>

                                                                </>
                                                        }



                                                        {

                                                            employer?.twitter == null || employer?.twitter === "" ?
                                                                <>
                                                                    <a href="javascript:void(0)" className="mx-5 bg-hov2">
                                                                        <div>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                                            </svg>
                                                                        </div>
                                                                    </a>

                                                                </>
                                                                :
                                                                <>
                                                                    <a href={employer?.twitter}
                                                                        target="_blank"
                                                                        className="mx-5 bg-hov2">
                                                                        <div>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                                            </svg>
                                                                        </div>
                                                                    </a>


                                                                </>

                                                        }
                                                        {
                                                            employer?.instagram == null || employer?.instagram === "" ?
                                                                <>
                                                                    <a href="javascript:void(0)" className="mx-5 bg-hov2">
                                                                        <div>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                                            </svg>
                                                                        </div>
                                                                    </a>
                                                                </>
                                                                :
                                                                <>
                                                                    <a href={employer?.instagram}
                                                                        target='_blank'
                                                                        className="mx-5 bg-hov2">
                                                                        <div>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                                            </svg>
                                                                        </div>
                                                                    </a>

                                                                </>
                                                        }
                                                        {
                                                            employer?.web &&
                                                            <a href={employer?.web}
                                                                target='_blank'
                                                                className="mx-5 bg-hov2">
                                                                <div>
                                                                    <AiOutlineGlobal
                                                                        className='text-[#828FA3] text-2xl ' />
                                                                </div>
                                                            </a>


                                                        }
                                                    </div>

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