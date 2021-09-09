const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <head><title>Main Page</title></head>
        <body>
            <h1>Main Page</h1>
            <form action="/create-user" method="POST">
                <input type="text" name="username">
                <button type="submit">Send</button>
            </form>
        </body>
      </html>`);
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <head><title>Users Page</title></head>
        <body>
            <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
        </body>
    </html>`);
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      res.setHeader('Content-Type', 'text/html');
      res.write(`<html>
            <head><title>Create User Page</title></head>
            <body>
                <h1>${username}</h1>
            </body>
        </html>`);
      return res.end();
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`<html>
        <head><title>Page Not Found</title></head>
        <body>
            <h1>Page Not Found</h1>
        </body>
    </html>`);
  res.end();
};

module.exports = requestHandler;
