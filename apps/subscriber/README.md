# temperature-monitoring-pub
This project involves monitoring temperatures in two cities with the objective of developing an app capable of retrieving and processing temperature data for distinct cities with the help of a message broker(mosquitto). The data obtained must be persisted.

- Version: 1.0

## How do I get set up?
To run the subscriber, simply execute the index file (i.e., ts-node src/index.ts).

### Configuration
This app requires a database to store incoming messages. You'll need to have a Docker container running with a PostgreSQL database on port 5432. After that, set up the environment variables to establish the connection.

### Database configuration
* DB=postgres
* DB_USER=set_your_own_user
* DB_PASSWORD=set_your_own_password
* DB_HOST=localhost
* DB_PORT=5432
