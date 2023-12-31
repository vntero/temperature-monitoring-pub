# temperature-monitoring-pub
This project involves monitoring temperatures in two cities with the objective of developing an app capable of retrieving and processing temperature data for distinct cities with the help of a message broker(mosquitto). The data obtained must be persisted.

- Version: 1.0

## How do I get set up?
As this relies on the WeatherAPI's API key, you'll need one of your own. That's the only required environment variable.
Once you have the previous step figured out, to run the Publisher, all you need to do is execute the index file (i.e., ts-node src/index.ts).