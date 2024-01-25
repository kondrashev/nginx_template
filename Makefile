#To start these commands necessary to run this => /make -j 1 start/
start: 1 2 3 4 5 6 7 8 9 10
1:
	echo "Running docker-compose stop"
	docker-compose -f docker-compose-aws-dev.yml down
2:
	echo "Running docker-compose build"
	docker-compose -f docker-compose-aws-dev.yml build
3:
	echo "Docker delete image server"
	docker rmi kondrashev/nginx_server:latest
4:
	echo "Docker delete image client"
	docker rmi kondrashev/nginx_client:latest
5:
	echo "Docker authorization"
	docker login
6:
	echo "Docker rename image server"
	docker tag nginx_test-server:latest kondrashev/nginx_server
7:
	echo "Docker push image server"
	docker push kondrashev/nginx_server
8:
	echo "Docker rename image client"
	docker tag nginx_test-client:latest kondrashev/nginx_client
9:
	echo "Docker push image client"
	docker push kondrashev/nginx_client
10:
	echo "Running docker-compose start"
	docker-compose -f docker-compose-aws-dev.yml up -d
