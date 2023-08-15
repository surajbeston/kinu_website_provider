<template>
  <div>
    <div class="max-w-[1400px] w-[90%] md:w-[95%] mx-auto border-t py-6">
      <div class="flex flex-col md:flex-row gap-10 items-center">
        <div class="w-[95%] mx-auto md:w-[40%]">
          <p
            :style="{ color: `var(--${generalData.paletteName}-text)` }"
            class="py-2 font-['Nexa'] text-base font-semibold"
          >
            Our Shop
          </p>
          <div class="md:w-[344px] w-full h-[256px] relative">
            <!-- <MapDisplay address="Dharan Nepal" /> -->
            <Map
              :lat="generalData.location.latitude"
              :lon="generalData.location.longitude"
            />
          </div>
          <p
            :style="{ color: `var(--${generalData.paletteName}-text)` }"
            class="font-['Nexa'] font-bold text-base py-2"
          >
            {{ formattedLocation }}
          </p>
        </div>
        <div class="w-full md:w-[60%]">
          <div
            class="flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center"
          >
            <div class="hidden md:block">
              <h1
                :style="{ color: `var(--${generalData.paletteName}-text)` }"
                class="font-['Poppins'] text-[35px] font-bold"
              >
                {{ sellerInfo.seller.name }}
              </h1>
              <p
                :style="{ color: `var(--${generalData.paletteName}-text)` }"
                class="font-['Nexa'] font-bold text-[14px]"
              >
                Powered By
              </p>
              <a href="https://kinu.app/" target="_blank"
                ><img src="~/assets/images/kinu_logo.png" alt="kinu logo"
              /></a>
            </div>
            <div>
              <p
                :style="{ color: `var(--${generalData.paletteName}-text)` }"
                class="font-['Nexa'] font-bold text-[16px] py-1"
              >
                Call Us
              </p>
              <p
                :style="{ color: `var(--${generalData.paletteName}-text)` }"
                class="font-['Nexa'] font-bold text-[16px] py-2"
              >
                + 977 {{ sellerInfo.seller.phone_number }}
              </p>
              <!-- <p
                v-if="sellerInfo.alternate_phone_number"
                class="font-['Nexa'] font-bold text-[16px] py-2"
              >
                + 977 {{ sellerInfo.alternate_phone_number }}
              </p> -->
            </div>
            <div>
              <p
                :style="{ color: `var(--${generalData.paletteName}-text)` }"
                class="font-['Nexa'] font-bold text-[16px] py-2"
              >
                Connect with us
              </p>
              <ul class="flex items-center gap-3">
                <li>
                  <svg
                    :style="{ fill: `var(--${generalData.paletteName}-text)` }"
                    class="cursor-pointer hover:!fill-[#3b5998] duration-300"
                    @click="openLink(sellerInfo.facebook_link)"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="23"
                    height="23"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M 16 4 C 9.3844276 4 4 9.3844276 4 16 C 4 22.615572 9.3844276 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844276 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.027386 22.311682 25.161277 17.488281 25.878906 L 17.488281 18.916016 L 20.335938 18.916016 L 20.783203 16.023438 L 17.488281 16.023438 L 17.488281 14.443359 C 17.488281 13.242359 17.882859 12.175781 19.005859 12.175781 L 20.810547 12.175781 L 20.810547 9.6523438 C 20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625 C 15.906688 9.515625 14.355469 10.913609 14.355469 14.099609 L 14.355469 16.023438 L 11.632812 16.023438 L 11.632812 18.916016 L 14.355469 18.916016 L 14.355469 25.853516 C 9.6088556 25.070647 6 20.973047 6 16 C 6 10.465308 10.465308 6 16 6 z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    :style="{ fill: `var(--${generalData.paletteName}-text)` }"
                    class="cursor-pointer hover:!fill-[#d62976] duration-300"
                    @click="openLink(sellerInfo.instagram_link)"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                  >
                    <path
                      d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <!-- tiktok logo -->
                  <svg
                    @click="openLink(sellerInfo.tiktok_link)"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    class="cursor-pointer group"
                    height="20"
                    viewBox="0,0,256,256"
                    :style="{ fill: `var(--${generalData.paletteName}-bg)` }"
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
                      :style="{
                        fill: `var(--${generalData.paletteName}-text)`,
                      }"
                      class="group-hover:!fill-[#ff0050] duration-300"
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
                </li>
                <li>
                  <!-- youtube logo -->
                  <svg
                    @click="openLink(sellerInfo.youtube_link)"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    class="cursor-pointer group"
                    viewBox="0,0,256,256"
                    :style="{ fill: `var(--${generalData.paletteName}-bg)` }"
                  >
                    <g transform="">
                      <g
                        :style="{
                          fill: `var(--${generalData.paletteName}-bg)`,
                        }"
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
                        :style="{
                          fill: `var(--${generalData.paletteName}-text)`,
                        }"
                        class="group-hover:!fill-[#c4302b] duration-300"
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
                </li>
              </ul>
            </div>
          </div>
          <ul
            class="flex gap-14 items-center justify-center md:justify-start border-t pt-4 mt-10"
          >
            <li>
              <a
                :style="{ color: `var(--${generalData.paletteName}-text)` }"
                class="underline underline-offset-4 font-['Nexa'] font-bold text-base"
                href=""
                >Privacy policy</a
              >
            </li>
            <li>
              <a
                :style="{ color: `var(--${generalData.paletteName}-text)` }"
                class="underline underline-offset-4 font-['Nexa'] font-bold text-base"
                href=""
                >Terms of use</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center pt-8 md:pt-auto md:justify-end">
        <p
          :style="{ color: `var(--${generalData.paletteName}-text)` }"
          class="font-['Nexa'] font-bold text-[14px]"
        >
          &copy Copyright All rights reserved
        </p>
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
// formatting location
const formattedLocation = locationFormatter(generalData.location);

const openLink = (link) => {
  window.open(link, "_blank");
};
</script>

<style scoped></style>
