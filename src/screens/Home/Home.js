import gsap from "gsap/gsap-core"
import { Expo } from "gsap/gsap-core"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import React, { useEffect, useRef, useState } from "react"
import LocomotiveScroll from "locomotive-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import "./Home.scss"
import "locomotive-scroll/src/locomotive-scroll.scss"
import { CSSPlugin, Power3 } from "gsap/all"
import Marquee from 'react-fast-marquee'

import { Sine } from "gsap/dist/gsap"

import lefthand from '../../assets/lefthand.png'
import righthand from '../../assets/righthand.png'
import me from '../../assets/parth.jpg'
import cursorContactImage from '../../assets/cursorContact.gif'
import cursorHomeImage from '../../assets/cursorHome.gif'
import cursorAboutImage from '../../assets/cursorAbout.gif'
import cursorProjectImage from '../../assets/cursorProject.mp4'
import main_background from '../../assets/main.jpg'
import aboutImage from '../../assets/about.mp4'
import GithubLink from "../../components/GithubLink/GithubLink"
import HostedLink from "../../components/HostedLink/HostedLink"
import MobileResponsive from "../../components/MobileResponsive/MobileResponsive"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
	let line1 = useRef(null)
	let line1_s = useRef(null)
	let line1_l = useRef(null)
	let line2 = useRef(null)
	let line3 = useRef(null)
	let line3_s = useRef(null)
	let line3_l = useRef(null)
	let cursor = useRef(null)
	let cursor2 = useRef(null)
	let cursorImageHome = useRef(null)
	let cursorImageContact = useRef(null)
	let cursorImageProjects = useRef(null)
	let cursorImageAboutMe = useRef(null)
	let menu = useRef(null)
	let menuText1 = useRef(null)
	let menuText2 = useRef(null)
	let menuText3 = useRef(null)
	let menuText4 = useRef(null)
	let menuOverlay = useRef(null)
	let socialIcon1 = useRef(null)
	let socialIcon2 = useRef(null)
	let socialIcon3 = useRef(null)
	let menuContainer = useRef(null)
	let hamburger = useRef(null)
	let scrollContainer = useRef(null)
	let top = useRef(null);

	const [openMenu, setOpenMenu] = useState(false)
	const [cleft , setcleft] = useState(-40)
	const [ctop , setctop] = useState(-40);

	gsap.registerPlugin(CSSPlugin, CSSRulePlugin)

	const loadingAnime = gsap.timeline({ paused: true })
	
	useEffect(() => {

		loadingAnime
			.to(".anime1", {
				background: "rgb(215, 187, 178)",
				duration: 0.6,
				ease: Sine.easeOut,
			})
			.to(".anime2", {
				background: "rgb(215, 187, 178)",
				duration: 0.6,
				ease: Sine.easeOut,
			})
			.to(".anime3", {
				background: "rgb(215, 187, 178)",
				duration: 0.6,
				ease: Sine.easeOut,
			})
			.to(".anime4", {
				background: "rgb(215, 187, 178)",
				duration: 0.6,
				ease: Sine.easeOut,
			})
			.to(".anime5", {
				background: "rgb(215, 187, 178)",
				duration: 0.6,
				ease: Sine.easeOut,
			})
			.from(".loading_name", {
				opacity: 0,
				duration: 0.4,
				ease: Expo.easeInOut,
			})
			.to(".loading_overlay", {
				background: "rgb(215,187,178)",
				duration: 0.6,
				ease: Power3.easeInOut,
			})
			.to(".loading_overlay", {
				top: "-100vh",
				duration: 1,
				ease: Expo.easeInOut,
			})
			.from('.main_helloInner' , {
				stagger:0.1,
				opacity : 0 ,
				duration : 2,
				ease : Power3.easeInOut,
			})
			
		loadingAnime.play()

		window.addEventListener("mousemove" , (event) => {
			setcleft(event.pageX - 20)
			setctop(event.pageY - 20)
			//requestAnimationFrame(() => render())
		})

		window.addEventListener("mousemove", (event) => {

			//requestAnimationFrame(() => render())

			gsap.to(document.querySelector(".cursor"), {
				css: { left: event.pageX, top: event.pageY},
			})
			})

		return () => {

			window.removeEventListener("mousemove", (event) => {
				gsap.to(cursor, {
					delay: 0.01,
					css: { left: event.clientX, top: event.clientY },
				})
			})

			window.removeEventListener("mousemove" , (event) => {
				setcleft(event.pageX - 20)
				setctop(event.pageY - 20)
			})
		}
	}, [])

	 useEffect(() => {
		let scrollx;
	 	if (scrollContainer) {

	 		 scrollx = new LocomotiveScroll({
	 		 	el: scrollContainer,
	 		 	smooth: true,
	 		 	smartphone: {
	 		 		smooth: true,
	 		 	},
	 		 	tablet: {
			 		smooth: true,
	 		 	},
	 		 })

			setTimeout(function(){
				scrollx.update();
			} , 1000)
	 	}

		
	 }, [scrollContainer])

	const handleMenuOpen = () => {
		if (!openMenu) {
			gsap.to(line2, 1, {
				opacity: 0,

				x: -10,
				ease: Expo.easeOut,
			})

			gsap.to(line1, 0.5, {
				rotate: -145,
				y: 10,
				margin: 0,
				ease: Expo.easeOut,
			})

			gsap.to(line3, 0.5, {
				rotate: -35,
				y: -10,
				ease: Expo.easeOut,
			})

			gsap.to(line1_l, 1, {
				backgroundColor: "rgb(215,187,178)",
				margin: 0,
			})

			gsap.to(line1_s, 1, {
				margin: 0,
			})

			gsap.to(line3_s, 1, {
				margin: 0,
			})

			gsap.to(line3_l, 1, {
				backgroundColor: "rgb(215,187,178)",
				margin: 0,
			})

			gsap.to(menuOverlay, 1, {
				top: "100%",
				ease: Expo.easeInOut,
			})

			gsap.to(menu, 1, {
				top: 0,
				ease: Expo.easeInOut,
			})

			gsap.to(
				[menuText1, menuText2, menuText3, menuText4],
				1,
				{
					delay: 1,
					top: 0,
					ease: Expo.easeInOut,
					stagger: 0.1,
				},
				0.1
			)

			gsap.to(
				[socialIcon1, socialIcon2, socialIcon3],
				1,
				{
					delay: 1,
					top: 0,
					ease: Expo.easeInOut,
					stagger: 0.1,
				},
				0.1
			)

			setOpenMenu(true)
		} else {
			gsap.to(line2, 1, {
				opacity: 1,

				x: 0,
				ease: Expo.easeOut,
			})

			gsap.to(line1, 0.5, {
				rotate: 0,
				y: 0,
				margin: "0.3em",
				ease: Expo.easeOut,
			})

			gsap.to(line3, 0.5, {
				rotate: 0,
				y: -0,
				ease: Expo.easeOut,
			})

			gsap.to(line1_l, 1, {
				backgroundColor: "white",
				margin: "0 4px",
			})

			gsap.to(line1_s, 1, {
				margin: "0 4px",
			})

			gsap.to(line3_s, 1, {
				margin: "0 4px",
			})

			gsap.to(line3_l, 1, {
				backgroundColor: "white",
				margin: "0 4px",
			})

			gsap.to(menuOverlay, 1, {
				top: "-200%",
				ease: Expo.easeInOut,
				delay: 1,
			})

			gsap.to(menu, 1, {
				top: "-200%",
				delay: 1,
				ease: Expo.easeInOut,
			})

			gsap.to(
				[menuText1, menuText2, menuText3, menuText4],
				1,
				{
					top: -100,
					ease: Expo.easeInOut,
					stagger: 0.1,
				},
				0.1
			)

			gsap.to(
				[socialIcon1, socialIcon2, socialIcon3],
				1,
				{
					top: 100,
					ease: Expo.easeInOut,
					stagger: 0.1,
				},
				0.1
			)

			setOpenMenu(false)
		}
	}

	const handleMouseOver = (uri) => {

		gsap.to(cursor, 0.3, {
			width: 200,
			height: 200,
			boxShadow: "none",
			ease: Power3.easeIn,
		})

		if (uri === "homeUrl") {
			gsap.to(cursorImageHome, 0.3, {
				opacity: 1,
				visibility : "visible"
			})

		} else if (uri === "aboutMeUrl") {
			gsap.to(cursorImageAboutMe, 0.3, {
				opacity: 1,
				visibility : "visible"
			})
		} else if (uri === "projectsUrl") {
			gsap.to(cursorImageProjects, 0.3, {
				visibility : "visible",
				opacity: 1,
			})

		} else {
			gsap.to(cursorImageContact, 0.3, {
				visibility : "visible",
				opacity: 1,
			})
		}
	}

	const handleMouseLeave = () => {

		gsap.to(cursor, 0.3, {
			width: 10,
			height: 10,
			backgroundColor : "rgb(215,187,178)",
			ease: Power3.easeIn,
		})

		gsap.to(cursorImageAboutMe, 0.3, {
			visibility : 'none',
			opacity: 0,
		})

		gsap.to(cursorImageHome, 0.3, {
			visibility : 'none',
			opacity: 0,
		})

		gsap.to(cursorImageContact, 0.3, {
			visibility : 'none',
			opacity: 0,
		})

		gsap.to(cursorImageProjects , 0.3 , {
			visibility:"none",
			opacity :0
		})

		gsap.to(cursorImageContact, 0.3, {
			
			opacity: 0,
		})
	}

	const handleMouseOverSocialIcon = () => {
		gsap.to(cursor, 0.5, {
			css: { width: 70, height: 70, backgroundColor: "transparent", border: "1px solid rgb(215,187,178)", boxShadow: "none" },
			ease: Expo.easeOut,
		})
	}

	const handleMouseLeaveSocialIcon = () => {
		gsap.to(cursor, 0.5, {
			css: {
				width: 10,
				height: 10,
				border: "none",
				backgroundColor: "rgb(215,187,178)",
			},
			ease: Expo.easeOut,
		})
	}

	const handleMailOpen = () => {
		window.open("mailto:aryaanahuja14@gmail.com")
	}

	const handlePhoneOpen = () => {
		window.open("tel:+919891510043")
	}

	const openResume = () => {
		window.open("https://drive.google.com/file/d/1kHgEt0xZO5w8Ad1OXB5KwQJlpR1oI6wA/view?usp=sharing" , "_blank")
	}

	const openProject = (url) => {
		window.open(url, "_blank")
	}

	return (
		<div className='home'>
			<div className='loading_overlay'>
				<div className='loading_container'>
					<div className='line3dot'>
						<div className='dot anime1'></div>
						<div className='dot anime1'></div>
						<div className='dot anime3'></div>
					</div>
					<div className='line6dot'>
						<div className='dot anime3'></div>
						<div className='dot anime1'></div>
						<div className='dot anime5'></div>
						<div className='dot anime1'></div>
						<div className='dot anime5'></div>
						<div className='dot anime1'></div>
					</div>
					<div className='line7dot'>
						<div className='dot anime1'></div>
						<div className='dot anime4'></div>
						<div className='dot anime3'></div>
						<div className='dot transparent'></div>
						<div className='dot anime4'></div>
						<div className='dot anime2'></div>
						<div className='dot anime1'></div>
					</div>
					<div className='line8dot'>
						<div className='dot anime1'></div>
						<div className='dot anime1'></div>
						<div className='dot anime3'></div>
						<div className='dot transparent'></div>
						<div className='dot transparent'></div>
						<div className='dot anime4'></div>
						<div className='dot anime2'></div>
						<div className='dot anime3'></div>
					</div>
					<div className='line7dot'>
						<div className='dot anime5'></div>
						<div className='dot anime3'></div>
						<div className='dot transparent'></div>
						<div className='dot transparent'></div>
						<div className='dot transparent'></div>
						<div className='dot anime2'></div>
						<div className='dot anime1'></div>
					</div>
					<div className='line8dot'>
						<div className='dot anime1'></div>
						<div className='dot anime4'></div>
						<div className='dot transparent'></div>
						<div className='dot anime2'></div>
						<div className='dot anime5'></div>
						<div className='dot transparent'></div>
						<div className='dot anime1'></div>
						<div className='dot anime5'></div>
					</div>
					<div className='line7dot'>
						<div className='dot anime2'></div>
						<div className='dot anime5'></div>
						<div className='dot anime1'></div>
						<div className='dot anime3'></div>
						<div className='dot anime4'></div>
						<div className='dot anime5'></div>
						<div className='dot anime1'></div>
					</div>
					<div className='line6dot'>
						<div className='dot anime2'></div>
						<div className='dot anime5'></div>
						<div className='dot anime3'></div>
						<div className='dot anime1'></div>
						<div className='dot anime2'></div>
						<div className='dot anime3'></div>
					</div>
					<div className='line3dot'>
						<div className='dot anime1'></div>
						<div className='dot anime4'></div>
						<div className='dot anime3'></div>
					</div>
				</div>
				<div className='loading_name'>ILYESBOUZAYEN</div>
			</div>
			<div className = 'cursor2' ref = {(el) => (cursor2 = el)} style = {{top : ctop + "px" , left : cleft + "px"}}></div>
			<div className='cursor' ref={(el) => (cursor = el)}>
				<img crossOrigin = "anonymous" loading = "lazy" ref={(el) => (cursorImageHome = el)} src={cursorHomeImage} alt=''  />

				<img crossOrigin = "anonymous" loading = "lazy" ref={(el) => (cursorImageContact = el)} src={cursorContactImage} alt='' />

				<video crossOrigin = "anonymous" loading = "lazy" style={{ height: "100%" }} preload='auto' muted autoPlay playsInline loop ref={(el) => (cursorImageProjects = el)} src={cursorProjectImage} alt='' />

				<img crossOrigin = "anonymous" loading = "lazy" preload='true' ref={(el) => (cursorImageAboutMe = el)} src={cursorAboutImage} alt='' />
				
				<p className = 'cursor_text'>View project</p>
			</div>
			<div className='menu' ref={(el) => (menu = el)}>
				<div className='menu_overlay' ref={(el) => (menuOverlay = el)}></div>
				<div className='menu_container' ref={(el) => (menuContainer = el)}>
					<div className='menu_col'>
						<div className='menu_options'>
							<div
								className='menu_option'
								onClick = {() => {handleMenuOpen()}}
								onTouchStart = {() => {handleMenuOpen()}}
								onMouseLeave={() => {handleMouseLeave()}}
								onMouseOver={() => {handleMouseOver("homeUrl")}}>
								<div className='menuLine'></div>
								<div className='menuText' ref={(el) => (menuText1 = el)} onClick = {() => {setTimeout(() => {
									window.open('/', '_self')
								}, 1500)}}>
									HOME
								</div>
							</div>
							<div
								className='menu_option'
								onClick = {() => {handleMenuOpen()}}
								onTouchStart = {() => {handleMenuOpen()}}
								onMouseLeave={() => {handleMouseLeave()}}
								onMouseOver={() => {handleMouseOver("aboutMeUrl")}}>
								<div className='menuLine'></div>
								<div className='menuText' ref={(el) => (menuText2 = el)} onClick = {() => {setTimeout(() => {
									window.open('/about', '_self')
								}, 1500)}}>
									ABOUT ME
								</div>
							</div>
							<div
								className='menu_option'
								onClick = {() => {handleMenuOpen()}}
								onTouchStart = {() => {handleMenuOpen()}}
								onMouseLeave={() => handleMouseLeave()}
								onMouseOver={() => {
									handleMouseOver("projectsUrl")
								}}>
								<div className='menuLine'></div>
								<div className='menuText' ref={(el) => (menuText3 = el)} onClick = {() => {setTimeout(() => {
									window.open('/project', '_self')
								}, 1500)}}>
									PROJECTS
								</div>
							</div>
							<div
								className='menu_option'
								onClick = {() => {handleMenuOpen()}}
								onTouchStart = {() => {handleMenuOpen()}}
								onMouseLeave={() => handleMouseLeave()}
								onMouseOver={() => {
									handleMouseOver("contactUrl")
								}}>
								<div className='menuLine'></div>
								<div className='menuText' ref={(el) => (menuText4 = el)} onClick = {() => {setTimeout(() => {
									window.open('/contact', '_self')
								}, 1500)}}>
									CONTACT
								</div>
							</div>
						</div>
					</div>
					<div className='contact'>
						<div className='contact_container'>
							<div className='option' ref={(el) => (socialIcon1 = el)} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onMouseOver={() => {handleMouseOverSocialIcon()}}>
								<a href="https://www.instagram.com/Ilyesbouzayen/" target = "_blank" rel = "noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
							</div>
							<div className='option' ref={(el) => (socialIcon2 = el)} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onMouseOver={() => {handleMouseOverSocialIcon()}}>
								<a href="https://www.linkedin.com/in/ilyesbouzayen/" target = '_blank' rel = "noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
							</div>
							<div className='option' ref={(el) => (socialIcon3 = el)} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onMouseOver={() => {handleMouseOverSocialIcon()}}>
								<a href="https:github.com/bouzayenilyes" target = "_blank" rel = "noreferrer"><FontAwesomeIcon icon={faGithubAlt} /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='home_container'>
				<div className='top_menu'>
					<div className='top_left'>
						<div className='loading_containerm' onMouseOver={() => {handleMouseOverSocialIcon()}} onMouseLeave={() => {handleMouseLeaveSocialIcon()}}>
							<div className='line3dotm'>
								<div className='dotm anime1m'></div>
								<div className='dotm anime1m'></div>
								<div className='dotm anime3m'></div>
							</div>
							<div className='line6dotm'>
								<div className='dotm anime3m'></div>
								<div className='dotm anime1m'></div>
								<div className='dotm anime5m'></div>
								<div className='dotm anime1m'></div>
								<div className='dotm anime5m'></div>
								<div className='dotm anime1m'></div>
							</div>
							<div className='line7dotm'>
								<div className='dotm anime1m'></div>
								<div className='dotm anime4m'></div>
								<div className='dotm anime3m'></div>
								<div className='dotm transparentm'></div>
								<div className='dotm anime4m'></div>
								<div className='dotm anime2m'></div>
								<div className='dotm anime1m'></div>
							</div>
							<div className='line8dotm'>
								<div className='dotm anime1m'></div>
								<div className='dotm anime1m'></div>
								<div className='dotm anime3m'></div>
								<div className='dotm transparentm'></div>
								<div className='dotm transparentm'></div>
								<div className='dotm anime4m'></div>
								<div className='dotm anime2m'></div>
								<div className='dotm anime3m'></div>
							</div>
							<div className='line7dotm'>
								<div className='dotm anime5m'></div>
								<div className='dotm anime3m'></div>
								<div className='dotm transparentm'></div>
								<div className='dotm transparentm'></div>
								<div className='dotm transparentm'></div>
								<div className='dotm anime2m'></div>
								<div className='dotm anime1m'></div>
							</div>
							<div className='line8dotm'>
								<div className='dotm anime1m'></div>
								<div className='dotm anime4m'></div>
								<div className='dotm transparentm'></div>
								<div className='dotm anime2m'></div>
								<div className='dotm anime5m'></div>
								<div className='dotm transparentm'></div>
								<div className='dotm anime1m'></div>
								<div className='dotm anime5m'></div>
							</div>
							<div className='line7dotm'>
								<div className='dotm anime2m'></div>
								<div className='dotm anime5m'></div>
								<div className='dotm anime1m'></div>
								<div className='dotm anime3m'></div>
								<div className='dotm anime4m'></div>
								<div className='dotm anime5m'></div>
								<div className='dotm anime1m'></div>
							</div>
							<div className='line6dotm'>
								<div className='dotm anime2m'></div>
								<div className='dotm anime5m'></div>
								<div className='dotm anime3m'></div>
								<div className='dotm anime1m'></div>
								<div className='dotm anime2m'></div>
								<div className='dotm anime3m'></div>
							</div>
							<div className='line3dotm'>
								<div className='dotm anime1m'></div>
								<div className='dotm anime4m'></div>
								<div className='dotm anime3m'></div>
							</div>
						</div>
						<div className='name'>
							<div className = 'name_inner' style = {{position:'relative'}}>
								<span className='letter'>I</span>
								<span className='letter'>L</span>
								<span className='letter'>Y</span>
								<span className='letter'>E</span>
								<span className='letter'>S</span>
								<span className='letter'>B</span>
								<span className='letter'>O</span>
								<span className='letter'>U</span>
								<span className='letter'>Z</span>
								<span className='letter'>A</span>
								<span className='letter'>Y</span>
								<span className='letter'>E</span>
								<span className='letter'>N</span>
							</div>
						</div>
					</div>
					<div
						className='hamburger'
						ref={(el) => (hamburger = el)}
						onMouseOver={() => {handleMouseOverSocialIcon()}}
						onMouseLeave={() => {handleMouseLeaveSocialIcon()}}
						onClick={() => {handleMenuOpen()}}
						//onTouchEnd={(e) => handleMenuOpen()}
						>
						<div className='line1' ref={(el) => (line1 = el)}>
							<div
								className='short_line'
								ref={(el) => {
									line1_s = el
								}}></div>
							<div
								className='long_line'
								ref={(el) => {
									line1_l = el
								}}></div>
						</div>
						<div className='line2' ref={(el) => (line2 = el)}>
							<div className='long_line'></div>
							<div className='short_line'></div>
						</div>
						<div className='line3' ref={(el) => (line3 = el)}>
							<div className='short_line' ref={(el) => (line3_s = el)}></div>
							<div className='long_line' ref={(el) => (line3_l = el)}></div>
						</div>
					</div>
				</div>
				<div className='main' data-scroll-container ref={(el) => (scrollContainer = el)} >
					<div className = 'top' id = 'top' ref = {top} style = {{height: '1px' , width: '100%'}}></div>
					<div className = 'main_title' data-scroll data-scroll-sticky>
						<div className = 'main_hello'>
							<div className = 'main_helloInner'>I am <span style = {{fontFamily : "Uncial Antiqua"}}>ILYESBOUZAYEN</span></div>
							<div className = 'main_helloInner'>Web Dev & Designer</div>
							<div className = 'main_helloInner'>based in Tunisia</div>
						</div>
						<div className = "main_footer">
						</div>
					</div>
					<div className = 'main_background'>
						<img className = 'background1' data-scroll data-scroll-speed = '2' data-scroll-delay = '0.02' src={main_background} alt="" />
						<img className = 'background2' data-scroll data-scroll-speed = '-1' data-scroll-delay = '0.04' src={main_background} alt="" />
					</div>
					<div className = 'aboutMe'>
						<div id = 'about' style = {{height: '1px' , width: '100%'}}></div>
						<div className = 'aboutMe_container'>
							<h2 className = 'aboutMe_title1'>
								<div className = 'a_title1'>Get to</div>
								<div className = 'a_title2'>know me</div>
							</h2>
							<div className = 'title_picture' >
								<div className = 'img_container'>
									<img crossOrigin = "anonymous" loading = "eager" src={me} alt="" />
									<div className = 'me_overlay'></div>
								</div>
							</div>
							<h2 className = 'aboutMe_title2'>
								<div className = 'a_title3'>- a little</div>
								<div className = 'a_title4'>better</div>
							</h2>
							<div className = 'who'>
								<div className = 'who_image'>
									<video crossOrigin = "anonymous" loading = "eager" data-scroll data-scroll-speed = "2" data-scroll-delay = "0.1" playsInline loop muted autoPlay src={aboutImage} alt="" />
								</div>
								<div className ='who_desc'>
									<div className = 'who_desc_container'>
										<h3>Ilyes</h3>
										<h3>who ?</h3>
									</div>
									<div className = 'who_desc_subtitle'>
										<h3>about me</h3>
										<p>
											<strong>
											As a dedicated student hailing from Tunisia, I bring a wealth of expertise as a freelance designer and full-stack developer. With a proven track record in crafting bespoke websites, I continually strive for excellence in every project I undertake. My unwavering commitment to improvement fuels my ability to innovate and deliver creatively inspired solutions consistently. Embracing each challenge as an opportunity for growth, I am driven to exceed expectations and push the boundaries of what's possible in the digital realm.
											</strong>
										</p>
									</div>
								</div>
							</div>
							<h2 className = 'aboutMe_desc'>
								<div className = 'aboutMe_desc1'>I’m an Tunisian web/app developer,</div>
								<div className = 'aboutMe_desc2'>I create websites, help with</div>
								<div className = 'aboutMe_desc3'>web design, and appreciate</div>
								<div className = 'aboutMe_desc4'>good website designs</div>
							</h2>
							<div className = 'marquee_about'>
							<span className = 'line_about'></span>
								<Marquee gradient = {false} speed = {100} loop = {0}>
									<div className = 'marquee_container'>
										<span className = 'mAbout_company'>
											Durianpay
										</span>
										<span className = 'mAbout_company'>
											Hypertechprenuers
										</span>
										<span className = 'mAbout_company'>
											CodeplayLabs
										</span>
										<span className = 'mAbout_company'>
											Snapixel
										</span>
										<span className = 'mAbout_company'>
											Durianpay
										</span>
										<span className = 'mAbout_company'>
											Hypertechprenuers
										</span>
										<span className = 'mAbout_company'>
											CodeplayLabs
										</span>
										<span className = 'mAbout_company'>
											Snapixel
										</span>
										<span className = 'mAbout_company'>
											Durianpay
										</span>
										<span className = 'mAbout_company'>
											Hypertechprenuers
										</span>
										<span className = 'mAbout_company'>
											CodeplayLabs
										</span>
										<span className = 'mAbout_company'>
											Snapixel
										</span>
										<span className = 'mAbout_company'>
											Durianpay
										</span>
										<span className = 'mAbout_company'>
											Hypertechprenuers
										</span>
										<span className = 'mAbout_company'>
											CodeplayLabs
										</span>
										<span className = 'mAbout_company'>
											Snapixel
										</span>
									</div>
								</Marquee>
								<span className = 'line_about'></span>
								<span className = 'aboutCompanies_subtitle'>Some of the companies I've had a blast working with...</span>
							</div>
						</div>
					</div>
					<div className = 'p' id = 'project'>
						<h1>
							Selected projects
							<div className = 'line_abs'></div>
							<div style = {{fontSize: '13px'}}>Click on link icon to open</div>
						</h1>
						<div className = 'p_container'>
							<div className = 'project'>
								<div className = 'project_container'>
									<div className= 'project_title'>Inspekthor</div>
									<div className = 'project_sno' onMouseOver={() => handleMouseOverSocialIcon()} onMouseLeave={() => handleMouseLeaveSocialIcon()} onClick = {() => {openProject("https://inspekthor.com/")}} onTouchStart = {() => {openProject("https://inspekthor.com/")}}><FontAwesomeIcon icon = {faLink} /></div>
								</div>
								<div className = 'project_footer'>
									<HostedLink />
								</div>
							</div>
							<div className = 'project'>
								<div className = 'project_container'>
									<div className= 'project_title'>Detekthor</div>
									<div className = 'project_sno' onMouseOver={() => handleMouseOverSocialIcon()} onMouseLeave={() => handleMouseLeaveSocialIcon()} onClick = {() => {openProject("https://inspekthor.com/detekthor/login")}} onTouchStart = {() => {openProject("https://inspekthor.com/detekthor/login")}}><FontAwesomeIcon icon = {faLink} /></div>
								</div>
								<div className = 'project_footer'>
									<HostedLink/>
								</div>
							</div>
							<div className = 'project'>
								<div className = 'project_container'>
									<div className= 'project_title'>Vani</div>
									<div className = 'project_sno' onMouseOver={() => {handleMouseOverSocialIcon()}} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onClick = {() => {openProject("https://vanimeetings.com/")}} onTouchStart = {() => {openProject("https://vanimeetings.com/")}}><FontAwesomeIcon icon = {faLink} /></div>
								</div>
								<div className = 'project_footer'>
									<HostedLink/>
									<MobileResponsive/>
								</div>
							</div>
							 <div className = 'project'>
								<div className = 'project_container'>
									<div className= 'project_title'>Spotify</div>
									<div className = 'project_sno' onMouseOver={() => {handleMouseOverSocialIcon()}} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onClick = {() => {openProject("https://spotify.netlify.app/")}} onTouchStart = {() => {openProject("https://spotify.netlify.app/")}}><FontAwesomeIcon icon = {faLink} /></div>
								</div>
								<div className = 'project_footer'>
									<HostedLink/>
									<MobileResponsive/>
									<GithubLink/>
								</div>
							</div>  
							<div className = 'project'>
								<div className = 'project_container'>
									<div className= 'project_title'>Portfolio</div>
									<div className = 'project_sno' onMouseOver={() => {handleMouseOverSocialIcon()}} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onClick = {() => {openProject("https://hopeful.netlify.app/")}} onTouchStart = {() => {openProject("https://hopeful.netlify.app/")}}><FontAwesomeIcon icon = {faLink} /></div>
								</div>
								<div className = 'project_footer'>
									<HostedLink/>
									<MobileResponsive/>
								</div>
							</div>
							<div className = 'project'>
								<div className = 'project_container'>
									<div className= 'project_title'>Covid Tracker</div>
									<div className = 'project_sno' onMouseOver={() => {handleMouseOverSocialIcon()}} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onClick = {() => {openProject("https://covid19-tracker-72b40.web.app/")}} onTouchStart = {() => {openProject("https://covid19-tracker-72b40.web.app/")}}><FontAwesomeIcon icon = {faLink} /></div>
								</div>
								<div className = 'project_footer'>
									<HostedLink/>
									<MobileResponsive/>
									<GithubLink/>
								</div>
							</div>
							<div className = 'project'>
								<div className = 'project_container'>
									<div className= 'project_title'>Expense Tracker</div>
									<div className = 'project_sno' onMouseOver={() => {handleMouseOverSocialIcon()}} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onClick = {() => {openProject("https://expense.netlify.app/")}} onTouchStart = {() => {openProject("https://expense-tracker.netlify.app/")}}><FontAwesomeIcon icon = {faLink} /></div>
								</div>
								<div className = 'project_footer'>
									<HostedLink/>
									<MobileResponsive/>
									<GithubLink/>
								</div>
							</div>
							<div className = 'project'>
								<div className = 'project_container'>
									<div className= 'project_title'>Netflix</div>
									<div className = 'project_sno' onMouseOver={() => {handleMouseOverSocialIcon()}} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onClick = {() => {openProject("https://netflix-clone-5a5aa.web.app/")}} onTouchStart = {() => {openProject("https://netflix-clone-5a5aa.web.app/")}} ><FontAwesomeIcon icon = {faLink} /></div>
								</div>
								<div className = 'project_footer'>
									<HostedLink/>
									<MobileResponsive/>
									<GithubLink/>
								</div>
							</div>
							<div className = 'project'>
								<div className = 'project_container'>
									<div className= 'project_title'>Amazon</div>
									<div className = 'project_sno' onMouseOver={() => {handleMouseOverSocialIcon()}} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onClick = {() => {openProject("https://github.com/ILYESBOUZAYEN143/E-Commerce-Website")}} onTouchStart = {() => {openProject("https://github.com/ILYESBOUZAYEN143/E-Commerce-Website")}}><FontAwesomeIcon icon = {faLink} /></div>
								</div>
								<div className = 'project_footer'>
									<GithubLink/>
								</div>
							</div>
							<div className = 'project'>
								<div className = 'project_container'>
									<div className= 'project_title'>Social App</div>
									<div className = 'project_sno' onMouseOver={() => {handleMouseOverSocialIcon()}} onMouseLeave={() => {handleMouseLeaveSocialIcon()}} onClick = {() => {openProject("https://social-media.netlify.app/")}} onTouchStart = {() => {openProject("https://social-media.netlify.app/")}} ><FontAwesomeIcon icon = {faLink} /></div>
								</div>
								<div className = 'project_footer'>
									<HostedLink/>
									<GithubLink/>
								</div>
							</div>
						</div>
						<div className = 'project_footer' style = {{height: '200px'}}></div>
					</div>
					<div className = 'contact_main' id = 'contact'>
						<div className = 'contact_title'>
							<h1>GET IN</h1>
							<h1>TOUCH</h1>
						</div> 
					</div>
					<div className = 'form'>
						<div className = 'lefthand'>
							<img src={lefthand} alt="" />
						</div>
						<div className = 'righthand'>
							<img src={righthand} alt="" />
						</div>
						<div className = 'email'>
							<h1>Email</h1>
							<a href="mailto:aryaanahuja14@gmail.com" onTouchEnd = {handleMailOpen} target = "_top" onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}>ARYAANAHUJA14@GMAIL.COM</a>
						</div>
						<div className = 'email'>
							<h1>Contact number</h1>
							<a href="tel:+919891510043" onTouchEnd = {handlePhoneOpen} onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}>+91 9891510043</a>
						</div>	
					</div>
					<div className = 'footer_title'>ILYESBOUZAYEN</div>
					<div className = 'footer'>
						<div className = 'col'>
							<h1>Say hello!</h1>
							<input type="email" placeholder = 'Email' />
							<button onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}>Send</button>
						</div>
						<div className = 'col'>
							<h3>Resume</h3>
							<button onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon} onClick = {openResume} onTouchEnd = {openResume}>Open Resume</button>
						</div>
						<div className = 'col'>
							<h3>Navigate</h3>
							<ul>
								<li onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}><a href="#top" data-scroll-to>Banner</a></li>
								<li onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}><a href="#about" data-scroll-to>About Me</a></li>
								<li onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}><a href="#project" data-scroll-to>Projects</a></li>
								<li onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}><a href="#contact" data-scroll-to>Contact</a></li>
							</ul>
						</div>
						<div className = 'col'>
						<h3>Socials</h3>
							<ul>
								<li onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}><a href="https://www.instagram.com/ilyesbouzayen/" target = '_blank' rel = "noreferrer">Instagram</a></li>
								<li onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}><a href="https://www.facebook.com/ilyesbouzayen/" target = '_blank' rel = "noreferrer">Facebook</a></li>
								<li onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}><a href="https://linkedin.com/in/ilyesbouzayen" target = '_blank' rel = "noreferrer">LinkedIn</a></li>
								<li onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}><a href="https://github.com/bouzayenilyes" target = '_blank' rel = "noreferrer">Github</a></li>
							</ul>
						</div>
					</div>
					 <div className = 'footer_email'>
						<a href="mailto:Ilyesbouzayen@hotmail.com" onTouchEnd = {handleMailOpen} onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}>Ilyesbouzayen@hotmail.com</a>
					</div>
					<div className = 'footer_num'>
						<a href="tel:+216 29 348 221" onTouchEnd = {handlePhoneOpen} onMouseEnter = {handleMouseOverSocialIcon} onMouseLeave = {handleMouseLeaveSocialIcon}>+216 29 348 221</a>
					</div> 
					<div className = 'end'></div>
				</div>
			</div>
		</div>
	)
}

export default Home
