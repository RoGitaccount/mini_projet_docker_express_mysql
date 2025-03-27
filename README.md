# mini_projet_docker_express_mysql
Liste des commande utilisé :

-> docker network create mini-projet-network

-> docker run --name mysql_db \
  --network mini-projet-network \
  -v mysql_data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=mydatabase \
  -p 3308:3306 \
  -d mysql:latest

-> docker build -t express_app .

-> docker run --name express_app \
  --network mini-projet-network \
  --env-file .env \
  -p 8002:8002 \
  -d express_app
