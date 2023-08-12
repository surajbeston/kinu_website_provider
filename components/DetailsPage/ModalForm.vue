<template>
  <div
    ref="modal"
    class="bg-[color:var(--white-2)] w-[calc(100vw-2rem)] h-max md:h-auto max-w-[1100px] rounded-[20px] pb-6 z-30 shadow-[0px_28.290908813476562px_42.436363220214844px_0px_rgba(102, 106, 245, 0.13)] px-6 py-4"
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
    <h1
      class="text-[18px] md:text-[34px] text-[color:var(--yellow-color)] font-semibold font-['Poppins']"
    >
      Please, fill the form
    </h1>
    <h4 class="font-['Poppins'] text-[9px] md:text-[17px] font-normal">
      your order will be placed after you submit the form.
    </h4>

    <div
      class="w-full flex flex-col md:flex-row gap-2 md:gap-8 lg:gap-14 items-start"
    >
      <div class="w-full md:w-1/2 md:pl-6 order-2 md:order-1">
        <form @submit.prevent="inputValidator" class="mt-6 md:mt-12">
          <input
            v-model="name"
            :class="{
              '!my-1 ': errors.nameError,
            }"
            style="background: rgba(255, 108, 25, 0.05)"
            class="px-[28px] my-4 md:my-6 py-[18px] text-[10px] md:text-[16px] font-normal font-['Poppins'] placeholder:text-[color:var(--gray-color-1)] text-[color:var(--black)] block outline-none w-full text-center border-none"
            type="text"
            placeholder="Enter your name"
            @keypress="errors.nameError = false"
          />
          <p
            v-show="errors.nameError"
            class="text-[12px] font-['Poppins'] text-[color:var(--red)]"
          >
            This field is required
          </p>
          <input
            v-model="phoneNumber"
            style="background: rgba(255, 108, 25, 0.05)"
            :class="{
              '!my-1 ': errors.phoneNumberError,
            }"
            class="px-[28px] my-4 md:my-6 py-[18px] text-[10px] md:text-[16px] font-normal font-['Poppins'] placeholder:text-[color:var(--gray-color-1)] text-[color:var(--black)] block outline-none w-full text-center border-none"
            type="number"
            placeholder="Enter your phone number"
            @keypress="errors.phoneNumberError = false"
          />
          <p
            v-show="errors.phoneNumberError"
            class="text-[12px] font-['Poppins'] text-[color:var(--red)]"
          >
            This field is required
          </p>
          <input
            v-model="email"
            :class="{
              '!my-1 ': errors.emailError,
            }"
            style="background: rgba(255, 108, 25, 0.05)"
            class="px-[28px] my-4 md:my-6 py-[18px] text-[10px] md:text-[16px] font-normal font-['Poppins'] placeholder:text-[color:var(--gray-color-1)] text-[color:var(--black)] block outline-none w-full text-center border-none"
            type="email"
            placeholder="Enter your email"
            @keypress="errors.emailError = false"
          />
          <p
            v-show="errors.emailError"
            class="text-[12px] font-['Poppins'] text-[color:var(--red)]"
          >
            This field is required
          </p>
          <input
            v-model="additionalMessage"
            :class="{
              '!my-1 ': errors.emailError,
            }"
            style="background: rgba(255, 108, 25, 0.05)"
            class="px-[28px] py-[18px] my-4 md:my-6 text-[10px] md:text-[16px] font-normal font-['Poppins'] placeholder:text-[color:var(--gray-color-1)] text-[color:var(--black)] block outline-none w-full text-center border-none"
            type="text"
            placeholder="Additional message (optional)"
          />
          <div class="flex items-center gap-2 my-4 md:my-8">
            <input
              class="w-[18px] md:w-[22px] h-[18px] md:h-[22px]"
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
            class="w-full bg-[color:var(--yellow-color)] text-[color:var(--white)] font-['Poppins'] font-bold text-[15px] md:text-[26px] cursor-pointer py-3 rounded-[11px]"
            type="submit"
            value="Order"
          />
        </form>
      </div>
      <div class="w-full md:w-1/2 md:order-2">
        <nuxt-img
          width="482"
          height="350"
          class="p-8 pt-0 hidden lg:block"
          src="images/form_illustro.png"
        />
        <!-- order summaary -->
        <div
          class="bg-[color:var(--white)] py-4 px-8 rounded-[14px] font-['Poppins'] mt-6 md:mt-auto w-full xl:w-[80%]"
        >
          <h3 class="text-center pb-2 text-[10px] md:text-base font-semibold">
            Order Summary
          </h3>
          <div
            class="flex justify-between items-center text-[10px] md:text-base py-1"
          >
            <p>Items Name</p>
            <p>{{ orderInfo.productName }}</p>
          </div>
          <div
            class="flex justify-between items-center text-[10px] md:text-base py-1"
          >
            <p>No. of Items</p>
            <p>x{{ orderInfo.numberOfProduct }}</p>
          </div>
          <div
            class="flex justify-between items-center text-[10px] md:text-base py-1 border-b border-black/30"
          >
            <p>Price per item</p>
            <p>Rs.{{ orderInfo.pricePerProduct }}</p>
          </div>
          <div
            class="flex justify-between items-center text-[10px] md:text-base py-2"
          >
            <p>Total Payment</p>
            <p>Rs.{{ orderInfo.totalAmount }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useReCaptcha } from "vue-recaptcha-v3";
import { useOrderData } from "~~/store/order";
import { useToast } from "vue-toastification";
const toast = useToast();
const orderData = useOrderData();
const orderInfo = orderData.orderData;
const recaptchaInstance = useReCaptcha();
const emit = defineEmits(["closeModal"]);
const modal = ref(null);
const name = ref(null);
const phoneNumber = ref(null);
const email = ref(null);
const additionalMessage = ref(null);
const errors = ref({
  nameError: false,
  phoneNumberError: false,
  emailError: false,
});

const recaptcha = async () => {
  // optional you can await for the reCaptcha load
  await recaptchaInstance?.recaptchaLoaded();

  // get the token, a custom action could be added as argument to the method
  const token = await recaptchaInstance?.executeRecaptcha("yourActionHere");

  return token;
};

const onSubmit = async () => {
  const token = await recaptcha();
  const response = await useFetch(`${apiAuthority}/website/order/`, {
    method: "POST",
    body: {
      recaptcha: token,
      product: orderInfo.productId,
      website_info: orderInfo.website_info,
      unit_price: orderInfo.pricePerProduct,
      quantity: orderInfo.numberOfProduct,
      total_amount: orderInfo.totalAmount,
      phone_number: String(phoneNumber.value),
      email_address: String(email.value),
      additional_message: additionalMessage.value,
      full_name: name.value,
    },
  });
  // close model
  emit("closeModal");
  if (response.status.value === "success") {
    toast.success("Order Placed", {
      timeout: 2000,
    });
  } else {
    toast.error("Something went Wrong", {
      timeout: 2000,
    });
  }
};
function inputValidator() {
  if (!name.value && !email.value && !phoneNumber.value) {
    errors.value.emailError = true;
    errors.value.nameError = true;
    errors.value.phoneNumberError = true;
  } else if (!name.value) {
    errors.value.nameError = true;
  } else if (!email.value) {
    errors.value.emailError = true;
  } else if (!phoneNumber.value) {
    errors.value.phoneNumberError = true;
  } else {
    onSubmit();
  }
}

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
