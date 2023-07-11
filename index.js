const { createClient } = require('redis');

const client = createClient({
  url: "redis://127.0.0.1:6379"
});

client.on('error', err => console.log('Redis Client Error', err));

async function start () {
  await client.connect();
  const value = await client.get('response');

  console.log(value)
  await client.disconnect();

}

start()


