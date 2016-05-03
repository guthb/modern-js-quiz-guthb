'use strict';

/* Logical Requirement 5. Define six different modifications and weapons to be added             */
/*************Modifications***********************************************************************/

let AddOns = {};

AddOns.Modifications = () => {
 this.modification = null;
 return  this.modification;
};

/* Logical Requirement 6. Each modification should provide some combination of the following benefits
- increased protection, increased damage, or evasion capability (ability to avoid some attacks).
***************************************************************************************************/

/* Electromagetic Pulse Hardening* 1.*/
AddOns.Emp = () => {
  this.name = "EMP";
  this.healthAdd = 0;
  this.damageAdd = 0;
  this.evasionCap = 0;
};
AddOns.Emp.prototype = new AddOns.Modification();

/* Gyroscoptic Enhancement 2.*/
AddOns.Gyro = () => {
  this.name = "Gyroscope";
  this.healthAdd = 0;
  this.damageAdd = 0;
  this.evasionCap = 0;
};
AddOns.Gyro.prototype = new AddOns.Modification();

/*Interlocking plates 3.*/
AddOns.Interlock = () => {
  this.name = "Interlock";
  this.healthAdd = 0;
  this.damageAdd = 0;
  this.evasionCap = 0;
};
AddOns.Interlock.prototype = new AddOns.Modification();

/*Night Vision Scanners 4.*/
AddOns.Scanner = () => {
  this.name = "Scanner";
  this.healthAdd = 0;
  this.damageAdd = 0;
  this.evasionCap = 0;
};
AddOns.Scanner.prototype = new AddOns.Modification();

/*Cloaking of shape*/
AddOns.Cloak = () => {
  this.name = "Cloaking";
  this.healthAdd = 0;
  this.damageAdd = 0;
  this.evasionCap = 0;
};
AddOns.Cloak.prototype = new AddOns.Modification();

/*WaterProofing of shell*/
AddOns.Proof = () => {
  this.name = "H20 Proof";
  this.healthAdd = 0;
  this.damageAdd = 0;
  this.evasionCap = 0;
};
AddOns.Proof.prototype = new AddOns.Modification();


module.exports = {
  AddOns
};