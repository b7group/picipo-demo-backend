const Server = require('./nft_backend');
const config = require('./config/config')

Server.listen(config.port, () => console.log(`NFT api started at ${config.port}`))