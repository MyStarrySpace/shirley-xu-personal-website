import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next-optimized-images'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import imgWebDesign from '../images/WebDesign.svg'
import imgWebDevelopment from '../images/WebDevelopment.svg'
import imgIllustration from '../images/Illustration.svg'
import Portrait from '../images/Portrait.jpeg'

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
                        <Image src={Portrait} className={[styles.portrait].join(' ')} width="150" height="150"/>
                      </div>
                      
                      <div className="col-3"></div>
                    </div>
                  </div>
                  <div className="bg-light p-5">
                    <p className="my-0 pb-4">
                      Hello! I am a full-stack web developer and designer proficient in React, Next.js, Express.js, MongoDB, Node.js, and Typescript. 
                      I also have plenty of experience with web design and illustration. My keen artistic eye allows me to design web pages that flow well and are friendly to users.
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
  delay: number;
}

const ServiceCard: any = (contents: CardContents) => {
  const [ref, inView] = useInView({ threshold: 0.2,})

  const controls = useAnimation();

  if (inView) {
    controls.start('visible');
  }
  if (!inView) {
    controls.start('hidden');
  }

  return (
    
      <div className="col-sm-12 col-lg-4 mt-4">
        <motion.div initial="hidden" animate={controls} variants={{
                hidden: {opacity: 0}, 
                visible: {opacity: 1, transition: { duration: 0.5, when: "beforeChildren", delay: contents.delay}}
              }}>
          <div ref={ref} className={[styles.servicescard, 'card h-100'].join(' ')}>
            <div className="row">
              <div className={[styles.cardfill, 'col-xs-12 col-sm-4 col-lg-12'].join(' ')}>
                <Image src={contents.image} className={styles.cardimg}/>
              </div>
              <div className={[styles.cardtext, 'col-xs-12 col-sm-8 col-lg-12'].join(' ')}>
                <h5 className={[styles.cardtitle, 'card-title mt-4 mb-0 px-3'].join(' ')}>
                {contents.title}
                </h5>
                <p className={['card-body px-4', styles.cardbody].join(' ')}>
                {contents.body}
                </p>
              </div>
            </div>
          </div>
          </motion.div> 
      </div>
    
  )
}

const Services: NextPage = () => {

  let contents0: CardContents = {title: "UI Design and Development", 
    body: "Are you looking for someone to help you design and implement your user interfaces? You've come to the right place! \
    Having studied user experience, data visualization, and human-computer interaction, \
    I am experienced with creating delightful visual and functional experiences for users of all kinds.", image: imgWebDesign, delay: 0}
  let contents1: CardContents = {title: "Full-stack Development", 
    body: "Having graduated with a B.S. in Computer Science from the University of Massachusetts Amherst, \
    I have worked with both frontend and backend programming, including networking, design, and full-stack development. \
    I have vast experience with the MERN stack, Typescript, and APIs, which I have also used in my personal website.", image: imgWebDevelopment, delay: 0.2}
  let contents2: CardContents = {title: "Illustration", 
    body: "I have been drawing for 7+ years and won the Gold Scholastic Art Award in 2016. I have a passion for art and illustration; in fact, \
    I was accepted into the Rhode Island School of Design, one of the most prestigious art schools. \
    Even though I chose a different path, I still create digital art and have done various concept art pieces as well.", image: imgIllustration, delay: 0.4}
  return (
    <div className={styles.purplebg}> 
      <div className={["container-fluid p-5"].join(' ')}>
        <div className={[styles.title, "py-4"].join(' ')}>
          <h2> What can I do for you? </h2>
        </div>
        <div className={["row g-4 my-5", styles.constraincenter].join(' ')}>
          <ServiceCard {...contents0} />
          <ServiceCard {...contents1} />
          <ServiceCard {...contents2} />
        </div>
      </div>
    </div>
  )
}

const Projects: NextPage = () => {
  return(
    <div className={styles.projects}>
      <div className={["container-md p-5"].join(' ')}>
        <h1 className={[styles.projectstitle, styles.title, "py-4"].join(' ')}>
          My projects
        </h1>
        <div className="row g-4 my-5">
          <div className="col">
            Coming soon! I have been drawing for 7+ years and won the Gold Scholastic Art Award in 2016. I have a passion for art and illustration.
          </div>
          <div className="col">
            Coming soon! I have been drawing for 7+ years and won the Gold Scholastic Art Award in 2016. I have a passion for art and illustration.
          </div>
          <div className="col">
            Coming soon! I have been drawing for 7+ years and won the Gold Scholastic Art Award in 2016. I have a passion for art and illustration.
          </div>
          <div className="col">
            Coming soon! I have been drawing for 7+ years and won the Gold Scholastic Art Award in 2016. I have a passion for art and illustration.
          </div>
        </div>
      </div>
    </div>
  )
  
}

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@900&family=Montserrat&family=Telex&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      <Intro />
      <Services />
      <Projects />        
    </div>
  );
}

export default Home
