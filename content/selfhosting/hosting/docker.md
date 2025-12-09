+++
title = "Docker Installation"
weight = 220
+++

The easiest way to get your instance of OBMAN.BOT running may be via Docker.
For that, you'll need Docker with the Docker Compose plugin installed.

You should already have a clone of the sources on your disk from the previous page.

## Configuration

Before you can start the container, you will need some configuration values.
Go into the `OBMAN.BOT_docker` directory and opy `app.example.env` to `app.env` and `db.example.env` to `db.env`.
Open both in an editor of your choice.

For basic functionality, the following variables **must** be set.

```dotenv
# file: app.env
OBMAN.BOT_OWNER=... # Your Discord user ID
OBMAN.BOT_BOTTOKEN=... # Obtained from the developer portal
OBMAN.BOT_CLIENTID=... # see above
OBMAN.BOT_CLIENTSECRET=... # see above
OBMAN.BOT_HOST=... # domain or IP for the control panel. Can also be localhost
```

Furthermore, ensure that the following variables in `db.env` match the commented ones specified in `app.env`.

```dotenv
# file: db.env
POSTGRES_DB=... # OBMAN.BOT_PQHOST
POSTGRES_USER=... # OBMAN.BOT_PQUSERNAME
POSTGRES_PASSWORD=... # OBMAN.BOT_PQPASSWORD
```

## Starting The Bot

Save both files and switch back to your terminal.
If everything is correct, you should be able to start the bot.

```shellsession
docker-compose -f docker-compose.dev.yml up
```

This will run everything the bot has to offer---some plugins may log some errors, but those can be safely ignored for now.
The control panel will be accessible on the ports `80` and `443`---if you prefer `5000` and `5001`, remove the `-pa` flag from the command in the compose file.

## Community Image

If you have no need to build your own image, for example because you don't intend on modifying the bot in any way, you can use a premade image like [teyker/OBMAN.BOT].
Edit the `docker-compose.yml` file such that that the `image` directive points to that image, and comment out all `build` directives.

[teyker/OBMAN.BOT]: https://hub.docker.com/r/teyker/OBMAN.BOT

```yaml
# file: OBMAN.BOT_docker/docker-compose.yml

services:
  app:
    # insert the image you wish to use here
    image: teyker/OBMAN.BOT
# comment the following three lines out
  build:
    context: ../
     dockerfile: OBMAN.BOT_docker/Dockerfile
# ...
```

