export interface Project {
    id: number;
    name: string;
    date: string;
    flavorText: string;
    desc: string | null;
    img: string;
    hasLink: boolean;
    link: boolean | null;
    isVisualization: boolean;
    visualizationIndex: number | null;
}