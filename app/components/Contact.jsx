import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "96a50fe0-6803-4ba7-8fa5-0762297109dc");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };


  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

        <motion.h4
          initial={{opacity: 0, y:-20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.5, delay: 0.3}}
          className='text-center mb-2 font-Ovo'>
            Connect with me
        </motion.h4>

        <motion.h2
          initial={{opacity: 0, y:-20}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.5, delay: 0.5}}
          className='text-center text-5xl font-Ovo'>
            Get In Touch
        </motion.h2>

      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
          I’d love to connect with you! I’m available for freelance projects and always open to new opportunities. Feel free to reach out to me via email or phone—I’d be happy to discuss how we can collaborate!
      </motion.p>

      <motion.form
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.9}}
        onSubmit={onSubmit} className='max-w-xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 mb-8'>
            <motion.input
              initial={{x:-50, opacity: 0}}
              whileInView={{x:0, opacity: 1}}
              transition={{duration: 0.6, delay: 1.1}}
              type='text' placeholder='Enter Your name' required 
              className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'
            />

            <motion.input
              initial={{x:50, opacity: 0}}
              whileInView={{x:0, opacity: 1}}
              transition={{duration: 0.6, delay: 1.2}}
              type='email' placeholder='Enter Your email' required 
              className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'
            />
          </div>
        <motion.textarea
          initial={{x:-50, opacity: 0}}
          whileInView={{x:0, opacity: 1}}
          transition={{duration: 0.6, delay: 1.1}}
          rows='6' placeholder='Enter Your message' required 
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'>
          </motion.textarea>

        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>
          Submit now <Image src={assets.right_arrow_white} alt='send icon' className='w-4' />
        </button>

        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
