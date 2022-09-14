
const SKILLS = {
  main: [
    'React.js', 'SCSS', 'Styled-components', 
    'Redux', 'Firebase','HTML', 'CSS', 'JavaScript','GSAP'
  ],
  familiar: [
    'Node.js', 'Express', 'MongoDB', 'Passport js', 'ejs', 'Framer motion'
  ]
}

const About = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row px-8 pt-12 md:pt-16 lg:pt-24 md:pb-8 ">
          <div className="flex-1 text-md lg:text-lg">
            <p className="mb-4">
              I'm a front-end developer passionate about building amazing products for clients and hopefully the
              community, I am actually aspiring to become full-stack because I mostly enjoy problem solving. I'm a
              computer science student with 2+ years web development experience in this field. I have also worked with
              backend technologies but I'm still learning.
            </p>
            <p>
              When i'm not coding i enjoy watching anime, any
              murder mystery, mindfu*ck series or movies, playing basketball, videogames.
            </p>
          </div>
          <div className="flex-1 ">
            <div className="py-8 md:py-0 pl-0 md:pl-16 lg:pl-28">
              <h1 className="text-darkCyan">My skills</h1>
               <div className="mt-4 grid grid-cols-2 gap-4 ">
                 {
                  SKILLS.main.map((skill)=>{
                    return <span>{skill}</span>
                  })
                 }
               </div>
              <h1 className="mt-8 text-darkCyan">I also have experience with</h1>
              <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-4">
                {
                  SKILLS.familiar.map((skill)=>{
                    return <span>{skill}</span>
                  })
                }
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About