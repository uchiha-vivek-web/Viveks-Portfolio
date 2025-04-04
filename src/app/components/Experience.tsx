"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const experiences = [
    {
      role: "Software Engineer",
      company: "Ally Solutions ",
      image: "/ally-portfolio.png",
      duration: "Sep 2024 - current",
      summary: "Building conversational voice and chat assistant .",
      bullets: [
        "Built  Leomartile Bot using Azure AI and ally's agentic pipeline to query with tile's info in real time .",
        "Building solutions for contact centers using Azure AI , AWS Connect and Ally's pipeline to solve customer issues ",
      ],
      tech: [
        "AWS",
        "Azure",
        "Flask",
        "Azure OpenAI",
        "AWS Bedrock",
        "AWS Kendra ",
        "React+Vite"
      ],
      projects: [
        { name: "Ally Solutions", url: "https://www.allysolutions.ai/" },
      ],
    },
    // {
    //   role: "Software Engineer Fellow",
    //   company: "Headstarter",
    //   image: "/headstarter.svg",
    //   duration: "Jul 2024 - Sep 2024",
    //   summary:
    //     "Led the development of 7+ AI apps, reaching 700+ users using Next.js, OpenAI, and AWS.",
    //   bullets: [
    //     "Developed 7+ AI applications using Next.js, TypeScript, OpenAI, Pinecone, Stripe, Whisper, Clerk, and Firebase.",
    //     "Cumulative user base of 700+ active users & average engagement rate of 64.5%.",
    //     "Led a team of 4 in the development and deployment of projects using Vercel and AWS.",
    //     "Applied LLM methods such as RAG and utilized CRUD operations and MVC design patterns to improve application functionality.",
    //   ],
    //   tech: [
    //     "Next.js",
    //     "TypeScript",
    //     "OpenAI",
    //     "AWS",
    //     "Firebase",
    //     "Pinecone",
    //     "Stripe",
    //     "Whisper",
    //     "Clerk",
    //   ],
    //   projects: [
    //     { name: "rizzgpt", url: "https://rizzgpt.thaianle.com" },
    //     { name: "talkaroo", url: "https://talkaroo-lac.vercel.app/" },
    //     { name: "applyEZ", url: "https://applyez-waitlist.vercel.app/" },
    //     { name: "FlashAI", url: "https://flashai.thaianle.com" },
    //     { name: "pantrypal", url: "https://pantry-pal-eta.vercel.app/" },
    //   ],
    // },
    {
      role: "open source contributor",
      company: "HACKTOBER FEST",
      image: "/hactober.png",
      duration: "Oct 2024 - Nov 2024",
      summary:
        "Contributed in Raggenie , ClentAfrica and pygeoif",
      bullets: [
       "Raggenie: Resolved issues in React components, developed error pages, and integrated database plugins.",
       "Emerged as prime contributor for project Raggenie",
       "ClentAfrica : Made documentation for the organization , gathered data for research .",
       " pygeoif : made unit test cases for modules in pygeoif "
      ],
      tech: ["Python", "Flask", "React.Js","Documentation",'Azure'],
      projects: [
        // {
        //   name: "youtube video",
        //   url: "https://www.youtube.com/watch?v=mrX9GUh_ES8&feature=youtu.be",
        // },
      ],
    },
    {
      role: "Hackathon contributor",
      company: "lablab ai",
      image: "/lablabai.png",
      duration: "Aug 2024 - current",
      summary:
        "Built multiple AI Powered Applications ",
      bullets: [
         "Built MonkeyType ai using FalconAI, API Hub , Firebase,GPT-4o - generating words dynamically",
         "Built Tax Assistant using streamlit,LangChain,Llama3.1 - tool which helps in financial planning ",
         "Built AI Career Navigator CrewAI,upstage and streamlit - tool to support in interview",
         "Built MatriXpert - a tool to query anything related to Material Science stuff using image and text "
      ],
      tech: ["Python", "streamlit",'CrewAI','Firebase','OpenAI','Langchain','LLama3.1','Vercel'],
      projects: [
            { name: "monkeytypeai", url: "https://monkeytypeai.vercel.app/" },
             { name: "Investory", url: "https://llama-impact-hackathon-lablabai-zyaydozm9bsonmexkpyfts.streamlit.app/" },
             { name: "career-navigator", url: "https://github.com/uchiha-vivek/ai-career-navigator1" },
             { name: "MatriXpert", url: "https://lightning-fast-ai-hackathon-ko8tsrflakkinjmpfidajf.streamlit.app/" },
             
           ],
    },
    
  ];

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(i)) {
        newSet.delete(i); // close
      } else {
        newSet.add(i); // open
      }
      return newSet;
    });
  };

  return (
    <section id="experience" className="mb-6">
      <h2 className="text-xl font-bold mb-4">experience</h2>
      <div>
        {experiences.map((exp, i) => {
          const isOpen = openSet.has(i);

          return (
            <div
              key={i}
              className="border-b border-gray-300 pb-4 transition-all duration-300 animate-fadeIn "
            >
              <button
                onClick={() => toggle(i)}
                className="group w-full text-left flex flex-col mt-2"
              >
                {/* Top row: logo + info left, duration right */}
                <div className="flex items-start justify-between w-full">
                  {/* Left: Logo + Company/Role */}
                  <div className="flex items-center space-x-4">
                    {/* Logo */}
                    <img
                      src={exp.image}
                      alt={`${exp.company} logo`}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    {/* Text: Company + Role */}
                    <div>
                      <div className="flex flex-row">
                        <p className="font-semibold">{exp.company}</p>
                        <span className="ml-1 mt-1 text-gray-400">
                          {isOpen ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600">{exp.role}</p>
                    </div>
                  </div>

                  {/* Right: Duration */}
                  <div className="text-sm text-gray-500 whitespace-nowrap mt-1">
                    {exp.duration}
                  </div>
                </div>

                {/* Summary + Tags */}
                <p className="text-sm mt-2">{exp.summary}</p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.tech.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                  {exp.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="mt-2 text-sm flex flex-wrap gap-2">
                  {exp.projects.map((proj, idx) => (
                    <a
                      key={idx}
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800 transition-colors"
                    >
                      {proj.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
