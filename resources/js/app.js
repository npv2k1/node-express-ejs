import axios from "axios";
import Noty from "noty";
import { initAdmin } from "./admin";
import moment from "moment";
import { initStripe } from "./stripe";

let addToCart = document.querySelectorAll(".add-to-cart");
let cartCounter = document.querySelector("#cartCounter");

async function addCart(productid) {
  const dt = await axios.put(`/cart/${productid}`);
  if (dt) {
    new Noty({
      type: "success",
      timeout: 1000,
      text: "Item added to cart",
      progressBar: false,
    }).show();
  } else {
    new Noty({
      type: "error",
      timeout: 1000,
      text: "Something went wrong",
      progressBar: false,
    }).show();
  }
}
(function (modules) {
  window.addEventListener("DOMContentLoaded", function () {
    async function addCart(productid) {
      const dt = await axios.put(`/cart/${productid}`);
      if (dt) {
        new Noty({
          type: "success",
          timeout: 1000,
          text: "Item added to cart",
          progressBar: false,
        }).show();
      } else {
        new Noty({
          type: "error",
          timeout: 1000,
          text: "Something went wrong",
          progressBar: false,
        }).show();
      }
    }
  });
}); // end of scope

// Remove alert message after X seconds
const alertMsg = document.querySelector("#success-alert");
if (alertMsg) {
  setTimeout(() => {
    alertMsg.remove();
  }, 2000);
}

// Change order status
let statuses = document.querySelectorAll(".status_line");
let hiddenInput = document.querySelector("#hiddenInput");
let order = hiddenInput ? hiddenInput.value : null;
order = JSON.parse(order);
let time = document.createElement("small");

function updateStatus(order) {
  statuses.forEach((status) => {
    status.classList.remove("step-completed");
    status.classList.remove("current");
  });
  let stepCompleted = true;
  statuses.forEach((status) => {
    let dataProp = status.dataset.status;
    if (stepCompleted) {
      status.classList.add("step-completed");
    }
    if (dataProp === order.status) {
      stepCompleted = false;
      time.innerText = moment(order.updatedAt).format("hh:mm A");
      status.appendChild(time);
      if (status.nextElementSibling) {
        status.nextElementSibling.classList.add("current");
      }
    }
  });
}

updateStatus(order);

initStripe();

// Socket
let socket = io();

// Join
if (order) {
  socket.emit("join", `order_${order._id}`);
}
let adminAreaPath = window.location.pathname;
if (adminAreaPath.includes("admin")) {
  initAdmin(socket);
  socket.emit("join", "adminRoom");
}

socket.on("orderUpdated", (data) => {
  const updatedOrder = { ...order };
  updatedOrder.updatedAt = moment().format();
  updatedOrder.status = data.status;
  updateStatus(updatedOrder);
  new Noty({
    type: "success",
    timeout: 1000,
    text: "Order updated",
    progressBar: false,
  }).show();
});

// let indoor = document.querySelector("#indoor")
// indoor.addEventListener('click',async (e)=>{
//     await axios.post('/category' , {search:"indoor"}).then()
//     console.log(res)
// })

const button = document.querySelector(".butn");
const ul = document.querySelector(".ul");

function myFunction() {
  if (ul.classList.contains("hidden")) {
    ul.classList.remove("hidden");
  } else {
    ul.classList.add("hidden");
  }
}

button.addEventListener("click", myFunction);

const image = document.querySelector("#image");
const slogan = document.querySelector("#slogan");
const path = "/img/";
const imgList = [
  "philodendronbrokenheart_45_1.webp",
  "aglaonemapinkbeauty_45_1.webp",
  "45_32.webp",
  "stringofbananasspink_45.webp",
  "haworthiacooperihybrid_45.webp",
  "aglaonemalightpink_45_1.webp",
  "christmascactus_45_1.webp",
];
const slnList = [
  "In a Greener Way",
  "Grow Your Dreams",
  "Go the Green Way",
  "Garden That Everyone Loves",
  "Be environment-friendly",
  "Best way to go green",
  "Feel the fantastic hobby",
];
let i = 0;
setInterval(() => {
  i++;
  if (i == imgList.length) {
    i = 0;
  }
  image.src = path + imgList[i];
  slogan.innerHTML = slnList[i];
}, 4000);
