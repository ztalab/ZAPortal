# Contribution Guidelines

Thank you for your interest in Ztalab!

This project welcomes contributions and suggestions. Most contributions require you to signoff on your commits via 
the Developer Certificate of Origin (DCO). When you submit a pull request, a DCO-bot will automatically determine 
whether you need to provide signoff for your commit. Please follow the instructions provided by DCO-bot, as pull 
requests cannot be merged until the author(s) have provided signoff to fulfill the DCO requirement.
You may find more information on the DCO requirements [below](#developer-certificate-of-origin-signing-your-work).

This project has adopted the [Contributor Covenant Code of Conduct](https://github.com/ztalab/.github/blob/main/CODE-OF-CONDUCT.md).

Contributions come in many forms: submitting issues, writing code, participating in discussions and community calls.

This document provides the guidelines for how to contribute to the Ztalab project.

## Issues

This section describes the guidelines for submitting issues

### Issue Types

There are 4 types of issues:

- Issue/Bug: You've found a bug with the code, and want to report it, or create an issue to track the bug.
- Issue/Discussion: You have something on your mind, which requires input form others in a discussion, before it eventually manifests as a proposal.
- Issue/Proposal: Used for items that propose a new idea or functionality. This allows feedback from others before code is written.
- Issue/Question: Use this issue type, if you need help or have a question.

## Contributing to Ztalab

This section describes the guidelines for contributing code / docs to Ztalab.

### Pull Requests

All contributions come through pull requests. To submit a proposed change, we recommend following this workflow:

1. Make sure there's an issue (bug or proposal) raised, which sets the expectations for the contribution you are about to make.
1. Fork the relevant repo and create a new branch
1. Create your change
    - Code changes require tests
1. Update relevant documentation for the change
1. Commit with [DCO sign-off](#developer-certificate-of-origin-signing-your-work) and open a PR
1. Wait for the CI process to finish and make sure all checks are green
1. A maintainer of the project will be assigned, and you can expect a review within a few days

#### Use work-in-progress PRs for early feedback

A good way to communicate before investing too much time is to create a "Work-in-progress" PR and share it with your reviewers. The standard way of doing this is to add a "[WIP]" prefix in your PR's title and assign the **do-not-merge** label. This will let people looking at your PR know that it is not well baked yet.

### Developer Certificate of Origin: Signing your work

#### Every commit needs to be signed

The Developer Certificate of Origin (DCO) is a lightweight way for contributors to certify that they wrote or otherwise have the right to submit the code they are contributing to the project. Here is the full text of the [DCO](https://developercertificate.org/), reformatted for readability:
```
By making a contribution to this project, I certify that:

    (a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or

    (b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or

    (c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.

    (d) I understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.
```

Contributors sign-off that they adhere to these requirements by adding a `Signed-off-by` line to commit messages.

```
This is my commit message

Signed-off-by: Random J Developer <random@developer.example.org>
```
Git even has a `-s` command line option to append this automatically to your commit message:
```
$ git commit -s -m 'This is my commit message'
```

Each Pull Request is checked  whether or not commits in a Pull Request do contain a valid Signed-off-by line.

#### I didn't sign my commit, now what?!

No worries - You can easily replay your changes, sign them and force push them!

```
git checkout <branch-name>
git commit --amend --no-edit --signoff
git push --force-with-lease <remote-name> <branch-name>
```

### Use of Third-party code

- Third-party code must include licenses.

**Thank You!** - Your contributions to open source, large or small, make projects like this possible. Thank you for taking the time to contribute.

## Code of Conduct

This project has adopted the [Contributor Covenant Code of Conduct](https://github.com/ztalab/.github/blob/main/CODE-OF-CONDUCT.md)

---

# ZAPortal Guidelines

## 📦 Key Technical Skills

- [vue2](https://v2.vuejs.org/)
- [vuetify](https://vuetifyjs.com/)
- [vuex](https://vuex.vuejs.org/)
- [vue router](https://router.vuejs.org/)

## 📁 Directories

Some common usage of directories(files):

```shell
├── src
│   ├── App.vue
│   ├── api           # backend api request
│   ├── assets        # images assets
│   ├── components    # project scope components
│   ├── main.js       # the main process of APP, Vue instance global prototype, gloabl scss
│   ├── permission.js # login and auth logic, also include global top progress loading bar
│   ├── plugins       # vuetify plugin configurations
│   ├── router        # router defination
│   ├── store         # vuex
│   ├── styles 
│   │   ├── index.scss     # global css
│   │   └── variables.scss # override vuetify scss variables
│   ├── utils         # global helper functions
│   │   ├── event-bus.js      # eventbus
│   │   ├── request-helper.js # request interceptor
│   │   └── request.js        # wrapper of axios
│   └── views         # pages
├── tests
└── vue.config.js
```

## 💻 Quick Start

```bash
npm install
npm run serve
```

It servers on `http://localhost:8080` by default.

## 🎁 Read More

### Global message box

When error occurs, we want to alert a global message. You can do it simply by `EventBus`

```js
import { EventBus } from '@/utils/event-bus'

EventBus.$emit('app.message', 'Need login', 'warning')
```

### Global Backend API request handler

If the request does not reponse with `200` status code, the global error message will be trigger.

We handle the global response with axios interceptor, you can find more in file `src/utils/request-helper.js`.

```js
service.interceptors.response.use(
  error => {
    const statusCode = error.response.status
    
    if (statusCode === 401 && ['/login', '/'].includes(window.location.pathname)) { // ignore error message
      return Promise.reject(error)
    }

    EventBus.$emit('app.message', `[${statusCode}] ${error.message}`, 'error')
    return Promise.reject(error)
    
  }
)
```


### EventBus

| name            | description       |
|-                |-                  |
| `app.message`   | global message box|
| `app.loading`   | top page loading bar |


## Mock

Now you can use mock API to develop, which has been set as the default development API in `.env.development`.

```dotenv
VUE_APP_BASE_URL="https://531f6a00-a189-4209-a65c-f95e10e121cb.mock.pstmn.io/api/v1"
```
And if you have your own backend api, you can use environment variable to override mock api, eg:

```bash
export VUE_APP_BASE_URL=http://YOURHOST/api/v1 && npm run serve 
```
