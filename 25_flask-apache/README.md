# how-to :: HOW TO DEPLOY A FLASK APP ON A DROPLET
---
## Overview
Deploying a flask app on our droplet allows us to run various applications using the resources of the virtual machine

### Estimated Time Cost: 30 minutes

### Prerequisites:

- Have a droplet set up
- Make sure you can SSH into an account with sudo access
- Make sure that your droplet has all available updates

### Instructions

1. SSH into an account with sudo access on your droplet
2. Install mod_wsgi and necessary requirements by running `$ sudo apt-get install libapache2-mod-wsgi-py3 python-dev`
3. Make sure mod_wsgi is enabled by running `$ sudo a2enmod wsgi`
4. Move into the directory that will store your app by running `$ cd /var/www`
5. Create the initial directory that will store your app by running `$ sudo mkdir <AppName>`
6. Make the contents of that directory editable by running `$ sudo chown -R $USER:$USER <AppName>/` and `$ sudo chmod -R 755 <AppName>/`
7. Exit the droplet by pressing `Ch-D`
8. Navigate to the folder containing folder `<AppName>/` which contains your application
9. Secure copy it into the correct location in your droplet by running `$ scp -r <AppName>/ user@droplet.ip:/var/www/<AppName>`
10. SSH back into the account with sudo access
11. Enter the folder containing your application by running `$ cd /var/www/<AppName>/<AppName>`
12. Use a file editor to make sure that the contents of your folder have the following structure:  
| \_\_init\_\_.py  
| static/  
--| css/  
--| js/  
13. Install pip by running `$ sudo apt-get install python3-pip`
14. Install Flask by running `$ sudo pip install Flask`
15. Edit your flask app using `$ nano __init__.py` so that `app.run()` depends on the conditional `if __name__ == "__main__":`
16. Run your python file by running `$ python3 __init__.py`
17. Configure and enable virtual host (note again that all the FlaskApp -> <your_new_name>)
   ```
   sudo nano /etc/apache2/sites-available/FlaskApp.conf
   ```
   Change mywebsite.com to the IP, and FlaskApp to name of your flask app
   ```
   <VirtualHost *:80>
		ServerName mywebsite.com
		ServerAdmin admin@mywebsite.com
		WSGIScriptAlias / /var/www/FlaskApp/flaskapp.wsgi
		<Directory /var/www/FlaskApp/FlaskApp/>
			Order allow,deny
			Allow from all
		</Directory>
		Alias /static /var/www/FlaskApp/FlaskApp/static
		<Directory /var/www/FlaskApp/FlaskApp/static/>
			Order allow,deny
			Allow from all
		</Directory>
		ErrorLog ${APACHE_LOG_DIR}/error.log
		LogLevel warn
		CustomLog ${APACHE_LOG_DIR}/access.log combined
   </VirtualHost>
   ```
   Enable Virtual Host
   ```
   sudo a2ensite FlaskApp
   ```
18. Create WSGI file 
   ```
   cd /var/www/FlaskApp
   ```
   ```
   sudo nano flaskapp.wsgi 
   ```
   ```
   #!/usr/bin/python
   import sys
   import logging
   logging.basicConfig(stream=sys.stderr)
   sys.path.insert(0,"/var/www/FlaskApp/")

   from FlaskApp import app as application
   application.secret_key = 'Add your secret key'
   ```
19. Apply changes
   ```
   sudo service apache2 restart 
   ```
You should be able to access your virtual host at your ip.

### Resources
* [How to set up SSH shortcuts (to make it easier to SSH into that user with sudo perms)](https://piazza.com/class/kv0wqn7faux3ye?cid=169)
* [Commands to make sure droplets have available updates](https://piazza.com/class/kv0wqn7faux3ye?cid=167)
* [Shows how host parameter so that the site can be accessed from other machines](https://piazza.com/class/kv0wqn7faux3ye?cid=175)
* [Shares port parameter](https://piazza.com/class/kv0wqn7faux3ye?cid=183)

---

Accurate as of (last update): 2021-01-19

#### Contributors:  
Julia Nelson, pd1  
