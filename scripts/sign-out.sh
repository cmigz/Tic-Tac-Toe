#!/bin/bash

# curl "http://httpbin.org/delete?id=$ID" \
curl "http://localhost:4741/sign-out/$ID" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

# data output from curl doesn't have a trailing newline
echo
