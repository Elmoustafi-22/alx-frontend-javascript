export default function handleResponseFromAPI(promise) {
  const object = {
    status: 200,
    body: 'Success',
  };

  return promise
    .then((resolve) => resolve(object))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
