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


# Server Set Up (Dockerized)

```
# inside of server directory

create a .env file with the following format:

POSTGRES_USER=*******
POSTGRES_PW=*******

docker build .
docker run -it -p 8080:500 --env-file .env <docker_image_hash>

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

Useful Articles for Project Write Up:

https://pythonspeed.com/articles/docker-connection-refused/