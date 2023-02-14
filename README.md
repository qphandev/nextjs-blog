This is a starter template for [Learn Next.js](https://nextjs.org/learn).

- Some next.js notes:
    - out of the box compiles postCSS
    - By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.
    - Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)
    - Pre-rendering test-- Learned something really cool -- that is to see if something is not loaded using hydration, you can go into the console log, ctrl + shft + p, type in "disable javascript", and then try loading the page. If it's a static page, it will load without giving you errors about not being able to load a script (https://nextjs.org/learn/basics/data-fetching/pre-rendering)
    - Next.js has two forms of pre-rendering -- server side rendering and static generation. Client side rendering is like the hydration. Server side rendering is when the site is generated on each request. In dev mode, your site is pre-rendered on every request, which... takes away the pre part of it, doesn't it? For production, the static generation only generates at BUILD time.
    - How cool, you can create a hybrid next.js site!
    - Things I don't usually consider -- fetching data! https://nextjs.org/learn/basics/data-fetching/with-data
    - You might have noticed that each markdown file has a metadata section at the top containing title and date. This is called YAML Front Matter, which can be parsed using a library called gray-matter.
    - they had us creating util (in lib) for filesystem interface
    - In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils.
    - Client Side Rendering apparently: This approach works well for user dashboard pages, for example. Because a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn’t need to be pre-rendered. The data is frequently updated, which requires request-time data fetching.
    - Generating pages with dynamic routes (static generation): https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops
    - Install remark remark-html to interface with the content of the markdown (so far we're only able to access the file name)

    * 1/14/23 Gosh I'm trying my darndest to stay on track (put about 1 hour in) with following this tutorial but most of it is blurred to me. Not sure if its because of the cold or something, but my attention feels so loose right now. Should be proud of sticking through it though even though I don't feel like I'm actually absorbing anything right now.
    * I'm running into the situation where I'm learning something, and then I go, "How would I have ever figured out to do this? I wouldn't even know that I needed this!" When they instruct us to install these packages. I can't help but to feel like it'll be very difficult if not impossible to remember the things I've just learned, therefore rendering my current efforts useless. Now that is a harmful mindset.

    1. This error occurs when Next.js can't find a compiled version of your application in the .next directory. Here are some common fixes for this error:

    2. Rebuild the application: Run npm run build or yarn build in your terminal to rebuild the application. Then try running it again with npm run start or yarn start.

    3. Delete the .next directory: Sometimes, the .next directory may become corrupted. To resolve this, delete the .next directory and run npm run build or yarn build again.

    4. Check for outdated dependencies: Outdated dependencies can cause issues with the build process. Run npm outdated or yarn outdated to see if any of your dependencies are outdated. If any are, update them with npm update or yarn upgrade.

    5. Check your next.config.js file: Make sure your next.config.js file is correctly set up.

- Bookmark: https://nextjs.org/learn/basics/dynamic-routes/setup 