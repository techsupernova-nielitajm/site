import { useState, useEffect } from 'react'
 
 
import {TimerReset,Landmark , Presentation,Phone, Mail ,Linkedin,Instagram } from 'lucide-react';

const Home = () => {

    
  const [card, setCard] = useState(0)
  const leftinc = () => {
    setCard((card - 1 + team.length) % team.length);
  }
  
  const rightinc = () => {
    setCard((card + 1) % team.length);
  }
  
  
    const [count, setCount] = useState(0)
    const [scrollY, setScrollY] = useState(0)
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY)
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    // Calculate rotation based on scroll (starts at -15deg, goes to 0deg)
    const rotation = Math.max(-15 + (scrollY * 0.03), -15)
    const straightenRotation = Math.min(0, rotation)
   
    const [index, setIndex] = useState(0);
  
    
  
    const abt = [
    {
      id: 1,
      icon: <Presentation />,
      title: "Tech Sessions & Workshops",
      description:
        "We conduct hands-on tech sessions and workshops focused on Web Development, AI, and Cybersecurity. These interactive events aim to build a practical tech culture that promotes innovation, continuous learning, and real-world problem solving among students."
    },
    {
      id: 2,
      icon: <TimerReset />,
      title: "Hackathons & Competitions",
      description:
        "We plan to organize hackathons and coding competitions that spark creativity and innovation among students. These events will offer a platform to showcase skills, solve real challenges, and strengthen the coding culture across the campus community."
    },
    {
      id: 3,
      icon: <Linkedin />,
      title: "Community & Engagement",
      description:
        "We are building a vibrant tech community at NIELIT Ajmer by encouraging students to collaborate, join events, and contribute to meaningful projects. Our goal is to unite tech enthusiasts and make a positive impact through shared knowledge and teamwork."
    },
    {
      id: 4,
      icon: <Landmark />,
      title: "Support System & Resources",
      description:
        "TechSupernova currently consists of 40+ passionate students with institute-level support. We aim to grow further, strengthen collaborations, and eventually become a well-resourced club capable of supporting student-led innovation and research initiatives."
    }
  ];
  const team=[{
      name: "JIGYASU JOSHI",
      title: "General Secretary",
      image: "jigyasu.jpeg", // Replace with actual path,
      linkedin: "https://www.linkedin.com/in/jigyasuxtreme/",
      mail: "23entic005@nielit.ac.in"
    },
    {
      name: "ADITYA PANDEY",
      title: "General Secretary",
      image: "adi.jpeg", // Replace with actual path
      linkedin: "https://www.linkedin.com/in/aditya-pandey-94093a2a4/",
      mail: "aditya.pandey@example.com"
    }
  ]
  const past=[{
    title: "Brains & Bots 1.0",
    link: "",
    img: "_result.png"
  },
    {  title: "SIH 2024 Internal Hackathon",
    link: "",
    img: "_sih.png"
  },
 
  
   
   
  
  ]
  const news = [{
    title: "INNAUGRATION OF NIELIT DEEMED UNIVERSITY",
    description: "[03-02-2025] On 03 February 2025, the inauguration of NIELIT Deemed to be University across 12 locations, including five in the North Eastern States, marked a transformative step toward advancing technology education in India. With the university now under the Ministry of Electronics & Information Technology (MeitY), the focus on fostering innovation and nurturing tech talent has become more prominent. This development will significantly bolster the efforts of TechSupernova, the premier technology club at NIELIT Ajmer, in creating a thriving ecosystem for tech enthusiasts. The club will leverage this national-level milestone by fostering greater collaboration, hosting workshops on emerging technologies, and promoting innovative projects aligned with the digital future envisioned by NIELIT. As NIELIT continues to expand its reach and impact, TechSupernova stands poised to play a crucial role in shaping the next generation of tech leaders and innovators, driving creative solutions for real-world challenges, and contributing to India's technological supernova journey.",
    img: "deemed.png"
  },
   
  ]
  
  const ongo = [ 
 
  ]
  
  return (
    <>
    <div className='relative top-20 flex flex-col items-center justify-center text-center pt-16'>
        <p className="text-white text-5xl md:text-8xl lg:text-9xl font-bold">TECHSUPERNOVA</p>
        <p className="text-white text-4xl md:text-6xl lg:text-7xl font-bold">TECHNICAL CLUB</p>
      </div>
      <div className="  hidden md:flex flex-col items-center justify-center min-h-screen text-white pt-16">
        {/* Computer Screen Container */}
        <div 
          className="relative transition-transform duration-300 ease-out"
          style={{ 
            transform: `perspective(1000px) rotateX(${straightenRotation}deg)`,
            transformOrigin: 'center bottom'
          }}
        >
          {/* Screen Frame */}
       <div className="hidden md:flex relative bg-gray-800 p-3 rounded-lg shadow-2xl  top-[-20px]">
            {/* Screen Bezel */}
            
              {/* Actual Screen */}
              <div className="relative bg-gray-900 rounded overflow-hidden shadow-lg">
                <img 
                  src="NIELIT.png" 
                  alt="NIELIT logo" 
                  className="w-full h-auto max-w-2xl block" 
                />
                {/* Screen Glare Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
             
            
             
             
          </div>
        </div>
        
         
        
      </div>
      <div className='md:hidden   flex items-center justify-center relative top-25   '>
          <div className="p-[8px]   bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          <img src="NIELIT.png" className="h-50  " alt="" /></div>

      </div>

      <div id="abt" className='flex flex-col items-center justify-center  pt-30 md:p-0 '>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">About Us</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl text-center px-4">We are the driving force behind technical innovation at NIELIT Ajmer. Our mission is to foster a culture of technological excellence and creativity among students through workshops, hackathons, and groundbreaking projects.</p>
        <div className='flex flex-wrap flex-col md:flex-row cardbox items-center justify-center pt-8'>
          {abt.map((item,index) => {
            const Icon = item.icon;
            return(
           <div key={index} className='card bg-zinc-700 cursor-pointer hover:bg-zinc-800 p-6 rounded-lg shadow-lg m-4 w-70 text-white'>
            {item.icon}
            <h4 className='text-xl'>{item.title}</h4>
            <p className='mt-3 text-sm'>{item.description}</p>
          </div>)
          })}
         
        </div>
      </div>

      <div className='md:hidden mt-20 mb-40'>
        <h2 className='text-2xl font-bold text-center'>Council Members 2024-25</h2>
        <div className='relative flex items-center justify-center pt-20'>
        <div className='bg-indigo-800 absolute  z-[7] h-[25vh] w-[80vw] rounded-2xl flex items-center justify-center '>
          <div className='flex ml-3 items-center gap-3'><img src={team[card].image} className=" rounded h-40 w-[37%]"alt="" />
          <div className='text-white flex flex-col items-center'>
            <h4  >{team[card].name}</h4>
            <p>{team[card].title}</p>
            <div className='flex mt-4  items-center  gap-7'>
                 <a href="#" target="_blank" className='border border-white rounded-full p-1 '><Linkedin  size={15} /></a>
                  <a href="#" className='border border-white rounded-full p-1 '><Mail  size={15} /></a>
               </div>
          </div>
          <div className='flex flex-col gap-5'>
                <button onClick={leftinc} className='bg-white  text-2xl text-black px-3 py-1 rounded-full'>{'<'}</button>
                <button onClick={rightinc} className='bg-white  text-2xl text-black px-3 py-1 rounded-full'>{'>'}</button>
              </div>
          </div>
        </div>
        <div className='bg-indigo-600 absolute z-[2] h-[25vh] w-[70vw] top-[-43px] rounded-2xl'></div>
        <div className='bg-indigo-700 absolute   h-[25vh] w-[60vw] top-[-55px] rounded-2xl'></div></div>
      </div>
      
       <div className='hidden md:flex flex-col items-center justify-center pt-20 '>
        <h2 className='text-3xl  relative top-[-40px] font-bold mb-6 text-center text-white'>Council Members 2024-25</h2>

        <div className='flex flex-col rounded-xl relative items-center justify-center team p-20  bg-indigo-800 h-90 w-180'>
          <div className='ml-10 absolute left-[30px] flex  justify-center gap-15'> 
            <div className='relative flex items-center justify-center '>
            <img src={team[card].image}  className="h-60  rounded-2xl w-50 z-10   " alt="" />
            <img src={team[(card + 1) % team.length].image}  className="h-60 absolute rounded-2xl w-50  rotate-6 " alt="" />
            <img src={team[(card - 1 + team.length) % team.length].image}  className="h-60 absolute rounded-2xl  w-50 rotate-[-6deg] " alt="" /></div>
            <div className='flex flex-col   w-50 justify-between text-white'>
              <div className='flex flex-col  gap-3'>
              <div>
              <h3 className='text-2xl font-semibold'>{team[card].name}</h3>
              <p>{team[card].title}</p></div>
               
                <div className='flex   items-center  gap-7'>
                 <a href={team[card].linkedin} target="_blank" className='border border-white rounded-full p-1 '><Linkedin  size={15} /></a>
                  <a href={team[card].mail} className='border border-white rounded-full p-1 '><Mail  size={15} /></a>
               </div>
              
              </div>
              <div >
                <button onClick={leftinc} className='bg-transparent border border-white text-white px-2 py-1 rounded-l'>{'<'}</button>
                <button onClick={rightinc} className='bg-transparent border border-white text-white px-2 py-1 rounded-r'>{'>'}</button>
              </div>
            </div>
          </div>
          <div className='absolute rounded-xl top-[-40px] left-50%   bg-indigo-700 h-90 w-130 z-[-1] '></div>
          <div  className='absolute rounded-xl top-[-20px] left-50%   bg-indigo-600 h-90 w-150 z-[-1]'></div>

        </div>
       </div>
       {/* <div>
        <h3 className='text-4xl font-bold mt-6 text-center text-white'>Events</h3>
        <div className='flex flex-col   justify-center pt-6 mx-8'>
          <h4 className='text-2xl font-semibold text-white'>Ongoing Events</h4>
          {ongo.length === 0 ? (
            <p className='text-gray-300 mt-5 text-center text-2xl'>No ongoing events at the moment.Stay Tuned!!</p>
          ) : <></>}
          <div className='flex flex-wrap align-center  gap-14 mt-8'>
           
            {ongo.map((event, index) => (
              <div key={index} className='bg-slate-900 p-4 rounded-lg shadow-md   w-140'>
                <div className='flex  flex-col md:flex-row items-center gap-4'> 
                  <div>
                    <img src={event.img} className="h-45 md:h-25  rounded-2xl w-25 z-10   " alt="" />
                  </div>
                  <div>
                <h5 className='text-lg font-semibold text-white'>{event.title}</h5>
                <p className='text-sm text-gray-300'>{event.description}</p></div>
              </div></div>
            ))}
          </div>
        </div>
        <div className='flex flex-col   justify-center pt-6 mx-8 '>
          <h4 className='text-2xl font-semibold text-white'>Past Events</h4>
          <div className='flex  flex-wrap align-center  gap-14 mt-8'>
           
            {past.map((event, index) => (
              <div key={index} className='bg-slate-900 p-4 rounded-lg shadow-md   w-140'>
                <div className='flex flex-col md:flex-row items-center gap-4'> 
                  <div>
                    <img src={event.img} className="h-45 md:h-25  rounded-xl w-120 z-10   " alt="" />
                  </div>
                  <div>
                <h5 className='text-lg font-semibold text-white'>{event.title}</h5>
                <p className='text-sm text-gray-300'>{event.description}</p></div>
              </div></div>
            ))}
          </div>
        </div>
       </div> */}

           <div>
        <h3 className='text-4xl font-bold mt-6 text-center text-white'>Events</h3>
        <div className='flex flex-col   justify-center pt-6 mx-8'>
          <h4 className='text-2xl font-semibold text-white'>Ongoing Events</h4>
          {ongo.length === 0 ? (
            <p className='text-gray-300 mt-10 text-center text-2xl'>No ongoing events at the moment.Stay Tuned!!</p>
          ) : <></>}
          <div className='flex flex-wrap align-center  gap-14 mt-8'>
           
            {ongo.map((event, index) => (
              <div key={index} className=' p-4 rounded-lg    w-90'>
                <div className='flex  flex-col md:flex-row items-center gap-4'> 
                  <div>
                    <img src={event.img} className="h-[55vh] md:h-[25vh] lg:h-[70vh] rounded-xl " alt="" />
                  </div>
                  <div>
                <h5 className='text-lg font-semibold text-white'>{event.title}</h5>
                <a href={event.link} className='text-sm hover:ml-3 h text-blue-600'>Explore More {"->"} </a></div>
              </div></div>
            ))}
          </div>
        </div>
        <div className='flex flex-col   justify-center pt-6 mx-8 '>
          <h4 className='text-2xl font-semibold text-white'>Past Events</h4>
          {past.length === 0 ? (
            <p className='text-gray-300 mt-10 text-center text-2xl'>No Past events to display. Stay Tuned!!</p>
          ) : <></>}
          <div className='flex  flex-wrap align-center justify-center  gap-6 md:gap-14 mt-8'>
           
            {past.map((event, index) => (
              <div key={index} className='  p-4 rounded-lg  w-90'>
                <div className='flex flex-col   gap-4'> 
                  <div>
                    <img src={event.img} className=" h-[55vh] md:h-[25vh] lg:h-[70vh] rounded-xl     " alt="" />
                  </div>
                  <div className='flex flex-col text-left ml-3 gap-2'>
                <h5 className='text-lg font-semibold text-white'>{event.title}</h5>
                <a href={event.link} className=' hover:ml-3 h text-blue-600'>Explore More {"->"} </a></div>
              </div></div>
            ))}
          </div>
        </div>
       </div>

       {/* <div>
        <h3 className='text-4xl font-bold mt-6 text-center text-white'>News & Campus Buzz</h3>
         
        <div className='flex flex-col   justify-center pt-6 mx-8 '>
          <div className='flex flex-wrap align-center  gap-14 mt-8'>
           
            {news.map((event, index) => (
              <div key={index} className='bg-slate-900 p-4 rounded-lg shadow-md   w-140'>
                <div className='flex flex-col items-center gap-4'> 
                  <div>
                    <img src={event.img} className="     rounded-2xl   z-10   " alt="" />
                  </div>
                  <div>
                <h5 className='text-lg font-semibold text-white'>{event.title}</h5>
                <p className='text-sm text-gray-300'>{event.description}</p></div>
              </div></div>
            ))}
          </div>
        </div>
       </div> */}
       </>
  )
}

export default Home;