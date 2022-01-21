from flask import Flask
from flask import request
from flask import render_template
from flask import redirect
from flask import session

app=Flask(__name__,static_folder="public",static_url_path="/")
app.secret_key="week_4_assignment"

@app.route("/")
def index():
    session["status"]=""
    return render_template("index.html")

@app.route("/signin",methods=["POST"])
def signin():
    userName=request.form["name"]
    userPassword=request.form["password"]
    if userName == "test" and userPassword == "test":
        session["status"]="已登入"
        return redirect("/member/")
    elif userName == "" or userPassword == "":
        return redirect("/error/?message=請輸入帳號、密碼")
    else:
        return redirect("/error/?message=帳號或密碼輸入錯誤")

@app.route("/member/")
def member():
    if session["status"]=="已登入":
        return render_template("member.html")
    else:
        return redirect("/")

@app.route("/error/",methods=["GET"])
def error():
    reply = request.args.get("message")
    return render_template(
        "error.html",
        alert = reply
    )

@app.route("/signout",methods=["GET"])
def signout():
    session["status"]="未登入"
    return redirect("/")
    
app.run(port=3000)