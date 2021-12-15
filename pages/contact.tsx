import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CSSTransitionGroup } from 'react-transition-group'

import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'

const ContactMePage: NextPage = () => {
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
										Contact Me
									</h1>
									<p>
										Tell me about your company or project, or just ask me anything! I am open for inquiries.
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
				<ContactMeForm />
			</motion.div>
		</div>
		
	);
}

const ContactMeForm: NextPage = () => {
	const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('/api/register', {
	      body: JSON.stringify({
	        name: event.target.name.value
	      }),
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      method: 'POST'
	    })

	    const result = await res.json()
	    // result.user => 'Ada Lovelace'
  	}

  return (
  	<div className={['container-sm mt-5'].join(' ')}>
  		<div className={['row justify-content-md-center'].join(' ')}>
	  		<div className={['col-10'].join(' ')}> 
			  	<div className={[styles.focusbox].join(' ')}>
				    <form onSubmit={registerUser}>
				    	<div className="row p-0">
				    		<div className={["col-7 p-5", styles.primary].join(' ')}>
				    			<div className="row mb-3">
						    		<div className="col px-3">
							    		<label htmlFor="name">Name</label>
							    		<br />
							    		<input id="name" name="name" type="text" autoComplete="name" className={["mt-1", styles.fillwidth].join(' ')} required />
							    	</div>
							    	<div className="col px-3">
							    		<label htmlFor="email">Email</label>
							    		<br />
							    		<input id="email" name="email" type="text" autoComplete="email" className={["mt-1", styles.fillwidth].join(' ')} required />
							    	</div>
				    			</div>
				    			<div className="row mb-3">
				    				<div className="col px-3">
				    					<label htmlFor="email">Phone Number</label>
				    					<br />
				    					<input id="phonenumber" name="phonenumber" type="text" autoComplete="phonenumber" className={["mt-1", styles.fillwidth].join(' ')} required />
				    				</div>
				    				<div className="col px-3">
				    					<label htmlFor="email">Company</label>
				    					<br />
				    					<input id="company" name="company" type="text" autoComplete="company" className={["mt-1", styles.fillwidth].join(' ')} required />
				    				</div>
				    			</div>
				    			<div className="row mb-3 p-0">
				    				<div className="col px-3">
					    				<label htmlFor="message">Message</label>
					    				<br />
					    				<textarea id="message" name="message" className={[styles.fillwidth].join(' ')} rows={8} maxlength="100000" required />
				    				</div>
				    			</div>
				    			<div className="row mb-3 p-0">
				    				<div className="col px-3">
				    					<button type="submit" className={["btn p-3 mt-1", styles.contactmebtn, styles.fillwidth].join(' ')}>Submit</button>
				    				</div>
				    			</div>
				    		</div>
				    		<div className={["col-5 p-5", styles.purplebg].join(' ')}>
				    			Hi
				    		</div>
				    	</div>	
				    </form>
			    </div>
			</div>
		</div>
	</div>
  )	
}


const ContactMe: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@900&family=Montserrat&family=Telex&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <ContactMePage />  
        
    </div>
  );
}

export default ContactMe
