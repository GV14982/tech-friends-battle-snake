/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    testMatch: ["**/__tests__/**/*.ts"],
    verbose: true,
  };
};
