
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/SF4fr7wnvou5DyZi0Ik6IH8M13XxhhNl',
      accounts: [ 'METAMASK SECRET PHASE' ]
    }
  }
}