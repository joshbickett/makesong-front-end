export const test = async () => {
  var formdata = new FormData();
  formdata.append("test", "abc");

  var request = {
    method: "POST",
    body: formdata,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Private-Network": "true",
    },
  };

  const result = await fetch("http://127.0.0.1:5000/test", request).then(
    (response) => response.json()
  );
  return result;
};
