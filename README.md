# HackathonAWS
Simple Full Stack with AWS deployment

It consists of two components:

- Backend: Super simple express server, it includes the deployment scripts for CodeDeploy
- Frontend: Super simple react web app, deployed as static assets to an S3 bucket

# Configuration

The project itself uses env variables, mostly for CORS and server acess

The are located at the following location:

```
frontend/.env.example
```

```
backend/.env.example
```

You will need to create an `.env` file based on the example

# Deployment to AWS

The app is meant to be deployed to AWS using the `Cloudformation` stack, this stack uses the following components:

- Route 53 (For subdomain stuff)
- Amazon Certificate Manager
- EC2
- CodeDeploy
- S3 buckets

The stack formation is separated in sub-stack to allows modularity.

## Github Actions

The current actions defined are:

- Deployment to Backend
- DEployment to Frontend
- Test and Lint

As a proof-of-Concept, a private runner was setup to avoid paying extra for cloud resources.
