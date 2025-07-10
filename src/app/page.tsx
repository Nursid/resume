import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12 pt-20">

      <section className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b mx-auto w-full max-w-2xl">
        <div className="flex items-center justify-between px-6 py-4 mx-auto">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-4xl">{DATA.initials}</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-12">
            <Link   
              href="#about" 
              className="text-md font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              href="#projects" 
              className="text-md font-medium hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/blog" 
              className="text-md font-medium hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>
      </section>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col items-start space-y-8">
            {/* Name with gradient effect */}
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold sm:text-4xl xl:text-5xl/none text-left bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent hover:from-primary hover:via-primary hover:to-foreground transition-all duration-500 cursor-default"
              yOffset={8}
              text={DATA.name}
            />
            
            {/* Subtitle with typewriter effect */}
            <div className="relative">
              <BlurFadeText
                className="text-xl text-muted-foreground text-left font-mono relative group"
                delay={BLUR_FADE_DELAY * 2}
                text="I write code to build things."
              />
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
            
            {/* Avatar with hover effects */}
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="relative group">
                <Avatar className="size-32 border-2 border-muted hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="group-hover:scale-110 transition-transform duration-300" />
                  <AvatarFallback className="group-hover:bg-primary/10 transition-colors duration-300">{DATA.initials}</AvatarFallback>
                </Avatar>
                {/* Floating ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
              </div>
            </BlurFade>
            
            {/* Description with enhanced styling */}
            <BlurFadeText
              className="max-w-[600px] text-left md:text-lg "
              delay={BLUR_FADE_DELAY * 4}
              text={DATA.description}
            />
            
            {/* Enhanced Social Icons */}
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="flex items-center space-x-4">
                {Object.entries(DATA.contact.social)
                  .filter(([_, social]) => social.navbar)
                  .map(([name, social]) => (
                    <Link
                      key={name}
                      href={social.url}
                      className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-muted hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <social.icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110" />
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {name}
                      </div>
                    </Link>
                  ))}
              </div>
            </BlurFade>
                    </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="mx-auto w-full max-w-2xl">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent "></div>
      </div>
 
      <section id="projects">
        <div className="space-y-4 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <h2 className="text-3xl font-medium tracking-tighter sm:text-3xl">
                Projects
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Side-projects I have built
                </p>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  // video={}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section> */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
