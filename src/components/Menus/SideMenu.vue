<template>
  <q-scroll-area
    style="
      height: calc(100% - 150px);
      margin-top: 150px;
      border-right: 1px solid #ddd;
    "
  >
    <q-list padding>
      <router-link to="/" class="link-unstyled">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon class="" name="o_home" />
          </q-item-section>

          <q-item-section> Home </q-item-section>
        </q-item>
      </router-link>

      <router-link to="/museums" class="link-unstyled">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon class="" name="o_museum" />
          </q-item-section>

          <q-item-section> Museums </q-item-section>
        </q-item>
      </router-link>

      <sub-menu></sub-menu>

      <q-item active clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="star" />
        </q-item-section>

        <q-item-section> Star </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section> Send </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="drafts" />
        </q-item-section>

        <q-item-section> Drafts </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>

  <user-image-menu />
</template>

<script>
import { ref } from "vue";
import SubMenu from "./Submenus/SubMenu.vue";
import UserImageMenu from "./UserImage/UserImageMenu.vue";

export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
  components: {
    SubMenu,
    UserImageMenu,
  },
};
</script>

<style lang="scss" scoped>
.blurred-image::v-deep .q-img__image {
  filter: blur(1px);
}

.link-unstyled {
  text-decoration: none;
  color: inherit;
  color: rgba($color: #000000, $alpha: 0.7);
}
</style>
