import request from "superagent";

export function randomEncounter() {
  return request.get("./api/v1/randomEncounter").then(res => res.body);
}
