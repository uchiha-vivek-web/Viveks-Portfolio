"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Contact() {
  return (
    <>
    <section id="contacts" className="mt-8 mb-8">
      <h2 className="text-xl font-bold mb-4">contact</h2>
      <p className="text-sm text-gray-600 mb-4">
        Feel free to reach out — I’d love to connect, collaborate, or just say hi 👋
      </p>

      <ul className="space-y-3 text-sm">
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-gray-500" />
          <a href="mailto:thaianle.work@gmail.com" className="text-blue-500 underline">
            viveksharma7497@gmail.com
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaLinkedin className="text-gray-500" />
          <a
            href="https://www.linkedin.com/in/thai-an-le/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://www.linkedin.com/in/vivekuchiha/
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaGithub className="text-gray-500" />
          <a
            href="https://github.com/uchiha-vivek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://github.com/xntle
          </a>
        </li>
      </ul>

      
    </section>
    </>
  );
}
