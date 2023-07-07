
// board는 컨트랙트의 이름
const board = artifacts.require('board')

module.exports = function(deployer){
    deployer.deploy(board)
    .then(function(){
        console.log('Contract Deploy')
    })
}