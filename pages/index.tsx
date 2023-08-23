import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ProjectList from './/components/projectlist'
import ResponsiveCard from './/components/responsivecard'

import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import imgWebDesign from '../public/images/WebDesign.svg'
import imgWebDevelopment from '../public/images/WebDevelopment.svg'
import imgIllustration from '../public/images/Illustration.svg'
import Portrait from '../public/images/shirley-portrait.jpg'

const Intro: NextPage = () => {
  return (
    <div>
      <div className={[styles.introbg].join(' ')}>
        <div className={"container-fluid"}>
          <div className={["row justify-content-md-center"].join(' ')}>
            <div className={["col-sm-12 col-lg-8", styles.center].join(' ')}>  
              <motion.div initial="initial" animate="animate" transition={{ delay: 0.2 }} variants={{ 
                  initial: { opacity: 0, y: -300}, 
                  animate: { opacity: 1, y: 0}, 
                }}>
                <div className={[styles.focusbox, "col border rounded mb-4"].join(' ')}>
                  <div className={["p-5", styles.primary].join(' ')}>
                    <div className="row">
                      <div className="col-2"></div>
                      <div className={["col-4", styles.introtitle].join(' ')}>
                        Hello! My name is
                        <h1 className={["my-0"].join(' ')}>Shirley Xu</h1>
                      </div>
                      <div className={["col-3", styles.portraitdiv].join(' ')}>
                        <Image src={Portrait} alt={"Portrait of Shirley Xu"} className={[styles.portrait].join(' ')} width="130" height="130"/>
                      </div>
                      
                      <div className="col-3"></div>
                    </div>
                  </div>
                  <div className="bg-light p-5">
                    <p className="my-0 pb-4">
                    I am Shirley Xu, a software engineer, bioinformatician, and self-taught artist with a passion for blending creativity, technology, and design. 
                    Whether I'm designing characters for gaming projects, analyzing data with bioinformatics tools or building responsive web applications, I approach every challenge with adaptability, innovation, and a commitment to excellence. 
                    My diverse educational background, hands-on experience, and artistic abilities fuel my desire to create meaningful and well-designed products that resonate with users.
                    </p>
                    <motion.div className="gx-5" initial="initial" animate="animate" transition={{ delay: 0.5 }} variants={{ 
                      initial: { opacity: 0}, 
                      animate: { opacity: 1}, 
                    }}>
                      <div className="row">
                        <div className="col-sm-0 col-lg-3"></div>
                        <div className="col-sm-6 col-lg-3">
                          <Link href="/aboutme">
                            <button className={["btn p-2", styles.aboutmebtn].join(' ')}>
                                <a className={["link", styles.link].join(' ')}>About Me</a>
                            </button>
                          </Link> 
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <Link href="/contact">
                             <button className={["btn p-2", styles.contactmebtn].join(' ')}>
                                 <a className={["link", styles.link].join(' ')}>Contact Me</a>
                             </button>
                           </Link>
                        </div> 
                        <div className="col-sm-0 col-lg-3"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface CardContents {
  title: string;
  body: string;
  image: any;
  index: number;
  delay: number;
}

const Services: NextPage = () => {

  let contents0: CardContents = {title: "UI Design and Development", 
    body: "Are you looking for someone to help you design and implement your user interfaces? You've come to the right place! \
    Having studied user experience, data visualization, and human-computer interaction, \
    I am experienced with creating delightful visual and functional experiences for users of all kinds.", image: imgWebDesign, index: 0, delay: 0}
  let contents1: CardContents = {title: "Full-stack Development", 
    body: "Having graduated with a B.S. in Computer Science from the University of Massachusetts Amherst, \
    I have worked with both frontend and backend programming, including networking, design, and full-stack development. \
    I have vast experience with the MERN stack, Typescript, and APIs, which I have also used in my personal website.", image: imgWebDevelopment, index: 1, delay: 0.2}
  let contents2: CardContents = {title: "Illustration", 
    body: "I have been drawing for 7+ years and won the Gold Scholastic Art Award in 2016. I have a passion for art and illustration; in fact, \
    I was accepted into the Rhode Island School of Design, one of the most prestigious art schools. \
    Even though I chose a different path, I still create digital art and have done various concept art pieces as well.", image: imgIllustration, index: 2, delay: 0.4}
  return (
    <div className={styles.purplebg}> 
      <div className={["container-fluid p-5"].join(' ')}>
        <div className={[styles.title, "py-4"].join(' ')}>
          <h2> What can I do for you? </h2>
        </div>
        <div className={["row g-4 my-4", styles.constraincenter].join(' ')}>
          <div className="col-sm-12 col-lg-4 mt-4">
            <ResponsiveCard {...contents0} />
          </div>
          <div className="col-sm-12 col-lg-4 mt-4">
            <ResponsiveCard {...contents1} />
          </div>
          <div className="col-sm-12 col-lg-4 mt-4">
            <ResponsiveCard {...contents2} />
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects: NextPage = () => {
  return (
    <div className={styles.projects}>
      <div className={["container-fluid p-5"].join(' ')}>
        <h1 className={[styles.projectstitle, styles.title, "py-4"].join(' ')}>
          My Work
        </h1>
        <ProjectList />
        {/* <div className="row">
          <a href="#" className={"text-decoration-none p-4"}>
            <button className={["btn p-3 mt-1", styles.contactmebtn, styles.fillwidth].join(' ')}>View more projects</button>
          </a>
        </div> */}
      </div>
    </div>
  )
  
}

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <Services />
      <Projects />        
    </>
  );
}

export default Home
