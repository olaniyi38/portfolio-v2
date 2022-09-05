import Button from "../../components/button/Button"


const Contact = () => {
  return (
    <>
        {/* email, linkedin, twitter
        */}

        <div className="mt-32 pl-20 mx-auto justify-between">
            <div className="mb-32">
                <p className="mb-4 text-xl">Say Hello</p>
                <h1 className="transition hover:scale-[.9] hover:text-[#aaaaaa]">
                  <a href="mailto:sodiqalao38@gmail.com"
                   className="text-8xl">
                    sodiqalao38@gmail.com
                  </a>
                </h1>
                
            </div>
            <div className="text-xl ">
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