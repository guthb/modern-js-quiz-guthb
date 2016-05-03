'use strict';

let modification = require('./modifications.js');
let weapons = require('./weapons.js');

/*Logical Requrement 1. Define base robot function
/*Logical Requiremetn 4.Give each robot model a different range of health                                              */
/*************Base Robot*************************************************************************/
let Robot = {};

/*************Robot Player***********************************************************************/
Robot.Player = () => {
  this.name =  null;
  this.type = null;
  this.modification = null;
  this.weapons = null;
  this.health = Math.floor(Math.random() * 40 + 60);
};

/*Logical Requirement 2. Define three robot type functions (e.g. Drone, Bipedal, ATV).           */
/*************Robot Types-***********************************************************************/

Robot.Drone = () => {
  this.type = 'Drone';
  this.health  += 10;
};
Robot.Drone.prototype = new Robot.Player();

Robot.Bipedal = () => {
  this.type = 'Bipedal';
  this.health  += 15;
};
Robot.Bipedal.prototype = new Robot.Player();

Robot.ATV = () => {
  this.type = 'ATV';
  this.health  += 20;
};
Robot.ATV.prototype = new Robot.Player();

/* Requirement 3. Define at least 2 specific robot model functions for each type.               */
/*************Robot Models***********************************************************************/

Robot.Typhoon = () => {
  this.model = 'WhirlWind';
  this.health += 10;
};
Robot.Typhoon.prototype = new Robot.Drone();

Robot.Cyclone = () => {
  this.model = 'Cyclone';
  this.health += 8;
};
Robot.Cyclone.prototype = new Robot.Drone();

Robot.Atlas = () => {
  this.model = 'Atlas';
  this.health += 5;
};
Robot.Atlas.prototype = new Robot.Bipedal();

Robot.Petman = () => {
  this.model = 'Petman';
  this.health += 12;
};
Robot.Petman.prototype = new Robot.Bipedal();

Robot.Bigdog = () => {
  this.model = 'Bigdog';
  this.health += 18;
};
Robot.BigDog.prototype = new Robot.ATV();

Robot.Cheetah= () => {
  this.model = 'Cheetah';
  this.health += 12;
};
Robot.Cheetah.prototype = new Robot.ATV();

module.exports = {
  Robot
};