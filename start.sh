#!/bin/bash
while true; do
  ./Update.sh
  node main.js
  if [ $? -eq 0 ]; then
    break
  fi
  echo "Restarting in 3 seconds..."
  sleep 3
done