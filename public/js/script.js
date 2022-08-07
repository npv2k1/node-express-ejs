function addCart(productid) {
  fetch(`/cart/${productid}`, {
    method: "PUT",
  }).then((res) => {
    console.log(res);
  });
}
