# DevOps Exercise
Welcome to ClimaCell!
We are excited to move forward and give you the homework assignment.  
The purpose of this assignment is twofold: not only will it help us assess your skill-set, but it will also help you understand the type of challenges we currently work on and ask yourself if these challenges are of the kind you would be interested in.

# The Users Service
This github repository is a demo app of a very small "users" service.
Below are the instructions of how to build, run and use this service.

## Prerequisites
### Mongo DB
The users service works with a mongo DB to store it's users.
**Database name**: devops-exercise
**Collection name**: users

## Build
`npm install`

## Environment Variable
* MONGO_URI - uri of the mongo DB

## Run
`npm run start`

# Use
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

# The Exercise
Your goal is simple - build a full pipeline.
Any change in the repository, that is pushed, is automatically build, published, deployed and available to use.

**Notices:**
* Must use GCP
* Must deploy as docker image over GKE (Google Kubernetes)
* Use whatever CI\CD tool you want
* Work on local github repository
* Consider using managed services. For mongo you may use mongo atlas - https://www.mongodb.com/cloud/atlas

# Bonus
If time permits, add continouos monitoring to the service, that shows the current status, and sends alerts when the service is not functioning.
Use also the "/health" endpoint, in addition to other metrics, and logs.
**Notice**: For the sake of the exercise, /health randomally returns that the health is false.
**Notice**: Current service logs all the requests to the console.

**GOOD LUCK!**
