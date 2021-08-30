export const methods = {
  /**
   * @description Creates a reques and sets root state to loading
   * @param {Promise} callback
   */
  async onRequest(callback) {
    try {
      this.isLoading = true;
      const executed = await callback();
      return executed;
    } catch (error) {
      console.error(error);
      return {};
    } finally {
      this.isLoading = false;
    }
  },
};
