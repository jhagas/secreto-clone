import Userpic from "./image/user.jpg";
import GetData from "../supabase/select";
import UploadMsg from "../supabase/insert";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RiLoader3Line } from "react-icons/ri";
import { IoCloudOffline } from "react-icons/io5";

function Modalmsg() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="mt-2 shadow-sm block w-full px-4 h-12 text-base font-bold text-white bg-blue-600 hover:bg-blue-800 transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Tulis pesan
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto z-40"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Sampaikan isi hatimu
                </Dialog.Title>
                <div className="mt-4 flex flex-row">
                  <button
                    type="button"
                    className="inline-flex mr-4 justify-center px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Kirim
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-orange-600 bg-orange-100 border border-transparent rounded-md hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Batal
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function Msgbox() {
  // const data = "Jhagas makan banget"
  // UploadMsg(data)

  const [data, error, loading] = GetData();

  if (loading) {
    return (
      <div
        className="rounded-lg px-3 flex flex-col justify-center items-center"
        style={{
          height: "calc(100% - 3.5rem)",
        }}
      >
        <div>
          <RiLoader3Line className="animate-spin" size="32px" />
        </div>
        <h1>Loading</h1>
      </div>
    );
  }

  if (data != null) {
    return (
      <div
        className="rounded-lg overflow-y-scroll px-3"
        style={{
          height: "calc(100% - 3.5rem)",
        }}
      >
        {data.map((d) => {
          return (
            <div
              key={d.id}
              className="my-2 px-6 rounded-xl py-3 bg-gradient-to-r from-orange-400 to-purple-400"
            >
              <p className="text-base font-medium text-white drop-shadow">
                {d["msg"]}
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="rounded-lg px-3 flex flex-col justify-center items-center"
      style={{
        height: "calc(100% - 3.5rem)",
      }}
    >
      <div>
        <IoCloudOffline className="animate-pulse" size="48px" />
      </div>
      <h1>{error?.message}</h1>
    </div>
  );
}

export default function Start() {
  return (
    <div
      className="lg:flex lg:items-center lg:flex-row lg:justify-items-stretch w-full bg-gradient-to-b from-gray-100 to-orange-100"
      style={{
        height: "calc(100vh - 1.75rem - 4rem)",
      }}
    >
      <Userprop />
      <div className="w-full lg:ml-4 lg:mr-8 lg:py-7 pt-4 pb-0 lg:h-full md:h-[57vh] sm:h-[40vh] h-[48vh]">
        <div className="rounded-2xl bg-white lg:px-16 px-10 py-10 shadow-lg h-full">
          <Msgbox />
          <Modalmsg />
        </div>
      </div>
    </div>
  );
}

function Userprop() {
  return (
    <div className="mx-3 px-10 py-8 lg:py-14 lg:-translate-y-10 lg:min-w-max lg:block sm:flex sm:flex-row sm:items-center block">
      <img
        src={Userpic}
        width="30%"
        className="rounded-full lg:w-40 md:w-32 max-w-sm shadow-md"
        alt=""
      />
      <div className="lg:mt-5 lg:mb-5 lg:ml-0 sm:ml-8 ml-0 sm:mt-0 mt-5">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">
          Tulis pesan anonim untuk
        </h1>
        <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-orange-500">
          Jhagas Hana Winaya
        </h1>
      </div>
      <div>
        <p className="text-gray-500 text-sm max-w-sm hidden lg:block">
          Mahasiswa ITS jurusan fisika yang agak stress berkuliah dan memikirkan
          masa depan. Bisa dibilang saya itu sering merasa gabut, bahkan kalo
          sedang banyak tugaspun saya bisa merasa gabut. Ya begitulah hidup,
          harus dinikmati..
        </p>
      </div>
    </div>
  );
}