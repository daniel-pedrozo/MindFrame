# MindFrame

This project is based on [OpenSaas](https://opensaas.sh) template and consists of two main dirs:
1. `app` - Your web app, built with [Wasp](https://wasp.sh).
2. `e2e-tests` - [Playwright](https://playwright.dev/) tests for your Wasp web app.

For more details, check READMEs of each respective directory!

## Steps to install and run

Dowload the wasp.sh:
```bash
curl -sSL https://get.wasp.sh/installer.sh | sh
```

Verify that Wasp was installed correctly:
```bash
wasp version
```

### Setting up the project

Enter in the app directory:
```bash
cd app
```

Then run:
```bash
wasp start db
```
This command will start the postegres database.
After running, open another terminal window! Let it running...


For running the first migration on the project we run:
```bash
wasp db migrate-dev
```
We will run this command every time we change the prisma schema


If you want to see or manage the db run:
```bash
wasp db studio
```

To run the app use:
```bash
wasp start
```
This will atomaticly run the stuff to run th project.
IF it not send you to the local host page open...
`http://localhost:3000` in your browser.

### Aditional info

 - The database is running in one terminal session, likely on port `5432`.
 - your app running in another terminal session, the client likely on port `3000`, and the server likely on port `3001`.
