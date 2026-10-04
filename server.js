const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 20261;
const HOST = "0.0.0.0";

const distPath = path.join(__dirname, "client", "dist");

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

const server = http.createServer((req, res) => {
  let requestPath = decodeURIComponent(req.url.split("?")[0]);

  if (requestPath === "/") {
    requestPath = "/index.html";
  }

  let filePath = path.join(distPath, requestPath);

  if (!filePath.startsWith(distPath)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (!error && stats.isFile()) {
      const extension = path.extname(filePath);
      const contentType = mimeTypes[extension] || "application/octet-stream";

      res.writeHead(200, {
        "Content-Type": contentType
      });

      fs.createReadStream(filePath).pipe(res);
      return;
    }

    const indexPath = path.join(distPath, "index.html");

    fs.readFile(indexPath, (error, data) => {
      if (error) {
        res.writeHead(500);
        res.end("Server error");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html"
      });

      res.end(data);
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Portfolio running on port ${PORT}`);
});