import React from "react";
import { useSelector } from "react-redux";
import Dropdown2 from "./Dropdown2";
import Dropdown1 from "./Dropdown1";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filetable({ props, filename }) {
  const fileValue = useSelector((state) => state.reducer.fileValue);

  console.log("File Value", fileValue);
  // function convertBase64ToFile(base64String, fileType) {
  //   const byteCharacters = atob(base64String);
  //   const byteArrays = [];

  //   for (let i = 0; i < byteCharacters.length; i++) {
  //     byteArrays.push(byteCharacters.charCodeAt(i));
  //   }

  //   const byteArray = new Uint8Array(byteArrays);
  //   const blob = new Blob([byteArray], { type: fileType });

  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.onload = function(event) {
  //       resolve(event.target.result);
  //     };

  //     reader.onerror = function(error) {
  //       reject(error);
  //     };

  //     reader.readAsDataURL(blob);
  //   });
  // }

  // // Example usage
  // const base64String = fileValue;
  // const fileType = "image/png";
  // const [convertedfile, setconvertedfile] = React.useState([])

  // convertBase64ToFile(base64String, fileType)
  //   .then(fileDataURL => {
  //     // Use the file data URL as needed
  //     console.log(fileDataURL);
  //     setconvertedfile(fileDataURL)
  //   })
  //   .catch(error => {
  //     // Handle any errors that occurred during the conversion
  //     console.error(error);
  //   });

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700">
            A list of all the files you want to convert.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add More Files
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Index
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    File Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Covert From
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Convert To
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filename.map((item, personIdx) => (
                  <tr key={personIdx}>
                    <td
                      className={classNames(
                        personIdx !== props.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      )}
                    >
                      {[personIdx+1]}
                      
                    </td>
                    <td
                      className={classNames(
                        personIdx !== props.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      )}
                    >
                      {filename[personIdx]}
                      
                    </td>
                    <td
                      key={personIdx}
                      className={classNames(
                        personIdx !== props.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"
                      )}
                    >
                      <Dropdown1 />
                    </td>
                    <td
                      key={personIdx}
                      className={classNames(
                        personIdx !== props.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"
                      )}
                    >
                      <Dropdown2 />
                    </td>
                    <td
                      key={personIdx}
                      className={classNames(
                        personIdx !== props.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                      )}
                    >
                      <a
                        onClick={() => console.log(fileValue)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {item.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
