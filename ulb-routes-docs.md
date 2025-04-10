# ULB Routes Documentation

This document provides details about the ULB routes and their respective endpoints.

---

## 1. Register ULB

### Endpoint
**POST** `/ulb/register`

### Description
Registers a new ULB in the system. This endpoint requires authentication.

### Request Headers
- `Authorization`: Bearer token (required)

### Request Body
```json
{
  "ulbname": "Sample ULB",
  "ulbcode": 12345,
  "state": "Sample State",
  "district": "Sample District",
  "city": "Sample City",
  "password": "securepassword",
  "ulbstatus": "municipal"
}
```

### Response
- **201 Created**
```json
{
  "message": "ULB registered successfully",
  "newUlb": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "ulbname": "Sample ULB",
    "ulbcode": 12345,
    "state": "Sample State",
    "district": "Sample District",
    "city": "Sample City",
    "ulbstatus": "municipal",
    "communityToilets": 0,
    "publicToilets": 0,
    "totalVehicle": {
      "autoTipper": 0,
      "tractor": 0,
      "otherVehicles": 0
    },
    "totalLargeDustbins": 0,
    "totalSmallDustbins": 0
  },
  "success": true
}
```

- **400 Bad Request**
```json
{
  "message": "ULB already exists",
  "success": false
}
```

- **500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```

---

## 2. Login ULB

### Endpoint
**POST** `/ulb/login`

### Description
Logs in a ULB using its credentials.

### Request Body
```json
{
  "ulbcode": 12345,
  "password": "securepassword"
}
```

### Response
- **200 OK**
```json
{
  "message": "ULB logged in successfully",
  "ulb": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "ulbname": "Sample ULB",
    "ulbcode": 12345,
    "state": "Sample State",
    "district": "Sample District",
    "city": "Sample City",
    "ulbstatus": "municipal",
    "communityToilets": 0,
    "publicToilets": 0,
    "totalVehicle": {
      "autoTipper": 0,
      "tractor": 0,
      "otherVehicles": 0
    },
    "totalLargeDustbins": 0,
    "totalSmallDustbins": 0
  },
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

- **400 Bad Request**
```json
{
  "message": "Invalid credentials",
  "success": false
}
```

- **500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```

---

## 3. Get All ULBs

### Endpoint
**GET** `/ulb/getall`

### Description
Fetches all registered ULBs.

### Response
- **200 OK**
```json
{
  "message": "ULBs fetched successfully",
  "ulbs": [
    {
      "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
      "ulbname": "Sample ULB",
      "ulbcode": 12345,
      "state": "Sample State",
      "district": "Sample District",
      "city": "Sample City",
      "ulbstatus": "municipal",
      "communityToilets": 0,
      "publicToilets": 0,
      "totalVehicle": {
        "autoTipper": 0,
        "tractor": 0,
        "otherVehicles": 0
      },
      "totalLargeDustbins": 0,
      "totalSmallDustbins": 0
    }
  ],
  "success": true
}
```

- **500 Internal Server Error**
```json
{
  "message": "Internal server error"
}
```

---
