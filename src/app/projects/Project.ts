export interface Project {
    id: number;
    name: string;
    date: string;
    flavorText: string;
    desc: string | null;
    img: string;
    imgClass: string | null;
    hasLink: boolean;
    link: string | null;
    isVisualization: boolean;
    visualizationIndex: number | null;
    isDark: boolean;
    tag: string;
}

export interface ProjectAbbrv {
    id: number;
    src: string;
    title: string;
    subtitle: string;
    date: string;
    isViz: boolean;
    vizId: number | null;
    tag: string;
}

export interface ProjectResolved {
    project: Project | null;
    error?: string;
  }