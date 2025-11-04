module.exports = {
  uiPort: process.env.PORT || 1880,
  uiHost: "0.0.0.0",

  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "$2b$08$UfmvMGyEIHdN8bsZ3xvxK.xgMRzLNLF92YPjEqZilJKsS8sGzKPeW",
      permissions: "*"
    }]
  }
}
