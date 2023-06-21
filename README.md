# Requirements for running the project
1. Any package manager preferrably yarn
2. mongodb must be installed in the system
3. nodejs must be installed in the system

# Initializing the project
If node modules are in the project delete the folder from both client and server
Go to client folder
```cd client``` 
```yarn```
this will initialize the yarn with required node modules
similarly do the following in the server too
```cd server```
```yarn```

# To run the project
Three servers are required to run the project can be done by opening three terminals in the mentioned directories client(front-end) server(backend) server(database)
in client folder do the following, the following will start the frontend server i.e., the react app
```yarn start```
in server folder 
```yarn start```
this will run the express app
again in the server folder
```yarn start1```
this will run the mongodb server

# Front-end dependencies
version 5 of react router dom is used & recommended
```yarn add react-router-dom@5```

# Back-end dependencies
```yarn add nodemon```
```yarn add express```
```yarn add mongoose```
```yarn add cors```

# To free the already running PORT
this display only the entries related to the port provided
```sudo lsof -i :PORT```
the PID of the specific port will be mentioned
```sudo kill PID```
