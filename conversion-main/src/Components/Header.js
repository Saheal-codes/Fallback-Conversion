import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  LockOpenIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducer/reducer1";
import Unitconverter from "./Unitconverter";

const products = [
  {
    name: "File Converter",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Audio Converter",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Image Converter",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Unit Converter",
    href: "/unitconverter",
    icon: SquaresPlusIcon,
  },
  {
    name: "Document Converter",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Youtube to MP3 Converter",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Photoshop Converter",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Units Converter",
    href: "#",
    icon: SquaresPlusIcon,
  },
];

const pricing = [
  {
    name: "Starting Plan",
    href: "#",
    icon: LockOpenIcon,
  },
  {
    name: "Mediate Plan",
    href: "#",
    icon: LockOpenIcon,
  },
  {
    name: "Unlimited Plan",
    href: "#",
    icon: LockOpenIcon,
  },
];

const industries = [
  {
    name: "Automotive",
  },
  {
    name: "Retail",
  },
  {
    name: "Banking",
  },
  {
    name: "Travel",
  },
  {
    name: "Manufacturing",
  },
];

const callsToAction = [
  { name: "View all Tools", href: "#", icon: RectangleGroupIcon },
  { name: "Contact Us", href: "#", icon: PhoneIcon },
];

const callsToAction2 = [
  { name: "View all Plans", href: "#", icon: RectangleGroupIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const currentSetConverter = useSelector((state) => state.reducer.value);

  return (
    <header className="relative isolate z-10 ">
      <nav
        className="mx-auto flex max-w-9xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Fallback</span>
            <img className="h-8 w-auto" src="logo.png" alt="" />
          </a>
        </div> */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:items-center justify-between w-full">
          <div className="flex mx-auto lg:gap-x-8">
            <Popover>
              {({ close }) => (
                <Fragment>
                  <Popover.Button
                    className="flex items-center gap-x-1 text-2xl font-semibold leading-6 text-gray-900"
                  id="Tools"
                  >
                    Tools
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-500 animate-bounce"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                  >
                    <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                      <div className="mx-auto grid max-w-full grid-cols-8 gap-x-4 px-2 py-6 lg:px-6 xl:gap-x-8">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-200 text-left"
                            onClick={(e) => {
                              dispatch(increment(item.name));
                              setMobileMenuOpen(false);
                              close()
                            }}
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-indigo-700"
                                aria-hidden="true"
                              />
                            </div>
                            <a
                              href={item.href}
                              className="mt-6 block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-50">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                          <div className="grid grid-cols-2 divide-x divide-gray-900/5 border-x border-gray-900/5">
                            {callsToAction.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                              >
                                {item.name}
                                
                                <item.icon
                                  className="h-5 w-5 flex-none text-gray-400"
                                  aria-hidden="true"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Fragment>
              )}
            </Popover>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button
                id="Pricing" 
                className="flex items-center gap-x-1 text-2xl font-semibold leading-6 text-gray-900">
                  Pricing
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {pricing.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100"
                        >
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto items-center">
                            <a
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            {/* <p className="mt-1 text-gray-600">
                            {item.description}
                          </p> */}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className=" divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction2.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>
          </div>
          <a
            href="#"
            className="flex items-end  text-xl font-semibold leading-6 text-gray-900 bg-indigo-300 hover:bg-indigo-100 px-2 py-1 rounded-md shadow-md"
          >
            <div className="mx-2">Login </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Fallback Inc.</span>
              <img className="h-8 w-auto" src="logo.png" alt="Fallback.co" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Tools
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            onClick={(e)=>{
                              dispatch(increment(item.name));
                              setMobileMenuOpen(false);
                              
                            }}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Pricing
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...pricing].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  // onClick={}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Login 
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
