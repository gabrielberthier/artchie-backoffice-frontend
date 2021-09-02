<template>
  <!-- Media object -->
  <div class="container__media">
    <div class="avatar">
      <!-- Avatar image -->
      <!-- <svg
        viewBox="0 0 24 24"
        style="
          fill: none;
          height: 100%;
          stroke: rgb(255, 255, 255);
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1;
          width: 100%;
        "
      >
        <path
          d="M12,3.5c2.347,0,4.25,1.903,4.25,4.25S14.347,12,12,12s-4.25-1.903-4.25-4.25S9.653,3.5,12,3.5z
                    M5,20.5
                    c0-3.866,3.134-7,7-7s7,3.134,7,7H5z"
        ></path>
      </svg> -->
      <img
        src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-museum-icon-for-personal-and-commercial-use-png-image_4341930.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped>
.container__media {
  margin: 15px auto;
  /* Set the width for the media object */
  min-width: 200px;
  width: 15%;
  padding: 30px;
  z-index: 3;
}

.container__media img {
  height: 100%;
  max-width: 100%;
  z-index: 2;
}

.avatar {
  /* Rounded border */
  border-radius: 50%;
  height: 124px;
  width: 124px;
  background-color: #777;

  margin: 0 auto;
  overflow: hidden;
}

.avatar__image {
  /* Rounded border */
  border-radius: 50%;
  /* Take full size */
  height: 100%;
  width: 100%;
}

/* circles */

.top-circle,
.bottom-circle {
  height: 45px;
  width: 90px;
}

.right,
.left {
  height: 90px;
  width: 45px;
}

.top {
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
}

.right {
  border-bottom-right-radius: 90px;
  border-top-right-radius: 90px;
}

.bottom {
  border-bottom-left-radius: 90px;
  border-bottom-right-radius: 90px;
}
</style>
