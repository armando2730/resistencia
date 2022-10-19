import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ejemplo-resistencia',
  templateUrl: './ejemplo-resistencia.component.html',
  styleUrls: ['./ejemplo-resistencia.component.css']
})
export class EjemploResistenciaComponent implements OnInit {

  banda1="";
  banda2="";
  banda3="";
  tol:string="";
  color1:string="";
  color2:string="";
  color3:string="";
  color4:string="";
  band3="";
  band4="";
  bandt="";
  bandamin=0;
  bandamax=0;
  tole=0;
  
  resis(){
    let color1:string="";
    let color2:string="";
    let color3:string="";
    let color4:string="";
    let band4=0;
    let band3="";
    
  
    switch(this.banda1){
      case "0":
        color1="black";
        break;
        case "1":
          color1="brown";
          break;
          case "2":
            color1="red";
            break;
            case "3":
              color1="orange";
              break;
              case "4":
                color1="yellow";
                break;
                case "5":
                  color1="green";
                  break;
                  case "6":
                    color1="blue";
                    break;
                    case "7":
                      color1="purple";
                      break;
                      case "8":
                        color1="gray";
                        break;
                        case "9":
                          color1="white";
                          break;
      
    }
    this.color1=color1;
    switch(this.banda2){
      case "0":
        color2="black";
        break;
        case "1":
          color2="brown";
          break;
          case "2":
            color2="red";
            break;
            case "3":
              color2="orange";
              break;
              case "4":
                color2="yellow";
                break;
                case "5":
                  color2="green";
                  break;
                  case "6":
                    color2="blue";
                    break;
                    case "7":
                      color2="purple";
                      break;
                      case "8":
                        color2="gray";
                        break;
                        case "9":
                          color2="white";
                          break;
      
    }
    this.color2=color2;
    switch(this.banda3){
      case "0":
        color3="black";
        band3="";
        break;
        case "1":
          color3="brown";
          band3="0";
          break;
          case "2":
            color3="red";
            band3="00";
            break;
            case "3":
              color3="orange";
              band3="000";
              break;
              case "4":
                color3="yellow";
                band3="0000";
                break;
                case "5":
                  color3="green";
                  band3="00000";
                  break;
                  case "6":
                    color3="blue";
                    band3="000000";
                    break;
                    case "7":
                      color3="purple";
                      band3="0000000";
                      break;
                      case "8":
                        color3="gray";
                        band3="00000000";
                        break;
                        case "9":
                          color3="white";
                          band3="000000000";
                          break;
      
    }
    this.band3=band3;
    this.color3=color3;
    if(this.tol=="0"){
      color4="gold";
      band4=0.05;   
    }else if(this.tol=="1"){
      color4="silver";
      band4=0.1; 
    }if(this.tol=="2"){
      color4="red";
      band4=0.02; 
    }
    this.tole=band4;
    this.color4=color4;
    this.bandt=this.banda1+this.banda2+band3;
    this.bandamax=parseInt(this.bandt)+(parseInt(this.bandt)*band4);
    this.bandamin=parseInt(this.bandt)-(parseInt(this.bandt)*band4);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
