#!/usr/bin/env bash

echo "install apache"
	apt-get update >/dev/null 2>&1
	apt-get install -y curl apache2 git-core unzip software-properties-common >/dev/null 2>&1

echo "Installing Ruby Packages"
  apt-get install -y zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev >/dev/null 2>&1

echo "Installing RVM"
  su - vagrant -c 'gpg --keyserver hkp://keys.gnupg.net --recv-keys D39DC0E3'
  su - vagrant -c 'sudo curl -sSL https://get.rvm.io | bash -s stable >/dev/null 2>&1'
  su - vagrant -c './.rvm/scripts/rvm'
  su - vagrant -c 'echo "source ~/.rvm/scripts/rvm" >> ~/.bashrc'
  su - vagrant -c 'rvm requirements'

echo "Installing Ruby"
  su - vagrant -c 'rvm install 2.1.3 >/dev/null 2>&1'
  su - vagrant -c 'rvm use 2.1.3 --default'
  su - vagrant -c 'rvm rubygems current'

echo "install gems"
	su - vagrant -c 'gem install sass compass bootstrap-sass >/dev/null 2>&1'

echo "setup apache"
	a2enmod ssl
	cp /vagrant/vagrant_conf/apache_vhost.conf /etc/apache2/sites-available/000-default.conf
	mkdir /etc/apache2/ssl
	cp /vagrant/vagrant_conf/apache.crt /etc/apache2/ssl/apache.crt
	cp /vagrant/vagrant_conf/apache.key /etc/apache2/ssl/apache.key

	service apache2 reload