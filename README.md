# React Portfolio

A clean and simple React portfolio webpage written in Javascript, HTML, CSS, and ReactJS.

## Techologies Used
To get similar results, here are the tools and technologies that I used:

   #### Programming
    Javascript, HTML5, CSS3, JSX, NPM, Webpack, EmailJS 

   #### Software
    Visual Studio Code, Github, Vercel

   #### Operating Systems
    Windows

   #### Fonts + Images
    Google Fonts, React Icons
    
## Available Scripts

In the project directory, you can run:

### `npm run start`

## Issues

 - When I tried to run `npm run start`, this message showed up:

  ![image](https://github.com/jasih/react-portfolio/assets/57278438/29d60b31-4a66-4a09-af34-e1e7a882f664)

 - After some careful research, here is [What I Learned](#what-i-learned):  

### What I Learned
***NOTE:*** *I am using a Windows machine, so I do not know if this will help those on MacOS or Linux.*

---
# **IMPORTANT**
DO NOT USE THE COMMAND: `npm install react-scripts -g` as this will install the script globally and affect your other repo's project as well!!!

---

Now, here is an easy and effective solution that helped me:
- To solve my start issue, I followed these simple steps:
  - In your project directory, run the command: `npm update`
  - Then, after it is *completely* done, try to run `npm run start` again 

This allowed me to run my development server with no other issues. Good Luck!!!

I used [this thread](#other-references) to help solve my issue.

---
  - Here are other things that gave me some new insights:
    - I learned how to create a Responsive portfolio website using `React libraries`.
    - Learned how to deploy and maintain my website using `Vercel` and regular upkeeping.
    - Learned how to use `NPM commands` to install different packages and their dependencies.
    - Learned how to use EmailJS for `contact form` messenging.
    - Learned how to use `Card components` to style, manipulate, and use for different sections of my website.
    - Learned the importance of filing, documenting, and maintaining records for various files and documentation. ---> 
     
   *(seriously, imagine having to sort through hundreds (or even thousands) of lines of code to find what you need...sadly, that was me.)*
   
---
## Links

Want to see it deployed? Check out this link! ---> [View My Portfolio Here](https://react-portfolio-jasih.vercel.app/)

For a different version of this website without ReactJS, see my other repo [here](https://github.com/jasih/portfolio)

Youtube Videos that helped me create this portfolio:
- [React Portfolio Website Tutorial From Scratch - Build & Deploy React JS Portfolio Website (2022)](https://www.youtube.com/watch?v=G-Cr00UYokU&t=3863s)
- [Responsive Personal Portfolio Website Using HTML CSS And JavaScript | Dark/Light Mode](https://www.youtube.com/watch?v=27JtRAI3QO8&t=1167s)

## Other References

See [Issues](#issues) :
 - ['react-scripts' is not recognized as an internal or external command #2436](https://github.com/facebook/create-react-app/issues/2436)

## Screenshots

### 1. Home
(Need to fix styling on image)

Highlighted Features:
 - On *all* pages:
   - Navigation bar on the bottom of the screen: buttons redirect to [Home](#1-home), [About Me](#2-about-me), [My Portfolio](#3-my-portfolio), and [Contact Me](#4-contact-me) pages (animations: on hover ---> background changes color + on click ---> does a small transition to appropriate page section).
   
   ![image](https://github.com/jasih/react-portfolio/assets/57278438/007f40c0-a642-4214-ad31-cdd38d6bfeec)

   - Media queries for changing window size of the web page.
   - Interactive buttons (has *cool* animations: on hover ---> background changes color).
  
   ![image](https://github.com/jasih/react-portfolio/assets/57278438/d6dd498f-0c54-4fe6-b81a-6d534f51146b)

 - On *Home* page only:
   - Downloadable button to `Download CV` (same animation as all buttons)
   - Left-side of the screen contains small, clickable icons that redirect you to my [LinkedIn Profile](https://www.linkedin.com/in/janet-sihapanya-b03102199/) and my [GitHub Profile](https://github.com/jasih)
   
   ![image](https://github.com/jasih/react-portfolio/assets/57278438/aa60bfb7-545d-415c-a554-509b2402934c)
   
   - Right-side of the screen has a small, clickable text button that redirects you to my [Contact Me page](#4-contact-me)

    ![image](https://github.com/jasih/react-portfolio/assets/57278438/77ef2947-36df-4f5c-9974-a25dd836e9a8)

![react_portfolio](https://github.com/jasih/react-portfolio/assets/57278438/16b824b0-d221-471d-bf76-a32db29e698d)

### 2. About Me

- On *About Me* page:
  - Displays some background information
  - Image moves with mouse hover
  
  ![image](https://github.com/jasih/react-portfolio/assets/57278438/a598f463-8e98-4252-983b-e81c9e276b31)![image](https://github.com/jasih/react-portfolio/assets/57278438/8b667e5e-a74b-4749-9328-a8de9d205b86)

  - Small infographics at the top changes color
  ![image](https://github.com/jasih/react-portfolio/assets/57278438/e9cae208-4f71-4298-a5ac-91935aa0ba68)

![image](https://github.com/jasih/react-portfolio/assets/57278438/120b242a-73dd-438f-a1d4-7aa6fb3351b9)

### 3. My Portfolio

(Needs to be updated)

- On *My Portfolio* page:
  - Displays `Card` components of my work with a small image to illustrate what they are
  - Background changes color the same way as the inforgraphics in [About Me page](#2-about-me)
  
  ![image](https://github.com/jasih/react-portfolio/assets/57278438/853ef943-6724-492c-afd7-be80a59f8b20)
  
  - Displays a clickable button to my [GitHub repo](https://github.com/jasih?tab=repositories) for that specific project. Buttons also change background color on hover.
  
  ![image](https://github.com/jasih/react-portfolio/assets/57278438/5c28700a-546f-4542-a5f1-c92b599b9a7e)

![image](https://github.com/jasih/react-portfolio/assets/57278438/593741ea-7f3e-4591-afee-7332722cef69)

### 4. Contact Me

- On *Contact Me* page:
 - Displays my contact information
 - Infographics changes background color on hover
 
 ![image](https://github.com/jasih/react-portfolio/assets/57278438/0c244fbc-450c-4788-8fad-4b8312534384)

 - Workable and clickable text button to `Send a message`. On click, button allows you to draft a message from your e-mail. On hover, text changes color.
 
 ![image](https://github.com/jasih/react-portfolio/assets/57278438/16079c84-cbed-43c2-a6fa-56129f26b7e0)
 
 - Functional `contact form`. Button sends the message directly to my email in the same format as the form.
 
 ![image](https://github.com/jasih/react-portfolio/assets/57278438/0a2e1ae5-727b-468c-9437-43dcb85688d1)

![image](https://github.com/jasih/react-portfolio/assets/57278438/c7c49463-86ac-4319-a221-4bdc8aee64d4)
