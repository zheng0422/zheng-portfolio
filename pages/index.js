import Head from "next/head";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/cz.jpg";
import ts from "../public/ts.png";
import lanugage from "../public/language.png";
import cert from "../public/cert.png";
import { useState } from "react";
import design1 from "../public/design1.png";
import design2 from "../public/design2.png";
import { motion as m } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Choo Zheng Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-0 flex justify-between">
            <m.div
              initial={{ opacity: 0, x: "-20%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
                {" "}
                ZHENG / PORTFOLIO
              </h1>
            </m.div>
            <ul className="flex items-center">
              <li>
                <m.div
                  initial={{ opacity: 0, x: "20%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <a
                    className="text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-medium"
                    href="https://drive.google.com/file/d/132wGRfAY_4IQzmyyKvWJy0_4VF0YQYCg/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW RESUME
                  </a>
                </m.div>
              </li>
            </ul>
          </nav>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <m.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center p-10"
          >
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Choo Zheng
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Computer Science (Final Year Student)
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto">
              As an aspiring Computer Science student specializing in
              <span className="text-teal-500">
                {" "}
                <br></br>Cyber Security{" "}
              </span>
              from
              <span className="text-teal-500"> Taylor&apos;s University</span>,
              <br></br>I am passionate about software development and creating
              innovative solutions.
            </p>
          </m.div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <m.div
              initial={{ opacity: 0, y: "150%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <a
                href="https://www.facebook.com/choozheng0422"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: "150%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <a
                href="https://www.instagram.com/choozheng0422/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: "150%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              <a
                href="https://www.linkedin.com/in/choo-zheng-6571a5278/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </m.div>
          </div>

          <m.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-76 md:w-76"
          >
            <Image src={profile} alt="profile pic" layout="fill" objectFit="cover" />
          </m.div>
        </section>

        <section>
          <m.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-center text-3xl py-10 md:text-4xl">About Me</h3>
            <p className="text-justify leading-8 text-gray-800 max-w-lg mx-auto">
              My academic journey includes a
              <span className="text-teal-500">
                {" "}
                Business Specialization Course
              </span>{" "}
              at
              <span className="text-teal-500">
                {" "}
                Anglo-American University
              </span>{" "}
              in
              <span className="text-teal-500"> Prague, Czech Republic </span>
              during August 2022 as part of a student exchange semester. Through
              various university projects, I have gained proficiency in multiple
              programming languages, solidifying my technical skills.
            </p>
          </m.div>

          <div className="py-10 lg:flex gap-10 justify-center ">
            {/*Technical Skills*/}
            <div>
              <div className="shadow-lg p-20 rounded-xl my-10">
                <div className="flex justify-center items-center">
                  <Image src={ts} alt="technical skills" width={180} height={180} />
                </div>
                <h3 className="text-lg text-center font-medium pt-8 pb-2 text-teal-600">
                  Technical Skills
                </h3>
                <p className="text-gray-800 py-4 px-2"> Python</p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full "
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <p className="text-gray-800 py-4 px-2"> Java</p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full "
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <p className="text-gray-800 py-4 px-2"> C++</p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full "
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <p className="text-gray-800 py-4 px-2"> MySQL</p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full "
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <p className="text-gray-800 py-4 px-2">
                  {" "}
                  HTML, CSS, JavaScript & PHP
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full "
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p className="text-gray-800 py-4 px-2"> Figma</p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full "
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/*Certifications*/}
            <div>
              <div className="shadow-lg p-10 rounded-xl my-10 ">
                <div className="flex justify-center items-center">
                  <Image src={cert} alt="cert" width={180} height={180} />
                </div>
                <h3 className="text-center text-lg font-medium pt-8 pb-2 text-teal-600">
                  Certifications
                </h3>
                <ul className="list-disc ml-5">
                  <li className="text-gray-800 py-3 px-2">
                    {" "}
                    Oracle Java Foundations
                  </li>
                  <li className="text-gray-800 py-3 px-2">
                    {" "}
                    Huawei Data Communications & <br />
                    Network Technology
                  </li>
                  <li className="text-gray-800 py-3 px-2">
                    {" "}
                    Salesforce Fundamentals
                  </li>
                  <li className="text-gray-800 py-3 px-2">
                    {" "}
                    Google Digital Garage <br />
                    (The Fundamentals of Digital Marketing)
                  </li>
                </ul>
              </div>
            </div>

            {/*Language Proficiency*/}
            <div>
              <div className="shadow-lg p-20 rounded-xl my-10 ">
                <div className="flex justify-center items-center">
                  <Image src={lanugage} alt="language" width={150} height={150} />
                </div>
                <h3 className="text-center text-lg font-medium pt-8 pb-2 text-teal-600">
                  Language Proficiency
                </h3>
                <p className="text-gray-800 py-4 px-2"> English</p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full "
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <p className="text-gray-800 py-4 px-2"> Mandarin (Chinese)</p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full "
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <p className="text-gray-800 py-4 px-2"> Malay</p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full "
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <p className="text-gray-800 py-4 px-2"> Cantonese</p>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full "
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {" "}
          {/*Works on UX/UI Design*/}
          <div>
            <h3 className="text-center text-3xl py-10">
              Works on UX/UI Design
            </h3>
            <h2 className="text-justify text-2xl max-w-3xl mx-auto text-teal-600">
              1. EduHub <span className=" text-justify text-base max-w-sm mx-auto text-gray-800">(UI Design with Figma)</span>  
            </h2>
            <p className="text-justify leading-8 py-5 text-gray-800 max-w-3xl mx-auto">
              One of my 
              <span className="text-teal-500"> Assignment Project </span> in Taylor&apos;s University under 
              <span className="text-teal-500"> (Human Computer Interaction) module. </span> 
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
          </div>
          <div className="flex justify-center items-center">
            <a
              href="https://www.figma.com/file/u70TGyCLIbdDef8uy6pWAb/EduHub%3A-HCI-Group-Assignment-2?type=design&node-id=0%3A1&mode=design&t=Akwk7pyfpVUKYsWj-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="shadow-lg p-10 rounded-xl">
                <Image src={design2} alt="eduhub" width={500} height={150} />
              </div>
            </a>
          </div>
          <br></br>
          <br></br>
          <div>
            <h2 className="text-justify text-2xl max-w-3xl mx-auto text-teal-600">
              2. Adhero <span className=" text-justify text-base max-w-sm mx-auto text-gray-800">(UI/UX Design with Figma)</span> 
            </h2>
            <p className="text-justify leading-8 py-5 text-gray-800 max-w-3xl mx-auto">
              My <span className="text-teal-500">Final Year Project </span>(Capstone Project) in Taylor&apos;s University. It is a 
              <span className="text-teal-500"> mobile application </span>that connected to a 
              <span className="text-teal-500"> Smart Medication Adherence Device </span> to use in tracking patient&apos;s medication adherence.
              Currently we have just done the planning and design phase. It will be develop and deploy during January Short Semester 2024.
              Adhero is your ultimate medication management solution. Seamlessly
              integrating{" "}
              <span className="text-teal-500"> smart technology, </span>
              AdHero ensures you{" "}
              <span className="text-teal-500">never miss a dose. </span>
              Simplify tracking, reminders, and communication with healthcare
              providers for better health outcomes. Your trusted partner for
              hassle-free medication adherence.
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <a
              href="https://www.figma.com/file/JWQYVg5YSUW4yo6cUkfbLw/FYP-1.0?type=design&node-id=0%3A1&mode=design&t=lXW36nWxHuQSO1ke-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="shadow-lg p-10 rounded-xl">
                <Image src={design1} alt="adhero" width={500} height={150} />
              </div>
            </a>
          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </main>
    </div>
  );
}
