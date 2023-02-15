const BASE_URL = `wss://ws.coincap.io/prices?assets=`;

namespace CoincapService {
  export function createPricesStreamSocket(assets: AssetName[]) {
    const endpoint = [BASE_URL, assets.toString()].join("");

    return new WebSocket(endpoint);
  }

  export type Prices = Record<AssetName, number>;
  export type AssetName = string;
}

export default CoincapService;
