# CastcleWeb

Castcle Recruitment Exam


### Start The App with docker container

Run service as docker container is recommended.
To do this, just use makefile to simply start docker container.

   ```sh
   make
   ```

   This will run docker-compose in development mode with hot reload
   You can also specific action for each *make* command

   ```sh
   make build
   ```

   to build an image

   ```sh
   make up
   ```

   to docker-compose up with hot reload

   ```sh
   make down
   ```

   to docker-compose down the container

### Start The App with nodejs

Run service as nodejs
To do this, just use @angular/cli.

   ```sh
   ng serve --open
   ```

   Starts the application in development using `@angular/cli` to do hot reloading.

   ```sh
   ng build
   ```

   build the project. The build artifacts will be stored in the `dist/` directory.

   ```sh
   ng test
   ```

   Run unit tests to execute the unit tests via [Karma](https://karma-runner.github.io)

   ```sh
   ng e2e
   ```

   Run execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
