export interface SkillSection {
    title: string,
    skills: Skill[]
}

export interface Skill {
    name: string,
    url: string | null,
    imageName: string
}