![ClimaCell](https://climacell.ussl.co/wp-content/uploads/2019/03/CC-logo-base-black-w_blue-icon-300.png "ClimaCell")

# DevOps Exercise
Welcome to ClimaCell!

If you have not already applied, but are interested in joining our team, please see our current job openings here: https://www.climacell.co/careers/

The purpose of this assignment is twofold: not only will it help us assess your skill-set, but it will also help you understand the type of challenges we currently work on and ask yourself if these challenges are of the kind you would be interested in.

## The Users Service

This github repository is a `node.js` demo app of a very small "users" service.
Below are the instructions of how to build, run and use this service.

### Prerequisites

#### Mongo DB
The users service works with a mongo DB to store it's users.<BR>
**Database name**: devops-exercise<BR>
**Collection name**: users

### Build

   `npm install`

#### Environment Variables

* MONGO_URI - uri of the mongo DB

### Run
   
   `npm run start`

### Use

* http://localhost:3000/users
    * GET - lists the list of existing users
        * Response:
        ```javascript
        [
            {
                "_id": "5c20ca1d2cdc846b4de1f6ab",
                "name": "u1",
                "date": 1545652765281
            },
            {
                "_id": "5c20ca81c23ea46b5089884b",
                "name": "u2",
                "date": 1545652865843
            }
        ]
        ```
    * POST - add a new user
        * Body: new user name
        ```javascript
        {
            "username":"<username>"
        }
        ```
        * Response: created user, including ID, and created date:
        ```javascript
        {
            "name": "<name>",
            "date": 1545657494671,
            "_id": "5c20dc96e4f6066bc12ab11e"
        }
        ```
* http://localhost:3000/health - endpoint to report the service health
    * GET - report on health of the service
        * Response:
            * In case all OK:
            **Status**:200
            **Headers**: System-Health:true
            * If error occurs:
            **Status**:200
            **Headers**: System-Health:false
            **Body**: Information about the error in json:
            ```javascript
            {
                "status": "DB Down"
            }
            ```

## The Exercise

Your goal is simple - build a full build, deploy and monitor pipeline. 

We can look at the pipline as consisting of three stages:

* Continuous Integration
* Continuous Deployment
* Continuous Monitoring

### CI

Any change in the repository, that is pushed, is automatically built as a docker container and published to a docker registry.

### CD

Latest docker image deployed to a container platform and available to use.

### CM

Add continuous monitoring to the service, that shows the current status, and sends alerts when the service is not functioning.
Use also the `/health` endpoint, in addition to other metrics, and logs.

## What Should You Do?
The exercise is focused on the `CI`. Please create a full CI process as defined above.

**Notice:** The outcome of the exercise must include:
* Configuration \ script files (as part of the repository) - MUST

and should include some of the following:
* CI tool that we can access and see the pipeline
* Access (or snapshot) to the docker registry that is updated per each commit
* Permissions to the repository, where we can commit changes, and see that the pipeline was triggered and new docker was uploaded to the registry
* url\ip of the deployed service - so we can check it over http

If time permits:
Continue to CD as defined above.

## Remarks

### Technologies

* Use whichever CI/CD tool you want.
* Use GCR (Google Container Registry) as the docker registry and GKE (Google Kubernetes Engine) as the docker platform.
* Work on local github repository.
* * **Note:** Make sure the solution is not opened to the public, but only to you and us.
* Consider using managed services. For mongo you may use mongo atlas - https://www.mongodb.com/cloud/atlas.

### Notices

* For the sake of the exercise, `/health` endpoint randomly returns that the health is false.
* For simplicity, the service logs all the requests to the console.

**GOOD LUCK!**

**The ClimaCell Team**
