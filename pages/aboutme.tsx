import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion"

const AboutMeIntro: NextPage = () => {
	return (
		<>
{/*			<div className={'container-sm '}>
				<div className={["p-5", styles.primary, styles.introheader].join(' ')}>
		            <h1 className="my-0">About Me</h1>
		        </div>
		        <div>
		        	<p>
		        	My name is Shirley Xu, and I love sharing my creativity with the world by building products that are well-designed and user-friendly. 
		        	I've loved programming and being creative ever since I was a kid; at the age of 8, I discovered the Scratch programming language, and that's where it all began.
		        	I made small games and animations, combining my knowledge of programming and art to make my creative inklings into reality. Fifteen years later, I am still working on making ideas come to life.
		        	I love to learn about nearly everything, as I notice how design and patterns factor into many aspects of everyday life and the systems that fuel it.
		        	</p>
		        	<p>
		        	I graduated with my Bachelor's in Computer Science in 2020 with a minor in Linguistics. Towards the end of my college career, however, as COVID became more pervasive
		        	throughout various areas of my life, I also took an interest in the life sciences; through my own initiative, I took courses in organic chemistry and molecular biology
		        	with hope of expanding my knowledge of myself and the world around me. I'm a self-taught artist as well, creating concept art and illustration.
		        	</p>
		        	
		        </div>
			</div>*/}
			  	<div className={['container-sm mt-5'].join(' ')}>
			  		<div className={['row justify-content-md-center'].join(' ')}>
				  		<div className={['col-10'].join(' ')}> 
						  	<div className={[styles.focusbox].join(' ')}>
						    	<div className="row p-0">
						    		<div className={["col-sm-12 col-lg-5 p-5", styles.purplebg].join(' ')}>
					    				<h1>
					    					Me at a glance
					    				</h1>
						    		</div>
						    		<div className={["col-sm-12 col-lg-7 p-5", styles.primary].join(' ')}>
						    			<div className="row mb-3">
								    		<p>
							        	My name is Shirley Xu, and I love sharing my creativity with the world by building products that are well-designed and user-friendly. 
							        	I've loved programming and being creative ever since I was a kid; at the age of 8, I discovered the Scratch programming language, and that's where it all began.
							        	I made small games and animations, combining my knowledge of programming and art to make my creative inklings into reality. Fifteen years later, I am still working on making ideas come to life.
							        	I love to learn about nearly everything, as I notice how design and patterns factor into many aspects of everyday life and the systems that fuel it.
							        	</p>
							        	<p>
							        	I graduated with my Bachelor's in Computer Science in 2020 with a minor in Linguistics. Towards the end of my college career, however, as COVID became more pervasive
							        	throughout various areas of my life, I also took an interest in the life sciences; through my own initiative, I took courses in organic chemistry and molecular biology
							        	with hope of expanding my knowledge of myself and the world around me. I'm a self-taught artist as well, creating concept art and illustration.
							        	</p>
						    			</div>
						    			<div className="row mb-3 p-0">
						    				<div className="col px-3">
						    					<button type="submit" className={["btn p-3 mt-1", styles.contactmebtn, styles.fillwidth].join(' ')}>Download my Resume</button>
						    				</div>
						    			</div>
						    		</div>
						    	</div>	
						    </div>
						</div>
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
							<div className={["col-5 p-5", styles.centervertical].join(' ')}>
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
						<div className="col-6" />
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@900&family=Montserrat&family=Telex&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <AboutMePage />  
        
    </div>
  );
}

export default AboutMe
