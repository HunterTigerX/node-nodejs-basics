// env.js - implement function that parses environment variables
// with prefix RSS_ and prints them to the console in the format
// RSS_name1=value1; RSS_name2=value2

function parseEnv() {
  const prefix = "RSS_";
  const rssVariables = [];
  for (const key in process.env) {
    if (key.startsWith(prefix)) {
      const name = key.substring(prefix.length);
      const value = process.env[key];
      rssVariables.push(`${name}=${value}`);
    }
  }
  console.log(rssVariables.join("; "));
  return rssVariables.join("; ");
}

parseEnv();
