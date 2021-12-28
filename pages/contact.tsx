import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next-optimized-images'
import styles from '../styles/Home.module.css'

import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'

import iconGithub from '../images/iconGithub.svg'
import iconLinkedIn from '../images/iconLinkedIn.svg'
import iconFacebook from '../images/iconFacebook.svg'

const ContactMePage: NextPage = () => {
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
										Contact Me
									</h1>
									<p>
										Tell me about your company or project, or just ask me anything! I am open for inquiries.
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
				<ContactMeForm />
			</motion.div>
		</div>
		
	);
}

const ContactMeForm: NextPage = () => {
	const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phonenumber, company, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phonenumber: phonenumber.value,
      company: company.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
	<div className={['container-sm mt-5'].join(' ')}>
		<div className={['row justify-content-md-center mb-5'].join(' ')}>
			<div className={'col-1'}></div>
  		<div className={['col-10'].join(' ')}> 
		  	<div className={[styles.focusbox].join(' ')}>
			    <form onSubmit={handleSubmit}>
			    	<div className="row p-0">
			    		<div className={["col-sm-12 col-lg-7 p-5", styles.primary].join(' ')}>
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
			    					<label htmlFor="phonenumber">Phone Number</label>
			    					<br />
			    					<input id="phonenumber" name="phonenumber" type="text" autoComplete="phonenumber" className={["mt-1", styles.fillwidth].join(' ')} />
			    				</div>
			    				<div className="col px-3">
			    					<label htmlFor="company">Company</label>
			    					<br />
			    					<input id="company" name="company" type="text" autoComplete="company" className={["mt-1", styles.fillwidth].join(' ')} />
			    				</div>
			    			</div>
			    			<div className="row mb-3 p-0">
			    				<div className="col px-3">
				    				<label htmlFor="message">Message</label>
				    				<br />
				    				<textarea id="message" name="message" className={[styles.fillwidth].join(' ')} rows={8} maxLength={100000} required />
			    				</div>
			    			</div>
			    			<div className="row mb-3 p-0">
			    				<div className="col px-3">
			    					<button type="submit" className={["btn p-3 mt-1", styles.contactmebtn, styles.fillwidth].join(' ')}>{status}</button>
			    				</div>
			    			</div>
			    		</div>
		    			<div className={["col-sm-12 col-lg-5 p-5", styles.purplebg].join(' ')}>
		    				<div className={["row gy-3"].join(' ')}>
				    			<div className={["col-sm-4 col-lg-12"].join(' ')}>
				    				<a href="http://github.com/MyStarrySpace" className={"text-decoration-none text-white"}>
				    					<div className={["row"].join(' ')}>
					    					<div className={["col-sm-12 col-lg-3 col-xl-2", styles.center].join(' ')}>
						    					<Image src={iconGithub} alt="" width="100" height="100"/>
						    				</div>
						    				<div className={["col-sm-12 col-lg-9", styles.center].join(' ')}>
						    					<div className={["row"].join(' ')}>
					    							Github<span className={styles.sociallink}>.com/MyStarrySpace</span>
					    						</div>
					    					</div>	
					    				</div>
					    			</a>
				    			</div>
				    			<div className={["col-sm-4 col-lg-12"].join(' ')}>
				    				<a href="http://linkedin.com/in/MyStarrySpace" className={"text-decoration-none text-white"}>
				    					<div className={["row"].join(' ')}>
					    					<div className={["col-sm-12 col-lg-3 col-xl-2", styles.center].join(' ')}>
						    					<Image src={iconLinkedIn} alt="" width="100" height="100"/>
						    				</div>
						    				<div className={["col-sm-12 col-lg-9", styles.center].join(' ')}>
						    					<div className={["row"].join(' ')}>
						    							LinkedIn<span className={styles.sociallink}>.com/in/Mystarryspace</span>
						    					</div>
						    				</div>	
					    				</div>
					    			</a>
				    			</div>
				    			<div className={["col-sm-4 col-lg-12"].join(' ')}>
				    				<a href="facebook.com/MyStarrySpace" className={"text-decoration-none text-white"}>
				    					<div className={["row"].join(' ')}>
					    					<div className={["col-sm-12 col-lg-3 col-xl-2", styles.center].join(' ')}>
						    					<Image src={iconFacebook} alt="" width="100" height="100"/>
						    				</div>
						    				<div className={["col-sm-12 col-lg-9", styles.center].join(' ')}>
						    					<div className={["row"].join(' ')}>
						    							Facebook<span className={styles.sociallink}>.com/Mystarryspace</span>
					    						</div>
					    					</div>	
					    				</div>
					    			</a>
				    			</div>
					    	</div>
			    		</div>
			    	</div>	
			    </form>
		    </div>
			</div>
			<div className={'col-1'}></div>
		</div>
	</div>
  )	
}


const ContactMe: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@900&family=Montserrat&family=Telex&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <ContactMePage />  
        
    </div>
  );
}

export default ContactMe
