export type TApplication = {
    name: string;
    url: string;
    github_url: string;
    image: string;
    services: TService[];
}

export type TService = {
    name: string;
    github_url: string;
    url: string;
    type: "frontend" | "api" | "bot"
}