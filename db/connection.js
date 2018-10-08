var Sequelize = require('sequelize');

var sequelize = new Sequelize('ec2-54-217-236-201.eu-west-1.compute.amazonaws.com:5432/d1eq1pe64fplpo', 'gviikmmkzqqevt', '29dba107e9662470caf935d27a31398fc2351c9897a421228e3b2fdc10e8369e', {
  dialect: 'postgres'
});
//,
//storage: 'postgres'
module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
