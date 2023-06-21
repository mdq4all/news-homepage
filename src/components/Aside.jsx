import New from "./New"

const Aside = () => {
  return (
    <section className="p-5 my-16 bg-very-dark-blue md:my-0">
        <h2 className="text-3xl text-soft-orange font-bold">New</h2>
        <New title={'Hydrogen VS Electric Cars'} 
            paragraph={'Will hydrogen-fueled cars ever catch up to EVs?'}/>
        <hr className="opacity-50" />
        <New title={'The Downsides of AI Artistry'}
            paragraph={'What are the possible adverse effects of on-demand AI image generation?'} />
        <hr className="opacity-50" />
        <New title={'Is VC Funding Drying Up?'}
            paragraph={'Private funding by VC firms is down 50% YOY. We take a look at what that means.'} />
    </section>
  )
}

export default Aside
