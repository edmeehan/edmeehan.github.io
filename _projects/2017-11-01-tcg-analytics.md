---
title: TCG Google Analytics
category: analytics
share-url: https://v.emeehan.com/r/ju64wg67
# project_url:
image: /img/projects/tcg-analytics.jpg
og-image: /img/projects/tcg-analytics.jpg
# excerpt: 
seo-title: TCG Google Analytics Revamp Project
read-time: 2 min read
tags:
    - PHP
    - Javascript
    - Google
    - Vue
---
While employed at [The Control Group](https://thecontrolgroup.com/) **(TCG)** I took an interest in the company's Google Analytics **(GA)** account. I was sharing my data findings with my team but was not getting much buy-in because the GA setup and data were not trusted.<!--more--> GA was not a source of truth at TCG for multiple reasons, but the primary was the marketing and optimization teams measured success with different tools. I spoke to the <abbr title="chief technology officer">CTO</abbr> about wanting to update the GA setup, and a few weeks later I was given the challenge and resources to fix it.

### Requirements
One requirement was to add e-commerce tracking, but I also wanted to add some additional features. To compile my requirements, I began interviewing the team leaders and noting data they found valuable. I also hired a consultant to assist me with the GA setup and employee training. 

### Development
GA's e-commerce tracking requires integration with the application. I wrote a middleware package to expose and format purchase info to the data layer used by [Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/) **(GTM)**. I added offline data with the GA <abbr title="application program interface">API</abbr> for tracking subscription renewals and phone cancellations. And finally, I added custom events to be used as goals for monitoring upsell and cross-sell conversions.

### Data Audit
After the initial setup, I allowed a few weeks of data to collect before starting a vigorous round of data audits. I worked with the marketing and data team to compare the GA data against other data tools considered truth by TCG. Much to my relief, the new setup was tracking with a below 10% discrepancy (set as my milestone) against multiple sources of data.

### Cleaning UTM Links
The marketing team had a significant interest in the new GA setup and improving the tracking of campaigns and channels. This type of tracking requires the use of [<abbr title="urchin tracking module">UTM</abbr>](https://support.google.com/analytics/answer/1033863) parameters on inbound links, and upon the launch of the new setup, 70% of inbound traffic was improperly formatted. To fix this my coworker Andrew Johnson wrote a script that looped thru thousands of links in the redirect platform and fixed all the formatting issues I had observed, and this would eventually reduce the improperly formatted links to below 1%.

### Dashboard & Link Validation Tool
I built a serious of dashboards to monitor data discrepancies and created alerts to warn myself and others when/if these events happened. I also created a tool in Vue.js and Node for the marketing team that could validate UTM links with the configured channel groups.

### Google Analytics Training
I did several training sessions with various teams, walking them thru the basics of data scope and how to build custom reports.

### Conclusion
This project presented many challenges along the way, but I kept chipping away at the tasks. My efforts did not go unnoticed by the leadership team, I was promoted and also selected as a [Prell Cup](https://thecontrolgroup.com/blog/company-news/q4-prell-cup-winners) winner, an award given to individuals or teams who you can create a repeatable process for success within the company.
