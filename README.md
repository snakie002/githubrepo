## Prerequisites

- AWS CLI
- NodeJS 18+

## Getting started

1. Clone media folder from s3 to your PC

```sh
cd your-media-folder
aws s3 sync s3://snakie002-blog-media ./
```

2. Clone this repo

```sh
git clone git@github.com:snakie002/snakie002-blog-11ty.git
cd snakie002-blog-11ty
```

3. Create file `.env` and update the variable

```sh
cp .env.example .env
```

update `<YOUR-MEDIA-PATH>` value in `MEDIA_DIR` to the root path of your media folder created in step 1

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
cd your-media-folder
aws s3 sync ./ s3://snakie002-blog-media
```
