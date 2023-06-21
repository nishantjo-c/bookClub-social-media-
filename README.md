# To free the already running PORT
sudo lsof -i :PORT
<!-- this display only the entries related to the port provided -->
sudo kill PID
<!-- the PID of the specific port will be mentioned -->

# Running the project
<!-- If node modules are in the project delete the folder from both client and server -->
<!-- Go to client folder -->
cd client 
yarn
<!-- this will initialize the yarn with required node modules -->

<!-- similarly do the following in the server too -->
cd server
yarn


# Front-end dependencies
yarn add react-router-dom@5
<!-- version 5 of react router dom is used -->

# Back-end dependencies
yarn add nodemon
yarn add express
yarn add mongoose
yarn add cors
