import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion"

import iconEducation from '../images/iconEducation.svg'
import iconExperience from '../images/iconExperience.svg'
import iconGlobe from '../images/iconGlobe.svg'
import iconInterests from '../images/iconInterests.svg'

const AboutMeIntro: NextPage = () => {
	return (
		<>
		 	<div className={['container-sm mt-5', styles.centerh].join(' ')}>
		  	<div className={['row justify-content-md-center mb-5'].join(' ')}>
		  		<div className={'col-1'}></div>
			 		<div className={['col-10'].join(' ')}> 
				  	<div className={[styles.focusbox].join(' ')}>
				    	<div className="row p-0">
				    		<div className={["col-sm-12 col-lg-5 p-5", styles.purplebg].join(' ')}>
			    				<h3 className={["mb-4", styles.center, styles.title].join(' ')}>
			    					Me at a glance
			    				</h3>
			    				<div className={["row gy-3"].join(' ')}>
				    				<div className={["col-sm-6 col-lg-12"].join(' ')}>
					    				<div className={["row"].join(' ')}>
				    						<div className={["col-sm-12 col-lg-3", styles.center].join(' ')}>
						    					<Image src={iconEducation} alt="" width="100" height="100"/>
						    				</div>
						    				<div className={["col-sm-12 col-lg-9", styles.center].join(' ')}>
						    					<div className={["row"].join(' ')}>B. S. Computer Science
						    						<br /> M. S. Bioinformatics
						    					</div>
						    				</div>	
						    			</div>
					    			</div>
					    			<div className={["col-sm-6 col-lg-12"].join(' ')}>
					    				<div className={["row"].join(' ')}>
					    					<div className={["col-sm-12 col-lg-3", styles.center].join(' ')}>
						    					<Image src={iconExperience} alt="" width="100" height="100"/>
						    				</div>
						    				<div className={["col-sm-12 col-lg-9", styles.center].join(' ')}>
						    					<div className={["row"].join(' ')}>
						    						1.5 years of programming experience
						    					</div>
						    				</div>	
						    			</div>
					    			</div>
					    			<div className={["col-sm-6 col-lg-12"].join(' ')}>
					    				<div className={["row"].join(' ')}>
					    					<div className={["col-sm-12 col-lg-3", styles.center].join(' ')}>
						    					<Image src={iconInterests} alt="" width="100" height="100"/>
						    				</div>
						    				<div className={["col-sm-12 col-lg-9", styles.center].join(' ')}>
						    					<div className={["row"].join(' ')}>
						    						Likes art, biology, programming, and languages
						    					</div>
						    				</div>	
						    			</div>
					    			</div>
					    			<div className={["col-sm-6 col-lg-12"].join(' ')}>
					    				<div className={["row"].join(' ')}>
					    					<div className={["col-sm-12 col-lg-3", styles.center].join(' ')}>
						    					<Image src={iconGlobe} alt="" width="100" height="100"/>
						    				</div>
						    				<div className={["col-sm-12 col-lg-9", styles.center].join(' ')}>
						    					<div className={["row"].join(' ')}>
						    						Based in East Massachusetts
						    					</div>
						    				</div>	
						    			</div>
					    			</div>
						    	</div>
						   	</div>
					    	<div className={["col-sm-12 col-lg-7 p-5", styles.primary].join(' ')}>
					    		<div className="row mb-3">
							   		<p>
						        	My name is Shirley Xu, and I love sharing my creativity with the world by building products that are well-designed and user-friendly. 
						        	I&apos;ve loved programming and being creative ever since I was a kid; at the age of 8, I discovered the Scratch programming language, and that&apos;s where it all began.
						        	I made small games and animations, combining my knowledge of programming and art to make my creative inklings into reality. Fifteen years later, I am still working on making ideas come to life.
						        	I love to learn about nearly everything, as I notice how design and patterns factor into many aspects of everyday life and the systems that fuel it.
						       	</p>
						       	<p>
						        	I graduated with my Bachelor&apos;s in Computer Science in 2020 with a minor in Linguistics. Towards the end of my college career, however, as COVID became more pervasive
						        	throughout various areas of my life, I also took an interest in the life sciences; through my own initiative, I took courses in organic chemistry and molecular biology
						        	with hope of expanding my knowledge of myself and the world around me. I&apos;m a self-taught artist as well, creating concept art and illustration.
						       	</p>
						       	<p>
						       		I am very quick to adapt to new technologies; at my internship at Dell EMC, I was able to commit code for my first ticket to improve the Escalation Engineering tool suite within my first week. 
						       		It really warmed my heart when my supervisor told me that they are still using the tool I made months later! 
						       		I take pride in being a quick learner and adapting well to new environments. After all, life changes quickly, and it is important to always be improving.
						       	</p>
					    		</div>
					    		<div className="row mb-3 p-0">
					    			<div className="col px-3">
					    				<a href="/files/shirley-xu-resume.pdf" className={"text-decoration-none"} download>
					    					<button className={["btn p-3 mt-1", styles.contactmebtn, styles.fillwidth].join(' ')}>Download my Resume</button>
					    				</a>
					    			</div>
					    		</div>
					    	</div>
					   	</div>	
					   </div>
				   <div className={'col-1'}></div>
					</div>
					<div className={'col-1'}></div>
				</div>
			</div>
		</>
	);
	
}

const AboutMePage: NextPage = () => {
  return (
		<div>
			<div className={[styles.purplebg, styles.contactbg].join(' ')}>
				<div className="container-sm">
					<div className="row justify-content-md-center">
						<div className="col-1" />
							<div className={["col-sm-12 col-lg-6 p-5"].join(' ')}>
								<motion.div initial="initial" animate="animate" transition={{ delay: 0.2 }} variants={{ 
			                  initial: { opacity: 0}, 
			                  animate: { opacity: 1}, 
			                }}>
									<h1>
										About Me
									</h1>
									<p>
										Here is some information about who I am!
									</p>
								</motion.div>
							</div>
						<div className="col-sm-0 col-lg-5" />
					</div>
				</div>
			</div>
			<motion.div initial="initial" animate="animate" transition={{ delay: 0.2 }} variants={{ 
			                  initial: { opacity: 0, y: -300}, 
			                  animate: { opacity: 1, y: 0}, 
			                }}>
				<AboutMeIntro />
			</motion.div>
		</div>
		
	);
}

const AboutMe: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@900&family=Montserrat&family=Telex&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <AboutMePage />  
        
    </div>
  );
}

export default AboutMe
