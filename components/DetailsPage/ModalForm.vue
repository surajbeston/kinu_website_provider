<template>
  <div
    :style="{ backgroundColor: `var(--${generalData.paletteName}-form-bg)` }"
    ref="modal"
    class="w-[calc(100vw-2rem)] h-[90vh] overflow-y-scroll md:h-auto max-w-[1100px] rounded-[20px] pb-6 shadow-[0px_28.290908813476562px_42.436363220214844px_0px_rgba(102, 106, 245, 0.13)] px-6 py-4 custom-scrollbar z-100"
  >
    <p class="flex justify-end">
      <svg
        :style="{
          stroke: `var(--${generalData.paletteName}-form-title)`,
        }"
        class="cursor-pointer"
        @click="emitCloseEvent"
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9584 11.9583L29.0417 29.0417M11.9584 29.0417L29.0417 11.9583"
          stroke-width="3.41667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </p>
    <h1
      :style="{ color: `var(--${generalData.paletteName}-form-title)` }"
      class="text-[18px] md:text-[34px] font-semibold font-['Poppins']"
    >
      Please, fill the form
    </h1>
    <h4
      :style="{ color: `var(--${generalData.paletteName}-form-text)` }"
      class="font-['Poppins'] text-[9px] md:text-[17px] font-normal"
    >
      your order will be placed after you submit the form.
    </h4>

    <div
      class="w-full flex flex-col md:flex-row gap-2 md:gap-8 lg:gap-14 items-start"
    >
      <div class="w-full md:!w-1/2 md:pl-6 order-2 md:order-1">
        <Form
          autocomplete="off"
          @submit="onSubmit"
          :initial-values="localFormData"
          class="mt-6 md:mt-12 w-full"
        >
          <Field
            :style="{
              color: `var(--${generalData.paletteName}-form-placeholder-text)`,
              backgroundColor: `var(--${generalData.paletteName}-form-placeholder)`,
            }"
            class="px-[28px] my-4 py-[18px] text-[10px] md:text-[16px] font-normal font-['Poppins'] placeholder:text-[color:var(--gray-color-1)] text-[color:var(--black)] block outline-none w-full text-center border-none"
            type="text"
            name="userName"
            :rules="validateName"
            placeholder="Enter your full name"
          />
          <ErrorMessage class="text-[color:var(--red)] my-0" name="userName" />

          <Field
            :style="{
              color: `var(--${generalData.paletteName}-form-placeholder-text)`,
              backgroundColor: `var(--${generalData.paletteName}-form-placeholder)`,
            }"
            title="Please enter a 10-digit phone number"
            class="px-[28px] my-4 py-[18px] text-[10px] md:text-[16px] font-normal font-['Poppins'] placeholder:text-[color:var(--gray-color-1)] text-[color:var(--black)] block outline-none w-full text-center border-none"
            type="number"
            name="phoneNumber"
            :rules="validatePhoneNumber"
            placeholder="Enter your phone number"
          />
          <ErrorMessage
            class="text-[color:var(--red)] my-0"
            name="phoneNumber"
          />
          <Field
            :style="{
              color: `var(--${generalData.paletteName}-form-placeholder-text)`,
              backgroundColor: `var(--${generalData.paletteName}-form-placeholder)`,
            }"
            class="px-[28px] my-4 py-[18px] text-[10px] md:text-[16px] font-normal font-['Poppins'] placeholder:text-[color:var(--gray-color-1)] text-[color:var(--black)] block outline-none w-full text-center border-none"
            type="email"
            name="email"
            :rules="validateEmail"
            placeholder="Enter your email"
            title="Please enter valid email"
          />
          <ErrorMessage class="text-[color:var(--red)] my-0" name="email" />
          <Field
            :style="{
              color: `var(--${generalData.paletteName}-form-placeholder-text)`,
              backgroundColor: `var(--${generalData.paletteName}-form-placeholder)`,
            }"
            class="px-[28px] py-[18px] my-4 text-[10px] md:text-[16px] font-normal font-['Poppins'] placeholder:text-[color:var(--gray-color-1)] text-[color:var(--black)] block outline-none w-full text-center border-none"
            type="text"
            name="additionalMessage"
            placeholder="Additional message (optional)"
          />
          <div class="flex items-center gap-2 my-4 md:my-8">
            <input
              v-model="rememberMe"
              class="w-[18px] md:w-[22px] h-[18px] md:h-[22px]"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
            <p
              :style="{
                color: `var(--${generalData.paletteName}-form-text)`,
              }"
              class="text-base font-['Nexa'] font-[400]"
            >
              Remember details
            </p>
          </div>

          <input
            :style="{
              color: `var(--${generalData.paletteName}-form-text)`,
              backgroundColor: `var(--${generalData.paletteName}-form-title)`,
            }"
            class="w-full bg-[color:var(--kinu-light-cta)] text-[color:var(--white)] font-['Poppins'] font-bold text-[15px] md:text-[26px] cursor-pointer py-3 rounded-[11px]"
            type="submit"
            value="Order"
          />
        </Form>
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
          class="bg-[color:var(--white)] py-4 px-6 rounded-[14px] font-['Poppins'] mt-6 md:mt-auto w-full xl:w-full"
        >
          <h3 class="text-center pb-2 text-[10px] md:text-base font-semibold">
            Order Summary
          </h3>
          <div
            class="flex justify-between items-center text-[10px] md:text-base py-1"
          >
            <p class="min-w-[35%]">Items Name</p>
            <p class="clip">{{ orderInfo.productName }}</p>
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
import { Form, Field, ErrorMessage } from "vee-validate";
import { useReCaptcha } from "vue-recaptcha-v3";
import nuxtStorage from "nuxt-storage";
import { useOrderData } from "~~/store/order";
import { useGeneralData } from "~~/store/index";
import { useToast } from "vue-toastification";
const toast = useToast();
const orderData = useOrderData();
const generalData = useGeneralData();
const orderInfo = orderData.orderData;
const recaptchaInstance = useReCaptcha();
const emit = defineEmits(["closeModal"]);
const modal = ref(null);
const localFormData = ref(null);
const rememberMe = ref(false);

