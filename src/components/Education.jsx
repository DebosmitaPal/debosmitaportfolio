import React from "react";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institute: "Lovely Professional University",
      year: "2023 - Present",
      cgpa: "7.23 CGPA",
      desc: "Focused on Web Development, Data Structures and Software Engineering."
    },
    {
      degree: "Higher Secondary Education",
      institute: "Vidyasagar Shishu Niketan(ICSE AND ISC)",
      year: "2021 - 2023",
      percentage: "87.5%",
      desc: "Completed higher secondary education with Science stream."
    },
    {
      degree: "Secondary Education",
      institute:" Vidyasagar Shishu Niketan(ICSE AND ISC)",
      year: "2020 - 2021",
      percentage: "96.2%",
      desc: "Completed secondary education with strong academic performance."
    }
  ];

  return (
    <section id="education" className="bg-black min-h-screen py-24 px-6">

      <h2 className="text-4xl text-white font-bold font-serif text-center mb-20">
        Education
      </h2>

      <div className="max-w-4xl mx-auto relative">

        {/* Timeline vertical line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-white shadow-white"></div>

        {education.map((item, index) => (
          <div key={index} className="relative pl-16 mb-16">

            {/* Glowing timeline node */}
            <span className="absolute left-2 top-3 w-6 h-6 rounded-full bg-white shadow-white animate-pulse"></span>

            {/* Card */}
            <div className="bg-[#070707] border border-white p-6 rounded-lg
             shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff66]
            hover:shadow-[0_0_25px_#ffffff,0_0_40px_#ffffff]
            transition duration-300">

              <h3 className="text-white text-lg font-semibold">
                {item.degree}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.institute}
              </p>

              <p className="text-gray-500 text-xs mb-3">
                {item.year}
              </p>

              {/* CGPA / Percentage badge */}
              <div className="mb-3">
                {item.cgpa && (
                  <span className=" text-white text-xs px-3 py-1 rounded-full mr-2 border border-white">
                    {item.cgpa}
                  </span>
                )}

                {item.percentage && (
                  <span className=" text-white text-xs px-3 py-1 rounded-full border border-white">
                    {item.percentage}
                  </span>
                )}
              </div>

              <p className="text-gray-300 text-sm">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}