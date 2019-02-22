---
title: TCG Google Analytics
category: analytics
# project_url:
image: /img/projects/tcg-analytics.png
og-image: /img/projects/tcg-analytics.png
excerpt: While employed at TCG I took an interest in the companies Google Analytics account. I was sharing my findings but was not getting much buy-in from the team on the validity of the data. I spoke to the CTO about wanting to fix the GA setup, and a few weeks later I was given the challenge and resources to do it.
seo-title: TCG Google Analytics Revamp Project
tags:
    - PHP
    - Javascript
    - Google
    - Vue
---
While employed at [The Control Group](https://thecontrolgroup.com/) **(TCG)** I took an interest in the companies Google Analytics **(GA)** account. I was sharing my findings but was not getting much buy-in from the team on the validity of the data. To give context TCG does a lot of optimization, and has built tools over the years to measure these efforts. GA was never a source of truth for multiple reasons, but the primary reasons seemed to be getting to the desired data was difficult, and the marketing team measured success on a different platform. I knew that this was not a fault of the tool, but just how it was managed and perceived by my TCG teammates. I spoke to the Shiem Edelbrock (<abbr title="chief technology officer">CTO</abbr>) about wanting to fix the GA setup, and a few weeks later I was given the challenge and resources to do it.

### Requirements
TCG has a [GA 360 enterprise](https://marketingplatform.google.com/about/analytics-360/) account, and my primary need was to use it to it's fullest capabilities by adding e-commerce tracking and other various features. I was also given the green light to start fresh and could ignore the old accounts. I began by interviewing the senior leaders in the company and listing all the features and data points they found valuable. I also hired a consultant to assist me with the GA setup and employee training.

### Development
GA's standard pageview tracking does not require much setup, but e-commerce tracking, on the other hand, requires integration with the application. TCG's core application was very custom, and I had to write middleware to expose and format purchase info to the data layer used by [Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/) **(GTM)**. Leveraging GTM in this setup allowed me to configure and edit changes rapidly without corrupting my production data with testing data. I also tapped into our offline data with the GA <abbr title="application program interface">API</abbr> for tracking various offline events like subscription renewals and phone cancellations.

### Data Audit
After the initial setup, I allowed a few weeks of data to collect before starting a vigorous round of data audits. I worked with the marketing and data team to compare the GA data against other data tools considered truth by TCG. Much to my relief, the new setup was tracking with a below 10% discrepancy (set as my milestone) against multiple sources of data.

### Cleaning Dirty Data
The marketing team had a significant interest in the new GA setup and improving the tracking of campaigns and channels. This type of tracking requires the use of [<abbr title="urchin tracking module">UTM</abbr>](https://support.google.com/analytics/answer/1033863) parameters on inbound links, and upon the launch of the new setup, 70% of inbound traffic from UTM links were improperly formatted. Fixing this would require digging into the platform used by our marketing team and affiliates that managed <abbr title="uniform resource locator">URL</abbr> redirects and attached UTM parameters, and there were thousands if not hundreds of thousands of them. Lucky for me my coworker Andrew Johnson was a genius and had experience with this URL rewriting platforms API and wrote a script that fixed all the formatting issues I had observed, and this would eventually reduce the improperly formatted links to below 1%.

### Monitoring Dashboard & Link Validation Tool
With the new setup completed, data validated and trustworthy I took efforts to ensure it stayed that way. I built a serious of data dashboards that compared the GA e-commerce tracking data with internal tools data so I could monitor discrepancies, I created alerts to warn myself and others when these events happened. I also created a tool in Vue.js and Node that used various API's and could validate an inbound links UTM parameters with the configured GA setup.

### Google Analytics Training
Before starting the project, it was clear to me that trusting the data and knowing how to find it was one of the blockers for my teammates. I did several training sessions with various teams, walking them thru the basics of data scope and how to build custom reports.

### Conclusion
This project presented many challenges along the way, but I knew the value it would have on the business, so I kept chipping away at the tasks. My efforts did not go unnoticed by the leadership team, I was promoted with a title change and also selected as a [Prell Cup](https://thecontrolgroup.com/blog/company-news/q4-prell-cup-winners) winner, an award given to individuals or teams who you can create a repeatable process for success within the company.