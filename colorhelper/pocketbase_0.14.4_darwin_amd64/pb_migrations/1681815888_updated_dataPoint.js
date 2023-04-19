migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmp08jocknx1fpw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qmcsnbkc",
    "name": "font",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmp08jocknx1fpw")

  // remove
  collection.schema.removeField("qmcsnbkc")

  return dao.saveCollection(collection)
})
