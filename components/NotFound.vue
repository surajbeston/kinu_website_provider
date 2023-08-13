<template>
  <div>
    <div class="container mx-auto">
      <div class="text-404">
        <b>404</b>
      </div>
      <div class="text">
        <b> PAGE NOT FOUND </b>
      </div>
      <div class="text-center mt-16">
        <a href="https://kinu.app/"
          ><button
            name="login"
            class="bg-[color:var(--yellow-color)] text-white font-['Poppins'] text-lg font-semibold hover:shadow-lg hover:scale-[1.01] duration-300 px-10 pt-[16px] pb-4 rounded-lg"
          >
            Create your own website
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.text-404 {
  margin-top: 80px;
  font-size: 200px;
  line-height: 200px;
  text-align: center;
  letter-spacing: 5px;
  background: -webkit-linear-gradient(#ff2525, #ffe53b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.text {
  text-align: center;
  font-size: 25px;
  color: #141829;
  letter-spacing: 5px;
  margin-top: 20px;
}

@media screen and (max-width: 500px) {
  .text-404 {
    font-size: 150px;
  }
}

@media screen and (max-width: 345px) {
  .text-404 {
    font-size: 120px;
  }
}
</style>
