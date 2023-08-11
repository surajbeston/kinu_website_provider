<template>
  <div class="bg-[color:var(--white)] py-6">
    <div class="max-w-[1400px] w-[90%] md:w-[95%] mx-auto">
      <div class="flex flex-col md:flex-row gap-10 items-center">
        <div class="w-[95%] mx-auto md:w-[40%]">
          <p
            class="py-2 text-base font-semibold text-[color:var(--gray-color-2)]"
          >
            Our Shop
          </p>
          <div class="md:w-[344px] w-full h-[256px] relative">
            <!-- <MapDisplay address="Dharan Nepal" /> -->
            <Map :location="website_info.location" />
          </div>
          <p
            class="font-['Nexa'] font-bold text-base text-[color:var(--gray-color-2)] py-2"
          >
            {{ website_info.location }}
          </p>
        </div>
        <div class="w-full md:w-[60%]">
          <div
            class="flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center"
          >
            <div class="hidden md:block">
              <h1
                class="font-['Poppins'] text-[35px] font-bold text-[color:var(--gray-color-2)]"
              >
                {{ website_info.seller.name }}
              </h1>
              <p
                class="font-['Nexa'] font-bold text-[color:var(--gray-color-2)] text-[14px]"
              >
                Powered By
              </p>
              <svg
                width="85"
                height="41"
                viewBox="0 0 85 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="0.95166"
                  y="0.42749"
                  width="83.7803"
                  height="39.6013"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_167_4039"
                      transform="matrix(0.0094536 0 0 0.02 -0.152248 0)"
                    />
                  </pattern>
                  <image
                    id="image0_167_4039"
                    width="133"
                    height="50"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <div>
              <p
                class="font-['Nexa'] font-bold text-[16px] text-[color:var(--gray-color-2)] py-1"
              >
                Call Us
              </p>
              <p
                class="font-['Nexa'] font-bold text-[16px] text-[color:var(--gray-color-2)] py-2"
              >
                + 977 {{ website_info.primary_phone_number }}
              </p>
              <!-- <p
                class="font-['Nexa'] font-bold text-[16px] text-[color:var(--gray-color-2)] py-2"
              >
                + 977 9812345678
              </p> -->
            </div>
            <div>
              <p
                class="font-['Nexa'] font-bold text-[16px] text-[color:var(--gray-color-2)] py-2"
              >
                Connect with us
              </p>
              <ul class="flex gap-3">
                <li>
                  <svg
                    class="cursor-pointer"
                    @click="openLink(website_info.facebook_link)"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6571 20.3648H25.3793L25.9637 16.5605H21.6563V14.4813C21.6563 12.901 22.1696 11.4996 23.6389 11.4996H26V8.17974C25.5852 8.12338 24.7078 8 23.05 8C19.5882 8 17.5587 9.8393 17.5587 14.0297V16.5605H14V20.3648H17.5587V30.821C18.2634 30.9276 18.9773 31 19.7101 31C20.3724 31 21.0189 30.9391 21.6571 30.8522V20.3648Z"
                      fill="#0B121F"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    class="cursor-pointer"
                    @click="website_info.instagram_link"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6 14.9C29.9 15.2 29.1 15.4 28.3 15.5C29.1 15 29.8 14.2 30.1 13.3C29.3 13.8 28.5 14.1 27.5 14.3C26.8 13.5 25.7 13 24.6 13C22.4 13 20.6 14.8 20.6 17C20.6 17.3 20.6 17.6 20.7 17.9C17.4 17.7 14.4 16.1 12.4 13.7C12.1 14.3 11.9 15 11.9 15.7C11.9 17.1 12.6 18.3 13.7 19C13 19 12.4 18.8 11.9 18.5C11.9 20.4 13.3 22.1 15.1 22.4C14.8 22.5 14.4 22.5 14 22.5C13.7 22.5 13.5 22.5 13.2 22.4C13.7 24 15.2 25.2 17 25.2C15.6 26.3 13.9 26.9 12 26.9C11.7 26.9 11.4 26.9 11 26.8C12.8 27.9 14.9 28.6 17.2 28.6C24.6 28.6 28.6 22.5 28.6 17.2V16.7C29.4 16.4 30.1 15.7 30.6 14.9Z"
                      fill="#0B121F"
                    />
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
                class="underline underline-offset-4 font-['Nexa'] font-bold text-base text-[color:var(--gray-color-2)]"
                href=""
                >Privacy policy</a
              >
            </li>
            <li>
              <a
                class="underline underline-offset-4 font-['Nexa'] font-bold text-base text-[color:var(--gray-color-2)]"
                href=""
                >Terms of use</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center pt-8 md:pt-auto md:justify-end">
        <p
          class="font-['Nexa'] font-bold text-[14px] text-[color:var(--gray-color-2)]"
        >
          &copy Copyright All rights reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserData } from "~~/store/userData";

const website_info = ref({});
const userStore = useUserData();
const map = ref(null);

website_info.value = userStore.sellerInfo;

const openLink = (link) => {
  window.open(link, "_blank");
};
</script>

<style scoped></style>
