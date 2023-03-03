import "./styles.css";
/// You can use either one of the following imports:
// import Web3 from "web3";
import { ethers } from "ethers";

/// Contains needed settings, as nodeUrl, contractAddress, and abi
import { settings } from "./settings";

/// This is a definition of the type of object returned by the contract
/// and is what the addProposalToList function expects as input parameter
import { Proposal } from "./Proposal";

/// Allows to add a proposal to the list
import { addProposalToList } from "./utils";

/// Empties the list
import { resetList } from "./utils";

/// Set the app loading status to true or false
import { setLoading } from "./utils";

const main = async () => {
  setLoading(true);
  // Write your code here
  const Provider = new ethers.providers.JsonRpcProvider(settings.nodeUrl);
  const ProposalsContract = new ethers.Contract(
    settings.contractAddress,
    settings.contractAbi,
    Provider
  );

  const proposalsCount = Number(await ProposalsContract.getProposalsCount());
  const proposalList: Proposal[] = [];

  for (let i = 0; i < proposalsCount; i++) {
    const proposal = await ProposalsContract.proposals(i);
    const asProposal: Proposal = {
      name: proposal[0],
      voteCount: Number(proposal[1])
    };
    proposalList.push(asProposal);
  }

  resetList();
  proposalList.forEach((prop) => {
    addProposalToList(prop);
  });

  setLoading(false);
};

main();
