'use strict';

/* Logical Requirement 5. Define six different modifications and weapons to be added             */
/*************Modifications***********************************************************************/

let AddOns = {};

AddOns.Modification = () => {
 this.modification = null;
 return  this.modification;
};

/* Logical Requirement 6. Each modification should provide some combination of the following benefits
- increased protection, increased damage, or evasion capability (ability to avoid some attacks).
***************************************************************************************************/

/* Electromagetic Pulse Hardening* 1.*/
AddOns.Emp = function() {
  this.name = "EMP";
  this.healthAdd = 4;
  this.damageAdd = 5;
  this.evasionCap = 5;
};
AddOns.Emp.prototype = new AddOns.Modification();

/* Gyroscoptic Enhancement 2.*/
AddOns.Gyro = function () => {
  this.name = "Gyroscope";
  this.healthAdd = 5;
  this.damageAdd = 10;
  this.evasionCap = 10;
};
AddOns.Gyro.prototype = new AddOns.Modification();

/*Interlocking plates 3.*/
AddOns.Interlock function () {
  this.name = "Interlock";
  this.healthAdd = 6;
  this.damageAdd = 15;
  this.evasionCap = 15;
};
AddOns.Interlock.prototype = new AddOns.Modification();

/*Night Vision Scanners 4.*/
AddOns.Scanner = function () {
  this.name = "Scanner";
  this.healthAdd = 6;
  this.damageAdd = 20;
  this.evasionCap = 20;
};
AddOns.Scanner.prototype = new AddOns.Modification();

/*Cloaking of shape*/
AddOns.Cloak = function () {
  this.name = "Cloaking";
  this.healthAdd = 7;
  this.damageAdd = 25;
  this.evasionCap = 25;
};
AddOns.Cloak.prototype = new AddOns.Modification();

/*WaterProofing of shell*/
AddOns.Proof = function () {
  this.name = "H20 Proof";
  this.healthAdd = 8;
  this.damageAdd = 30;
  this.evasionCap = 30;
};
AddOns.Proof.prototype = new AddOns.Modification();


module.exports = {
  AddOns
};