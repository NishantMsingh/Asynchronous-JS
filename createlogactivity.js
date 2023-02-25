
      let posts = [{ title: "post 1" }];

      async function beforesctivity() {
        return new Promise((resolve, rejected) => {
          let datee = new Date();
          resolve("Before "+datee);
        });
      }

      async function addpost2() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      let y={ title: "Post2" };
      posts.push(y);
      resolve(y);
    }, 1000);
  });
}

async function addpost3() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      let y={ title: "Post3" };
      posts.push(y);
      resolve(y);
    }, 2000);
  });
}

async function deletepost() {
  return new Promise((resolve,rejected)=>{
      let y=posts.pop();
      console.log(y)
      resolve(y);
  })
}

async function updateLastUserActivityTime() {
  return new Promise((resolve, rejected) => {
    let datee = new Date();
    resolve("Updated  "+datee);
  });
}
beforesctivity()
  .then((value) => {
    console.log(value);
    return addpost2();
  })
  .then(() => {
    return addpost3();
  })
  .then(() => {
    return deletepost();
  })
  .then(() => {
    return updateLastUserActivityTime();
  }).then((value)=>{
    console.log(value);
    console.log(posts);
  })
  .catch((error) => {
    console.error(error);
  });



