'use strict';

/* Logical Requirement 5. Define six different weapons to be added
   Logical Requirement 7. Define the range of damage that each weapon can do.
/*************Weapons***********************************************************************/

let Arsenal = {};

Arsenal.Weapon = () => {
 this.name = null;
 this.damage += 0;

};

/*Utlimate Weapon 1.*/
Arsenal.RaveGun = () => {
  this.name ="Rave Gun";
  this.minDamage += 0;
  this.maxDamge += 0;
  this.damage += 0;
};
Arsenal.RaveGun.prototype = new Arsenal.Weapon();

/*Saw Weapon 2.*/
Arsenal.BuzzSaw = () => {
  this.name ="Metal Saw";
  this.minDamage += 0;
  this.maxDamge += 0;
  this.damage += 0;
};
Arsenal.BuzzSaw.prototype = new Arsenal.Weapon();

/*Lava Thrower Weapon 3.*/
Arsenal.Lava = () => {
  this.name ="Lava Thrower";
  this.minDamage += 0;
  this.maxDamge += 0;
  this.damage += 0;
};
Arsenal.Lava.prototype = new Arsenal.Weapon();

/*Music Cannon Weapon 4.*/
Arsenal.EarWorm = () => {
  this.name ="Music Cannon";
  this.minDamage += 0;
  this.maxDamge += 0;
  this.damage += 0;
};
Arsenal.EarWorm.prototype = new Arsenal.Weapon();

/*Self Imobilizing Foam Weapon 5.*/
Arsenal.Foam = () => {
  this.name ="Imobilizing Foam";
  this.minDamage += 0;
  this.maxDamge += 0;
  this.damage += 0;
};
Arsenal.Foam.prototype = new Arsenal.Weapon();

/*Robot Halting and Stimulation Response Weapon 6.*/
Arsenal.Thump = () => {
  this.name ="RHASR)";
  this.minDamage += 0;
  this.maxDamge += 0;
  this.damage += 0;
};
Arsenal.Thump.prototype = new Arsenal.Weapon();

module.exports = {
  Arsenal
};