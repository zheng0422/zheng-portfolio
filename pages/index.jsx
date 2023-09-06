import Head from "next/head";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import ts from "../public/ts.png";
import lanugage from "../public/language.png";
import cert from "../public/cert.png";
import { motion as m } from "framer-motion";
import Link from "next/link";
import React, {useEffect } from 'react';
import BackToTopButton from './BackToTopButton';
import profile1 from '../public/profile1.jpg';
import profile2 from '../public/profile2.jpg';



const Home = () => {
  return (
    <div>
      <Head>
        <title>Choo Zheng | Portfolio</title>
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
              <h1
                className="hover:scale-[103%] text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer transition duration-500"
                onClick={() => window.location.reload()}
              >
                <span className="hidden lg:inline-block">ZHENG |</span> {' '}PORTFOLIO
              </h1>
            </m.div>
            <ul className="flex items-center ">
              <li className="px-4 hidden lg:block">
                <m.div
                  initial={{ opacity: 0, x: "20%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <Link href="/MyWork">
                    <div className="group relative hover:scale-[103%] transition duration-500">
                      <h1 className="text-xl flex justify-center items-center text-center text-gray-400 font-medium relative
                                hover:text-transparent
                                hover:bg-clip-text 
                                hover:bg-gradient-to-r from-cyan-500 to-teal-500">
                        PROJECT
                      </h1>
                    </div>
                  </Link>
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


          {/*----------------------------------------------- CONTENT BODY -----------------------------------------------------*/}
          <m.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center p-10"
          >
            <h2 className="text-5xl font-semibold lg:pt-10 py-2 text-teal-600 lg:text-6xl lg:font-bold">
              Choo Zheng
            </h2>
            <h3 className="text-2xl font-medium py-2 lg:text-3xl lg:font-semibold">
              Full-Stack Developer (Intern)
            </h3>
            <p className="text-md py-5 pt-5 leading-8 text-gray-800 lg:text-xl max-w-3xl mx-auto">
              As an aspiring Computer Science student specializing in
              <span className="text-teal-500">
                {" "}
                <br></br>Cyber Security{" "}
              </span>
              from
              <a href="https://university.taylors.edu.my/en.html"
                target="_blank"
                rel="noopener noreferrer">
                <span className="text-teal-500"> Taylor&apos;s University</span>,
              </a>
              <br></br>I am passionate about software development and creating
              innovative solutions.
            </p>
          </m.div>
          <div>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <m.div
              initial={{ opacity: 0, y: "150%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <a
                href="https://www.facebook.com/choozheng0422"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center group hover:scale-[103%] transition duration-500"
              >
                <AiFillFacebook className="text-gray-500 group-hover:text-blue-600 transition duration-500" />
                <span className="text-sm font-medium hidden lg:inline-block">@ Choo Zheng</span>
              </a>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: "150%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center items-center"
            >
              <a
                href="https://www.instagram.com/choozheng0422/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center group hover:scale-[103%] transition duration-500"
              >
                <AiFillInstagram className="text-gray-500 group-hover:text-pink-600 transition duration-500" />
                <span className="text-sm font-medium hidden lg:inline-block">@ choozheng0422</span>
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
                className="flex justify-center items-center group hover:scale-[103%] transition duration-500"
              >
                <AiFillLinkedin className="text-gray-500 group-hover:text-blue-500 transition duration-500" />
                <span className="text-sm font-medium hidden lg:inline-block">@ Choo Zheng</span>
              </a>
            </m.div>
          </div>

          <m.div
            initial={{ opacity: 0, y: "40%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="py-16 px-60">
              <hr className="border border-gray-200" />
              <hr className="border border-gray-100 py-1" />
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: "40%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center pt-2">
              <div className='group flex items-center justify-center'>
                <div className='relative h-full w-full rounded-full shadow-l transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>

                  <div className=''>
                    <Image src={profile1} alt="" className="h-64 w-64 lg:h-80 lg:w-80 rounded-full object-cover shadow-xl shadow-black/20" width={300} height={300} />
                  </div>

                  <div className='absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <Image src={profile2} alt="" className="h-64 w-64 lg:h-80 lg:w-80 rounded-full object-cover shadow-xl shadow-black/20 " width={300} height={300} />
                  </div>

                </div>
              </div>
            </div>
          </m.div>

        </section>
        <section>
          <m.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-5 px-10"
          >
            <h3 className="text-center text-3xl font-medium py-10 lg:text-4xl lg:font-semibold">About Me</h3>
            <p className="text-justify leading-8 text-gray-800 max-w-lg mx-auto">
              I was born <span className="text-teal-500">(2022)</span> in <span className="text-teal-500"> Kelantan, Malaysia. </span>  I enjoy spending my free time with
              loved ones, cherishing moments with family and friends. I have a deep passion for exploring new destinations and travelling, capturing breathtaking photos and videos, which I love sharing on my Instagram stories. Engaging in both indoor and outdoor sports allows me to stay active and healthy while having fun.
            </p>
            <br></br>
            <p className="text-justify leading-8 text-gray-800 max-w-lg mx-auto">
              Moreover, I thrive on the excitement of participating in extreme activities, and theme parks hold a special place in my heart as they provide a perfect blend of thrills and entertainment.
            </p>
            <br></br>
            <p className="text-justify leading-8 text-gray-800 max-w-lg mx-auto">
              My academic journey includes a
              <span className="text-teal-500">
                {" "}
                Business Specialization Course
              </span>{" "}
              at
              <a href="https://www.aauni.edu/"
                target="_blank"
                rel="noopener noreferrer">
                <span className="text-teal-500">
                  {" "}
                  Anglo-American University {" "}
                </span>
              </a>
              in
              <span className="text-teal-500"> Prague, Czech Republic </span>
              during August 2022 as part of a student exchange semester. Through
              various university projects, I have gained proficiency in multiple
              programming languages, solidifying my technical skills.
            </p>
          </m.div>

          <div className="px-60 py-10">
            <hr className="border border-gray-200" />
            <hr className="border border-gray-100 py-1" />
          </div>

          <m.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h3 className="text-center font-medium text-3xl lg:text-4xl lg:pb-10 lg:font-semibold">
              Skills and Expertise
            </h3>
          </m.div>
          <div className="py-0 px-10 lg:flex gap-10 justify-center ">
            {/*Technical Skills*/}
            <div className="transition duration-500 hover:scale-[102%]">
              <div className="lg:w-[350px] lg:h-[840px] bg-white shadow-lg p-20 rounded-xl my-10">
                <div className="flex justify-center items-center">
                  <Image
                    src={ts}
                    alt="technical skills"
                    width={180}
                    height={180}
                  />
                </div>
                <h3 className="text-lg text-center font-medium lg:font-semibold pt-8 pb-2 text-teal-600">
                  Technical Skills
                </h3>
                <div className="transition duration-300 hover:scale-[105%] group">
                  <p className="text-gray-800 py-4 px-2 text-lg">
                    <img src="/py.png" alt="uk" className="inline-block h-5 mr-2" />
                    Python <span className="text-sm hidden transition-transform transform-gpu group-hover:inline-block"> (60%) </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative group">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-amber-500 h-3 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div className="transition duration-300 hover:scale-[103%] group">
                  <p className="text-gray-800 py-4 px-2 text-lg">
                    <img src="/java.png" alt="uk" className="inline-block h-5 mr-2" />
                    Java <span className="text-sm hidden transition-transform transform-gpu group-hover:inline-block"> (70%) </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative group">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-rose-500 h-3 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div className="transition duration-300 hover:scale-[103%] group">
                  <p className="text-gray-800 py-4 px-2">
                    <img src="/c++.png" alt="uk" className="inline-block h-5 mr-2" />
                    C++ <span className="text-sm hidden transition-transform transform-gpu group-hover:inline-block"> (70%) </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative group">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-sky-600 h-3 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>


                <div className="transition duration-300 hover:scale-[103%] group">
                  <p className="text-gray-800 py-4 px-2">
                    <img src="/mysql.png" alt="uk" className="inline-block h-5 mr-2" />
                    MySQL <span className="text-sm hidden transition-transform transform-gpu group-hover:inline-block"> (70%) </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative group">
                    <div
                      className="bg-gradient-to-r from-emerald-400 to-teal-500 h-3 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div className="transition duration-300 hover:scale-[103%] group">
                  <p className="text-gray-800 py-4 px-2">
                    <img src="/html.png" alt="uk" className="inline-block h-5 mr-2" />
                    <span className="text-base transition-transform transform-gpu group-hover:text-xs">
                      HTML, CSS, JavaScript {"  "}
                      <span className="text-sm hidden transition-transform transform-gpu group-hover:inline-block">  (80%) </span>
                    </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative group">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="transition duration-300 hover:scale-[103%] group">
                  <p className="text-gray-800 py-4 px-2">
                    <img src="/figma.png" alt="uk" className="inline-block h-5 mr-2" />
                    Figma <span className="text-sm hidden transition-transform transform-gpu group-hover:inline-block"> (80%) </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative group">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-indigo-500 h-3 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

              </div>
            </div>

            {/*Certifications*/}
            <div className="transition duration-500 hover:scale-[102%]">
              <div className="lg:w-[350px] lg:h-[840px] bg-white shadow-lg p-10 rounded-xl my-10 ">
                <div className="flex justify-center items-center">
                  <Image src={cert} alt="cert" width={180} height={180} />
                </div>
                <h3 className="text-center text-lg font-medium lg:font-semibold pt-8 pb-2 text-teal-600">
                  Certifications
                </h3>
                <ul className="list-disc ml-5">
                  <li className="text-gray-800 py-3 px-2 transition duration-300 hover:scale-[103%]">
                    {" "}
                    Oracle Java Foundations
                  </li>
                  <li className="text-gray-800 py-3 px-2 transition duration-300 hover:scale-[103%]">
                    {" "}
                    Huawei Data Communications & <br />
                    Network Technology
                  </li>
                  <li className="text-gray-800 py-3 px-2 transition duration-300 hover:scale-[103%]">
                    {" "}
                    Salesforce Fundamentals
                  </li>
                  <li className="text-gray-800 py-3 px-2 transition duration-300 hover:scale-[103%]">
                    {" "}
                    Google Digital Garage <br />
                    (The Fundamentals of Digital Marketing)
                  </li>
                </ul>
              </div>
            </div>

            {/*Language Proficiency*/}
            <div className="transition duration-300 hover:scale-[102%]">
              <div className="lg:w-[350px] lg:h-[840px] bg-white shadow-lg p-20 rounded-xl my-10 ">
                <div className="flex justify-center items-center">
                  <Image
                    src={lanugage}
                    alt="language"
                    width={150}
                    height={150}
                  />
                </div>
                <h3 className="text-center text-lg font-medium lg:font-semibold pt-8 pb-2 text-teal-600">
                  Language Proficiency
                </h3>
                <div className="transition duration-300 hover:scale-[103%] group">
                  <p className="text-gray-800 py-4 px-2 text-lg">
                    <img src="/uk.png" alt="uk" className="inline-block h-5 mr-2" />
                    English <span className="text-sm hidden transition-transform transform-gpu group-hover:inline-block"> (70%) </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative group">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 h-3 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div className="transition duration-300 hover:scale-[103%] group">
                  <p className="text-gray-800 py-4 px-2 text-lg">
                    <img src="/cn.png" alt="cn" className="inline-block h-5 mr-2" />
                    Mandarin <span className="text-sm hidden transition-transform transform-gpu group-hover:inline-block"> (95%) </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative group">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 h-3 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div className="transition duration-300 hover:scale-[103%] group">
                  <p className="text-gray-800 py-4 px-2 text-lg">
                    <img src="/my.png" alt="my" className="inline-block h-5 mr-2" />
                    Malay <span className="text-sm hidden transition-transform transform-gpu group-hover:inline-block"> (60%) </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative group">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 h-3 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div className="transition duration-300 hover:scale-[103%] group">
                  <p className="text-gray-800 py-4 px-2 text-lg">
                    <img src="/hk.png" alt="hk" className="inline-block h-5 mr-2" />
                    Malay <span className="text-sm hidden transition-transform transform-gpu group-hover:inline-block"> (80%) </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 relative group">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 h-3 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="px-60">
          <hr className="border border-gray-300 my-10" />
        </div>

        <div className="pr-8 lg:pr-0 lg:flex justify-center">
          <m.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: "20%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link href="/MyWork">
              <div
                className="text-xl flex justify-center items-center text-center bg-gradient-to-r from-cyan-500 to-teal-500 
             hover:from-cyan-600 hover:to-teal-600 
             text-white px-4 py-2 rounded-md ml-8 font-medium 
             hover:scale-105 hover:shadow-md hover:rotate-1
             transition duration-300"
                style={{ width: "180px", height: "50px" }}
              >
                View Project
              </div>
            </Link>
          </m.div>
          <m.div
            className="flex justify-center items-center pt-4 lg:pt-0"
            initial={{ opacity: 0, x: "20%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link href="/MyLife">
              <div
                className="text-xl flex justify-center items-center text-center bg-gradient-to-r from-cyan-500 to-teal-500 
             hover:from-cyan-600 hover:to-teal-600 
             text-white px-4 py-2 rounded-md ml-8 font-medium 
             hover:scale-105 hover:shadow-md hover:rotate-1
             transition duration-300"
                style={{ width: "180px", height: "50px" }}
              >
                My Life
              </div>
            </Link>
          </m.div>
        </div>
        <div><BackToTopButton /></div>
      </main>

      {/*Footer*/}
      <div className="bg-gray-500 h-32 lg:h-28 flex justify-center items-center">

      </div>
    </div>
  );
};

export default Home;