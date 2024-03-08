# Algorand Fix The Bug Challenge #2

> Ensure you review the README for comprehensive instructions on how to participate in this challenge.

## Puzzle

This project was created with the TEALScript AlgoKit template and inside of `contracts/algorand-puzzle-2.algo.ts` file, there is a simple smart contract with one method that simply returns a string value when called. The application client is already generated inside of `contracts/clients/AlgorandPuzzle2Client.ts` and the test defined in `__test__/algorand-puzzle-2.test.ts` is accurately written.

In short, all of the code inside of this project is correct, so unlike the name of this campaign "Fix The Bug", there is no need to change the codebase to solve this problem.

However, if you try an run the test file with `npm run test` after cloning this repo, the test will fail and give this error: 
`sh: tealscript: command not found`. 

**Find out what is wrong and Fix the problem.**

## Prerequisites

1. First you need to [install AlgoKit](https://github.com/algorandfoundation/algokit-cli/tree/main?tab=readme-ov-file#install).
2. Install [Docker](https://www.docker.com/products/docker-desktop/). It is used to run local Algorand network for development.

## Instructions

### 1. Set up your development environment
1. [Fork this repository.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
2. Go to the directory you want to work in with your terminal and clone the forked repository
```bash
cd [DIRECTORY_OF_YOUR_CHOICE]
git clone [FORKED_REPO_URL]
```
3. Open the cloned repository with the code editor of your choosing. The below code example works only if you are using VSCode as your default editor and have the `code .` shorthand set up.
```bash
cd [CLONED_REPO]
code . 
```


Now you are ready to fix the bug!

### 2. Steps to fix the bug
1. Go to `contracts/algorand-puzzle-2.algo.ts` and uncomment line 8.
2. Fix the bug!
3. Open Docker Desktop and launch Algorand localnet with `algokit localnet start`. 
4. run `npm run test` 
If all of the test cases pass, you solved the problem! Congratulations 😆

### 3. How to Submit Your Answer

1. After solving the problem, push your code to Github and [make a PR to the original repo.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) 
2. Inside the PR include:
   1. What was the problem?
   2. How did you solve the problem?
   3. Screenshot of your terminal showing the test cases passing. <img width="558" alt="image" src="https://github.com/algorand-devrel/fix-the-bug-private/assets/52557585/3017375c-f85a-42f1-b6e5-262b4560f96d">
   4. Wallet Address to receive reward NFT.

## AlgoKit TEALScript Template Information

### Build Contract

`npm run build` will compile the contract to TEAL and generate an ABI and appspec JSON in [./contracts/artifacts](./contracts/artifacts/) and a algokit TypeScript client in [./contracts/clients](./contracts/clients/).

`npm run compile-contract` or `npm run generate-client` can be used to compile the contract or generate the contract seperately.

### Run Tests

`npm run test` will execute the tests defined in [./\_\_test\_\_](./__test__) 

### Lint

`npm run lint` will lint the contracts and tests with ESLint.
