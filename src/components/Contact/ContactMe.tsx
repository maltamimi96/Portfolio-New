import React from "react"
import { PhoneIcon } from "@heroicons/react/24/solid"
type Props = {}

const ContactMe = (props: Props) => {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        CONTACT
      </h3>
      <div
        className="flex flex-col space-y-10
      ">
        <h4 className="text-4xl font-semibold text-center">Contact Me Via</h4>
        <div className="text"></div>
      </div>
    </div>
  )
}

export default ContactMe
