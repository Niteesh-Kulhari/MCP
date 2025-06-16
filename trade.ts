import { KiteConnect } from "kiteconnect";

const apiKey = "rm6m0b1gn0te3xeh";
const apiSecret = "how1q32yqy9plfn8r7tamh9v0q10h2nq";
const requestToken = "c0QsF7x8DAbkbPOI0L7yrHqLzaKrkxCW";
const access_token = "qTvOgKApVsfZrQDDYHyhXriooKQOaP9n"; 

const kc = new KiteConnect({ api_key: apiKey });

kc.setAccessToken(access_token);
export async function palceOrder(tradingSymbol: string, quantity: number, type: "BUY" | "SELL") {
  try {
    const profile = await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol: tradingSymbol,
      transaction_type: type,
      quantity,
      product: "CNC",
      order_type: "MARKET"
    });
  } catch (err) {
    console.error("Error Executing Order:", err);
  }
}


// palceOrder("HDFCBANK", 1, "BUY");
