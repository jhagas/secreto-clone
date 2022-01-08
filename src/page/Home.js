import img from "./image/home.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        className="bg-gray-100 max-w-screen-2xl flex flex-col items-center  mr-auto ml-auto
   py-8 pr-4 pl-4 lg:flex-row md:px-8"
      >
        <div
          className="hover:animate-pulse flex w-full h-full justify-center items-center  overflow-hidden
    lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0 lg:items-center p-5"
        >
          <img
            src={img}
            alt=""
            className="h-auto w-full  object-contain object-top lg:w-auto lg:h-full"
          />
        </div>
        <div
          className="flex justify-end mr-auto ml-auto  max-w-xl xl:pr-32
    lg:max-w-screen-xl"
        >
          <div className="mb-16  lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="mb-6  max-w-xl">
              <p
                className="inline-block font-semibold text-xs tracking-wider mb-4 pt-1 pr-3 pb-1 pl-3 uppercase
       bg-blue-700 text-white rounded-2xl"
              >
                BETA
              </p>
              <div className="text-gray-900 mb-6  max-w-lg sm:text-4xl sm:leading-none">
                <p
                  className="font-bold text-3xl tracking-tight  text-gray-900 sm:text-4xl
        sm:leading-none"
                >
                  Tulis pesan unek-unekmu
                </p>
                <p
                  className="inline-block font-bold text-3xl tracking-tight mr-2  text-gray-900
        sm:text-4xl sm:leading-none"
                >
                  dengan
                </p>
                <p
                  className="inline-block font-bold text-3xl tracking-tight  text-orange-600
        sm:text-4xl sm:leading-none"
                >
                  anonim
                </p>
              </div>
              <p className="text-base  text-gray-700 md:text-lg">
                Menggunjing dan merasani orang lain dari belakang tidak akan
                mengubah apapun! Mulailah ungkapkan rerasanmu dengan anonim pada
                situs ini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Start() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-gray-100 to-white w-full rounded-none ">
        <div className="text-left md:text-center md:w-3/4 lg:w-2/4 w-full mr-auto ml-auto md:py-20 py-10 pr-4 pl-4">
          <p className="font-semibold text-base mb-2  text-blue-700">
            COBA UNGKAPKAN!
          </p>
          <p className="font-extrabold text-3xl mb-6 ">
            Beri pendapatmu secara jujur akan sosok Jhagas Hana Winaya
          </p>
          <Link
            to="/start"
            className="animate-bounce bg-orange-500 hover:bg-orange-700 transition-color duration-300 sm:w-auto text-white inline-flex w-full justify-center
      items-center rounded-lg mt-1 mb-2 py-3 pr-4 pl-4"
          >
            <p className="inline-flex text-xl ">KASIH PAHAM!</p>
            <p className="inline-flex text-2xl h-4 ml-1  w-4">
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293
       3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1
       1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div>
      <div className="bg-white ">
        <div
          className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mr-auto ml-auto pt-16
    pr-4 pb-16 pl-4"
        >
          <div className="gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 grid ">
            <div className="text-center sm:px-0 pr-12 pl-12">
              <p
                className="items-center justify-center rounded-full sm:w-10 sm:h-10 flex text-2xl h-10 mr-auto mb-4 ml-auto
        w-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M12
       19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </p>
              <p
                className="uppercase font-bold text-sm tracking-wider leading-5 mb-2 pb-0
       "
              >
                Fearless
              </p>
              <p className="text-sm mb-2  text-gray-700">
                Pesanmu sampai di orang yang tepat, secara anonim.
              </p>
            </div>
            <div className="text-center sm:px-0 pr-12 pl-12">
              <p
                className="items-center justify-center rounded-full sm:w-10 sm:h-10 flex text-2xl h-10 mr-auto mb-4 ml-auto
        w-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M15
       12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M2.458
       12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477
       0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </p>
              <p className="uppercase font-bold text-sm tracking-wider leading-5 mb-2 ">
                Public
              </p>
              <p className="text-sm mb-2  text-gray-700">
                Publik dapat melihat pesanmu, just don't say anything private
              </p>
            </div>
            <div className="text-center sm:px-0 pr-12 pl-12">
              <p
                className="items-center justify-center rounded-full sm:w-10 sm:h-10 flex text-2xl h-10 mr-auto mb-4 ml-auto
        w-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M17
       20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7
       20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2
       0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </p>
              <p className="uppercase font-bold text-sm tracking-wider leading-5 mb-2 ">
                Be better!
              </p>
              <p className="text-sm mb-2  text-gray-700">
                Improve diri, dengarkan pendapat orang lain tentangmu
              </p>
            </div>
            <div className="text-center sm:px-0 pr-12 pl-12">
              <p
                className="items-center justify-center rounded-full sm:w-10 sm:h-10 flex text-2xl h-10 mr-auto mb-4 ml-auto
        w-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M8 9l3
       3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </p>
              <p className="uppercase font-bold text-sm tracking-wider leading-5 mb-2 ">
                open source
              </p>
              <p className="text-sm mb-2  text-gray-700">
                Projek ini bersifat sumber terbuka dan dibuat dengan React.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Start />
      <Features />
      <div className="bg-gray-200">
        <div
          className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mr-auto ml-auto pt-12 pr-4 pb-2.5
     pl-4"
        >
          <p className="text-sm  text-gray-500">
            Konsep web ini berasal dari secreto. Tidak bermaksud meniru, namun
            hanya sebagai latihan coding javascript/reactjs untuk saya yang
            gabut saat liburan musim dingin ini.
            <br/>
            <br/>
            Tetap jadi orang baik. Jangan lupakan orang sekelilingmu, tidak
            semua yang orang katakan itu buruk, tetaplah membuka pikiranmu akan
            masukan dari orang lain. Be the better yours!
          </p>
          <div className="w-full mb-8 "></div>
        </div>
      </div>
    </>
  );
}
