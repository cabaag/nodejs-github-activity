
function main(username: string) {
  if (!username) {
    throw new Error('Username is required');
  }

  fetch(`https://api.github.com/users/${username}/events`)
    .then(response => response.json())
    .then(data => {
      if (data.status === '404') {
        throw new Error('User not found');
      }
      console.log(data);
    })
    .catch((error: Error) => {
      console.error('Error:', error.message)
    })
}

main(process.argv[2]);