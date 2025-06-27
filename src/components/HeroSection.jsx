import { ChevronsDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState([]);
    const profiles = [
        "Full Stack Dev",
        "MERN Stack Proficient",
        "Data Science",
        "Data Analysis"
    ];

    useEffect(() => {
        let timer;

        if (index < profiles.length) {
            timer = setTimeout(() => {
                setVisible((prev) => [...prev, profiles[index]]);
                setIndex(index + 1);
            }, 1000);
        } else {
            timer = setTimeout(() => {
                setVisible([]);
                setIndex(0);
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className='container max-w-4xl mx-auto text-center'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'> Hi I'm </span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-2'> Soham </span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-2'> Kulkarni </span>
                    </h1>

                        <p className="text-sm md:text-xl font-bold tracking-tight text-muted-foreground hover:text-primary transition-colors card-hover opacity-0 animate-fade-in-delay-2 flex flex-wrap justify-center gap-x-2 gap-y-1 min-h-[3.5rem] md:min-h-[2rem] text-center">
                        {visible.map((profiles, i) => (
                            <span key={i} className="flex items-center">
                                <span className={i === visible.length - 1 ? 'text-primary' : 'text-muted-foreground'}>
                                    {profiles}
                                </span>
                                {i < visible.length - 1 && <span className="mx-1 text-primary-foreground">|</span>}
                            </span>
                        ))}
                    </p>


                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I create stellar web experiences with modern technologies.
                        As a full-stack developer, I build scalable applications with seamless front-end
                        interfaces and robust back-end architectures that deliver great performance and reliability.
                    </p>

                    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                        <a href='#projects' className='cosmic-button'>Here's My Work</a>
                    </div>
                </div>
            </div>

            {/* <div className='absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                <ChevronsDown className='h-5 w-5 text-primary' />
            </div> */}
        </section>
    )
}

export default HeroSection
