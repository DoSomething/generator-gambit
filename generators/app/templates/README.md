# <%= data.name %>
#### Gambit microservice

<%= data.description %>

# Setup
## Entire Gambit System w/ Docker
All Gambit services & required dependencies can be setup locally with docker compose. See the [gambit-services](https://github.com/DoSomething/gambit-services) repo.

## Standalone w/ Docker
In order to setup this app & required dependencies, simply

1. `git clone`
2. `docker-compose up`

### Docker setup under the hood
All apps are executed by `Foreman` to handle process management & mimic Heroku.
`Nodemon` will autoreload the server when a file changes.
The compose file defines env variables for connection details & network mapping.

## Standalone without Docker
1. Run an instance of RabbitMQ, MongoDB. Two options,
  * Install these tools locally & run them
  * Run the docker container with just backend tooling configured.
2. Edit .env with correct service URI's, most likely in for the form of service://localhost:<port>.
3. `npm start` (requires Foreman from the Heroku Toolbelt)

# Development
## Testing
Please write tests for all functionality of the service.

All tests are located under the `test/` folder. Mocha, Chai & Supertest are available for use.

Run tests with `npm test`. If your tests depend on the database or message broker being available, you'll need to follow the [Standalone without Docker](#standalone-without-docker) guide above.

When new PR's are created they automatically spin-up a review app on Heroku. Please double check your work on this as well.

## Linting
We use the DoSomething [eslint-config](https://github.com/DoSomething/eslint-config) which is based on the [Airbnb style guide](https://github.com/airbnb/javascript).

If you add new root level folders containing application logic, please add the folder in the `package.json` lint script.

You can lint all files with `npm run lint`.

# Heroku Setup
All instances of this service live in a dedicated Heroku pipeline. The pipeline is configured to host review apps, staging application & production application.

## Deployments
When code is merged into master, a deployment to staging is automatically triggered. When ready to promote to production, you can promote the slug from the staging app to production. You can read more on promoting [here](https://devcenter.heroku.com/articles/pipelines#promoting).

## Managed resources

### MongoDB
All Gambit apps have a dedicated MongoDB deployment attached to the repo as a Heroku addon. These deployments are configured to run automatic backups into S3. In addition they automatically set the `MONGODB_URI` env variable.

### Rabbit
All Gambit apps attach to a managed CloudAMQP staging or production deployment. You can read more about how that works [here](https://devcenter.heroku.com/articles/add-ons#sharing-an-add-on-between-apps).
