// import React, { useState } from 'react';
import './components/css/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import HomeCard from './components/HomeCard';
// import ic_Tailored_Services from "./Icons/ic_services.svg"


export const Home = () => {
    const [containerHeader] = useTypewriter({
        words: ['Need IT Support..?', 'We Are Here To Help You'],
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 2000,
        cursorBlinking: true,

    })
    return (
        <div className='homeContentContainer'>
            <div className="relative isolate px-6 pt-14 lg:px-8 main-div container1 homeSection1 homeSections">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-46">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl main-h1">
                            Hello, <span>{containerHeader}</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-600 main-para" style={{ color: 'white' }}>
                            At <a id='highlight'>Speedlight Solutions</a>, we're dedicated to transforming your business through technology. As your trusted IT partner, we understand the vital role that efficient and secure IT solutions play in today's rapidly evolving business landscape.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <h6
                                href="#"
                                className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Get started
                            </h6>
                            <h6 href="#" className="text-sm font-semibold leading-6 text-slate-50">
                                Learn more <span aria-hidden="true">→</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

            <div className='container-fluid homeSections whyUs'>
                <div className="feat bg-gray pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="section-head col-sm-12">
                                <h4><span>Why Choose</span> Us?</h4>
                            </div>
                            <HomeCard icon="./Icons/ic_expertise.svg" title="Expertise" desc="Our team comprises experienced IT professionals with a strong track record in the industry, ensuring your IT needs are handled by experts." />
                            <HomeCard icon="./Icons/ic_innovation.svg" title="Innovation" desc="We prioritize innovation, consistently exploring new technologies and strategies to optimize your IT infrastructure." />
                            <HomeCard icon="./Icons/ic_services.svg" title="Tailored Service" desc="We customize our services to match your unique business challenges, goals, and objectives, ensuring you receive precisely what you need." />
                            <HomeCard icon="./Icons/ic_customer.svg" title="Customer-Centric" desc="Your success is our top priority, and we work closely with you, communicating transparently and proactively." />
                            <HomeCard icon="./Icons/ic_security.svg" title="Security & Reliability" desc="We prioritize the security and reliability of your data, with robust security measures and proactive monitoring in place." />
                            <HomeCard icon="./Icons/ic_Scalability.svg" title="Scalability" desc="Our solutions are designed to grow with your organization, allowing you to adapt to changing demands without disruption." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative isolate px-6 pt-5 pb-5 lg:px-8 main-div container1 forBusiness homeSections">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="feat bg-gray pt-3 pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="section-head col-sm-12">
                                <h4 style={{ color: 'white' }}><span style={{ color: 'red' }}>For</span> Business</h4>
                            </div>
                            <div className="text-center">
                                <div className="servicesContainer forBusiness">
                                    <div className="serviceItems">
                                        <ul>
                                            <li><span><img src="./SVGs/check.svg" /></span>Microsoft 365</li>
                                            <li><span><img src="./SVGs/check.svg" /></span>DaaS (Desktop As a Service)</li>
                                            <li><span><img src="./SVGs/check.svg" /></span>Outsource IT Support</li>
                                            <li><span><img src="./SVGs/check.svg" /></span>Guest Wifi</li>
                                        </ul>
                                        <h3><button className='exploreMore'>Explore More</button></h3>
                                    </div>
                                    <div className="serviceItems"><img src="./SVGs/Tech_Support.svg" className='supportVector' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

            <div className='container-fluid forHomeSection'>
                <div className="feat bg-gray pt-5 pb-5">
                    <div className="container text-center">
                        <div className="row">
                            <div className="section-head col-sm-12">
                                <h4><span>For</span> Home</h4>
                            </div>
                            <div className="servicesContainer forHome">
                                <div className="serviceItems"><img src="./SVGs/BusinessTechSupport.svg" className='supportVector' /></div>
                                <div className="serviceItems">
                                    <ul>
                                        <li><span><img src="./SVGs/check.svg" /></span>Computer Setup</li>
                                        <li><span><img src="./SVGs/check.svg" /></span>OS Installation</li>
                                        <li><span><img src="./SVGs/check.svg" /></span>Printer Setup</li>
                                        <li><span><img src="./SVGs/check.svg" /></span>Home Wifi Setup</li>
                                        <li><span><img src="./SVGs/check.svg" /></span>Technical Support</li>
                                    </ul>
                                    <h3><button className='exploreMore'>Explore More</button></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative isolate px-6 pt-5 pb-5 lg:px-8 main-div container1 forBusiness">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="feat bg-gray pt-3 pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="section-head col-sm-12">
                                <h4 style={{ color: 'white' }}><span style={{ color: 'red' }}>Software</span> Development</h4>
                            </div>
                            <div className="text-center">
                                <div className="servicesContainer forBusiness">
                                    <div className="serviceItems">
                                        <ul>
                                            <li><span><img src="./SVGs/check.svg" /></span>Website Development</li>
                                            <li><span><img src="./SVGs/check.svg" /></span>Android App Development</li>
                                            <li><span><img src="./SVGs/check.svg" /></span>SaaS Application Development</li>
                                            <li><span><img src="./SVGs/check.svg" /></span>IoT Based App Development</li>
                                        </ul>
                                        <h3><button className='exploreMore'>Explore More</button></h3>
                                    </div>
                                    <div className="serviceItems"><img src="./SVGs/Software_Development.svg" className='supportVector' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div> */}
            </div>
        </div>
    )
}
export default Home;