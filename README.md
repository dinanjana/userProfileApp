# userProfileApp
User profile application monorepo

This repo contains two components
1. Server
2. Web-app

## Server
Node js web server which provides user related data

## Web-app
React js web application built on top of next js

## Data layer
Mongo DB for user data/ Images are stored in AWS S3

## Deployment infra
AWS EC2/ Docker

### Note: Before running apps, make sure all the env variables are available 

### Tasks
1. Visitor will see a list of user profiles (Full name, email, profile photo)
2. Visitor can create a user profile by clicking the create profile button at the top
3. Visitor enters name, email and password to create their profile.
4. System should validate for unique email address before creating the profile.
5. Once profile is created user can login using email and password.
6. Once logged in user can upload a profile photo and edit name. Email should not be editable.
7. User should not be able to edit information of other user profiles.

### Additional
1. Cookie based authentication
