import React from 'react';

const ContactForm = () => {
    return (
        <div className='pt-9'>
                <h1 className='text-2xl text-center Poppins font-semibold'> CONTACT FORM</h1>

                <section className="flex justify-center items-center pb-8 mt-3 mb-12 rounded w-11/12  md:w-9/12 mx-auto">
                    <div className="w-full">
                        <form
                            className="max-w-xl md:max-w-2xl mx-auto"
                        >

                            
                            
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div className="space-y-1 text-sm">
                                    <label
                                        htmlFor="firstName"
                                        className="block dark:text-gray-400"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        
                                        name="firstName"
                                        id="firstName"
                                        placeholder='First Name'
                                        className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white"
                                    />
                                    
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label
                                        htmlFor="firstName"
                                        className="block dark:text-gray-400"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        
                                        name="lastName"
                                        id="lastName"
                                        placeholder='Last Name'
                                        className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white"
                                    />
                                    
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label
                                        htmlFor="phone"
                                        className="block dark:text-gray-400"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        
                                        name="phone"
                                        id="phone"
                                        placeholder='Phone'
                                        className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white"
                                    />
                                    
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label
                                        htmlFor="email"
                                        className="block dark:text-gray-400"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        
                                        name="email"
                                        id="email"
                                        placeholder='E-mail '
                                        className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white"
                                    />
                                    
                                </div>
                            </div>
                            <div className="space-y-1 text-sm mt-3">
                                <label htmlFor="option" className="block dark:text-gray-400">
                                    Services
                                </label>
                                <select
                                    
                                    id="option"
                                    className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white"
                                    required
                                >
                                    <option value={""} disabled hidden selected required>
                                        Select One
                                    </option>
                                    <option value="CDPAP">CDPAP</option>
                                    <option value="PCA">PCA</option>
                                    
                                </select>
                                
                            </div>

                                <hr className='my-5' />

                                <div className="space-y-1 text-sm mt-1">
                                <label htmlFor="option" className="block dark:text-gray-400">
                                    Inquiry Type
                                </label>
                                <select
                                    
                                    id="option"
                                    className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white"
                                    required
                                >
                                    <option value={""} disabled hidden selected required>
                                        Select One
                                    </option>
                                    <option value="General">General Inquiry</option>
                                    <option value="Grievance">Grievance</option>
                                    
                                </select>
                                
                            </div>
                            
                            
                            <div className="space-y-1 text-sm  mt-5">
                                <label htmlFor="description" className="block dark:text-gray-400">
                                    Subject
                                </label>
                                <textarea
                                    type="tel"
                                    
                                    name="subject"
                                    id="subject"
                                    rows={5}
                                    placeholder="Subject"
                                    className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white"
                                />
                               
                            </div>
                            <button className="block w-full p-3 text-center rounded-sm  bg-primary hover:bg-secondary text-white mt-6">
                                Send
                            </button>
                        </form>
                    </div>
                </section>
            </div>
    );
};

export default ContactForm;