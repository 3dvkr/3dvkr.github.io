---
title: "Splitting a monorepo"
date: 2023-04-27
tags: ["project", "git"]
---
I recently needed to split a monorepo. Somewhere between Node 20 making standalone apps possible, deployment platforms with vanishing or punitive free tiers, and the size of my app, I wanted my API and React in separate repositories. 

## Preserving Git Histories
I decided I'd keep the original monorepo as is, and create two repos to work with going forward: one for the frontend, and one for the backend. Both times, I started with a clone of the monorepo and used `filter-repo` to only include the files and folders that were relevent to the new repo I was creating. The `filter-repo` isn't included in git, but it's a python script that can be installed with a package manager. I ran `pip install git-filter-repo`. 

For separating out the frontend:
```powershell
git clone <repo>
git filter-repo --path client
cd ..\client
git remote add origin <new-repo>
git branch -M main
git push -u origin main
```
For the backend, I repeated the process above with a `--invert-paths` flag at the end of the second line to *exclude* all my frontend code. 

## Changes to the backend code
In the monorepo, the API served the React app's `index.html` and static files, so the app and API shared the same domain. I needed to make two main changes:  removing the route handler serving the front end's files, and adding CORS middleware. 

The last step was to clean up my build scripts in my `package.json` file, and deploy the API to a new platform. I went with [Cyclic](https://cyclic.sh) since the build size was now safely under their 240MB limit.

## Changes to the frontend code
For the frontend, I didn't need to alter the code I'd already written, but I did need to add some new files. 

The urls in my fetch requests were relative, and I was deploying on Netlify, so I created a [`_redirects` file](https://docs.netlify.com/routing/redirects/rewrites-proxies/). These contents would work for most React SPAs set up using Vite:
```
/api/*     https://<api-domain>/api/:splat      200
/assets/*  /assets/:splat                       200
/*         /index.html                          200
```

By default, Netlify redirects the paths with an HTTP code of 301. This means the request with the new URL to the API still comes from the React app. By setting the status code to 200, Netlify's servers will proxy or rewrite the request to the API instead. This is especially important since browsers are getting [stricter with third-party cookies](https://www.cookiestatus.com).

I also added a new `.gitignore` to my frontend repo to exclude `node_modules` and `.env` files.

## Links
- [git-filter-repo repository](https://github.com/newren/git-filter-repo/)
- [git-filter-repo Manual](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html) 
- [Rapt](https://rapt-app.netlify.app)