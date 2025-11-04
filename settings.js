module.exports = {
  uiPort: process.env.PORT || 1880,
  uiHost: "0.0.0.0",

  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "$2b$08$wI9EBZBg3wdn8IohvOY04u8TdN1ymAtMN8TVW2mLz7KQon5oVqkD6",
      permissions: "*"
    }]
  }
}
