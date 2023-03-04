import React from "react"
import { PhoneIcon } from "@heroicons/react/24/solid"
type Props = {}

const ContactMe = (props: Props) => {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        CONTACT
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">Contact Me Via</h4>
        <div className="text">
          <form className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex flex-col gap-2 md:space-x-2 md:flex-row md:gap-0">
              <input className="formInput" type={"text"} placeholder="Name" />
              <input className="formInput" type={"text"} placeholder="Email" />
            </div>
            <input className="formInput" type={"text"} placeholder="Title" />
            <textarea className="formInput" placeholder="Message" rows={5} />
            <button className="bg-cyan-600 py-5 px-10 rounded-sm text-gray-300 font-bold ">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
