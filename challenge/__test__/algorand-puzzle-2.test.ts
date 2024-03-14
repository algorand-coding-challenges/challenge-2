import { describe, test, expect, beforeAll, beforeEach } from '@jest/globals';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { AlgorandPuzzle2Client } from '../contracts/clients/AlgorandPuzzle2Client';

const fixture = algorandFixture();

let appClient: AlgorandPuzzle2Client;

describe('AlgorandPuzzle2', () => {
   beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    // console.log('Before', fixture.beforeEach);
    await fixture.beforeEach();
    console.log('After');
    const { algod, testAccount } = fixture.context;
    console.log({ algod, testAccount });
    appClient = new AlgorandPuzzle2Client(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod
    );

    await appClient.create.createApplication({});
  });

  test('solveThePuzzle', async () => {
    const result = await appClient.solveThePuzzle({});
    console.log(result.return);
    expect(result.return).toBe('You solved the puzzle!');
  });
});
