<template>
  <div
    ref="modal"
    class="bg-[#F8F8F8] w-[1100px] rounded-[20px] pb-6 z-30 shadow-[0px_28.290908813476562px_42.436363220214844px_0px_rgba(102, 106, 245, 0.13)] px-6 py-4"
  >
    <p class="flex justify-end">
      <svg
        class="cursor-pointer"
        @click="$emit('closeModal')"
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9584 11.9583L29.0417 29.0417M11.9584 29.0417L29.0417 11.9583"
          stroke="black"
          stroke-width="3.41667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </p>

    <div class="w-full flex gap-14 items-start">
      <div class="w-[50%] pl-6">
        <h1
          class="text-[34px] text-[color:var(--blue-color-1)] font-semibold font-['Poppins']"
        >
          Please, fill the form
        </h1>
        <h4 class="font-['Poppins'] text-[17px] font-normal">
          your order will be placed after you submit the form.
        </h4>
        <form class="mt-12" action="">
          <input
            style="background: rgba(255, 108, 25, 0.05)"
            class="px-[28px] my-6 py-[18px] text-[16px] font-normal font-['Poppins'] text-[color:var(--gray-color-1)] block outline-none w-full text-center border-none"
            type="text"
            placeholder="Enter your name"
          />
          <input
            style="background: rgba(255, 108, 25, 0.05)"
            class="px-[28px] my-6 py-[18px] text-[16px] font-normal font-['Poppins'] text-[color:var(--gray-color-1)] block outline-none w-full text-center border-none"
            type="number"
            placeholder="Enter your phone number"
          />
          <input
            style="background: rgba(255, 108, 25, 0.05)"
            class="px-[28px] my-6 py-[18px] text-[16px] font-normal font-['Poppins'] text-[color:var(--gray-color-1)] block outline-none w-full text-center border-none"
            type="email"
            placeholder="Enter your email"
          />
          <input
            style="background: rgba(255, 108, 25, 0.05)"
            class="px-[28px] py-[18px] my-6 text-[16px] font-normal font-['Poppins'] text-[color:var(--gray-color-1)] block outline-none w-full text-center border-none"
            type="text"
            placeholder="Additional message"
          />
          <div class="flex gap-2 my-8">
            <input
              class="w-[22px] h-[22px]"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
            <p
              class="text-base font-['Nexa'] font-[400] text-[color:var(--black-color-1)]"
            >
              Remember details
            </p>
          </div>
          <input
            class="w-full bg-[color:var(--yellow-color)] text-white font-['Poppins'] font-bold text-[26px] cursor-pointer py-3 rounded-[11px]"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <div>
        <nuxt-img
          width="482"
          height="350"
          class="p-8"
          src="images/form_illustro.png"
        />
        <!-- order summaary -->
        <div class="bg-white py-4 px-8 rounded-[14px] font-['Poppins'] w-[80%]">
          <h3 class="text-center pb-2 text-base font-semibold">
            Order Summary
          </h3>
          <div class="flex justify-between items-center text-base py-1">
            <p>Items Name</p>
            <p>Chino pant</p>
          </div>
          <div class="flex justify-between items-center text-base py-1">
            <p>No. of Items</p>
            <p>x2</p>
          </div>
          <div
            class="flex justify-between items-center text-base py-1 border-b border-black/30"
          >
            <p>Price per item</p>
            <p>Rs.2000</p>
          </div>
          <div class="flex justify-between items-center text-base py-2">
            <p>Total Payment</p>
            <p>Rs.4000</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
const emit = defineEmits(["closeModal"]);
const modal = ref(null);

onMounted(() => {
  document.body.addEventListener("click", closeModal);
});
onBeforeUnmount(() => {
  document.body.removeEventListener("click", closeModal);
});
const closeModal = (event) => {
  if (Array.from(event.target.classList).includes("h-screen")) {
    emit("closeModal");
  }
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
