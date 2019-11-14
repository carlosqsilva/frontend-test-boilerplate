import DB from "./Storage";

interface Result {
  response: any;
}

export async function request(url: string) {
  const result = await DB.get<Result>("response", url);

  if (result) {
    return result.response;
  } else {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(resp.statusText);

    const response = await resp.json();

    DB.update("response", { url, response });

    return response;
  }
}
