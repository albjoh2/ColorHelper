migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmp08jocknx1fpw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xfklgnbr",
    "name": "colorGreen",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpuu505n",
    "name": "colorBlue",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "puel0ofe",
    "name": "textColorGreen",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c66z70sw",
    "name": "textColorBlue",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sedmnwug",
    "name": "colorRed",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i2jriwmd",
    "name": "textColorRed",
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
  collection.schema.removeField("xfklgnbr")

  // remove
  collection.schema.removeField("hpuu505n")

  // remove
  collection.schema.removeField("puel0ofe")

  // remove
  collection.schema.removeField("c66z70sw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sedmnwug",
    "name": "color",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i2jriwmd",
    "name": "textcolor",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
