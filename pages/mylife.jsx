import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion as m } from "framer-motion";
import Link from "next/link";
import BackToTopButton from './BackToTopButton';

const mylife = () => {
    return (
        <div>
            <Head>
                <title>My Life</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/z-logo.png" />
            </Head>

            <main className="bg-white pb-10 py-20 md:py-10">
                <section className="min-h-screen">
                    <nav className="fixed top-0 py-5 px-10 md:px-40 mb-0 flex justify-between w-full bg-white border-b-2 border-gray-300 z-50">
                        <m.div
                            initial={{ opacity: 0, x: "-20%" }}
                            animate={{ opacity: 1, x: "0%" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Link href="/">
                                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer transition duration-300 hover:scale-105">
                                    PORTFOLIO
                                </h1>
                            </Link>
                            <h2 className="text-xl font-semibold text-gray-700 cursor-pointer transition duration-300 hover:scale-105"
                                onClick={() => window.location.reload()}
                            >
                                My Life
                            </h2>
                        </m.div>
                        <ul className="flex items-center">
                            <li>
                                <m.div
                                    initial={{ opacity: 0, x: "20%" }}
                                    animate={{ opacity: 1, x: "0%" }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <a
                                        className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-medium
                    hover:from-cyan-600 hover:to-teal-600 hover:scale-105 hover:shadow-md hover:rotate-1 transition duration-300"
                                        href="https://drive.google.com/file/d/132wGRfAY_4IQzmyyKvWJy0_4VF0YQYCg/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="hidden md:inline-block">VIEW</span> RESUME
                                    </a>
                                </m.div>
                            </li>
                        </ul>
                    </nav>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>{" "}

                    {/*Travel Memoirs: Capturing Good Moments*/}
                    <m.div
                        initial={{ opacity: 0, y: "20%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center p-10"
                    >
                        <h3 className="text-center font-normal text-3xl md:text-4xl pt-20">
                            Travel Memoirs: Capturing Good Moments
                        </h3>

                        <div class="py-10 flex flex-col items-center justify-center space-y-10">
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-3 h-3 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                        </div>


                        <div className="flex items-center justify-center pb-6 max-w-3xl mx-auto">
                            <img
                                src="/my.png"
                                alt="Image Alt Text"
                                className="w-12 h-8 mr-5 rounded-sm"
                            />
                            <h2 className="text-3xl text-teal-600">
                                Pulau Langkawi, Malaysia{" "}
                                <span className="text-xl text-gray-800">(August 2022)</span>
                            </h2>
                        </div>
                        <div className="bg-gray-800 h-72 md:w-1/2 md:h-96 mx-auto flex justify-center items-center rounded-lg shadow-md">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src="https://drive.google.com/file/d/1vvLcqKp8BSwMSHhcgIvCb7tvMV9sxDV0/preview"
                                allow="autoplay; fullscreen"
                            ></iframe>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: "20%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center p-10"
                    >

                        <div class="-mt-20 py-10 flex flex-col items-center justify-center space-y-10">
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-3 h-3 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                        </div>


                        <div className="flex items-center justify-center pb-6 max-w-3xl mx-auto">
                            <img
                                src="/czech.png"
                                alt="Image Alt Text"
                                className="w-12 h-8 mr-5 rounded-sm"
                            />
                            <h2 className="text-3xl text-teal-600">
                                Prague, Czech Republic{" "}
                                <span className="text-xl text-gray-800">(September 2022)</span>
                            </h2>
                        </div>
                        <div className="bg-gray-800 h-72 md:w-1/2 md:h-96 mx-auto flex justify-center items-center rounded-lg shadow-md">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src=""
                                allow="autoplay; fullscreen"
                            ></iframe>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: "20%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center p-10"
                    >

                        <div class="-mt-20 py-10 flex flex-col items-center justify-center space-y-10">
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-3 h-3 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                        </div>


                        <div className="flex items-center justify-center pb-6 max-w-3xl mx-auto">
                            <img
                                src="/au.png"
                                alt="Image Alt Text"
                                className="w-12 h-8 mr-5 rounded-sm"
                            />
                            <h2 className="text-3xl text-teal-600">
                                Vienna, Austria{" "}
                                <span className="text-xl text-gray-800">(October 2022)</span>
                            </h2>
                        </div>
                        <div className="bg-gray-800 h-72 md:w-1/2 md:h-96 mx-auto flex justify-center items-center rounded-lg shadow-md">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src=""
                                allow="autoplay; fullscreen"
                            ></iframe>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: "20%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center p-10"
                    >

                        <div class="-mt-20 py-10 flex flex-col items-center justify-center space-y-10">
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-3 h-3 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                        </div>


                        <div className="flex items-center justify-center pb-6 max-w-3xl mx-auto">
                            <img
                                src="/germany.png"
                                alt="Image Alt Text"
                                className="w-12 h-8 mr-5 rounded-sm"
                            />
                            <h2 className="text-3xl text-teal-600">
                                Berlin, Germany{" "}
                                <span className="text-xl text-gray-800">(December 2022)</span>
                            </h2>
                        </div>
                        <div className="bg-gray-800 h-72 md:w-1/2 md:h-96 mx-auto flex justify-center items-center rounded-lg shadow-md">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src=""
                                allow="autoplay; fullscreen"
                            ></iframe>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: "20%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center p-10"
                    >

                        <div class="-mt-20 py-10 flex flex-col items-center justify-center space-y-10">
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-3 h-3 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                        </div>


                        <div className="flex items-center justify-center pb-6 max-w-3xl mx-auto">
                            <img
                                src="/italy.png"
                                alt="Image Alt Text"
                                className="w-12 h-8 mr-5 rounded-sm"
                            />
                            <h2 className="text-3xl text-teal-600">
                                Italy{" "}
                                <span className="text-xl text-gray-800">(December 2022)</span>
                            </h2>
                        </div>
                        <div className="bg-gray-800 h-72 md:w-1/2 md:h-96 mx-auto flex justify-center items-center rounded-lg shadow-md">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src=""
                                allow="autoplay; fullscreen"
                            ></iframe>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: "20%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center p-10"
                    >

                        <div class="-mt-20 py-10 flex flex-col items-center justify-center space-y-10">
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-3 h-3 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                        </div>


                        <div className="flex items-center justify-center pb-6 max-w-3xl mx-auto">
                            <img
                                src="/thailand.png"
                                alt="Image Alt Text"
                                className="w-12 h-8 mr-5 rounded-sm"
                            />
                            <h2 className="text-3xl text-teal-600">
                                Krabi, Thailand{" "}
                                <span className="text-xl text-gray-800">(December 2022)</span>
                            </h2>
                        </div>
                        <div className="bg-gray-800 h-72 md:w-1/2 md:h-96 mx-auto flex justify-center items-center rounded-lg shadow-md">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src=""
                                allow="autoplay; fullscreen"
                            ></iframe>
                        </div>
                    </m.div>
                    <m.div
                        initial={{ opacity: 0, y: "20%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center p-10"
                    >

                        <div class="-mt-20 py-10 flex flex-col items-center justify-center space-y-10">
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-3 h-3 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                            <div class="w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full"></div>
                        </div>


                        <div className="flex items-center justify-center pb-6 max-w-3xl mx-auto">
                            <img
                                src="/my.png"
                                alt="Image Alt Text"
                                className="w-12 h-8 mr-5 rounded-sm"
                            />
                            <h2 className="text-3xl text-teal-600">
                                Sabah, Malaysia{" "}
                                <span className="text-xl text-gray-800">(March 2023)</span>
                            </h2>
                        </div>
                        <div className="bg-gray-800 h-72 md:w-1/2 md:h-96 mx-auto flex justify-center items-center rounded-lg shadow-md">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src=""
                                allow="autoplay; fullscreen"
                            ></iframe>
                        </div>
                    </m.div>

                </section>

                <section className="pt-20">
                    <m.div
                        className="flex justify-center items-center pr-8 md:pr-0"
                        initial={{ opacity: 0, x: "20%" }}
                        animate={{ opacity: 1, x: "0%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Link href="/">
                            <div
                                className="text-xl flex justify-center items-center text-center bg-gradient-to-r from-cyan-500 to-teal-500 
             hover:from-cyan-600 hover:to-teal-600 
             text-white px-4 py-2 rounded-md ml-8 font-medium 
             hover:scale-105 hover:shadow-md hover:-rotate-1
             transition duration-300"
                                style={{ width: "180px", height: "50px" }}
                            >
                                Back to Home
                            </div>
                        </Link>
                    </m.div>
                </section>
                <div>
                    <BackToTopButton />
                </div>
            </main>
            {/*Footer*/}
            <div className="bg-gray-500 h-32 md:h-28 flex justify-center items-center">

            </div>
        </div >
    );
};

export default mylife;