// EXAMPLE WITH DENO
// const text = 'This is a test and should be stored in a file';

// const encoder = new TextEncoder();
// const data = encoder.encode(text);

// Deno.writeFile('message.txt', data).then(() => {
//   console.log('Wrote to file');
// });

// import { serve } from 'https://deno.land/std@0.114.0/http/server_legacy.ts';

// const server = serve({ port: 3000 });

// for await (const req of server) {
//   req.respond({ body: 'Hello World\n' });
// }

import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use((ctx: any) => {
  ctx.response.body = 'Hello world!';
});

await app.listen({ port: 8000 });
