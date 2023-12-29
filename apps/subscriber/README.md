# temperature-monitoring-pub
Monitoring of temperate in two cities. The objective is to develop an app capable of getting and processing temperature data for 2 distinct cities. Data must be persisted.

- Version: 1.0

## How do I get set up?
To run the subscriber, all you need to do is to run the index file (i.e. ts-node src/index.ts)

### Configuration
This app needs a database to save the incoming messages, and for that you'll need to have a Docker container running with a Postgres database on port 5432. After that, you need to set up the environment variables that will allow you to establish the connection.

### Dependencies

List any dependencies required to run the project.

### Database configuration
* DB=postgres
* DB_USER=set_your_own_user
* DB_PASSWORD=set_your_own_password
* DB_HOST=localhost
* DB_PORT=5432
