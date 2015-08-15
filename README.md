# Seekr

* [Week plan](#week-plan)
* [Technologies](#technologies)
* [Features](#features)
  * [Jobseeker Side](#jobseeker-side)
  * [Employer Side](#employer-side)
* [User Stories](#user-stories)
  * [MVP 1](#mvp-1)
  * [MVP 2](#mvp-2)

## Week Plan

#### Day 1-3
  * Planning
  * Research
  * Trello
  * What technologies?
  * Prototype - not testing is ok, destroy it at the end
  * Cutting features

#### Day 4
  * User stories
  * Feature tests
  * Unit tests
  * Refactor
  * Git workflow
  * Deploy!

#### Day 5
  * Retrospective, finished mvp 1

#### Day 6-7
  * Weekend, individual work to get started on rest of the features, remote pairing

#### Day 8
  * Sprint kickoff, meeting to look at existing tickets

#### Day 10
  * Feature freeze

#### Day 11-12
  * Practice demos, polish off project, and practice for presentation


## Technologies
 * Rails API
 * PSQL
 * Angular
 * Ionic
 * Protractor
 * Rack test

## Features

  * Emphasis on employer side usage
  * Temp jobs
  * Low skilled
  * Focus on speed
  * Skill keywords
  * Recommendations/Endorsments form companies


#### Jobseeker side
  * Sign up as job seeker
    * Email
    * Full Name
    * Photo
    * Key skills tags - dropdown (autocomplete)
  * Endorsements (not at sign up)
  * See a list of employers that want to hire you


#### Employer side
  * Sign up as company
    * Company name, description & logo
    * Industry
    * Link to site
  * Can post a job with:
    * Job title & description
    * Start date, End date, duration
    * Location
    * Wage/hour
    * Key skills you want
  * Can endorse someone who has worked with them
  * Sees all candidates suitable for the job or people previously endorsed by them

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
