import React from 'react'
import { useInView } from 'react-intersection-observer'

const SectionItem = ({ title, subtitle, details, date, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false })

  const isLeft = index % 2 !== 0

  // Animation class — works on both mobile and desktop
  const translateClass = inView
    ? isLeft
      ? 'translate-x-[-12%] sm:translate-x-[-30%]'
      : 'translate-x-[12%] sm:translate-x-[30%]'
    : 'translate-x-0'

  const textAlignClass = inView
    ? isLeft
      ? 'text-left'
      : 'text-right'
    : 'text-center'

  return (
    <div
      ref={ref}
      className={`relative w-full px-3 py-4 transition-all duration-300 ease-in-out
        flex justify-center ${translateClass}
      `}
    >
      <div
        className={`bg-muted p-3 rounded-lg shadow-md border border-primary
          w-full max-w-[92%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[45%]
          transition-all duration-300 ease-in-out ${textAlignClass}
        `}
      >
        <h1 className='font-semibold text-base sm:text-lg'>{title}</h1>
        <h2 className='text-sm'>{subtitle}</h2>
        {details && <p className='text-sm'>{details}</p>}
        {date && <p className='text-xs text-muted-foreground'>{date}</p>}
      </div>
    </div>
  )
}

const Educations = () => {
  const timelineData = [
    {
      title: '10th SSC',
      subtitle: 'M.S.Golwalkar Guruji Vidyalaya',
      details: '90.60%',
      date: 'Mar - 2018',
    },
    {
      title: '12th HSC',
      subtitle: 'Fergusson College',
      details: '69.54%',
      date: 'Feb - 2020',
    },
    {
      title: "Bachelor's Degree (BSc. CS)",
      subtitle: "P.V.G.'s College Of Science",
      details: '9.10 CGPA',
      date: 'Completed: Apr - 2023',
    },
    {
      title: 'Web Development',
      subtitle: 'Self-Learning Journey',
      details: 'HTML, CSS, JavaScript | Built basic-level projects',
      date: '',
    },
    {
      title: 'Freelancing Web Developer',
      subtitle: 'TechTorch',
      date: 'January 2024',
    },
    {
      title: 'MERN Stack Internship',
      subtitle: 'Edunet Foundation',
      date: 'Feb-2025 to Mar-2025',
    },
    {
      title: "Master's Degree (MCA)",
      subtitle: 'Sinhgad Institute of Management',
      details: '8.5 CGPA',
      date: 'Completed: Jun - 2025',
    },
  ]

  return (
    <div id='educations' className='py-20 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h3 className='text-2xl sm:text-3xl md:text-4xl mb-12 font-bold text-center'>
          My<span className='text-primary'> Learning Path</span>
        </h3>

        <div className='relative'>
          <div className='flex flex-col items-center'>
            {timelineData.map((item, index) => (
              <SectionItem
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                details={item.details}
                date={item.date}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Educations
