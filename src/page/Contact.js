import jhagas from "./image/jhagas.webp";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

export default function Contact() {
  const contact = [
    {
      name: "GitHub",
      link: "https://github.com/jhagas",
      icon: IoLogoGithub,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/jhagas/",
      icon: IoLogoLinkedin,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/jhagashw/",
      icon: IoLogoInstagram,
    },
  ];
  return (
    <div
      className="bg-gradient-to-b from-gray-100 to-orange-100 px-4"
      style={{
        height: "calc(100vh - 1.75rem - 4rem)",
      }}
    >
      <div className="relative bg-white rounded-lg p-9 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xl min-w-min shadow-md">
        <div className="mb-6 sm:mb-10">
          <div className="fixed drop-shadow sm:w-28 w-24 left-1/2 transform -translate-y-20 -translate-x-1/2">
            <img
              className="w-full rounded-full border-2 border-white"
              src={jhagas}
              alt="jhagas's (this website is created by him)"
            />
          </div>
        </div>
        <div className="font-bold text-center mb-4">
          <h1>JHAGAS HANA WINAYA</h1>
        </div>
        <div className="text-gray-800 mb-6">
          <p>
            Mahasiswa S1 Fisika ITS Angkatan 2020, suka menantang diri untuk
            belajar hal baru. Prinsip hidup saya sederhana, selesaikan tugas
            dahulu baru healing..
          </p>
          <div
            className="text-center text-gray-900 mt-5 font-bold text-xl sm:text-2xl"
            style={{
              fontFamily: "'Dancing Script', cursive"
            }}
          >
            <p>"Jadikan diri tak pernah puas</p>
            <p>jelajahi samudra ilmu yang luas"</p>
          </div>
        </div>
        <div className="text-gray-600">
          <p className="text-center w-full text-sm">Kontak saya:</p>
          <div className="flex flex-row w-full justify-center items-center mt-2">
            {contact.map((item) => {
              return (
                <a
                  key={item.name}
                  className="relative mx-2 transition duration-200 focus:scale-125 hover:scale-125 hover:text-slate-800 focus:text-slate-800"
                  href={item.link}
                  title={item.name}
                >
                  <item.icon size="28px" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
