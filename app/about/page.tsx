"use client"
import Image from "next/image";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { FaMessage } from "react-icons/fa6";
import Link from "next/link";
import Skills from "./skills";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
     document.title = "About | Elvira Firmansyah"
  }, [])
  return (
    <div className="dark:bg-gradient-to-tr md:h-lvh from-mediumpastel via-viapastel to-pastel">
      <Container>
        <section id="about" className="pt-24 pb-16 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 xl:pb-20 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-10 md:space-y-0 ">
            <div className="md:w-[56%] lg:w-[62%] xl:w-[56%] space-y-2">
              <h1 className="font-bold text-3xl  lg:leading-[52px] xl:text-4xl xl:leading-[60px] tracking-title text-primary">About <span className="text-foreground">Me</span></h1>

              <p className="text-desc text-base xl:text-deskripsi leading-normal font-medium flex space-y-3 flex-col">
                <span>  
                  Hello! I&apos;m Elvira Firmansyah from Indonesia. I am a passionate Software Developer and UI/UX Designer who enjoys learning new technologies, exploring ideas, and continuously improving through feedback and experience.
                </span>
                <span>
                  I love turning ideas into meaningful digital experiences through code. I started my journey in web development by learning technologies such as React and Tailwind CSS, and have continued to expand my skills across different areas of software development. I currently have experience developing web applications while also exploring .NET and Kotlin to strengthen my overall development skills.
                </span>
                <span>
                  Beyond development, I am interested in UI/UX Design and enjoy combining technical knowledge with creativity to build intuitive and user-friendly digital experiences. I am passionate about continuously learning, growing as a developer, and bringing dedication, enthusiasm, and creativity to every project I work on.
                </span>
                <span> I have also participated in and achieved awards through various competitions, which have helped me develop my problem-solving, teamwork, and technical skills. </span> <span> Check out the <Link href="/certificate" className="underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">achievement</Link> page to see some of the competitions and awards I&apos;ve received, the <Link href="/project" className="underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">projects</Link> page to see a highlight of the projects I&apos;ve built, and the <Link href="/blog" className="underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">blog</Link> to see what I&apos;ve written and learned.
                </span>
              </p>

              <div className="flex gap-x-3 pt-4">
                <Button variant="detail_outline" ><a href="assets/img/CV_Elvira.png" target="_blank">View CV</a></Button>  
                <Button variant="primary" className="flex items-center"><FaMessage />&nbsp;&nbsp;<Link href="/contact">Contact Me
                </Link></Button>
              </div>
            </div>

            <div className="ml-10 w-4/5 sm:w-3/4 md:w-1/3 lg:w-[29%] flex items-center justify-center md:-mr-5 lg:-mr-7 xl:-mr-10">
              <div className="bg-second-background dark:bg-navdark w-3/4 rounded-lg border-b border-border dark:border-navdark  ">
                <Image
                  src="/assets/img/pizza.png"
                  width={1000}
                  height={1000}
                  alt="gambar"
                  className="rounded-lg transition ease-in-out duration-1000 hover:scale-90  hover:rotate-[8deg] hover:cursor-pointer hover:drop-shadow-techgirl "
                  loading="lazy"
                  
                />
              </div>
            </div>

          </div>

          <hr className="mt-20 mb-5" />

        <Skills />
        </section>
      </Container>
    </div>
  );
}

export default About;