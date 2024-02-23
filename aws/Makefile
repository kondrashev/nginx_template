#To start these commands necessary to run this => /sudo make -j 1 start/
start: 1 2 3
1:
	echo "Pull the image server of project from ec2"
	sudo docker pull kondrashev/nginx_server:latest
2:
	echo "Pull the image client of project from ec2"
	sudo docker pull kondrashev/nginx_client:latest
3:
	echo "Recreate all containers from ec2"
	sudo docker-compose up -d --build
