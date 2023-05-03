export default {
    base: "", // add repo name with a forward slash at the start, but not at the end
    projects: [
        {
            title:"Needle.gg",
            imgSrc:"/images/needle.png",
            liveURL:"https://needle.gg/",
            githubURL:"https://github.com/MarcusOtter/needle.gg/pull/13",
            description: "An open source contribution for a popular Discord bot, porting a landing page from HTML/CSS/JS to Astro. Ensured build worked with analytics and Netlify's deployment platform features."
        },
        {
            title:"VM Forecast Dashboard",
            imgSrc:"/images/data-viz.png",
            liveURL:"https://3dvkr.github.io/data-visualization-project/",
            githubURL:"https://github.com/3dvkr/data-visualization-project",
            description: "A front-end project for a client to display forecasted usage data for virtual machines from Google BigQuery. It uses React, TypeScript, Material UI, and Recharts."
        },
        {
            title: "Rapt",
            imgSrc: "/images/rapt.png",
            liveURL: "https://rapt-app.netlify.app/",
            githubURL: "https://github.com/3dvkr/rapt-backend",
            description: "A neurodiversity-friendly full-stack time-tracker and pomodoro app. It uses  TypeScript, PostgreSQL, Prisma, Express, React, Tanstack-Query, Zustand, and DaisyUI."
        },
        {
            title:"Write Things!",
            imgSrc:"/images/write-things.png",
            liveURL:"https://write-things.onrender.com",
            githubURL:"https://github.com/3dvkr/write-things",
            description: "A tool to help fight writer's block, in a carrot-on-a-stick sort of way. It's built with Node, Express, Notion API public integration, React, and Material UI."
        },
    ],
    tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Zustand",
        "MongoDB",
        "SQL",
        "Express",
        "Node.js",
        "Material UI",
        "D3.js",
        "Astro",
    ]
}
