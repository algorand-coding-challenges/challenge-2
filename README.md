# 🎮 Algorand Coding Challenge: Fix The Bug 🐞!

## 🚩 Challenge 2: Why Isn't the Code Running?! 😡

> I cloned this Algorand project but the code doesn't run! What is going on??? 

This project was created with the TEALScript AlgoKit template and inside of `contracts/algorand-puzzle-2.algo.ts` file, there is a simple smart contract with one method that simply returns a string value when called. The application client used to deploy/call the smart contract is already generated inside of `contracts/clients/AlgorandPuzzle2Client.ts` and the test defined in `__test__/algorand-puzzle-2.test.ts` is accurately written.

In short, all of the code inside of this project is correct, so unlike the name of this campaign "Fix The Bug", there is no need to change the codebase to solve this problem.

However, if you try and run the test file with `npm run test` after cloning this repo, the test will fail and give this error: 
`sh: tealscript: command not found`. 

**Find out what is wrong and Fix the problem.**

> 💬 Meet other hackers working on this challenge and get help in the [AlgoKit Discord Channel](https://discord.com/channels/491256308461207573/1065320801970180168)!

## Checkpoint 1: 🧰 Prerequisites 

1. [Install AlgoKit](https://github.com/algorandfoundation/algokit-cli/tree/main?tab=readme-ov-file#install).
2. Install [Docker](https://www.docker.com/products/docker-desktop/). It is used to run a local Algorand network for development.
3. Install [Node.JS / npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 

**Make sure to install these 3 prerequisites before continuing!**

## Checkpoint 2: 💻 Set up your development environment 

1. [Fork this repository.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
2. Clone the repository
```bash
cd [DIRECTORY_OF_YOUR_CHOICE]
git clone [FORKED_REPO_URL]
```
3. Open the cloned repository with the code editor of your choosing.

Video walkthrough of forking and cloning this repository:

https://github.com/algorand-fix-the-bug-campaign/challenge-1/assets/52557585/acde8053-a8dd-4f53-8bad-45de1068bfda

Now you are ready to fix the bug!

## Checkpoint 3: 🐞 Fix the bug 🧐

1. Open Docker Desktop and launch Algorand localnet by running `algokit localnet start` in your terminal [For more info click me!](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/localnet.md#creating--starting-the-localnet). 
2. Go to `contracts/algorand-puzzle-2.algo.ts` and uncomment line 8.
3. Make sure you are inside the `challenge` directory and run `npm run test` in your terminal to run the `__test__/algorand-puzzle-2.test.ts` file and see the error message.
4. Find out what is wrong and fix the bug!
6. Run `npm run test` inside of `challenge` directory
If all of the test cases pass, you solved the problem! Congratulations 😆

**😰 Are you struggling?**
Here is a hint for you: https://developer.algorand.org/docs/get-details/algokit/features/bootstrap/

## Checkpoint 4: 💯 Submit your answer 

1. After fixing the bug, push your code to your forked Github repo and [make a PR to the original repo.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) 
2. Inside the PR include:
   1. What was the problem?
   2. How did you solve the problem?
   3. Screenshot of your terminal showing the test cases passing. <img width="558" alt="image" src="https://github.com/algorand-devrel/fix-the-bug-private/assets/52557585/3017375c-f85a-42f1-b6e5-262b4560f96d">

## Checkpoint 5: 🏆 Claim your certificate of completion NFT! 🎓

The Algorand Developer Relations team will review the submission and "approve" the PR by labeling it `Approved`. Once it's approved, we will share the magic link to claim your certificate of completion NFT in the comment of the PR!

> The certificate of completion NFT is a verifiable credential minted on the [GoPlausible platform](https://goplausible.com/) that follows the W3C standard for certificates and OpenBadges standard for badges. 

🎉 Congratulations on completing the challenge Algodev! Now on to the next one 💪

## AlgoKit TEALScript Template Information

### Setup dev environment

`npm install` will add all the needed nodejs modules for this project.

### Build Contract

`npm run build` will compile the contract to TEAL and generate an ABI and appspec JSON in [./contracts/artifacts](./contracts/artifacts/) and a algokit TypeScript client in [./contracts/clients](./contracts/clients/).

`npm run compile-contract` or `npm run generate-client` can be used to compile the contract or generate the contract separately.

### Run Tests

`npm run test` will execute the tests defined in [./\_\_test\_\_](./__test__) 

### Lint

`npm run lint` will lint the contracts and tests with ESLint.
