function addCart(productid) {
  fetch(`/cart/${productid}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((dt) => {
      console.log(dt);
      document.getElementById("cart").innerHTML = dt.length;
    });
}

// Danh muc
function hienThiDanhMuc() {
  document.getElementById("danhmuc-nd").classList.toggle("hidden")
}

// window.onclick = function (e) {
//   if (!e.target.matches(".danhmuc-nut")) {
//     document.getElementById("danhmuc-nd").classList.add("hidden")
//   }
// };


// domcontent loaded
document.addEventListener("DOMContentLoaded", async () => {
  async function getCartCount() {
    fetch(`/cart/count`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt);
        document.getElementById("cart").innerHTML = dt.count;
      });
  }
  await getCartCount();
});
