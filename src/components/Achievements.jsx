import React from "react";
export default function Achievements() {
  const achievements = [
    {
      title: "Super Contributor Holopin Badge",
      org: "Hacktoberfest 2025",
      desc: "Secured the Super Contributor Holopin badge by making multiple impactful open-source contributions during Hacktoberfest.",
      link: "https://holopin.me/debosmitapal",
      icon: "🏆",
    },
    {
      title: "Top 10% Contributor",
      org: "GirlScript Summer of Code 2025",
      desc: "Ranked among the Top 10% contributors in GSSoC 2025 for consistent open-source contributions and high-quality pull requests.",
      link: "https://drive.google.com/file/d/1LfbZ-JnvLvRzzJOuFXDOKdMOrZRIGg2f/view",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="achievements"
      className="bg-black py-24 px-6 min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-4xl text-white text-center font-bold font-serif mb-16">
        My Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-[#050505] border border-orange-400 rounded-xl p-8 transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_8px_rgba(255,165,0,0.6)]"
          >
            <div className="text-4xl mb-4">{item.icon}</div>

            <h3 className="text-xl text-orange-400 font-semibold mb-1">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm mb-3">{item.org}</p>

            <p className="text-gray-300 text-sm mb-5">
              {item.desc}
            </p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 text-sm font-semibold hover:underline"
            >
              View Details →
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}