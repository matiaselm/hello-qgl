# Example requests:

## GET all stations:  
 - [http://first-node-env.jelastic.metropolia.fi/station](http://first-node-env.jelastic.metropolia.fi/station)

## GET station by id:
 - [http://first-node-env.jelastic.metropolia.fi/station/{ID}](http://first-node-env.jelastic.metropolia.fi/station/5e590b0a7536c009841db2e1)

## POST station:
 - POST request to [http://first-node-env.jelastic.metropolia.fi/station](http://first-node-env.jelastic.metropolia.fi/station)
with body:
```json
{
  "Station": {
      "Title": "New Station ",
      "Town": "Turenki",
      "AddressLine1": "Peltokuja 6",
      "StateOrProvince": "Tavastia proper",
      "Postcode": "14240",
      "Location": {
        "coordinates": [24.77772323548868, 60.203353130088146]
      }
  },
  "Connections":[
      {
      "ConnectionTypeID": "5e39eecac5598269fdad81a0",
      "CurrentTypeID": "5e39ef4a6921476aaf62404a",
      "LevelID": "5e39edf7bb7ae768f05cf2bc",
      "Quantity": 4
      }
  ]
}
```

## DELETE station: 
 - Delete request to http://first-node-env.jelastic.metropolia.fi/station/{ID}
