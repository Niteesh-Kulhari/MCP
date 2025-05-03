import { KiteConnect } from "kiteconnect";

const apiKey = "rm6m0b1gn0te3xeh";
const apiSecret = "how1q32yqy9plfn8r7tamh9v0q10h2nq";
const requestToken = "Li43jH3l1P5vNQ8dupMmJpry7E46AcZf";
const access_token = "VQ1pFyAIrPDY3giG7Ae3VStkfPUU2N6s";

const kc = new KiteConnect({ api_key: apiKey });

console.log(kc.getLoginURL());

async function init() {
  try {
    //await generateSession();
    kc.setAccessToken(access_token);
    await getProfile();
  } catch (err) {
    console.error(err);
  }
}

// async function generateSession() {
//   try {
//     const response = await kc.generateSession(requestToken, apiSecret);
//     console.log(response.access_token);
//     kc.setAccessToken(response.access_token);
//     console.log("Session generated:", response);
//   } catch (err) {
//     console.error("Error generating session:", err);
//   }
// }

async function getProfile() {
  try {
    const profile = await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol: "HDFCBANK",
      transaction_type: "BUY",
      quantity: 1,
      product: "CNC",
      order_type: "MARKET"
    });
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls
init();
