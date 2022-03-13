# Mostafoon Communication platform 

<div align="center">
<img src="https://github.com/MostafaAkrsh/Mostafoon-Communication-platform/blob/master/logoblack.png" width="400" >  

This project is made by following the most popular [Udemy course Build an app with ASPNET Core and Angular from scratch by Neil Cummings.](https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/)

</div> 

## Table of contents
<!--ts-->
* [Background](##Background)
* [Demo](##Demo)
* [Technologies](##Technologies)
* [Features](##Features)
<!--te-->

## Background
A simplified version of an online communication application.
  
## Demo
You can browse the website with all functionalities in this link https://mostafoon.herokuapp.com/.

## Technologies
### Front-end
#### Angular 6+ & Typescript
#### Reactive Forms & RxJS
#### Ngx-Bootstrap & Font Awesome

### Back-end
#### NET Core 5 & C#
#### Clean Code Architecture / DDD / unit of work pattern
#### RESTFul APIs
#### SQL database & EF Core
#### JWT authentication
#### Slack Notifications
#### Redis Cache
#### Swagger

## Features
   #### Identity and Role Management for user logins. Created policies so that Api end points are accessible to users with specific roles.
   #### Created route guards to protect routes specific to Admin User.
   #### Also created custom structural Directive to protect routes
   #### Persist data using Entity Framework Core.
   #### Used Repository Pattern, created generic Repository for adding another layer of abstraction over Entity Franework.
   #### Common error handling in Angular and .net core to show webapi errors on client app. Used Http Interceptors.
   #### Used AutoMapper in webapi core.
   #### Integrated 3rd party components like Alertify.js as service wrapper into the Angular application
   #### Authentication using JWT Authentication tokens for securing Webapi's.
   #### Implemented lazy loading to load related navigation properties in entity so Entity Framework core loads navigation properties when it needs them.
   #### Filtering, sorting and paging of data
   #### Drag and drop photo upload integration into a cloud platform (cloudinary)
   #### Private messaging Chat system
   #### User can like profiles of other users and can recieve likes from other users as well. Implemented Many-To-Many relationships.
   #### Global error Handling in the API and the SPA.
   #### ngx-loader to show loader on each http request and hide loader on http response.
   #### Implemeted Routing. Secured routes with CanActivate and CanDeActivate guards.
   #### Resolvers to pass data in route.
   #### Used Angular Reactive forms.
   #### Deployed to heroku
   #### HTTPS certificate applied
   #### User management and Photo management system
   #### Approve uploaded photos of users by admin
   #### Responsive design 


