from asyncio.windows_events import NULL
from flask import Flask
from flask import request
from flask import render_template
from flask import redirect
from flask import session
from flask import jsonify
import json
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
    myDatabaseCursor.execute("SELECT username FROM member WHERE username = %s", (userName,))

    result = myDatabaseCursor.fetchall()

    if name=="" or userName=="" or userPassword=="":
        return redirect("/error/?message=請輸入完整資訊")
    elif result != []:
        return redirect("/signupfail/?message=帳號已經被註冊")
    else:
        insert = "INSERT INTO member (name, username, password) VALUES (%s, %s, %s)"
        values = (name, userName, userPassword)
        myDatabaseCursor.execute(insert, values)
        myDatabase.commit()
        return redirect("/signupsuccess/?message=恭喜您註冊成功")

@app.route("/api/members", methods=["GET"])
def membersApi():
    
    username = request.args.get("username")
    myDatabaseCursor.execute("SELECT id, name, username FROM member WHERE username = %s", (username,))
    result = myDatabaseCursor.fetchall()
    
    if result == []:
        return jsonify({"data":None})
    else:
        rowHeaders = [x[0] for x in myDatabaseCursor.description]
        rowData = [x for x in result[0]]
        data = dict(zip(rowHeaders,rowData)) 
        return jsonify({"data":data})
        

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
    myDatabaseCursor.execute("SELECT name, username, password FROM member WHERE username = %s AND password = %s", (username, password,))
    result = myDatabaseCursor.fetchall()
    

    if result != []:
        session["status"]="logged"
        session["name"]=result[0][0]
        return redirect("/member")
    else:
        return redirect("/error/?message=帳號或密碼輸入錯誤")


@app.route("/member", methods=['GET','POST'])
def member():

    if session["status"]=="logged":
        greet = session["name"]
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