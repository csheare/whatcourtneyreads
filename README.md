# whatcourtneyreads

* Coming soon a tracking board for all my books  Woot Woot! * 

* Python >=3.6
* Node >=12
* npm >=6

# Client Set up

```
# inside of client directory

npm install
```


# Server Set Up

```
# inside of server directory

python -m venv .venv
source venv/bin/activate
# BUT I HAVE THIS MY MY BASH RC BABY
pip install -r requirements.txt

```

# Get that Database going girl?

```
Its dangerous to go alone, take this!
export DATABASE_URL="postgresql:///whatcourtneyreads"
export APP_SETTINGS="config.DevelopmentConfig"
``` 



# Running the app 

```sh
$ cd server
$ source venv/bin/activate
$ FLASK_APP=server.py 
$ FLASK_ENV=development 
$ flask run

# In another terminal tab
$ cd client
$ npm start
```
