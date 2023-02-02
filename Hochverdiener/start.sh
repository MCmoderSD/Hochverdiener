#!/bin/bash
while true; do
  # ./Update.sh
  dotnet Hochverdiener-3.0.dll
  # shellcheck disable=SC2181
  if [ $? -eq 0 ]; then
    break
  fi
  echo "Restarting in 3 seconds..."
  sleep 3
done