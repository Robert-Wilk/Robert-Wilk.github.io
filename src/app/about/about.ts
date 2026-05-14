import { Component, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GsapService } from '../shared/gsap.service';

export interface TimelineEntry {
  year: string;
  tag: string;
  title: string;
  body: string;
  bullets?: string[];
  cta?: { label: string; route: string };
  active?: boolean;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit, OnDestroy {
  private gsapService = inject(GsapService);
  private scrollTriggers: ScrollTrigger[] = [];

  readonly timeline: TimelineEntry[] = [
    {
      year: '2013',
      tag: 'Origin',
      title: 'Learned HTML & CSS',
      body: 'English teacher in 7th grade introduced me to WWDC 2013 Student Scholarship. Unfortunately, I didn\'t  have a Mac to build iOS apps, but I was hooked on learning how to code.',
    },
    {
      year: '2018',
      tag: 'Inspiration',
      title: 'Built First Robot',
      body: 'In order to graduate high school, students were required to complete a service learning project. I designed and programmed Clean Bot — a Lego Mindstorms NXT robot that swept a room and avoided obstacles using an ultrasonic sensor. I wanted to show the world that AI and robotics could be super impactful in our daily lives.',
    },
    {
      year: '2019',
      tag: 'Academia',
      title: 'Started at UNC Charlotte',
      body: 'I started a CS degree with a concentration in Artificial Intelligence, Robotics & Gaming and originally a minor in Philosophy. As I progressed, I eventually switched to a minor in Computer Engineering to understand the hardware side of robotics. My passion for robotics led me to purse undergraduate research and countless days in the robotics lab.',
    },
    {
      year: '2021',
      tag: 'Research',
      title: 'Researched Robotics in the Real World',
      body: 'In the robotics lab at UNC Charlotte, I operated the motion capture system and got hands-on experience programming many types of robots: Khepera IV, turtlebot, and Crazyflie. Under the direction of my professor Dr. Wenhao Luo, I implemented Probabilistic Safety Barrier Certificates for multi-robot scenarios in the real-world.',
    },
    {
      year: '2021',
      tag: 'Leadership',
      title: 'Re-established IEEE Eta Kappa Nu Honor Society',
      body: 'I helped re-establish the IEEE Eta Kappa Nu honor society at UNC Charlotte from the ground up with a group of passionate students. I served as the first Treasurer on the re-founding executive board — organizing finances for induction ceremonies, networking events, and the Student Leadership Conference.',
    },
    {
      year: '2022',
      tag: 'Industry',
      title: 'Interned at Wells Fargo',
      body: "I was a Technology Intern in Wells Fargo's Liquidity & Risk Management department. During my internship, I built complex Angular UIs, presented to senior executives, and participated in Agile development for the first time in a production setting.",
    },
    {
      year: '2022',
      tag: 'Milestone',
      title: 'Graduated Summa Cum Laude',
      body: 'Bachelor of Science in Computer Science, Chancellor\'s List every qualifying semester (except 1 which I got Dean\'s List). Also served as an Instructional Assistant that final semester, preparing coursework and mentoring students for the 3000-level course: Introduction to Artificial Intelligence.',
    },
    {
      year: '2023',
      tag: 'Growth',
      title: 'Program Analyst',
      body: 'After graduating I returned to Wells Fargo as a Program Analyst. I pushed API test coverage from 40% to 95%, built developer observability tooling, led a team of interns on a Power BI proof-of-concept for senior leadership, and shipped UX improvements that for our internal business users.',
    },
    {
      year: '2023',
      tag: 'Certification',
      title: 'Azure Fundamentals AZ-900',
      body: 'I obtained a Microsoft certification in Azure cloud fundamentals — solidifying knowledge of cloud architecture, services, and how the infrastructure behind modern software actually works.',
    },
    {
      year: '2024',
      tag: 'Now',
      title: 'Software Engineer',
      body: 'During my time at Wells Fargo, I gained a passion for modernizing existing and legacy platforms. I saw the potential in these systems and wanted to harness their full potential. I have modernized CI/CD pipelines to Harness, GitHub Actions, and OpenShift, then containerized them to leverage cloud infrastructure technology like Kubernetes. A few notable modernizations have been: ',
      bullets: [
        'Migrating a legacy reporting system consisting of 180+ SAP Crystal Reports and 250,000+ report instances to Power BI with S3 storage retention with an API to automate report ingestion at scale',
        'Modernizing the risk and controls framework from a spreadheet to a full-service digital solution with AI integration.'
      ],
    },
    {
      year: 'Next',
      tag: 'Building',
      title: 'What Comes Next',
      body: 'Exploring new frontiers in AI, robotics, and the web-development. This portfolio is part of that story — always a work in progress, just like the rest of it.',
      cta: { label: "Let's work together", route: '/contact' },
      active: true,
    },
  ];

  ngAfterViewInit() {
    this.gsapService.registerAnimation(() => this.initTimeline());
  }

  private initTimeline() {
    const entries = gsap.utils.toArray<Element>('.timeline-entry');

    gsap.set(entries, { opacity: 0, x: 50 });

    entries.forEach((entry) => {
      const st = ScrollTrigger.create({
        trigger: entry,
        start: 'top 88%',
        onEnter: () => {
          gsap.to(entry, {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: 'power2.out',
          });
        },
      });
      this.scrollTriggers.push(st);
    });
  }

  ngOnDestroy() {
    this.scrollTriggers.forEach((st) => st.kill());
  }
}