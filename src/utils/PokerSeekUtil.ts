/**
 * 出牌选择类
 * 该类负责系统自动出牌、用户点击“提示”按钮后提示选择的牌等
 */
class PokerSeekUtils {
	public constructor() {
	}

	/**
	 * TODO
	 * 从一手牌中判断有没有比指定牌大的牌
	 * 这个方法是单机游戏的核心
	 * 需要持续优化
	 * aHandPoker 一手牌
	 * b 指定的牌形
	 */
	public static seekRight(aHandPoker:Array<Poker>,pokerType:Array<Poker>):Array<Poker>{
		let myPoker:Array<Poker> = PokerUtils.sortDescPokers(aHandPoker);
		let poker:Array<Poker> = PokerUtils.sortDescPokers(pokerType);
		console.log("seekRight",myPoker,poker);
		//找到别人扑克类型
		let bType = PokerTypeUtils.getType(pokerType);
		let bType2 = PokerTypeUtils.getSpecialType(pokerType);
		let mask:number = 0;
		let rightPoker:Array<Poker> = null;
		if(bType != null && bType2 == null){
		if(bType.getType() === PokerTypeUtils.typeKingBoom) 			rightPoker =  null;
		else if(bType.getType() === PokerTypeUtils.typeBoom) 			rightPoker =  this.seekBoom(myPoker,bType.getSort(),pokerType.length);
		else if(bType.getType() === PokerTypeUtils.typeSingle) 			rightPoker =  this.seekSingle(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.typePair) 			rightPoker =  this.seekPairs(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.typeThree) 			rightPoker =  this.seekThree(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.typeThreePairOn) 	rightPoker =  this.seekThreePairOn(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.typeThreePairUnder) 	rightPoker =  this.seekThreePairUnder(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.typeStraightPairs) 	rightPoker =  this.seekStraightPairs(myPoker,bType.getSort(),poker.length/2);
		else if(bType.getType() === PokerTypeUtils.typePlane) 			rightPoker =  this.seekPlane(myPoker,bType.getSort(),poker.length/2);
		else if(bType.getType() === PokerTypeUtils.typePlaneNPairsConnection2233) 	rightPoker =  this.seekPlaneNPairsConnection2233(myPoker,bType.getSort(),pokerType.length/5);
		else if(bType.getType() === PokerTypeUtils.typePlaneNPairsConnection3322) 	rightPoker =  this.seekPlaneNPairsConnection3322(myPoker,bType.getSort(),pokerType.length/5);
		else if(bType.getType() === PokerTypeUtils.typePlaneNPairsConnection2332) 	rightPoker =  this.seekPlaneNPairsConnection2332(myPoker,bType.getSort());
		}
		//console.log("常用类型检索完");
		if(bType == null && bType2 != null){
			console.log("找特殊类型");
			if(bType2.getType() === PokerTypeUtils.typeThreePair) 	rightPoker =  this.seekThreePair(myPoker,bType2.getSort());
			else if(bType2.getType() === PokerTypeUtils.typePlaneNPairs) 	rightPoker =  this.seekPlaneNPairs(myPoker,bType2.getSort(),pokerType.length/5);
			else if(bType2.getType() === PokerTypeUtils.typePlaneNPairsConnection) 	rightPoker =  this.seekPlaneNPairsConnection(myPoker,bType2.getSort(),pokerType.length/5);
		}
		if(bType == null && bType2 == null){
			//rightPoker = null;
			console.log("没有找到类型");
		}
		
		//TODO 当玩家没有同类型的可出的牌时，在适当的时机判断是否有炸弹、王炸可以出,限制条件，不为炸弹类型()疏忽了，待继续优化
		if(rightPoker == null || rightPoker.length == 0){
			let enableOut: boolean = true;
			if(bType != null)
			{
				if(bType.getType() == PokerTypeUtils.typeKingBoom || bType.getType() == PokerTypeUtils.typeBoom){
					enableOut = false;
					console.log("类型为炸弹，不可行");
				}
			}
			if(enableOut){
				let randomPress: number = Math.floor(Math.random() * 3 + 1);
				if(randomPress % 2 !=0){
					rightPoker =  this.seekBoom(myPoker,0,4);//找能压3333的牌3=1
				}
			}
		}
		//选好可出的牌型后，从玩家的牌中按照牌形挑选牌面
		if(rightPoker != null && rightPoker.length > 0){
			return rightPoker;
		}else{
			return [];
		}
		
	}

	/**
	 * 查找能压炸弹的牌形算法√
	 * aHandPokerString 从大到小排列的一手牌
	 * typeSort 要压住的牌的排序值，牌越大，排序值越小
	 * boomLength 炸弹的长度
	 */
	private static seekBoom(aHandPokerString:Array<Poker>,typeSort:number,boomLength:number):Array<Poker>{
		console.log("找呀找炸弹");
		//4444 999887766665543
		//console.log("【炸弹长度】："+boomLength+"，【炸弹值】:"+typeSort);
		//根据炸弹长度和炸弹
		let minPokerindex: number = -1;
		let endLength: number = -1;
		let returnArray: Array<number> = new Array<number>();
		for(let j = 0 ; j < aHandPokerString.length; j++){//9886 6555 5433
			returnArray.push(aHandPokerString[j].getOrderValue());
			//console.log("索引："+j+",id:"+aHandPokerString[j].getId()+",value:"+aHandPokerString[j].getOrderValue());
		}
		for(let i = returnArray.length - 1;i >= 0 ; i--){
			if(returnArray[i] > typeSort){
				//console.log("returnArray[i]"+returnArray[i]+">>>>>"+"typeSort"+typeSort)
				endLength = returnArray.lastIndexOf(returnArray[i]) - returnArray.indexOf(returnArray[i]);//65555443,0 1234 567
				//console.log("获取到的endLength长度:"+endLength);//【哪儿有问题】
				if(endLength >= boomLength-1){
					minPokerindex = returnArray.indexOf(returnArray[i]);
					//console.log("符合压炸弹条件");
				}
			}
			if(minPokerindex != -1) break;
			//console.log("索引："+i+",id:"+aHandPokerString[j].getId()+",value:"+aHandPokerString[j].getOrderValue());
		}
		//console.log("是否找到:"+minPokerindex);
		let outArray: Array<Poker> = new Array<Poker>();
		if(minPokerindex != -1){
			for(let k = 0;k < endLength + 1;k++){//0123
				outArray.push(aHandPokerString[k+minPokerindex]);
			}
		}
		return outArray;
	}

