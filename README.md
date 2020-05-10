# docker-node-ci-app
Simple dockerised hello world app using nodejs that is being build and deployed to heroku

### Local development
**docker-compose up -d**
Create and start all containers based on docker-compose.yml

**docker-compose down**
Stop and remove containers, networks, images, and volumes

**docker system prune -a**
Remove all unused containers, networks, images.

### Push code to heroku
Push and pull request to master branch will automaticaly build and deploy the code the the heroku.

#### Prerequisites
1. Create a heroku token and set it as a secret inside github under **HEROKU_API_KEY**
```sh
heroku authorizations:create
```
2. Set your **HEROKU_APP_NAME** as well inside the github secret variables

3. Enjoy !!!
