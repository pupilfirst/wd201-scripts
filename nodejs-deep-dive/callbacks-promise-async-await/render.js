const time = async (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}
const fetchUserDetais = async (userID) => {
  console.log("Fetching user details");
  await time(1000);
  return `https://image.example.com/${userID}`;
};

const downloadImage = async (imageURL, next) => {
  console.log("Downloading image");
  await time(1000);
  return `Data from ${imageURL}`;

};

const render = async (image) => {
  await time(1000);
  console.log(`Render image: ${image}`);
};

const run = async () => {
  try {
    const userDetails = await fetchUserDetais("john");
    const imageData = await downloadImage(userDetails);
    await render(imageData);
  } catch (err) {
    console.error(err);
  }
}
run();
