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
15. Run `$ apt update` and `apt install apache2`
16. Run `ufw app list` and check to see that apache has been installed
17. Run `apt install sqlite3`
18. Run `apt install python3`

#### Removing Root Access

1. Run `adduser name` to create a new user

-> create new user
ssh root@your_server_ip_address
adduser name

give new user sudo perms
usermod -aG sudo name

switch user (switches to name)
su - name

test sudo perms
sudo ls -la /root


### Resources
* [DigitalOcean Droplets Page](https://www.digitalocean.com/products/droplets/)
* [Sign up for the GitHub student developer pack](https://education.github.com/discount_requests/student_application)
* [How to create a new super user](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-18-04-quickstart)
* [How to set up ssh keys](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04#step-2-%E2%80%94-copying-the-public-key-to-your-ubuntu-server)
* [How to install and use sqlite](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-sqlite-on-ubuntu-20-04)

---

Accurate as of (last update): 2021-01-17

#### Contributors:  
Julia Nelson, pd1  
Lucas Tom-Wong, pd1  