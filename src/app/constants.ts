import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";

const contractAddress = "0x1398b8D9c54878953d519073a4dA2e11c4675f7A";

export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});
