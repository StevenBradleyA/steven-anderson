'use client';
import NightSky from '@/components/Background/nightSky';
import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('');

    return (
        <div className="night-sky w-full min-h-screen flex flex-col items-center">
            <NightSky />
            <h1 className="mt-32 text-6xl ">Contact Me</h1>
            <form
                className="mt-10  w-1/3 rounded-lg bg-outerSpace bg-opacity-30  p-10  z-10 flex flex-col items-center gap-5 "
                aria-labelledby="contact-form"
            >
                {/* <p>
                    Want to hire me for a role? I do full-stack development,
                    front-end design, and specialize in React applications. I
                    also build fully functional applications. Please reach out
                    with any opportunities. Internships would also be amazing.
                </p> */}

                <div className="flex flex-col w-full">
                    <label htmlFor="fullName" className="px-2">
                        Full name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        required
                        aria-required="true"
                        className=" bg-blue-300 bg-opacity-30 rounded-xl p-2 focus:outline-none focus:ring-[#007bff] focus:ring-2 hover:bg-blue-400 hover:bg-opacity-30 focus:bg-blue-400 focus:bg-opacity-30 ease-in-out "
                        placeholder="Enter your full name ..."
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="message" className="px-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        autoComplete="message"
                        required
                        aria-required="true"
                        className=" bg-blue-300 bg-opacity-30 rounded-xl p-2 w-full h-40 focus:outline-none focus:ring-[#007bff] focus:ring-2 hover:bg-blue-400 hover:bg-opacity-30 focus:bg-blue-400 focus:bg-opacity-30 ease-in-out "
                        placeholder="Enter your full name ..."
                    />
                </div>

                <button
                    onClick={() =>
                        (window.location.href =
                            'mailto:andersonstevenbradley@gmail.com?subject=Your%20Subject%20Here&body=Your%20message%20content%20here.')
                    }
                    className="py-2 px-4 mt-4 inline-block rounded-md
                    bg-[#4EBEFF] hover:bg-[#3DA0E3] text-white font-semibold"
                >
                    Get in touch
                </button>
            </form>
        </div>
    );
}
