module.exports = {
  '**/*.{md,js,json}': ['prettier --write'],
  '**/*.{ts,tsx}': ['eslint --fix'],
}
