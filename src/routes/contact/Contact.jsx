import Button from "../../components/button/Button"


const Contact = () => {
  return (
    <>
        {/* email, linkedin, twitter
        */}
        
        <div className="text-center mt-32 mx-auto justify-between">
            <div className="mb-16 ">
                <p className="mb-8 text-xl">Say Hello</p>
                <h1 className="transition hover:scale-[.9] hover:text-darkGray">
                  <a href="mailto:sodiqalao38@gmail.com"
                   className="font-clamp-15">
                    sodiqalao38@gmail.com
                  </a>
                </h1>
                
            </div>
            <div className="flex justify-center flex-wrap gap-4 lg:text-xl ">
               <Button>
                <a href="http://shorturl.at/gpsTW"  target="blank" className="px-8 py-2">LinkedIn</a >
               </Button>
               <Button>
                <a href="https://github.com/olaniyi38" target="blank"  className="px-8 py-2">Github</a >
               </Button>
               <Button>
                <a href="https://twitter.com/Sodiq_Alao38?s=09" className="px-8 py-2">Twitter</a >
               </Button>
                
            </div>

        </div>
    </>
  )
}

export default Contact