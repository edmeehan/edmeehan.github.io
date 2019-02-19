---
title: Crimewire Blog
category: development
project_url: https://www.instantcheckmate.com/crimewire/
image: /img/projects/crimewire-homepage.png
---
The inbound marketing team at [The Control Group](https://thecontrolgroup.com/) was managing 5 blogs, 3 of which were built with Laravel, the other 2 on WordPress. This made adding features to all 5 blogs a development chore. Tony Lea, a senior developer at The Control Group had written a CMS for Laravel called [Voyager](https://laravelvoyager.com/). I worked with Tony adding features to the Laravel Voyager managed blogs. Together we built a feature library and worked to improve workflow and reduce deployment lag. But, the WordPress sites got no love, so I was tasked with migrating the Crimewire blog and it's 600+ posts onto Laravel Voyager.

### Laravel Migration & WordPress Schema

The Crimewire blog had over 600+ posts, and my first task was to write a script that would populate the new Laravel app database from the WordPress database. I wrote a script in PHP that would pull the data from the WordPress database and then build a blog post model and then save it to the Laravel database. This simple script would prove to be valuable since it was used to migrate the second blog some months later.

### Blog Posts & Categories

Unlike WordPress, Voyager makes no assumptions as to the type of website you would like to build. So I needed to design and build out the basic blog by making models for posts and categories. I also needed to build out all the views required such as the default homepage, categories, authors, posts and pages.

### Responsive & Fast

I added the [Glide package](http://glide.thephpleague.com/) to the app to manage the image sizes and request images to match the layout. I also wrote a script in JavaScript to lazy load images. This made for smaller and fewer file requests and faster load time on mobile devices.

### Conclusion

Upon launch, the blog scored a 97 on [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). The inbound marketing team was very happy with the results and it was one of my favorite projects at The Control Group.