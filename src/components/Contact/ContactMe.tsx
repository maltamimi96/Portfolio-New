import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
type Props = {}

const ContactMe = (props: Props) => {
  const form: React.LegacyRef<HTMLFormElement> | undefined = useRef(null)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current !== null) {
      emailjs
        .sendForm(
          "service_59jem1c",
          "template_i9a5k7r",
          form.current,
          "mdrfscXu8XkH9OZWR"
        )
        .then(
          (result) => {
            console.log(result.text)
            toast.success("Message sent")
            if (form.current !== null) {
              form.current.reset()
            }
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
  }
  return (
    <div className=" h-screen flex flex-col text-center   max-w-7xl justify-evenly mx-auto items-center">
      <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        CONTACT
      </h3>
      <div className="flex flex-col space-y-10 mt-10 md:mt-20">
        <h4 className="text-3xl font-semibold text-center underline decoration-cyan-500">
          Send me an email
        </h4>
        <form
          className="flex flex-col space-y-2 w-full "
          ref={form}
          onSubmit={sendEmail}>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default ContactMe
