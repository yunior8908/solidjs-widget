import { customElement } from "solid-element";
import PriceTicker from "./components/PriceTicker";

export function registerWebComponents() {
  customElement("price-ticker", getInitialProps(), PriceTicker);
}

function getInitialProps() {
  return {
    asset: "",
  };
}
