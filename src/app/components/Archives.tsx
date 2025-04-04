import { FaGlobe, FaGithub } from "react-icons/fa";

interface ArchiveItem {
  title: string;
  tags: string[];
  website?: string;
  source?: string;
  status?: "completed" | "inprogress";
}

const archives: ArchiveItem[] = [
  {
    title: "rizzGPT",
    tags: ["React/NextJS", "Firebase", "Pinecone", "LangChain", "OpenAI" ],
    website: "https://rizzgpt.thaianle.com/auth",
    source: "https://github.com/xntle/rizz-gpt",
    status: "completed",
  },
  {
    title: "happyjar",
    tags: ["React Native", "PostgreSQL", "Supabase"],
    status: "inprogress",
  },
  {
    title: "ineedtolockin.com",
    tags: ["TypeScript", "Next.JS"],
    source: "https://github.com/xntle/ineedtolockin",
    status: "inprogress",
  },
];

export default function Archive() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-2">archives</h2>
      <ul className="divide-y text-sm">
        {archives.map((item, index) => (
          <li key={index} className="py-3 border-gray-300 flex flex-col gap-1 ease-in-out hover:bg-gray-100  hover:opacity-90">
            <div className="flex items-center gap-2">
              <span className=" ml-2 font-medium">{item.title}</span>
              {item.status && (
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    item.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.status === "completed" ? "Completed" : "In Progress"}
                </span>
              )}
            </div>

            <div className="flex ml-2 mt-1 flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex ml-2 gap-3 mt-1 text-xs text-blue-500">
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  <FaGlobe className="text-[12px]" /> Website
                </a>
              )}
              {item.source && (
                <a
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  <FaGithub className="text-[12px]" /> Source
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
