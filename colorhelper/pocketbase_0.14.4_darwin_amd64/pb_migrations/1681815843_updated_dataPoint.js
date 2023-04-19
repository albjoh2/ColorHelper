migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmp08jocknx1fpw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pi8vm5ix",
    "name": "fontSize",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmp08jocknx1fpw")

  // remove
  collection.schema.removeField("pi8vm5ix")

  return dao.saveCollection(collection)
})
