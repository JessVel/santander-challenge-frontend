import connection from "./connection";

const tokenAuth = token => {
  if (token) {
    connection.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete connection.defaults.headers.common["x-auth-token"];
  }
};

export default tokenAuth;
