'''
Julia Nelson, Oscar Wang, Owen Yaggy
SoftDev
K10 -- Putting Little Pieces Together
2021-10-05
'''
# after running it gives a debugger pin
# this is what it says: 
# debug mode applies changes to the website after running
# no debug means restarting the web server every time something changes 
''' 
* Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 418-689-520
 '''

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"

app.debug = True
app.run()