const recaptcha = async () => {
  // optional you can await for the reCaptcha load
  await recaptchaInstance?.recaptchaLoaded();

  // get the token, a custom action could be added as argument to the method
  const token = await recaptchaInstance?.executeRecaptcha("yourActionHere");

  return token;
};

const onSubmit = async (values) => {
  console.log(values);
  console.log(rememberMe.value);
  if (rememberMe.value) {
    const localData = {
      phoneNumber: String(values.phoneNumber),
      email: String(values.email),
      userName: values.userName,
    };
    // storing form data locally
    storeLocally(localData);
  } else {
    if (nuxtStorage.localStorage.getData("formData")) {
      nuxtStorage.localStorage.removeItem("formData");
    }
  }
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
      phone_number: String(values.phoneNumber),
      email_address: String(values.email),
      additional_message: values.additionalMessage,
      full_name: values.userName,
    },
  });
  emitCloseEvent();
  if (response.status.value === "success") {
    // success toast
    toast.success("Order received, you'll be contacted by seller", {
      timeout: 4000,
    });
  } else {
    toast.error("Something went Wrong", {
      timeout: 3000,
    });
  }
};

const emitCloseEvent = () => {
  addScroll();
  emit("closeModal");
};

const removeScroll = () => {
  document.body.style.overflow = "hidden";
};
const storeLocally = (data) => {
  nuxtStorage.localStorage.setData("formData", data, 365, "d");
};

const addScroll = () => {
  document.body.style.overflow = "auto";
};
onMounted(() => {
  removeScroll();
  document.body.addEventListener("click", closeModal);
  // getting data from local storage
  const data = nuxtStorage.localStorage.getData("formData");
  if (data) {
    rememberMe.value = true;
    localFormData.value = data;
  }
});
onBeforeUnmount(() => {
  document.body.removeEventListener("click", closeModal);
});
const closeModal = (event) => {
  if (Array.from(event.target.classList).includes("h-screen")) {
    emit("closeModal");
  }
};
const validateEmail = (value) => {
  // if the field is empty
  if (!value) {
    return "This field is required";
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "This field must be a valid email";
  }
  // All is good
  return true;
};
const validatePhoneNumber = (value) => {
  // if the field is empty
  if (!value) {
    return "This field is required";
  }
  const regex = /^[0-9]{10}$/;
  if (!regex.test(value)) {
    return "This field must be a valid phone number";
  }
  return true;
};
const validateName = (value) => {
  if (!value) {
    return "This field is required";
  }
  if (value.length < 5) {
    return "This field must have a vaild full name";
  }
  return true;
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
