###
- This monorepo is built on rush.js - https://rushjs.io/ and with some of the libraries from rushstack - https://rushstack.io/
- Rush is designed to handle large repos and teams.
- Rush helps build and publish many packages from a common Git repo, just like a scalable monorepo manager for the web.
- This algorithm supports the PNPM, NPM, and Yarn package managers.
- Inside a Rush repo, all your projects are `automatically symlinked` to each other. When you make a change, you can see the downstream effects without publishing anything, and without any npm link headaches.
- Subset and incremental builds: If you only plan to work with a few projects from your repo, `rush rebuild --to <project>` does a clean build of just your upstream dependencies.
  After you make changes, `rush rebuild --from <project>` does a clean build of only the affected downstream projects.
- Overcome Cyclic dependencies
- Every day commands - https://rushjs.io/pages/developer/everyday_commands/
- All about adding new projects to a repo - https://rushjs.io/pages/maintainer/add_to_repo/
     - Editing rush.json is very important.
 
- Some rush plugins are available as experimental from rush.json file - https://rushjs.io/pages/maintainer/using_rush_plugins/

- The relevant monorepo project folders are:
  - apps/rush - the command line interface front end
  - libraries/rush-lib - the automation API and "engine" where all the logic is implemented
 
- Monorepo for tools developed by the Rush Stack community - https://github.com/microsoft/rushstack
  
- About heft -https://github.com/shriharisbhat/heft-app
