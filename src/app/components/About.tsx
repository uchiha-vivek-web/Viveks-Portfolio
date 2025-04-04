export default function About() {

  return (
    <>
      <section id="about" className="mb-8">
        <h2 className="text-xl font-bold">about</h2>
        <p className=" text-sm  mt-2">
          B.Tech (Hons) in <b>Material Science</b> | <b>Computer Science</b> Enthusiast | NIT Jamshedpur, India
        </p>
        <p className=" text-sm  mt-2">
          <b>Other Hobbies:</b> Mathematical research , watching anime , volleyball, reading novels
        </p>
        <div className=" text-sm mt-4 flex space-x-4 text-blue-500 underline">


          <a
            href="https://github.com/uchiha-vivek"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>


          <a
            href="https://www.linkedin.com/in/vivekuchiha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>



        </div>
      </section>
    </>
  );
}