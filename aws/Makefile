#To start these commands necessary to run this => /sudo make -j 1 start/
start: 1 2 3 4
1:
	echo "Stop all containers from ec2"
	sudo docker-compose down
2:
	echo "Delete the image server of project from ec2"
	sudo docker rmi kondrashev/nginx_server:latest
3:
	echo "Delete the image client of project from ec2"
	sudo docker rmi kondrashev/nginx_client:latest
4:
	echo "Run all containers from ec2"
	sudo docker-compose up -d
