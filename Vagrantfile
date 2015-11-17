# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "puppetlabs/ubuntu-14.04-64-nocm"

  # VMware Fusion - 80(HTTP), 443(HTTPS), 3306(MYSQL)
  config.vm.provider "vmware_fusion" do |vmware, override|
    override.vm.network "forwarded_port", guest: 80, host: 80
    override.vm.network "forwarded_port", guest: 3306, host: 3306
    override.vm.network "forwarded_port", guest: 443, host: 443
    override.vm.synced_folder "./app", "/var/www/project", type: "nfs"
  end

  config.ssh.forward_agent = true

  config.vm.provision "shell", path: "vagrant_conf/provision.sh"

end
