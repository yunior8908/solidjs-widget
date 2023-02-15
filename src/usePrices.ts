import CoincapService from "./coincap.service";
import { createSignal, onCleanup } from "solid-js";

export function usePrices(assets: string[]) {
  const [prices, setPrices] = createSignal<CoincapService.Prices>({});
  const socket = CoincapService.createPricesStreamSocket(assets);

  socket.onmessage = (message) => {
    const data = JSON.parse(message.data);
    setPrices(data as CoincapService.Prices);
  };

  onCleanup(() => socket.close());

  return prices;
}
