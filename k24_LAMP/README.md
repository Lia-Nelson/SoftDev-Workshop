# how-to :: PROVISION AND SET UP A DIGITAL OCEAN DROPLET
---
## Overview
Setting up a digital ocean droplet or virtual machine allows us to not just serve on localhost, but to actually access our flask applications from different devides

### Estimated Time Cost: 30 minutes

### Prerequisites:

- Set up a DigitalOcean account (sign up with GitHub)
- Make sure you have the GitHub Student Developer Pack Activated (this will enable the spend no money)

### Instructions

1. Navigate to the [login for digital ocean](https://cloud.digitalocean.com/projects/login)
2. Sign in with you GitHub account
3. Click on the green create button and then click droplets
4. Select Ubuntu 20.04 (LTS) x64
5. Choose the Basic plan with regular intel at $5/mo
6. Choose one of the New York datacenter regions
7. Select SSH keys for authentication
    1. If you already have an SSH key set up you may choose it
    2. If not, you may either want to copy one you have already used or create a new one
8. Select no additional options
9. Make only one droplet
10. Create a hostname portending greatness (i.e. give all of your hostnames a particular theme)
11. Unless you have a particular project in mind, allow DigitalOcean to assign your droplet to the default project
12. Press create Droplet
13. Open up a bash terminal
14. Run `$ ssh root@ip-address` in order to access your droplet
    1. You can find the ip address when logged into DigitalOcean
        1. Click on the project that contains your droplet
        1. Find your droplet
        2. Copy the numbers that appear to the right of your hostname
15. Run `$ apt update` and `$ apt install apache2`
16. Run `$ ufw app list` and check to see that apache has been installed
17. Run `$ apt install sqlite3`
18. Run `$ apt install python3`

#### Removing Root Access

1. Open up a bash terminal
2. SSH into your droplet using `$ ssh root@your_server_ip_address`
3. Run `$ adduser name` to create a new user
4. Run `$ usermod -aG sudo name` to give the new user sudo perms
5. Run `$ su name` to switch user to name
6. Run `$ sudo ls -la /root` to test sudo perms
7. Press Ch-D to get back to the root
8. Run `$ nano /etc/ssh/sshd_config` and change PasswordAuthentication to yes
9. Run `$ sudo service sshd reload` to make sure changes are applied
10. Press CH-D exit your droplet
11. Run `$ ssh-copy-id username@your_server_ip_address`
    1. This command will require password authentication
    2. Once the keys are copied, you should be able to SSH into your new username
13. SSH into your new user by running `$ ssh username@your_server_ip_address`
14. Run `$ sudo nano /etc/ssh/sshd_config` and change PermitRootLogin to no and PubkeyAuthentication yes
    1. Password authentication is necessary for the command to be run successfully
    1. This prevents SSHing directly to the root and allows sudo privileges to be assumed without password authentication
14. Run `$ sudo nano /etc/ssh/sshd_config` and change PasswordAuthentication to no
    2. If you are prompted for a password when trying to execute this step, make sure the previous step has been executed before continuing
    1. This will help keep the droplet more secure
15. Run `$ sudo service sshd reload` to make sure changes are applied

### Resources
* [DigitalOcean Droplets Page](https://www.digitalocean.com/products/droplets/)
* [Sign up for the GitHub student developer pack](https://education.github.com/discount_requests/student_application)
* [How to create a new super user](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-18-04-quickstart)
* [How to set up ssh keys](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04#step-2-%E2%80%94-copying-the-public-key-to-your-ubuntu-server)
* [How to install and use sqlite](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-sqlite-on-ubuntu-20-04)
* [Piazza post I found many resources on](https://piazza.com/class/kv0wqn7faux3ye?cid=137)
* [Piazza post I followed when removing root access](https://piazza.com/class/kv0wqn7faux3ye?cid=140)

---

Accurate as of (last update): 2021-01-17

#### Contributors:  
Julia Nelson, pd1  
Lucas Tom-Wong, pd1  
