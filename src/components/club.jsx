import React from 'react'
import { Linkedin, Instagram, Mail, MapPin, Phone ,Volleyball} from 'lucide-react'

const data = [
  {
    img: "ndu-logo.jpeg",
    name: "Training and Placement Cell",
    description:
      "The Training and Placement Cell at NIELIT Ajmer, an institution under the Ministry of Electronics and Information Technology (MeitY), Government of India, and affiliated with the NIELIT Deemed to be  University (NDU), plays a pivotal role in bridging the gap between academic learning and industry expectations. The cell actively works to enhance students’ employability by organizing skill development programs, industry-relevant trainings, internships, and campus recruitment drives, thereby ensuring that students are well-prepared for dynamic career opportunities in the tech-driven world.",
    contacts: [
      {
        name: "Prateek Gaur",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        position: "General Secretary-Relations",
        email: "#",
        phone: "+91-9875799867",
        linkedin: "#"
      }
    ],
    social: {
      linkedin: "https://www.linkedin.com/company/training-and-placement-cell-nielit-ajmer",
      instagram: "https://www.instagram.com/nielit_ajm/",
      email: "tnpnielit@gmail.com",
      website:"https://nielit.gov.in/ajmer/index.php"
    }
  },
  {
    img: "ignite.png",
    name: "Ignite - E-Cell",
    description:
      "Ignite, the Entrepreneurship Cell of NIELIT Ajmer, fuels students' entrepreneurial spirit by fostering innovation, startup incubation, and leadership skills. It organizes workshops, startup pitch sessions, and mentorship programs to guide aspiring entrepreneurs.Through a dynamic blend of interactive workshops, startup pitch sessions, mentorship programs, and networking opportunities, Ignite empowers aspiring entrepreneurs to transform ideas into impactful ventures.",
    contacts: [
      {
        name: "Shivraj Singh",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        position: "Team Lead",
        email: "#",
        phone: "+91-8209800176",
        linkedin: "#"
      }
    ],
    social: {
      linkedin: "https://www.linkedin.com/company/ignite-nielit-ajmer",
      instagram: "https://www.instagram.com/ignite_nielitajm/",
      email: "ignitenielit@gmail.com",
        website: ""
    }
  },
  {
    img: "krida.png",
    name: "Krida - Sports Club",
    description:
      "Krida is the official sports and fitness club of NIELIT Ajmer, committed to promoting a healthy and active lifestyle among students. It encourages physical fitness, sportsmanship, discipline, and teamwork through a wide array of engaging activities.From indoor games like chess, carrom, and table tennis to outdoor tournaments such as cricket, football, volleyball, and athletics, Krida provides a platform for students to showcase their talent and competitive spirit. The club also organizes fitness challenges, friendly matches, and inter-college competitions, fostering a sense of unity and healthy rivalry.With a strong belief in “Fit Body, Fit Mind,” Krida goes beyond the game—building leadership, resilience, and lifelong wellness habits in every participant.",
    contacts: [
      {
        name: "Hemant Choudhary",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        position: "Sports Club Head",
        email: "#",
        phone: "+91-9024652410",
        linkedin: "#"
      }
    ],
    social: {
      linkedin: "#",
      instagram: "https://www.instagram.com/krida.nielit/",
      email: "kridanielit@gmail.com",
        website: ""
    }
  },
  {
    img: "market.png",
    name: "Marketing Club",
    description:
      "The Marketing Club at NIELIT Ajmer enhances students' understanding of branding, digital marketing, promotions, and creative strategy. It provides exposure to market analysis, campaign design, and industry tools through events and case studies.With a focus on innovation and impact, the Marketing Club cultivates the next generation of marketers equipped to thrive in a dynamic digital world.",
    contacts: [
      {
        name: "Rahul Karadiya",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        position: "Marketing Head",
        email: "#",
        phone: "+91-6375642785 ",
        linkedin: "#"
      }
    ],
    social: {
      linkedin: "#",
      instagram: "#",
      email: "marketing.nielitajm@gmail.com",
        website: ""
    }
  },
  {
    img: "snigdham.png",
    name: "Snigdham - Cultural Club",
    description:
      "Snigdham, the cultural heartbeat of NIELIT Ajmer, celebrates India’s rich heritage through music, dance, drama, and literature. It nurtures student creativity and promotes cultural inclusivity by hosting events, performances, workshops, and festivals. Enhancing this journey is its sub-club, Framedosti, the official Photography & Film club, which captures campus life and events through visual storytelling. Engaging students in photography, videography, and editing, Framedosti offers a platform for creative expression through reels, exhibitions, and short films. Together, Snigdham and Framedosti create a vibrant space where culture and creativity thrive.",
    contacts: [
      {
        name: "Suresh Soni",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        position: "Cultural Club Head",
        email: "#",
        phone: "+91-7357833921",
        linkedin: "#"
      },
      {
        name: "Mahesh Gurjar",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        position: "Cultural Club Co-Head",
        email: "#",
        phone: "+91-6378806272",
        linkedin: "#"
      }
    ],
    social: {
      linkedin: "https://www.linkedin.com/company/snigdham-nielit-ajmer",
      instagram: "https://www.instagram.com/snigdham_nielitajm/",
      email: "snigdham.nielitajm@gmail.com",
        website: "https://mahesh-space.github.io/snigdhamXframedosti/index.html"
    }
  },
  {
    img: "neemclub.png",
    name: "NEEM - Environmental & Event Management Club",
    description:
      "NEEM (NIELIT Environmental and Event Management Club) is a dynamic blend of environmental responsibility and organizational excellence at NIELIT Ajmer. It is committed to fostering a sustainable campus culture by initiating eco-friendly practices such as cleanliness drives, tree plantation campaigns, waste reduction efforts, and awareness programs focused on climate action and green living. Beyond its environmental mission, NEEM also plays a central role in the planning and execution of major student-led events, including fests, seminars, workshops, and institutional functions.",
    contacts: [
      {
        name: "Himanshi Sharma",
        img: " https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
        position: "Team Lead",
        email: "#",
        phone: "+91-9588800923",
        linkedin: "#"
      }
    ],
    social: {
      linkedin: "https://www.linkedin.com/company/nielit-environmental-and-event-management-nielit-ajmer",
      instagram: "https://www.instagram.com/neemclub_nielitajm/",
      email: "clubneem@gmail.com",
        website: ""
    }
  }
];


