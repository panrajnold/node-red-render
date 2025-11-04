module.exports = {
  uiPort: process.env.PORT || 1880,
  uiHost: "0.0.0.0",

  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "$2b$08$AwDF8uj2hPC1wCw55RibW.6zTXuyOnYj1g4iHREY0E9rvvf9brvX2",
      permissions: "*"
    }]
  }
}
