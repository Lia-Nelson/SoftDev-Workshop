'''
Julia Nelson, Oscar Wang, Owen Yaggy
SoftDev
K10 -- Putting Little Pieces Together
2021-10-05
'''
# This time app.py doesn't have print(__name__) in the hello_world() function
# this probably won't print the name of the file in the terminal 

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    return "No hablo queso!"

app.run()

