// test
// const url = "http://127.0.0.1:5000";

// prod
const url = "https://makesong.ai/apis/";

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

  const result = await fetch(url + "/save_email", request)
    .then((response) => response.json())
    .catch((e) => {
      console.log("there was an error: ", e);
    });
  return result;
};
