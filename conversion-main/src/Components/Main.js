import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Header from "./Header";
import Footer from "./Footer";
import Dropdown2 from "./Dropdown2";
import { useDispatch, useSelector } from "react-redux";
import Dropdown1 from "./Dropdown1";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { addFile } from "../reducer/reducer1"; // not being used cuz of the inability of redux to process the serialized file
import Filetable from "./fileTable";

const navigation = [
  { name: "Tools", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "About Us", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Main() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile menu

  const [selectedFile, setselectedFile] = useState([]); // File upload

  const [Filename, setFilename] = useState([]);

  const currentSetConverter = useSelector((state) => state.reducer.value); // Dropdown Value stored in Redux state

  const fileArray = useSelector((state) => state.reducer.fileValue);

  const dispatch = useDispatch();

  const deleteElement = React.useCallback(
    (index) => {
      console.log(index, selectedFile);
      console.log([...selectedFile].splice(index, 1));
      setselectedFile(() => selectedFile.filter((_, i) => i !== index));
    },
    [selectedFile]
  );

  React.useEffect(() => {
    const data = selectedFile.map((item) => {
      return {
        name: item.name,
        convertFrom: "",
        convertTo: "",
      };
    });
    console.log({
      "Formdata/fileData": [data],
    });
    // [a,s,d,f][s,d,c,v]
    // setFilename((prev)=>[...data, ...prev]);
    setFilename(data);
  }, [selectedFile]);

  const handleFile = (event) => {
    // console.log(document.getElementById("fileInput"))
    document.getElementById("fileInput").click();

    // const file = event.target.files[0]
  };
  // Now send the redux state of both SetConverters to the backend via Axios

  // const fileData = new FormData();
  // for (let i in selectedFile) {
  //   if (!selectedFile[i]) continue;
  //   let filename =
  //     Filename[i].name +
  //     "." +
  //     Filename[i].type.replace("", "").toLowerCase().trim();
  //   fileData.append(`file${i}`, selectedFile[i], filename);
  // }

  async function uploadFiles() {
    // await axios({
    //   method: 'post',
    //   url: '/api/upload/',
    //   data: fileData,
    //   headers: { 'Content-Type': 'multipart/form-data' }
    // })
    //   .then(() => {
    //     alert("Upload successful!")
    //     window.location.reload()
    //   }).catch(err => {
    //     alert("Error uploading files")
    //     console.log(err)
    //   })
  }

  // function convertFileToBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.onload = function (event) {
  //       const base64String = event.target.result.split(",")[1];
  //       resolve(base64String);
  //     };

  //     reader.onerror = function (error) {
  //       reject(error);
  //     };

  //     reader.readAsDataURL(file);
  //   });
  // }

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <Header />
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Fallback</span>
                <img className="h-8 w-auto" src="logo.png" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#302f50] to-[#6eb6d8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
          <div className="relative">
            <div className="mx-auto max-w-7xl">
              <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                <svg
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:pt-28 lg:pb-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl underline">
            Online Converter For Everything
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We support all kinds of digital conversions that are needed in
            today’s digital life from converting a word file to pdf or
            converting an xml code to html, we do it all!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-slate-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => document.getElementById("Tools").click()}
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => document.getElementById("Pricing").click()}

            >
              Buy Plan <span aria-hidden="true">→</span>
            </a>
          </div> 
        </div>
        <div className="flex items-center justify-between">
          <div className="text-5xl font-semibold tracking-tight text-gray-900 py-12">
            Convert From
          </div>
          <div className="flex">
            {currentSetConverter == null ? (
              <button className="rounded-full border-black border-0 mx-10 p-3 bg-indigo-300 hover:bg-indigo-100 ease-linear duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                  />
                </svg>
              </button>
            ) : (
              <Dropdown1 />
            )}
          </div>
          <div className="text-5xl font-semibold tracking-tight text-gray-900 py-12 ml-3">
            To
          </div>
          <div>
            {currentSetConverter == null ? (
              <button className="rounded-full border-black border-0 mx-10 p-3 bg-indigo-300 hover:bg-indigo-100 ease-linear duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                  />
                </svg>
              </button>
            ) : (
              <Dropdown2 />
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="my-5">
            <button
              className="rounded-md border-2 border-black px-6 py-4 text-xl font-bold flex mx-auto  items-center hover:bg-gray-800 hover:text-white ease-linear duration-300"
              type="file"
              onClick={handleFile}
              // onClick={(e) => {
              // e.preventDefault();
              // stops the page from reloading after clicking the button

              // }}
            >
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <div className="ml-2 mr-3 ">
                  Select File
                  <span>
                    <input
                      multiple
                      type="file"
                      className="hidden"
                      id="fileInput"
                      onChange={async (e) => {
                        e.persist();
                        let files = e.target.files;
                        setselectedFile((prev) => [...prev, ...files]); // change needed
                        // console.log({
                        // "Destructured File Array": [...files],
                        // "Selected": [selectedFile],
                        // });
                        // const input = document.getElementById("fileInput");
                      }}
                    ></input>
                  </span>
                </div>
              </div>
            </button>
          </div>
          <div className="p-[10px] rounded-md border-2 border-black hover:bg-gray-100">
            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-white hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                  {/* <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          /> */}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "group flex items-center px-4 py-2 text-sm font-semibold"
                          )}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          From Google Drive
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "group flex items-center px-4 py-2 text-sm font-semibold"
                          )}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          One Drive Link
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  {/* <div className="py-1"></div> */}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
      <div>
        {/* File table that will show the selected file to convert */}
        {!!Filename.length && (
          <Filetable
            props={selectedFile}
            filename={Filename}
            deletefunc={deleteElement}
            func={handleFile}
            setFilename={setFilename}
          />
        )}
      </div>
      <div className="mx-auto sm:grid grid-cols-1 grid lg:grid-cols-2 lg:max-w-3xl lg:min-w-fit px-10 py-10">
        <div className="flex flex-row items-center mb-10">
          {" "}
          {/* First grid box */}
          <div className="pl-10 pr-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              height={"4rem"}
              width={"4rem"}
            >
              <path
                fill-rule="evenodd"
                d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-4xl font-bold mb-4 text-center">
              Data Security
            </div>
            <div className="max-w-md text-lg">
              "EverythingConverts," converter that prioritizes your data
              security above all else. With state-of-the-art encryption
              protocols and stringent privacy measures, your files are
              safeguarded throughout the conversion process. Enjoy peace of mind
              knowing that your sensitive information remains absolutely
              confidential, protected and safe. Trust EverythingConvert for the
              best-in-class data security while converting your files
              effortlessly.
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex items-center">
            <div className="pl-14 pr-20 mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                height={"4rem"}
                width={"4rem"}
              >
                <path
                  fill-rule="evenodd"
                  d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-4xl font-bold mb-4 ">
              +150 Formats Supported
            </div>
            <div className="max-w-md text-lg">
              Introducing "EverythingConverts," the ultimate online file
              converter that supports over 150 formats for seamless file
              conversion. Whether you need to convert documents, images, audio
              files, videos, or more, UniversalConvert has got you covered. With
              its user-friendly interface and robust technology, it simplifies
              the process of converting files from one format to another.{" "}
            </div>
          </div>
        </div>
        {/* More Blocks for Website features */}
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
