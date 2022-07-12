export class AbsoluteNumberCalculator {
    public static findAbsolute(num:number){
        if(num>=0){
            return num;
        }else if(num<0){
            return -num;
        }
    }
}