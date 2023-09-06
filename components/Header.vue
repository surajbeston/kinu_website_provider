<template>
  <div>
    <!--  info  section -->
    <div class="bg-[color:var(--black)] py-3 hidden md:block">
      <div
        class="max-w-[1400px] w-[95%] mx-auto text-[color:var(--white)] flex justify-between items-center"
      >
        <div>
          <p
            v-show="sellerInfo.opening_time"
            class="text-[color:var(--gray-color-2)] text-[12px] font-semibold font-['Poppins']"
          >
            Sun-Sat :
            <span class="text-[color:var(--white)]"
              >{{ sellerInfo.opening_time }} -
              {{ sellerInfo.closing_time }}</span
            >
          </p>
        </div>
        <div>
          <p
            class="text-[color:var(--gray-color-2)] text-[12px] font-semibold font-['Poppins']"
          >
            Visit us {{ formattedLocation }}
            <span
              @click="scrollToBottom"
              class="text-[color:var(--white)] underline underline-offset-8 cursor-pointer pl-1"
              >Contact Us
            </span>
          </p>
        </div>
        <div class="flex items-center gap-6 text-[12px] font-semibold">
          <p>Call Us: {{ sellerInfo.seller.phone_number }}</p>
          <div class="flex gap-2 items-center">
            <!-- facebook logo -->
            
            <svg
              v-if="sellerInfo.facebook_link"
              @click="openLink(sellerInfo.facebook_link)"
              class="fill-white hover:fill-[#3b5998] cursor-pointer duration-300"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1056 2.27661H2.89472C2.55296 2.27661 2.27686 2.55272 2.27686 2.89447V17.1053C2.27686 17.4471 2.55296 17.7232 2.89472 17.7232H17.1056C17.4473 17.7232 17.7234 17.4471 17.7234 17.1053V2.89447C17.7234 2.55272 17.4473 2.27661 17.1056 2.27661ZM15.3215 6.78508H14.0877C13.1204 6.78508 12.9331 7.24462 12.9331 7.92041V9.40907H15.2423L14.9411 11.7396H12.9331V17.7232H10.5253V11.7415H8.51148V9.40907H10.5253V7.69064C10.5253 5.6961 11.7437 4.60905 13.5239 4.60905C14.3773 4.60905 15.1091 4.67276 15.3234 4.70173V6.78508H15.3215Z"
              />
            </svg>

            <!-- instagram logo -->

            <svg
              v-if="sellerInfo.instagram_link"
              @click="openLink(sellerInfo.instagram_link)"
              class="hover:fill-[#d62976] duration-300 cursor-pointer fill-white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 7.39658C8.5665 7.39658 7.39658 8.5665 7.39658 10.0001C7.39658 11.4337 8.5665 12.6036 10.0001 12.6036C11.4337 12.6036 12.6036 11.4337 12.6036 10.0001C12.6036 8.5665 11.4337 7.39658 10.0001 7.39658ZM17.8087 10.0001C17.8087 8.92197 17.8185 7.85361 17.7579 6.77744C17.6974 5.52744 17.4122 4.41806 16.4981 3.504C15.5821 2.58798 14.4747 2.30478 13.2247 2.24423C12.1466 2.18369 11.0782 2.19345 10.002 2.19345C8.92392 2.19345 7.85556 2.18369 6.77939 2.24423C5.52939 2.30478 4.42001 2.58994 3.50595 3.504C2.58994 4.42001 2.30673 5.52744 2.24619 6.77744C2.18564 7.85556 2.19541 8.92392 2.19541 10.0001C2.19541 11.0763 2.18564 12.1466 2.24619 13.2227C2.30673 14.4727 2.59189 15.5821 3.50595 16.4962C4.42197 17.4122 5.52939 17.6954 6.77939 17.7559C7.85752 17.8165 8.92587 17.8067 10.002 17.8067C11.0802 17.8067 12.1485 17.8165 13.2247 17.7559C14.4747 17.6954 15.5841 17.4102 16.4981 16.4962C17.4142 15.5802 17.6974 14.4727 17.7579 13.2227C17.8204 12.1466 17.8087 11.0782 17.8087 10.0001ZM10.0001 14.0059C7.7833 14.0059 5.99423 12.2169 5.99423 10.0001C5.99423 7.78329 7.7833 5.99423 10.0001 5.99423C12.2169 5.99423 14.006 7.78329 14.006 10.0001C14.006 12.2169 12.2169 14.0059 10.0001 14.0059ZM14.17 6.76572C13.6524 6.76572 13.2345 6.34775 13.2345 5.83017C13.2345 5.31259 13.6524 4.89462 14.17 4.89462C14.6876 4.89462 15.1056 5.31259 15.1056 5.83017C15.1057 5.95307 15.0816 6.0748 15.0347 6.18837C14.9877 6.30195 14.9188 6.40514 14.8319 6.49205C14.745 6.57895 14.6418 6.64786 14.5282 6.69482C14.4146 6.74178 14.2929 6.76587 14.17 6.76572Z"
              />
            </svg>
            <!-- tiktok logo -->
            <svg
              v-if="sellerInfo.tiktok_link"
              @click="openLink(sellerInfo.tiktok_link)"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              class="cursor-pointer group"
              height="20"
              viewBox="0,0,256,256"
              style="fill: #000000"
            >
              <g
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
              </g>
              <g
                fill="#ffffff"
                class="group-hover:!fill-[#ff0050] duration-300 fill-[#ffffff]"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path
                    d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.896,-2 -2,-2zM22.689,13.474c-0.13,0.012 -0.261,0.02 -0.393,0.02c-1.495,0 -2.809,-0.768 -3.574,-1.931c0,3.049 0,6.519 0,6.577c0,2.685 -2.177,4.861 -4.861,4.861c-2.684,-0.001 -4.861,-2.178 -4.861,-4.862c0,-2.685 2.177,-4.861 4.861,-4.861c0.102,0 0.201,0.009 0.3,0.015v2.396c-0.1,-0.012 -0.197,-0.03 -0.3,-0.03c-1.37,0 -2.481,1.111 -2.481,2.481c0,1.37 1.11,2.481 2.481,2.481c1.371,0 2.581,-1.08 2.581,-2.45c0,-0.055 0.024,-11.17 0.024,-11.17h2.289c0.215,2.047 1.868,3.663 3.934,3.811z"
                  ></path>
                </g>
              </g>
            </svg>
            <!-- youtube logo -->
            <svg
              v-if="sellerInfo.youtube_link"
              @click="openLink(sellerInfo.youtube_link)"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              class="cursor-pointer group"
              viewBox="0,0,256,256"
              style="fill: #000000"
            >
              <g transform="">
                <g
                  fill="#000000"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                </g>
                <g
                  class="group-hover:!fill-[#c4302b] duration-300 fill-[#ffffff]"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path
                      d="M12,4c0,0 -6.25445,-0.00003 -7.81445,0.41797c-0.861,0.23 -1.53758,0.90758 -1.76758,1.76758c-0.418,1.56 -0.41797,5.81445 -0.41797,5.81445c0,0 -0.00003,4.25445 0.41797,5.81445c0.23,0.861 0.90758,1.53758 1.76758,1.76758c1.56,0.418 7.81445,0.41797 7.81445,0.41797c0,0 6.25445,0.00003 7.81445,-0.41797c0.86,-0.23 1.53758,-0.90758 1.76758,-1.76758c0.418,-1.56 0.41797,-5.81445 0.41797,-5.81445c0,0 0.00003,-4.25445 -0.41797,-5.81445c-0.23,-0.86 -0.90758,-1.53758 -1.76758,-1.76758c-1.56,-0.418 -7.81445,-0.41797 -7.81445,-0.41797zM12,6c2.882,0 6.49087,0.13361 7.29688,0.34961c0.169,0.045 0.30752,0.18352 0.35352,0.35352c0.241,0.898 0.34961,3.63888 0.34961,5.29688c0,1.658 -0.10861,4.39787 -0.34961,5.29688c-0.045,0.169 -0.18352,0.30752 -0.35352,0.35352c-0.805,0.216 -4.41488,0.34961 -7.29687,0.34961c-2.881,0 -6.48987,-0.13361 -7.29687,-0.34961c-0.169,-0.045 -0.30752,-0.18352 -0.35352,-0.35352c-0.241,-0.898 -0.34961,-3.63888 -0.34961,-5.29687c0,-1.658 0.10861,-4.39883 0.34961,-5.29883c0.045,-0.168 0.18352,-0.30656 0.35352,-0.35156c0.805,-0.216 4.41488,-0.34961 7.29688,-0.34961zM10,8.53516v6.92969l6,-3.46484z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- links section -->
    <div
      :style="{ backgroundColor: `var(--${generalData.paletteName}-bg)` }"
      class="shadow-md border-b py-4 md:py-2"
    >
      <div
        class="max-w-[1400px] w-[95%] mx-auto flex justify-between items-center"
      >
        <NuxtLink to="/" no-prefetch>
          <div
            class="w-[70px] h-[20px] md:h-[40px] md:max-w-[133px] cursor-pointer"
          >
            <nuxt-img
              :src="`${apiAuthority}${sellerInfo.icon}`"
              class="w-full h-full object-contain"
              alt="logo"
            />
          </div>
        </NuxtLink>

        <p
          :style="{ color: `var(--${generalData.paletteName}-text)` }"
          class="text-[13px] md:text-[24px] font-semibold"
        >
          {{ sellerInfo.seller.name }}
        </p>
        <p class="hidden md:block"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";
import { useGeneralData } from "~/store/index";
import { locationFormatter } from "~/utils/constant";
const generalData = useGeneralData();
const { sellerInfo } = useUserData();
const formattedLocation = ref("");

// formatting location
if (generalData.location) {
  formattedLocation.value = locationFormatter(generalData.location);
}
const openLink = (link) => {
  window.open(link, "_blank");
};
const scrollToBottom = () => {
  window.scrollTo(0, document.body.scrollHeight);
};
</script>

<style scoped></style>
