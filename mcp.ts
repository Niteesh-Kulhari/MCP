import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
//import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { palceOrder } from "./trade";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

// Add an addition tool
server.tool("add two numbers",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);


server.tool("Factorial two numbers",
    { a: z.number()},
    async ({ a }) => {
        let ans = 1;

        for(let i=2; i<=a; i++){
            ans *= i;
        }

        return{
            content: [{ type: "text", text: String(ans) }]
        }
    }
  );

server.tool("Buy a stock",
    {stock: z.string(), qty: z.number},
    async({stock, qty}) => {
        palceOrder(stock, qty, "BUY");

        return {
            content:[{ type: "text", text: `${qty} stocks of ${stock} have been successfully bought`}]
        }
    }
)

server.tool("Sell a stock", 
  {stock: z.string(), qty: z.number()},
  async({stock, qty}) => {
    palceOrder(stock, qty, "SELL");

    return{
      content:[{type: "text", text: `${qty} stocks of ${stock} have been successfully sold`}]
    }
  }
)


const traansport = new StdioServerTransport();
await server.connect(traansport);