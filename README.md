# Connect Pro

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
This is balabl abla that does x y z

## Meta

#### Contributors
* **[Yann Mulonda](https://github.com/YannMjl) - yann.mulonda@okademyusa.com**
* **[Micheal Neis](https://github.com/michael-neis) - michael.neis12@gmail.com**

## How to Contribute

This project has 3 branch: Dev, Test and **main** 
and each branch operate as an environment.

**Changes should be made on a dev branch branch only then merged to test and after completing all test and validation then merge to main (PR review and approval) for prod enviorment**

* Setup SSH connect to clone repo

More info on [how to set up SSH from Source Code management to Local machine](https://medium.com/p/d805bb2ed28b)

* Cloning Repo

For Windowns → Go to “Git Bash”, Right-click and “Run as Administrator”.<br> 
For Mac and Linux → Go to the terminal.<br>
Run the following commands to clone and create your feature branch:

```bash
git clone https://gitlab.com/mulambom15/connectpro.git
cd connectpro
git checkout dev
```

> Make sure your feature branch name following the naming standard above. This is used for automated testing and [validation in CI with GitHub Actions](https://github.com/michael-neis/mem_match/actions/).

After making the necessary code changes, submited a pull request from your feature branch to test and main branch for review and approval before shipping the new changes to CD pipeline.
