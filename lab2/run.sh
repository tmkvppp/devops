#!/bin/bash

docker rm -f single-container multi-container 2>/dev/null

#single-stage image
docker build -t single -f Dockerfile .
#multi-stage image
docker build -t multi -f Dockerfile.multi .

docker run -d --name single-container -p 8000:8000 single
docker run -d --name multi-container -p 8001:8000 multi