const club = () => {
  return (
    <div className='relative  top-20   items-center justify-center text-center pt-16'>
        <h3 className='  text-white text-4xl font-bold'>Club Connect</h3>
        <h5 className='text-md text-white text-xl'>Other Clubs in our Vibrant student lead Initiative</h5>
        {data.map((item,indx)=>{
            return (
            <div className='mt-4 flex flex-col md:flex-row justify-center items-center gap-4 '>
          <div className='bg-gray-800 p-4 rounded-lg w-[90vw]'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <div><img src={item.img} alt=""  className='w-75 h-45 md:w-36 md:h-26 rounded'/>
                  {/* conatcts */}  <div className='flex gap-4 mt-3 justify-center'><a href={item.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                    <Linkedin size={20} />
                                  </a>
                                  <a href={item.social.instagram} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                    <Instagram size={20} />
                                  </a>
                                  <a href={`mailto:${item.social.email}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                    <Mail size={20} />
                                  </a>
                                 { item.social.website && <a href={item.social.website} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                    <Volleyball size={20} />
                                  </a>}
                                  </div>
                                  </div>
                    <div className={`flex flex-col text-left  ${item.contacts.length === 1 ? 'md:w-[60vw]' : 'md:w-[40vw]'}`}>
                        <h4 className='text-white text-2xl font-semibold'>{item.name}</h4>
                        <p className='text-gray-400 text-md'>{item.description}</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-10 mt-4 md:mt-0 leadcard text-white'>
                   {item.contacts.map((itema,indx)=>{
                    return (
                    <div className='flex flex-row md:flex-col items-center rounded-xl gap-9 md:gap-0  bg-cyan-800  p-4'>
                    <img src={itema.img} alt="" className='w-30 h-30  md:w-26 md:h-26 rounded ' />
                    <div className='flex flex-col items-center  text-center mt-3 md:mt-0'>
                    <h2 className='text-white'>{itema.name}</h2>
                    <p className='text-gray-400'>{itema.position}</p>
                    {/* <div className='flex items-center '><Phone size={16}/> {itema.phone}</div> */}
                    <div className='flex gap-4 mt-1 md:mt-3 justify-center'><a href={itema.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                    <Linkedin size={20} />
                                  </a>

                                  <a href={`${itema.email}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                    <Mail size={20} />
                                  </a></div></div>
                   </div>)})}
                </div>
            </div>
          </div>

        </div>)})}
    </div>
  )
}

export default club