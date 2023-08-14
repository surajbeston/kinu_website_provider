<template>
  <div
    :style="{ backgroundColor: `var(--${palette}-light)` }"
    class="bg-[color:var(--white)] h-min px-3 md:px-6 pt-6 pb-6 max-w-[150px] md:max-w-[268px] w-full rounded-[10px]"
  >
    <!-- <div class="my-1">
      <p
        class="flex gap-1 items-center text-[7.5px] md:text-[12px] font-['Nexa'] font-normal text-[color:var(--green)]"
      >
        <svg
          class="w-[8px] h-[8px] md:w-[11px] md:h-[11px]"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5.83569" cy="6.13049" r="5.71899" fill="#78A962" />
          <path
            d="M8.12354 4.98669L5.24578 8.41809L3.54834 6.44908"
            stroke="white"
            stroke-width="1.1438"
            stroke-linecap="round"
          />
        </svg>
        in stock
      </p>
      <p
        class="hidden gap-1 items-center text-[12px] font-normal text-[color:var(--red-2)]"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5.47617" cy="5.93552" r="4.97519" fill="#C94D3F" />
          <path
            d="M6.15006 6.78761L6.49833 6.43935C6.54523 6.39302 6.60458 6.36131 6.66916 6.34806C6.73374 6.33482 6.80078 6.3406 6.86214 6.36472L7.28658 6.53419C7.34859 6.55935 7.40175 6.60231 7.43938 6.65765C7.47701 6.71298 7.49742 6.77822 7.49803 6.84514V7.62251C7.49767 7.66803 7.4881 7.71301 7.4699 7.75473C7.4517 7.79645 7.42524 7.83406 7.39212 7.86529C7.359 7.89652 7.31991 7.92073 7.27719 7.93645C7.23447 7.95217 7.18901 7.95909 7.14355 7.95678C4.16931 7.77177 3.56918 5.25307 3.45568 4.28913C3.45042 4.24179 3.45523 4.19388 3.46981 4.14854C3.48439 4.10319 3.5084 4.06145 3.54027 4.02606C3.57214 3.99066 3.61115 3.96242 3.65472 3.94318C3.69829 3.92394 3.74544 3.91414 3.79306 3.91444H4.54401C4.61102 3.91463 4.67644 3.93487 4.73185 3.97256C4.78726 4.01024 4.83014 4.06363 4.85496 4.12588L5.02442 4.55033C5.04934 4.61144 5.0557 4.67854 5.0427 4.74324C5.0297 4.80795 4.99793 4.86739 4.95135 4.91414L4.60309 5.2624C4.60309 5.2624 4.80365 6.6197 6.15006 6.78761Z"
            fill="white"
          />
        </svg>
        check availability
      </p>
    </div> -->
    <div class="md:h-[171px] h-[100px] relative cursor-pointer">
      <img
        class="max-w-full max-h-full h-full w-full object-cover"
        :src="`https://api.kinu.app${product.image_set[0].image}`"
        alt="product image"
      />
      <!-- <img
        class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        src="~assets/icons/play_button.svg"
        alt="play"
      /> -->
    </div>
    <!-- <div class="flex gap-3 items-center mb-2 mt-2">
      <div class="flex gap-[0.08rem]">
        <Star
          v-for="review in reviews"
          :is-filled="review == 5 ? false : true"
        />
      </div>
      <p
        :style="{ color: `var(--${palette}-gray-text)` }"
        class="text-[8px] md:text-[14px] font-normal text-[color:var(--gray-color-4)]"
      >
        Reviews(4)
      </p>
    </div> -->
    <h3
      class="text-[color:var(--black-3)] text-[12px] md:text-[18px] min-h-[60px] font-normal mt-1 mb-2 text-ellipsis overflow-hidden line-clamp-2"
    >
      {{ product.name }}
    </h3>
    <div class="flex justify-between items-center mt-3">
      <div>
        <p
          class="text-[#666666] text-[8px] md:text-[14px] font-normal line-through"
        >
          Rs {{ product.price + (discountPercent / 100) * product.price }}
        </p>
        <p
          class="text-[color:var(--black-3)] text-[12px] md:text-[18px] font-semibold"
        >
          Rs {{ product.price }}
        </p>
      </div>
      <button
        style="
          box-shadow: 0px 3.763843297958374px 21.642099380493164px 0px
            rgba(255, 108, 25, 0.25);
        "
        class="bg-[color:var(--yellow-color)] px-[10px] md:px-[20px] duration-200 hover:scale-[1.02] py-2 text-[color:var(--white)] text-[8px] md:text-[12px] font-semibold tracking-wider rounded-[3px]"
      >
        View Details
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
  palette: String,
});
const discountPercent = 20;
const reviews = 5;
</script>

<style scoped></style>
