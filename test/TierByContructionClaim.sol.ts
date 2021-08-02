import chai from "chai";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import type { ReadWriteTier } from "../typechain/ReadWriteTier";
import type { TierByConstructionClaim } from "../typechain/TierByConstructionClaim";
import { assertError } from "../utils/report";

chai.use(solidity);
const { expect, assert } = chai;

enum Tier {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
}

describe("TierByConstructionClaim", async function () {
  let alice: any;
  let owner: any;
  let readWriteTier: ReadWriteTier;
  let tierByConstructionClaimFactory: any;

  beforeEach(async () => {
    [owner, alice] = await ethers.getSigners();
    const tierFactory = await ethers.getContractFactory("ReadWriteTier");
    readWriteTier = (await tierFactory.deploy()) as ReadWriteTier;
    await readWriteTier.deployed();

    // Need to set the tier before construction.
    readWriteTier.setTier(alice.address, 1, []);

    tierByConstructionClaimFactory = await ethers.getContractFactory(
      "TierByConstructionClaim"
    );
  });

  it("should set tierContract and minimumTier on construction", async () => {
    const tierByConstructionClaim =
      (await tierByConstructionClaimFactory.deploy(
        readWriteTier.address,
        Tier.FOUR
      )) as TierByConstructionClaim;

    await tierByConstructionClaim.deployed();

    const initialBlock = await ethers.provider.getBlockNumber();

    assert(
      (await tierByConstructionClaim.tierContract()) === readWriteTier.address,
      "wrong tierContract address set on construction"
    );

    assert(
      (await tierByConstructionClaim.constructionBlock()).eq(initialBlock),
      "wrong constructionBlock set on construction"
    );
  });

  describe("Claim", async () => {
    describe("should require minimum tier as per TierByConstruction logic (tier held continuously since contract construction) - failure case", async () => {
      it("min tier after construction", async () => {
        const tierByConstructionClaim =
          (await tierByConstructionClaimFactory.deploy(
            readWriteTier.address,
            Tier.FOUR
          )) as TierByConstructionClaim;

        await tierByConstructionClaim.deployed();

        await readWriteTier
          .connect(alice)
          .setTier(alice.address, Tier.FOUR, []); // after construction

        await assertError(
          async () => await tierByConstructionClaim.claim(alice.address, []),
          "revert MINIMUM_TIER",
          "alice claimed despite not being at least tier FOUR since contract construction"
        );
      });

      it("min tier before construction", async () => {
        await readWriteTier
          .connect(alice)
          .setTier(alice.address, Tier.FOUR, []); // before construction

        const tierByConstructionClaim =
          (await tierByConstructionClaimFactory.deploy(
            readWriteTier.address,
            Tier.FOUR
          )) as TierByConstructionClaim;

        await tierByConstructionClaim.deployed();

        await tierByConstructionClaim.claim(alice.address, []);
      });

      it("greater than min tier before construction", async () => {
        await readWriteTier
          .connect(alice)
          .setTier(alice.address, Tier.FIVE, []); // before construction

        const tierByConstructionClaim =
          (await tierByConstructionClaimFactory.deploy(
            readWriteTier.address,
            Tier.FOUR
          )) as TierByConstructionClaim;

        await tierByConstructionClaim.deployed();

        await tierByConstructionClaim.claim(alice.address, []);
      });

      it("less than min tier before construction", async () => {
        await readWriteTier
          .connect(alice)
          .setTier(alice.address, Tier.THREE, []); // before construction

        const tierByConstructionClaim =
          (await tierByConstructionClaimFactory.deploy(
            readWriteTier.address,
            Tier.FOUR
          )) as TierByConstructionClaim;

        await tierByConstructionClaim.deployed();

        await assertError(
          async () => await tierByConstructionClaim.claim(alice.address, []),
          "revert MINIMUM_TIER",
          "alice claimed despite not being at least tier FOUR since contract construction"
        );
      });
    });

    it("should only allow accounts to claim once per contract", async () => {
      await readWriteTier.connect(alice).setTier(alice.address, Tier.FOUR, []); // before construction

      const tierByConstructionClaim =
        (await tierByConstructionClaimFactory.deploy(
          readWriteTier.address,
          Tier.FOUR
        )) as TierByConstructionClaim;

      await tierByConstructionClaim.deployed();

      await tierByConstructionClaim.claim(alice.address, []);

      await assertError(
        async () => await tierByConstructionClaim.claim(alice.address, []),
        "revert DUPLICATE_CLAIM",
        "alice wrongly claimed more than once"
      );
    });

    xit("should call _afterClaim hook after claim", async () => {
      // _afterClaim is currently no-op
    });

    it("should emit Claim event when claim occurs", async () => {
      await readWriteTier.connect(alice).setTier(alice.address, Tier.FOUR, []); // before construction

      const tierByConstructionClaim =
        (await tierByConstructionClaimFactory.deploy(
          readWriteTier.address,
          Tier.FOUR
        )) as TierByConstructionClaim;

      await tierByConstructionClaim.deployed();

      const claimPromise = tierByConstructionClaim.claim(alice.address, "0xff");

      await expect(claimPromise)
        .to.emit(tierByConstructionClaim, "Claim")
        .withArgs(alice.address, "0xff");
    });
  });
});