	/** 
	 * 查找能压单张牌的牌型算法：从小到大遍历自己牌的排序数组，找出比所出牌大的牌,自动查找单张出牌,如果没有找三张，再没有找二张√
	 * aHandPokerString 从大到小排列的一手牌
	 * typeSort 要压住的牌的排序值，牌越大，排序值越小
	 * TODO 是否拆牌
	 */
	private static seekSingle(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		console.log("找呀找单张");
		//从小到大查找能压住的牌
		let signleArray: Array<number> = new Array<number>();
		for(let j = 0 ; j < aHandPokerString.length; j++){
			signleArray.push(aHandPokerString[j].getOrderValue());
		}
		for(let i = signleArray.length - 1;i >= 0 ; i--){
			let	endLength = signleArray.lastIndexOf(signleArray[i]) - signleArray.indexOf(signleArray[i]);//9876633
			if(endLength === 0 && signleArray[i] > typeSort){
				return [aHandPokerString[i]];
			}
			//console.log("索引："+i+",id:"+aHandPokerString[j].getId()+",value:"+aHandPokerString[j].getOrderValue());
		}
		for(let i = signleArray.length - 1;i >= 0 ; i--){
			let	endLength = signleArray.lastIndexOf(signleArray[i]) - signleArray.indexOf(signleArray[i]);//9876633
			if(endLength === 2 && signleArray[i] > typeSort){
				return [aHandPokerString[i]];
			}
			//console.log("索引："+i+",id:"+aHandPokerString[j].getId()+",value:"+aHandPokerString[j].getOrderValue());
		}
		for(let i = signleArray.length - 1;i >= 0 ; i--){
			let	endLength = signleArray.lastIndexOf(signleArray[i]) - signleArray.indexOf(signleArray[i]);//9876633
			if(endLength === 1 && signleArray[i] > typeSort){
				return [aHandPokerString[i]];
			}
			//console.log("索引："+i+",id:"+aHandPokerString[j].getId()+",value:"+aHandPokerString[j].getOrderValue());
		}
		return [];
	}

