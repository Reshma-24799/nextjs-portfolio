"use client";

import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TABDATA=[
   
    {
        title: "Education",
        id: "education",
        content: (
           <ul className="list-disc pl-2">
            <li>Master of Science: Computer Science</li>
                <ul>
                    <li>University of Lodz</li>
                    <li>2024-Present</li>
                    <li>4.96/5 GPA</li>
                </ul>
                <li>Bachelor of Technology: Computer Science</li>
                <ul>
                    <li>APJ Abdul Kalam Technical University</li>
                    <li>2017-2021</li>
                    <li>9.1/10 GPA</li>
                </ul>
                
           </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
           <ul className="list-disc pl-2">
                <li className="font-bold">Envestnet Inc.</li>
                    <ul className="list-disc pl-2">
                        <li>Senior Frontend development Engineer(2023 - 2024)</li>
                        <li>Frontend development Engineer(2021 - 2023)</li>
                        
                    </ul>
                <li className="font-bold">Rise and Fame</li>
                  <ul className="list-disc pl-2">
                      <li>Blockchain and Frontend Developer Intern(2025)</li>
                  </ul>
           </ul>
        )
    }

]


const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
  return (
    <section  className="text-white " id="about" >
        <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 sm:py-16 px-4 xl:px-16">
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                As a full-stack web developer with more than three years of experience, I specialize
              in crafting fast, responsive, and dynamic websites that prioritize user
              experience above all else. My expertise lies in creating intuitive interfaces 
              that seamlessly engage and empower end-users. Let&apos;s collaborate and bring your vision to life!
                </p>
                <div className="flex flex-row justify-start mt-8 ">
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("experience")}
                        active={tab === "experience"}
                    >
                        {" "}
                        Experience{" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                    {TABDATA.find((t) => t.id === tab).content}
                </div>
            </div>
           <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }} 
              className="flex flex-col gap-4 mt-10"
           >
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium">
                <div className="bg-purple-500 w-[90%] h-full pl-4 rounded items-center flex justify-start">
                    React.js
                </div>
              </div>
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium">
                <div className="bg-purple-500 w-[90%] h-full pl-4 rounded items-center flex justify-start">
                    Typescript
                </div>
              </div>
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium">
                <div className="bg-purple-500 w-[90%] h-full pl-4 rounded items-center flex justify-start">
                    Javascript
                </div>
              </div>
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium">
                <div className="bg-purple-500 w-[85%] h-full pl-4 rounded items-center flex justify-start">
                    Tailwind CSS
                </div>
              </div>
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium">
                <div className="bg-purple-500 w-[90%] h-full pl-4 rounded items-center flex justify-start">
                    REST API
                </div>
              </div>
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium">
                <div className="bg-purple-500 w-[75%] h-full pl-4 rounded items-center flex justify-start">
                    Node.js
                </div>
              </div>
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium">
                <div className="bg-purple-500 w-[80%] h-full pl-4 rounded items-center flex justify-start">
                    Next.js
                </div>
              </div>
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium">
                <div className="bg-purple-500 w-[70%] h-full pl-4 rounded items-center flex justify-start">
                   MongoDB
                </div>
              </div>
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium">
                <div className="bg-purple-500 w-[70%] h-full pl-4 rounded items-center flex justify-start">
                   Express.js
                </div>
              </div>
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium">
                <div className="bg-purple-500 w-[90%] h-full pl-4 rounded items-center flex justify-start">
                   Redux
                </div>
              </div>
              <div className="rounded  h-6 text-sm cursor-pointer bg-purple-500/50 text-black font-medium" >
                <div className="bg-purple-500 w-[80%] h-full pl-4 rounded items-center flex justify-start">
                   PostgreSql
                </div>
              </div>
              <div className="rounded  h-86text-sm cursor-pointer bg-purple-500/50 text-black font-medium-">
                <div className="bg-purple-500 w-[80%] h-full pl-4 rounded items-center flex justify-start">
                   Git
                </div>
              </div>
              </motion.div>
        </div>
    </section>
  )
}

export default AboutSection
