FROM python:3.6

RUN apt-get update

COPY . /server

WORKDIR ./server

ENV APP_SETTINGS "config.DevelopmentConfig"
ENV POSTGRES_URL "whatcourtneyreads.czmiceklckcp.us-east-2.rds.amazonaws.com:5432"
ENV POSTGRES_DB "whatcourtneyreads"

RUN pip install -r /server/requirements.txt --no-cache-dir

ENV FLASK_ENV="docker"

ENV FLASK_APP=server.py 

EXPOSE 5000

CMD ["flask", "run", "--host", "0.0.0.0", "--cert", "adhoc"]


