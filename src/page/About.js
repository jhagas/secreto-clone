import {
  IoChatbubblesOutline,
  IoLogoGithub,
  IoLogoReact,
} from "react-icons/io5";
import { SiNetlify, SiSupabase } from "react-icons/si";

export default function About() {
  const tech = [
    {
      name: "GitHub Repository",
      link: "https://github.com/jhagas/secreto-clone",
      logo: IoLogoGithub,
    },
    {
      name: "Supabase, an open-source firebase alternative",
      link: "https://supabase.com/",
      logo: SiSupabase,
    },
    {
      name: "Reactjs, frontend library",
      link: "https://create-react-app.dev/",
      logo: IoLogoReact,
    },
    {
      name: "Netlify for deploying website frontend",
      link: "https://www.netlify.com/",
      logo: SiNetlify,
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
        <div className="flex flex-row w-full justify-center items-center font-bold text-xl">
          <div className="pr-1">
            <IoChatbubblesOutline color="rgb(154 52 18)" />
          </div>
          <span className="text-orange-700">Rerasan</span>
          <span className="text-white bg-orange-500 rounded-md mx-1 px-1">
            Hub
          </span>
        </div>
        <div className="mt-5">
          <span className="text-gray-800">
            <p className="inline font-bold">Rerasan</p>
            <p className="inline font-bold text-orange-500">Hub</p>
            <p className="inline">
              , sampaikan pesan secara anonim kepada seseorang. Untuk berbenah,
              terkadang kita harus mendengar perkataan orang lain. Jangan
              jadikan ucapan orang sebagai patokan, cukup jadikan pacuan untuk
              berkembang.
            </p>
          </span>
          <span className="text-gray-800 my-2 block">
            <p className="inline font-bold">Rerasan</p>
            <p className="inline font-bold text-orange-500">Hub</p>
            <p className="inline">
              {" "}
              terinspirasi dari secreto. Proyek ini bersifat
              sumber terbuka, anda bisa melakukan "fork" untuk mengkostumisasi
              dan membuat versi anda sendiri.
            </p>
          </span>
          <div className="text-gray-600 mt-8 block text-sm text-center">
            <p>Teknologi yang digunakan untuk membuat situs web ini</p>
            <div className="flex flex-row w-full justify-center items-center mt-4">
              {tech.map((item) => {
                return (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    title={item.name}
                    className="relative mx-2 transition duration-200 focus:scale-125 hover:scale-125 hover:text-slate-800 focus:text-slate-800"
                  >
                    <item.logo size="28px" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
