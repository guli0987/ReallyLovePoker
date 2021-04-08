/**
 * 牌型大小比较工具类
 */
class PokerCompareUtils {
	public constructor() {
}
	/**
	 * 比较两手牌的大小
	 * a b ,当a大于b时返回true
	 * 王炸通吃
	 * 炸弹仅次于王炸
	 * 其他牌必须牌型相等才能比较，也不尽然，上下靠可以打乱靠才对
	 */
	public static comparePokers(a:Array<Poker>,b:Array<Poker>):boolean{
		let aSort:Array<Poker> = PokerUtils.sortDescPokers(a);//自己的，自己大返回true
		let bSort:Array<Poker> = PokerUtils.sortDescPokers(b);
		//if(aSort.length < 1 || bSort.length < 1) return false;//空，没牌了，感觉有问题
		if(bSort.length < 1) return true;

		if(PokerTypeUtils.isKingBoom(bSort) != -1) return false;//b是王炸
		if(PokerTypeUtils.isKingBoom(aSort) != -1) return true;//a是王炸
		if(PokerTypeUtils.isBoom(bSort) != -1){//b是炸弹
			if(PokerTypeUtils.isBoom(aSort) != -1) return this.compareOneLenghtBoom(aSort,bSort);//a 也是炸弹
			return false;//a 不是炸弹
		}
		if(PokerTypeUtils.isBoom(aSort) != -1) return true;//a 是炸弹,b不是
		//if是连对，飞机，飞机带对子
		if(a.length != b.length) return false;//已经排除了炸弹的可能，长度不相等,不能比较

		let aType:PokerType = PokerTypeUtils.getType(aSort);
		let bType:PokerType = PokerTypeUtils.getType(bSort);	
		let aSpecialType:PokerTypeThreePair = PokerTypeUtils.getSpecialType(aSort);
		let bSpecialType:PokerTypeThreePair = PokerTypeUtils.getSpecialType(bSort);
		if(aType != null && aSpecialType == null){
			//if(aType.getType() != bType.getType()) return false;//【上下靠打乱靠问题】
			if(bType == null && bSpecialType != null){
				if(bSpecialType.getType() === "typeThreePair" && aType.getType() === "typeThreePairOn"){//上靠打乱靠
					//如果自己是上下靠，对方是乱靠，进行比较
					if(aType.getSort() > bSpecialType.getSort()[0].getThreeValue() && aType.getSort() > bSpecialType.getSort()[0].getTwoValue() - 1){
						return true;
					}
					return false;
				}
				if(bSpecialType.getType() === "typeThreePair" && aType.getType() === "typeThreePairUnder"){//下靠打乱靠
					//如果自己是上下靠，对方是乱靠，进行比较
					if(aType.getSort() > bSpecialType.getSort()[0].getThreeValue() && aType.getSort() > bSpecialType.getSort()[0].getTwoValue() + 1){
						return true;
					}
					return false;
				}
			}
			//if(bType == null) return false;
			//可能有的类型还要比长度，连对，飞机，飞机带对子
			if(bType != null && bSpecialType == null) 
			{
				if(bType.getType() === "typeStraightPairs"
				 || bType.getType() === "typePlane"
				 || bType.getType() === "typePlaneNPairsConnection3322"
				 || bType.getType() === "typePlaneNPairsConnection2233"
				 || bType.getType() === "typePlaneNPairsConnection2332"){
					 return this.compareOneLenght(aSort,bSort);
				 }else{
					 return aType.getSort() > bType.getSort();
				 }
			}
		}else if(aType == null && aSpecialType != null){
			if(aSpecialType.getType() != bSpecialType.getType()) return false;
			if(bSpecialType == null){
				return false;
			}else{
				let pd : boolean =false;
				for(let i = 0;i < aSpecialType.getSort().length;i ++){
					if(aSpecialType.getSort()[i].getThreeValue() > bSpecialType.getSort()[i].getThreeValue()
					&& aSpecialType.getSort()[i].getTwoValue() > bSpecialType.getSort()[i].getTwoValue()){
						pd = true;
					}else{
						pd = false;
					}
				}
				if(pd){
					return true;
				}else{
					return false;
				}
				
			}

		}else{
			return false;
		}
		

	}
	/**
	 * 比较单牌的大小，牌型固定长度
	 */
	private static compareOne(a:Poker,b:Poker):boolean{
		if(a.getOrderValue() > b.getOrderValue()){
			return true;
		}else{
			return false;
		}
	}
	/**
	 * 比较单牌的大小,涉及长度
	 */
	private static compareOneLenght(aSort:Array<Poker>,bSort:Array<Poker>):boolean{
		if(aSort.length > bSort.length) return false;
		if(aSort.length < bSort.length) return false;
		if(aSort.length === bSort.length){
			if(aSort[0].getOrderValue() > bSort[0].getOrderValue()){
					return true;
				}else{
					return false;
				}
		}
	
	}
	/**
	 * 比较单牌的大小,Boom
	 */
	private static compareOneLenghtBoom(aSort:Array<Poker>,bSort:Array<Poker>):boolean{
		if(aSort.length > bSort.length) return true;
		if(aSort.length < bSort.length) return false;
		if(aSort.length === bSort.length){
			if(aSort[0].getOrderValue() > bSort[0].getOrderValue()){
					return true;
				}else{
					return false;
				}
		}
	
	}







}