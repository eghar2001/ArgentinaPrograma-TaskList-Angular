export class Fecha{
    private dia:number;
    private mes:number;
    private anio:number;
    constructor(dia:number,mes:number,anio:number){
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
    }
    public getDia(){
        return this.dia;
    }
    public getMes(){
        return this.mes;
    }
    public getAnio(){
        return this.anio;
    }
    static cantidadDias(mes:number):number{
        const dias30:number[] = [4,6,9,11];
        const dias31:number[] = [1,3,5,7,8,10,12]
        if (dias30.includes(mes)){
            return 30;
        }
        else if (mes ===2){
            return 28;
        }
        else if(dias31.includes(mes)){
            return 31;
        }
        else{
            return 0;
        }
    }
    public diasDiferencia (fecha:Fecha):number{
        const meses:number[] =[1,2,3,4,5,6,7,8,9,10,11,12];
        const esBisiesto = (anio:number) => {
            return ((anio%4===0 && !(anio%100===0) ) || (anio%400===0))
        }
        let aniosMedios:number[]=[];
        let mesesMedios:number[]=[];
        if (fecha.getAnio()>this.anio){
            for(let anio = this.anio +1;anio<fecha.getAnio();anio++){
                aniosMedios.push(anio)
            }            
            let mes:number = this.mes ;
            while (mes!==fecha.getMes()){
                mesesMedios.push(mes);
                mes = mes === 12 ? 1: mes+1;
            }



        }
        else if(this.anio>fecha.getAnio()){
            for(let i = fecha.getAnio() +1;i<this.anio;i++){
                aniosMedios.push(i)
            }
            let mes:number = fecha.getMes();
            while (mes!==this.mes){
                mesesMedios.push(mes);
                mes = mes === 12 ? 1: mes+1;
            }
        }

        let diasDiferencia = aniosMedios.reduce((acum,anio)=>{return acum += (esBisiesto(anio)?366:365)}, 0);//sumo años diferencia
    
        diasDiferencia += mesesMedios.reduce((acum,mes)=>{return acum += Fecha.cantidadDias(mes)},0);//sumo meses diferencia
       
        diasDiferencia  += Math.abs(this.dia-fecha.getDia());
        return diasDiferencia;

    }
    public getMesString(){
        let mesString:string;
        switch (this.mes){
            case 1:{
                mesString="Enero"
                break;
            }
            case 2:{
                mesString="Febrero"
                break;
            }
            case 3:{
                mesString="Marzo"
                break;
            }
            case 4:{
                mesString="Abril"
                break;
            }  
            case 5:{
                mesString="Mayo"
                break;
            }        
            case 6:{
                mesString="Junio";
                break;
            }
            case 7:{
                mesString="Julio";
                break;
            }
            case 8:{
                mesString="Agosto";
                break;
            }
            case 9:{
                mesString="Septiembre";
                break;
            }
            case 10:{
                mesString="Octubre";
                break;
            }
            case 11:{
                mesString="Noviembre";
                break;
            }
            case 12:{
                mesString="Diciembre";
                break;
            }
            default:{
                mesString="";
                break;
            }
        }
        return mesString;
    }
    public getFullDateString():string{
        return `${this.dia} de ${this.getMesString()} del ${this.anio}`
    }



}