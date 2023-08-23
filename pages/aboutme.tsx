import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion"

import iconEducation from '../public/images/iconEducation.svg'
import iconExperience from '../public/images/iconExperience.svg'
import iconGlobe from '../public/images/iconGlobe.svg'
import iconInterests from '../public/images/iconInterests.svg'

const AboutMeIntro: NextPage = () => {
	return (
		<>
		 	<div className={['container-sm mt-4', styles.centerh].join(' ')}>
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
						    					<Image src={iconEducation} alt="" width="80" height="80"/>
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
						    					<Image src={iconExperience} alt="" width="80" height="80"/>
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
						    					<Image src={iconInterests} alt="" width="80" height="80"/>
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
						    					<Image src={iconGlobe} alt="" width="80" height="80"/>
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
									   Welcome! I am Shirley Xu, a passionate creator, software engineer, and bioinformatician with a flair for blending technology, design, and the life sciences. My journey into the fascinating world of programming began at the age of 8 when I discovered the Scratch programming language. From creating small games to intricate animations, I transformed my creative inklings into tangible realities, igniting a lifelong passion for bringing ideas to life.
									</p>
									<p>
									<b>Educational Background: </b>
									I hold a Bachelor&apos;s in Computer Science with a minor in Linguistics from the University of Massachusetts, where I graduated in 2020. As the COVID pandemic shaped the world, I sought to expand my horizons, delving into organic chemistry and molecular biology. My curiosity led me to pursue a master&apos;s in bioinformatics, which I earned from Brandeis University in 2023. Additionally, I am a self-taught artist with skills in concept art and illustration—a passion that earned me acceptance into the prestigious Rhode Island School of Design, though I chose to pursue computer science.
									</p>
									<p>
									<b>Professional Experience: </b>
									My professional journey includes an impactful internship at Dell EMC, where I quickly adapted to new technologies and contributed code within my first week. The Escalation Engineering tool suite I improved is still in use, a testament to the quality and enduring value of my work. My supervisor&apos;s commendation warmed my heart and reinforced my commitment to excellence.
									I pride myself on being a quick learner, agile in adapting to new environments, and relentless in my pursuit of growth. Life&apos;s ever-changing nature has taught me the importance of continuous improvement—a principle that guides my professional endeavors.
									</p>
									<p>
									<b>Creative Insight: </b>
									My love for learning extends beyond technology, touching various aspects of everyday life, from design patterns to systemic intricacies. I see the world through a lens of creativity, where art, science, and technology converge to create meaningful and user-friendly products.
									</p>
									<p>
									<b>Conclusion: </b> 
									With a unique blend of technical expertise, artistic talent, and interdisciplinary curiosity, I am eager to contribute my skills to a dynamic team and take on new challenges. My background in both computer science and life sciences, coupled with my hands-on experience and love for creativity, positions me as a versatile and valuable asset. I look forward to the opportunity to continue building well-designed, innovative solutions that make a lasting impact.
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

const AboutMe: NextPage = () => {
  return (
		<div>
			<div className={[styles.purplebg, styles.aboutmebg].join(' ')}>
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
									<div>
										Here is some information about who I am!
									</div>
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

export default AboutMe
