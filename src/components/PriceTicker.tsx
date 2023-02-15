import { createMemo } from "solid-js";

import "../global.css";

import styles from "./PriceTicker.css";

import { usePrices } from "../usePrices";

interface Props {
  asset: string;
}

function PriceTicker(props: Props) {
  const prices = usePrices([props.asset]);

  const price = createMemo(() => {
    return prices()[props.asset];
  });

  return (
    <>
      <style>{styles}</style>
      <div class={"PriceTicker"}>
        <p> testing 2 dsdsd</p>
        <p>
          <span>{price()}</span>
        </p>
      </div>
    </>
  );
}

export default PriceTicker;
