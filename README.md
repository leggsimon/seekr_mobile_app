[![Code Climate](https://codeclimate.com/github/leggsimon/seekr_mobile_app/badges/gpa.svg)](https://codeclimate.com/github/leggsimon/seekr_mobile_app)

# Seekr

- [Team](#team)
- [Approach](#approach)
- [Technologies Used](#technologies-used)
- [Challenges](#challenges)
- [User Stories](#user-stories)
  - [MVP 1](#mvp-1)
  - [MVP 2](#mvp-2)
- [Future Features](#future-features)

## Team

- [Simon Legg](https://github.com/leggsimon)
- [Jack Hall-Tipping](https://github.com/jackhalltipping)
- [Paul Harker](https://github.com/Harxy)
- [Robert Morgan](https://github.com/kfcrobbie)

## Approach

Seekr was a 2 week final project at Makers Academy pitched to us as a 'Tinder for recruitment firms' app. After some discussion with the team, we decided that it shouldn't be 'Tinder for recruitment firms', it should be 'Tinder for recruiting'.  
The success of Tinder, whether you agree with the premise or not, is on it's ease of use for two parties to meet each other. Why shouldn't finding employment or an employee be that easy? After we decided that that was going to be our app, we needed to work out how it was going to be interacted with. We decided that a mobile app would be the best choice considering it's portability and constant availability.

We decided that the best use of this app would be for entry-level, temporary employment where there is a need to fill a role in a short amount of time.

**This repository is purely the front-end. It is designed to communicate directly with our back-end API. Which can be found [here](https://github.com/Harxy/seekr_api).**

## Technologies Used
 * [Angular.js](https://angularjs.org/)
 * [Ionic Framework](http://ionicframework.com/)
 * [Protractor Testing Framework](https://angular.github.io/protractor/#/)
 * [Google Static Maps API](https://developers.google.com/maps/documentation/static-maps/intro)

## Challenges

Time constraints were a large challenge in this project, forcing us to cut features that we would've loved to implement.

We also started with the intention of learning a completely new technology in [Swift](https://developer.apple.com/swift/), in order to make this a native application. However after 3 days of trying to get to grips with it (not to mention the time downloading Xcode!!) we recognised it was going to be too much of a challenge to implement it in this project while being able to present a usable app to our 'client' the next week. This was somewhat disappointing for us but a good learning curve for the future when selecting technologies.

## User Stories

#### MVP 1

```
When I open the app (as an employer),
I want to be able to see my list of jobs,
so that I can keep track of all the positions I am trying to fill.

When I open the app (as an employer),
I want to be able to add a new job to my job list,
so that I can find a candidate if I need a job completed.

When I open the app (as an employer),
I want to be able to click on one of my jobs,
so that I can see more information about that job.

When I open the app (as an employer),
I want to be able to click on a job,
so that I can see all job-seekers for the position.
```

#### MVP 2

```
When I visit the homepage,
I want to sign up as an employer,
so I can view job-seekers.

When I visit the homepage,
I want to sign up as an job-seeker,
so that I can begin to get job offers.

When signed in as an employer,
I want to swipe left or right on job-seekers,
so that I can find the best candidate.

When signed in as an employer,
I want to delete or edit a job of mine,
to adjust the job as need be.

When signed in as an employer,
I want to be able to discard job-seekers I do not feel are right for the job,
so that I do not have to see them again for that job when swiping.

When signed in as an employer,
I want to be able to save a job-seeker for later,
so that I do not have to discard or hire right away.

When signed in as an employer,
I want to be able to give out 3 offers for one job,
so that I can get that job filled quickly.

When signed in as an employer,
I want to be able to endorse a job-seeker that has worked for me,
so that I can tell other employers if he did a good job.

When signed in as a job-seeker,
I want to be able to add skills I have,
so that employers can see what I am good at.

When signed in as a job-seeker,
I want to get a notification if I have been offered a job,
so that I can make some money.

When signed in as a job-seeker,
I want to be able to see more information about a job I am offered,
so I can decide to accept or decline.

When signed in as a job-seeker,
I want to be able to be endorsed by a company I have worked for,
so that future employers can see my skills.
```

## Future Features

  * Being able to endorse employees for the work the had done for you, similar to LinkedIn endorsements
  * Add location data for employees showing distance from the job.
