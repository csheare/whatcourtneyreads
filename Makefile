# Makefile for running the client and server

VERSION = '0.0.1'

all:
	build

build:
	docker-compose up --build	

client:
	docker run -it --rm -v ${PWD}:/client -v /client/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true client:latest

server:
	docker run -it -p 5000:5000 --env-file .env server:latest