import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="rowin h-[100vh] bg-slate-900 lg:h-full" id="contact">
        <div className="contact grid grid-cols-2 items-center gap-10 p-28 pt-40 mt-24 lg:grid-cols-1 lg:pt-8 lg:p-4">
            <div className="contact-text">
                <h2 className='text-[2.8rem] leading-[1]'>Contact <span className='text-blue-500'>Me! </span></h2>
                <h4 className='my-[18px] text-[20px] font-semibold'>If you have any project in your mind.</h4>
                <p className='leading-[1.8] mb-7'>I'm a Developer - Creating attractive & responsive website and web-app.</p>
                <div className="contact-icons">
                    <a href="https://twitter.com/SurajMahato2002?t=VFwz9MNRT_6G5R3TEckxoA&s=09" target="_blank"><i className="ri-twitter-fill h-11 w-11 bg-blue-600 text-[22px] inline-flex items-center justify-center rounded-[8px] mr-4"></i></a>
                    <a href="https://www.instagram.com/suraj_mahato360/" target="_blank"><i className="ri-instagram-fill h-11 w-11 bg-blue-600 text-[22px] inline-flex items-center justify-center rounded-[8px] mr-4"></i></a>
                </div>
            </div>
            <div className="contact-form">
                <form className='relative' action="https://formspree.io/f/meqwjpre" method="POST">
                    <input className='w-full p-[14px] bg-slate-800 border-[none] outline-0 text-[15px] rounded-[8px] mb-[10px]' type="name" name="name" placeholder="Your Name.." required />
                    <input className='w-full p-[14px] bg-slate-800 border-[none] outline-0 text-[15px] rounded-[8px] mb-[10px]' type="email" name="email" placeholder="Enter Your Email.." required />
                    <input className='w-full p-[14px] bg-slate-800 border-[none] outline-0 text-[15px] rounded-[8px] mb-[10px]' type="" name="number" placeholder="Enter Your Mobile Number" />
                    <textarea className='w-full p-[14px] bg-slate-800 border-[none] outline-0 text-[15px] rounded-[8px] mb-[10px] resize-none h-[240px]' type="message" name="message" id="" cols="30" rows="10"
                        placeholder="How can I hep You"></textarea>
                    <input type="submit" value="Send Message" className="submit inline-block text-base bg-blue-700 w-40 rounded-[8px] cursor-pointer py-3" required />
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact