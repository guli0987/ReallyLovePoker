/**
 * 牌型工具类
 * 该类负责定义牌型及判断牌型
 */
class PokerTypeUtils {
	public constructor() {
	}

	/**
	 * 炸弹
	 */
	public static typeBoom:string 			= "typeBoom";
	/**
	 * 四王通天炸
	 */
	public static typeKingBoom:string 		= "typeKingBoom";
	/**
	 * 单张
	 */
	public static typeSingle:string 		= "typeSingle";
	/**
	 * 对子
	 */
	public static typePair:string 			= "typePair";
    /**
	 * 连对
	 */
	public static typeStraightPairs:string 	= "typeStraightPairs";
	/**
	 * 三张
	 */
	public static typeThree:string 			= "typeThree";
	/**
	 * 三带一对,分乱靠，上下靠，此为乱靠
	 */
	public static typeThreePair:string 		= "typeThreePair";
	/**
	 * 三带一对,上靠
	 */
	public static typeThreePairOn:string 		= "typeThreePairOn";
	/**
	 * 三带一对,下靠
	 */
	public static typeThreePairUnder:string 		= "typeThreePairUnder";
	/**
	 * 飞机
	 */
	public static typePlane:string 			= "typePlane";
	/**
	 * 飞机(N)带N对
	 */
	public static typePlaneNPairs:string 	= "typePlaneNPairs";
	/**
	 * 飞机(N)带N对，对子连续
	 */
	public static typePlaneNPairsConnection:string 	= "typePlaneNPairsConnection";
	/**
	 * 飞机(N)带N对，连对,3334445566
	 */
	public static typePlaneNPairsConnection3322:string 	= "typePlaneNPairsConnection3322";
	/**
	 * 飞机(N)带N对，连对,3344555666
	 */
	public static typePlaneNPairsConnection2233:string 	= "typePlaneNPairsConnection2233";
	/**
	 * 飞机(N)带N对，连对,3344455566
	 */
	public static typePlaneNPairsConnection2332:string 	= "typePlaneNPairsConnection2332";
	/**
	 * 获取一手牌的类型,固定数目的
	 * pokers 一手牌
	 */
	public static getType(pokers:Array<Poker>):PokerType{
		//先将牌从大到小排序，非常有必要，这样牌就从大到小排序
		pokers = PokerUtils.sortDescPokers(pokers);
		let orderValue:number = -1;
		if((orderValue = this.isBoom(pokers)) != -1) //炸弹			
			return new PokerType(this.typeBoom,orderValue);
		if((orderValue = this.isKingBoom(pokers)) != -1)//四王通天炸 		
			return new PokerType(this.typeKingBoom, orderValue);
		if((orderValue = this.isSingle(pokers)) != -1) //单张		
			return new PokerType(this.typeSingle, orderValue);
		if((orderValue = this.isPair(pokers)) != -1) //对子			
			return new PokerType(this.typePair, orderValue);
		if((orderValue = this.isThree(pokers)) != -1) //三张			
			return new PokerType(this.typeThree, orderValue);
		if((orderValue = this.isThreePairsOn(pokers)) != -1) //三带二，上靠			
			return new PokerType(this.typeThreePairOn, orderValue);
		if((orderValue = this.isThreePairsUnder(pokers)) != -1) //三带二，下靠			
			return new PokerType(this.typeThreePairUnder, orderValue);
		if((orderValue = this.isStraightPairs(pokers)) != -1) //连对	
			return new PokerType(this.typeStraightPairs, orderValue);
		if((orderValue = this.isPlane(pokers)) != -1)// 飞机			
			return new PokerType(this.typePlane, orderValue);
		if((orderValue = this.isPlaneNpairsConnection2233(pokers)) != -1)// 飞机带对子	
			return new PokerType(this.typePlaneNPairsConnection2233, orderValue);
		if((orderValue = this.isPlaneNpairsConnection3322(pokers)) != -1)// 飞机带对子	
			return new PokerType(this.typePlaneNPairsConnection3322, orderValue);
		if((orderValue = this.isPlaneNpairsConnection2332(pokers)) != -1)// 飞机带对子	
			return new PokerType(this.typePlaneNPairsConnection2332, orderValue);
		return null;
	}
	public static getSpecialType(pokers:Array<Poker>):PokerTypeThreePair{
		//先将牌从大到小排序
		pokers = PokerUtils.sortDescPokers(pokers);
		//三带一对乱靠
		let ThreePairsValue: Array<ThreePair> = new Array<ThreePair>();
		if((ThreePairsValue = this.isThreePairs(pokers)) != null)//三带一对，乱、上、下靠 	
			return new PokerTypeThreePair(this.typeThreePair, ThreePairsValue);
		if((ThreePairsValue = this.isPlaneNpairs(pokers)) != null)//飞机带对子	
			return new PokerTypeThreePair(this.typePlaneNPairs, ThreePairsValue);
		if((ThreePairsValue = this.isPlaneNpairsConnection(pokers)) != null)//飞机带对子,对子连续
			return new PokerTypeThreePair(this.typePlaneNPairsConnection, ThreePairsValue);
		return null;
}
	/**
	 * 		if((ThreePairsValue = this.isThreePairs(pokers)) != null)//三带一对，乱、上、下靠 	
			return new PokerTypeThreePair(this.typeThreePair, ThreePairsValue);
	 */
	/**
	 * 判断一手牌是否是炸弹（不含王炸）
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
    public static isBoom(array:Array<Poker>):number{//8888  7776
		//console.log("是炸弹");
		if(array.length >= 4 && array.length <= 8){
			let ifBoom: boolean =true;
			//如果存在不等的情况则为false
			for(let i = 0;i < array.length - 1;i ++){
				if(array[i].getOrderValue() != array[i+1].getOrderValue() ){
					ifBoom = false;
					break;
				}
			}
			if(ifBoom){
				console.log("是炸弹,值为:"+array[0].getOrderValue());
				return array[0].getOrderValue();
			}
			return -1;
		}else{
			return -1;
		}
	}
	/**
	 * 判断一手牌是否是四王通天炸
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isKingBoom(array:Array<Poker>):number{
		//console.log("是四王轰天炸");
		if(array.length == 4 
		&& array[0].getOrderValue() === PokerUtils.BigKingValue 
		&& array[1].getOrderValue() === PokerUtils.BigKingValue 
		&& array[2].getOrderValue() === PokerUtils.SmallKingValue
		&& array[3].getOrderValue() === PokerUtils.SmallKingValue){
			return 0;
		}else{
			return -1;
		}
	}
	/**
	 * 判断一手牌是否是单张
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isSingle(array:Array<Poker>):number{
		//console.log("是单张");
		if(array.length == 1)  return array[0].getOrderValue();
		return -1;
	}

	/**
	 * 判断一手牌是否是对子
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isPair(array:Array<Poker>):number{
		//console.log("是对子");
		if(array.length == 2 && array[0].getOrderValue() == array[1].getOrderValue()) 
			return array[0].getOrderValue();
		return -1;
		
	}

	/**
	 * 判断一手牌是否是三张
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isThree(array:Array<Poker>):number{
		//console.log("是三张");
		if(array.length != 3) return -1;//不是三张
		if(array[1].getOrderValue() == array[0].getOrderValue() 
		&& array[2].getOrderValue() == array[0].getOrderValue()) 
			return  array[0].getOrderValue();//三张一样的牌
		return -1;
	}
	/**
	 * 判断一手牌是否是三带二，乱靠
	 * 如果不是，返回null; 如果是，返回该牌型的大小排序值
	 */
	public static isThreePairs(array:Array<Poker>):Array<ThreePair>{
		//console.log("是三带二");
		let ThreePairsValue: Array<ThreePair> = new Array<ThreePair>();
		if(array.length != 5) return null;//不是三张也不是四张，不是三带
		if(array[1].getOrderValue() === array[0].getOrderValue() 
			&& array[2].getOrderValue() === array[0].getOrderValue() 
			&& array[3].getOrderValue() != array[0].getOrderValue() 
			&& array[3].getOrderValue() === array[4].getOrderValue()
			&& Math.abs(array[0].getOrderValue()-array[3].getOrderValue()) != 1) 
			{
				let threePairs : ThreePair = new ThreePair(array[0].getOrderValue(),array[3].getOrderValue());
				ThreePairsValue.push(threePairs);
				return ThreePairsValue//前三张一样后一张不一样   //前三张一样，后两张一样
			}		
		if(array[0].getOrderValue() === array[1].getOrderValue() 
			&& array[2].getOrderValue() === array[3].getOrderValue() 
			&& array[3].getOrderValue() === array[4].getOrderValue() 
			&& array[0].getOrderValue() != array[2].getOrderValue()
			&& Math.abs(array[0].getOrderValue()-array[2].getOrderValue()) != 1) 
			{
				let threePairs : ThreePair = new ThreePair(array[2].getOrderValue(),array[0].getOrderValue());
				ThreePairsValue.push(threePairs);
				return ThreePairsValue//前三张一样后一张不一样   //前三张一样，后两张一样
			}
			return null;
	}
	/**
	 * 判断一手牌是否是三带二,上靠
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isThreePairsOn(array:Array<Poker>):number{
		//console.log("是上靠");
		if(array.length != 5) return -1;//不是三张也不是四张，不是三带
		if(array[1].getOrderValue() === array[0].getOrderValue() 
			&& array[2].getOrderValue() === array[0].getOrderValue() 
			&& array[3].getOrderValue() != array[0].getOrderValue() 
			&& array[3].getOrderValue() === array[4].getOrderValue()
			&& array[0].getOrderValue()-array[3].getOrderValue() === -1) 
			return array[0].getOrderValue();//前三张一样后一张不一样   //前三张一样，后两张一样
		if(array[0].getOrderValue() === array[1].getOrderValue() 
			&& array[2].getOrderValue() === array[3].getOrderValue() 
			&& array[3].getOrderValue() === array[4].getOrderValue() 
			&& array[0].getOrderValue() != array[2].getOrderValue()
			&& array[2].getOrderValue()-array[0].getOrderValue() === -1) 
			return array[2].getOrderValue();//前两张一样，后三张一样
		return -1;
	}
	/**
	 * 判断一手牌是否是三带二,下靠
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isThreePairsUnder(array:Array<Poker>):number{
		//console.log("是下靠");
		if(array.length != 5) return -1;//不是三张也不是四张，不是三带
		if(array[1].getOrderValue() === array[0].getOrderValue() 
			&& array[2].getOrderValue() === array[0].getOrderValue() 
			&& array[3].getOrderValue() != array[0].getOrderValue() 
			&& array[3].getOrderValue() === array[4].getOrderValue()
			&& array[0].getOrderValue()-array[3].getOrderValue() === 1) 
			return array[0].getOrderValue();//前三张一样后一张不一样   //前三张一样，后两张一样
		if(array[0].getOrderValue() === array[1].getOrderValue() 
			&& array[2].getOrderValue() === array[3].getOrderValue() 
			&& array[3].getOrderValue() === array[4].getOrderValue() 
			&& array[0].getOrderValue() != array[2].getOrderValue()
			&& array[2].getOrderValue()-array[0].getOrderValue() === 1) 
			return array[2].getOrderValue();//前两张一样，后三张一样
		return -1;
	}
	/**
	 * 判断一手牌是否是连对
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isStraightPairs(array:Array<Poker>):number{
		//console.log("是连对");
		if(array.length < 6 || array.length > 24 || array.length % 2 != 0) return -1;
		if(array[0].getOrderValue() < 3) return -1;//如果最大的牌大于A，牌形不正确

		for(let i = 0 ; i < array.length - 1 ; i += 2){
			if(array[i].getOrderValue() != array[i+1].getOrderValue()) return -1;
		}
		for(let i = 0 ; i < array.length - 2; i += 2){
			if(i != array.length - 2 && array[i].getOrderValue() != array[i+2].getOrderValue() +1 ) return -1;
		}
		return array[0].getOrderValue();
	}
	/**
	 * 判断一手牌是否是飞机不带翅膀
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isPlane(array:Array<Poker>):number{
		//console.log("是飞机");
		if(array.length < 9 && array.length > 27) return -1;
		if(array.length % 3 != 0) return -1;
		if(array[0].getOrderValue() < 3) return -1;//如果最大的牌大于A，牌形不正确(不能三个2 三个A)
		for(let i = 0;i < array.length;i += 3){
			if(i != array.length - 3 && array[i].getOrderValue() === array[i+1].getOrderValue() && array[i].getOrderValue() === array[i+2].getOrderValue()
			&& array[i].getOrderValue() === array[i+3].getOrderValue() + 1)
			return array[0].getOrderValue();
		}
		 	
		return -1; 
	}
	/**
	 * 判断一手牌是否是飞机带N对,不是连对
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isPlaneNpairs(array:Array<Poker>):Array<ThreePair>{
		//console.log("是飞机带N对");
		if(array.length < 10 || array.length > 25) return null;
		let three:Array<Poker> = [];
		let two:Array<Poker> = [];
		/*for(let a =0 ;a < array.length;a++){
			console.log("当前--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}*/
		for(let i = 0; i < array.length -2; i++){//只能到7,避免越界
			if(array[i].getOrderValue() == array[i+1].getOrderValue() 
				&& array[i].getOrderValue() == array[i+2].getOrderValue()){
				three.push(array[i]);//把三位分开储存
				console.log("i为"+i+"时，符合要求的three值为"+array[i].getOrderValue()+",id为"+array[i].getId());
			}
		}
		let fh : boolean = false;
		for(let i = 0;i < three.length-1;i ++){
			//console.log("添加的："+array[i].getId()+",value:"+array[i].getOrderValue());
			if(three[i].getOrderValue() - three[i+1].getOrderValue() === 1){
				fh=true;
			}else{
				fh=false;
			}
		}
		console.log("符合要求吗？  "+fh);
		if(!fh) return null;
		let threeDelete:Array<Poker> = [];
		for(let i = 0; i < three.length; i++){
			for(let j = 0; j < array.length; j++){
					if(array[j].getOrderValue() === three[i].getOrderValue()){
						//console.log("添加的："+three[i].getId()+",value:"+three[i].getOrderValue());
						//array = PokerUtils.removePokers(array,[array[j]]);
						threeDelete.push(array[j]);
						console.log("要删除的：id"+array[j].getId()+",value:"+array[j].getOrderValue());
					}
			}
			
		}
		array = PokerUtils.removePokers(array,threeDelete);
		//if(1) return -1;
		for(let a =0 ;a < array.length;a++){
			console.log("剩下--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		console.log("取对子");
		//取对子
		for(let i = 0;i < array.length-1;i ++){
			if(array[i].getOrderValue() === array[i+1].getOrderValue()){
				two.push(array[i]);
				console.log("i为"+i+"时，符合要求的two值为"+array[i].getOrderValue()+",id为"+array[i].getId());
			}
		}
		//如果三张长度不等于对子长度，返回false
		if(three.length != two.length) return null;
		//如果去掉对子连续三张还有牌，则return -1
		let twoDelete:Array<Poker> = [];
			for(let i = 0; i < two.length; i++){
				for(let j = 0; j < array.length; j++){
					if(two[i].getOrderValue() === array[j].getOrderValue()){
						twoDelete.push(array[j]);
					}
			}
			
		}
		array = PokerUtils.removePokers(array,twoDelete);
		for(let a =0 ;a < array.length;a++){
			console.log("two剩下--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		if(array.length > 0) return null;
		console.log("看对子是否连续");
		//看对子是否连续
		let tw : boolean = false;
		for(let i = 0;i < two.length-1;i ++){
			if(two[i].getOrderValue() - two[i+1].getOrderValue() === 1){
				tw=true;
			}else{
				tw=false;
			}
		}
		console.log("tw:"+tw);
		//不连续符合
		let reArray :Array<ThreePair> = new Array<ThreePair>();
		if(!tw){
			console.log("符合要求");
			for(let i = 0;i < two.length;i ++){
				let threePairs : ThreePair = new ThreePair(three[i].getOrderValue(),two[i].getOrderValue());
				reArray.push(threePairs);
			}
			return reArray;
		}else{
			console.log("不符合要求");
			return null;
		}
	}
	/**
	 * 判断一手牌是否是飞机带N对,是连对但对子和三张不连续
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isPlaneNpairsConnection(array:Array<Poker>):Array<ThreePair>{
		//console.log("是飞机带N对");
		if(array.length < 10 || array.length > 25) return null;
		let three:Array<Poker> = [];
		let two:Array<Poker> = [];
		/*for(let a =0 ;a < array.length;a++){
			console.log("当前--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}*/
		for(let i = 0; i < array.length -2; i++){//只能到7,避免越界
			if(array[i].getOrderValue() == array[i+1].getOrderValue() 
				&& array[i].getOrderValue() == array[i+2].getOrderValue()){
				three.push(array[i]);//把三位分开储存
				console.log("i为"+i+"时，符合要求的three值为"+array[i].getOrderValue()+",id为"+array[i].getId());
			}
		}
		let fh : boolean = false;
		for(let i = 0;i < three.length-1;i ++){
			//console.log("添加的："+array[i].getId()+",value:"+array[i].getOrderValue());
			if(three[i].getOrderValue() - three[i+1].getOrderValue() === 1){
				fh=true;
			}else{
				fh=false;
			}
		}
		console.log("符合要求吗？  "+fh);
		if(!fh) return null;
		let threeDelete:Array<Poker> = [];
		for(let i = 0; i < three.length; i++){
			for(let j = 0; j < array.length; j++){
					if(array[j].getOrderValue() === three[i].getOrderValue()){
						//console.log("添加的："+three[i].getId()+",value:"+three[i].getOrderValue());
						//array = PokerUtils.removePokers(array,[array[j]]);
						threeDelete.push(array[j]);
						console.log("要删除的：id"+array[j].getId()+",value:"+array[j].getOrderValue());
					}
			}
			
		}
		array = PokerUtils.removePokers(array,threeDelete);
		//if(1) return -1;
		for(let a =0 ;a < array.length;a++){
			console.log("剩下--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		console.log("取对子");
		//取对子
		for(let i = 0;i < array.length-1;i ++){
			if(array[i].getOrderValue() === array[i+1].getOrderValue()){
				two.push(array[i]);
				console.log("i为"+i+"时，符合要求的two值为"+array[i].getOrderValue()+",id为"+array[i].getId());
			}
		}
		//如果三张长度不等于对子长度，返回false
		if(three.length != two.length) return null;
		//如果去掉对子连续三张还有牌，则return -1
		let twoDelete:Array<Poker> = [];
			for(let i = 0; i < two.length; i++){
				for(let j = 0; j < array.length; j++){
					if(two[i].getOrderValue() === array[j].getOrderValue()){
						twoDelete.push(array[j]);
					}
			}
			
		}
		array = PokerUtils.removePokers(array,twoDelete);
		for(let a =0 ;a < array.length;a++){
			console.log("two剩下--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		if(array.length > 0) return null;
		console.log("看对子是否连续");
		//看对子是否连续
		let tw : boolean = false;
		for(let i = 0;i < two.length-1;i ++){
			if(two[i].getOrderValue() - two[i+1].getOrderValue() === 1){
				tw=true;
			}else{
				tw=false;
			}
		}
		console.log("tw:"+tw);
		//不连续符合
		let reArray :Array<ThreePair> = new Array<ThreePair>();
		if(!tw){
			console.log("不符合要求");
			return null;
		}else{
			console.log("符合要求");
			for(let i = 0;i < two.length;i ++){
				let threePairs : ThreePair = new ThreePair(three[i].getOrderValue(),two[i].getOrderValue());
				reArray.push(threePairs);
			}
			return reArray;
		}
	}
	/**
	 * 判断一手牌是否是飞机带N对,是连对
	 * 3334445566	3344555666	3344455566
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isPlaneNpairsConnection2233(array:Array<Poker>):number{
		//console.log("是飞机带N对Connection2233");
		if(array.length < 10 || array.length > 25) return -1;
		let three:Array<Poker> = [];
		let two:Array<Poker> = [];
		for(let a =0 ;a < array.length;a++){
			console.log("当前--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		for(let i = 0; i < array.length -2; i++){//只能到7,避免越界
			if(array[i].getOrderValue() == array[i+1].getOrderValue() 
				&& array[i].getOrderValue() == array[i+2].getOrderValue()){
				three.push(array[i]);//把三位分开储存
				console.log("i为"+i+"时，符合要求的three值为"+array[i].getOrderValue()+",id为"+array[i].getId());
			}
		}
		let fh : boolean = false;
		for(let i = 0;i < three.length-1;i ++){
			//console.log("添加的："+array[i].getId()+",value:"+array[i].getOrderValue());
			if(three[i].getOrderValue() - three[i+1].getOrderValue() === 1){
				fh=true;
			}else{
				fh=false;
			}
		}
		console.log("符合要求吗？  "+fh);
		if(!fh) return -1;
		let threeDelete:Array<Poker> = [];
		for(let i = 0; i < three.length; i++){
			for(let j = 0; j < array.length; j++){
					if(array[j].getOrderValue() === three[i].getOrderValue()){
						//console.log("添加的："+three[i].getId()+",value:"+three[i].getOrderValue());
						//array = PokerUtils.removePokers(array,[array[j]]);
						threeDelete.push(array[j]);
						console.log("要删除的：id"+array[j].getId()+",value:"+array[j].getOrderValue());
					}
			}
			
		}
		array = PokerUtils.removePokers(array,threeDelete);
		//if(1) return -1;
		for(let a =0 ;a < array.length;a++){
			console.log("剩下--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		console.log("取对子");
		//取对子
		for(let i = 0;i < array.length-1;i ++){
			if(array[i].getOrderValue() === array[i+1].getOrderValue()){
				two.push(array[i]);
				console.log("i为"+i+"时，符合要求的two值为"+array[i].getOrderValue()+",id为"+array[i].getId());
			}
		}
		//如果三张长度不等于对子长度，返回false
		if(three.length != two.length) return -1;
		//如果去掉对子连续三张还有牌，则return -1
		let twoDelete:Array<Poker> = [];
			for(let i = 0; i < two.length; i++){
				for(let j = 0; j < array.length; j++){
					if(two[i].getOrderValue() === array[j].getOrderValue()){
						twoDelete.push(array[j]);
					}
			}
			
		}
		array = PokerUtils.removePokers(array,twoDelete);
		for(let a =0 ;a < array.length;a++){
			console.log("two剩下--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		if(array.length > 0) return null;
		console.log("看对子是否连续");
		//看对子是否连续2233
		let tw : boolean = false;
		for(let i = 0;i < two.length-1;i ++){
			if(two[i].getOrderValue() - two[i+1].getOrderValue() === 1){
				tw=true;
			}else{
				tw=false;
			}
		}
		console.log("tw:"+tw);
		//连续符合
		let reArray :Array<ThreePair> = new Array<ThreePair>();
		if(tw){
			//如果连续判断对子跟三张是否连续
			if(two[0].getOrderValue() - three[three.length-1].getOrderValue() === -1){
				return two[two.length-1].getOrderValue();
			}
		}else{
			console.log("不符合要求");
			return -1;
		}
		return -1;
	}
	/**
	 * 判断一手牌是否是飞机带N对,是连对
	 * 3334445566	3344555666	3344455566
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isPlaneNpairsConnection3322(array:Array<Poker>):number{
		//console.log("是飞机带N对Connection3322");
		if(array.length < 10 || array.length > 25) return -1;
		let three:Array<Poker> = [];
		let two:Array<Poker> = [];
		for(let a =0 ;a < array.length;a++){
			console.log("当前--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		for(let i = 0; i < array.length -2; i++){//只能到7,避免越界
			if(array[i].getOrderValue() == array[i+1].getOrderValue() 
				&& array[i].getOrderValue() == array[i+2].getOrderValue()){
				three.push(array[i]);//把三位分开储存
				console.log("i为"+i+"时，符合要求的three值为"+array[i].getOrderValue()+",id为"+array[i].getId());
			}
		}
		let fh : boolean = false;
		for(let i = 0;i < three.length-1;i ++){
			//console.log("添加的："+array[i].getId()+",value:"+array[i].getOrderValue());
			if(three[i].getOrderValue() - three[i+1].getOrderValue() === 1){
				fh=true;
			}else{
				fh=false;
			}
		}
		console.log("符合要求吗？  "+fh);
		if(!fh) return -1;
		let threeDelete:Array<Poker> = [];
		for(let i = 0; i < three.length; i++){
			for(let j = 0; j < array.length; j++){
					if(array[j].getOrderValue() === three[i].getOrderValue()){
						//console.log("添加的："+three[i].getId()+",value:"+three[i].getOrderValue());
						//array = PokerUtils.removePokers(array,[array[j]]);
						threeDelete.push(array[j]);
						console.log("要删除的：id"+array[j].getId()+",value:"+array[j].getOrderValue());
					}
			}
			
		}
		array = PokerUtils.removePokers(array,threeDelete);
		//if(1) return -1;
		for(let a =0 ;a < array.length;a++){
			console.log("剩下--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		console.log("取对子");
		//取对子
		for(let i = 0;i < array.length-1;i ++){
			if(array[i].getOrderValue() === array[i+1].getOrderValue()){
				two.push(array[i]);
				console.log("i为"+i+"时，符合要求的two值为"+array[i].getOrderValue()+",id为"+array[i].getId());
			}
		}
		//如果三张长度不等于对子长度，返回false
		if(three.length != two.length) return -1;
		//如果去掉对子连续三张还有牌，则return -1
		let twoDelete:Array<Poker> = [];
			for(let i = 0; i < two.length; i++){
				for(let j = 0; j < array.length; j++){
					if(two[i].getOrderValue() === array[j].getOrderValue()){
						twoDelete.push(array[j]);
					}
			}
			
		}
		array = PokerUtils.removePokers(array,twoDelete);
		for(let a =0 ;a < array.length;a++){
			console.log("two剩下--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		if(array.length > 0) return null;
		console.log("看对子是否连续");
		//看对子是否连续2233
		let tw : boolean = false;
		for(let i = 0;i < two.length-1;i ++){
			if(two[i].getOrderValue() - two[i+1].getOrderValue() === 1){
				tw=true;
			}else{
				tw=false;
			}
		}
		console.log("tw:"+tw);
		//连续符合
		let reArray :Array<ThreePair> = new Array<ThreePair>();
		if(tw){
			//如果连续判断对子跟三张是否连续
			if(two[two.length-1].getOrderValue() - three[0].getOrderValue() === 1){
				return three[three.length-1].getOrderValue();
			}
		}else{
			console.log("不符合要求");
			return -1;
		}
		return -1;
	}
	/**
	 * 判断一手牌是否是飞机带N对【未判断】是连对
	 * 3334445566	3344555666	3344455566
	 * 如果不是，返回-1; 如果是，返回该牌型的大小排序值
	 */
	public static isPlaneNpairsConnection2332(array:Array<Poker>):number{
		//console.log("是飞机带N对Connection2332");
		if(array.length < 10 || array.length > 25) return -1;
		let three:Array<Poker> = [];
		let two:Array<Poker> = [];
		for(let a =0 ;a < array.length;a++){
			console.log("当前--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		for(let i = 0; i < array.length -2; i++){//只能到7,避免越界
			if(array[i].getOrderValue() == array[i+1].getOrderValue() 
				&& array[i].getOrderValue() == array[i+2].getOrderValue()){
				three.push(array[i]);//把三位分开储存
				console.log("i为"+i+"时，符合要求的three值为"+array[i].getOrderValue()+",id为"+array[i].getId());
			}
		}
		let fh : boolean = false;
		for(let i = 0;i < three.length-1;i ++){
			//console.log("添加的："+array[i].getId()+",value:"+array[i].getOrderValue());
			if(three[i].getOrderValue() - three[i+1].getOrderValue() === 1){
				fh=true;
			}else{
				fh=false;
			}
		}
		console.log("符合要求吗？  "+fh);
		if(!fh) return -1;
		let threeDelete:Array<Poker> = [];
		for(let i = 0; i < three.length; i++){
			for(let j = 0; j < array.length; j++){
					if(array[j].getOrderValue() === three[i].getOrderValue()){
						//console.log("添加的："+three[i].getId()+",value:"+three[i].getOrderValue());
						//array = PokerUtils.removePokers(array,[array[j]]);
						threeDelete.push(array[j]);
						console.log("要删除的：id"+array[j].getId()+",value:"+array[j].getOrderValue());
					}
			}
			
		}
		array = PokerUtils.removePokers(array,threeDelete);
		//if(1) return -1;
		for(let a =0 ;a < array.length;a++){
			console.log("剩下--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		console.log("取对子");
		//取对子
		for(let i = 0;i < array.length-1;i ++){
			if(array[i].getOrderValue() === array[i+1].getOrderValue()){
				two.push(array[i]);
				console.log("i为"+i+"时，符合要求的two值为"+array[i].getOrderValue()+",id为"+array[i].getId());
			}
		}
		//如果三张长度不等于对子长度，返回false
		if(three.length != two.length) return -1;
		//如果去掉对子连续三张还有牌，则return -1
		let twoDelete:Array<Poker> = [];
			for(let i = 0; i < two.length; i++){
				for(let j = 0; j < array.length; j++){
					if(two[i].getOrderValue() === array[j].getOrderValue()){
						twoDelete.push(array[j]);
					}
			}
			
		}
		array = PokerUtils.removePokers(array,twoDelete);
		for(let a =0 ;a < array.length;a++){
			console.log("two剩下--id:"+array[a].getId()+",value:"+array[a].getOrderValue());
		}
		if(array.length > 0) return null;
		console.log("看对子是否连续");
		//看对子是否连续2233
		let tw : boolean = false;
		for(let i = 0;i < two.length-1;i ++){
			if(two[i].getOrderValue() - two[i+1].getOrderValue() === 1){
				tw=true;
			}else{
				tw=false;
			}
		}
		let intArray : Array<number> = [];
		if(!tw){
			for(let i=0;i<three.length;i++){
				intArray.push(three[i].getOrderValue());
			}
			for(let i=0;i<two.length;i++){
				intArray.push(two[i].getOrderValue());
			}
			intArray = intArray.sort();
		}
		let pdd : boolean =false;
		for(let i=0;i<intArray.length-1;i++){
			if(intArray[i] === intArray[i+1] -1){
				pdd = true;
			}else{
				pdd = false;
			}
		}
		if(pdd){
			return two[0].getOrderValue();
		}
		
		return -1;
	}
}