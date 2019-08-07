# CUTFINDER
---
### Initial Setup
---
CutFinder is a project written in react-native. In order to properly set up this project, please take look at [Facebook's tutorial](https://facebook.github.io/react-native/docs/getting-started) to install all proper dependencies. Once all proper dependencies are installed, the following commands must be ran (*$bash*) -

>expo init cut-finder

Choose a `blank` project for the template and in the name enter in `cut-finder` in the next prompt. Now you should have a basic an empty react-native project called cut-finder. The next step is to add the remote url for git -

>git remote add origin https://github.com/lirianom/cut-finder.git

Now with the git url properly configured you should be able to push and pull from any branch in the repository. Now you must merge the current branch master branch in git with your local changes (*this will overwrite your local conflicting files*). First stage all the changes in the git repository -

>git fetch --all

Now we need to reset all of the changes in the master branch -

>git reset --hard origin/master

Once this is done you should have all of the changes stored in your local machine and all the branches up to date. Now you can start running your npm project -

>npm start

Now you you can use your phone to snap a pic of the QR code that should pop up and the application should start getting built on your phone.