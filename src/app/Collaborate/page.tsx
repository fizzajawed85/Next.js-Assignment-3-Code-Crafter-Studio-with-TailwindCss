import React from 'react';


const Collaborate = () => {
  return (
    <div className="container mx-auto pt-[80px] pb-20 text-white drop-shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-accent drop-shadow-md text-center">Collaborate <span className="text-white drop-shadow-md" >with Us</span></h1>
      <p className="text-slate-400 max-w-3xl mx-auto text-center mb-12 drop-shadow-md">
      At Code Crafters Studio, we believe that great things in business are
        never done alone.<br/> Our collaborative approach fosters creativity and
        innovation,<br/> allowing us to turn visions into reality through strategic
        partnerships.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-center">How It Works</h2>
      <p className="text-slate-400 max-w-3xl mx-auto text-center mb-8 drop-shadow-md">
        The process is simple! Start by filling out the collaboration form,<br/>
        and we’ll get in touch to discuss your project in more detail.
      </p>

      <form className="max-w-xl mx-auto bg-[#ffffff98] p-8 rounded-md ring-4 ring-gray-900 ring-opacity-50 drop-shadow-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-slate-400 mb-2 drop-shadow-md">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" 
          className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent"/>
        </div>

        <div className="mb-6">
          <label htmlFor="name" className="block text-slate-400 mb-2 drop-shadow-md">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"
          className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent"/>
        </div>

        <div className="mb-6">
          <label htmlFor="name" className="block text-slate-400 mb-2 drop-shadow-md">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project"
            rows={4}
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
        </div>

        <button type="submit"
        className=" w-full px-6 py-2 rounded-3xl text-[14px] sm:text-[16px] bg-accent text-slate-900 font-bold hover:text-orange-200 font-serif ">Submit</button>

      </form>
    </div>
  )
}

export default Collaborate
