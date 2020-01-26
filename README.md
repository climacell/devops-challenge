![ClimaCell](https://climacell.ussl.co/wp-content/uploads/2019/03/CC-logo-base-black-w_blue-icon-300.png "ClimaCell")

# Taking a Service to Production

This devops challenge's goal is simple - build a full integration, deployment and monitoring pipeline for a service. It will allow you understand the challenges we face in ClimaCell everyday, and to demonstrate your skills.

We look at the pipline as consisting of three stages:

1. **Continuous Integration** - Any change in the repository that is pushed is automatically built as a docker container and published to a docker registry.
2. **Continuous Deployment** - Latest docker image deployed to a container platform and available to use.
3. **Continuous Monitoring** - The service health status is always available, and alert is sent when the service is not functioning. Logs are delivered and available. 

## Required solution:

The exercise is focused on the `CI` and `CD` stages.

* Create a full _Continuous Integration_ and _Continuous Deployment_ processes as defined above. 
* The outcome should include:
   * Configuration / script files as part of the repository.
   * Permissions to the repository, where we can commit changes, and see that the pipeline was triggered and new docker was uploaded to the registry.
   * URL/IP of the deployed service - so we can check it over http.
   * Access to CI tool that we can access and see the pipeline in (*OPTIONAL*).
   * Access to the deployment environment where we can see the deployed artifact (*OPTIONAL*). 
* * *__Bonus:__* Continue to _Continuous Monitoring_ process as defined above (Use the `/health` endpoint in addition to logs).

## Prerequisites

This github repository is a `NodeJS` demo app of a very small users service.
Below are the instructions of how to build, run and use this service.

### Build

   `npm install`

### Run
   
   `npm run start`

### Use

#### http://localhost:3000/users

`GET` - lists the list of existing users
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

`POST` - add a new user

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

#### http://localhost:3000/health

`GET` - report on health of the service

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


### Config

The users service works with a `MongoDB` to store its users.

   `Database name: devops-exercise`

   `Collection name: users`

### Environment Variables

   `MONGO_URI - uri of the mongo DB`

## Guidelines:

* Although this "users service" is very small and focused, we should be prepared for multi-environments (dev, staging, production, etc...) with full pipeline (including testing, linting, and more...) in the future. Make sure your solution is opened for such future changes.

* Use whichever CI/CD tool you want.
* Use `GCR` (Google Container Registry) as the docker registry and `GKE` (Google Kubernetes Engine) as the docker platform.
* Work on local github repository.
* Make sure the solution is *__private__*, not public. Only available for you and us.
* Consider using managed services. For mongo you may use `Atlas` - https://www.mongodb.com/cloud/atlas.
* For the sake of the exercise, `/health` endpoint randomly returns that the health is false.
* For simplicity, the service logs all the requests to the console.

Don't hesitate to contact us with any question.

**Good Luck!**

**The ClimaCell Team**

