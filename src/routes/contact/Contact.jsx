import Button from "../../components/button/Button"


const Contact = () => {
  return (
    <>
        {/* email, linkedin, twitter
        */}

        <div className="mt-32 pl-8 md:pl-16 xl:pl-20 mx-auto justify-between">
            <div className="mb-16  lg:mb-32">
                <p className="mb-4 text-xl">Say Hello</p>
                <h1 className="transition hover:scale-[.9] hover:text-darkGray">
                  <a href="mailto:sodiqalao38@gmail.com"
                   className="font-clamp-15">
                    sodiqalao38@gmail.com
                  </a>
                </h1>
                
            </div>
            <div className="flex flex-wrap gap-4 lg:text-xl ">
               <Button>
                <a href="http://shorturl.at/gpsTW"  target="blank" className="px-8 py-2">LinkedIN</a >
               </Button>
               <Button>
                <a href="https://github.com/olaniyi38" target="blank"  className="px-8 py-2">Github</a >
               </Button>
               <Button>
                <a href="" className="px-8 py-2">Twitter</a >
               </Button>
                
            </div>

        </div>
    </>
  )
}

export default Contact