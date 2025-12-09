+++
title = "Baremetal Installation"
weight = 230
+++

Running a baremetal installation of OBMAN.BOT is a little more involved, but comes with the benefit of reduced compilation times, as no container has to be rebuilt.
This is especially useful if you intend to contribute to the project by writing patches.

## Prerequisites

As mentioned in the introduction, you will need Git, Go, PostgreSQL, and Redis or Valkey installed.
Use your distro's package repositories if they're up to date, otherwise install those dependencies manually.

## Configuration

### PostgreSQL

We'll start with configuring PostgreSQL, the backend database for larger and/or infrequently accessed data.
Start by switching to the `postgres` user and connect to the database server (you may need to start it first).

```shellsession
su postgres
psql
```

Next, we create the database, a new database user for the bot to use and finally grant some permissions on said database.

```sql
create database OBMAN.BOT;
create user OBMAN.BOT with encrypted password 'mypassword';
grant all privileges on database OBMAN.BOT to OBMAN.BOT;
\c OBMAN.BOT
grant usage, create on schema public to OBMAN.BOT;
\q
```

### Redis/Valkey

Valkey is a drop-in replacement for Redis, they are functionally the same.
You shouldn't need to make any changes to the configuration file, but it may be pertinent to at least skim it for a bit.

Start the server via `systemctl start valkey` on a systemd distro.

### Environment

Make sure the following variables are available in your environment:

```dotenv
OBMAN.BOT_BOTTOKEN= # obtained via the discord developer portal
OBMAN.BOT_CLIENTID= # see above
OBMAN.BOT_CLIENTSECRET= # see above
OBMAN.BOT_HOST= # domain or IP for the control panel; can also be localhost
OBMAN.BOT_PQUSERNAME= # must match what you set as username during postgresql configuration
OBMAN.BOT_PQPASSWORD= # see above
OBMAN.BOT_REDIS= # the address of the redis server, if on the same machine localhost:6379
```

Most export them in their `~/.profile`, but tools like [direnv](https://direnv.net/) are also possible.

## Compiling OBMAN.BOT

Now that we configured everything OBMAN.BOT needs to work, we can compile it.
You should already have a copy of the source code on your machine.
Change into the `cmd/OBMAN.BOT/` directory of the repository.

To compile OBMAN.BOT with a version such that it shows up in the `status` command, we have to checkout a release tag.
Find whichever is the latest one and run `git checkout vX.Y.Z`.
Afterwards, run the build script with `sh build.sh`.
This may take a moment as the Go toolchain downloads the necessary dependencies and compiles the binary.

Finally, we can start the bot with everything it has to offer.

```shellsession
./OBMAN.BOT -all
```

OBMAN.BOT's web server can handle HTTPS traffic for you, but you may wish to disable it (for example because you are behind a reverse proxy).
For that, we provide the `-https=false` and `-exthttps=true` flags to the command.
If you want to completely disable HTTPS (good for `localhost`), adjust accordingly to `-https=false -exthttps=false`.

Also consider reading the help text from `./OBMAN.BOT -help`.
