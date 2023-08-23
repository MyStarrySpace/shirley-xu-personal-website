import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react';

import iconGithub from '../public/images/iconGithub.svg'
import iconLinkedIn from '../public/images/iconLinkedIn.svg'
import iconFacebook from '../public/images/iconFacebook.svg'

const ContactMe: NextPage = () => {
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
									<div>
										Tell me about your company or project, or just ask me anything! I am open for inquiries.
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
				<ContactMeForm />
			</motion.div>
		</div>
		
	);
}

const OnContactMeFormSubmit: NextPage = () => {
	const [state, handleSubmit] = useForm("mayvnedz", {
		data: { 
		}
	});
	console.log(useForm("mayvnedz"))
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<div className={['container-sm mt-5'].join(' ')}>
			<div className={['row justify-content-md-center mb-5'].join(' ')}>
				<div className={'col-1'}></div>
			<div className={['col-10'].join(' ')}> 
				<div className={[styles.focusbox].join(' ')}>
					<div className="row p-0">
						<div className={["col p-5", styles.primary].join(' ')}>
							<h1>Thank you!</h1>
							<p>I am always on the lookout for new messages, and I will try to contact you back as soon as possible. </p>
						</div>
					</div>	
				</div>
				</div>
				<div className={'col-1'}></div>
			</div>
		</div>
	)	
}

const ContactMeForm: NextPage = () => {
	const [state, handleSubmit] = useForm("mayvnedz", {
		data: { 
		}
	});
	console.log(useForm("mayvnedz"))
	if (state.succeeded) {
		return <OnContactMeFormSubmit />;
	}
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
										<ValidationError prefix="Email" field="email" errors={state.errors} />
									</div>
								</div>
								<div className="row mb-3">
									<div className="col px-3">
										<label htmlFor="phonenumber">Phone Number</label>
										<br />
										<input id="phonenumber" name="phonenumber" type="text" autoComplete="phonenumber" className={["mt-1", styles.fillwidth].join(' ')} />
										<ValidationError prefix="PhoneNumber" field="phonenumber" errors={state.errors} />
									</div>
									<div className="col px-3">
										<label htmlFor="company">Company</label>
										<br />
										<input id="company" name="company" type="text" autoComplete="company" className={["mt-1", styles.fillwidth].join(' ')} />
										<ValidationError prefix="Company" field="company" errors={state.errors} />
									</div>
								</div>
								<div className="row mb-3 p-0">
									<div className="col px-3">
										<label htmlFor="message">Message</label>
										<br />
										<textarea id="message" name="message" className={[styles.fillwidth].join(' ')} rows={8} maxLength={100000} required />
										<ValidationError prefix="Email" field="email" errors={state.errors} />
									</div>
								</div>
								<div className="row mb-3 p-0">
									<div className="col px-3">
										<button type="submit" disabled={state.submitting} className={["btn p-3 mt-1", styles.contactmebtn, styles.fillwidth].join(' ')}>Submit</button>
									</div>
								</div>
							</div>
							<div className={["col-sm-12 col-lg-5 p-5", styles.purplebg].join(' ')}>
								<div className={["row gy-3"].join(' ')}>
									<div className={["col-sm-4 col-lg-12"].join(' ')}>
										<a href="http://github.com/MyStarrySpace" className={"text-decoration-none text-white"}>
											<div className={["row"].join(' ')}>
												<div className={["col-sm-12 col-lg-3 col-xl-2", styles.center].join(' ')}>
													<Image src={iconGithub} alt="" width="80" height="80"/>
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
													<Image src={iconLinkedIn} alt="" width="80" height="80"/>
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
													<Image src={iconFacebook} alt="" width="80" height="80"/>
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

export default ContactMe
