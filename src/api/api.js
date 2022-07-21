// test
// const url = "http://127.0.0.1:5000";

// prod
const url = "http://44.235.105.245";

export const saveEmail = async (email) => {
  var formdata = new FormData();
  formdata.append("email", email);

  var request = {
    method: "POST",
    body: formdata,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Private-Network": "true",
    },
  };

  try {
    const result = await fetch(url + "/save_email", request)
      .then((response) => response.json())
      .catch((e) => {
        console.log("there was an error: ", e);
      });
    return result;
  } catch (e) {
    return { success: false };
  }
};

export const make = async (email) => {
  var formdata = new FormData();

  var request = {
    method: "POST",
    body: formdata,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Private-Network": "true",
    },
  };

  try {
    const result = await fetch(url + "/make", request)
      .then((response) => response.json())
      .catch((e) => {
        console.log("there was an error: ", e);
      });
    return result;
  } catch (e) {
    return { success: false };
  }
};
