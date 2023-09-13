#!/bin/bash


if [[ -z $1 ]]; then
	echo "Main"
	curl -s http://localhost:4000/ -H "Cookie: profile=eyJ1c2VybmFtZSI6Ik5vZWwiLCJjb3VudHJ5IjoiUE5HIiwiY2l0eSI6IlBvcnQgTW9yZXNieSJ9"
elif [[ $1 == "cookie" && -s $2 ]]; then
	echo "adding cookie"
	curl -s http://localhost:4000/ -H "Cookie: profile=$2"
else
	echo "cereal"
	curl -s http://localhost:4000/cereal/$1
fi 
