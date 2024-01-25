#To start these commands necessary to run this => /sudo make -f Makefile-aws.mak -j 1 start/
start: 1 2 3 4 5
1:
	echo "Remove all containers from ec2"
	sudo docker-compose -f docker-compose-aws-prod.yml down
2:
	echo "Remove the image server of project from ec2"
	sudo docker rmi kondrashev/nginx_server:latest
3:
	echo "Remove the image client of project from ec2"
	sudo docker rmi kondrashev/nginx_client:latest
4:
	echo "Run all containers from ec2"
	sudo docker-compose -f docker-compose-aws-prod.yml up -d
5:
	echo "Check status all containers all from ec2"
	sudo docker ps -a