'''
Julia Nelson, Tami Takada, Gavin McGinley
Duckies: Dahlia, Silver, Craig
SoftDev
K13 -- Template for Success
2021-10-08
'''
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/occupyflaskst")
def use_tmplt():
    return render_template( 'tmplt.html', title="Occupation Decider")

if __name__ == "__main__":
    app.debug = True
    app.run()
