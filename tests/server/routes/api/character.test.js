const request = require("supertest");

const server = require("../../../../server/server");

jest.mock('../../../../server/db/character', () => ({
  getCharacter: (id) =>
    Promise.resolve({
      id: id,
      name: "test user",
      level: 1,
      subtitle: "test subtitle",
      image: "images/icone/name.jpg",
      description: "decscription",
      Ac: 1,
      HP: 1,
      speed: 1,
      SurgeValue: 4,
      ability: "SCOUT"
    }),
  getAllCharacters: () =>
    Promise.resolve([
      {
        id: 1,
        name: "test character1",
        level: 1,
        subtitle: "test subtitle",
        image: "images/icone/name.jpg",
        description: "decscription",
        Ac: 1,
        HP: 1,
        speed: 1,
        SurgeValue: 4,
        ability: "SCOUT"
      },
      {
        id: 2,
        name: "test character2",
        level: 2,
        subtitle: "test subtitle",
        image: "images/icone/name.jpg",
        description: "decscription",
        Ac: 2,
        HP: 1,
        speed: 1,
        SurgeValue: 4,
        ability: "SCOUT"
      },
      {
        id: 3,
        name: "test character3",
        level: 3,
        subtitle: "test subtitle",
        image: "images/icone/name.jpg",
        description: "decscription",
        Ac: 1,
        HP: 1,
        speed: 1,
        SurgeValue: 4,
        ability: "SCOUT"
      },
      {
        id: 4,
        name: "test character4",
        level: 4,
        subtitle: "test subtitle",
        image: "images/icone/name.jpg",
        description: "decscription",
        Ac: 1,
        HP: 1,
        speed: 1,
        SurgeValue: 4,
        ability: "SCOUT"
      },
      {
        id: 5,
        name: "test character5",
        level: 5,
        subtitle: "test subtitle",
        image: "images/icone/name.jpg",
        description: "decscription",
        Ac: 1,
        HP: 1,
        speed: 1,
        SurgeValue: 4,
        ability: "SCOUT"
      }
    ])
}));

test("/characters return all characters", () => {
  const expected = 5;
  return request(server)
    .get("/allCharacters")
    .expected("Content-type", /json/)
    .expected(200)
    .then(res => {
      expect(res.body.characters.length).toBe(expected);
    })
    .catch(err => {
      expect(err).toBeFalsy();
    });
});
