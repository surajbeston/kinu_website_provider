<template>
  <div class="">
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
            <Map :location="website_info.location" />
          </div>
          <p
            :style="{ color: `var(--${generalData.paletteName}-text)` }"
            class="font-['Nexa'] font-bold text-base py-2"
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
                :style="{ color: `var(--${generalData.paletteName}-text)` }"
                class="font-['Poppins'] text-[35px] font-bold"
              >
                {{ website_info.seller.name }}
              </h1>
              <p
                :style="{ color: `var(--${generalData.paletteName}-text)` }"
                class="font-['Nexa'] font-bold text-[14px]"
              >
                Powered By
              </p>
              <a href="https://kinu.app/"
                ><img
                  src="~/assets/images/kinu_logo.png"
                  alt="kinu logo"
                  target="_blank"
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
                + 977 {{ website_info.primary_phone_number }}
              </p>
              <!-- <p
                class="font-['Nexa'] font-bold text-[16px]  py-2"
              >
                + 977 9812345678
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
                    :style="{ fill: `var(--${generalData.paletteName}-icon)` }"
                    class="cursor-pointer fill-[#0B121F]"
                    @click="openLink(website_info.facebook_link)"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6571 20.3648H25.3793L25.9637 16.5605H21.6563V14.4813C21.6563 12.901 22.1696 11.4996 23.6389 11.4996H26V8.17974C25.5852 8.12338 24.7078 8 23.05 8C19.5882 8 17.5587 9.8393 17.5587 14.0297V16.5605H14V20.3648H17.5587V30.821C18.2634 30.9276 18.9773 31 19.7101 31C20.3724 31 21.0189 30.9391 21.6571 30.8522V20.3648Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    :style="{ fill: `var(--${generalData.paletteName}-icon)` }"
                    class="cursor-pointer fill-[#0B121F]"
                    @click="openLink(website_info.twitter_link)"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6 14.9C29.9 15.2 29.1 15.4 28.3 15.5C29.1 15 29.8 14.2 30.1 13.3C29.3 13.8 28.5 14.1 27.5 14.3C26.8 13.5 25.7 13 24.6 13C22.4 13 20.6 14.8 20.6 17C20.6 17.3 20.6 17.6 20.7 17.9C17.4 17.7 14.4 16.1 12.4 13.7C12.1 14.3 11.9 15 11.9 15.7C11.9 17.1 12.6 18.3 13.7 19C13 19 12.4 18.8 11.9 18.5C11.9 20.4 13.3 22.1 15.1 22.4C14.8 22.5 14.4 22.5 14 22.5C13.7 22.5 13.5 22.5 13.2 22.4C13.7 24 15.2 25.2 17 25.2C15.6 26.3 13.9 26.9 12 26.9C11.7 26.9 11.4 26.9 11 26.8C12.8 27.9 14.9 28.6 17.2 28.6C24.6 28.6 28.6 22.5 28.6 17.2V16.7C29.4 16.4 30.1 15.7 30.6 14.9Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    :style="{ fill: `var(--${generalData.paletteName}-icon)` }"
                    class="cursor-pointer"
                    @click="openLink(website_info.instagram_link)"
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
const generalData = useGeneralData();
const website_info = ref({});
const userStore = useUserData();

website_info.value = userStore.sellerInfo;

const openLink = (link) => {
  window.open(link, "_blank");
};
</script>

<style scoped></style>
