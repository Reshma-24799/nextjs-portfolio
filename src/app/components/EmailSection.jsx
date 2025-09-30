"use client";

import Image from "next/image"
import Link from "next/link"
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { useState } from "react";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
          };
          const JSONdata = JSON.stringify(data);
          console.log(JSONdata)
          const endpoint = "/api/send";
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSONdata,
          };
          const response = await fetch(endpoint, options);
          const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    }
  return (
    <section 
        className="flex justify-center items-center my-12 md:my-12 py-20 gap-4 relative" 
        id="contact"
    >
            <div>
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <p>
                    <span className="text-white font-medium">Email:</span>
                    <span className="text-[#9CA2A9] hover:underline ml-2">reshmarajesh.dev@gmail.com</span>
                </p>
                <p className="my-4">
                    <span className="text-white font-medium">Phone:</span>
                    <span className="text-[#9CA2A9] hover:underline ml-2">+48 579390571</span>
                </p>
                
                <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/Reshma-24799" target="_blank">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/reshmarajesh-dev/" target="_blank">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
                </div>
            </div>
            {/* <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                    ): (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            placeholder="name@gmail.com"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            placeholder="Just saying Hi."
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            required
                            placeholder="name@gmail.com"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
                )}
            </div> */}
    </section>
  )
}

export default EmailSection
