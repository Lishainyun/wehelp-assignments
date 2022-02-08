from pickle import TRUE
from tabnanny import check
from flask import Flask
from flask import request
from flask import render_template
from flask import redirect
from flask import session
import mysql.connector


app=Flask(__name__,static_folder="public",static_url_path="/")
app.secret_key="week_6_assignment"

myDatabase = mysql.connector.connect(

    host="localhost",
    user="root",
    password="Skflo189mxLEO9k$918*^ks",
    database="website"

)

myDatabaseCursor = myDatabase.cursor()



@app.route("/")
def index():

    return render_template("index.html")

@app.route("/signup",methods=["POST"])
def signup():

    name = request.form["name"] 
    userName = request.form["username"]
    userPassword = request.form["password"]
    myDatabaseCursor.execute("SELECT username FROM member")
    getUserName = []

    for x in myDatabaseCursor:
        getUserName.append(x[0])
    
    myDatabase.commit()

    if name=="" or userName=="" or userPassword=="":
        return redirect("/error/?message=請輸入完整資訊")
    elif userName in getUserName:
        return redirect("/signupfail/?message=帳號已經被註冊")
    else:
        insert = "INSERT INTO member (name, username, password) VALUES (%s, %s, %s)"
        values = (name, userName, userPassword)
        myDatabaseCursor.execute(insert, values)
        myDatabase.commit()
        return redirect("/signupsuccess/?message=恭喜您註冊成功")
            
@app.route("/signupfail/",methods=["GET"])
def signUpFail():

    warning = request.args.get("message")
    return render_template(
        "fail.html",
        failWarning = warning

    )

@app.route("/signupsuccess/",methods=["GET"])
def signUpSuccess():

    greeting = request.args.get("message")
    return render_template(
        "success.html",
        successGreeting = greeting

    )
    

@app.route("/signin",methods=["POST"])
def signin():

    username = request.form["signInUsername"]
    password = request.form["signInPassword"]

    myDatabaseCursor.execute(
        """
            SELECT username, password 
            FROM member
            WHERE username = '{}' AND password = '{}' 
        """.format(username, password)
    )
    
    checkExist = []
    for x in myDatabaseCursor:
        checkExist.append(x)

    myDatabase.commit()

    if checkExist:
        session["status"]="logged"
        session["user_name"]=username
        return redirect("/member")
    else:
        return redirect("/error/?message=帳號或密碼輸入錯誤")

    

@app.route("/member")
def member():

    if session["status"]=="logged":
        greet = session["user_name"]
        return render_template(

            "member.html",
            memberGreeting = greet

        )
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

    session["status"]=""
    session["username"]=""
    return redirect("/")


app.run(port=3000)