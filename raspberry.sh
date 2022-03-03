#!/bin/bash

rsync -av -e ssh --exclude='node_modules' $(pwd) pi@192.168.1.103:/home/pi/coding/