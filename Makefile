build:
	docker-compose -f ./docker/docker-compose.yml down
	docker-compose -f ./docker/docker-compose.yml up --build
up:
	docker-compose -f ./docker/docker-compose.yml down
	docker-compose -f ./docker/docker-compose.yml up
down:
	docker-compose -f ./docker/docker-compose.yml down

.PHONY: build