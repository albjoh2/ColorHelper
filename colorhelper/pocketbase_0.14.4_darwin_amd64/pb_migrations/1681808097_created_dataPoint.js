migrate((db) => {
  const collection = new Collection({
    "id": "tmp08jocknx1fpw",
    "created": "2023-04-18 08:54:57.953Z",
    "updated": "2023-04-18 08:54:57.953Z",
    "name": "dataPoint",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sedmnwug",
        "name": "redText",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "i2jriwmd",
        "name": "greenText",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "sbpg9jiq",
        "name": "blueText",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "atmxqmyw",
        "name": "redBG",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "36hhokpf",
        "name": "greenBG",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "nmsqpevl",
        "name": "blueBG",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "34a63nn3",
        "name": "font",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tmp08jocknx1fpw");

  return dao.deleteCollection(collection);
})
