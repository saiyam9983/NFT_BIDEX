import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Language from "../../view/ExplorePage";
import { Link } from "react-router-dom";
// import { Button } from "../Button/Primary";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ConnectWallet from "../Button/ConnectWallet";
import NFTCard from "../Cards/NFTCard/NFTCard";
import { Fragment } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { IoWalletOutline } from 'react-icons/Io';
import {BsWallet2} from 'react-icons/bs'
import { BiUserCircle} from 'react-icons/bi';

const navigation = [
  // { name: "Collections", current: true },
  { name: "Explore", to: "/explore", href: "/explore", current: false },
  { name: "Stats", to: "/explore", href: "/explore", current: false },
  { name: "Resources", to: "/explore", href: "/explore", current: false },
  { name: "Create", to: "/create", href: "/create", current: false },
  // { name: "Users", to: "/users", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="border-b-2 border-[#7F00FF] md:px-[20px] px-0 sticky top-0 bg-white z-[1000]"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1500px] w-full px-2 py-2">
            <div className="relative flex items-center justify-between">
              <div className=" flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="block w-auto lg:hidden"
                    src={process.env.PUBLIC_URL + "/assets/logo.png"}
                    alt="Your Company"
                  />
                  <img
                    className="hidden  w-auto lg:block"
                    src={process.env.PUBLIC_URL + "/assets/logo.png"}
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="   hidden sm:block max-w-[400px] w-full">
                <SearchComponent placeholder={"items"} />
              </div>
              <div className="  hidden sm:block">
                <div className="flex  items-center md:space-x-4 space-x-0">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current ? " text-black" : "text-black",
                        "px-2 py-2 rounded-md md:text-sm text-sm  font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                 < AiOutlineShoppingCart size='1.3em' />
                 <BsWallet2 size='1em' />
                < BiUserCircle size='1.3em'/>

                  {/* <ConnectWallet />*/}

                
                </div>
              </div>
              <div className=" md:hidden  absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <div className="md:hidden block">
                <SearchComponent placeholder={"items"} />
              </div>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-black "
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
         
        </>
      )}
    </Disclosure>
  );
}

export const SearchComponent = ({ placeholder }) => {
  return (
    <>
      {" "}
      <form className=" search-sec">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-[#808080]-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder={`Search ${placeholder}`}
            className="w-full py-2 pl-12 pr-4 text-blue-500 border rounded-md outline-none  placeholder"
            // style={{ background: "rgba(0, 0, 0, 0.1)" }}
          />
        </div>
      </form>
    </>
  );
};
