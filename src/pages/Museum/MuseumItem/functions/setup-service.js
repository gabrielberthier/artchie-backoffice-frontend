import { MuseumApiService } from "src/services/api";
import { useQuasar } from "quasar";
import { QSpinnerGears, QSpinnerRadio } from "quasar";
import { useRouter } from "vue-router";

export const setupService = async (id) => {
  const isOnline = window.navigator.onLine;
  const $q = useQuasar();
  const service = new MuseumApiService();

  const router = useRouter();

  $q.loading.show({
    message: isOnline
      ? "Loading your user information..."
      : "Looks like you've lost network connectivity. Please connect back to your network to access your data.",
    backgroundColor: isOnline ? "grey" : "red-6",
    spinner: isOnline ? QSpinnerGears : QSpinnerRadio,
    customClass: "loader",
  });
  try {
    const response = await service.get(id);
    if (!response) {
      $q.dialog({
        title: "Error",
        message: "O museu não existe",
        class: "negative",
      }).onDismiss(() => router.push("/intern/museums"));
    }

    return response;
  } catch ({ data }) {
    $q.dialog({
      title: "Error",
      message: data,
      class: "negative",
    });
  } finally {
    $q.loading.hide();
  }
};
