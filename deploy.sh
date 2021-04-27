WEB_CONTAINER_NAME=back-web-picipo

git pull
docker-compose -f docker-compose.production.yml build
docker-compose -f docker-compose.production.yml stop
docker-compose -f docker-compose.production.yml up -d