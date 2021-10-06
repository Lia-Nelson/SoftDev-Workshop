'''
Julia Nelson, Oscar Wang, Owen Yaggy
SoftDev
K10 -- Putting Little Pieces Together
2021-10-05
'''

'''
Q0:
In Java a similar syntax is used to declare an instance of a class.
(ie: Dog a = new Dog())

Q1:
The '/' character is used in the terminal to indicate a path to a 
directory. When changing directory using cd, the '/' character 
becomes useful when the user wants to change directories multiple
times with one command. Alternatively, running `cd /` takes the user
to the root directory of their computer. The '/' character is also 
used in Java to create inline comments.

Q2: 
`print(__name__)` will print the name of the file the command is
being run from into the terminal running it. In this case, it
will be 'app.py'. 
######################
After running, this did print to the terminal in the following line:
` * Serving Flask app 'app' (lazy loading)`.

Q3:
This will not appear anywhere because it is being returned from the
function as an output, but Python doesn't have anything to do with 
the output.
######################
After running, "No hablo queso!" appeared on the web server with the 
URL `http://127.0.0.1:5000/`, which was indicated by the terminal output
after running `python3 app.py` in the terminal by this line:
` * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)`

Q4: 
This looks like calling a function within a class. The class in this
case is 'Flask', which is being stored in the variable 'app' and the
function is 'run()'.
'''

from flask import Flask
app = Flask(__name__) # Q0: Where have you seen similar syntax in other langs?

@app.route("/") # Q1: What points of reference do you have for meaning of '/'?
def hello_world():
    print(__name__) # Q2: Where will this print to? Q3: What will it print?
    return "No hablo queso!"  # Q3: Will this appear anywhere? How u know?

app.run()  # Q4: Where have you seen similar construcs in other languages?
                
