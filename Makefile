#To start these commands necessary to run this => /make -j 1 start/
start: 1 2 3 4 5
1:
	echo "Docker build"
	docker-compose build
2:
	echo "Docker rename image server"
	docker tag nginx_template-server:latest kondrashev/nginx_server
3:
	echo "Docker push image server"
	docker push kondrashev/nginx_server
4:
	echo "Docker rename image client"
	docker tag nginx_template-client:latest kondrashev/nginx_client
5:
	echo "Docker push image client"
	docker push kondrashev/nginx_client
