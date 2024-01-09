import { TApplication } from "./types";

export const applications: TApplication[] = [
    {
        name: "Dome",
        url: "https://usedo.me",
        github_url: "https://github.com/usedome",
        image: "",
        services: [
            {
                name: "Dome",
                github_url: "https://github.com/usedome/dome",
                url: "https://usedo.me",
                type: "frontend",
            },
            {
                name: "Gello",
                github_url: "https://github.com/usedome/gello",
                url: "https://admin.usedo.me",
                type: "frontend",
            },
            {
                name: "Zilch",
                github_url: "https://github.com/usedome/zilch",
                url: "https://api.usedo.me",
                type: "backend",
            },
            {
                name: "Duran",
                github_url: "https://github.com/usedome/duran-v2",
                url: "https://backups.usedo.me",
                type: "backend",
            },
        ]
    },
    {
        name: "Yeet",
        url: "https://theyeetapp.com",
        github_url: "https://github.com/theyeetapp",
        image: "",
        services: [
            {
                name: "Yeet",
                github_url: "https://github.com/theyeetapp/yeet",
                url: "https://theyeetapp.com",
                type: "frontend",
            },
            {
                name: "YeetBot",
                github_url: "https://github.com/theyeetapp/yeetbot",
                url: "https://t.me/theyeetbot",
                type: "bot"
            },
        ]
    },
]