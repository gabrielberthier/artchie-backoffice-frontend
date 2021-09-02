<template>
  <div class="bg-border-radius"></div>
</template>

<style scoped>
.bg-border-radius {
  right: -50%;
  bottom: 0%;
  width: 100%;
  z-index: 1;
  height: 125%;
  transform: rotate(50deg);
  overflow: hidden;
  background-color: #0080c1;
  position: absolute;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 50px;
  /* background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, #0080C1 100%);
  background: -moz-linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, #0080C1 100%);
  background: -webkit-linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, #0080C1 100%); */
  background: hsla(22, 100%, 78%, 1);
  background: linear-gradient(
    90deg,
    hsla(22, 100%, 78%, 1) 0%,
    hsla(2, 78%, 62%, 1) 100%
  );
  background: -moz-linear-gradient(
    90deg,
    hsla(22, 100%, 78%, 1) 0%,
    hsla(2, 78%, 62%, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    hsla(22, 100%, 78%, 1) 0%,
    hsla(2, 78%, 62%, 1) 100%
  );
}
</style>
