import React from 'react'
import { DatabaseZap, Code, LaptopMinimal } from "lucide-react";

const About = () => {
    return (
        <section id='about' className='py-24 px-4 relative min-h-screen'>
            <div className='container mx-auto max-w-5xl'>
                <h3 className='text-3xl md:text-4xl mb-12 font-bold text-center'>
                    About<span className='text-primary'> Me</span>
                </h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h2 className='text-2xl font-semibold'>Passionate Web Developer <br /> & <br />
                        Collaborative Tech-Enthusiast</h2>
                    

                    <p className='mb-3 text-muted-foreground'>
                        I'm passionate about creating elegant solutions to complex
                        problems, and I'm constantly learning new technologies and
                        techniques to stay at the forefront of the ever-evolving web
                        development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a
                            href="https://drive.google.com/file/d/11mk6J5yAefKEFdtysQY4OPIeYkCUfWHG/view"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/50 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='gradient-border p-6 card-hover'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <LaptopMinimal className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Software Development</h4>
                                    <p className="text-muted-foreground">
                                        Designing, developing, and debugging cross-platform desktop and mobile applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <DatabaseZap className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Science</h4>
                                    <p className="text-muted-foreground">
                                        Cleaning, visualizing, and modeling data to uncover hidden patterns and trends.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ section>
    )
}

export default About
