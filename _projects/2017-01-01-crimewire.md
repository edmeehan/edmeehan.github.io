---
title: Crimewire Blog
category: development
project_url: https://www.instantcheckmate.com/crimewire/
share-url: https://v.emeehan.com/r/ki58q32r
image: /img/projects/crimewire-blog.jpg
og-image: /img/projects/crimewire-blog.jpg
excerpt: I got tasked with moving the Crimewire blog off of WordPress, and onto Laravel + Voyager.
seo-title: Crimewire Blog Laravel Project
read-time: 1.5 min read
tags:
    - Laravel
    - PHP
    - Javascript
    - Vue
    - SASS
---
The inbound marketing team at [The Control Group](https://thecontrolgroup.com/) was managing five blogs, three of which used Laravel, the other two on Wordpress. Tony Lea, a senior developer at The Control Group, had written an admin package for Laravel called [Voyager](https://laravelvoyager.com/). I worked with Tony adding features to the Laravel + Voyager managed blogs. Because of the two different platforms (WordPress & Laravel), this made adding features to all five blogs a development chore.  I got tasked with moving the Crimewire blog off of WordPress, and onto Laravel + Voyager.

### Laravel Migration & WordPress Schema

The Crimewire blog had over 600 posts, and my first step was to write a script that populated the new Laravel app database with the Wordpress posts. I wrote a script in PHP that pulled the data from the WordPress database and then filled a blog post model and then saved it to the Laravel database. This simple script would prove to be valuable months later to migrate the second and final WordPress blog.

### Blog Posts & Categories

I built the blog features by making models for posts and categories. I also developed a feature that used data from the [Google Analytics API](https://developers.google.com/analytics/devguides/reporting/core/v4/) to query popular posts by user behavior. I created all the views required such as the default homepage, categories, authors, posts and pages.

### Responsive & Fast

<img class="full-width" width="400" height="400" src="{{ '/img/projects/crimewire-homepage.png' | absolute_url }}" alt="screen shot of Crimewire blog">

I added the [Glide package](http://glide.thephpleague.com/) to the app to manage the image sizes and request images to match the layout. I also wrote a script in JavaScript to lazy load images. These features resulted in smaller and fewer file requests and faster load time on mobile devices.

### Conclusion

Upon launch, the blog scored a 97 on [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). The inbound marketing team was thrilled with the results, and it was one of my favorite projects while employed at The Control Group.
