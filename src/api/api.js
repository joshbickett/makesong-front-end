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

  const result = await fetch("http://127.0.0.1:5000/save_email", request)
    .then((response) => response.json())
    .catch((e) => {
      console.log("there was an error: ", e);
    });
  return result;
};
