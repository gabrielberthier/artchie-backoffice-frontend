<template>
  <div class="container__content">
    <h1 class="text-h4 ellipsis">{{ museumName }}</h1>

    <div class="ellipsis text-subtitle1">{{ museumInfo }}</div>

    <p class="text-description">
      {{ museumDescription }}
    </p>

    <div class="date-museum">Inclusão: 25/04/2021</div>
  </div>
</template>

<script>
export default {
  props: {
    museumName: {
      type: String,
    },
    museumEmail: {
      type: String,
    },
    museumInfo: {
      type: String,
      default: "",
    },
    museumDescription: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 1.5rem;
  margin: 15px 0;
  line-height: 4rem;
  font-weight: 600;
}

.container__content {
  /* Take the remaining width */
  flex: 1;
  padding: 0px 17px;
  z-index: 3;
  min-width: 350px;
}

.container__content .text-description {
  font-size: 1rem;
  color: #444;
  font-weight: 300;
  margin: 20px 0;
  text-align: justify;
  text-justify: inter-word;
}

.date-museum {
  color: #333;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 15px;
}

@media only screen and (max-width: 600px) {
  .container__content {
    background-color: #f3f3f3;
    border-radius: 15px;
    margin-top: -15px;
    text-align: justify;
    min-width: initial;
  }
}
</style>
