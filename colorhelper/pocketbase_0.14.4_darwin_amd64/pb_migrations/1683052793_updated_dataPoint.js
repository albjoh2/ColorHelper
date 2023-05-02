migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmp08jocknx1fpw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sedmnwug",
    "name": "colorRed",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 255
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xfklgnbr",
    "name": "colorGreen",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 255
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpuu505n",
    "name": "colorBlue",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 255
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
      "min": 0,
      "max": 255
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "puel0ofe",
    "name": "textColorGreen",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 255
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c66z70sw",
    "name": "textColorBlue",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 255
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sbpg9jiq",
    "name": "easyToRead",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "atmxqmyw",
    "name": "beauty",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tmp08jocknx1fpw")

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

  // update
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

  // update
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

  // update
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
    "id": "sbpg9jiq",
    "name": "easyToRead",
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
    "id": "atmxqmyw",
    "name": "beauty",
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
