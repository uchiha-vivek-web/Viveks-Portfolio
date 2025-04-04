export default function TechStack() {
  const techStack = {
    Languages: ["Python", "C/C++", "Go", "Java", "JavaScript", "TypeScript", "HTML/CSS"],
    "Frameworks & Libraries": [
      "Next.js", "React Native", "React.js", "Nest.js", "Flask", "Express.js", "Django", "Flutter","Node.js",
      'FastAPI','OpenCV','PyTorch'
    ],
    "Tools, Cloud & Databases": [
      "Azure", "AWS", "GCP", "Git", "SQLite", "Docker", "MongoDB", "Firebase", "TensorFlow", "PyTorch", "scikit-learn",'keras','Hugging Face',
      'MLflow','Redis','ElasticSearch'
    ]
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold">tech stack</h2>
      <div className="mt-4 space-y-4">
        {Object.entries(techStack).map(([category, items], idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-gray-700">{category}</h3>
            <div className="text-sm mt-2 flex flex-wrap gap-2">
              {items.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-xs text-gray-800 px-2 py-1 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 hover:opacity-80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
