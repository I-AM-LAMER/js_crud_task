# School Cafeterias Management System Setup

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Variables](#enviromental-variables)
4. [Project Managing](#project-managing)

## Prerequisites

This project requires Docker and Docker Compose to be installed on your system. To install them on Ubuntu, follow these steps:

1. Update package index:

`sudo apt update && sudo apt upgrade`

2. Install required packages:

To installl docker & docker compose see this page [Docker instalation](https://docs.docker.com/engine/install/ubuntu/)

To check if installation was successed, try this command at shell

`sudo service docker start && docker run hello-world`

3. Clone repository

Use this command to clone repository 

`git clone https://github.com/I-AM-LAMER/js_crud_task`

## Enviromental Variables

You need to create a .env file to work with project, use this example or create your fill your values 

```dosini
# .env.example
POSTGRES_HOST=127.0.0.1
POSTGRES_INNER_HOST=postgres  #inner host used for communication inside docker network
POSTGRES_PORT=9000 
POSTGRES_INNER_PORT=5432  #inner port used for communication inside docker network
POSTGRES_USER=test
POSTGRES_PASSWORD=test 
POSTGRES_DB=test
WEB_PORT=5000
```

## Project Managing

To build & run project go to the root of a project and type in

`docker compose up --build`

To stop project, type in

`docker compose stop`

To start again, type in

`docker compose start`

To remove project, type in

`docker compose down`

Also check [Docker Compose up, down, stop start difference](https://www.geeksforgeeks.org/docker-compose-up-down-stop-start-difference/) if you want dive deeply into docker compose set up features