	/**
	 * 查找能压对子的牌形算法：从小到大遍历自己的牌，找出比所出的牌大的牌,有对子出对子，没对子拆三张√
	 * aHandPokerString 一手牌
	 * typeSort 要压住的牌的排序值
	 */
	private static seekPairs(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		console.log("找呀找对子");
		let pairsArray: Array<number> = new Array<number>();
		for(let j = 0 ; j < aHandPokerString.length; j++){
			pairsArray.push(aHandPokerString[j].getOrderValue());
		}
		for(let i = pairsArray.length - 1;i >= 0 ; i--){
			let	endLength = pairsArray.lastIndexOf(pairsArray[i]) - pairsArray.indexOf(pairsArray[i]);//9876544
			if(endLength === 1 && pairsArray[i] > typeSort){
				return [aHandPokerString[i-1],aHandPokerString[i]];
			}
		}
		for(let i = pairsArray.length - 1;i >= 0 ; i--){
			let	endLength = pairsArray.lastIndexOf(pairsArray[i]) - pairsArray.indexOf(pairsArray[i]);//11255556,012 3456 7
			if(endLength === 2 && pairsArray[i] > typeSort){
				return [aHandPokerString[i-1],aHandPokerString[i]];
			}
		}
		//从小到大查找能压住的牌
		return [];
	}
	/**
	 * 查找能压三张的牌形算法：从小到大遍历自己的牌，找出比所出的牌大的牌,没有三张就找炸弹√
	 * aHandPokerString 一手牌
	 * typeSort 要压住的牌的排序值
	 */
	private static seekThree(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		console.log("找呀找三张");
		for(let j = aHandPokerString.length -1 ; j >= 2 ; j--){
			if(aHandPokerString[j].getOrderValue() === aHandPokerString[j-1].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() === aHandPokerString[j-2].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() > typeSort)
			return [aHandPokerString[j],aHandPokerString[j-1],aHandPokerString[j-2]];
		}
		/*//没有就找炸弹炸他丫的
		this.seekBoom(aHandPokerString,typeSort,4);*/
		return [];
	}
	/**
	 * 查找能压三带一对的牌形算法：从小到大遍历自己的牌，找出比所出的牌大的牌,乱靠可以被上下靠和乱靠打√
	 * aHandPokerString 一手牌
	 * typeSort 要压住的牌的排序值
	 */
	private static seekThreePair(aHandPokerString:Array<Poker>,typeSort:Array<ThreePair>):Array<Poker>{
		console.log("找呀找乱靠");
		let index = 0;
		let result:Array<Poker> = new Array<Poker>();
		//找三张
		for(let j = aHandPokerString.length -1 ; j >= 2 ; j--){
			if(aHandPokerString[j].getOrderValue() === aHandPokerString[j-1].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() === aHandPokerString[j-2].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() > typeSort[0].getThreeValue()){
				index = j;
				result.push(aHandPokerString[j],aHandPokerString[j-1],aHandPokerString[j-2]);
				break;
			}
		}
		//找到三张了，找对子
		if(index != 0){
			let index1 = 0;
			for(let j = aHandPokerString.length -1 ; j >= 2 ; j--){
				if(aHandPokerString[j].getOrderValue() === aHandPokerString[j-1].getOrderValue()
				&& aHandPokerString[j].getOrderValue() > typeSort[0].getTwoValue()){
					if(j == index || j == index -1  || j == index -2)
					continue;
					index1 = j;
					result.push(aHandPokerString[j],aHandPokerString[j-1]);
					break;
				}
			}
		
		}
		if(result != null && result.length === 5){
			return result;
		}else{
			return [];
		}
	}
	/**
	 * 查找能压三带一对上靠的牌形算法：从小到大遍历自己的牌，找出比所出的牌大的牌,上靠只能被上靠和炸弹打√
	 * aHandPokerString 一手牌
	 * typeSort 要压住的牌的排序值
	 */
	private static seekThreePairOn(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{//99887776665543
		console.log("找呀找上靠");
		for(let i = aHandPokerString.length - 1;i >= 4;i--){
			if(aHandPokerString[i].getOrderValue() === aHandPokerString[i-1].getOrderValue()
			&& aHandPokerString[i].getOrderValue() === aHandPokerString[i-2].getOrderValue()
			&& aHandPokerString[i].getOrderValue() - aHandPokerString[i-3].getOrderValue() === -1
			&& aHandPokerString[i-3].getOrderValue() === aHandPokerString[i-4].getOrderValue()
			&& aHandPokerString[i].getOrderValue() > typeSort)
			{
				return [aHandPokerString[i],aHandPokerString[i-1],aHandPokerString[i-2],aHandPokerString[i-3],aHandPokerString[i-4]];
			}
		}
		return [];
	}
	/**
	 * 查找能压三带一对下靠的牌形算法：从小到大遍历自己的牌，找出比所出的牌大的牌,下靠只能被下靠和炸弹打√
	 * aHandPokerString 一手牌
	 * typeSort 要压住的牌的排序值
	 */
	private static seekThreePairUnder(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{//99887776665543
		console.log("找呀找下靠");
		for(let i = aHandPokerString.length - 1;i >= 4;i--){
			if(aHandPokerString[i].getOrderValue() === aHandPokerString[i-1].getOrderValue()
			&& aHandPokerString[i].getOrderValue() - aHandPokerString[i-2].getOrderValue() === -1
			&& aHandPokerString[i-2].getOrderValue() === aHandPokerString[i-3].getOrderValue()
			&& aHandPokerString[i-2].getOrderValue() === aHandPokerString[i-4].getOrderValue()
			&& aHandPokerString[i-2].getOrderValue() > typeSort)
			{
				return [aHandPokerString[i],aHandPokerString[i-1],aHandPokerString[i-2],aHandPokerString[i-3],aHandPokerString[i-4]];
			}
		}
		return [];
	}
	/**
	 * TODO
	 * 查找能压连对的牌形算法√
	 * 1.先将扑克牌中所有值按顺序遍历加入Array<number>集合中
	 * 2.将值倒序遍历，如果满足最小值要求则开始判断
	 * 3.如果其last索引减去start索引大于等于1，说明当前值至少有2张一样
	 * 4.当前值加一取索引，看是否继续满足last索引减去start索引大于等于1
	 * 5.如果判断索引值个数等于length，则成立
	 * aHandPokerString 一手牌
	 * typeSort 要压住的牌的排序值
	 * length 要压住的顺子的长度
	 */
	private static seekStraightPairs(aHandPokerString:Array<Poker>,typeSort:number,length:number):Array<Poker>{//98776655433三对665544
		console.log("找呀找连对");
		let returnPoker: Array<Poker> =new Array<Poker>();
		let minPokerValue: number = typeSort - length + 2;
		let straightPairsArray: Array<number> = new Array<number>();
		for(let j = 0 ; j < aHandPokerString.length; j++){
			straightPairsArray.push(aHandPokerString[j].getOrderValue());
		}
		for(let i = straightPairsArray.length -1;i >= 0;i--){
			let judgeSsp: boolean =true;
			if(straightPairsArray[i] >= minPokerValue){
				for(let k = 0;k < length; k++){
					let indexSsp = straightPairsArray[i] + k;
					if(indexSsp > 12){
						judgeSsp = false;
						break;
					}
					if(straightPairsArray.lastIndexOf(indexSsp)-straightPairsArray.indexOf(indexSsp) > 0){
						judgeSsp = true;
					}else{
						judgeSsp = false;
						break;
					}
				}
			}
			if(judgeSsp && straightPairsArray[i] >= minPokerValue){
				for(let h = 0;h < length; h++){
					let indexReturn=straightPairsArray.lastIndexOf(straightPairsArray[i]+h);
					//
					returnPoker.push(aHandPokerString[indexReturn]);
					returnPoker.push(aHandPokerString[indexReturn-1]);
				}
				return returnPoker;
			}
		}
		return [];
	}
	/**
	 * 查找能压飞机的牌形算法√
	 */
	private static seekPlane(aHandPokerString:Array<Poker>,typeSort:number,PlaneLength:number):Array<Poker>{
		console.log("找呀找飞机");
		let returnPoker: Array<Poker> =new Array<Poker>();
		let minPokerValue: number = typeSort - PlaneLength + 2;
		let PlaneArray: Array<number> = new Array<number>();
		for(let j = 0 ; j < aHandPokerString.length; j++){
			PlaneArray.push(aHandPokerString[j].getOrderValue());
		}
		for(let i = PlaneArray.length -1;i >= 0;i--){//999888777766554
			let judgeSp: boolean =true;
			if(PlaneArray[i] >= minPokerValue){
				for(let k = 0;k < PlaneLength; k++){
					let indexSsp = PlaneArray[i] + k;
					if(PlaneArray.lastIndexOf(indexSsp)-PlaneArray.indexOf(indexSsp) > 1){//【可能有把炸弹拆开问题】
						judgeSp = true;
					}else{
						judgeSp = false;
						break;
					}
				}
			}
			if(judgeSp && PlaneArray[i] >= minPokerValue){
				for(let h = 0;h < PlaneLength; h++){
					let indexReturn=PlaneArray.lastIndexOf(PlaneArray[i]+h);
					//
					returnPoker.push(aHandPokerString[indexReturn]);
					returnPoker.push(aHandPokerString[indexReturn-1]);
					returnPoker.push(aHandPokerString[indexReturn-2]);
				}
				return returnPoker;
			}
		}
		return [];
	}
	/**
	 * 查找能压飞机带对子(无序)的牌形算法√
	 */
	private static seekPlaneNPairs(aHandPokerString:Array<Poker>,typeSort:Array<ThreePair>,planeNlength:number):Array<Poker>{
		console.log("找呀找飞机带对子");
		let returnPoker: Array<Poker> =new Array<Poker>();
		let PlaneNPairsArray: Array<number> = new Array<number>();
		for(let j = 0 ; j < aHandPokerString.length; j++){
			PlaneNPairsArray.push(aHandPokerString[j].getOrderValue());
		}
		//先找三张符合要求的，不符合直接返回null
		for(let i = PlaneNPairsArray.length -1;i >= 0;i--){//99988877776655433打7776665533,typeSort three7two5,three6two3
				let judgePnp: boolean =true;
				if(PlaneNPairsArray[i] > typeSort[typeSort.length-1].getThreeValue()){
					for(let k = 0;k < planeNlength; k++){
						let indexSsp = PlaneNPairsArray[i] + k;
						if(PlaneNPairsArray.lastIndexOf(indexSsp)-PlaneNPairsArray.indexOf(indexSsp) > 1){//【可能有把炸弹拆开问题】
							judgePnp = true;
						}else{
							judgePnp = false;
							break;
						}
					}
				}
				if(judgePnp && PlaneNPairsArray[i] >= typeSort[typeSort.length-1].getThreeValue()){
					for(let h = 0;h < planeNlength; h++){
						let indexReturn=PlaneNPairsArray.lastIndexOf(PlaneNPairsArray[i]+h);
						returnPoker.push(aHandPokerString[indexReturn]);
						returnPoker.push(aHandPokerString[indexReturn-1]);
						returnPoker.push(aHandPokerString[indexReturn-2]);
					}
					break;
				}
		}
		//如果returnPoker为空说明上面不符合条件，玩完
		if(returnPoker == null) return [];
		//再找对子符合要求的，不符合也玩完，对子无所谓连不连对
		let typeSortIndex = typeSort.length-1;
		for(let i = PlaneNPairsArray.length -1;i >= 0;i--){//99988877776655433打7776665533,typeSort three7two5,three6two3
				let judgePnp2: boolean =true;
				if(PlaneNPairsArray[i] > typeSort[typeSortIndex].getTwoValue()){
						let indexSsp2 = PlaneNPairsArray[i];
						if(PlaneNPairsArray.lastIndexOf(indexSsp2)-PlaneNPairsArray.indexOf(indexSsp2) === 1){
							judgePnp2 = true;
						}else{
							judgePnp2 = false;
						}

				}
				if(judgePnp2 && PlaneNPairsArray[i] >= typeSort[typeSortIndex].getTwoValue()){
						let indexReturn2=PlaneNPairsArray.lastIndexOf(PlaneNPairsArray[i]);
						returnPoker.push(aHandPokerString[indexReturn2]);
						returnPoker.push(aHandPokerString[indexReturn2-1]);
						typeSortIndex--;
				}
				if(typeSortIndex < 0) break;
		}
		if(returnPoker != null) return returnPoker;
		return [];
	}
	/**
	 * 查找能压飞机带对子(对子有序)的牌形算法√
	 */
	private static seekPlaneNPairsConnection(aHandPokerString:Array<Poker>,typeSort:Array<ThreePair>,planeNlength:number):Array<Poker>{
		console.log("找呀找飞机带对子");
		let returnPoker: Array<Poker> =new Array<Poker>();
		let PlaneNPairsArray: Array<number> = new Array<number>();
		for(let j = 0 ; j < aHandPokerString.length; j++){
			PlaneNPairsArray.push(aHandPokerString[j].getOrderValue());
		}
		//先找三张符合要求的，不符合直接返回null
		for(let i = PlaneNPairsArray.length -1;i >= 0;i--){//99988877776655433打7776665533,typeSort three7two5,three6two3
				let judgePnp: boolean =true;
				if(PlaneNPairsArray[i] > typeSort[typeSort.length-1].getThreeValue()){
					for(let k = 0;k < planeNlength; k++){
						let indexSsp = PlaneNPairsArray[i] + k;
						if(PlaneNPairsArray.lastIndexOf(indexSsp)-PlaneNPairsArray.indexOf(indexSsp) > 1){//【可能有把炸弹拆开问题】
							judgePnp = true;
						}else{
							judgePnp = false;
							break;
						}
					}
				}
				if(judgePnp && PlaneNPairsArray[i] >= typeSort[typeSort.length-1].getThreeValue()){
					for(let h = 0;h < planeNlength; h++){
						let indexReturn=PlaneNPairsArray.lastIndexOf(PlaneNPairsArray[i]+h);
						returnPoker.push(aHandPokerString[indexReturn]);
						returnPoker.push(aHandPokerString[indexReturn-1]);
						returnPoker.push(aHandPokerString[indexReturn-2]);
					}
					break;
				}
		}
		//如果returnPoker为空说明上面不符合条件，玩完
		if(returnPoker == null) return [];
		//再找对子符合要求的，不符合也玩完
		for(let i = PlaneNPairsArray.length -1;i >= 0;i--){//99988877776655433打7776665533,typeSort three7two5,three6two3
				let judgePnp2: boolean =true;
				if(PlaneNPairsArray[i] > typeSort[typeSort.length-1].getTwoValue()){
					for(let k = 0;k < planeNlength; k++){
						let indexSsp2 = PlaneNPairsArray[i] + k;
						if(PlaneNPairsArray.lastIndexOf(indexSsp2)-PlaneNPairsArray.indexOf(indexSsp2) === 1){
							judgePnp2 = true;
						}else{
							judgePnp2 = false;
							break;
						}
					}
				}
				if(judgePnp2 && PlaneNPairsArray[i] >= typeSort[typeSort.length-1].getTwoValue()){
					for(let h = 0;h < planeNlength; h++){
						let indexReturn2=PlaneNPairsArray.lastIndexOf(PlaneNPairsArray[i]+h);
						returnPoker.push(aHandPokerString[indexReturn2]);
						returnPoker.push(aHandPokerString[indexReturn2-1]);
					}
					break;
				}
		}
		if(returnPoker != null) return returnPoker;
		return [];
	}
	/**
	 * 查找能压飞机带对子(有序2233)的牌形算法
	 */
	private static seekPlaneNPairsConnection2233(aHandPokerString:Array<Poker>,typeSort:number,planeNlength2233:number):Array<Poker>{
		console.log("找呀找飞机带对子(有序2233)");
		let returnPoker: Array<Poker> =new Array<Poker>();
		//let returnThreePoker: Array<Poker> =new Array<Poker>();
		//let returnTwoPoker: Array<Poker> =new Array<Poker>();

		let PlaneNPairsArray2233: Array<number> = new Array<number>();
		for(let j = 0 ; j < aHandPokerString.length; j++){
			PlaneNPairsArray2233.push(aHandPokerString[j].getOrderValue());
		}
		//先找对子符合长度的
		for(let i = PlaneNPairsArray2233.length -1;i >= 0;i--){//99988877776655433打7776665544,typeSort three7two5,three6two4
			let judjePnp2233Two:boolean = true;
			let judjePnp2233Three:boolean = true;
			//9998887777  6  6  5  5  4  3  3
			//0123456789 10 11 12 13 14 15 16
			if(PlaneNPairsArray2233[i] > typeSort){//index:13
				for(let k = 0;k< planeNlength2233;k++){
					let indexSsp2233Two = PlaneNPairsArray2233[i] + k;
					if(PlaneNPairsArray2233.lastIndexOf(indexSsp2233Two) - PlaneNPairsArray2233.indexOf(indexSsp2233Two) >0){
						judjePnp2233Two = true;
					}else{
						judjePnp2233Two = false;
						break;
					}
				}
				if(judjePnp2233Two){
					for(let k = 0;k< planeNlength2233;k++){
					let indexSsp2233Three = PlaneNPairsArray2233[i] - planeNlength2233*2;
					if(PlaneNPairsArray2233.lastIndexOf(indexSsp2233Three) - PlaneNPairsArray2233.indexOf(indexSsp2233Three) >1){
						judjePnp2233Three = true;
					}else{
						judjePnp2233Three = false;
						break;
					}
					}
				}
				//如果都为真则条件成立
				if(judjePnp2233Two && judjePnp2233Three){
					for(let h = 0;h < planeNlength2233;h++){
						let indexReturn2233Two=PlaneNPairsArray2233.lastIndexOf(PlaneNPairsArray2233[i]+h);
						returnPoker.push(aHandPokerString[indexReturn2233Two]);
						returnPoker.push(aHandPokerString[indexReturn2233Two-1]);
					}
					for(let h = 0;h < planeNlength2233;h++){
						let indexReturn2233Three=PlaneNPairsArray2233.lastIndexOf(PlaneNPairsArray2233[i]-planeNlength2233*2+h);
						returnPoker.push(aHandPokerString[indexReturn2233Three]);
						returnPoker.push(aHandPokerString[indexReturn2233Three-1]);
						returnPoker.push(aHandPokerString[indexReturn2233Three-2]);
					}
					break;
				}
			}
		}
		if(returnPoker != null) return returnPoker;
		return [];
	}
	/**
	 * 查找能压飞机带对子(有序3322)的牌形算法
	 */
	private static seekPlaneNPairsConnection3322(aHandPokerString:Array<Poker>,typeSort:number,planeNlength3322:number):Array<Poker>{
		console.log("找呀找飞机带对子(有序3322)");
		let returnPoker: Array<Poker> =new Array<Poker>();
		//let returnThreePoker: Array<Poker> =new Array<Poker>();
		//let returnTwoPoker: Array<Poker> =new Array<Poker>();

		let PlaneNPairsArray3322: Array<number> = new Array<number>();
		for(let j = 0 ; j < aHandPokerString.length; j++){
			PlaneNPairsArray3322.push(aHandPokerString[j].getOrderValue());
		}
		//先找三张符合长度的
		for(let i = PlaneNPairsArray3322.length -1;i >= 0;i--){//99988877776655433打7776665544,typeSort three7two5,three6two4
			let judjePnp2233Two:boolean = true;
			let judjePnp2233Three:boolean = true;
			//9998887777  6  6  5  5  4  3  3
			//0123456789 10 11 12 13 14 15 16
			if(PlaneNPairsArray3322[i] > typeSort){//index:13
				for(let k = 0;k< planeNlength3322;k++){
					let indexSsp3322Three = PlaneNPairsArray3322[i] + k;
					let threeIndexEnd:number = PlaneNPairsArray3322.lastIndexOf(indexSsp3322Three) - PlaneNPairsArray3322.indexOf(indexSsp3322Three);
					if(threeIndexEnd > 1 && threeIndexEnd !=3){
						judjePnp2233Three = true;
					}else{
						judjePnp2233Three = false;
						break;
					}
				}
				if(judjePnp2233Three){
					for(let k = 0;k< planeNlength3322;k++){
					let indexSsp2233Two = PlaneNPairsArray3322[i] - planeNlength3322*3;
					if(PlaneNPairsArray3322.lastIndexOf(indexSsp2233Two) - PlaneNPairsArray3322.indexOf(indexSsp2233Two) === 1){
						judjePnp2233Two = true;
					}else{
						judjePnp2233Two = false;
						break;
					}
					}
				}
				//如果都为真则条件成立
				if(judjePnp2233Two && judjePnp2233Three){
					for(let h = 0;h < planeNlength3322;h++){
						let indexReturn3322Three=PlaneNPairsArray3322.lastIndexOf(PlaneNPairsArray3322[i]+h);
						returnPoker.push(aHandPokerString[indexReturn3322Three]);
						returnPoker.push(aHandPokerString[indexReturn3322Three-1]);
						returnPoker.push(aHandPokerString[indexReturn3322Three-2]);
					}
					for(let h = 0;h < planeNlength3322;h++){
						let indexReturn2233Two=PlaneNPairsArray3322.lastIndexOf(PlaneNPairsArray3322[i]-planeNlength3322*3+h);
						returnPoker.push(aHandPokerString[indexReturn2233Two]);
						returnPoker.push(aHandPokerString[indexReturn2233Two-1]);
					}
					break;
				}
			}
		}
		if(returnPoker != null) return returnPoker;
		return [];
	}
	/**
	 * 查找能压飞机带对子(有序2332)的牌形算法【可能性太多，规律未理清，待以后补充】
	 */
	private static seekPlaneNPairsConnection2332(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		console.log("找呀找飞机带对子(有序2332)");
		return [];
	}
	/**
	 * TODO 
	 * 随机出牌,【目前自动出最小牌而忽略是否对子等情况】
	 */
	public static randomPlay(myPoker:Array<Poker>):Array<Poker>{
		myPoker = PokerUtils.sortDescPokers(myPoker);//避免右手握牌影响提示出牌,也就是把给的牌都倒序好做比较
		let numberArray: Array<number> = new Array<number>();
		for(let j = 0 ; j < myPoker.length; j++){
			numberArray.push(myPoker[j].getOrderValue());
		}
		let outPokers: Array<Poker> =new Array<Poker>();
		//开始判断
		if(myPoker.length >= 15){
			console.log("牌数>=15");
			//如果自己有小于10的单张，优先出
			for(let i = numberArray.length - 1;i >= 0;i --){
				if(numberArray[i] < 10){
					if(numberArray.indexOf(numberArray[i])- numberArray.lastIndexOf(numberArray[i]) == 0){
						return [myPoker[i]];
					}
				}
			}
			//如果自己有小于10的对子，先出
			for(let i = numberArray.length - 1;i >= 0;i --){
				if(numberArray[i] < 10){
					if(numberArray.lastIndexOf(numberArray[i])- numberArray.indexOf(numberArray[i]) == 1){
						return [myPoker[i],myPoker[i - 1]];
					}
				}
			}
			//如果自己有三带二
			let fakeThreePair:Array<ThreePair> = new Array<ThreePair>();
			fakeThreePair.push(new ThreePair(0,0));//大于44433，假的【待验证】
			outPokers = this.seekThreePair(myPoker,fakeThreePair);
			if(outPokers != null || outPokers.length > 0){
				return outPokers;
			}
			//如果自己有连对
			outPokers = this.seekStraightPairs(myPoker,0,3);//334455
			if(outPokers != null || outPokers.length > 0){
				return outPokers;
			}
		}else if(myPoker.length < 15 && myPoker.length > 5){//牌小于15张大于7张
			console.log("7<牌数<15");
			//如果自己有单张，优先出
			for(let i = numberArray.length -1;i >= 0;i --){
					if(numberArray.indexOf(numberArray[i])- numberArray.lastIndexOf(numberArray[i]) == 0){
						return [myPoker[i]];
					}
			}
			//如果自己有对子，先出
			for(let i = numberArray.length - 1;i >= 0;i --){
					if(numberArray.lastIndexOf(numberArray[i])- numberArray.indexOf(numberArray[i]) == 1){
						return [myPoker[i],myPoker[i - 1]];
				}
			}
			//如果自己有三带二
			let fakeThreePair:Array<ThreePair> = new Array<ThreePair>();
			fakeThreePair.push(new ThreePair(0,0));//大于44433，假的【待验证】
			outPokers = this.seekThreePair(myPoker,fakeThreePair);
			if(outPokers != null || outPokers.length > 0){
				return outPokers;
			}
		}else if(myPoker.length == 5){//5,index01234
			console.log("牌数=5");
			//如果剩下一张炸弹和一单张
			if(myPoker[0].getOrderValue() == myPoker[1].getOrderValue()
			&& myPoker[0].getOrderValue() == myPoker[2].getOrderValue()
			&& myPoker[0].getOrderValue() == myPoker[3].getOrderValue()
			&& myPoker[3].getOrderValue() != myPoker[4].getOrderValue()){
				return [myPoker[4]];
			}
			if(myPoker[0].getOrderValue() != myPoker[1].getOrderValue()
			&& myPoker[1].getOrderValue() == myPoker[2].getOrderValue()
			&& myPoker[1].getOrderValue() == myPoker[3].getOrderValue()
			&& myPoker[1].getOrderValue() == myPoker[4].getOrderValue()){
				return [myPoker[0]];
			}
			//如果是三带一对，直接给完
			if(myPoker[0].getOrderValue() == myPoker[1].getOrderValue()
			&& myPoker[0].getOrderValue() == myPoker[2].getOrderValue()
			&& myPoker[0].getOrderValue() != myPoker[3].getOrderValue()
			&& myPoker[3].getOrderValue() == myPoker[4].getOrderValue()){
				return myPoker;
			}
			if(myPoker[0].getOrderValue() == myPoker[1].getOrderValue()
			&& myPoker[0].getOrderValue() != myPoker[2].getOrderValue()
			&& myPoker[2].getOrderValue() == myPoker[3].getOrderValue()
			&& myPoker[3].getOrderValue() == myPoker[4].getOrderValue()){
				return myPoker;
			}
			//如果是一个三张加两单张 98666 ,01234
			let rememberI: number = -1;
			for(let i = numberArray.length -1;i >= 0;i --){
					if(numberArray.indexOf(numberArray[i])- numberArray.lastIndexOf(numberArray[i]) == -2){
						rememberI = i;
						break;
					}
			}
			if(rememberI != -1) return [myPoker[rememberI],myPoker[rememberI-1],myPoker[rememberI-1]];
			//如果是两个对子加单张66443,66433,65533
			if(myPoker[0].getOrderValue() == myPoker[1].getOrderValue()
			&& myPoker[1].getOrderValue() != myPoker[2].getOrderValue()
			&& myPoker[2].getOrderValue() == myPoker[3].getOrderValue()
			&& myPoker[3].getOrderValue() != myPoker[4].getOrderValue()){
				return [myPoker[2],myPoker[3]];
			}
			if(myPoker[0].getOrderValue() == myPoker[1].getOrderValue()
			&& myPoker[1].getOrderValue() != myPoker[2].getOrderValue()
			&& myPoker[2].getOrderValue() != myPoker[3].getOrderValue()
			&& myPoker[3].getOrderValue() == myPoker[4].getOrderValue()){
				return [myPoker[3],myPoker[4]];
			}
			if(myPoker[0].getOrderValue() != myPoker[1].getOrderValue()
			&& myPoker[1].getOrderValue() == myPoker[2].getOrderValue()
			&& myPoker[2].getOrderValue() != myPoker[3].getOrderValue()
			&& myPoker[3].getOrderValue() == myPoker[4].getOrderValue()){
				return [myPoker[3],myPoker[4]];
			}
			//如果是一个对子加三单张
			let singleCount: number = 0;
			for(let i = numberArray.length -1;i >= 0;i --){//65443
					if(numberArray.indexOf(numberArray[i])- numberArray.lastIndexOf(numberArray[i]) == 0){
						singleCount ++;
					}
			}
			
			if(singleCount == 3){
				let rememberI2: number = -1;
				for(let i = numberArray.length -1;i >= 0;i --){//65443
					if(numberArray.lastIndexOf(numberArray[i])- numberArray.indexOf(numberArray[i]) == 1){
						rememberI2 = i;
						break;
					}
				}
				let random1Or0: number = Math.floor(Math.random()*2);
				if(random1Or0 == 0){
					return [myPoker[rememberI2],myPoker[rememberI2 -1]];
				}else{
					return this.autoOutSinglePlay(myPoker);
				}
			}
			//五个单张，直接给单张
			return this.autoOutSinglePlay(myPoker);

		}else if(myPoker.length == 4){//4
			console.log("牌数=4");
			//如果是炸弹
			if(myPoker[0].getOrderValue() == myPoker[1].getOrderValue()
			&& myPoker[0].getOrderValue() == myPoker[2].getOrderValue()
			&& myPoker[0].getOrderValue() == myPoker[3].getOrderValue()){
				return myPoker;
			}
			//如果是一个三张加单张
			let threeCount: number = -1;
			for(let i = numberArray.length -1;i >= 0;i --){//65443
					if(numberArray.indexOf(numberArray[i])- numberArray.lastIndexOf(numberArray[i]) == 2){
						threeCount = i;
						break;
					}
			}
			if(threeCount != -1){
				return [myPoker[threeCount],myPoker[threeCount -1],myPoker[threeCount -2]];
			}
			//如果是两个对子
			if(myPoker[0].getOrderValue() == myPoker[1].getOrderValue()
			&& myPoker[0].getOrderValue() != myPoker[2].getOrderValue()
			&& myPoker[2].getOrderValue() == myPoker[3].getOrderValue()){
				return [myPoker[2],myPoker[3]];
			}
			//如果是一个对子加两单张
			let twoCount: number = -1;
			for(let i = numberArray.length -1;i >= 0;i --){//6443
					if(numberArray.indexOf(numberArray[i])- numberArray.lastIndexOf(numberArray[i]) == -1){
						twoCount = i;
						break;
					}
			}
			let random1Or0: number = Math.floor(Math.random()*2);
			if(twoCount != -1){
				if(random1Or0 == 0){
					return [myPoker[twoCount],myPoker[twoCount -1]];
				}else{
					return this.autoOutSinglePlay(myPoker);
				}
			}
			//四个单张
			return this.autoOutSinglePlay(myPoker);

		}else if(myPoker.length == 3){//4
			console.log("牌数=3");
			//如果是一个三张
			if(myPoker[0].getOrderValue() == myPoker[1].getOrderValue()
			&& myPoker[0].getOrderValue() == myPoker[2].getOrderValue()){
				return myPoker;
			}
			//如果是一个对子加单张
			let random1Or0: number = Math.floor(Math.random()*2);
			if(myPoker[0].getOrderValue() == myPoker[1].getOrderValue()
			&& myPoker[1].getOrderValue() != myPoker[2].getOrderValue()){//443
				if(random1Or0 == 0){
					return [myPoker[0],myPoker[1]];
				}else{
					return this.autoOutSinglePlay(myPoker);
				}
			}
			if(myPoker[0].getOrderValue() != myPoker[1].getOrderValue()
			&& myPoker[1].getOrderValue() == myPoker[2].getOrderValue()){//443
				if(random1Or0 == 0){
					return [myPoker[1],myPoker[2]];
				}else{
					return this.autoOutSinglePlay(myPoker);
				}
			}
			//如果全是单张
			return this.autoOutSinglePlay(myPoker);

		}else if(myPoker.length == 2){//1
			console.log("牌数=2");
			//如果是对子
			if(myPoker[0].getOrderValue() == myPoker[1].getOrderValue()){
				return myPoker;
			}
			//如果是俩单张，从大往小出
			return this.autoOutSinglePlay(myPoker);
		}
		return this.autoOutSinglePlay(myPoker);
	}
	/**
	 * 自动给单张,默认最小
	 * myPoker 我的牌
	 * mySeat 我的座位号
	 * seat 出牌玩家的座位号
	 */

	public static autoOutSinglePlay(myPoker:Array<Poker>):Array<Poker>{
		console.log("自动给单张");//最右边一张牌，待优化
		let numberArray: Array<number> = new Array<number>();
		for(let j = 0 ; j < myPoker.length; j++){
			numberArray.push(myPoker[j].getOrderValue());
		}
		for(let i = numberArray.length - 1;i >= 0;i --){
			if(numberArray.indexOf(numberArray[i])- numberArray.lastIndexOf(numberArray[i]) == 0){
				return [myPoker[i]];
			}
		}
		return [myPoker[myPoker.length-1]];
	}
	/**
	 * 自动抛出一张单张,默认最小，【待优化】
	 * myPoker 我的牌
	 * mySeat 我的座位号
	 * seat 出牌玩家的座位号
	 */

	public static autoThrowPlay(myPoker:Array<Poker>):Array<Poker>{
		console.log("自动抛出一张单张");//最右边一张牌，待优化
		let numberArray: Array<number> = new Array<number>();
		for(let j = 0 ; j < myPoker.length; j++){
			numberArray.push(myPoker[j].getOrderValue());
		}
		for(let i = numberArray.length - 1;i >= 0;i --){
			if(numberArray[i] < 14 && numberArray.indexOf(numberArray[i])- numberArray.lastIndexOf(numberArray[i]) == 0){
				return [myPoker[i]];
			}
		}
		return [myPoker[myPoker.length-1]];
	}
	/**
	 * 出牌提示
	 * myPoker 我的牌
	 * mySeat 我的座位号
	 * isCampNumber 同阵营座位号
	 * poker 玩家出的一手牌（我要压的牌）
	 * seat 出牌玩家的座位号
	 */
	public static autoPrompt(myPoker:Array<Poker>,mySeat:number,isCampNumber:number,poker:Array<Poker>,seat:number):Array<Poker>{
		//myPoker = PokerUtils.sortDescPokers(myPoker);//避免右手握牌带来问题
		if(mySeat == seat || poker == null || poker.length == 0){
			return this.randomPlay(myPoker);//等于上家没牌或从自己开始给牌，自己随便出一张
		}
		//如果在同一阵营，暂定为不要
		if(seat == isCampNumber){
			if(poker.length == 4){//如果己方出的是炸弹，不要
				return [];
			}else{
				return this.seekRight(myPoker,poker);
			}
		}else{
			return this.seekRight(myPoker,poker);
		}
	}

	/**
	 * 出牌提示
	 * myPoker 我的牌
	 * mySeat 我的座位号
	 * isCampNumber 同阵营座位号
	 * poker 玩家出的一手牌（我要压的牌）
	 * seat 出牌玩家的座位号
	 */
	public static autoPromptOnline(myPoker:Array<Poker>,poker:Array<Poker>):Array<Poker>{
		//myPoker = PokerUtils.sortDescPokers(myPoker);//避免右手握牌带来问题
		if(poker == null || poker.length == 0){
			return this.randomPlay(myPoker);//等于上家没牌或从自己开始给牌，自己随便出一张
		}
		//如果在同一阵营，暂定为不要
		return this.seekRight(myPoker,poker);
	}
	/**
	 * myPoker 我的牌
	 * mySeat 我的座位号
	 * isCampNumber 同阵营座位号
	 * poker 玩家出的一手牌（我要压的牌）
	 * seat 出牌玩家的座位号
	 */
	public static autoPlay(myPoker:Array<Poker>,mySeat:number,isCampNumber:number,poker:Array<Poker>,seat:number):Array<Poker>{
		console.log("轮到我出牌了，座位号：",mySeat,"上家出牌，座位号：",seat,"是否同一阵营：",isCampNumber);
		if(myPoker == null || myPoker.length == 0){
			console.log("没牌了");
			return [];
		}
		if(poker == null || poker.length == 0){
			return this.randomPlay(myPoker);//等于上家没牌，自己随便出一张
		}
		//如果轮转一圈没人要或者开局自己出牌，则自己随便出一张
		if(mySeat === seat){
			return this.randomPlay(myPoker);
		}
		//如果在同一阵营，暂定为不要
		if(seat === isCampNumber){
			if(PokerTypeUtils.isSingle(poker) != -1){//是单张小于10以下的要
				if(poker[0].getOrderValue() <= 11){
					if(this.seekRight(myPoker,poker) != null || this.seekRight(myPoker,poker).length > 0){
						if(this.seekRight(myPoker,poker).length == 1){
							if(this.seekRight(myPoker,poker)[0].getOrderValue() > 12){
								return [];
							}
						}
					}
					return this.seekRight(myPoker,poker);
				}
			}else if(PokerTypeUtils.isPair(poker) != -1){//是对子打不打的条件
				if(poker[0].getOrderValue() < 10){
					return this.seekRight(myPoker,poker);
				}
			}else if(PokerTypeUtils.isThree(poker) != -1){//是三张打不打的条件
				if(poker[0].getOrderValue() < 12){
					return this.seekRight(myPoker,poker);
				}
			}else if(PokerTypeUtils.isStraightPairs(poker) != -1){//是连对打不打的条件
				if(poker[0].getOrderValue() < 6){
					return this.seekRight(myPoker,poker);
				}
			}
			return [];
		}else{//不是同一阵营
			return this.seekRight(myPoker,poker);
		}
	}
}