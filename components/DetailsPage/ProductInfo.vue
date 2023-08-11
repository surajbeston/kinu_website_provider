<template>
  <div class="w-full md:w-[50%]">
    <h1
      class="text-[25px] md:text-[47px] text-black font-normal font-['Poppins']"
    >
      {{ product.name }}
    </h1>
    <h3
      class="text-[color:var(--gray-color-1)] text-[15px] md:text-[27px] font-medium font-['Poppins']"
    >
      Rs.{{ product.price }}.00
    </h3>
    <div class="flex gap-6 items-center py-2">
      <div class="flex gap-1">
        <Star v-for="each in 5" :isFilled="true" />
      </div>
      <p
        class="border-l-2 pl-8 text-[8px] md:text-[14px] text-[color:var(--gray-color-1)]"
      >
        5 customers reviews
      </p>
    </div>
    <div
      v-html="product.description_html"
      class="my-3 font-['Nexa'] font-normal text-black desc"
    ></div>
    <!-- <p class="py-2 text-[10px] md:text-lg font-['Nexa'] font-normal text-black">
      The best selling Planet Boxy Tee is a one size, season-less, staple piece
      for any wardrobe! The beloved Pima Cotton washes and wears well making
      this a great investment piece that feels as good as it looks.
    </p> -->
    <div class="py-4">
      <p
        class="font-['Poppins'] text-[color:var(--gray-color-1)] font-normal text-[10px] md:text-base pb-2"
      >
        Size
      </p>
      <div class="flex flex-wrap gap-4 md:gap-8">
        <DetailsPageSizeVarient
          @click="handleSizeSelect(index)"
          class="cursor-pointer"
          v-for="(size, index) in sizeVarients"
          :size="size"
        />
      </div>
    </div>
    <div class="py-3">
      <p
        class="font-['Poppins'] text-[color:var(--gray-color-1)] font-normal text-[10px] md:text-base pb-2"
      >
        Color
      </p>
      <div class="flex gap-4">
        <DetailsPageColorVarient
          @click="handleColorSelect(index)"
          class="cursor-pointer"
          v-for="(color, index) in colorVarients"
          :color="color"
        />
      </div>
    </div>
    <div class="flex items-center gap-8 pb-10 pt-4">
      <div
        class="flex border bg-[color:var(--white)] w-max px-4 rounded-[11px] py-2"
      >
        <p
          @click="decrementNumberOfProduct"
          class="text-2xl cursor-pointer prevent-select"
        >
          -
        </p>
        <input
          v-model="numberOfProduct"
          class="border-none outline-none px-4 max-w-[60px] text-center text-lg font-medium font-['Poppins'] prevent-select"
          type="number"
          inputmode="numeric"
        />
        <p
          @click="incrementNumberOfProduct"
          class="text-2xl cursor-pointer prevent-select"
        >
          +
        </p>
      </div>
      <button
        @click="handleBuyNow"
        class="bg-[color:var(--yellow-color)] px-10 text-[12px] md:text-[20px] py-3 text-[color:var(--white-color-1)] font-['Nexa'] font-bold rounded-2xl"
      >
        Order Now
      </button>
    </div>
    <div class="border-t pt-10 border-[#D9D9D9]">
      <div
        class="flex gap-4 text-[color:var(--gray-color-1)] text-[10px] md:text-lg font-normal font-['Nexa'] my-1"
      >
        <p class="w-[100px]">SKU</p>
        <p class="">:</p>
        <p class="">SS001</p>
      </div>
      <div
        class="flex gap-4 text-[color:var(--gray-color-1)] text-[10px] md:text-lg font-normal font-['Nexa'] my-1"
      >
        <p class="w-[100px]">Category</p>
        <p class="">:</p>
        <p class="">{{ product.category.name }}</p>
      </div>
      <div
        class="flex gap-4 text-[color:var(--gray-color-1)] text-[10px] md:text-lg font-normal font-['Nexa'] my-1"
      >
        <p class="w-[100px]">Tags</p>
        <p class="">:</p>
        <p class="">chino, pant, men’s, trending</p>
      </div>
      <div
        class="flex gap-4 text-[color:var(--gray-color-1)] text-[10px] md:text-lg font-normal font-['Nexa'] my-1"
      >
        <p class="w-[100px]">Share</p>
        <p class="">:</p>
        <div class="flex gap-4 md:gap-8 items-center">
          <!-- facebook -->
          <svg
            class="cursor-pointer fill-black :hover:fill-green-500 w-[15px] h-[15px] md:w-[22px] md:h-[22px]"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_62_759)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 11.8146C0 17.2631 3.96242 21.7936 9.14474 22.7124V14.7973H6.40132V11.7535H9.14474V9.31784C9.14474 6.57812 10.9124 5.05666 13.4126 5.05666C14.2045 5.05666 15.0587 5.17812 15.8506 5.29958V8.10049H14.4487C13.1072 8.10049 12.8026 8.7699 12.8026 9.62287V11.7535H15.729L15.2415 14.7973H12.8026V22.7124C17.985 21.7936 21.9474 17.264 21.9474 11.8146C21.9474 5.75346 17.0092 0.794556 10.9737 0.794556C4.93816 0.794556 0 5.75346 0 11.8146Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_759">
                <rect
                  width="21.9474"
                  height="21.9178"
                  fill="white"
                  transform="translate(0 0.794434)"
                />
              </clipPath>
            </defs>
          </svg>
          <!-- linkedin -->
          <svg
            class="cursor-pointer w-[15px] h-[15px] md:w-[22px] md:h-[22px]"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.2959 3.38618C1.2959 2.94101 1.47298 2.51406 1.78819 2.19928C2.10341 1.88449 2.53093 1.70764 2.9767 1.70764H19.7317C19.9526 1.70728 20.1714 1.75044 20.3756 1.83465C20.5798 1.91885 20.7654 2.04245 20.9217 2.19836C21.078 2.35428 21.2019 2.53945 21.2865 2.74327C21.371 2.94709 21.4145 3.16557 21.4143 3.38618V20.1186C21.4146 20.3393 21.3713 20.5578 21.2868 20.7617C21.2024 20.9656 21.0786 21.1509 20.9224 21.307C20.7662 21.4631 20.5807 21.5869 20.3765 21.6713C20.1724 21.7557 19.9536 21.7991 19.7326 21.799H2.9767C2.7559 21.799 2.53726 21.7555 2.33328 21.6711C2.12929 21.5867 1.94396 21.463 1.78787 21.307C1.63178 21.1511 1.50799 20.9659 1.42358 20.7621C1.33917 20.5584 1.29578 20.34 1.2959 20.1195V3.38618ZM9.25914 9.36792H11.9834V10.7341C12.3766 9.94874 13.3825 9.24189 14.8941 9.24189C17.7921 9.24189 18.4789 10.8063 18.4789 13.6766V18.9935H15.5462V14.3305C15.5462 12.6958 15.1529 11.7734 14.1543 11.7734C12.7689 11.7734 12.1928 12.7679 12.1928 14.3305V18.9935H9.25914V9.36792ZM4.22953 18.8684H7.16317V9.24189H4.22953V18.8675V18.8684ZM7.58291 6.10216C7.58844 6.35301 7.54375 6.60243 7.45145 6.83579C7.35915 7.06914 7.2211 7.28174 7.04541 7.4611C6.86972 7.64046 6.65993 7.78296 6.42835 7.88025C6.19676 7.97754 5.94805 8.02766 5.69681 8.02766C5.44557 8.02766 5.19685 7.97754 4.96527 7.88025C4.73368 7.78296 4.52389 7.64046 4.3482 7.4611C4.17251 7.28174 4.03447 7.06914 3.94217 6.83579C3.84987 6.60243 3.80517 6.35301 3.8107 6.10216C3.82156 5.60979 4.02504 5.14124 4.37757 4.79686C4.7301 4.45247 5.20365 4.25962 5.69681 4.25962C6.18996 4.25962 6.66351 4.45247 7.01604 4.79686C7.36857 5.14124 7.57205 5.60979 7.58291 6.10216Z"
              fill="black"
            />
          </svg>
          <!-- twitter -->
          <svg
            class="cursor-pointer w-[18px] h-[18px] md:w-[26px] md:h-[26px]"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2847 2.31506C7.65655 2.31506 2.28223 7.68214 2.28223 14.3014C2.28223 20.9206 7.65655 26.2877 14.2847 26.2877C20.9129 26.2877 26.2872 20.9206 26.2872 14.3014C26.2872 7.68214 20.9129 2.31506 14.2847 2.31506ZM20.0529 11.3503C20.0609 11.476 20.0609 11.6071 20.0609 11.7355C20.0609 15.6632 17.0656 20.1875 11.5922 20.1875C9.90434 20.1875 8.33973 19.6979 7.0216 18.8551C7.26272 18.8818 7.49312 18.8925 7.7396 18.8925C9.13275 18.8925 10.4134 18.4217 11.4341 17.6244C10.1267 17.5976 9.02826 16.7414 8.65318 15.5642C9.11131 15.6311 9.5239 15.6311 9.99543 15.5107C9.32223 15.3741 8.71715 15.009 8.28297 14.4774C7.8488 13.9457 7.61231 13.2804 7.61368 12.5944V12.5569C8.00752 12.779 8.471 12.9154 8.95593 12.9342C8.54828 12.6629 8.21396 12.2953 7.98263 11.8641C7.7513 11.4328 7.63009 10.9512 7.62976 10.462C7.62976 9.90817 7.77443 9.4025 8.03431 8.96372C8.78152 9.88232 9.71393 10.6336 10.7709 11.1688C11.8279 11.7039 12.9859 12.011 14.1695 12.07C13.7489 10.05 15.2599 8.41523 17.0764 8.41523C17.9337 8.41523 18.7053 8.77375 19.2491 9.35166C19.9216 9.22592 20.5646 8.97442 21.1379 8.6373C20.9155 9.32491 20.4494 9.9055 19.8305 10.272C20.4306 10.2078 21.0093 10.0419 21.5451 9.80918C21.1406 10.4031 20.6342 10.9302 20.0529 11.3503Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderData } from "~~/store/order";
