---
title: Gym Attendance App
category: development
project_url: https://github.com/edmeehan/react-gas-gym-classes
image: /img/projects/gym-attendance-app.jpg
og-image: /img/projects/gym-attendance-app.jpg
read-time: 1.5 min read
# excerpt: 
seo-title: Gym Attendance App built with Google App Script and React 
tags: 
  - React
  - Javascript
  - Google
---
I stumbled upon [Google App Script](https://developers.google.com/apps-script/) **(GAS)** while working on a Google spreadsheet. Upon first glance, it seemed just an option for writing custom functions, but then I started reading more of the documentation and discovered it was so much more than that. What got my attention was publishing a project as a web app or API endpoint and getting easy access to a bunch of Google product API's. The first GAS web app I wrote handles the contact form posts for this static website using the Spreadsheet and Gmail APIs. This first small web app had me wanting to explore other ideas, and a few days ago, I found some inspiration at my gym.

### Inspiration
Every day when I walk into the gym, I sign my name on an attendance sheet along with my membership number and the class I plan to attend. Almost all gyms use an attendance tracking method, and many gym/yoga studio SaaS companies offer this as a product. This attendance sheet can then become a database table to run some business analytics queries, like average class attendance, and daily active members, for example.

### App Details
To build my gym attendance app, I used [ReactJS](https://reactjs.org/) to manage the UI and state. The app uses three Google products via their API's to fetch and write data. [Google Calendar](https://developers.google.com/apps-script/reference/calendar/) is used to fetch a calendar of gym classes and display them within a two-hour window. Building the class schedule is very easy, and also adds the ability for future features like filtering classes based on members level/account, etc. Next, [Google Drive](https://developers.google.com/apps-script/reference/drive/) is used to fetch some images used in the UI, such as the gym logo and member photos. And finally, [Google Sheets](https://developers.google.com/apps-script/reference/spreadsheet/) keeps all the data (members list and attendance log). The attendance log can be used to run queries or visualize the data to help the gym owners/managers make decisions based on this data.

### Conclusion
All of my code and files are available to view and use on my [GitHub project](https://github.com/edmeehan/react-gas-gym-classes). I enjoyed building this project and plan on adding some other features and apps to build upon it soon. Let me know what you think of this project or if you have some ideas of how I can make it better in the discussion section below.

### Video Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/m1CM4us6HCk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>