module.exports = {
  hooks: {
    ...require('./configs/.huskyrc.js').hooks,
    'pre-push': 'yarn test',
  },
};
