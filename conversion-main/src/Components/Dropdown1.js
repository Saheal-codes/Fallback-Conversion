import { Fragment, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { converterStatefrom } from "../reducer/reducer1";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown1(state) {
  const filekey = ["PDF", "DOC/DOCX", "ODT", "RTF", "TXT", "HTML", "", "", ""];

  const ref = useRef();

  useEffect(() => {
    ref.current?.click();
  }, []);

  const dispatch = useDispatch();

  const currentSetConverter = useSelector((state) => state.reducer.value);

  const currentSetFromConverter = useSelector(
    (state) => state.reducer.converterValuefrom
  );

  return (
    <Menu
      as="div"
      className="relative inline-block text-left mx-5 justify-end mr-0"
    >
      <div className="">
        <Menu.Button
          ref={(r) => (ref.current = r)}
          id={state.id || "Openit1"}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white  px-3 py-2 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {state.value || currentSetFromConverter || "Select Unit"}

          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-5">
            <p className="text-lg font-semibold">Currently Selected Unit : </p>
            <p className="truncate text-md font-semibold text-gray-900">
              {currentSetConverter}
            </p>
          </div>
          <div className="py-1">
            {/* Put map instead of full Elements below so that dropdown options can be Mapped */}

            {filekey.map((item, ind) => (
              <Menu.Item key={ind}>
                {({ active }) => (
                  <a
                    // href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-md font-semibold"
                    )}
                    onClick={(e) => {
                      e.persist();
                      if (!state.id) {
                        document.getElementById("Openit1")?.click();
                        document.getElementById("Openit2")?.click();
                      } else {
                        ref.current?.click();
                        document.querySelector(`#second_${state.id}`)?.click();
                      }

                      state.onChange
                        ? state.onChange(item)
                        : dispatch(converterStatefrom(item));
                    }}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
