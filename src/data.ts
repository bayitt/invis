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
                type: "api",
            },
            {
                name: "Duran",
                github_url: "https://github.com/usedome/duran-v2",
                url: "https://backups.usedo.me",
                type: "api",
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
    {
        name: "olamileke.dev",
        url: "https://olamileke.dev",
        github_url: "https://github.com/bayitt",
        image: "",
        services: [
            {
                name: "Pluto",
                github_url: "https://github.com/bayitt/pluto",
                url: "https://blog.olamileke.dev",
                type: "frontend",
            },
            {
                name: "Noir",
                github_url: "https://github.com/bayitt/noir",
                url: "https://noir.olamileke.dev",
                type: "api"
            },
            {
                name: "Crest",
                github_url: "https://github.com/bayitt/crest",
                url: "https://crest.olamileke.dev",
                type: "api"
            },
            {
                name: "Notify",
                github_url: "https://github.com/bayitt/notify",
                url: "https://notify.olamileke.dev",
                type: "api"
            },
            {
                name: "Cyclone",
                github_url: "https://github.com/bayitt/cyclone",
                url: "https://cyclone.olamileke.dev",
                type: "api"
            }
        ]
    },
    {
        name: "Maui",
        url: "https://mauii.xyz",
        github_url: "https://github.com/themauiapp",
        image: "",
        services: [
            {
                name: "maui",
                github_url: "https://github.com/themauiapp/maui",
                url: "https://mauii.xyz",
                type: "frontend",
            },
            {
                name: "maui api",
                github_url: "https://github.com/mauiapp/mauiapi",
                url: "https://github.com/themauiapp/mauiapi",
                type: "api"
            },
            {
                name: "mauibot",
                github_url: "https://github.com/mauiapp/mauibot",
                url: "https://github.com/themauiapp/mauibot",
                type: "bot"
            },
        ]
    },
    {
        name: "Bots",
        url: "https://bots.olamileke.dev",
        github_url: "https://github.com/olamileke/bots-docker",
        image: "",
        services: [
            {
                name: "factsonfactsbot",
                github_url: "https://github.com/olamileke/factsonfactsbot",
                url: "https://t.me/factsonfactsbot",
                type: "bot",
            },
            {
                name: "newsondemandbotbot",
                github_url: "https://github.com/olamileke/newsondemandbot",
                url: "https://t.me/news_on_demand_bot",
                type: "bot",
            },
            {
                name: "politicalnewsbot",
                github_url: "https://github.com/olamileke/politicalnewsbot",
                url: "https://t.me/a_news_bot",
                type: "bot",
            },
        ]
    },
]