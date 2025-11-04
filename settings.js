module.exports = {
  uiPort: process.env.PORT || 1880,
  uiHost: "0.0.0.0",

  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "$2b$08$C7EUwVCMGHeX8Da0gN5R0uU6K/U4TiMrfpH6OZbuj1SgpnY7ecHY2",
      permissions: "*"
    }]
  }
}
