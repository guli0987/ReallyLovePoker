class ThreePair {
	public constructor(threeValue:number,twoValue:number) {
        this.threeValue = threeValue;
        this.twoValue = twoValue;
    }

    /**
     * 三张的值
     */
    private threeValue:number;
   
    /**
     * 所带二张的值
     */
    private twoValue:number;

    public getThreeValue():number{
        return this.threeValue;
    }
        
    public getTwoValue():number{
        return this.twoValue;
    }


    public toString(){
        return "[" + this.threeValue +","+ this.twoValue + "]";
    }
}