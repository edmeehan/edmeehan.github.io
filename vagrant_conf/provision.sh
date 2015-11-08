#!/usr/bin/env bash

echo "install apache"
yum -y install httpd >/dev/null 2>&1

echo "install gems"
gem install sass compass bootstrap-sass >/dev/null 2>&1

echo "open port 80"
iptables -I INPUT -p tcp --dport 80 -j ACCEPT >/dev/null 2>&1
service iptables save >/dev/null 2>&1

echo "modify apache settings"
printf "# vagrant provision changes below %b\n" >> /etc/httpd/conf/httpd.conf
printf "ServerName vj.dev %b\n" >> /etc/httpd/conf/httpd.conf
printf "EnableSendfile off %b\n" >> /etc/httpd/conf/httpd.conf

echo "start apache"
/sbin/chkconfig httpd on >/dev/null 2>&1
/usr/sbin/apachectl start >/dev/null 2>&1