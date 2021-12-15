import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'

const AboutMeIntro: NextPage = () => {
	return (
		<>
			<div className={'container-sm '}>
				<div className={["p-5", styles.primary, styles.introheader].join(' ')}>
		            <h1 className="my-0">About Me</h1>
		        </div>
		        <div>
		        	<p>
		        	Hello! My name is Shirley Xu, and I love sharing my creativity with the world by building products that are well-designed and user-friendly. 
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
			</div>

		</>
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
      <AboutMeIntro />  
        
    </div>
  );
}

export default AboutMe
