function Hello(){
   var name;
   this.setName =function(_name){
       name=_name;
   }
   this.getName = function() {
       return name;
   }

}

module.exports = Hello;