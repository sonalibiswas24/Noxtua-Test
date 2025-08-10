#!/bin/bash
npm start &
sleep 10
curl -f http://localhost:3000 || exit 1 