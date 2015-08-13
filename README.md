# Tinder for Temp Recruiting (name TBC)

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
  * Waffle
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
  * Retrospective

#### Day 6-7
  * Weekend, work if you want to?

#### Day 8
  * Sprint kickoff, meeting to look at existing tickets

#### Day 10
  * Feature freeze

#### Day 11-12
  * Practice demos


## Technologies
 * Rails API
 * PSQL
 * Angular
 * Ionic
 * Protractor
 * Airborne

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
When I access the app,
I want to view all job-seekers,
so I can see available job-seekers for my position.

When viewing the job-seekers,
I want to swipe left or right,
so I can view multiple job seekers.
```

#### MVP 2

```
When I visit the homepage,
I want to sign up as an employer,
so I can view job-seekers.

When I sign up,
I want to add information about my company,
so that job-seekers know what we do.

When I'm signed in,
I want to view job-seekers looking for work,
so that I can pick a suitable candidate to employee.

When I'm viewing job-seekers,
I want to be able to dismiss a job-seeker I have no interest in,
to narrow down to only the suitable candidates.

When I'm viewing job-seekers,
I want to be able to accept a job-seeker,
so that we can begin communicating about a position.
```
