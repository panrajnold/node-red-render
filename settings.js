module.exports = {
  uiPort: process.env.PORT || 1880,
  uiHost: "0.0.0.0",

  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "$2a$12$Tp1LklO7W76zwsiFGM5l5OscK6q3OAKA8ufBgcYFUJP8ORAbqtvHC",
      permissions: "*"
    }]
  }
}
