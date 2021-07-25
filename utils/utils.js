export function parseResponse(results) {
  const { messages, response } = results;
  const code = messages[0].code;
  if (code === "400" || code === "401") {
    return { data: [], foundCount: 0 };
  }
  if (code !== "0" && code !== "401") {
    throw new Error(`FileMaker Error Code: ${code}. ${messages[0].message}`);
  }
  const {
    data,
    dataInfo: { foundCount },
  } = response;

  let dataArray = data || [];

  return { data: dataArray, foundCount };
}
