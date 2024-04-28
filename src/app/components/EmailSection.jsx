import Image from "next/image"
import Link from "next/link"
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    // }
  return (
    <section 
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" 
        id="contact"
    >
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/Reshma-24799" target="_blank">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/reshma-r-b4175a170/" target="_blank">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col gap-4" >
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="name@gmail.com"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text gray-100 text-sm rounded-lg block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            required
                            placeholder="Just saying Hi."
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text gray-100 text-sm rounded-lg block w-full p-2.5"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea
                            type="text"
                            id="message"
                            required
                            placeholder="name@gmail.com"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text gray-100 text-sm rounded-lg block w-full p-2.5"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
    </section>
  )
}

export default EmailSection
