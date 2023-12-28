#!/bin/sh

# Set the search query and media type parameters
QUERY=apollo 11
MEDIA_TYPE=image

# Send the curl request and store the response in a variable
RESPONSE=$(curl "https://images-api.nasa.gov/search?q=$QUERY&media_type=$MEDIA_TYPE" > "example.json") 

# Print the response to the console
echo "$RESPONSE"