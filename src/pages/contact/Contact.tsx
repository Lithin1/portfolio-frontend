import React from "react";
import { Mail, Phone, Download } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white font-poppins transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Heading */}
        <div className="space-y-6">
          <h3 className="uppercase tracking-widest text-base sm:text-lg text-cyan-600 dark:text-cyan-400 font-bold">
            Get In Touch
          </h3>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight max-w-5xl text-slate-800 dark:text-white">
            I’d love to hear from you!
            <br />
            <span className="font-medium text-slate-700 dark:text-slate-300 text-lg sm:text-xl md:text-6xl">
              If my profile aligns with your needs, feel free to get in touch.
            </span>
          </h2>
        </div>

        {/* Contact + Social + Resume */}
        <div className="flex flex-col md:flex-row justify-between gap-8 text-base sm:text-lg font-medium text-slate-800 dark:text-slate-300">
          {/* Contact */}
          <div className="space-y-3">
            <h4 className="uppercase tracking-widest text-sm text-cyan-600 dark:text-cyan-400 mb-2 font-bold">
              Reach Me At
            </h4>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <a
                href="mailto:lithinmajji@gmail.com"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              >
                lithinmajji@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <a
                href="tel:+911234567890"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              >
                +91 9603394513
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="uppercase tracking-widest text-sm text-cyan-600 dark:text-cyan-400 mb-2 font-bold">
              Social Media
            </h4>
            <div className="flex flex-col space-y-2">
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/lithin-majji-a191211b0/"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  LinkedIn
                </a>
                <a
                  href="Hi Lithin, I saw your portfolio and wanted to connect!"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  Whatsapp
                </a>
                <a
                  href="https://www.instagram.com/lithin_lucky?igsh=MWMwejUzeGRwMG9qbw=="
                  className="hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  Instagram
                </a>
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/Lithin1/"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  GitHub
                </a>
                <a
                  href="https://gitlab.com/grp-react-projects/"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  GitLab
                </a>
              </div>
            </div>
          </div>

          {/* Resume */}
          <div className="flex items-start md:items-center">
            <a
              href="/Lithin_Majji_Exp_Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-full font-bold shadow hover:scale-105 hover:bg-cyan-700 transition whitespace-nowrap"
            >
              <Download className="w-5 h-5" /> Download Resume
            </a>
          </div>
        </div>
        {/* Footer */}
        <div>
          <p className="text-center text-sm text-slate-600 dark:text-slate-400 sm:mt-16">
            © {new Date().getFullYear()}{" "}
            <span className="inline sm:hidden">Lithin Majji</span>
            <span className="hidden sm:inline">
              Lithin Siva Swamy Naidu Majji
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
