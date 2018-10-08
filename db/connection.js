var Sequelize = require('sequelize');

var sequelize = new Sequelize('ec2-54-217-235-166.eu-west-1.compute.amazonaws.com/d4upbqs1n61q51', 'spwxemvyyyaoek', 'fe1bf2fd87f2dd778c0d690bffafd698a7622dabaf15f16788deac742c382b89', {
 dialect: 'postgres',
});

//postgres://spwxemvyyyaoek:fe1bf2fd87f2dd778c0d690bffafd698a7622dabaf15f16788deac742c382b89@ec2-54-217-235-166.eu-west-1.compute.amazonaws.com:5432/d4upbqs1n61q51

module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
