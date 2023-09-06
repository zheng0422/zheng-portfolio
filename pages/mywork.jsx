import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import design1 from "../public/design1.png";
import design2 from "../public/design2.png";
import { motion as m } from "framer-motion";
import Link from "next/link";
import BackToTopButton from './BackToTopButton';

const HoverImage = ({ imageUrl, figmaLink }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="flex justify-center items-center">
      <a href={figmaLink} target="_blank" rel="noopener noreferrer">
        <div
          className="shadow-lg p-10 rounded-xl relative hover:bg-opacity-60 hover:text-opacity-100 hover:transition-opacity hover:duration-1500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={imageUrl} alt="image" width={500} height={150} />
          {hovered && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white transition-opacity duration-1300">
              Click to show the design
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

const MyWork = () => {
  return (
    <div>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/z-logo.png" />
      </Head>

      <main className="bg-white pb-10 py-20 lg:py-10"
        style={{
          backgroundImage: "url(/homeBG.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
        <section className="min-h-screen">
          <nav className="fixed flex top-0 py-5 px-10 lg:px-40 mb-0 justify-between w-full bg-white border-b-2 border-gray-300 z-50">
            <m.div
              initial={{ opacity: 0, x: "-20%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Link href="/">
                <h1
                  className="hover:scale-[103%] text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer transition duration-500"
                >
                  <span className="hidden lg:inline-block">ZHENG |</span> {' '}PORTFOLIO
                </h1>
              </Link>
            </m.div>
            <ul className="flex items-center ">
              <li className="px-4 hidden lg:block">
                <m.div
                  initial={{ opacity: 0, x: "20%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 1, ease: "easeOut" }}>
                  <div className="group relative hover:scale-[103%] transition duration-500 cursor-pointer">
                    <h1 className="text-xl flex justify-center items-center text-center text-gray-400 font-medium relative
                                hover:text-transparent
                                hover:bg-clip-text 
                                hover:bg-gradient-to-r from-cyan-500 to-teal-500"
                                onClick={() => window.location.reload()}
                    >
                      PROJECT
                    </h1>
                  </div>
                </m.div>
              </li>

              <li className="px-4 hidden lg:block">
                <m.div
                  initial={{ opacity: 0, x: "20%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <Link href="/MyLife">
                    <div className="group relative hover:scale-[103%] transition duration-500">
                      <h1 className="text-xl flex justify-center items-center text-center text-gray-400 font-medium relative
                                hover:text-transparent
                                hover:bg-clip-text 
                                hover:bg-gradient-to-r from-cyan-500 to-teal-500">
                        LIFE
                      </h1>
                    </div>
                  </Link>

                </m.div>
              </li>

              <li className="px-0">
                <m.div
                  initial={{ opacity: 0, x: "20%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <a
                    className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-medium
                    hover:from-cyan-600 hover:to-teal-600 hover:scale-[103%] transition duration-500 hover:shadow-md hover:rotate-1"
                    href="https://drive.google.com/file/d/132wGRfAY_4IQzmyyKvWJy0_4VF0YQYCg/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hidden lg:inline-block">VIEW</span> RESUME
                  </a>
                </m.div>
              </li>
            </ul>
          </nav>



          {/*Works on UX/UI Design*/}
          <m.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center p-10"
          >
            <h3 className="text-center text-2xl font-medium lg:text-4xl lg:font-semibold pb-16 pt-10">
              Works on UX/UI Design
            </h3>
            <h2 className="text-justify text-xl lg:font-medium max-w-3xl mx-auto text-teal-600">
              1. EduHub{" "}
              <span className=" text-justify text-base max-w-sm mx-auto text-gray-800">
                (UI Design with Figma)
              </span>
            </h2>
            <p className="text-justify leading-8 py-5 text-gray-800 max-w-3xl mx-auto">
              One of my
              <span className="text-teal-500"> Assignment Project </span> in
              Taylor&apos;s University under
              <span className="text-teal-500">
                {" "}
                (Human Computer Interaction) module.{" "}
              </span>
              EduHub is your one-stop mobile app for unlocking a world of
              knowledge which is suitable for kids and teenagers. With{" "}
              <span className="text-teal-500">
                {" "}
                personalized learning paths, interactive content (AR/VR), and
                seamless access{" "}
              </span>
              to a diverse range of subjects, learning has never been this
              <span className="text-teal-500"> convenient and engaging. </span>
              Elevate your learning experience with EduHub, where education
              meets innovation.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="px-10 lg:px-0 flex justify-center items-center">
            <HoverImage
              imageUrl={design1}
              figmaLink="https://www.figma.com/file/u70TGyCLIbdDef8uy6pWAb/EduHub%3A-HCI-Group-Assignment-2?type=design&node-id=0%3A1&mode=design&t=Akwk7pyfpVUKYsWj-1"
            />
          </m.div>
          <div className="px-10 lg:px-20 py-16">
            <hr className="border border-gray-200" />
            <hr className="border border-gray-100 py-1" />
          </div>
          <m.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center px-10"
          >
            <h2 className="text-justify text-xl lg:font-medium max-w-3xl mx-auto text-teal-600">
              2. Adhero{" "}
              <span className=" text-justify text-base max-w-sm mx-auto text-gray-800">
                (UI/UX Design with Figma)
              </span>
            </h2>
            <p className="text-justify leading-8 py-5 text-gray-800 max-w-3xl mx-auto">
              My <span className="text-teal-500">Final Year Project </span>
              (Capstone Project) in Taylor&apos;s University. It is a
              <span className="text-teal-500"> mobile application </span>that
              connected to a
              <span className="text-teal-500">
                {" "}
                Smart Medication Adherence Device{" "}
              </span>{" "}
              to use in tracking patient&apos;s medication adherence. Currently
              we have just done the planning and design phase. It will be
              develop and deploy during January Short Semester 2024. Adhero is
              your ultimate medication management solution. Seamlessly
              integrating{" "}
              <span className="text-teal-500"> smart technology, </span>
              AdHero ensures you{" "}
              <span className="text-teal-500">never miss a dose. </span>
              Simplify tracking, reminders, and communication with healthcare
              providers for better health outcomes. Your trusted partner for
              hassle-free medication adherence.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="px-10 lg:px-0 flex justify-center items-center">
            <HoverImage
              imageUrl={design2}
              figmaLink="https://www.figma.com/file/JWQYVg5YSUW4yo6cUkfbLw/FYP-1.0?type=design&node-id=0%3A1&mode=design&t=lXW36nWxHuQSO1ke-1"
            />
          </m.div>
        </section>

        <section className="pt-20">
          <m.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: "20%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link href="/">
              <div
                className="text-xl flex justify-center items-center text-center bg-gradient-to-r from-cyan-500 to-teal-500 
             hover:from-cyan-600 hover:to-teal-600 
             text-white px-4 py-2 rounded-md lg:ml-8 font-medium 
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
      <div className="bg-gray-500 h-32 lg:h-28 flex justify-center items-center">

      </div>
    </div >
  );
};

export default MyWork;
