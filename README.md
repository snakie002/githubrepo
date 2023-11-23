## Prerequisites

- AWS CLI
- NodeJS 18+

## Getting started

1. Clone this repo

```sh
git clone git@github.com:snakie002/snakie002-blog-11ty.git
cd snakie002-blog-11ty
```

2. Clone media folder from s3 to your PC

```sh
cd ./src/blog
aws s3 sync s3://snakie002-blog-media ./
```

3. Create file `.env` and update the variable

```sh
cp .env.example .env
```

4. Start the server

```bash
npm i
npm start
```

Now browser the website in http://localhost:8080

## Deployment

To publish the post, in the project dir, run

```sh
git add --all
git commit -m "Publish post xxx"
git push -u origin main
```

To sync the media to S3

```sh
cd ./src/
aws s3 sync ./blog s3://snakie002-blog-media --exclude '*' --include '**/post_assets/*'
```
