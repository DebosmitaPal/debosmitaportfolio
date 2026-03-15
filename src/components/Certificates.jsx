import React from "react";

export default function Certificates() {
  const certificates = [
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      desc: "Certified as a Postman API Fundamentals Student Expert, demonstrating strong knowledge of API development, testing, and collaboration using Postman.",
      link: "https://drive.google.com/file/d/1HYNrUpoEtmP1vlovrS9b1EZkKYTlzpOq/view?usp=sharing", 
      icon: "📜",
    },
    {
        title: "Java Fundamentals with OOPs",
        issuer: "Cipher Schools",
        desc: "Completed the Java Fundamentals with OOPs course on Cipher Schools, gaining a solid understanding of Java programming and object-oriented principles.",
        link: "https://drive.google.com/file/d/1JrX3Q6jZxtPPSnISWDXNNmzmana6SLe1/view?usp=sharing", 
        icon: "📜",
    },
    {
        title: "Learnathon '25 and GEN-AI Basics",
        issuer: "Microsoft Learn",
        desc: "Participated in the Learnathon '25 and GEN-AI Basics event hosted by Microsoft Learn, acquiring foundational knowledge of generative AI technologies and their applications.",
        link: "https://drive.google.com/file/d/10XFmHEZkdayOkH36_geGTn-E1p8gT009/view?usp=drive_link", 
        icon: "📜",
    },
    {
        title: "Career Essentials in Project Management",
        issuer: "Microsoft and LinkedIn Learning",
        desc: "Completed the Career Essentials in Project Management course on LinkedIn Learning, developing essential skills for effective project management and career growth.",
        link: "https://www.linkedin.com/learning/certificates/4e46c7d72be36ec812b2cd6d40ac2dda1c502538dc2dde2f743c78fe09fc1488", 
        icon: "📜",
    }
  ];

  return (
    <section
      id="certificates"
      className="bg-black py-24 px-6 min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-4xl text-white text-center font-bold font-serif mb-16">
        Certificates
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative group bg-[#070707] border border-purple-500 rounded-xl p-8 overflow-hidden transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_#a855f7]"
          >

            {/* Glow Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-purple-500 blur-2xl transition duration-300"></div>

            <div className="relative z-10">

              <div className="text-5xl mb-4">{cert.icon}</div>

              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                Issued by {cert.issuer}
              </p>

              <p className="text-gray-300 text-sm mb-6">
                {cert.desc}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-semibold text-black bg-purple-400 rounded hover:bg-purple-500 transition"
              >
                View Certificate
              </a>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}