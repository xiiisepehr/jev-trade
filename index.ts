import { experimental_evaluate as evaluate } from "ai";

const r = await evaluate({
  model: "typesafe-ai/jev",
  state: { market: "BTC-USD", mid: 95000 },
  questions: {
    bias: {
      type: "choice",
      instructions: {
        question: "long or short BTC?",
        goal: "BTC-USD",
        timing: "tickMs=1000",
        inputs: "BTC perp market state",
      },
      criteria: {
        long: "long",
        short: "short",
      },
    },
  },
});

console.log("Evaluation result from typesafe-ai/jev via Vercel AI Gateway:");
console.log(JSON.stringify(r.answers, null, 2));
