export interface Project {
    id: number;
    name: string;
    date: string;
    flavorText: string;
    desc: string | null;
    img: string;
    imgClass: string | null;
    hasLink: boolean;
    link: boolean | null;
    isVisualization: boolean;
    visualizationIndex: number | null;
    isDark: boolean;
}

export interface ProjectAbbrv {
    id: number;
    src: string;
    title: string;
    subtitle: string;
    date: string;
    isViz: boolean;
    vizId: number | null;
}

export interface ProjectResolved {
    project: Project | null;
    error?: string;
  }