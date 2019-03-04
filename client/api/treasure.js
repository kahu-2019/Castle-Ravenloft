import request from "superagent";

export function randomTreasure() {
  return request.get("./api/v1/randomTreasure").then(res => res.body);
}
