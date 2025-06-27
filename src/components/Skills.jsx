import React, { useState } from 'react'
import java from '../assets/java-original.svg'
import css from '../assets/css3-original.svg'
import tailwindcss from '../assets/tailwindcss-original.svg'
import html from '../assets/html5-original.svg'
import git from '../assets/git-original.svg'
import spring from '../assets/spring-original.svg'
import python from '../assets/python-original.svg'
import javascript from '../assets/javascript-original.svg'
import react from '../assets/react-original.svg'
import postman from '../assets/postman-original.svg'
import node from '../assets/nodejs-original-wordmark.svg'
import express from '../assets/express-js.svg'
import vscode from '../assets/vscode-original.svg'
import sql from '../assets/sql.svg'
import bootstrap from '../assets/bootstrap.svg'
import postgresql from '../assets/postgresql-original-wordmark.svg'
import mysql from '../assets/mysql-original-wordmark.svg'
import mongodb from '../assets/mongodb-original.svg'
import github from '../assets/github.svg'
import word from '../assets/Microsoft_Office_Word.png'
import powerpoint from '../assets/Microsoft_Office_PowerPoint.png'

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(null)

    const skills = [
        { name: 'Java', src: java },
        { name: 'Python', src: python },
        { name: 'JavaScript', src: javascript },
        { name: 'HTML', src: html },
        { name: 'CSS', src: css },
        { name: 'SQL', src: sql },
        { name: 'React', src: react },
        { name: 'Node', src: node },
        { name: 'Express', src: express },
        { name: 'Spring', src: spring },
        { name: 'Tailwind CSS', src: tailwindcss },
        { name: 'Bootstrap', src: bootstrap },
        { name: 'MongoDB', src: mongodb },
        { name: 'MySQL', src: mysql },
        { name: 'PostgreSQL', src: postgresql },
        { name: 'Git', src: git },
        { name: 'GitHub', src: github },
        { name: 'Postman', src: postman },
        { name: 'Word', src: word },
        { name: 'Powerpoint', src: powerpoint },
        { name: 'Visual Studio Code', src: vscode },
    ]

    // Optional: Hide label on outside click (for mobile)
    const handleClickOutside = () => setActiveSkill(null)

    return (
        <section
            id='skills'
            className='py-24 px-4 relative'
            onClick={handleClickOutside}
        >
            <div className='container mx-auto max-w-5xl'>
                <h3 className='text-3xl md:text-4xl mb-12 font-bold text-center'>
                    My<span className='text-primary'> Skills</span>
                </h3>
            </div>

            <div className='grid grid-cols-3 lg:grid-cols-7 gap-6 px-4 sm:px-8 md:px-16'>
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className={`flex flex-col items-center justify-center group transition-transform hover:scale-105 rounded-xl p-3
                        ${activeSkill === index ? 'border border-primary' : 'border border-transparent hover:border-primary'}`}

                        onClick={(e) => {
                            e.stopPropagation()
                            setActiveSkill(index)
                        }}
                    >
                        <img
                            src={skill.src}
                            alt={skill.name}
                            className='w-14 h-14 object-contain'
                        />

                        <span
                            className={`
                mt-2 text-sm text-muted-foreground
                transition-opacity duration-300
                ${activeSkill === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
              `}
                        >
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
