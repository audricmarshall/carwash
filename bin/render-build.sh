#!/usr/bin/env bash
set -o errexit

bundle install
npm ci
bin/vite build --clear
bin/vite build --ssr
bin/rails db:migrate
bin/rails db:seed
