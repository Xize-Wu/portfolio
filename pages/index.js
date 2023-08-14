import Head from "next/head"
import { AiOutlineCompass, AiFillLinkedin, AiFillGithub, AiTwotoneMail, AiTwotoneExclamationCircle } from "react-icons/ai"
import Image from "next/image"
import styles from '../styles/index.module.css';
import React, { useEffect, useState } from "react";
import selfie from '../public/selfie.png'
import goal from '../public/goal.png'
import tinyapp from '../public/tinyapp.png'


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 780);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Aster Wu - Full Stack developer</title>
        <meta name='description' content='Generated by cre'></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=" px-10 ">
        <nav className="py-7 flex justify-between">
          <h1 className="text-xl"></h1>

          <ul className="flex items-center">
            <li><AiOutlineCompass className="cursor-pointer text-2xl" /></li>
            <li><a className="bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white px-4 py-2 mr-10 zborder-none rounded-md ml-8" href="https://resume.creddle.io/resume/asz116adapd">Resume</a></li>
          </ul>
        </nav>
        <section className={`${styles.transparentPink} min-h-screen`}>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-purple-800 font-medium" >Aster Wu</h2>
            <h3 className="text-2xl py-3 text-purple-900 ">Full-Stack Web Developer.</h3>
            <div className={`${styles.clipNotch} text-md py-5 leading-8 text-purple-950 border-2 p-6 border-fuchsia-700 clip-notch`}>
              <p>
                Some realized their <span class="font-bold">passion </span>is coding since childhood, and I realized it after recieving degrees in economy and business, and working differnet jobs.           Luckily, I'm never afraid of <span class="font-bold">learning </span>new things, and have graduated from Lighthouse Labs Web Development Bootcamp after 12 weeks of intense, immersive studying.
              </p>
              <p>
                Life is a series of never-ending challenges, and now I feel <span class="font-bold">
                  ready</span> for my new challenge as web developer.
              </p>
            </div>
          </div>
          <div className="text-5xl flex justify-center gap-16 pb-16">
            <div>
              <a
                href="https://www.linkedin.com/in/aster-wu-404a8a1b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Xize-Wu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
            <a href="mailto:asterwu2@gmail.com"><AiTwotoneMail /></a>

          </div>
          <div className="relative mx-auto layout-fill bg-gradient-to-b from-pink-500 rounded-full w-60 h-60 mb-10 overflow-hidden">
            <Image
              src={selfie}
              alt="Selfie Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />
          </div>

        </section>
        <section className={`${styles.transparentPink} min-h-screen`}>
          <div className="text-3xl py-1">
            <h3 className="text-3xl py-2 text-purple-800 font-medium pl-5 text-center">My Tech Stacks</h3>
            <div className={`min-w-min py-10 px-10 mb-12 flex justify-between ${styles.techStacks} ${isMobile ? styles.techStacksMobile : ''}`}>
              <div className={`${styles.clipNotch} flex justify-center border-fuchsia-700 items-center py-2 px-5 h-full flex-col text-center shadow-lg p-10 `}>
                <h4 className="text-3xl py-2 text-purple-800 font-medium px-3 ">Languages</h4>
                <ul>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Ruby</li>
                  <li>SQL</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </div>
              <div className={`${styles.clipNotch} flex justify-center border-fuchsia-700 items-center py-2 px-5 h-full flex-col text-center shadow-lg p-10`}>
                <h4 className="text-3xl py-2 text-purple-800 font-medium px-3 ">Frameworks</h4>
                <ul className="py-3">
                  <li>Node</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Vite</li>
                  <li>Tailwind</li>
                  <li>Express</li>
                  <li>Rails</li>
                  <li>jQuery</li>
                  <li>AJAX</li>
                </ul>
              </div>
              <div className={`${styles.clipNotch} flex justify-center border-fuchsia-700 items-center py-2 px-5 h-full flex-col text-center shadow-lg p-10`}>
                <h4 className="text-3xl py-2 text-purple-800 font-medium px-4 ">Miscs</h4>
                <ul className="py-3 px-3">
                  <li>Sequelize</li>
                  <li>Prisma</li>
                  <li>Git</li>
                  <li>Mocha</li>
                  <li>Chai</li>
                  <li>Cypress</li>
                  <li>Storybook</li>
                </ul>
              </div>


            </div>
          </div>
        </section>
        <section className={`${styles.transparentPink} min-h-screen pb-24`}>
          <div className="text-3xl py-1">
            <h3 className="text-3xl pb-10 pl-5 text-purple-800 font-medium text-center">My Projects</h3>
            <a href="https://github.com/Xize-Wu/GOAL">
              <div className={`mt-10 ${styles.clipNotch} flex justify-center  text-purple-800 border-fuchsia-700 items-center py-2 px-5 h-full flex-col text-center shadow-lg p-10`}>
                <div className='mt-5' >
                  G.O.A.L.</div>
                <div className={`text-md py-5 leading-8 text-purple-950`}>
                  <p className="text-base">
                    A productivity and organization app that allows a user to establish long-term goals and break them down into digestible milestones, as well as letting the user get in touch with an accountability buddy and stay in touch via chat.
                  </p>
                  <p className="text-base">
                    Built with React, utilizing libraries such as prisma and websocket.                </p>
                </div>
                <div className="max-w-[50%] relative mx-auto layout-fill  w-96 h-96 mb-10 overflow-hidden">
                  <Image
                  className="object-contain w-full h-auto z-10"
                    src={goal}
                    alt="goal"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"

                  />

                </div>


              </div>
            </a>
            <div className={`mt-10 ${styles.clipNotch} flex justify-center  text-purple-800 border-fuchsia-700 items-center py-2 px-5 h-full flex-col text-center shadow-lg p-10`}>
              <div className='mt-5' >TinyApp React</div>
              <div className={`text-md py-5 leading-8 text-purple-950`}>
                <p className="text-base">
                  TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly). Users can register and login. Each user is tracked with a cookie. Only logged in users can create & edit their own links.
                </p>
                <p className="text-base">
                  This was a rebuild of the original TinyApp project using react framework, vite and sequelize.
                </p>
              </div>
              <div className="max-w-[50%] relative mx-auto layout-fill w-96 h-96 mb-10 overflow-hidden">
                <Image
                  src={tinyapp}
                  alt="goal"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center center"
                  className="z-10"
                />

              </div>


            </div>

          </div>
        </section>

      </main>
    </div>
  )
}
