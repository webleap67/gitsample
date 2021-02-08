<?php 

abstract class myClass  {
    //variables of the class
    private $variable1;
    private $variable2;
    public $variable3;
    
    //Function of class
    public addVariables() {
        $this->variable1=2;
        $this->variable2=3;
        $this->variable3 = 20;      
        $result= $this->variable1 + $this->variable2+$this->variable3;
        return $result;
    }
    
    
}

public class miaClasse extends myClass {
    
        //Function of class
    public molVariables() {
        $this->variable1=2;
        $this->variable2=3;

        $result= $this->variable1 * $this->variable2;
        return $result;
    }

    
}

$object= new miaClasse();
//$object->variable3=20;
//$object->variable2=3;


$molvalue=$object->molVariables();
$sumvalue=$object->addVariables();
echo "Output will be :".$sumvalue;
echo '<br/>'. $molvalue;

//echo '<br/>'. $object->variable1;





?>