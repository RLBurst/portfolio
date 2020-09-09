---
title: Building My Very Own Gatsby Site
date: 2020-09-09T08:57:07.900Z
---
Over the past couple days, I have been learning Gatsby in order to create my own personal site. As for why...well I have always wanted to make a site for writing as I enjoy writing a lot and I also remember styling my first site on Neopets and it being a totally awesome experience! Although this site is not as amazing as some of the starters and themes out there, I like simple, minimalist layouts so I am still pretty happy with the outcome as it suits my style. Eventually I plan to create a todo list page (or even consume a theme!) about what other features I want to add to this site. Why Gatsby? Well, there are many different site generators out there but I decided to use Gatsby as React seems to be pretty popular these days for web development and I wanted to try it out so that was the main reason. So how was this accomplished?

To begin my adventure, I learned Gatsby by going through the official tutorials and understanding the basic idea of how to get a site up and running. I didn't really need to know how it worked internally or what anything did really. I just needed to know that certain parts were needed in order to successfully build a site. After playing around with the tutorials and sifting through the documentation this was what I gathered to be the most crucial parts. 

First of all, Gatsby has two variations of site creation, a starter and a themed site. A themed site allows other projects to use the theme thereby eliminating a lot of duplicate work if the themed site is flexible and fits into your site. For instance, I knew going in I wanted to have a portfolio page and a blog page. By browsing through the plugins where most themes are prefixed by gatsby and namespaced by creator, I can find themes that I like that matches the page I am trying to create and just add the plugins to my site. Multiple themes can be used and I can even override the styles! 

With the flexibility of themes why choose a starter then? One reason is that if too many things are overridden/shadowed it might be best to reconsider the choices and create a theme or starter site. There are also many template starters out there as well so its really preference on whether or not to have a design be consumable. For me, I decided to create a starter because I do not expect to publish it on npm or use it for anything else. Now that it's decided that a starter will be created, the rest of this post will focus on what is needed for a starter site. If I ever convert it to a theme or build a theme in the future, I will write about it but for now, just a starter.

For the starter, I will be creating one without editing a template so this is the project setup that I followed. I used yarn as my package manager, vscode as my editor, and git for my source control. I also had the Gatsby CLI installed to be able to use gatsby commands. I used JavaScript but TypeScript is also supported.

1. Create the directory and add gatsby dependencies (To skip all the boilerplate, the Gatsby official starter repositories can be used).

   ```
   # create repo
   git init

   # default package.json with do not publish set to true
   yarn init -yp

   # add the gatsby dependencies
   yarn add gatsby react react-dom
   ```

   Now all that is needed are pages. Gatsby looks for pages in the src/pages directory or alternatively they can be created from a template during the gatsby build process. To create pages in code, a gatsby-node.js is required. Gatsby also needs a gatsby-config.js for configuring plugins. 
2. Pages without content is not very appealing so what is needed now is data. To query for data from outside React components, Gatsby uses GraphQL. GraphQL is a pretty simple query language and there is even a built in development editor for testing out queries when Gatsby is built. For processing files for my posts I used gatsby-plugin-mdx. This also requires a bunch of other plugins including gatsby-source-filesystem. The main idea here is have data and get the right plugins to transform them into nodes that may be queried. For blogging markdown is usually the way to go and for projects GitHub provides its own API for GraphQL to fetch any information to showcase.
3. Use the queries to pass data to the React components. Gatsby provides node helper methods for a variety of things and one of them is `actions.createPage` which can be used by providing a hook into the build process via the `exports.createPages` which is called after the plugins have done their work. This allows the queries on the pages to retrieve that information. This highlights the major point in this step which is get familiar with the Gatsby lifecycle to understand where to hook into and adjust the site building process.
4. Each query is then passed to React components and can then be destructured for the data. Each child node from the query can be accessed as a property on the data object which makes it really easy to render customized views. Multiple queries can be done in one go as well! From here it's all React so this step is really to understand the basic idea of what is a React component and deciding how to break down the page into usable components. For my case, I have been just using functional components with JSX and rendering specific parts of a page such as header for my components so I did not really have to go too in depth with it.
5. Now that everything is all set up the last thing to do is make it look pretty! Gatsby offers so many different ways to style, it was honestly really hard to pick one. At the end of the day though, everything comes down to CSS so understanding that is pretty crucial, or at the very least how to google it! The styling method that I decided to go with was Theme UI although I really liked the icons from Material UI so I used those icons but used Theme UI to style my site. So this step is to just choose the preferred styling method!

That really sums it all up about how I approached building this website without getting into too much details. The code is always readily available for the curious on GitHub! What I learned though is that CSS is actually quite difficult to get right across all devices and that images can be a pain although breakpoints and plugins help a lot. Also content! Content makes the site! So stay tuned for more!