import { useUserData } from "~~/store/userData";
const orderData = useOrderData();
const userData = useUserData();

const numberOfProduct = ref(1);

const props = defineProps({
  product: Object,
});
const emit = defineEmits(["openModal"]);

const sizeVarients = ref([
  { size: "S", isSelected: false },
  { size: "M", isSelected: true },
  { size: "L", isSelected: false },
  { size: "XL", isSelected: false },
  { size: "XXL", isSelected: false },
]);
const handleBuyNow = () => {
  emit("openModal");

  orderData.setOrderData({
    productName: props.product.name,
    numberOfProduct: numberOfProduct.value,
    pricePerProduct: props.product.price,
    productId: props.product.id,
    website_info: userData.sellerInfo.id,
    totalAmount: props.product.price * numberOfProduct.value,
  });
};
const colorVarients = ref([
  {
    bgColor: props.product.producttype_set[0].extras
      ? props.product.producttype_set[0].extras.color
      : "",
    isSelected: true,
  },
  // {
  //   bgColor: "#000000",
  //   isSelected: false,
  // },
  // {
  //   bgColor: "#CDBA7B",
  //   isSelected: false,
  // },
]);

const decrementNumberOfProduct = () => {
  if (numberOfProduct.value > 1) {
    numberOfProduct.value--;
  }
};
const incrementNumberOfProduct = () => {
  if (numberOfProduct.value < 100) {
    numberOfProduct.value++;
  }
};

const handleSizeSelect = (index) => {
  sizeVarients.value.forEach((size, i) => {
    sizeVarients.value[i].isSelected = i === index;
  });
};

const handleColorSelect = (index) => {
  colorVarients.value.forEach((color, i) => {
    colorVarients.value[i].isSelected = i === index;
  });
};
</script>

<style scoped>
/* Remove arrows from the number input */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
.prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
.desc h1 {
  font-size: 30px;
  padding: 0.3rem 0;
}
.desc ul li {
  font-size: 16px;
}
</style>
