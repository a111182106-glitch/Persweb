import https from "https";
import fs from "fs";

https.get("https://sites.google.com/nkust.edu.tw/a1111821061/%E9%A6%96%E9%A0%81", (res) => {
  let data = "";
  res.on("data", (chunk) => { data += chunk; });
  res.on("end", () => {
    fs.writeFileSync("site.html", data);
    console.log("Written " + data.length + " bytes");
  });
}).on("error", (err) => console.error(err));
