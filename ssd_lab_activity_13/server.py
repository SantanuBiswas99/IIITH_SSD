from flask import (Flask, render_template, request, redirect, session)
from flask_sqlalchemy import SQLAlchemy
from flask_login import (login_manager, LoginManager, login_user, 
                            logout_user, login_required, UserMixin)

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
app.config['SECRET_KEY'] = 'secretkey'
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)

class User(UserMixin, db.Model):
    id = db.Column('id', db.Integer, primary_key = True)
    username = db.Column(db.String(80), unique=True, nullable=False)  
    name = db.Column(db.String(80))
    password = db.Column(db.String(80), nullable=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

def main():
    with app.app_context():
        db.create_all()

@app.route('/', methods=["GET"])
def hello_world():
    return render_template('register.html')

def err(msg,typ=True):
    if typ:
        return {"errorMessage": msg}
    else:
        return {"result":msg}

@app.route('/user/signup', methods=['GET', 'POST'])
def register():
    if request.method=='GET':
        return render_template('register.html')
    else:
        email = request.form.get('username')
        name = request.form.get('name')
        password = request.form.get('password')
        user = User.query.filter_by(username=email).first()
        if user:
            return err('Email address already exists')
        new_user = User(username=email, name=name, \
                        password=password)
        db.session.add(new_user)
        db.session.commit()
        return err("Registered successfully",False)

@app.route("/user/signin", methods = ["POST", "GET"])
def do_login():
    if (request.method=="POST"):
        req = request.form
        print(req)
        username = req["un"]
        password = req["pwd"]
        check_user = User.query.filter_by(username = username).first()
        if check_user is not None:
            if (check_user.password == password):
                login_user(check_user)
                return err("Logged in successfully",False)
            else:
                return err("Password is incorrect")
        else:
            return err("User does not exist")
    else:
        return render_template("login.html")
            
@app.route('/user/signout')
@login_required
def logout():
    logout_user()
    if session.get('was_once_logged_in'):
        del session['was_once_logged_in']
    return redirect('/user/signin')

if __name__ == '__main__':
    main()
    app.run(host="127.0.0.1",port="5000",debug=True)