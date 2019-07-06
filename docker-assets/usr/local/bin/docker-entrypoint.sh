#!/bin/sh

if [ $# -ne 0 ]; then
  exec "$@"
else
  echo "Starting httpd"
  lighttpd -f /usr/local/etc/lighthttpd/http.conf -D &
  httpd_pid="$!"
  trap "echo 'Stopping lighthttpd - pid: $httpd_pid'; kill -SIGTERM $httpd_pid" SIGINT SIGTERM

  sleep 2
  echo "ColorSplash available at: http://localhost:8080/"

  # Wait for httpd process to end.
  while kill -0 $httpd_pid >/dev/null 2>&1; do
    wait
  done

  # Exit
  echo "Exiting"
  exit
fi

