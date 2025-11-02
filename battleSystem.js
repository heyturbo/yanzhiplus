let selectedDrug = null;
let alreadyUseDrug = false;
let drugInventory = {
    "长生泉": { quantity: 2, url: "https://pic.imgdb.cn/item/666c0289d9c307b7e9ae8abd.png", tier: 0, description: "橙色品阶，长生不老之泉，饮用后临时增加1000生命值上限（刷新游戏后失效），且恢复至满状态" },
    "忘忧水": { quantity: 5, url: "https://pic.imgdb.cn/item/666c0afbd9c307b7e9beef9c.png", tier: 3, description: "绿色品阶，每1.5秒恢复1%生命值值，持续3秒，可叠加生效" },
    "三花丸": { quantity: 5, url: "https://pic.imgdb.cn/item/666c0afbd9c307b7e9beefcb.png", tier: 3, description: "绿色品阶，每1.5秒恢复2%法力值，持续3秒，可叠加生效" },
    "狂暴之魂": { quantity: 0, url: "https://pic.imgdb.cn/item/666c1408d9c307b7e9cea2fd.png", tier: 0, description: "橙色品阶，永久提高1%暴击率" },
    "神力仙丹": { quantity: 0, url: "https://pic.imgdb.cn/item/666c1408d9c307b7e9cea310.png", tier: 2, description: "蓝色品阶，20秒内暴击伤害提高50%" },
    "慧心糖果": { quantity: 0, url: "https://pic.imgdb.cn/item/666c1408d9c307b7e9cea328.png", tier: 0, description: "橙色品阶，永久提高1%暴击伤害，最多可使用此道具提升至350%" },
    "狂暴印记": { quantity: 0, url: "https://pic.imgdb.cn/item/666c1408d9c307b7e9cea34b.png", tier: 2, description: "蓝色品阶，20秒内暴击率提高50%" },
    "武尊秘露": { quantity: 1, url: "https://pic.imgdb.cn/item/666c0afbd9c307b7e9beef97.png", tier: 1, description: "紫色品阶，20秒内增加150%物理攻击力。" },
    "延寿露": { quantity: 0, url: "https://pic.imgdb.cn/item/666d311dd9c307b7e996b5b7.png", tier: 3, description: "绿色品阶，恢复玩家20%的生命值" },
    "天山雪莲": { quantity: 0, url: "https://pic.imgdb.cn/item/666d311dd9c307b7e996b5a8.png", tier: 3, description: "绿色品阶，恢复玩家20%的法力值" },
    "化功散": { quantity: 0, url: "https://pic.imgdb.cn/item/666d311dd9c307b7e996b585.png", tier: 2, description: "蓝色品阶，30秒内妖怪暴击率降低至0%" },
    "见手青": { quantity: 0, url: "https://pic.imgdb.cn/item/666d311dd9c307b7e996b565.png", tier: 0, description: "橙色品阶，投喂敌人后敌人会中毒，能力下降50%，直至本轮胜利" },
    "沉檀凝香": { quantity: 5, url: "https://pic.imgdb.cn/item/666d311dd9c307b7e996b538.png", tier: 1, description: "紫色品阶，恢复10%生命值并有几率清除玩家的异常状态" },
    "焚灵之丸": { quantity: 0, url: "https://pic.imgdb.cn/item/666d311dd9c307b7e996b52a.png", tier: 1, description: "紫色品阶，消耗自身生命值上限20%生命值，20秒内提升50%物理攻击力、法术攻击、暴击率和暴击伤害。生命值不足上限20%时无法使用。" },
    "冰莲絮": { quantity: 2, url: "https://pic.imgdb.cn/item/666d311dd9c307b7e996b4f5.png", tier: 2, description: "蓝色品阶，临时增加300点生命值（刷新游戏后失效）" },
    "晗灵果": { quantity: 2, url: "https://pic.imgdb.cn/item/666d311dd9c307b7e996b522.png", tier: 2, description: "蓝色品阶，临时增加300点法力值（刷新游戏后失效）" },
    "魔术棱柱": { quantity: 0, url: "https://pic.imgdb.cn/item/666e9aeed9c307b7e90669fa.png", tier: 1, description: "紫色品阶，消耗300000当前经验升级一个随机技能，通过该道具最多可让技能升至24级" },
    "幸运金币": { quantity: 0, url: "https://pic.imgdb.cn/item/666e9aeed9c307b7e9066a20.png", tier: 0, description: "橙色品阶，使用后将随机触发事件：让怪物血量变为1/获得50000经验/回退10轮" },
    "双倍经验药": { quantity: 1, url: "https://pic.imgdb.cn/item/666e9aeed9c307b7e9066a2f.png", tier: 2, description: "蓝色品阶，使用后60秒内战斗获胜所得经验增加两倍" },
    "四倍经验药": { quantity: 1, url: "https://pic.imgdb.cn/item/666e9aeed9c307b7e9066a29.png", tier: 1, description: "紫色品阶，使用后60秒内战斗获胜所得经验增加四倍" },
    "普通药材": { quantity: 0, url: "https://pic.imgdb.cn/item/6699fa28d9c307b7e9ad0b38.png", tier: 4, description: "白色品阶，恢复1000点生命值和法力值，收集3个可以合成1个绿色品阶的药品" },
    "上等药材": { quantity: 0, url: "https://pic.imgdb.cn/item/6699fa28d9c307b7e9ad0b15.png", tier: 3, description: "绿色品阶，临时增加20点速度，收集3个可以合成1个蓝色品阶的药品" },
    "极品药材": { quantity: 0, url: "https://pic.imgdb.cn/item/6699fa28d9c307b7e9ad0b0c.png", tier: 2, description: "蓝色品阶，临时增加59点生命值和法力值，收集3个可以合成1个紫色品阶的药品" },
    "珍贵药材": { quantity: 0, url: "https://pic.imgdb.cn/item/6699fa28d9c307b7e9ad0af3.png", tier: 1, description: "紫色品阶，临时增加35物理防御和法术防御，收集3个可以合成1个橙色品阶的药品" },
    "完美药材": { quantity: 0, url: "https://pic.imgdb.cn/item/669a6459d9c307b7e91b9003.png", tier: 0, description: "橙色品阶，临时增加15点物理攻击和法术攻击，收集2个可以炼制出随机药品" }
};
let collectCost = 100; // 初始采集花费
let activeBuffs = {};
let tempBonus = {
    health: 0,
    mana: 0,
    physicalAttack: 0,
    physicalDefense: 0,
    magicAttack: 0,
    magicDefense: 0,
    speed: 0
};
let drugBonus0 = {
    health: 0,
    mana: 0,
    physicalAttack: 0,
    physicalDefense: 0,
    magicAttack: 0,
    magicDefense: 0,
    speed: 0
};
let drugBonus = {
    health: 0,
    mana: 0,
    physicalAttack: 0,
    physicalDefense: 0,
    magicAttack: 0,
    magicDefense: 0,
    speed: 0
};
//飞升技能系统
let ascensionSkill = {
    name: '未开启',
    level: 1,
    effect: '未开启飞升技能'
};
let secondAscensionSkill = {
    name: '未开启',
    level: 1,
    effect: '未开启飞升技能'
};
let ascensionAttributes = {
    health: 0,
    mana: 0,
    physicalAttack: 0,
    physicalDefense: 0,
    magicAttack: 0,
    magicDefense: 0,
    speed: 0
};
const ascensionSkills = {
    attribute: [
        { name: '力劈华山', effect: level => `额外提供${3000 + level * 350}点物理攻击力`, baseValue: 3000, increment: level => level * 350 },
        { name: '慈悲心怀', effect: level => `额外提供${100000 + level * 8000}点生命值和${100000 + level * 8000}点法力值`, baseValue: 100000, increment: level => 8000 * level },
        { name: '势如破竹', effect: level => `额外提供${3000 + 300 * level}点速度和${3000 + 300 * level}点法术攻击力`, baseValue: 3000, increment: level => 300 * level },
        { name: '固若金汤', effect: level => `额外提供${100000 + 5000 * level}点物理防御和${100000 + 5000 * level}点法术防御`, baseValue: 100000, increment: level => 5000 * level },
        { name: '未开启', effect: level => "未开启飞升技能", baseValue: 0, increment: level => level * 0 },
        { name: '被封印的技能', effect: level => "未开启飞升技能", baseValue: 0, increment: level => level * 0 }
    ],
    combat: [
        { name: '魔龙之力', effect: level => `每回合恢复${10 + 1 * level}%的生命值`, baseValue: 10, increment: level => 1 * level },
        { name: '斩龙一式', effect: level => `当妖怪生命值在${87 - 3 * (level - 1)}%以上时，对妖怪的物理攻击伤害增加40%`, baseValue: 90, increment: level => 90 - 3 * (level - 1) },
        { name: '灵魂穿刺', effect: level => `当玩家暴击时,有${10 + 1.5 * level}%概率额外给妖怪附加等同于玩家物理攻击力1000%的伤害。`, baseValue: 10, increment: level => 10 + 1.5 * level},
        { name: '吸血魔刃', effect: level => `当玩家使用物理攻击时，会吸收等同伤害值${11 + 1 * (level - 1)}%的生命值，每级提升1%`, baseValue: 11, increment: level => 11 + 1 * (level - 1) },
        { name: '无我之境', effect: level => `当玩家受击时，有${21 + 1 * (level - 1)}%概率进入无我之境，免受一切伤害。持续时间5秒`, baseValue: 20, increment: level => 20 + 1 * (level - 1) },
        { name: '向死而生', effect: level => `受到致命伤害时，消耗法力值上限${100 - 1 * level}%的法力让自己血量变为1`, baseValue: 100, increment: level => -2 * level },
        { name: '以牙还牙', effect: level => `反弹本次承受伤害的${45 + 2 * level}%~${60 + 2 * level}%`, baseValue: 45, increment: level => 2 * level },
        { name: '铜墙铁壁', effect: level => `承受伤害降低${20 + 1.5 * level}%`, baseValue: 20, increment: level => 1.5 * level },
        { name: '法术精通', effect: level => `每次使用法术攻击时，有${30 + 2 * level}%概率再次施放一次法术伤害`, baseValue: 30, increment: level => 2 * level },
        { name: '天降甘霖', effect: level => `使用治疗时，触发仙气护体的概率增加至50%，并且仙气护体持续时间增加至${6 + 0.1 * level}秒`, baseValue: 6, increment: level => 0.1 * level }
    ],
    settlement: [
        { name: '财源滚滚', effect: level => `战斗胜利后金子奖励额外增加${convertPrice(10000 + 2500 * level)}文`, baseValue: 10000, increment: level => 2500 * level },
        { name: '焉知非福', effect: level => `战斗失败后，下一轮获得持续${3 + 1 * level}秒的仙气护体`, baseValue: 3, increment: level => 1 * level },
        { name: '举一反三', effect: level => `战斗胜利时获得的经验值增加${300 + 50 * level}%`, baseValue: 300, increment: level => 50 * level },
        { name: '金牌调解', effect: level => `战斗失败时不扣除金子，并获得${convertPrice(500 + 500 * level)}文金子的安慰金`, baseValue: 500, increment: level => 500 * level }
    ]
}; //飞升之术技能列表
let reenableAscension = false;
let ascensionEnabled = false;
// 战斗精灵属性
let spiritLevel = 1;
let spiritMultiplier = 1.00;
const maxSpiritLevel = 120;
const minSpiritMultiplier = 0.01;
const maxSpiritMultiplier = 4.15;
let playerTurn = false;
const obj = {
    get enemyTurn() {
        return !playerTurn;  // 每次访问 b 时，返回 a 的取反值
    }
};
let spiritPowerActive = false;
let attributesFetched = false;
let battleState;
let battleInterval;
let battleAttributes; // 用于存储战斗属性的独立容器
let maxHealth, maxMana; // 独立的最大值变量
let battleRounds = 1; // 记录玩家胜利的轮次
let currentExp = 0; // 当前经验值
let maxExp = 208; // 经验值上限
let enemyHealCount = 0; // 记录怪物治疗次数
let enemyPetCultivation;
let playerCultivation;
let additionalPlayerCultivation = 0;
let enemyPet = {
    health: 18,
    mana: 13,
    physicalAttack: 2,
    physicalDefense: 1,
    magicAttack: 2,
    magicDefense: 3,
    speed: 6,
    cultivation: 0
};
let enemyMaxHealth = enemyPet.health;
let enemyMaxMana = enemyPet.mana;
let enemyInitialState = null;
// 全局解控
let originalPerformAttack = performAttack;
let originalPerformPhysicalAttack = performPhysicalAttack;
let originalPerformMagicalAttack = performMagicalAttack;
let originalPerformHeal = performHeal;
let originalPerformPoison = performPoison;
let originalPerformDefense = performDefense;
let autoBattleInterval = null;
let playerCritRate = 0.1; // 10%
let playerCritDamage = 1.5; // 150%
let enemyCritRate = 0.6; // 60%
let enemyCritDamage = 1.8; // 180%
let pierceDamageContainer = {
    totalPierceDamage: 0
};
let poisonSkillActivated = false;
let enemyPhysicalAttackCount = 0; // 在函数外部定义变量怪物杀戮状态下的攻击次数
let extraShield = 0; //额外盾量
let wiseDefense = 0; //此变量用于外部调用该数值并进行显示
let wiseDefenseManaCost; //此变量用于外部调用该数值并进行显示
let firstStartBattle = false;
let onBattleState;
let divinedWeaponStatus = false;
let waterAmuletTriggered = false; // 新增标志变量
const weaponDescriptions = {
    lostBook: "遗失的洛书开启后，能够为你的物理技能附加专属效果，同时最多拥有3个效果。可以附加效果如下：\n1.破甲：根据物理攻击扣除怪物的物理防御力 \n2.恐吓：持续时间内禁止怪物触发暴击 \n3.眩晕：持续时间内怪物无法动作 \n4.穿透：造成伤害时额外附加物理攻击1/10的穿透伤害，并在持续时间结束后基于穿透伤害总和的一定比例给予怪物余波收尾伤害 \n5.麻痹：根据本次物理伤害减少怪物的血量上限 \n6.惶恐：降低敌人物理攻击力，降低值为自身物理攻击",
    fragmentedMap: "残页的河图开启后，能够为你的法术技能附加专属效果，同时最多拥有3个效果。可以附加效果如下：\n1.迟缓：根据伤害量的比例降低敌人的当前速度 \n2.沉默：持续时间内禁止怪物施放法术技能及附加减益效果 \n3.混乱：持续时间内怪物可能会攻击自己 \n4.灼烧：造成伤害时会给敌人附加额外灼烧伤害，己方速度之于怪物越快，灼烧伤害越猛烈 \n5.法力燃烧：根据本次法术伤害减少怪物的当前法力值，敌人法力为空时，将转化为生命伤害。\n6.法力吸取：吸收敌人的法力为己用，吸收量与所造成法术伤害有关",
    nirvanaGem: "定空的灵石开启后，每秒有概率驱散减益效果，同时最多驱散5个效果。可以驱散效果如下：\n1.醉酒：法术效果，玩家攻击怪物时会受到10%的反弹溅射伤害 \n2.禁疗：法术效果，持续时间内禁止玩家使用治疗技能 \n3.摄魂：法术效果，持续时间内玩家物理和法术攻击减半 \n4.失明：法术效果，持续时间内玩家物理攻击会被怪物闪避 \n5.法术迟钝：法术效果，持续时间内玩家使用法术技能时法力消耗值增至100倍 \n6.撕裂：物理效果，持续时间内玩家会受到每0.5秒的持续掉血效果，掉血量与怪物物理攻击有关 \n7.嘲讽：物理效果，持续时间内玩家的所有战斗行为会强制指向物理攻击，且物理伤害增至120% \n8.压制：物理效果，玩家若没有在3秒内做出战斗行为，血量会降至1 \n9.封印：物理效果，持续时间内玩家的飞升技能会被封印，使其无法生效 \n10.杀戮：物理效果，持续时间内会根据双方修为之差判断斩杀线，当一方血量低于双方修为差值的一定比例时，负值一方会被斩杀"
}; //神器描述列表
const effectCooldowns = {
    drunken: false,
    healingBan: false,
    soulCapture: false,
    blindfold: false,
    spellSlow: false,
    torn: false,
    suppressed: false,
    taunt: false,
    seal: false,
    slaughter:false,
};

function startBattle() {
    if (!attributesFetched) {
        showInfoBox("请先从属性面板获取属性。");
        return;
    }

    onBattleState = true;

    if (!firstStartBattle) {
        logBattleEvent(`【提示】这里是战斗面板，测试当前宠物极限战斗能力，轮次越高，当前宠物越强悍。 \n\n 【清屏】点击上方战斗记录字样可清屏 \n\n 【兼容】如果你无法完整看到本文本框底部，请调整网页字体大小至适当值`, 'gold', '20px');
        firstStartBattle = true;

    }
    
    // 开始自动触发型事件
    battleInterval = setInterval(() => {
        if (onBattleState) {
            if (battleAttributes.health <= 0) {
                showNextBattlePrompt(false); // 玩家失败，传递失败状态
                return;
            } else if (battleState.enemy.health <= 0) {
                showNextBattlePrompt(true);
                return;
            }
            
            if (summonEnemy) {
                const summonedEnemyName = battleState.enemy.specialty;

                // 从 specificAttackByEnemy 中获取类型和行为
                const enemyAttack = specificAttackByEnemy[summonedEnemyName];

                if (enemyAttack && enemyAttack.type === 'interval') {
                    // 延时性效果：在每次 battleInterval 触发时调用
                    enemyAttack.action();
                }  
            }
            
            updateUI();
            divineWeaponManager.applyNirvanaGemEffects();  
            handleSpiritHeal(); // 精灵治愈
            handleSpiritPower(); // 精灵增益
            handleSpiritAttack(); // 精灵助攻
        } else {
            console.log('尚未开始战斗');
        }
    }, 1000);

    playerTurn = battleAttributes.speed >= battleState.enemy.speed;
    updateUI();
    updatePetColor();
    updatePetName();
    decideEnemyCanPerform();
    
    if (!playerTurn) {
        setTimeout(enemyAttack, 500);
    }
}

function stopBattle() {
    onBattleState = false;
    stopEnemyAction();
    clearInterval(battleInterval); // 战斗结束，停止定时器
    if (summonEnemy) {
        handleBattleWithSummonEnemy(false);
    }
    logBattleEvent("战斗停止。");
}


// 内丹元气消耗函数
function decreaseElixirVigor(isVictory = true) {
    // 获取当前宠物已装备且有效的内丹
    const activeElixirs = elixirStates.filter(elixir => 
        elixir.applied && 
        elixir.equipped && 
        elixir.equippedPet === currentPet.name && 
        elixir.vigor > 0
    );

    if (activeElixirs.length === 0) return;

    activeElixirs.forEach(elixir => {
        let vigorLoss;
        if (isVictory) {
            // 战胜：损失20-30元气
            vigorLoss = Math.floor(20 + Math.random() * 11);
        } else {
            // 战败：损失50-80元气
            vigorLoss = Math.floor(50 + Math.random() * 31);
        }

        // 确保元气不会变成负数
        elixir.vigor = Math.max(0, elixir.vigor - vigorLoss);

        // 如果元气降为0，更新界面显示
        if (elixir.vigor === 0) {
            updateElixirDisplay();
            updateQualityDisplayWithBonuses();
            updateAttributePanel();
        }
    });
}
let elixirExpDoubleState = false;
function checkElixirVigorStatus() {
    const depletedElixirs = elixirStates.filter(elixir => 
        elixir.applied && 
        elixir.equipped && 
        elixir.equippedPet === currentPet.name && 
        elixir.vigor === 0
    );

    if (depletedElixirs.length > 0) {
        const message = depletedElixirs.length === 1 
            ? '有1个内丹元气已耗尽，请及时补充！' 
            : `有${depletedElixirs.length}个内丹元气已耗尽，请及时补充！`;
            
        showInfoBox(message);
    }
}


let defeatedPets = []; // 记录已阵亡的宠物 { key: 'xiaojin', name: '小金牛' }
let usedPets = []; // 记录所有已出战的宠物 { key: 'xiaojin', name: '小金牛' }

// 修改战斗结算函数
function showNextBattlePrompt(playerWon) {
    if (playerWon) {
        const wonValue = Math.floor(0 + Math.random() * 2);
        const elixirExpValue = elixirExpDoubleState ? Math.floor(1288 * Math.max(1 , Math.random() * battleRounds)) * 2 : Math.floor(1288 * Math.max(1 , Math.random() * battleRounds));
        decreaseArmsEndurance(key = null, wonValue);
        decreaseElixirVigor(true);  // 添加内丹元气消耗
        increaseEachElixirExp(elixirExpValue);
        currentLifeSpan = Math.max(0, currentLifeSpan - wonValue);
        
        if (!summonEnemy) {
            handleVictory();
            return;
        } else {
            toggleFightingDrawer();
            handleBattleWithSummonEnemy(playerWon);
            summonEnemy = false;
            return;
        }
    } else {
        const failedValue = Math.floor(5 + Math.random() * 5);
        decreaseArmsEndurance(key = null, failedValue);
        decreaseElixirVigor(false);  // 添加内丹元气消耗
        currentLifeSpan = Math.max(0, currentLifeSpan - failedValue);
        
        if (!summonEnemy) {
            handlePetDefeat();
            return;
        } else {
            toggleFightingDrawer();
            handleBattleWithSummonEnemy(false);
            summonEnemy = false;
            return;
        }
    }
}

function handleVictory() {
    // 胜利逻辑
    const minRewardMultiplier = 0.35;
    const maxRewardMultiplier = 1.75;
    const rewardMultiplier = Math.random() * (maxRewardMultiplier - minRewardMultiplier) + minRewardMultiplier;
    let reward = Math.floor(288 * battleRounds * rewardMultiplier);
    reward = Math.max(reward, 288);

    if (ascensionSkill.name === '财源滚滚' || secondAscensionSkill.name === '财源滚滚') {
        reward += calculateExtraReward();
    }
    
    if (Math.random() < 0.5) addItemToJinnang('creditCard100',1);
    
    goldAmount += reward;
    updateGoldDisplay(goldAmount);
    updateTitle();
    showBattleOverlay("https://pic.imgdb.cn/item/6672bf9fd9c307b7e9b189e0.png", 500, 1, 1000);
    increaseCurrentPetIntimacy(30);
    increaseCurrentPetAttention(1);
    increaseCurrentPetLearningValue(200);

    defeatedPets = [];
    usedPets = []; 
    battleRounds++;
    updateEnemyAttributes();
    gainExp();
    resetBattleState(true);
    resetBuffState(true);
    extraShield = 0;
    if (battleAttributes.speed >= battleState.enemy.speed) {
        playerTurn = true;
    } else {
        playerTurn = false;
    }
}

function handlePetDefeat() {
    // 直接应用失败惩罚并重新开始战斗
    applyDefeatPenalty();
    logBattleEvent('战斗失败！正在重新开始...', 'crimson', '20px');
}

function applyDefeatPenalty() {
    // 失败惩罚逻辑
    let penalty = 388 * battleRounds;

    if (ascensionSkill.name === '金牌调解' || secondAscensionSkill.name === '金牌调解') {
        penalty = 0;
        goldAmount += calculateCompensation();
    } else {
        goldAmount = Math.max(0, goldAmount - penalty);
    }

    showBattleOverlay("https://pic.imgdb.cn/item/6672bfa5d9c307b7e9b19753.webp", 500, 1, 1000);
    increaseCurrentPetIntimacy(-5);
    
    // 直接重新开始战斗，不弹出提示
    updateGoldDisplay(goldAmount);
    defeatedPets = [];
    usedPets = [];
    resetBattleState(false);
    resetBuffState(false);
    extraShield = 0;
    
    // 延迟一小段时间后自动重新开始战斗，让玩家看到失败提示
    setTimeout(() => {
        startBattle();
        updatePetInfo();
    }, 1000);
}

function calculateExtraReward() {
    // 额外奖励计算逻辑
    let extraReward = 0;
    if (ascensionSkill.name === '财源滚滚') {
        extraReward += ascensionSkill.baseValue + ascensionSkill.increment(ascensionSkill.level);
    }
    if (secondAscensionSkill.name === '财源滚滚') {
        extraReward += secondAscensionSkill.baseValue + secondAscensionSkill.increment(secondAscensionSkill.level);
    }
    logBattleEvent(`财源滚滚触发，额外增加了 ${convertPrice(extraReward)} 金子。`, 'pink');
    return extraReward;
}

function calculateCompensation() {
    // 赔偿金计算逻辑
    let compensation = 0;
    if (ascensionSkill.name === '金牌调解') {
        compensation += ascensionSkill.baseValue + ascensionSkill.increment(ascensionSkill.level);
    }
    if (secondAscensionSkill.name === '金牌调解') {
        compensation += secondAscensionSkill.baseValue + secondAscensionSkill.increment(secondAscensionSkill.level);
    }
    logBattleEvent(`金牌调解触发，未扣除金子并获得 ${convertPrice(compensation)} 的安慰金。`, 'pink');
    return compensation;
}

function resetBuffState(playerWon) {
    if (battleState.player.usingBuff) {
        battleState.player.usingBuff = false;
        logBattleEvent(`即时性药品效果已被重置。`, 'red');
        updateUI();
    }

    if (playerWon) {
        const obtainedDrugs = [];
        
        // 获取药品概率
        const drugProbability = Math.random();
        let drugTier;

        if (drugProbability < 0.1) {
            drugTier = 0;
        } else if (drugProbability < 0.29) {
            drugTier = 1;
        } else if (drugProbability < 0.6) {
            drugTier = 2;
        } else {
            drugTier = 3;
        }

        const drugKeys = Object.keys(drugInventory).filter(drug => drugInventory[drug].tier === drugTier);
        const randomDrug = drugKeys[Math.floor(Math.random() * drugKeys.length)];
        drugInventory[randomDrug].quantity += 1;
        obtainedDrugs.push(`${randomDrug} x1`);

        // battleRounds 大于等于 100 时额外掉落药品
        if (battleRounds >= 100) {
            for (let i = 0; i < 2; i++) {
                const extraDrugProbability = Math.random();
                let extraDrugTier;
                
                if (extraDrugProbability < 0.1) {
                    extraDrugTier = 0;
                } else if (extraDrugProbability < 0.29) {
                    extraDrugTier = 1;
                } else if (extraDrugProbability < 0.6) {
                    extraDrugTier = 2;
                } else {
                    extraDrugTier = 3;
                }

                const extraDrugKeys = Object.keys(drugInventory).filter(drug => drugInventory[drug].tier === extraDrugTier);
                const extraRandomDrug = extraDrugKeys[Math.floor(Math.random() * extraDrugKeys.length)];
                drugInventory[extraRandomDrug].quantity += 1;
                obtainedDrugs.push(`${extraRandomDrug} x1`);
            }
        }

        // spiritLevel 在 81 到 100 之间时，额外获取药品的概率
        if (spiritLevel >= 81) {
            let extraProbability = (spiritLevel - 80) * 0.05; // 每提升1级，额外概率增加5%

            // 确保额外概率不会超过100%
            if (extraProbability > 1) {
                extraProbability = 1;
            }

            // 根据额外概率获取额外药品
            if (Math.random() < extraProbability) {
                const extraDrugKeys = Object.keys(drugInventory);
                const extraRandomDrug = extraDrugKeys[Math.floor(Math.random() * extraDrugKeys.length)];
                drugInventory[extraRandomDrug].quantity += 1;
                obtainedDrugs.push(`🧚🏻战斗精灵的赐福，你还额外获得了 ${extraRandomDrug} x1`);
            }
        }

        // 记录所有获得的药品
        if (obtainedDrugs.length > 0) {
            const drugMessage = obtainedDrugs.join('， ');
            logBattleEvent(`本轮战斗胜利获得了: ${drugMessage}`, 'pink');
        }

        updateDrugGrid();
    }
}

function gainExp(expToAdd = 0) {
    const enemyLevelElement = document.getElementById('enemy-level');
    const enemyLevel = parseInt(enemyLevelElement.innerText, 10);
    
    let expMultiplier = battleState.player.expMultiplier || 1;

    // 检查并应用举一反三技能的经验值加成
    if (ascensionSkill.name === '举一反三' || secondAscensionSkill.name === '举一反三') {
        let extraExpMultiplier = 0;
        if (ascensionSkill.name === '举一反三') {
            extraExpMultiplier += (ascensionSkill.baseValue + ascensionSkill.increment(ascensionSkill.level)) / 100;
        }
        if (secondAscensionSkill.name === '举一反三') {
            extraExpMultiplier += (secondAscensionSkill.baseValue + secondAscensionSkill.increment(secondAscensionSkill.level)) / 100;
        }
        expMultiplier += extraExpMultiplier;
        logBattleEvent(`举一反三触发，经验值增加了 ${extraExpMultiplier * 100}%。`, "pink");
    }

    // 计算非线性经验值增长，如果expToAdd为0，则使用默认战斗经验值增长
    const gainedExp = expToAdd > 0 
        ? expToAdd 
        : (petLevel >= 180 
            ? Math.floor(Math.random() * (2288 - 1288 + 1) * expMultiplier) + 1288
            : Math.floor(100 + (Math.pow(enemyLevel, 1.1) * 0.85 * enemyLevel) * expMultiplier));

    let totalGainedExp = currentExp + gainedExp;

    while (totalGainedExp >= maxExp) {
        totalGainedExp -= maxExp; // 保存多余的经验值

        // 当宠物等级为200时，不再增长 maxExp，并且退出循环
        if (petLevel === 180) {
            maxExp = 99999999999999999999; // 设置 maxExp 为 99999999999999999999
            logBattleEvent("宠物已达到最高等级，经验值上限被设为最大值。", "pink");
            break; // 退出循环
        }

        // 确定 maxExp 的增量
        let increment;
        if (petLevel < 100 && enemyLevel < 100) {
            increment = Math.floor(Math.random() * (1000 - 600 + 1)) + 600;
        } else if (petLevel >= 101 && petLevel <= 180 && enemyLevel >= 101 && enemyLevel <= 140) {
            increment = Math.floor(Math.random() * (1800 - 1200 + 1)) + 1200;
        } else if (petLevel >= 181 && petLevel <= 200 && enemyLevel >= 141 && enemyLevel <= 150) {
            increment = Math.floor(Math.random() * (3600 - 2000 + 1)) + 2000;
        } else {
            increment = Math.floor(Math.random() * (3600 - 600 + 1)) + 600; // 默认增长规则
        }

        maxExp += increment; // 根据规则增长 maxExp

        if (petLevel < 200) {
            logBattleEvent("恭喜您升级了！", "pink");
            increasePetLevel(1); // 提升宠物一级
        } else {
            logBattleEvent("宠物已达到最高等级，经验转化为普通经验书！", "pink");
            addItemToJinnang('normalExperienceBook');
            updateJinnangItems();
        }
    }

    currentExp = totalGainedExp; // 更新剩余的经验值
    updateExpBar(currentExp, maxExp); // 更新经验条显示
}
      
function updateExpBar(currentExp, maxExp) {
  // 获取四个元素
  const expBar1 = document.getElementById('exp-bar');
  const expBar2 = document.getElementById('attribute-exp-bar');
  const expText1 = document.getElementById('exp-text');
  const expText2 = document.getElementById('attribute-exp-text');

  // 检查元素是否存在
  if (expBar1 && expText1) {
    // 计算进度条宽度百分比
    const expPercentage = (currentExp / maxExp) * 100;

    // 更新第一个进度条和文字
    expBar1.style.width = `${expPercentage}%`;
    expText1.textContent = `经验值: ${currentExp} / ${maxExp}`;
  }

  if (expBar2 && expText2) {
    // 计算进度条宽度百分比
    const expPercentage = (currentExp / maxExp) * 100;

    // 更新第二个进度条和文字
    expBar2.style.width = `${expPercentage}%`;
    expText2.textContent = `经验值: ${currentExp} / ${maxExp}`;
  }
}

let OneHundredOne = false;
let OneHundredFiftyOne = false;

function resetBattleState(playerWon) {
    if (!playerWon) {
        restoreEnemyState();
        if (ascensionSkill.name === '焉知非福' || secondAscensionSkill.name === '焉知非福') {
            battleState.player.divineProtection = true;
            const duration = (ascensionSkill.name === '焉知非福' ? (ascensionSkill.baseValue + ascensionSkill.increment(ascensionSkill.level)) : 0) +
                             (secondAscensionSkill.name === '焉知非福' ? (secondAscensionSkill.baseValue + secondAscensionSkill.increment(secondAscensionSkill.level)) : 0);
            logBattleEvent(`焉知非福触发,战斗获得持续 ${duration} 秒的仙气护体。`, "aqua");
            setTimeout(() => {
                battleState.player.divineProtection = false;
                logBattleEvent("焉知非福带来的仙气护体效果消失。", "aqua");
            }, duration * 1000);
        }
    }
    
    if (playerWon && battleRounds === 101 && !OneHundredOne) {
        OneHundredOne = true;
        addItemToJinnang('magicPetAmulet', 1);
        showInfoBox('恭喜你战胜了第100轮妖怪，获得了1个灵兽符文！');
    }
    
    if (playerWon && battleRounds === 151 && !OneHundredFiftyOne) {
        OneHundredFiftyOne = true;
        changeEnemyImage("realShape");
        if (autoBattleInterval !== null) {
            clearAutoBattle;
        }
        showInfoBox("你已经成功挑战150轮！你的爱宠经受住了魔王的考验，恭喜你！继续挑战会进入无尽模式。");
    }

    if (battleState.enemy.benumbed) {
        enemyMaxHealth = battleState.enemy.originalMaxHealth || enemyMaxHealth;
        battleState.enemy.benumbed = false;
        battleState.enemy.benumbStack = 0;
        battleState.enemy.originalMaxHealth = undefined;
    }
    
    updateUI();
    storeEnemyInitialState();
    clearEnemyEffect();
    clearPlayerEffect();
    enemyHealCount = 0;
    updatePetInfo();
    resetResurrectionState();
}

function setBackgroundImage(imageUrl) {
    const drawer = document.querySelector('.battle-system-drawer');
    if (drawer) {
        drawer.style.backgroundImage = `url('${imageUrl}')`;
    }
}

function logBattleEvent(event, color = 'white', fontSize = '12px') {
    const logDiv = document.getElementById("log");
    if (logDiv) {
        const newEvent = document.createElement("p");
        newEvent.innerText = event;
        newEvent.style.color = color; // 设置文字颜色
        newEvent.style.fontSize = fontSize;
        logDiv.appendChild(newEvent);

        // 检查日志条目数，如果超过 100 条，则删除最早的条目
        const logs = logDiv.getElementsByTagName("p");
        while (logs.length > 100) {
            logDiv.removeChild(logs[0]);
        }

        // 设置滚动条自动滚动到底部
        logDiv.scrollTop = logDiv.scrollHeight;
    } else {
        console.error("logDiv not found");
    }
}

function clearBattleLog() {
    const logDiv = document.getElementById("log");
    if (logDiv) {
        logDiv.innerHTML = ""; // 清除日志内容
    } else {
        console.error("logDiv not found");
    }
}

document.getElementById('battle-log-head').addEventListener('click',() => clearBattleLog());
        
function toggleFightingDrawer() {
    if (!attributesFetched) {
        showInfoBox("请先从属性面板获取属性。");
        return;
    }
    
    const jinghuashuiyue = jinnangItems.find(item => item.name === 'jinghuashuiyue' && item.quantity > 0);
    if (currentPet.name === 'Guolin·Li' && jinghuashuiyue) {
        toggleGuolinPanel();
        return;
    }
    
    if (battleState.player.taunt && !summonEnemy) {
        performAttack('physical');
        return;
    }
    
    const drawer = document.getElementById('fightingDrawer');
    const isOpen = drawer.classList.toggle('open');
    drawer.classList.add("show");  // 触发动画

    if (isOpen) {
        drawer.style.display = "flex";
        startBattle();
        if (!summonEnemy) {
        } else {
            updatePetInfo();
        }
    } else {
        drawer.style.display = "none";
        stopBattle();
    }

    document.getElementById('battleRounds').innerText = battleRounds;
    syncBattlePetSelect();
}

function calculateSkillAttributes() {
    const skillsArea = document.getElementById("skills-area");
    let skillAttributes = {
        health: 0,
        mana: 0,
        physicalAttack: 0,
        physicalDefense: 0,
        magicAttack: 0,
        magicDefense: 0,
        speed: 0
    };
    
    // 重置基础寿命值
    maxLifeSpan = 5000;
    
    if (skillsArea && currentPet.skills) {
        const skillDivs = Array.from(skillsArea.children);
        skillDivs.forEach(skillDiv => {
            const skillName = skillDiv.innerText.split(' ')[0];
            const skill = currentPet.skills.find(skill => skill.name === skillName && (skill.type === 'N' || skill.type === 'NE'));
                          
            if (skill) {
                const skillLevel = skill.level || 1;
                const skillMultiplier = Math.max(1, skill.multiplier);
                const levelMultiplier = 0.1 * skillLevel * skillMultiplier;
                
                // 处理长寿技能
                if (skill.type === 'N' && skill.name === '长寿') {
                    const longevityBonus = Math.round(168 * levelMultiplier * skillLevel);
                    maxLifeSpan += longevityBonus;
                }
                
                const NESkillsAndValue = {
                    "天神祝福": {
                        health: 2000,
                        speed: 200,
                        maxLevel: 6
                    },
                    "天王护卫": {
                        physicalDefense: 500,
                        magicDefense: 500,
                        maxLevel: 6
                    },
                    "姐就是女王": {
                        health: 10000,
                        maxLevel: 6
                    },
                    "生生不息": {
                        lifeSpanBonus: 10000,  // 改用独特的键名避免混淆
                        maxLevel: 6
                    }
                };
                
                // 处理普通被动技能
                if (skill.type === 'N') {
                    skillAttributes.health += Math.round(168 * levelMultiplier);
                    skillAttributes.mana += Math.round(98 * levelMultiplier);
                    skillAttributes.physicalAttack += Math.round(64 * levelMultiplier);
                    skillAttributes.physicalDefense += Math.round(32 * levelMultiplier);
                    skillAttributes.magicAttack += Math.round(63 * levelMultiplier);
                    skillAttributes.magicDefense += Math.round(31 * levelMultiplier);
                    skillAttributes.speed += Math.round(9 * levelMultiplier);
                } 
                // 处理NE技能
                else if (skill.type === 'NE') {
                    const neSkill = NESkillsAndValue[skillName];
                    if (neSkill) {
                        const maxLevel = neSkill.maxLevel || skillLevel;
                        const limitedSkillLevel = Math.min(maxLevel, skillLevel);
                        
                        // 特殊处理生生不息技能
                        if (skillName === '生生不息') {
                            maxLifeSpan += neSkill.lifeSpanBonus * limitedSkillLevel;
                        } else {
                            // 处理其他属性
                            Object.entries(neSkill).forEach(([attr, value]) => {
                                if (attr !== 'maxLevel' && attr !== 'lifeSpanBonus' && skillAttributes.hasOwnProperty(attr)) {
                                    skillAttributes[attr] += value * limitedSkillLevel;
                                }
                            });
                        }
                    }
                }
            }
        });
    }
    
    return skillAttributes;
}
        
//进入战斗界面更新双方关键信息
function updatePetInfo() {
    if (!currentPet) {
        console.error("currentPet is not initialized");
        return;
    }

    const currentAttributes = calculateCurrentAttributes();
    const totalAttributes = {
        endurance: currentAttributes.endurance,
        intelligence: currentAttributes.intelligence,
        strength: currentAttributes.strength,
        agility: currentAttributes.agility,
        faith: currentAttributes.faith
    };

    const secondaryAttributes = calculateSecondaryAttributes(totalAttributes, currentWisdom);
    const spiritAttributes = getCurrentSpiritAttributes();
    const critRate = playerCritRate;
    const critDamage = playerCritDamage;
    

    if (!battleState) {
        battleState = {
            player: {
                health: secondaryAttributes.health + spiritAttributes.health + ascensionAttributes.health,
                mana: secondaryAttributes.mana + spiritAttributes.mana + ascensionAttributes.mana,
                physicalAttack: secondaryAttributes.physicalAttack + spiritAttributes.physicalAttack + ascensionAttributes.physicalAttack,
                physicalDefense: secondaryAttributes.physicalDefense + spiritAttributes.physicalDefense + ascensionAttributes.physicalDefense,
                magicAttack: secondaryAttributes.magicAttack + spiritAttributes.magicAttack + ascensionAttributes.magicAttack,
                magicDefense: secondaryAttributes.magicDefense + spiritAttributes.magicDefense + ascensionAttributes.magicDefense,
                speed: secondaryAttributes.speed + spiritAttributes.speed + ascensionAttributes.speed,
                critRate: playerCritRate,
                critDamage: playerCritDamage
            },
            enemy: { ...enemyPet }
        };
        if (ascensionSkill.name && ascensionEnabled && ascensionSkill.name !== "被封印的技能") {
            battleState.player.originalAscensionSkill = ascensionSkill.name;
        }
        
        if (secondAscensionSkill.name && reenableAscension && secondAscensionSkill.name !== "被封印的技能") {
            battleState.player.originalSecondAscensionSkill = secondAscensionSkill.name;
        }
    } else {
        battleState.player.health = secondaryAttributes.health + spiritAttributes.health + ascensionAttributes.health;
        battleState.player.mana = secondaryAttributes.mana + spiritAttributes.mana + ascensionAttributes.mana;
        battleState.player.physicalAttack = secondaryAttributes.physicalAttack + spiritAttributes.physicalAttack + ascensionAttributes.physicalAttack;
        battleState.player.physicalDefense = secondaryAttributes.physicalDefense + spiritAttributes.physicalDefense + ascensionAttributes.physicalDefense;
        battleState.player.magicAttack = secondaryAttributes.magicAttack + spiritAttributes.magicAttack + ascensionAttributes.magicAttack;
        battleState.player.magicDefense = secondaryAttributes.magicDefense + spiritAttributes.magicDefense + ascensionAttributes.magicDefense;
        battleState.player.speed = secondaryAttributes.speed + spiritAttributes.speed + ascensionAttributes.speed;
        battleState.player.critRate = playerCritRate;
        battleState.player.critDamage = playerCritDamage;

        if (ascensionSkill.name && ascensionEnabled && ascensionSkill.name !== "被封印的技能") {
            battleState.player.originalAscensionSkill = ascensionSkill.name;
        }

        if (secondAscensionSkill.name && reenableAscension && ascensionSkill.name !== "被封印的技能") {
            battleState.player.originalSecondAscensionSkill = secondAscensionSkill.name;
        }
    }

    battleAttributes = { ...battleState.player };
    maxHealth = battleAttributes.health;
    maxMana = battleAttributes.mana;

    updateUI();
    attributesFetched = true;
}
// 全局敌人对象数组
let summonEnemy = false;
// 敌人图像信息
const enemyImages = [
    { status: 'default', name: '妖怪', url: 'https://pic.imgdb.cn/item/6678135ed9c307b7e9060dd6.gif' },
    { status: 'rampaged', name: '狂暴的心魔', url: 'https://pic.imgdb.cn/item/669e973ad9c307b7e9381309.gif' },
    { status: 'mao', name: '上古心魔', url: 'https://pic.imgdb.cn/item/66a0d383d9c307b7e93a3779.gif' },
    { status: 'realShape', name: '大渊神真身', url: 'https://pic.imgdb.cn/item/66a616f4d9c307b7e9b24c97.gif' },
    { status: 'darkShape', name: '暗黑大渊神', url: 'https://pic.imgdb.cn/item/66a61b8cd9c307b7e9b71e30.gif' },
    { status: 'practiceEnemy', name: '练习树桩', url: 'https://pic.imgdb.cn/item/665433e8d9c307b7e93ac758.gif' },
    { status: 'practiceEnemyPlus', name: '高级树桩', url: 'https://pic.imgdb.cn/item/665433e8d9c307b7e93ac758.gif' },
    { status: 'ancientEvil', name: '太古魔魂', url: 'https://pic.imgdb.cn/item/66cc999fd9c307b7e9d7ca2a.gif' },
    { status: 'expEnemy', name: '永夜大帝', url: 'https://pic.imgdb.cn/item/66cd62b1d9c307b7e9afcf5b.gif' },
    { status: 'noWorkBoss', name: '無班之魂', url: 'https://pic.imgdb.cn/item/66cdda7cd9c307b7e941d522.gif' },
    { status: 'qiongQi', name: '穷奇', url: 'https://pic.imgdb.cn/item/66d07119d9c307b7e93234a9.gif' },
    { status: 'baiYin', name: '白银VIP怪', url: 'https://pic.imgdb.cn/item/66d5d91ad9c307b7e95066ac.gif' },
    { status: 'stoneDragon', name: '岩龙', url: 'https://pic.imgdb.cn/item/66e6d18fd9c307b7e9c12e52.gif' },
    { status: 'fireGiant', name: '火焰巨人', url: 'https://pic1.imgdb.cn/item/6791d204d0e0a243d4f7088b.gif' },
];

// 更改敌人图像的函数
function changeEnemyImage(status) {
    const enemyImage = enemyImages.find(image => image.status === status);

    if (enemyImage) {
        document.getElementById("enemy-image").src = enemyImage.url;
        document.getElementById("enemy-name").innerText = enemyImage.name;
    } else {
        console.error(`Status '${status}' not found in enemyImages.`);
    }
}
        
// 全局敌人信息对象
const enemies = {
    practiceEnemy: {
        name: '练习树桩',
        level: 100,
        health: 5000000000,
        mana: 5000000000,
        physicalAttack: 100,
        physicalDefense: 0,
        magicAttack: 100,
        magicDefense: 0,
        speed: 100,
        cultivation: 1024,
        enemyCritRate: 0.8,
        enemyCritDamage: 2.5,
        backgroundImage: 'https://pic.imgdb.cn/item/66cc8f01d9c307b7e9c6d2e8.png',
        reward: () => gainExp(3000), // 奖励：3000经验值
        rewardMessage: '3000经验值',
        specialty: 'practiceEnemy'
    },
    practiceEnemyPlus: {
        name: '高级练习树桩',
        level: 200,
        health: 5000000000,
        mana: 5000000000,
        physicalAttack: 1000,
        physicalDefense: 100000,
        magicAttack: 1000,
        magicDefense: 100000,
        speed: 60000,
        cultivation: 520000,
        enemyCritRate: 0.8,
        enemyCritDamage: 2.5,
        backgroundImage: 'https://pic.imgdb.cn/item/66cc8f01d9c307b7e9c6d2e8.png',
        reward: () => gainExp(10000), // 奖励：3000经验值
        rewardMessage: '10000经验值',
        specialty: 'practiceEnemyPlus'
    },
    ancientEvil: {
        name: '太古魔魂封印',
        level: 100,
        health: 67160000,
        mana: 2400000,
        physicalAttack: 168000,
        physicalDefense: 999999,
        magicAttack: 5100,
        magicDefense: 999999,
        speed: 3000,
        cultivation: 151800,
        enemyCritRate: 0.01,
        enemyCritDamage: 1000,
        backgroundImage: 'https://pic.imgdb.cn/item/66cc8f01d9c307b7e9c6d2e8.png',
        reward: () => {
            const items = ['cultivationPill500', 'universalCrystal', 'universalKernel'];
            const randomItem = items[Math.floor(Math.random() * items.length)];
            const randomQuantity = Math.floor(Math.random() * 4) + 2; // Math.random() * 6 生成 0-5，+5 后得到 5-10
            const itemMap = {
                'cultivationPill500': '修为灵丹（橙）',
                'universalCrystal': '天空之晶',
                'universalKernel': '天空精华',
            };
            addItemToJinnang(randomItem, randomQuantity);
            showInfoBox(`你获得了${randomQuantity}个${itemMap[randomItem]}，请检查你的背包！`);
        }, // 奖励：随机道具
        rewardMessage: '无',
        specialty: 'ancientEvil'
    },
    expEnemy: {
        name: '永夜大帝',
        level: 200,
        health: 127160000,
        mana: 2400000,
        physicalAttack: 280000,
        physicalDefense: 240000,
        magicAttack: 318000,
        magicDefense: 136200,
        speed: 287000,
        cultivation: 301800,
        enemyCritRate: 0.15,
        enemyCritDamage: 1.8,
        backgroundImage: 'https://pic.imgdb.cn/item/66cd61f8d9c307b7e9af46c0.png',
        reward: () => gainExp(1600000), 
        rewardMessage: '额外经验1600000点',
        specialty: 'expEnemy' // 特殊能力标识符
    },
    noWorkBoss: {
        name: '無班之魂',
        level: 200,
        health: 600,
        mana: 2800000,
        physicalAttack: 2450,
        physicalDefense: 1200,
        magicAttack: 2450,
        magicDefense: 1200,
        speed: 999999,
        cultivation: 9999999,
        enemyCritRate: 1,
        enemyCritDamage: 2.5,
        backgroundImage: 'https://pic.imgdb.cn/item/66cd61f8d9c307b7e9af46c0.png',
        reward: () => addItemToJinnang('angelWings',1), 
        rewardMessage: '天使之翼',
        specialty: 'noWorkBoss' // 特殊能力标识符
    },
    qiongQi: {
        name: '穷奇',
        level: 160,
        health: 38000,
        mana: 12000,
        physicalAttack: 3450,
        physicalDefense: 63600,
        magicAttack: 1128,
        magicDefense: 31250,
        speed: 320000,
        cultivation: 150000,
        enemyCritRate: 0,
        enemyCritDamage: 0,
        backgroundImage: 'https://pic.imgdb.cn/item/66d071cbd9c307b7e9344927.png',
        reward: () => addItemToJinnang('wealthyGemBag', 1),
        rewardMessage: '一个富贵宝石袋',
        specialty: 'qiongQi' // 特殊能力标识符
    },
    baiYin: {
        name: '试炼之地妖怪',
        level: 180,
        health: 100000,
        mana: 20000,
        physicalAttack: 1500,
        physicalDefense: 300,
        magicAttack: 1300,
        magicDefense: 280,
        speed: 2024,
        cultivation: 1024,
        enemyCritRate: 0.5,
        enemyCritDamage: 1.5,
        backgroundImage: 'https://pic.imgdb.cn/item/66d5d9a1d9c307b7e950d6b2.png',
        reward: () => {
            const expGainedRatio = Math.round(petLevel * (5 + Math.random() * 5));
            if (petLevel <= 180) {
                gainExp(expGainedRatio);
            }
            handleBaiYinReward();
        },
        rewardMessage: '无',
        specialty: 'baiYin' // 特殊能力标识符
    },
    stoneDragon: {
        name: '岩龙',
        level: 180,
        health: 3800000000,
        mana: 125000,
        physicalAttack: 3450,
        physicalDefense: 60000,
        magicAttack: 1128,
        magicDefense: 60000,
        speed: 2400,
        cultivation: 471200,
        enemyCritRate: 0.65,
        enemyCritDamage: 3.8,
        backgroundImage: 'https://pic.imgdb.cn/item/66e6d194d9c307b7e9c131d3.png',
        reward: () => {
            generateItemToJinnang('hongHuang', '洪荒至尊仙葫', 'https://pic.imgdb.cn/item/66d0b3f3d9c307b7e995a14c.png', price = 8000, quantity = 1, description = '上古传说中的仙葫，流传久远，极其稀有，打开可获得随机珍稀道具');
            increaseCurrentPetIntimacy(600);
        },
        rewardMessage: '1个珍贵的洪荒至尊仙葫。在这次艰难的对抗中，你的宠物与你并肩作战，好感大增，亲密度增加了600！',
        specialty: 'stoneDragon' // 特殊能力标识符
    },
    fireGiant: {
        name: '火焰巨人',
        level: 180,
        health: 1000000000,
        mana: 50000000,
        physicalAttack: 2650,
        physicalDefense: 3000,
        magicAttack: 6520,
        magicDefense: 2700,
        speed: 60000,
        cultivation: 8000,
        enemyCritRate: 0.35,
        enemyCritDamage: 2.15,
        backgroundImage: 'https://pic.imgdb.cn/item/66e6d194d9c307b7e9c131d3.png',
        reward: () => {
            increaseCurrentPetLearningValue(1000)
            increaseCurrentPetIntimacy(600);
        },
        rewardMessage: `在法术精英怪物训练下的珍贵成果：1000学习度和600亲密度，可用于训练技能加成`,
        specialty: 'fireGiant' // 特殊能力标识符
    },
};
// 定义不同敌人的独特战斗能力
const specificAttackByEnemy = {
    'expEnemy': {
        type: 'interval', // 延时性效果
        action: () => handleExpEnemySkill() //永夜大帝吸血
    },
    'noWorkBoss': {
        type: 'interval', // 延时性效果
        action: () => {
            const manaLost = Math.round(battleAttributes.mana * 0.15);
            battleAttributes.mana -= manaLost;
            battleState.enemy.magicDefense = Math.round(battleAttributes.magicAttack * battleState.player.critDamage);
            battleState.enemy.physicalDefense = Math.round(battleAttributes.physicalDefense * battleState.player.critDamage);
            logBattleEvent(`無班之魂の法术穿透，损失${manaLost}法力值`, 'lightblue');
            handleNoWorkBossSkill(); //概率升级
        }
    },
    'ancientEvil': {
        type: 'interval', // 延时性效果
        action: () => handleAncientEvilSkill() //吸收暴击
    },
    'qiongQi': {
        type: 'instant', // 即时性效果
        action: () => {
            handleQiongQiSkill(); //吸血回防
            handleTaunt();
        }
    },
    'practiceEnemy': {
        type: 'instant',
        action: () => {
            let practiceEnemy;
            practiceEnemy = setTimeout(() => {
                if (summonEnemy && battleState.enemy.specialty === 'practiceEnemy' && onBattleState) {
                    battleState.enemy.physicalAttack += 3000000;
                    battleState.enemy.magicAttack += 3000000;
                    updateUI();
                    showInfoBox('还没死，还得练，再给你上上强度');
                } else {
                    clearTimeout(practiceEnemy);
                }
            },600000);
        }
    },
    'practiceEnemyPlus': {
        type: 'instant',
        action: () => {
            let practiceEnemy;
            practiceEnemy = setTimeout(() => {
                if (summonEnemy && battleState.enemy.specialty === 'practiceEnemyPlus' && onBattleState) {
                    battleState.enemy.health = enemyMaxHealth;
                    updateUI();
                    logBattleEvent('❤️【敌人恢复】加强版树桩恢复了满状态生命值');
                } else {
                    clearTimeout(practiceEnemy);
                }
            },30000);
        }
    },
    'baiYin': {
        type: 'instant',
        action: () => {
            logBattleEvent('战胜后可得到大量经验值和概率获得提升宠物技能的神秘物质', 'gold');
        }
    },
    'stoneDragon': {
        type: 'interval',
        action: () => {
            if (summonEnemy && battleState.enemy.name === '岩龙' && onBattleState) {
                if (battleState.enemy.health >= enemyMaxHealth * 0.2) {
                    battleState.enemy.physicalDefense += 60000;
                    battleState.enemy.magicDefense += 60000;
                    updateUI();
                } else {
                    battleState.enemy.physicalAttack += Math.floor(Math.random() * 1500 + 1500);
                    if (battleState.player.shocked) {
                        return;
                    } else {
                        battleState.player.shocked = true;
                        logBattleEvent('岩龙开始汲取雷电的力量，你被附加了触电效果，每次攻击岩龙将大幅削减你的物理防御和法术防御。', 'grey');
                    }
                }
            }
        }
    },
    'fireGiant': {
        type: 'instant',
        action: () => {
            // 初始化heat状态
            if (typeof battleState.player.heat === 'undefined') {
                battleState.player.heat = false;
            }
            
            // 如果已经处于高温状态，直接返回
            if (battleState.player.heat) {
                return;
            }

            // 存储原始值
            const originalCritDamage = playerCritDamage;
            const originalCritRate = playerCritRate;
            
            // 暴击伤害翻倍，确保不会出现0值
            battleState.player.critDamage = Math.max(1.5, originalCritDamage * 2);
            // 暴击率减半且上限50%，确保至少保留10%的暴击率
            battleState.player.critRate = Math.max(0.1, Math.min(0.5, Math.floor(originalCritRate * 50) * 0.01));
            
            // 标记状态已改变
            battleState.player.heat = true;
            
            // 记录事件
            showEffect('enemyEffect','https://pic1.imgdb.cn/item/6791d32dd0e0a243d4f708f4.gif');
            updateUI();
        }
    },
};

function handleCleanHeat() {
    battleState.player.heat = false;
    battleState.player.critDamage = Math.max(1.5 , playerCritDamage * 0.5);
    battleState.player.critRate = Math.max(0.1 , playerCritRate * 2);
    updateUI();
}

function applySpecificAttackByEnemy(summonedEnemyName) {
    const attack = specificAttackByEnemy[summonedEnemyName];
    if (attack) {
        if (attack.type === 'interval') {
            // 延时性效果：在每次 battleInterval 触发时调用
            attack.action();
        } else if (attack.type === 'instant') {
            // 即时性效果：立即执行一次
            attack.action();
        }
    } else {
        console.log(`敌人 ${summonedEnemyName} 没有特殊攻击能力`);
    }
}

// 处理召唤敌人战斗结果的函数
function handleBattleWithSummonEnemy(playerWon) {
    if (!battleState.enemyKey || !enemies[battleState.enemyKey]) {
        return;
    }
    
    const enemy = enemies[battleState.enemyKey]; // 获取原始敌人对象
    
    if (playerWon) {
        // 调用敌人的奖励函数
        if (enemy.reward) {
            enemy.reward(); // 执行奖励
            if (enemy.rewardMessage !== '无') {
                showInfoBox(`你击败了${enemy.name}，获得了${enemy.rewardMessage}！`, null, null, 'green');
            }
        } else {
            showInfoBox(`你击败了${enemy.name}，但没有任何奖励。`, null, null, 'yellow');
        }
    } else {
        // 失败处理
        showInfoBox(`你在与${enemy.name}的战斗中失败了，没有获得任何奖励。`, null, null, 'red');
    }

    // 重置战斗状态
    resetBattleState(true);
    resetBuffState(false);
    clearEnemyEffect();
    clearPlayerEffect();
    clearAutoBattle();
    restoreEnemyState();
    summonEnemy = false;
    updateUI();
}
        
// 召唤敌人函数
function summonEnemyByType(enemyType, manuallySummon = true) {
    if (!summonEnemy && attributesFetched) {
        const enemy = enemies[enemyType];
        
        if (enemy) {
            const summonEnemyLogic = () => {
                summonEnemy = true;
                toggleFightingDrawer();
                battleState.enemy = { ...enemy };
                battleState.enemyKey = enemyType;
                
                enemyMaxHealth = enemy.health;
                enemyMaxMana = enemy.mana;
                enemyPetCultivation = enemy.cultivation;
                enemyCritRate = enemy.enemyCritRate;
                enemyCritDamage = enemy.enemyCritDamage;

                changeEnemyImage(enemyType);
                setBackgroundImage(enemy.backgroundImage);
                document.getElementById('enemy-level').innerText = enemy.level;
                updateUI();
                storeSummonEnemyInitialState();

                // 如果敌人类型为 'instant'，立即执行一次特殊攻击
                const enemyAttack = specificAttackByEnemy[enemy.specialty];

                if (enemyAttack && enemyAttack.type === 'instant') {
                    enemyAttack.action();
                }
            };

            if (manuallySummon) {
                showInfoBox(
                    `你将会召唤${enemy.name}，战胜后你会获得奖励`,
                    summonEnemyLogic,
                    () => {
                        summonEnemy = false;
                        goldAmount -= 20000;
                        updateGoldDisplay(goldAmount);
                        showInfoBox('你仓皇逃跑中，损失了20两金', null, null, 'red');
                        return;
                    }
                );
            } else {
                summonEnemyLogic();
            }
        } else {
            showInfoBox('未知的敌人类型', null, null, 'red');
        }
    } else {
        showInfoBox('正在战斗中或未知错误', null, null, 'red');
    }
} 

function handleBaiYinReward() {
    const chance = getRandomInt(1,100);
    if (chance <= 50) {
        generateItemToJinnang('universalAsh','宇宙之尘','https://pic.imgdb.cn/item/66d5dd07d9c307b7e953e4e1.png',price = 10, quantity = 1, description = '击败白银之地怪物的嘉奖，收集一定数量可兑换宇宙之晶');
        showInfoBox('你获得一个宇宙之尘',null,null,null,'https://pic.imgdb.cn/item/66d5dd07d9c307b7e953e4e1.png');
    } else if (chance <= 90) {
        addItemToJinnang('gemLuckyBag',1);
        showInfoBox('你获得一个盲盒宝石袋',null,null,null,'https://pic.imgdb.cn/item/66db2daed9c307b7e9c7508a.png');
    } else {
        addItemToJinnang('universalCrystal',1);
        showInfoBox('你获得一个宇宙之晶',null,null,null,'https://pic.imgdb.cn/item/66cc940cd9c307b7e9cb752e.png');
    }
}

let baiYinInterval = null;  // 在外部作用域定义
function handleBattleWithBaiYin() {
    if (baiYinInterval !== null) {
        showInfoBox('试炼之地正在持续中！无法叠加！',null,null,'red');
        return;
    }
    showInfoBox('试炼之地开始！持续60秒，期间会自动开始战斗，请勿执行其他操作以免造成崩溃！',null,null,'red');

    if (!onBattleState && !summonEnemy) {
        baiYinInterval = setInterval(() => {
            if (useItem('baiYinCard',1)) {
                summonEnemyByType('baiYin', false);
                addItemToJinnang('hailMonsterPill',1);
                autoBattle();
            } else {
                clearInterval(baiYinInterval);
                baiYinInterval = null;  // 清除后将其重置为 null
                showInfoBox('试炼之地召唤卡数量不足，自动战斗已停止！');
                document.getElementById('baiyinOverlay').style.display = 'none';
            }
        }, 1000);
    } else {
        clearInterval(baiYinInterval);
        baiYinInterval = null;  // 清除后将其重置为 null
    }
}
        
function handleExpEnemySkill() {
    const healthLost = Math.round(battleAttributes.health * 0.1);
    battleAttributes.health -= healthLost;
    battleState.enemy.health += healthLost * 10;

    battleAttributes.physicalDefense = 1;
    battleAttributes.magicDefense = 1;
    
    logBattleEvent(`永夜大帝の吸血魔刃，破坏了你的护甲且吸取了你${healthLost}生命值`, 'red');
    updateUI();
}   

let qiongQi = null;  // 确保 qiongQi 变量在全局范围内定义

function handleQiongQiSkill() {
    // 检查当前敌人的 specialty 是否为 'qiongQi'
    const isQiongQiName = battleState.enemy.specialty === 'qiongQi';
    
    // 计算损失的生命值和临时护盾
    const healthLost = Math.round(battleAttributes.health * (0.01 + Math.random() * 0.02));
    let temporaryShield = Math.round(healthLost * playerCritDamage);

    battleAttributes.physicalAttack *= 0.01;
    battleAttributes.magicAttack *= 0.01;
    
    // 清除现有定时器，防止重复运行
    if (qiongQi !== null) {
        clearInterval(qiongQi);
        qiongQi = null;
    }

    if (summonEnemy && isQiongQiName) {
        // 设置高防御值
        battleState.enemy.physicalDefense = 999999999999;
        battleState.enemy.magicDefense = 999999999999;

        // 创建定时器并延迟2秒启动
        setTimeout(() => {
            battleState.enemy.physicalDefense = battleAttributes.physicalAttack * 100;
            battleState.enemy.magicDefense = battleAttributes.magicAttack * 100;

            qiongQi = setInterval(() => {
                battleAttributes.health -= healthLost;
                enemyMaxHealth += healthLost;
                battleState.enemy.health += healthLost;
                battleState.enemy.physicalDefense += temporaryShield;
                battleState.enemy.magicDefense += temporaryShield;

                enemyPetCultivation = playerCultivation + 24000;
                battleState.enemy.speed = battleAttributes.speed + 2400;

                // 更新UI和记录战斗事件
                updateUI();

                // 结束条件：玩家死亡、敌人死亡或 summonEnemy 变为 false
                if (battleAttributes.health <= 0 || battleState.enemy.health <= 0 || !summonEnemy) {
                    clearInterval(qiongQi);
                    qiongQi = null; // 防止后续错误
                }
            }, 1000);
        }, 3000);
        logBattleEvent('穷奇擅长吸收敌人的生命之力转换为自己的护甲', 'gold');
    } else {
        // 如果条件不满足，确保定时器不会运行
        if (qiongQi !== null) {
            clearInterval(qiongQi);
            qiongQi = null;
        }
    }
}

function handleNoWorkBossSkill() {
    // 生成一个随机数，如果小于0.8，则退出函数
    if (Math.random() < 0.8) {
        return;
    }

    // 获取敌人的等级元素并将其值转换为整数
    const enemyLevelElement = document.getElementById('enemy-level');
    const enemyLevel = parseInt(enemyLevelElement.innerText, 10);

    // 增加敌人的等级
    const newEnemyLevel = enemyLevel + 200;
    enemyLevelElement.innerText = newEnemyLevel;

    // 记录事件日志
    logBattleEvent('無班之魂变得恼怒，等级提升了', 'red');
}
        
function handleAncientEvilSkill() {
    // 确保 battleState.player.damageLost 被正确初始化
    if (typeof battleState.player.damageLost === 'undefined') {
        battleState.player.damageLost = false;
    }

    // 检查是否已经触发了该技能
    if (battleState.player.damageLost) {
        return;
    }

    // 保存原始暴击伤害值
    const originalPlayerCritDamage = playerCritDamage;
    const originalEnemyCritDamage = enemyCritDamage;

    // 调整暴击伤害值
    battleState.player.critDamage = originalPlayerCritDamage * 0.5;
    enemyCritDamage += originalPlayerCritDamage * 0.5;
    battleState.player.damageLost = true;

    // 10秒后恢复原始暴击伤害值
    setTimeout(() => {
        battleState.player.damageLost = false;
        battleState.player.critDamage = originalPlayerCritDamage;
        enemyCritDamage = originalEnemyCritDamage;
        updateUI();
    }, 10000);

    // 记录事件
    logBattleEvent('太古魔魂会吸收你的暴击伤害作为己用', 'lightblue');
}

function initializeEnemyPet() {
    enemyPet = {
        health: 13,
        mana: 7,
        physicalAttack: 9,
        physicalDefense: 3,
        magicAttack: 5,
        magicDefense: 1,
        speed: 7,
        cultivation: 12
    };

    enemyMaxHealth = enemyPet.health;
    enemyMaxMana = enemyPet.mana;
    enemyPetCultivation = enemyPet.cultivation;

    if (battleState) {
        battleState.enemy = { ...enemyPet };
    }
    storeEnemyInitialState();
}

//这是固定挑战怪物
function updateEnemyAttributes() {
    const maxValues = {
        health: 300000000,
        mana: 150000000,
        physicalAttack: 340000,
        physicalDefense: 230000,
        magicAttack: 270000,
        magicDefense: 230000,
        speed: 64000,
        cultivation: 520000
    };

    const increasePerRoundAfter150 = {
        health: 50000,
        mana: 32000,
        physicalAttack: 30,
        physicalDefense: 150,
        magicAttack: 25,
        magicDefense: 120,
        speed: 20,
        cultivation: 35
    };

    function calculateAttributeValue(attribute, initialValue) {
        let newValue = 0;

        if (battleRounds <= 45) {
            // 1-10轮，每轮固定增加 300 * battleRounds
            const randomMultiplier = Math.floor(Math.random() * 50) + 1 + battleRounds;
            newValue = initialValue + (7 * randomMultiplier);
        } else if (battleRounds <= 70) {
            // 11-30轮，每轮固定增加 1588 * battleRounds
            const randomMultiplier = Math.floor(Math.random() * 60) + 1 + battleRounds;
            newValue = initialValue + (8 * randomMultiplier);
        } else if (battleRounds <= 80) {
            // 31-60轮，每轮固定增加 9000 * battleRounds
            const randomMultiplier = Math.floor(Math.random() * 100) + 1 + battleRounds;
            newValue = initialValue + (16 * randomMultiplier);
        } else if (battleRounds <= 90) {
            // 61-80轮，增长为 maxValue * (0.0001 ~ 0.0003) * battleRounds 的随机值
            const multiplier = 0.0003 + Math.random() * 0.0006;
            newValue = initialValue + maxValues[attribute] * multiplier;
        } else if (battleRounds <= 99) {
            // 81-99轮，增长为 maxValue * (0.0003 ~ 0.0005) * battleRounds 的随机值
            const multiplier = 0.0006 + Math.random() * 0.0012;
            newValue = initialValue + maxValues[attribute] * multiplier;
        } else if (battleRounds === 100) {
            // 100轮，等同 maxValue * 0.1
            newValue = maxValues[attribute] * 0.1;
        } else if (battleRounds <= 149) {
            // 101-149轮，增长等同于 (maxValue - maxValueAt100) / 150 * battleRounds
            const maxValueAt100 = maxValues[attribute] * 0.1;
            const increasePerRound = (maxValues[attribute] - maxValueAt100) / 150;
            newValue = increasePerRound * battleRounds;
        } else if (battleRounds === 150) {
            // 150轮，等同 maxValue
            newValue = maxValues[attribute];
        } else {
            // 150轮之后，按现有逻辑增长
            const maxValueAt150 = maxValues[attribute];
            const roundsAfter150 = battleRounds - 150;
            const randomMultiplier = Math.floor(Math.random() * (150 - 2 + 1)) + 2;
            const increaseAfter150 = roundsAfter150 * (increasePerRoundAfter150[attribute] * randomMultiplier);
            newValue = maxValueAt150 + increaseAfter150;
        }
        
        if (battleRounds <= 150) {
            newValue = Math.min(newValue, maxValues[attribute]);
        }

        return newValue;
    }
    
    if (!battleState.enemy.rampaged) {
        enemyCritRate = Math.random() * (0.99) + 0.01;  // 生成 [0.01, 1) 之间的随机值
        enemyCritDamage = Math.random() * (1.5) + 1.5;  // 生成 [1.5, 3) 之间的随机值
    }

    enemyPet.health = Math.round(calculateAttributeValue('health', enemyPet.health));
    enemyPet.mana = Math.round(calculateAttributeValue('mana', enemyPet.mana));
    enemyPet.physicalAttack = Math.round(calculateAttributeValue('physicalAttack', enemyPet.physicalAttack));
    enemyPet.physicalDefense = Math.round(calculateAttributeValue('physicalDefense', enemyPet.physicalDefense));
    enemyPet.magicAttack = Math.round(calculateAttributeValue('magicAttack', enemyPet.magicAttack));
    enemyPet.magicDefense = Math.round(calculateAttributeValue('magicDefense', enemyPet.magicDefense));
    enemyPet.speed = Math.round(calculateAttributeValue('speed', enemyPet.speed));
    enemyPet.cultivation = Math.round(calculateAttributeValue('cultivation', enemyPet.cultivation));

    enemyMaxHealth = enemyPet.health;
    enemyMaxMana = enemyPet.mana;
    enemyPetCultivation = enemyPet.cultivation;

    battleState.enemy = { ...enemyPet };
    storeEnemyInitialState();
    enemyLevel = battleRounds;
    document.getElementById('enemy-level').innerText = enemyLevel;
    handleRampaged();
}

function storeEnemyInitialState() {
    enemyInitialState = JSON.parse(JSON.stringify(enemyPet));
}

function restoreEnemyState() {
    if (enemyInitialState) {
        enemyPet = JSON.parse(JSON.stringify(enemyInitialState));
        enemyMaxHealth = enemyPet.health;
        enemyMaxMana = enemyPet.mana;
        enemyPetCultivation = enemyPet.cultivation;
        battleState.enemy = { ...enemyPet };
        clearPlayerEffect();
        enemyLevel = battleRounds;
        document.getElementById('enemy-level').innerText = enemyLevel;
    }
}

function storeSummonEnemyInitialState() {
    if (summonEnemy) summonEnemyInitialState = JSON.parse(JSON.stringify(battleState.enemy));
}

function restoreSummonEnemyState() {
    if (summonEnemyInitialState) {
        enemyPet = JSON.parse(JSON.stringify(enemyInitialState));
        enemyMaxHealth = enemyPet.health;
        enemyMaxMana = enemyPet.mana;
        enemyPetCultivation = enemyPet.cultivation;
        battleState.enemy = { ...enemyPet };
        clearPlayerEffect();
        enemyLevel = battleRounds;
        document.getElementById('enemy-level').innerText = enemyLevel;
    }
}//暂不启用

function getEnemyStatus() {
    let status = [];
    if (!playerTurn) status.push("⚔️");
    if (battleState.enemy.rampaged) status.push("狂暴");
    if (enemyRivival) status.push("复活中");
    if (battleState.enemy.armorBreak) status.push("破甲");
    if (battleState.enemy.weaken) status.push("虚弱");
    if (battleState.enemy.wounded) status.push("重伤");
    if (battleState.enemy.bleeding) status.push("流血");
    if (battleState.enemy.corrode) status.push("腐蚀");
    if (battleState.enemy.sleep) status.push("沉睡");
    if (battleState.enemy.pierced) status.push("穿透");
    if (battleState.enemy.silenced) status.push("沉默");
    if (battleState.enemy.poisoned) status.push("中毒");
    if (battleState.enemy.stunned) status.push("眩晕");
    if (battleState.enemy.intimidated) status.push("恐吓");
    if (battleState.enemy.terrified) status.push("惶恐");
    if (battleState.enemy.benumbed) status.push("麻痹");
    if (battleState.enemy.dazed) status.push("混乱");
    if (battleState.enemy.burnt) status.push("灼烧");
    if (battleState.enemy.slow) status.push("迟缓");
    // Exorcise doesn't need a status as it's an immediate effect, not a lasting status.
    return status.join(", ");
}

function updateEnemyStatusDisplay() {
    const statusElement = document.getElementById('enemy-status');
    if (statusElement) {
        statusElement.innerText = getEnemyStatus();
    } 
}

function getPlayerStatus() {
    let status = [];
    if (playerTurn) status.push("⚔️");
    if (lifeBoxMode) status.push('肉盾模式')
    if (battleState.player.defensing) status.push("蓄力中");
    if (battleState.player.shocked) status.push("触电");
    if (battleState.player.heat) status.push("高温");
    if (battleState.player.shielded) status.push("护盾");
    if (battleState.player.hidden) status.push("隐身");
    if (battleState.player.reflecting) status.push("反弹伤害");
    if (battleState.player.healing) status.push("持续回血");
    if (battleState.player.beiming) status.push("北冥");
    if (battleState.player.spiritPowerActive) status.push("Blessing!");
    if (battleState.player.divineProtection) status.push("仙气护体");
    if (battleState.player.drunken) status.push("醉酒");
    if (battleState.player.torn) status.push("撕裂");
    if (battleState.player.suppressed) status.push("压制");
    if (battleState.player.taunt) status.push("嘲讽");
    if (battleState.player.seal) status.push("封印");
    if (battleState.player.slaughter) status.push("杀戮");
    if (battleState.player.healingBan) status.push("禁疗");
    if (battleState.player.soulCapture) status.push("摄魂");
    if (battleState.player.blindfold) status.push("失明");
    if (battleState.player.spellSlow) status.push("法术迟钝");
    return status.join(", ");
}

function updatePlayerStatusDisplay() {
    const statusElement = document.getElementById('player-status');
    if (statusElement) {
        statusElement.innerText = getPlayerStatus();
    }
}

function showEffect(effectId, imageUrl) {
    const effect = document.getElementById(effectId);
    effect.style.backgroundImage = `url(${imageUrl})`;
    effect.classList.add('show-effect');
    setTimeout(() => {
        effect.classList.remove('show-effect');
        effect.style.backgroundImage = ''; // 移除背景图，避免残留
    }, 350); // 显示0.35秒
} //展示战斗中技能特效

function updateUI() {
    // 更新玩家的生命值和法力值
    const yourPetHealthElement = document.getElementById("your-pet-health");
    const yourPetMaxHealthElement = document.getElementById("your-pet-max-health");
    const yourPetManaElement = document.getElementById("your-pet-mana");
    const yourPetMaxManaElement = document.getElementById("your-pet-max-mana");

    yourPetHealthElement.innerText = battleAttributes.health;
    yourPetMaxHealthElement.innerText = maxHealth;
    yourPetManaElement.innerText = battleAttributes.mana;
    yourPetMaxManaElement.innerText = maxMana;

    yourPetHealthElement.classList.add("gold-text");
    yourPetMaxHealthElement.classList.add("gold-text");
    yourPetManaElement.classList.add("blue-text");
    yourPetMaxManaElement.classList.add("blue-text");

    // 更新妖怪的生命值和法力值
    const enemyPetHealthElement = document.getElementById("enemy-pet-health");
    const enemyMaxHealthElement = document.getElementById("enemy-max-health");
    const enemyPetManaElement = document.getElementById("enemy-pet-mana");
    const enemyMaxManaElement = document.getElementById("enemy-max-mana");

    enemyPetHealthElement.innerText = battleState.enemy.health;
    enemyMaxHealthElement.innerText = enemyMaxHealth;
    enemyPetManaElement.innerText = battleState.enemy.mana;
    enemyMaxManaElement.innerText = enemyMaxMana;

    enemyPetHealthElement.classList.add("gold-text");
    enemyMaxHealthElement.classList.add("gold-text");
    enemyPetManaElement.classList.add("blue-text");
    enemyMaxManaElement.classList.add("blue-text");

    // 更新其他属性
    document.getElementById("your-pet-physical-attack").innerText = battleAttributes.physicalAttack;
    document.getElementById("your-pet-physical-defense").innerText = battleAttributes.physicalDefense;
    document.getElementById("your-pet-magic-attack").innerText = battleAttributes.magicAttack;
    document.getElementById("your-pet-magic-defense").innerText = battleAttributes.magicDefense;
    document.getElementById("your-pet-speed").innerText = battleAttributes.speed;
    document.getElementById("your-pet-cultivation").innerText = playerCultivation; //玩家修为
    document.getElementById("player-cultivation").innerText = playerCultivation;

    document.getElementById("enemy-pet-physical-attack").innerText = battleState.enemy.physicalAttack;
    document.getElementById("enemy-pet-physical-defense").innerText = battleState.enemy.physicalDefense;
    document.getElementById("enemy-pet-magic-attack").innerText = battleState.enemy.magicAttack;
    document.getElementById("enemy-pet-magic-defense").innerText = battleState.enemy.magicDefense;
    document.getElementById("enemy-pet-speed").innerText = battleState.enemy.speed;
    
    //更新敌人修为显示
    const enemyPetCultivationElement = document.getElementById("enemy-pet-cultivation");
    enemyPetCultivationElement.innerText = battleState.enemy.cultivation;

    // 更新暴击率和暴击伤害
    document.getElementById("player-crit-rate").innerText = Math.round(battleAttributes.critRate * 100) + '%';
    document.getElementById("player-crit-damage").innerText = Math.round(battleAttributes.critDamage * 100) + '%';
    document.getElementById("enemy-crit-rate").innerText = Math.round(enemyCritRate * 100) + '%';
    document.getElementById("enemy-crit-damage").innerText = Math.round(enemyCritDamage * 100) + '%';
    
    // 更新状态显示
    updatePlayerStatusDisplay();
    updateEnemyStatusDisplay();
    updatePetLevel();
    getShieldStatus();
    updateHealthAndManaDisplay();
    calculateAndDisplayDodgeRate();
    document.getElementById('battleRounds').innerText = battleRounds;
}

document.getElementById('secondary-attributes-panel').addEventListener('click', () => {
    if (!attributesFetched) {
        showInfoBox("请先从属性面板获取属性。");
        return;
    }
    const skillAttributes = calculateSkillAttributes();
    const nameMap = new Map([
        ['health', '生命值'],
        ['magicAttack', '法术攻击'],
        ['magicDefense', '法术防御'],
        ['mana', '法力值'],
        ['physicalAttack', '物理攻击'],
        ['physicalDefense', '物理防御'],
        ['speed', '速度']
    ]);

    let skillAttributesMessage = '';

    for (const [key, value] of Object.entries(skillAttributes)) {
        const displayName = nameMap.get(key) || key; // 如果没有匹配到替换的名称，则使用原始英文名
        skillAttributesMessage += `${displayName}: ${value}\n`;
    }

    showInfoBox(`\n1. 二级属性主要由各一级属性（耐力、智力等）决定 \n2. 被动技能的数量和等级也会增加二级属性 \n3.药材、五行符可以提供额外属性 \n4.精灵和飞升技能提供的属性为战斗属性，脱离战斗状态时将会复位 \n5. 当前技能加成为： \n\n ${skillAttributesMessage} \n6. 生命值是玩家受到伤害时会扣除的值，战斗过程中玩家的血量会每秒按照上线比例进行减少 \n7. 法力值是玩家使用技能时的必要消耗数值 \n8. 物理攻击决定物理类技能的伤害基础 \n9. 物理防御决定玩家对敌人物理技能的减伤效果，请注意，减伤效果并不是线性增加的，当防御数值达到临界值后，减伤效果的增长将会变缓（下同法术防御） \n10. 法术攻击决定玩家的法术伤害类技能的强度，同时决定了玩家的治疗能力和施毒能力 \n11. 法术防御决定了玩家抵抗敌人法术伤害的减伤效果 \n12.速度决定战斗开始时的出手先后顺序，同时也决定了物理闪避率（根据双方速度之差判断闪避概率）`)
});//点击二级属性面板弹出相关信息
        
function updateHealthAndManaDisplay() {
    updateDisplay('your-pet-health', 'your-pet-max-health', 'health', 20, '#cc0000');
    updateDisplay('your-pet-mana', 'your-pet-max-mana', 'mana', 10, '#0066ff');
    updateDisplay('enemy-pet-health', 'enemy-max-health', 'health', 20, '#cc0000');
    updateDisplay('enemy-pet-mana', 'enemy-max-mana', 'mana', 10, '#0066ff');
}

function updateDisplay(currentId, maxId, type, warningThreshold, warningColor) {
    const currentElement = document.getElementById(currentId);
    const maxElement = document.getElementById(maxId);

    const currentValue = parseInt(currentElement.innerText);
    const maxValue = parseInt(maxElement.innerText);

    const percentage = (currentValue / maxValue) * 100;

    let gradientColor;
    if (type === 'health') {
        if (currentId === 'your-pet-health' && extraShield !== 0) {
            gradientColor = 'linear-gradient(to bottom, #477AD6, #8FF1FD, #477AD6)';
        } else {
            gradientColor = 'linear-gradient(to bottom, #7E2723, #9F322C, #CB5D5A, #CB5D5A, #9F322C, #7E2723)';
        }
    } else if (type === 'mana') {
        gradientColor = 'linear-gradient(to bottom, #394F89, #405CB2, #5C81EE, #5C81EE, #405CB2, #394F89)';
    }

    currentElement.innerHTML = `
    <div style="z-index:1000;">
        <div style="width: 100%; background-color: #35472C; overflow: hidden; position: relative; border: 1px solid black;">
            <div id="${currentId}-bar" style="width: ${percentage}%; height: 100%; background: ${gradientColor}; text-align: center; color: white; font-size: 12px; font-weight: bold; transition: width 0.5s ease-in-out;">
                <span style="text-stroke: 1px black;">${currentValue}/${maxValue}</span>
            </div>
            ${percentage < warningThreshold ? `
                <div id="${currentId}-warning" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 1px solid ${warningColor}; animation: warning-blink 1s infinite;"></div>
            ` : ''}
        </div>
    </div>
    `;

    maxElement.style.display = 'none';
}

let damageRatio = 1;

//总伤害计算函数
function calculateDamage(baseDamage, isCritical, critDamage, playerEffect = false) {
    if (isCritical) {
        baseDamage = Math.floor(baseDamage * critDamage);
    }
    
    if (playerEffect) {
        baseDamage *= Math.floor(Math.max(0, damageRatio));
    }
    
    // ========== 应用宠物修炼伤害加成 ==========
    try {
        const currentPetName = document.getElementById("pet-select")?.value;
        if (currentPetName) {
            const storageKey = `pet_interaction_${currentPetName}`;
            const savedData = localStorage.getItem(storageKey);
            
            if (savedData) {
                const data = JSON.parse(savedData);
                const damageBonus = data.damageBonus || 0;
                
                if (damageBonus > 0) {
                    baseDamage = Math.floor(baseDamage * (1 + damageBonus * 0.01));
                    console.log(`${currentPetName}的伤害加成: +${damageBonus.toFixed(2)}, 最终伤害: ${baseDamage}`);
                }
            }
        }
    } catch (error) {
        console.warn('宠物伤害加成应用失败:', error);
    }
    
    // 经脉伤害加成计算
    try {
        const state = getCurrentJingmaiState();
        if (state && state.jingmaiStates) {
            const currentLevel = state.jingmaiStates.currentLevel || 0;
            const stageNumber = getStageNumber(currentLevel);
            
            if (stageNumber > 1) {
                const stageDamageMultiplier = 1 + (stageNumber * 0.02);
                baseDamage = Math.floor(baseDamage * stageDamageMultiplier);
                
                const randomChance = Math.random();
                let bonusMultiplier = 1;
                
                if (stageNumber >= 2 && stageNumber <= 10) {
                    if (randomChance < 0.1) {
                        bonusMultiplier = 1.2;
                    }
                } else if (stageNumber >= 11 && stageNumber <= 20) {
                    if (randomChance < 0.2) {
                        bonusMultiplier = 1.4;
                    }
                } else if (stageNumber >= 21 && stageNumber <= 30) {
                    if (randomChance < 0.3) {
                        bonusMultiplier = 1.6;
                    }
                } else if (stageNumber >= 31 && stageNumber <= 40) {
                    if (randomChance < 0.4) {
                        bonusMultiplier = 1.8;
                    }
                } else if (stageNumber >= 41) {
                    if (randomChance < 0.5) {
                        bonusMultiplier = 2;
                    }
                }
                
                if (bonusMultiplier > 1) {
                    baseDamage = Math.floor(baseDamage * bonusMultiplier);
                }
            }
        }
    } catch (error) {
        console.warn('经脉伤害加成计算出错，使用默认伤害:', error);
    }
    
    return baseDamage;
}
        
function checkCriticalHit(critRate) {
    
    return Math.random() < critRate;
}

function calculateAndDisplayDodgeRate() {
    let speedDifference;
    let cultivationDifference;

    let playerPhysicalDodgeElement = document.getElementById('player-physical-dodge-rate');
    let playerMagicDodgeElement = document.getElementById('player-magic-dodge-rate');
    let enemyPhysicalDodgeElement = document.getElementById('enemy-physical-dodge-rate');
    let enemyMagicDodgeElement = document.getElementById('enemy-magic-dodge-rate');

    let playerSkillEnhancementRate = 0;
    if (battleState.player.hidden) playerSkillEnhancementRate = 0.2;
    // 计算速度差异导致的物理闪避率
    speedDifference = battleAttributes.speed - battleState.enemy.speed;
    if (speedDifference > 0) {
        playerPhysicalDodgeElement.innerText = (Math.min((Math.abs(speedDifference) / 2500) * 0.01 + playerSkillEnhancementRate, 0.8) * 100).toFixed(2) + '%'; // 确保概率不超过80%
        enemyPhysicalDodgeElement.innerText = '0%';
    } else {
        enemyPhysicalDodgeElement.innerText = (Math.min((Math.abs(speedDifference) / 2500) * 0.01, 0.8) * 100).toFixed(2) + '%'; // 确保概率不超过80%
        playerPhysicalDodgeElement.innerText = '0%';
    }

    // 计算修为差异导致的魔法闪避率
    cultivationDifference = playerCultivation - enemyPetCultivation;
    if (cultivationDifference > 0) {
        playerMagicDodgeElement.innerText = (Math.min((Math.abs(cultivationDifference) / 35000) * 0.01 + playerSkillEnhancementRate, 0.8) * 100).toFixed(2) + '%'; // 确保概率不超过80%
        enemyMagicDodgeElement.innerText = '0%';
    } else {
        enemyMagicDodgeElement.innerText = (Math.min((Math.abs(cultivationDifference) / 35000) * 0.01, 0.8) * 100).toFixed(2) + '%'; // 确保概率不超过80%
        playerMagicDodgeElement.innerText = '0%';
    }
}
        
function handleDodge(target) {
    let speedDifference;
    let dodgeChance = 0; // 默认闪避概率为 0
    let dodgeElement; // 对应的图片元素：玩家图片或敌人图片
    let playerSkillEnhancementRate = 0;
    if (battleState.player.hidden) playerSkillEnhancementRate = 0.2;

    if (target === 'player') {
        // 玩家闪避逻辑
        speedDifference = battleAttributes.speed - battleState.enemy.speed;
        if (speedDifference > 0) {
            dodgeChance = Math.min((Math.abs(speedDifference) / 2500) * 0.01 + playerSkillEnhancementRate, 0.8); // 确保概率不超过80%
        }
        dodgeElement = document.getElementById('your-pet-image');
        console.log(`玩家闪避概率为：${dodgeChance}`);
    } else if (target === 'enemy') {
        // 敌人闪避逻辑
        speedDifference = battleState.enemy.speed - battleAttributes.speed;
        if (speedDifference > 0) {
            dodgeChance = Math.min((Math.abs(speedDifference) / 2500) * 0.01, 0.8); // 确保概率不超过80%
        }
        dodgeElement = document.getElementById('enemy-image');
        console.log(`敌人闪避概率为：${dodgeChance}`);
    } else {
        console.error('Invalid target for dodge handling');
        return false;
    }

    // 确定是否触发闪避
    const dodgeRoll = Math.random();
    const isDodge = dodgeRoll < dodgeChance;
    console.log(`闪避随机数为：${dodgeRoll}`);

    if (isDodge) {
        // 触发闪避
        // 应用视觉效果
        if (target === 'player') {
            dodgeElement.style.opacity = '0.5';
            showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66bb115dd9c307b7e9a6c2d0.png');
        } else {
            dodgeElement.style.opacity = '0.5';
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66bb115dd9c307b7e9a6c2d0.png');
        }

        // 0.1秒后复原
        setTimeout(() => {
            dodgeElement.style.opacity = '';
        }, 100);

        return true; // 返回 true 表示闪避成功
    }

    return false; // 返回 false 表示未闪避
}

function handleMagicDodge(target) {
    let cultivationDifference;
    let dodgeChance = 0; // 默认闪避概率为 0
    let dodgeElement; // 对应的图片元素：玩家图片或敌人图片
    let playerSkillEnhancementRate = 0;
    if (battleState.player.hidden) playerSkillEnhancementRate = 0.2;

    if (target === 'player') {
        // 玩家魔法闪避逻辑
        cultivationDifference = playerCultivation - enemyPetCultivation;
        if (cultivationDifference > 0) {
            dodgeChance = Math.min((Math.abs(cultivationDifference) / 35000) * 0.01 + playerSkillEnhancementRate, 0.8); // 确保概率不超过80%
        }
        if (battleState.player.hidden) {
            dodgeChance = Math.min(0.8, dodgeChance + 0.2);
        }
        dodgeElement = document.getElementById('your-pet-image');
        console.log(`玩家魔法闪避概率为：${dodgeChance}`);
    } else if (target === 'enemy') {
        // 敌人魔法闪避逻辑
        cultivationDifference = enemyPetCultivation - playerCultivation;
        if (cultivationDifference > 0) {
            dodgeChance = Math.min((Math.abs(cultivationDifference) / 35000) * 0.01, 0.8); // 确保概率不超过80%
        }
        dodgeElement = document.getElementById('enemy-image');
        console.log(`敌人魔法闪避概率为：${dodgeChance}`);
    } else {
        console.error('Invalid target for magic dodge handling');
        return false;
    }

    // 确定是否触发闪避
    const dodgeRoll = Math.random();
    const isDodge = dodgeRoll < dodgeChance;
    console.log(`魔法闪避随机数为：${dodgeRoll}`);

    if (isDodge) {
        // 触发闪避，应用视觉效果
        if (target === 'player') {
            dodgeElement.style.opacity = '0.5';
            showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66bb115dd9c307b7e9a6c2d0.png');
        } else {
            dodgeElement.style.opacity = '0.5';
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66bb115dd9c307b7e9a6c2d0.png');
        }

        // 0.1秒后复原
        setTimeout(() => {
            dodgeElement.style.opacity = '';
        }, 100);

        return true; // 返回 true 表示闪避成功
    }

    return false; // 返回 false 表示未闪避
}

// 【玩家战斗】玩家伤害函数（物理/物理效果、法术/法术效果）
function levelUpSkill() {
    if (battleState.player.taunt) {
        performAttack('physical');
        return;
    }
    
    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // 创建弹出界面
    const modal = document.createElement('div');
    modal.style = 'width: 85%;max-height: 80%;background-color: rgba(0, 0, 0, 0.1);color: white;border: 1px solid rgb(221, 221, 221);padding: 20px;overflow-y: scroll;position: relative;display: flex;flex-direction: column;justify-content: center;align-items: stretch;';
    
    // 创建标题和关闭按钮
    const title = document.createElement('h2');
    title.innerText = '升级技能';
    title.style.textAlign = 'center';
    modal.appendChild(title);

    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '24px';
    closeButton.style.color = 'white';
    closeButton.onclick = () => document.body.removeChild(overlay);
    modal.appendChild(closeButton);

    // 创建技能显示区
    const skillsGrid = document.createElement('div');
    skillsGrid.style.display = 'grid';
    skillsGrid.style.color = 'black';
    skillsGrid.style.fontSize = '12px';
    skillsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    skillsGrid.style.gap = '10px';
    modal.appendChild(skillsGrid);

    const infoContainer = document.createElement('div');
    infoContainer.innerText = '点击技能可查看技能详细说明。'
    infoContainer.style = 'display: flex;color: white;font-size: 14px;gap: 10px;padding: 20px;height: 110px;align-items: center;border: 1px solid #fff;margin-top: 10px;border-radius: 2px;';
    modal.appendChild(infoContainer);

    function populateSkills() {
        skillsGrid.innerHTML = '';
        const skillsArea = document.getElementById('skills-area');
        const skillDivs = Array.from(skillsArea.children);
        
        // 定义需要显示系数的技能类型
        const showMultiplierTypes = ['PA', 'PAE', 'MA', 'MAE', 'PP', 'PPE', 'PH', 'PHE', 'TC'];
        
        skillDivs.forEach(skillDiv => {
            const skillName = skillDiv.innerText.split(' ')[0];
            const skill = currentPet.skills.find(skill => skill.name === skillName);
            if (skill) {
                const result = calculateSkillLevelAndMultiplier(skill);
                skill.level = result.skillLevel;
                const skillElement = document.createElement('div');
                skillElement.innerText = `${skill.name} Lv${skill.level}`;
                skillElement.style.padding = '10px';
                skillElement.style.backgroundColor = '#fff';
                skillElement.style.border = '1px solid #000';
                skillElement.style.borderRadius = '8px';
                skillElement.style.cursor = 'pointer';
                skillElement.style.textAlign = 'center';
                skillElement.style.transition = 'background-color 0.3s, transform 0.3s';
                skillElement.onclick = () => {
                    document.querySelectorAll('.selected-skill').forEach(e => {
                        e.classList.remove('selected-skill');
                        e.style.backgroundColor = '#fff';
                        e.style.transform = 'scale(1)';
                    });
                    skillElement.classList.add('selected-skill');
                    skillElement.style.backgroundColor = '#add8e6';
                    skillElement.style.transform = 'scale(1.05)';
                    
                    const skillMultiplier = calculateSkillLevelAndMultiplier(skill).skillMultiplier;
                    // 根据技能类型决定是否显示系数
                    const multiplierText = showMultiplierTypes.includes(skill.type)
                        ? `，当前技能倍率为${Math.floor(skillMultiplier * 100)}%`
                        : '';
                        
                    infoContainer.innerText = `${skill.rarity}技能${multiplierText}，说明：${skill.description}`;
                };
                skillsGrid.appendChild(skillElement);
            }
        });
    }

    populateSkills(); // 初始化时填充技能数据

    // 创建按钮操作区
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '20px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'row';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.textAlign = 'center';
    modal.appendChild(buttonContainer);

    const levelUpButton = document.createElement('button');
    levelUpButton.innerText = '升级技能';
    levelUpButton.style.padding = '10px 20px';
    levelUpButton.style.margin = '5px';
    levelUpButton.style.borderRadius = '8px';
    levelUpButton.style.border = 'none';
    levelUpButton.style.backgroundColor = '#28a745';
    levelUpButton.style.color = 'white';
    levelUpButton.style.cursor = 'pointer';
    levelUpButton.style.fontSize = '12px';
    levelUpButton.style.transition = 'background-color 0.3s';
    levelUpButton.onmouseover = () => levelUpButton.style.backgroundColor = '#218838';
    levelUpButton.onmouseout = () => levelUpButton.style.backgroundColor = '#28a745';
    levelUpButton.onclick = () => {
        handleLevelUp();
        populateSkills(); // 升级后刷新技能数据
    };
    buttonContainer.appendChild(levelUpButton);

    const bulkLevelUpButton = document.createElement('button');
    bulkLevelUpButton.innerText = '全部升级';
    bulkLevelUpButton.style.padding = '10px 20px';
    bulkLevelUpButton.style.margin = '5px';
    bulkLevelUpButton.style.borderRadius = '8px';
    bulkLevelUpButton.style.border = 'none';
    bulkLevelUpButton.style.backgroundColor = '#ffc107';
    bulkLevelUpButton.style.color = 'white';
    bulkLevelUpButton.style.cursor = 'pointer';
    bulkLevelUpButton.style.fontSize = '12px';
    bulkLevelUpButton.style.transition = 'background-color 0.3s';
    bulkLevelUpButton.onmouseover = () => bulkLevelUpButton.style.backgroundColor = '#e0a800';
    bulkLevelUpButton.onmouseout = () => bulkLevelUpButton.style.backgroundColor = '#ffc107';
    bulkLevelUpButton.onclick = () => {
        handleBulkLevelUp();
        populateSkills(); // 升级后刷新技能数据
    };
    buttonContainer.appendChild(bulkLevelUpButton);

    const infoButton = document.createElement('button');
    infoButton.innerText = '升级说明';
    infoButton.style.padding = '10px 20px';
    infoButton.style.margin = '5px';
    infoButton.style.borderRadius = '8px';
    infoButton.style.border = 'none';
    infoButton.style.backgroundColor = '#17a2b8';
    infoButton.style.color = 'white';
    infoButton.style.cursor = 'pointer';
    infoButton.style.fontSize = '12px';
    infoButton.style.transition = 'background-color 0.3s';
    infoButton.onmouseover = () => infoButton.style.backgroundColor = '#138496';
    infoButton.onmouseout = () => infoButton.style.backgroundColor = '#17a2b8';
    infoButton.onclick = () => showInfoBox('宠物等级每提升10级，所拥有的技能会自动提升1级。技能的等级很大程度上决定了它们的威力（被动技能会按一定比例增加各项属性值）。每个技能等级上限为20级，当技能等级到10级后，需要在本界面消耗一定经验值来升级技能。');
    buttonContainer.appendChild(infoButton);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
} //玩家技能升级、调用函数

function handleLevelUp() {
    const selectedSkillElement = document.querySelector('.selected-skill');
    if (!selectedSkillElement) {
        showInfoBox('请选择一个技能！');
        return;
    }
    const skillName = selectedSkillElement.innerText.split(' ')[0];
    const skill = currentPet.skills.find(skill => skill.name === skillName);
    if (!skill) {
        showInfoBox('未找到该技能！');
        return;
    }
    if (skill.level >= 30 && !skill.byLearned) {
        showInfoBox('当前技能已达到最大等级！','red');
        return;
    }
    if (skill.level >= 6 && skill.type === 'NE' && skill.byLearned) {
        skill.level = 6;
        return;
    }
    
    if (skill.byLearned) {
        // 检查对应的技能书是否存在
        const skillBook = jinnangItems.find(item => item.displayName === `${skill.name}天赋书` && item.quantity > 0);
        
        // 如果有技能书，询问玩家使用哪种方式升级
        if (skillBook) {
            return showCustomOptionsBox(
                `发现可用的${skillBook.displayName}，你想使用哪种方式升级？\n【宇宙之心】按钮：使用5个宇宙之心（必定成功）\n【技能书】按钮：使用1本技能书（20%成功）`,
                [
                    {
                        text: '宇宙之心',
                        onClick: function() {
                            // 使用宇宙之心升级
                            if (skill.level > 99) {
                              showInfoBox('该技能已达到最大等级！',null,null,'red');
                              return;
                            }
                          
                            const heart = jinnangItems.find(item => item.name === 'universalHeart' && item.quantity >= 5);
                            if (heart) {
                                useItem('universalHeart', 5);
                                skill.level += 1;
                                showInfoBox(`${skill.name} 成功升级至 ${skill.level} 级`);
                            } else {
                                showInfoBox('宇宙之心数量不足，无法升级！', null, null, 'red');
                            }
                        }
                    },
                    {
                        text: `${skillBook.displayName}`,
                        onClick: function() {
                            // 使用技能书升级
                            if (skill.level > 99) {
                              showInfoBox('该技能已达到最大等级！',null,null,'red');
                              return;
                            }
                          
                            if (Math.random() < 0.2) { // 20%成功率
                                useItem(skillBook.name, 1);
                                skill.level += 1;
                                showInfoBox(`消耗一本${skillBook.displayName}，${skill.name} 成功升级至 ${skill.level} 级！`);
                            } else {
                                useItem(skillBook.name, 1);
                                showInfoBox(`消耗一本${skillBook.displayName}，但 ${skill.name} 升级失败了！`, null, null, 'red');
                            }
                        }
                    }
                ],
                '#92341C',                  // 文字颜色
            );

            return;
        }
        
        // 如果没有技能书，走原有的宇宙之心升级逻辑
        const heart = jinnangItems.find(item => item.name === 'universalHeart' && item.quantity >= 5);
      
        if (heart) {
            if (skill.level > 99) {
              showInfoBox('该技能已达到最大等级！',null,null,'red');
              return;
            }
          
            useItem('universalHeart', 5);
            skill.level += 1;
            showInfoBox(`${skill.name} 成功升级至 ${skill.level} 级`);
            return;
        } else {
          
            showInfoBox('天赋高级技能需要使用特殊道具"宇宙之心"才能升级，请尝试获取后再操作', null, null, 'red');
            return;
        }
    }

    // 以下是原有的升级逻辑
    const checkSuccess = (rate) => Math.random() < rate;
    if (skill.level >= 28 && skill.level <= 29) {
        if (useItem('universalKernel', 5)) {
            if (checkSuccess(0.4)) {
                skill.level += 1;
                showInfoBox(`${skill.name} 成功升级至 ${skill.level} 级`);
            } else {
                showInfoBox(`${skill.name} 升级失败！`, null, null, 'red');
            }
            return;
        } else {
            showInfoBox('你没有宇宙精华了！', null, null, 'red');
            return;
        }
    }

    if (skill.level >= 24 && skill.level <= 27) {
        if (useItem('universalCrystal', 5)) {
            if (checkSuccess(0.4)) {
                skill.level += 1;
                showInfoBox(`${skill.name} 成功升级至 ${skill.level} 级`);
            } else {
                showInfoBox(`${skill.name} 升级失败！`, null, null, 'red');
            }
            return;
        } else {
            showInfoBox('你没有宇宙之晶了！',null,null,'red');
            return;
        }
    }
    
    if (skill.level < 10) {
        showInfoBox('该技能现在不需要升级,10级后再来吧！');
        return;
    }

    if (skill.level >= 20) {
        showInfoBox('该技能已达到目前阶段最高等级！请尝试使用药品系统中的“魔术棱柱”进行升级！');
        return;
    }
    
    const nextLevel = skill.level + 1;
    const expCost = 1000 + 200 * (nextLevel - 11);

    if (currentExp < expCost) {
        showInfoBox(`此次升级需要 ${expCost} 点经验值，你的经验值不足，无法升级！`);
        return;
    }

    currentExp -= expCost;
    skill.level = nextLevel;

    showInfoBox(`你消耗了 ${expCost} 点经验值，将 ${skill.name} 成功升至 ${nextLevel} 级，威力增加了！`);
    updateExpBar(currentExp, maxExp);
    updateUI();
}

function handleBulkLevelUp() {
    const skillMessages = [];
    currentPet.skills.forEach(skill => {
        while (!skill.byLearned && skill.level >= 10 && skill.level < 20 && currentExp >= (1200 + 200 * (skill.level - 10))) {
            const expCost = 1200 + 200 * (skill.level - 10);
            currentExp -= expCost;
            skill.level += 1;
            skillMessages.push(`你消耗了${expCost}点经验值，将${skill.name} 成功升至 ${skill.level} 级，威力增加了！`);
        }
    });

    if (skillMessages.length === 0) {
        showInfoBox('没有技能需要升级或经验不足！');
    } else {
        showInfoBox(skillMessages.join('\n'));
    }

    updateExpBar(currentExp, maxExp);
    updateUI();
}

// 新增：显示技能选择菜单
function showSkillSelectionMenu(type, callback) {
    const skillsArea = document.getElementById("skills-area");
    if (!skillsArea) {
        console.error("skills-area element not found.");
        return;
    }

    // 获取对应类型的技能列表
    let availableSkills = [];
    const skillDivs = Array.from(skillsArea.children);
    
    skillDivs.forEach(skillDiv => {
        const skillName = skillDiv.innerText.split(' ')[0];
        const skill = currentPet.skills.find(s => s.name === skillName);
        if (skill) {
            if (type === 'physical' && (skill.type === 'PA' || skill.type === 'PAE')) {
                availableSkills.push(skill);
            } else if (type === 'magical' && (skill.type === 'MA' || skill.type === 'MAE')) {
                availableSkills.push(skill);
            }
        }
    });

    // 如果没有可用技能，直接使用普通攻击
    if (availableSkills.length === 0) {
        callback(null);
        return;
    }

    // 如果只有一个技能，直接使用并记录偏好
    if (availableSkills.length === 1) {
        playerSkillPreference[type] = availableSkills[0].name;
        callback(availableSkills[0]);
        return;
    }

    // 创建技能选择弹窗
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;

    const menu = document.createElement('div');
    menu.style.cssText = `
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    `;

    const title = document.createElement('h3');
    title.textContent = type === 'physical' ? '选择物理技能' : '选择法术技能';
    title.style.cssText = `
        color: white;
        text-align: center;
        margin: 0 0 20px 0;
        font-size: 24px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    `;
    menu.appendChild(title);

    const skillList = document.createElement('div');
    skillList.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 12px;
    `;

    availableSkills.forEach(skill => {
        const { skillLevel } = calculateSkillLevelAndMultiplier(skill);
        
        const skillButton = document.createElement('button');
        const isPreferred = playerSkillPreference[type] === skill.name;
        
        skillButton.style.cssText = `
            background: ${isPreferred ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)' : 'white'};
            border: ${isPreferred ? '3px solid #ff6b6b' : 'none'};
            border-radius: 10px;
            padding: 15px 20px;
            cursor: pointer;
            transition: all 0.3s;
            text-align: left;
            font-size: 16px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
        `;
        
        skillButton.innerHTML = `
            ${isPreferred ? '<div style="position: absolute; top: 5px; right: 10px; color: #ff6b6b; font-weight: bold; font-size: 12px;">上次选择</div>' : ''}
            <div style="font-weight: bold; color: #333; margin-bottom: 5px;">
                ${skill.name} Lv.${skillLevel}
            </div>
            <div style="font-size: 14px; color: #666;">
                倍率: ${(skill.multiplier * (1 + 0.1 * (skillLevel - 1))).toFixed(2)}x
            </div>
        `;

        skillButton.onmouseover = () => {
            skillButton.style.transform = 'translateY(-2px)';
            skillButton.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            if (!isPreferred) {
                skillButton.style.background = '#f0f0f0';
            }
        };

        skillButton.onmouseout = () => {
            skillButton.style.transform = 'translateY(0)';
            skillButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            if (!isPreferred) {
                skillButton.style.background = 'white';
            }
        };

        skillButton.onclick = () => {
            // 记录玩家的技能选择偏好
            playerSkillPreference[type] = skill.name;
            document.body.removeChild(overlay);
            callback(skill);
        };

        skillList.appendChild(skillButton);
    });

    menu.appendChild(skillList);

    // 添加取消按钮
    const cancelButton = document.createElement('button');
    cancelButton.textContent = '取消';
    cancelButton.style.cssText = `
        width: 100%;
        margin-top: 15px;
        padding: 12px;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid white;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: all 0.3s;
    `;

    cancelButton.onmouseover = () => {
        cancelButton.style.background = 'rgba(255, 255, 255, 0.3)';
    };

    cancelButton.onmouseout = () => {
        cancelButton.style.background = 'rgba(255, 255, 255, 0.2)';
    };

    cancelButton.onclick = () => {
        document.body.removeChild(overlay);
        // 取消不执行任何攻击
    };

    menu.appendChild(cancelButton);
    overlay.appendChild(menu);
    document.body.appendChild(overlay);
}

function getPreferredSkill(type) {
    const skillsArea = document.getElementById("skills-area");
    if (!skillsArea) {
        return null;
    }

    const skillDivs = Array.from(skillsArea.children);
    const availableSkills = [];
    
    skillDivs.forEach(skillDiv => {
        const skillName = skillDiv.innerText.split(' ')[0];
        const skill = currentPet.skills.find(s => s.name === skillName);
        if (skill) {
            if (type === 'physical' && (skill.type === 'PA' || skill.type === 'PAE')) {
                availableSkills.push(skill);
            } else if (type === 'magical' && (skill.type === 'MA' || skill.type === 'MAE')) {
                availableSkills.push(skill);
            }
        }
    });

    // 如果没有可用技能，返回null（使用普通攻击）
    if (availableSkills.length === 0) {
        return null;
    }

    // 如果只有一个技能，直接返回
    if (availableSkills.length === 1) {
        return availableSkills[0];
    }

    // 如果有偏好设置且该技能仍然可用，返回偏好技能
    if (playerSkillPreference[type]) {
        const preferredSkill = availableSkills.find(s => s.name === playerSkillPreference[type]);
        if (preferredSkill) {
            return preferredSkill;
        }
    }

    // 如果没有偏好或偏好技能不可用，返回第一个技能
    return availableSkills[0];
}

// 修改：自动战斗专用的攻击函数
function performAutoAttack(type) {
    if (!attributesFetched || !battleState || !battleState.enemy || !playerTurn) {
        return;
    }

    let attackType = battleState.player.taunt ? 'physical' : type;
    
    // 获取玩家偏好的技能
    const selectedSkill = getPreferredSkill(attackType);
    
    const { skillMultiplier, isSkillUsed } = selectSkillAndCalculateMultiplier(attackType, selectedSkill);

    let damage = 0;

    // 检查是否为特殊技能
    if (selectedSkill && (selectedSkill.type === 'PAE' || selectedSkill.type === 'MAE')) {
        applySpecialSkillEffects(selectedSkill);
    } else {
        // 使用原有的攻击处理逻辑
        if (attackType === 'physical') {
            damage = performPhysicalAttack(skillMultiplier, isSkillUsed, selectedSkill);
            // 物理攻击特有的后续效果处理
            handlePostAttackEffects(attackType, damage, {
                selectedSkill,
                isCritical: checkCriticalHit(battleState.player.critRate),
                skillMultiplier
            });
        } else {
            const result = performMagicalAttack(skillMultiplier, isSkillUsed, selectedSkill);
            if (result.retryPhysical) {
                performAutoAttack('physical');
                return;
            }
            damage = result.damage;
            // 法术攻击特有的后续效果处理
            handlePostAttackEffects(attackType, damage, {
                selectedSkill,
                isCritical: checkCriticalHit(battleState.player.critRate),
                skillMultiplier
            });
        }
    }

    // 检查战斗状态并更新回合
    if (battleState.enemy.health <= 0) {
        updateEnemyAttributes();
        showNextBattlePrompt(true);
        return;
    } else if (battleAttributes.health <= 0) {
        showNextBattlePrompt(false);
        return;
    }

    playerTurn = false;
    updateUI();
}


function getSkillByType(type) {
    const skillsArea = document.getElementById("skills-area");
    if (!skillsArea) {
        console.error("skills-area element not found.");
        return null;
    }

    const skills = Array.from(skillsArea.children).map(skillDiv => {
        const skillName = skillDiv.innerText.split(' ')[0];
        const skill = currentPet.skills.find(skill => skill.name === skillName && skill.type === type);
        return skill;
    }).filter(skill => skill !== null);

    return skills.length > 0 ? skills[Math.floor(Math.random() * skills.length)] : null;
}

function calculateSkillLevelAndMultiplier(skill) {
    let skillLevel = skill.level || 1;

    if (skill.type === 'NE' && skill.byLearned) {
        skillLevel = Math.min(6, Math.floor(petLevel / 10) + 1);
    } else if (skillLevel < 10) {
        skillLevel = Math.min(10, Math.floor(petLevel / 10) + 1);
    }

    const skillMultiplier = skill.multiplier * (1 + 0.1 * (skillLevel - 1));
    return { skillLevel, skillMultiplier };
}

// 修改后的函数：接收选中的技能作为参数
function selectSkillAndCalculateMultiplier(type, selectedSkill = null) {
    let skillMultiplier = 1;
    let skillLevel = 1;
    let isSkillUsed = false;

    if (selectedSkill) {
        const result = calculateSkillLevelAndMultiplier(selectedSkill);
        skillLevel = result.skillLevel;
        skillMultiplier = result.skillMultiplier;
        isSkillUsed = true;
        logBattleEvent(`你施放了 ${selectedSkill.name} ${skillLevel}级。`, 'gold', '20px');
        
        if (type === 'physical') {
            const manaCost = Math.floor((Math.random() * (200 - 50 + 1) * skillLevel));
            battleAttributes.mana = Math.max(0, battleAttributes.mana - manaCost);
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/667269e9d9c307b7e915e15a.gif');
        } else if (type === 'magical') {
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66712ba3d9c307b7e9f2ab59.gif');
        }
    } else {
        if (type === 'physical') {
            logBattleEvent("⚔️【玩家攻击】你用拳头平A了对方。", null, '20px');
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/667123f9d9c307b7e9e34049.gif');
        } else if (type === 'magical') {
            logBattleEvent("⚔️【玩家攻击】你操控小树枝击向了对方。", null, '20px');
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/6671343bd9c307b7e9031c3d.gif');
        }
    }

    return { skillMultiplier, isSkillUsed, selectedSkill };
}

// 修改performAttack函数：添加技能选择逻辑
function performAttack(type) {
    if (!attributesFetched || !battleState || !battleState.enemy || !playerTurn) {
        return;
    }

    let attackType = battleState.player.taunt ? 'physical' : type;
    
    // 显示技能选择菜单
    showSkillSelectionMenu(attackType, (selectedSkill) => {
        // 如果点击取消，直接返回
        if (selectedSkill === undefined) {
            return;
        }

        const { skillMultiplier, isSkillUsed } = selectSkillAndCalculateMultiplier(attackType, selectedSkill);

        let damage = 0;
        let isCritical = false;

        // 检查是否为特殊技能
        if (selectedSkill && (selectedSkill.type === 'PAE' || selectedSkill.type === 'MAE')) {
            applySpecialSkillEffects(selectedSkill);
        } else {
            // 使用原有的攻击处理逻辑
            if (attackType === 'physical') {
                damage = performPhysicalAttack(skillMultiplier, isSkillUsed, selectedSkill);
                // 物理攻击特有的后续效果处理
                handlePostAttackEffects(attackType, damage, {
                    selectedSkill,
                    isCritical: checkCriticalHit(battleState.player.critRate),
                    skillMultiplier
                });
            } else {
                const result = performMagicalAttack(skillMultiplier, isSkillUsed, selectedSkill);
                if (result.retryPhysical) {
                    performAttack('physical');
                    return;
                }
                damage = result.damage;
                // 法术攻击特有的后续效果处理
                handlePostAttackEffects(attackType, damage, {
                    selectedSkill,
                    isCritical: checkCriticalHit(battleState.player.critRate),
                    skillMultiplier
                });
            }
        }

        // 检查战斗状态并更新回合
        if (battleState.enemy.health <= 0) {
            updateEnemyAttributes();
            showNextBattlePrompt(true);
            return;
        } else if (battleAttributes.health <= 0) {
            showNextBattlePrompt(false);
            return;
        }

        playerTurn = false;
        updateUI();
    });
}

function performPhysicalAttack(skillMultiplier, isSkillUsed, selectedSkill) {
    const defenseFactor = (Math.random() * (1.2 - 0.8) + 0.8);
    const x = battleState.enemy.physicalDefense * defenseFactor;
    const effectiveDefense = f(x);
    const constantDamageReduction = Math.round(battleState.enemy.physicalDefense * 0.1);

    let baseDamage;
    if (effectiveDefense !== 0){
        baseDamage = Math.max(1, Math.floor(battleAttributes.physicalAttack * skillMultiplier * (1 - effectiveDefense)));
    } else {
        baseDamage = Math.max(1, Math.floor(battleAttributes.physicalAttack * skillMultiplier));
    }
    
    // 检查玩家是否处于失明状态
    if (battleState.player.blindfold) {
        logBattleEvent("处于短暂失明，敌人闪避了你的物理攻击。", 'yellow');
        playerTurn = false;
        return 0; // 物理攻击无法造成伤害
    }

    // 检查敌人是否闪避
    if (handleDodge('enemy')) {
        playerTurn = false;
        return 0; // 如果敌人闪避成功，物理攻击伤害为0
    }

    // 应用各种效果和状态修正伤害
    if ((ascensionSkill.name === '斩龙一式' || secondAscensionSkill.name === '斩龙一式') && battleState.enemy.health / enemyMaxHealth > battleState.player.whiteNightThreshold) {
        baseDamage = Math.floor(baseDamage * 1.4); // 增加60%伤害
    }

    if (battleState.player.taunt) {
        baseDamage = Math.floor(baseDamage * 1.2); // 增加20%伤害
        logBattleEvent("怒意激发了你的斗志，嘲讽下你的物理伤害提升20%！", 'red');
    }

    let isCritical = checkCriticalHit(battleState.player.critRate);

    // 在所有效果应用后计算最终伤害
    let finalDamage = calculateDamage(baseDamage, isCritical, battleState.player.critDamage, true);
    // 如果存在火符的效果则还需要计算一层
    const activeEffects = applyWuxingEffects();
    let fireEffect = 0;
    if (activeEffects.fireAmulet && activeEffects.fireAmulet > 0) {
        const damageBoostPercentage = [0, 0.02, 0.05, 0.07, 0.12, 0.20, 0.22, 0.25, 0.28, 0.4][activeEffects.fireAmulet];
        fireEffect = Math.floor(finalDamage * damageBoostPercentage);
        finalDamage = Math.floor(finalDamage * (1 + damageBoostPercentage));

        if (!isNaN(fireEffect) && fireEffect > 0) {
            logBattleEvent(`🔴奥义·火之易伤！伤害增加了 ${fireEffect} 点。`, 'pink');
        } 
    }

    finalDamage = Math.max(1, finalDamage - constantDamageReduction);
    
    if (enemyRivival) {
        finalDamage = Math.floor(0.1 * finalDamage);
    }
    
    battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);
    
    // 记录日志
    if (isCritical) {
        logBattleEvent(`⚔️【玩家攻击】暴击！！本次对敌方造成了 ${finalDamage} 点物理伤害！`, 'red');
        updateDamageValue(finalDamage,false,'damage',true); // 显示玩家伤害
        showEffect('playerEffect', 'https://pic.imgdb.cn/item/66a0d3e8d9c307b7e93a8108.gif');
    } else {
        updateDamageValue(finalDamage,false,'damage'); // 显示玩家伤害
        logBattleEvent(`⚔️【玩家攻击】你造成了 ${finalDamage} 点物理伤害。`, 'white');
    }

    if (waterAmuletTriggered) {
        updateDamageValue(finalDamage,false,'extra-damage')
    }
    
    // 应用8件套特殊效果 - 生命吸取
    const awakenedCount = applySuitEffects ? applySuitEffects() : 0;
    if (awakenedCount >= 8 && finalDamage > 0) {
        // 20%概率触发生命吸取
        if (Math.random() < 0.2) {
            // 吸取伤害的5‰，上限50万
            const lifeStealAmount = Math.min(500000, Math.floor(finalDamage * 0.005));
            battleAttributes.health = Math.min(maxHealth, battleAttributes.health + lifeStealAmount);
            updateDamageValue(-lifeStealAmount,true,'extra-damage');
            logBattleEvent(`✨【套装效果】觉醒套装之力吸取了 ${lifeStealAmount} 点生命值。`, 'crimson','18px');
            updateUI();
        }
    }
    
    // 应用吸血魔刃效果
    if (ascensionSkill.name === '吸血魔刃' || secondAscensionSkill.name === '吸血魔刃') {
        const bloodSuckPercentage = (ascensionSkill.name === '吸血魔刃' ? ascensionSkill : secondAscensionSkill).increment((ascensionSkill.name === '吸血魔刃' ? ascensionSkill : secondAscensionSkill).level) / 100;
        const healAmount = Math.floor(finalDamage * bloodSuckPercentage);
        battleAttributes.health = Math.min(maxHealth, battleAttributes.health + healAmount);
        logBattleEvent(`吸血魔刃触发,吸取了 ${healAmount} 点生命值。`, 'red');
        updateUI();
    }

    if (battleState.enemy.pierced) {
        handlePierced(); // 处理穿透效果
    }
    
    applyPhysicalAttackEffects(isSkillUsed ? skillMultiplier : 1); // 确保正确执行物理攻击效果
    
    if (selectedSkill && selectedSkill.type === "PAE") {
        applySpecialSkillEffects(selectedSkill);
    }
    
    console.log(selectedSkill);
    return finalDamage;
}

function performMagicalAttack(skillMultiplier, isSkillUsed, selectedSkill) {
    let manaCostMultiplier = 1;
    if (battleState.player.spellSlow) {
        manaCostMultiplier = 500;
    }

    if (battleAttributes.mana < 50 * manaCostMultiplier) {
        logBattleEvent("您的法力值不足！");
        return { damage: 0, retryPhysical: true };
    }

    const defenseFactor = (Math.random() * (1.2 - 0.8) + 0.8);
    const x = battleState.enemy.magicDefense * defenseFactor;
    const effectiveDefense = f(x);
    const constantDamageReduction = Math.round(battleState.enemy.magicDefense * 0.1);
    
    let baseDamage;
    
    if (effectiveDefense !== 0){
        baseDamage = Math.max(1, Math.floor(battleAttributes.magicAttack * 0.8 * skillMultiplier * (1 - effectiveDefense)));
    } else {
        baseDamage = Math.max(1, Math.floor(battleAttributes.magicAttack * 0.8 * skillMultiplier));
    }
    
    const manaCost = Math.floor((Math.random() * (200 - 50 + 1)) + 50 + battleRounds * 20 * skillMultiplier) * manaCostMultiplier;
    battleAttributes.mana = Math.max(0, battleAttributes.mana - manaCost);

    if (handleMagicDodge('enemy')) {
        playerTurn = false;
        return 0;
    }
    
    let isCritical = checkCriticalHit(battleState.player.critRate);

    // 在所有效果应用后计算最终伤害
    let finalDamage = calculateDamage(baseDamage, isCritical, battleState.player.critDamage, true);

    // 如果存在火符的效果则还需要计算一层
    const activeEffects = applyWuxingEffects();
    let fireEffect = 0;
    if (activeEffects.fireAmulet && activeEffects.fireAmulet > 0) {
        const damageBoostPercentage = [0, 0.02, 0.05, 0.07, 0.12, 0.20, 0.22, 0.25, 0.28, 0.4][activeEffects.fireAmulet];
        fireEffect = Math.floor(finalDamage * damageBoostPercentage);
        finalDamage = Math.floor(finalDamage * (1 + damageBoostPercentage));

        if (!isNaN(fireEffect) && fireEffect > 0) {
            logBattleEvent(`🔴奥义·火之易伤！伤害增加了 ${fireEffect} 点。`, 'pink');
        } 
    }

    finalDamage = Math.max(1, finalDamage - constantDamageReduction);
    
    if (enemyRivival) {
        finalDamage = Math.floor(0.1 * finalDamage);
    }
    battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);
    
    // 记录日志
    if (isCritical) {
        logBattleEvent(`⚔️【玩家攻击】暴击！！本次对敌方造成了 ${finalDamage} 点法术伤害，消耗了 ${manaCost} 点法力值！`, 'red');
        updateDamageValue(finalDamage, false, 'damage', true); // 显示玩家伤害
        showEffect('playerEffect', 'https://pic.imgdb.cn/item/668a30dbd9c307b7e9c54fff.gif');
    } else {
        logBattleEvent(`⚔️【玩家攻击】你进行了法术攻击，造成了 ${finalDamage} 点法术伤害，消耗了 ${manaCost} 点法力值。`, 'wheat');
        updateDamageValue(finalDamage, false, 'damage'); // 显示玩家伤害
        showEffect('playerEffect', 'https://pic.imgdb.cn/item/668a30dbd9c307b7e9c54fff.gif');
    }

    if (waterAmuletTriggered) {
        updateDamageValue(finalDamage,false,'extra-damage')
    }
    
    // 应用8件套特殊效果 - 生命吸取
    const awakenedCount = applySuitEffects ? applySuitEffects() : 0;
    if (awakenedCount >= 8 && finalDamage > 0) {
        // 20%概率触发生命吸取
        if (Math.random() < 0.2) {
            // 吸取伤害的5‰，上限50万
            const lifeStealAmount = Math.min(500000, Math.floor(finalDamage * 0.005));
            battleAttributes.health = Math.min(maxHealth, battleAttributes.health + lifeStealAmount);
            updateDamageValue(-lifeStealAmount,true,'extra-damage');
            logBattleEvent(`✨【8件套效果】觉醒套装之力吸取了 ${lifeStealAmount} 点生命值。`, 'gold');
            updateUI();
        }
    }
    
    if (battleState.enemy.pierced) {
        handlePierced(); // 处理穿透效果
    }

    if ((ascensionSkill.name === '法术精通' || secondAscensionSkill.name === '法术精通') &&
        Math.random() * 100 < (battleState.player.spellMasteryChance)) {
        performIndependentMagicAttack();
    }
    
    applyMagicAttackEffects(finalDamage, isSkillUsed ? skillMultiplier : 1);
    if (selectedSkill && selectedSkill.type === "MAE") {
        applySpecialSkillEffects(selectedSkill);
    }

    return { damage: finalDamage, retryPhysical: false };
}

// 后续效果处理
function handlePostAttackEffects(type, damage, context) {
    const {
        selectedSkill,
        isCritical = false,
        skillMultiplier = 1
    } = context || {};

    // 1. 处理水符效果
    if (waterAmuletTriggered) {
        updateDamageValue(damage, false, 'extra-damage');
        waterAmuletTriggered = false; // 重置水符触发状态
    }

    // 2. 处理穿透效果
    if (battleState.enemy.pierced) {
        handlePierced();
    }

    // 3. 处理物理攻击特有效果
    if (type === 'physical') {
        // 3.1 处理吸血魔刃效果
        if (ascensionSkill.name === '吸血魔刃' || secondAscensionSkill.name === '吸血魔刃') {
            const bloodSuckPercentage = (ascensionSkill.name === '吸血魔刃' ? ascensionSkill : secondAscensionSkill)
                .increment((ascensionSkill.name === '吸血魔刃' ? ascensionSkill : secondAscensionSkill).level) / 100;
            const healAmount = Math.floor(damage * bloodSuckPercentage);
            battleAttributes.health = Math.min(maxHealth, battleAttributes.health + healAmount);
            logBattleEvent(`吸血魔刃触发,吸取了 ${healAmount} 点生命值。`, 'red');
        }

        // 3.2 处理物理攻击效果
        if (selectedSkill) {
            applyPhysicalAttackEffects(skillMultiplier);
        }
    }

    // 4. 处理法术攻击特有效果
    if (type === 'magical') {
        // 4.1 处理法术精通效果
        if ((ascensionSkill.name === '法术精通' || secondAscensionSkill.name === '法术精通') &&
            Math.random() * 100 < battleState.player.spellMasteryChance) {
            performIndependentMagicAttack();
        }

        // 4.2 处理法术攻击效果
        if (selectedSkill) {
            applyMagicAttackEffects(damage, skillMultiplier);
        }
    }

    // 5. 处理通用战斗后效果
    // 5.1 处理震慑效果
    handleShocked();
    applyDefenseBonusEffect();
    // 5.2 处理法力恢复
    handleManaRecover();

    // 5.3 应用飞升效果
    applyAscensionEffects();

    // 6. 检查战斗状态
    checkBattleState(damage);

    // 7. 更新UI
    updateUI();
    updateEnemyStatusDisplay();
}

// 辅助函数：检查战斗状态
function checkBattleState(damage) {
    if (battleState.enemy.health <= 0) {
        updateEnemyAttributes();
        showNextBattlePrompt(true);
        return true;
    }

    if (battleAttributes.health <= 0) {
        showNextBattlePrompt(false);
        return true;
    }

    return false;
}

function f(x) {
    // 计算函数值
    const result = (x / (x + 300000)) - 0.1;
    
    // 使用 Math.max 确保结果至少为 0
    return Math.max(result, 0);
}

function checkWaterAmuletChance() {
    const activeEffects = applyWuxingEffects();

    if (activeEffects.waterAmulet && activeEffects.waterAmulet > 0) {
        const extraAttackProbability = [0, 0.02, 0.05, 0.07, 0.12, 0.20, 0.22, 0.25, 0.28, 0.4][activeEffects.waterAmulet];
        if (Math.random() < extraAttackProbability) {
            return true; 
        }
    }
    return false;
}
        
function handleWaterAmuletEffect(attackType, damage) {
    logBattleEvent("🔵奥义·水之再动！！", 'aqua');
    performAttack(attackType); // 再次执行相同类型的攻击
}
        
// 创建一个伤害显示管理器
const DamageDisplayManager = {
    damageContainers: {
        player: null,
        enemy: null
    },
    
    // 新增：格式化数值显示
    formatNumber(num) {
        const absNum = Math.abs(num);
        
        if (absNum >= 100000000) { // 大于等于1亿
            const yi = Math.floor(absNum / 100000000);
            const remainder = absNum % 100000000;
            const wan = Math.floor(remainder / 10000);
            
            if (wan === 0) {
                return `${yi}亿`;
            } else {
                return `${yi}亿${wan}万`;
            }
        } else if (absNum >= 10000) { // 大于等于1万
            const wan = Math.floor(absNum / 10000);
            const remainder = absNum % 10000;
            
            if (remainder === 0) {
                return `${wan}万`;
            } else {
                return `${wan}万${remainder}`;
            }
        } else {
            return absNum.toString();
        }
    },
    
    initialize() {
        // 创建伤害容器并添加到DOM
        const playerContainer = document.createElement('div');
        playerContainer.id = 'player-damage-container';
        playerContainer.style.cssText = `
            position: absolute;
            left: 25%;
            top: 25%;
            transform: translateX(-50%);
            pointer-events: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 200px;
            z-index: 9999;
        `;
        
        const enemyContainer = document.createElement('div');
        enemyContainer.id = 'enemy-damage-container';
        enemyContainer.style.cssText = `
            position: absolute;
            right: 25%;
            top: 25%;
            transform: translateX(50%);
            pointer-events: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 200px;
            z-index: 9999;
        `;
        
        document.body.appendChild(playerContainer);
        document.body.appendChild(enemyContainer);
        
        this.damageContainers.player = playerContainer;
        this.damageContainers.enemy = enemyContainer;
    },
    
    createDamageElement(damage, damageType, isCritical, isEnemy) {
        const element = document.createElement('div');
        element.style.position = 'relative';
        // 根据敌我双方设置不同的浮动方向
        const animationName = isEnemy ? 'floatUpRight' : 'floatUpLeft';
        element.style.animation = `${animationName} 0.8s ease-out forwards`;
        
        // 使用格式化函数处理数值
        const formattedDamage = this.formatNumber(damage);
        
        // 设置基础样式
        if (damage >= 0) {
            element.innerText = `-${formattedDamage}`;
            if (isCritical) {
                element.style.cssText += `
                    color: red;
                    font-size: 28px;
                    text-shadow: -2px -2px 0 #8a2e27, 2px -2px 0 #8a2e27, -2px 2px 0 #8a2e27, 2px 2px 0 #8a2e27;
                    padding: 10px;
                    border-radius: 10px;
                    font-weight: bolder;
                    animation: ${isEnemy ? 'floatUpRightCritical' : 'floatUpLeftCritical'} 1s ease-out forwards;
                `;
            } else {
                element.style.cssText += `
                    color: white;
                    font-size: 24px;
                    text-shadow: 0 0 2px black;
                    padding: 10px;
                    border-radius: 10px;
                `;
            }
        } else {
            element.innerText = `+${formattedDamage}`;
            element.style.cssText += `
                color: limegreen;
                font-size: 28px;
                text-shadow: 0 0 8px lime;
                padding: 10px;
                border-radius: 10px;
                font-weight: bolder;
                animation: ${isEnemy ? 'floatUpRightCritical' : 'floatUpLeftCritical'} 1s ease-out forwards;
            `;
        }
        
        return element;
    }
};

// 添加必要的CSS动画
const battleStyle = document.createElement('style');
battleStyle.textContent = `
    @keyframes floatUpLeft {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px);
        }
    }
    
    @keyframes floatUpRight {
        0% {
            opacity: 1;
            transform: translateY(0) translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) translateX(20px);
        }
    }
    
    @keyframes floatUpLeftCritical {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1) translateX(0);
        }
        20% {
            transform: translateY(-10px) scale(1.2) translateX(-5px);
        }
        100% {
            opacity: 0;
            transform: translateY(-60px) scale(1) translateX(-20px);
        }
    }
    
    @keyframes floatUpRightCritical {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        20% {
            transform: translateY(-10px) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translateY(-60px) scale(1);
        }
    }
`;
document.head.appendChild(battleStyle);

// 重构后的updateDamageValue函数
function updateDamageValue(damage, enemy = false, damageType = 'damage', isCritical = false) {
    // 确保DamageDisplayManager已初始化
    if (!DamageDisplayManager.damageContainers.player) {
        DamageDisplayManager.initialize();
    }
    
    if (isNaN(damage)) {
        console.error("Invalid damage value: NaN.");
        return;
    }
    
    const container = enemy ? 
        DamageDisplayManager.damageContainers.player : 
        DamageDisplayManager.damageContainers.enemy;
    
    const damageElement = DamageDisplayManager.createDamageElement(damage, damageType, isCritical, enemy);
    container.appendChild(damageElement);
    
    // 在动画结束后移除元素
    setTimeout(() => {
        if (container.contains(damageElement)) {
            container.removeChild(damageElement);
        }
    }, 1200);
}

// 为了保持向后兼容性,仍然保留原有的DOM元素ID
function ensureCompatibility() {
    const elements = ['player-damage-value', 'player-extra-damage-value', 
                     'enemy-damage-value', 'enemy-extra-damage-value'];
                     
    elements.forEach(id => {
        if (!document.getElementById(id)) {
            const element = document.createElement('div');
            element.id = id;
            element.style.display = 'none'; // 隐藏但保留以供旧代码引用
            document.body.appendChild(element);
        }
    });
}

// 检查是否存在必杀技
function checkTrumpCardState() {
    const tcSkills = [];
    const skillsArea = document.getElementById("skills-area");
    
    if (skillsArea) {
        // 遍历技能区域中的每个技能
        Array.from(skillsArea.children).forEach(skillDiv => {
            const skillName = skillDiv.innerText.split(' ')[0];
            const skill = currentPet.skills.find(skill => skill.name === skillName && skill.type === "TC");
            if (skill) {
                tcSkills.push(skill); // 将符合条件的必杀技推入数组
            }
        });
    }
    
    if (tcSkills.length === 0) return { exists: false, skill: null }; // 如果没有必杀技，返回false和null
    
    let selectedSkill = tcSkills[0]; // 默认选择第一个必杀技

    if (tcSkills.length > 1) {
        // 如果有多个必杀技，随机选择一个
        const randomIndex = Math.floor(Math.random() * tcSkills.length);
        selectedSkill = tcSkills[randomIndex];
    }

    // 返回true和选择的技能
    return { exists: true, skill: selectedSkill };
}

function checkLifeSpan(amount) {
    const spanCost = currentLifeSpan - amount;
    if (spanCost < 0) {
        logBattleEvent('你的宠物看起来起色很不好，多关心关心它吧！', 'grey');
        return false;
    }
    
    currentLifeSpan -= amount;
    return true;
}

function recoverLifeSpan(amount) {
    currentLifeSpan = Math.floor(Math.min(maxLifeSpan, currentLifeSpan + amount));
}
        
// 执行必杀技
function performTrumpCard() {
    const checkResult = checkTrumpCardState(); // 调用检查函数
    
    if (!checkResult.exists) {
        // 如果没有必杀技，记录战斗事件并退出
        logBattleEvent('你还没有解锁任何必杀技！', 'red');
        return;
    }
    
    if (!playerTurn) {
        // 如果不是玩家回合，退出
        return;
    }
    
    // 在这里处理使用必杀技的逻辑
    const selectedSkill = checkResult.skill;
    const skillDetail = calculateSkillLevelAndMultiplier(selectedSkill);
    

    applySpecialSkillEffects(selectedSkill);
    
    if (battleAttributes.health <= 0) {
        showNextBattlePrompt(false); // 玩家失败，传递失败状态
        return;
    } else if (battleState.enemy.health <= 0) {
        showNextBattlePrompt(true);
        return;
    }
    playerTurn = false;
}

function performIndependentMagicAttack() {
    const skillsArea = document.getElementById('skills-area');
    const skillDivs = Array.from(skillsArea.children);
    const selectedSkills = skillDivs
        .map(skillDiv => skillDiv.innerText.split(' ')[0])
        .map(skillName => currentPet.skills.find(skill => skill.name === skillName && skill.type === 'MA' || skillName && skill.type === 'MAE'))
        .filter(skill => skill);

    let skillMultiplier = 1;
    let skillLevel = 1;

    if (selectedSkills.length > 0) {
        const randomIndex = Math.floor(Math.random() * selectedSkills.length);
        const selectedSkill = selectedSkills[randomIndex];
        const result = calculateSkillLevelAndMultiplier(selectedSkill);
        skillLevel = result.skillLevel;
        skillMultiplier = result.skillMultiplier;
        logBattleEvent(`⚔️【玩家攻击】触发法术精通，你再次施放了 ${selectedSkill.name} ${skillLevel}级。`, 'wheat');
    } else {
        logBattleEvent("⚔️【玩家攻击】触发法术精通，但没有可用的法术攻击技能，使用普通法术攻击。",'wheat');
    }

    let manaCostMultiplier = 1;
    if (battleState.player.spellSlow) {
        manaCostMultiplier = 500;
        logBattleEvent("妖怪令你对法术的操控更迟钝了，你耗费了更多的法力值！", 'grey');
    }

    const defenseFactor = (Math.random() * (1.2 - 0.8) + 0.8);
    const x = battleState.enemy.magicDefense * defenseFactor;
    const effectiveDefense = f(x);
    const constantDamageReduction = Math.round(battleState.enemy.magicDefense * 0.1);

    let baseDamage;
    if (effectiveDefense !== 0){
        baseDamage = Math.max(1, Math.floor(battleAttributes.magicAttack * 0.8 * skillMultiplier * (1 - effectiveDefense)));
    } else {
        baseDamage = Math.max(1, Math.floor(battleAttributes.magicAttack * 0.8 * skillMultiplier));
    }
    
    let isCritical = checkCriticalHit(battleState.player.critRate);

    if (handleMagicDodge('enemy')) {
        playerTurn = false;
        return 0;
    }

    // 在所有效果应用后计算最终伤害
    let finalDamage = calculateDamage(baseDamage, isCritical, battleState.player.critDamage, true);

    // 如果存在火符的效果则还需要计算一层
    const activeEffects = applyWuxingEffects();
    let fireEffect = 0;
    if (activeEffects.fireAmulet && activeEffects.fireAmulet > 0) {
        const damageBoostPercentage = [0, 0.02, 0.05, 0.07, 0.12, 0.20, 0.22, 0.25, 0.28, 0.4][activeEffects.fireAmulet];
        fireEffect = Math.floor(finalDamage * damageBoostPercentage);
        finalDamage = Math.floor(finalDamage * (1 + damageBoostPercentage));

        if (!isNaN(fireEffect) && fireEffect > 0) {
            logBattleEvent(`🔴奥义·火之易伤！伤害增加了 ${fireEffect} 点。`, 'pink');
        } 
    }

    finalDamage = Math.max(1, finalDamage - constantDamageReduction);
    
    if (enemyRivival) {
        finalDamage = Math.floor(0.1 * finalDamage);
    }
    battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);

    // 记录日志
    if (isCritical) {
        logBattleEvent(`⚔️【玩家攻击】暴击！！本次对敌方造成了 ${finalDamage} 点伤害。`, 'red');
        showEffect('playerEffect', 'https://pic.imgdb.cn/item/66a0d3e8d9c307b7e93a8108.gif');
    } else {
        logBattleEvent(`⚔️【玩家攻击】你造成了 ${finalDamage} 点伤害。`, 'wheat');
    }
    updateDamageValue(finalDamage,false,'extra-damage'); // 显示玩家伤害
    showEffect('playerEffect', 'https://pic.imgdb.cn/item/66712ba3d9c307b7e9f2ab59.gif');

    applyMagicAttackEffects(finalDamage, skillMultiplier); // 传递 damage 和 skillMultiplier 参数以应用效果
    if (battleState.enemy.pierced) {
        handlePierced(); // 处理穿透效果
    }

    // 处理醉酒效果
    if (battleState.player.drunken && finalDamage > 0) {
        const drunkenDamage = Math.floor(finalDamage * 0.1);
        battleAttributes.health = Math.max(0, battleAttributes.health - drunkenDamage);
        logBattleEvent(`醉酒状态下，你招式过猛误伤自身，受到 ${drunkenDamage} 点溅射伤害。`, '#FF0088');
    }

} //独立法伤

function performPoison() {
    if (!attributesFetched) {
        showInfoBox("请先从属性面板获取属性。");
        return;
    }

    if (!battleState || !battleState.enemy) {
        console.error("战斗状态未初始化");
        return;
    }

    if(!playerTurn) {
        return;
    }
    
    if (battleState.player.taunt) {
        performAttack('physical');
        return;
    }
    
    if (!poisonSkillActivated) {
        if (useItem('poisonSkillBook')) {
            poisonSkillActivated = true;
            logBattleEvent("你使用了施毒之术，现在可以对妖怪施毒了。", '#C10066');
        } else {
            logBattleEvent("你还没有获得施毒之术，请尝试通过武神仙葫获取！", 'red');
            return;
        }
    }
    
    const skillsArea = document.getElementById('skills-area');
    const skillDivs = Array.from(skillsArea.children);
    const selectedSkills = skillDivs
        .map(skillDiv => skillDiv.innerText.split(' ')[0])
        .map(skillName => currentPet.skills.find(skill => skill.name === skillName && (skill.type === 'PP' || skill.type === 'PPE')))
        .filter(skill => skill);

    let skillMultiplier = 1;
    let skillLevel = 1;
    let selectedSkill;

    if (selectedSkills.length > 0) {
        const randomIndex = Math.floor(Math.random() * selectedSkills.length);
        selectedSkill = selectedSkills[randomIndex];
        const result = calculateSkillLevelAndMultiplier(selectedSkill);
        skillLevel = result.skillLevel;
        skillMultiplier = result.skillMultiplier;

        logBattleEvent(`你施放了 ${selectedSkill.name} ${skillLevel}级 ，毒性大大加强。`, '#C10066');
    }

    const manaCost = Math.floor(maxMana * 0.4);
    if (battleAttributes.mana < manaCost) {
        logBattleEvent("您的法力值不足，无法使用施毒之法！", 'red');
        return;
    }

    battleAttributes.mana = Math.max(0, battleAttributes.mana - manaCost);

    if (handleMagicDodge('enemy')) {
        playerTurn = false;
        return;
    }

    let poisonChance = 0.3;
    if (useItem('poisonPowder')) {
        poisonChance = 0.7;
        skillMultiplier += 1;
    }
    
    const poisonDamage = Math.floor(battleAttributes.magicAttack * 0.5 * skillMultiplier * (Math.random() * (1.1 - 0.9) + 0.9));
    battleState.enemy.health = Math.max(0, battleState.enemy.health - poisonDamage);
    logBattleEvent(`你对妖怪造成了 ${poisonDamage} 点中毒伤害，消耗了 ${manaCost} 点法力值。`, '#C10066');
    if (battleState.enemy.pierced) {
        handlePierced(); // 处理穿透效果
    }
    showEffect('playerEffect', 'https://pic.imgdb.cn/item/66713185d9c307b7e9fe5fc6.gif');
    updateDamageValue(poisonDamage, false, 'damage'); // 显示玩家伤害


    if (Math.random() < poisonChance && !battleState.enemy.poisoned) {
        battleState.enemy.poisoned = true;
        handlePoison(skillMultiplier,selectedSkill); // 传递技能增益参数
    }
    
    handleShocked();
    handleManaRecover();
    applyAscensionEffects();
    updateUI();
    if (battleAttributes.health <= 0) {
        showNextBattlePrompt(false); // 玩家失败，传递失败状态
        return;
    } else if (battleState.enemy.health <= 0) {
        showNextBattlePrompt(true);
        return;
    }
    playerTurn = false;
} //中毒伤害函数

function handlePoison(skillMultiplier = 1, selectedSkill = null) {
    const basePoisonDuration = 1000; // 基础持续时间1秒
    const additionalPoisonDuration = Math.round(playerCultivation / 240000) * 1000; // 计算附加的持续时间，以毫秒为单位
    const totalPoisonDuration = basePoisonDuration + additionalPoisonDuration; // 总持续时间

    let remainingDuration = totalPoisonDuration; // 初始化剩余时间
    let totalPoisonDamage = 0; // 初始化总毒性伤害

    const poisonInterval = setInterval(() => {
        if (!battleState.enemy.poisoned) {
            clearInterval(poisonInterval);
            return;
        }
        const poisonDamage = Math.floor(battleAttributes.magicAttack * 0.5 * skillMultiplier * (Math.random() * (1.1 - 0.9) + 0.9) * (1 + battleState.player.critDamage * 0.1));
        battleState.enemy.health = Math.max(0, battleState.enemy.health - poisonDamage);
        
        if (selectedSkill && selectedSkill.type === 'PPE') {
            applySpecialSkillEffects(selectedSkill, poisonDamage); //这里传递技能组的对象和毒性伤害值
        }
        
        totalPoisonDamage += poisonDamage; // 累积毒性伤害
        remainingDuration -= 1000; // 每次循环减少1秒

        updateUI();
        updateDamageValue(poisonDamage,false,'extra-damage');
        updateEnemyStatusDisplay();

    }, 200); // 每0.2秒触发一次
    
    if (battleState.enemy.health <= 0) {
        clearInterval(poisonInterval);
        showNextBattlePrompt(true);
        battleState.enemy.poisoned = false;
        return;
    }
    
    battleState.enemy.poisonedTimer = setTimeout(() => {
        battleState.enemy.poisoned = false;
        clearInterval(poisonInterval);
        updateEnemyStatusDisplay();
        logBattleEvent(`持续时间内，敌人一共受到 ${totalPoisonDamage} 点毒性伤害。`, '#C10066');
    }, totalPoisonDuration); // 动态调整中毒效果持续时间
}

//计算修为的效果时长增益
function getCultivationBonusDuration() {
    if (playerCultivation <= 120000) {
        return 0;
    }
    return Math.min(10, ((playerCultivation - 120000) / 10000) * 0.1);
}

function applyPhysicalAttackEffects() {
    if (!divineWeaponManager.lostBook.active) return;

    const effects = divineWeaponManager.lostBook.effects;
    const effect = effects[Math.floor(Math.random() * effects.length)];
    let triggerProbability = Math.min(1, 0.01 + (divineWeaponManager.lostBook.level - 1) * 0.006);
    
    // 计算修为差值对触发概率的影响
    const cultivationDifference = playerCultivation - battleState.enemy.cultivation;
    if (cultivationDifference < 0) {
        const reduction = Math.floor(-cultivationDifference / 10000) * 0.01;
        triggerProbability = Math.max(0.01, triggerProbability - reduction);
        console.log(`当前物理效果真实触发概率为：${triggerProbability}`);
    }
    
    if (Math.random() > triggerProbability) return; // 没有触发效果

    const cultivationBonus = getCultivationBonusDuration();

    switch (effect) {
        case '破甲':
            const armorBreakValue = Math.floor(battleAttributes.physicalAttack * (Math.random() * (0.24 - 0.12) + 0.12));
            battleState.enemy.physicalDefense -= armorBreakValue; // 破甲
            battleState.enemy.armorBreak = true;
            logBattleEvent(`妖怪的护甲被破坏，物理防御减少了 ${armorBreakValue} 点。`, 'white');
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66742a77d9c307b7e92c52b4.gif');
            updateEnemyStatusDisplay();
            battleState.enemy.armorBreakTimer = setTimeout(() => {
                battleState.enemy.physicalDefense += armorBreakValue;
                battleState.enemy.armorBreak = false;
                updateEnemyStatusDisplay();
            }, 3000 + cultivationBonus * 1000); // 破甲持续3秒
            break;
        case '眩晕':
            battleState.enemy.stunned = true; // 妖怪眩晕
            logBattleEvent("妖怪被眩晕，无法行动。", 'wheat');
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66742c80d9c307b7e930b160.gif');
            updateEnemyStatusDisplay();
            battleState.enemy.stunnedTimer = setTimeout(() => {
                battleState.enemy.stunned = false;
                updateEnemyStatusDisplay();
            }, 1000 + cultivationBonus * 1000); // 眩晕持续1秒
            break;
        case '恐吓':
            battleState.enemy.intimidated = true; // 妖怪恐吓状态
            logBattleEvent("妖怪被恐吓，无法暴击。", 'white');
            updateEnemyStatusDisplay();
            battleState.enemy.intimidatedTimer = setTimeout(() => {
                battleState.enemy.intimidated = false;
                updateEnemyStatusDisplay();
            }, 1000 + cultivationBonus * 1000); // 恐吓持续1秒
            break;
        case '穿透':
            if (!battleState.enemy.pierced) {
                handlePiercedEffect(cultivationBonus);
            } else {
                console.log('穿透效果持续中');
            }
            break;
        case '惶恐':
            if (!battleState.enemy.terrified) {
                handleTerrified(cultivationBonus);
            } else {
                console.log('惶恐效果持续中');
            }
            break;
        case '麻痹':
            if (!battleState.enemy.benumbed) {
                battleState.enemy.benumbed = true;
                battleState.enemy.originalMaxHealth = enemyMaxHealth;
                battleState.enemy.benumbStack = 0; // 初始化麻痹叠加计数
            }
            const benumbValue = Math.floor(battleState.enemy.originalMaxHealth * 0.03);
            enemyMaxHealth -= benumbValue;
            battleState.enemy.benumbStack += benumbValue; // 累积麻痹效果
            if (battleState.enemy.health > enemyMaxHealth) {
                battleState.enemy.health = enemyMaxHealth;
            }
            logBattleEvent(`妖怪被麻痹，最大生命值减少了 ${benumbValue} 点。`, 'lightblue');
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66a5d698d9c307b7e9718cb5.gif');
            updateEnemyStatusDisplay();
            battleState.enemy.benumbedTimer = setTimeout(() => {
                if (battleState.enemy.originalMaxHealth) {
                    battleState.enemy.benumbStack -= benumbValue; // 减少当前叠加效果
                    if (battleState.enemy.benumbStack <= 0) {
                        enemyMaxHealth = battleState.enemy.originalMaxHealth;
                        battleState.enemy.benumbed = false;
                    } else {
                        enemyMaxHealth = battleState.enemy.originalMaxHealth - battleState.enemy.benumbStack;
                    }
                }
                updateEnemyStatusDisplay();
            }, 3000 + cultivationBonus * 1000); // 麻痹持续3秒
            break;
    }
}

function applyMagicAttackEffects(damage) {
    if (!divineWeaponManager.fragmentedMap.active) return;

    const effects = divineWeaponManager.fragmentedMap.effects;
    const effect = effects[Math.floor(Math.random() * effects.length)];
    let triggerProbability = Math.min(1, 0.01 + (divineWeaponManager.fragmentedMap.level - 1) * 0.006);
    
    // 计算修为差值对触发概率的影响
    const cultivationDifference = playerCultivation - battleState.enemy.cultivation;
    if (cultivationDifference < 0) {
        const reduction = Math.floor(-cultivationDifference / 10000) * 0.01;
        triggerProbability = Math.max(0.01, triggerProbability - reduction);
        console.log(`当前法术效果真实触发概率为：${triggerProbability}`);
    }
    
    if (Math.random() > triggerProbability) return; // 没有触发效果

    const cultivationBonus = getCultivationBonusDuration();

    switch (effect) {
        case '沉默':
            battleState.enemy.silenced = true; // 妖怪沉默
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66a63612d9c307b7e9d72d78.gif');
            updateEnemyStatusDisplay();
            battleState.enemy.silencedTimer = setTimeout(() => {
                battleState.enemy.silenced = false;
                updateEnemyStatusDisplay();
            }, 3000 + cultivationBonus * 1000); // 沉默持续3秒
            break;
        case '迟缓':
            handleSlow(cultivationBonus);
            break;
        case '混乱':
            battleState.enemy.dazed = true; // 妖怪混乱
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66a63695d9c307b7e9d82c29.gif');
            updateEnemyStatusDisplay();
            battleState.enemy.dazedTimer = setTimeout(() => {
                battleState.enemy.dazed = false;
                updateEnemyStatusDisplay();
            }, 3000 + cultivationBonus * 1000); // 混乱持续3秒
            break;
        case '法力燃烧':
            const manaLoss = Math.floor(damage * 0.8);
            let healthLoss = 0;
        
            if (battleState.enemy.mana < manaLoss) {
                healthLoss = manaLoss - battleState.enemy.mana;
            }
            battleState.enemy.mana = Math.max(0, battleState.enemy.mana - manaLoss);
            battleState.enemy.health = Math.max(0, battleState.enemy.health - healthLoss);
        
            if (healthLoss > 0) {
                logBattleEvent(`敌人的法力已经燃烧殆尽，敌人开始燃烧生命之力！失去了 ${healthLoss} 点生命值。`, '#FF4500');
            } else {
                logBattleEvent(`法力燃烧！妖怪失去了 ${manaLoss} 点法力值。`, '#00BBFF');
            }
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66a5d698d9c307b7e9718c68.gif');
            break;
        case '法力吸取':
            const manaAbsorb = Math.floor(damage * 0.01);
            let actualManaAbsorb = Math.min(manaAbsorb, battleState.enemy.mana);
        
            battleState.enemy.mana = Math.max(0, battleState.enemy.mana - actualManaAbsorb);
            battleAttributes.mana = Math.min(maxMana, battleAttributes.mana + actualManaAbsorb);
        
            logBattleEvent(`你吸取了 ${actualManaAbsorb} 点法力值。`, '#00BBFF');
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66c44a29d9c307b7e967d02b.gif');
            break;
        case '灼烧':
            battleState.enemy.burnt = true;
            showEffect('playerEffect', 'https://pic.imgdb.cn/item/66a647c5d9c307b7e9f3c332.gif');
            updateEnemyStatusDisplay();
            battleState.enemy.burntTimer = setTimeout(() => {
                battleState.enemy.burnt = false;
                updateEnemyStatusDisplay();
            }, 3000 + cultivationBonus * 1000); // 灼烧持续3秒
            break;
    }
}

//具体的效果函数（分离后）
function handlePiercedEffect(cultivationBonus) {
    pierceDamageContainer.totalPierceDamage = 0; // 重置累积的穿透伤害
    battleState.enemy.pierced = true;
    logBattleEvent("妖怪被施加穿透效果，每次造成伤害时会附加真实伤害。穿透效果结束后会给予妖怪致命的余波伤害。", '#ADFF2F');
    showEffect('playerEffect', 'https://pic.imgdb.cn/item/66a647c5d9c307b7e9f3c43c.gif');
    updateEnemyStatusDisplay();

    battleState.enemy.piercedTimer = setTimeout(() => {
        if (battleState.enemy.pierced) {
            const aftershockDamage = Math.floor(pierceDamageContainer.totalPierceDamage * (Math.random() * (0.84 - 0.42) + 0.24) * (1 + playerCultivation / 500000));
            battleState.enemy.health = Math.max(0, battleState.enemy.health - aftershockDamage);
            logBattleEvent(`穿心蚀骨之毒爆！敌人承受了 ${aftershockDamage} 点穿透余波伤害。`, '#ADFF2F');
            updateDamageValue(aftershockDamage,false,'extra-damage');
            showBattleOverlay("https://pic.imgdb.cn/item/66a647c5d9c307b7e9f3c420.gif", 1500, 0.8);
            pierceDamageContainer.totalPierceDamage = 0; // 重置累积的穿透伤害
            battleState.enemy.pierced = false; // 清除穿透状态
        }
        updateUI();
        updateEnemyStatusDisplay();
    }, 3000 + cultivationBonus * 1000); // 穿透效果持续3秒
}

function handlePierced() {
    if (!battleState.enemy.pierced) return;

    const extraDamage = Math.floor(battleAttributes.physicalAttack * 5);
    battleState.enemy.health = Math.max(0, battleState.enemy.health - extraDamage);
    logBattleEvent(`敌人受到 ${extraDamage} 点穿透伤害。`, '#ADFF2F');
    updateDamageValue(extraDamage,false,'extra-damage');
    pierceDamageContainer.totalPierceDamage += extraDamage; // 累积穿透伤害
    updateUI();

    if (battleState.enemy.health <= 0) {
        showNextBattlePrompt(true);
        return;
    }
}

function handleStunned() {
    if (battleState.enemy.stunned) {
        logBattleEvent("妖怪眩晕，无法行动。", 'wheat');
        playerTurn = true;
        return true;
    }
    return false;
}

function handleCriticalAndDrunken(damage) {
    let isCritical = checkCriticalHit(battleState.player.critRate);

    if ((ascensionSkill.name === '灵魂穿刺' || secondAscensionSkill.name === '灵魂穿刺') && isCritical && Math.random() < battleState.player.extraCritDamageChance) {
        const extraDamage = Math.floor(battleAttributes.physicalAttack * battleState.player.extraCritDamageMultiplier);
        battleState.enemy.health = Math.max(0, battleState.enemy.health - extraDamage);
        updateDamageValue(extraDamage,false,'extra-damage');
        logBattleEvent(`灵魂穿刺触发，额外造成了 ${extraDamage} 点伤害。`, 'red');
    }

    // 调用处理醉酒状态的函数
    handleDrunken(damage);
} //处理灵魂穿刺和醉酒（醉酒调用敌人醉酒函数）

function handleSlow(cultivationBonus) {
    const slowAmount = Math.floor(battleState.enemy.speed * 0.25);
    battleState.enemy.speed -= slowAmount; // 速度降低
    battleState.enemy.slow = true;
    showEffect('playerEffect', 'https://pic.imgdb.cn/item/66742c80d9c307b7e930b159.gif');
    updateEnemyStatusDisplay();
    battleState.enemy.slowTimer = setTimeout(() => {
        battleState.enemy.speed += slowAmount;
        battleState.enemy.slow = false;
        updateEnemyStatusDisplay();
    }, 3000 + cultivationBonus * 1000); // 迟缓持续3秒
}

function handleTerrified(cultivationBonus) {
    const weakenAmount = Math.floor(battleAttributes.physicalAttack * 1);
    
    // 确保物理攻击值不会降到0以下
    if (battleState.enemy.physicalAttack - weakenAmount < 0) {
        weakenAmount = battleState.enemy.physicalAttack; // 将削弱量调整为当前物理攻击值
    }
    
    battleState.enemy.physicalAttack -= weakenAmount; // 物理攻击降低
    battleState.enemy.terrified = true;

    showEffect('playerEffect', 'https://pic.imgdb.cn/item/66c43d02d9c307b7e954d4f7.gif');
    updateEnemyStatusDisplay();
    updateUI();

    battleState.enemy.terrifiedTimer = setTimeout(() => {
        battleState.enemy.physicalAttack += weakenAmount;
        battleState.enemy.terrified = false;
        updateEnemyStatusDisplay();
        updateUI();
    }, 3000 + cultivationBonus * 1000); // 惶恐持续3秒
}
        
function handleBurnt() {
    if (battleState.enemy.burnt) {
        let burntDamage = 0;
        const speedDifference = battleState.player.speed - battleState.enemy.speed;

        if (speedDifference > 0) { // player speed > enemy speed
            burntDamage = 2000 + speedDifference * 50;
        } else { // enemy speed >= player speed
            burntDamage = 1000 + Math.abs(speedDifference) * 25;
        }

        battleState.enemy.health = Math.max(0, battleState.enemy.health - burntDamage);
        logBattleEvent(`妖怪受到了 ${burntDamage} 点灼烧伤害。`, 'red');
        updateDamageValue(burntDamage,false,'extra-damage');
        updateUI();

        if (battleState.enemy.health <= 0) {
            showNextBattlePrompt(true);
            return;
        }
    }
}

function handleDazed() {
    if (battleState.enemy.dazed) {
        if (Math.random() < 0.5) {
            const selfDamage = battleState.enemy.physicalAttack;
            battleState.enemy.health = Math.max(0, battleState.enemy.health - selfDamage);
            logBattleEvent(`混乱状态下，敌人攻击了自己，造成了 ${selfDamage} 点伤害。`, 'white');
            updateDamageValue(selfDamage, false, 'damage');
            playerTurn = true;
            return true;
        }
    }
    return false;
}

let alreadyUseMushroom = false;
function handleMushroom() {
    if (alreadyUseMushroom || summonEnemy) {
        showInfoBox('现在无法使用，生效失败！',null,null,'red');
        return;
    }
    alreadyUseMushroom = true;
    const originalEnemyState = JSON.parse(JSON.stringify(enemyPet));
    const reducedEnemyState = {
        health: Math.round(enemyPet.health * 0.5),
        mana: Math.round(enemyPet.mana * 0.5),
        physicalAttack: Math.round(enemyPet.physicalAttack * 0.5),
        physicalDefense: Math.round(enemyPet.physicalDefense * 0.5),
        magicAttack: Math.round(enemyPet.magicAttack * 0.5),
        magicDefense: Math.round(enemyPet.magicDefense * 0.5),
        speed: Math.round(enemyPet.speed * 0.5),
        cultivation: Math.round(enemyPet.cultivation * 1)
    };

    enemyPet = reducedEnemyState;
    enemyMaxHealth = enemyPet.health;
    enemyMaxMana = enemyPet.mana;
    battleState.enemy = { ...enemyPet };

    logBattleEvent("使用见手青，敌人的所有能力降至50%直至本轮战斗胜利。", 'silver');
    // 在战斗回合结束时恢复敌人的原始状态
    function restoreOriginalEnemyState() {
        if (battleState.playerWon) {
            enemyPet = originalEnemyState;
            enemyMaxHealth = enemyPet.health;
            enemyMaxMana = enemyPet.mana;
            battleState.enemy = { ...enemyPet };
            updateEnemyAttributes();
        }
    }
    // 监听战斗回合结束事件，恢复敌人的原始状态
    const originalShowNextBattlePrompt = showNextBattlePrompt;
    showNextBattlePrompt = function(playerWon) {
        alreadyUseMushroom = false;
        restoreOriginalEnemyState();
        originalShowNextBattlePrompt(playerWon);
        showNextBattlePrompt = originalShowNextBattlePrompt;
    };
} //特殊战斗效果函数，由见手青触发

function handleSleep() {
    if (battleState.enemy.sleep) {
        return; // 如果已经处于睡眠状态，直接返回
    }

    const enemyHealthAtSleep = battleState.enemy.health; // 记录进入沉睡状态时的敌人生命值
    console.log(`睡眠时刻的敌人生命值为${enemyHealthAtSleep}`);
    battleState.enemy.sleep = true;
    logBattleEvent(`🧚🏻对方在精灵的低语里陷入沉睡`, "pink");

    const sleepDuration = 10000; // 沉睡持续时间10秒
    const healInterval = 500; // 每0.5秒回血

    const healTimer = setInterval(() => {
        if (!battleState.enemy.sleep) {
            clearInterval(healTimer);
            return;
        }
        battleState.enemy.health = Math.min(enemyMaxHealth, battleState.enemy.health + Math.round(enemyMaxHealth * 0.005));
        updateUI(); // 更新 UI
    }, healInterval);

    const sleepTimer = setTimeout(() => {
        clearInterval(healTimer);
        battleState.enemy.sleep = false;
        logBattleEvent(`敌人从沉睡中醒来了。`, "pink");
        updateUI();
    }, sleepDuration);

    // 监听敌人的生命值变化，提前解除沉睡状态
    const monitorHealth = setInterval(() => {
        if (battleState.enemy.health < enemyHealthAtSleep) {
            clearInterval(healTimer);
            clearTimeout(sleepTimer);
            clearInterval(monitorHealth); // 停止监测
            battleState.enemy.sleep = false;
            logBattleEvent(`敌人被攻击惊醒。`, "pink");
            updateUI();
        }
    }, 100); // 每0.1秒检测一次
}//特殊战斗效果函数，由精灵触发

function getShieldStatus() {
    if (extraShield !== 0) {
        battleState.player.shielded = true;
    } else {
        battleState.player.shielded = false;
    }
}

// 【玩家辅助】玩家回血、产盾函数
function performHeal() {
    if (!attributesFetched) {
        showInfoBox("请先从属性面板获取属性。");
        return;
    }

    if(!playerTurn) {
        return;
    }
    
    if (battleState.player.taunt) {
        performAttack('physical');
        return;
    }
    
    let manaCostMultiplier = 1;
    if (battleState.player.spellSlow) {
        manaCostMultiplier = 500;
        logBattleEvent("妖怪令你对法术的操控更迟钝了，你耗费了更多的法力值！", 'blue');
    }
    
    
    const skillsArea = document.getElementById('skills-area');
    const skillDivs = Array.from(skillsArea.children);
    const selectedSkills = skillDivs
        .map(skillDiv => skillDiv.innerText.split(' ')[0])
        .map(skillName => currentPet.skills.find(skill => skill.name === skillName && (skill.type === 'PH' || skill.type === 'PHE')))
        .filter(skill => { return skill; });

    let skillMultiplier = 1;
    let skillLevel = 1;
    let selectedSkill;
        
    if (selectedSkills.length > 0) {
        const randomIndex = Math.floor(Math.random() * selectedSkills.length);
        selectedSkill = selectedSkills[randomIndex];
        const result = calculateSkillLevelAndMultiplier(selectedSkill);
        skillLevel = result.skillLevel;
        skillMultiplier = result.skillMultiplier;
        logBattleEvent(`你正在施放恢复技能 ${selectedSkill.name} ${skillLevel}级。`, 'aqua');
    } else {
        logBattleEvent(`当前宠物没有学会任何治疗技能！`, 'red');
        return;
    }

    const healAmount = handleHealingBan(skillMultiplier);

    if (battleAttributes.health + healAmount > maxHealth) {
        // 溢出部分转化为护盾
        const overflowAmount = battleAttributes.health + healAmount - maxHealth;
        const shieldAmount = Math.floor(overflowAmount * 0.01);
        extraShield += shieldAmount;
        console.log(`护盾为${extraShield}`);
    }
        
    const manaCost = Math.round(388 * battleRounds * skillLevel * 0.1) * manaCostMultiplier;
    if (battleAttributes.mana < manaCost) {
        logBattleEvent("您的法力值不足，无法治疗！", 'red');
        return;
    }
        
    battleAttributes.health = Math.min(maxHealth, battleAttributes.health + healAmount);
    battleAttributes.mana = Math.max(0, battleAttributes.mana - manaCost);
    
    logBattleEvent(`🔮【玩家治疗】你恢复了 ${healAmount} 点生命值，消耗了 ${manaCost} 点法力值。`, 'aqua');
    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66a5d698d9c307b7e9718c8f.gif');

    updateDamageValue(-healAmount, true, 'damage');
    handleDivineProtection(selectedSkills, skillLevel);
    
    if (selectedSkill && selectedSkill.type === 'PHE') {
        applySpecialSkillEffects(selectedSkill, healAmount);
    }

    handleManaRecover();
    applyAscensionEffects();
    getShieldStatus();
    updateUI();
    if (battleAttributes.health <= 0) {
        showNextBattlePrompt(false); // 玩家失败，传递失败状态
        return;
    } else if (battleState.enemy.health <= 0) {
        showNextBattlePrompt(true);
        return;
    }
    playerTurn = false; // 轮到妖怪回合
    setTimeout(() => enemyAttack(),350);
}

function handleDivineProtection(selectedSkills, skillLevel) {
    let divineProtectionChance = 0.05;
    let additionalDurationBySkill = 0;
    let additionalDurationByCultivation = 0;
    
    if (selectedSkills.length > 0) {
        divineProtectionChance += skillLevel * 0.01;
        additionalDurationBySkill += skillLevel * 0.1;
    }
    
    if (playerCultivation >= 64000) {
        additionalDurationByCultivation += playerCultivation / 12000 * 0.1;
    }
    
    let divineProtectionDuration = 3 + additionalDurationBySkill + additionalDurationByCultivation;
    console.log(`当前仙气护体持续时间为：${divineProtectionDuration}`);
    
    if (ascensionSkill.name === '天降甘霖' || secondAscensionSkill.name === '天降甘霖') {
        divineProtectionChance = battleState.player.divineProtectionChance || 0.5;
        divineProtectionDuration = battleState.player.divineProtectionDuration || 5;
    }
    
    if (Math.random() < divineProtectionChance) {
        battleState.player.divineProtection = true;
        logBattleEvent("你获得了仙气护体状态，受到伤害时会恢复生命值。", 'aqua');
        updatePlayerStatusDisplay();
        setTimeout(() => {
            battleState.player.divineProtection = false;
            updatePlayerStatusDisplay();
        }, divineProtectionDuration * 1000);
    }
}

let GQreflectPercentage;
        
function handleReflectAndHeal(damage) {
    // 确保 damage 是有效的数字
    if (isNaN(damage) || damage <= 0) {
        console.error("Invalid damage value:", damage);
        return;
    }

    // 处理以牙还牙技能的反弹逻辑
    if (ascensionSkill.name === '以牙还牙' || secondAscensionSkill.name === '以牙还牙') {
        const baseReflectPercentage = (45 + 2 * ascensionSkill.level) / 100;
        const randomAddition = Math.random() * 15;
        const reflectPercentage = baseReflectPercentage + randomAddition / 100;
    
        if (!isNaN(reflectPercentage) && reflectPercentage > 0) {
            let reflectDamage = Math.floor(damage * reflectPercentage);
    
            if (isNaN(reflectDamage)) {
                reflectDamage = 0;
                console.error("Reflect damage is NaN, setting to 0.");
            }
    
            // 计算反弹伤害的最大值
            const maxReflectDamage = Math.round((battleAttributes.physicalAttack + battleAttributes.magicAttack) * 5);
    
            // 确保反弹伤害不超过最大值
            if (reflectDamage > maxReflectDamage) {
                reflectDamage = maxReflectDamage;
            }
    
            battleState.enemy.health = Math.max(0, battleState.enemy.health - reflectDamage);
            logBattleEvent(`以牙还牙触发，反弹了 ${reflectDamage} 点伤害给妖怪。`, 'red');
            console.log(`Current reflectPercentage is ${reflectPercentage}`);
        } else {
            console.error("Invalid reflectPercentage:", reflectPercentage);
        }
    }

    // 处理罡气反弹状态的逻辑
    if (battleState.player.reflecting && GQreflectPercentage !== null) {
        let reflectPercentage = GQreflectPercentage;
        let reflectDamage = Math.max(1000, Math.floor(damage * reflectPercentage));
        console.log(`当前反弹比例为${reflectPercentage}`);
        if (isNaN(reflectDamage)) {
            reflectDamage = 0;
            console.error("Reflect damage is NaN, setting to 0.");
        } 
        battleState.enemy.health = Math.max(0, battleState.enemy.health - reflectDamage);
        logBattleEvent(`反弹状态触发，反弹了 ${reflectDamage} 点真实伤害给妖怪。`);
    }

    // 处理金符效果的反弹逻辑
    const activeEffects = applyWuxingEffects();
    if (activeEffects.goldAmulet && activeEffects.goldAmulet > 0) {
        const goldReflectPercentage = [0, 0.02, 0.05, 0.07, 0.12, 0.20, 0.22, 0.25, 0.28, 0.4][activeEffects.goldAmulet];
        if (!isNaN(goldReflectPercentage) && goldReflectPercentage > 0) {
            let reflectDamage = Math.floor(damage * goldReflectPercentage);
            if (isNaN(reflectDamage)) {
                reflectDamage = 0;
                console.error("Reflect damage is NaN, setting to 0.");
            }
            battleState.enemy.health = Math.max(0, battleState.enemy.health - reflectDamage);
            logBattleEvent(`🟡奥义·金之境界！反弹了 ${reflectDamage} 点伤害。`, 'gold');
        } else {
            console.error("Invalid goldReflectPercentage:", goldReflectPercentage);
        }
    }
    
    // 处理仙气护体的治疗逻辑
    if (battleState.player.divineProtection) {
        let healAmount = Math.floor(3 * battleAttributes.magicAttack * (Math.random() * (0.12 - 0.08) + 0.2));
        if (isNaN(healAmount)) {
            healAmount = 0;
            console.error("Heal amount is NaN, setting to 0.");
        }
        battleAttributes.health = Math.min(maxHealth, battleAttributes.health + healAmount);
        updateDamageValue(-healAmount,true,'extra-damage');
        logBattleEvent(`🔮【玩家治疗】仙气护体触发，恢复了 ${healAmount} 点生命值。`, 'aqua');
        showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66a5d698d9c307b7e9718c7d.gif');
    }
}//处理仙气（包含反弹逻辑）

let resurrectionState = false;
let resurrectionTimesMap = new Map();  // 用 Map 来存储每个技能的复活次数

function checkResurrectionState(times) {
    resurrectionState = times > 0;
}

// 在战斗结束时重置复活状态和次数
function resetResurrectionState() {
    resurrectionTimesMap.clear();
    checkResurrectionState(0);
}

function handleResurrection(damage) {
    if (battleAttributes.health > damage) {
        return;
    }
    
    if (battleAttributes.health <= 0 && (ascensionSkill.name === '向死而生' || secondAscensionSkill.name === '向死而生')) {
        let skill = ascensionSkill.name === '向死而生' ? ascensionSkill : secondAscensionSkill;
        const manaCostPercentage = skill.baseValue + skill.increment(skill.level);
        const manaCost = Math.floor(maxMana * (manaCostPercentage / 100));
        if (battleAttributes.mana >= manaCost) {
            battleAttributes.health = 1;
            battleAttributes.mana -= manaCost;
            logBattleEvent('向死而生触发，生命值恢复至1，消耗大量法力值。', 'red');
            updateUI();
        }
        return;
    }

    const fhSkills = [];
    const skillsArea = document.getElementById("skills-area");
    if (skillsArea) {
        Array.from(skillsArea.children).forEach(skillDiv => {
            const skillName = skillDiv.innerText.split(' ')[0];
            const skill = currentPet.skills.find(skill => skill.name === skillName && skill.type === "FH");
            if (skill) {
                fhSkills.push(skill);
            }
        });
    }

    if (fhSkills.length === 0) return;

    for (const fhSkill of fhSkills) {
        const skillLevel = fhSkill.level || 1;
        const skillMultiplier = fhSkill.multiplier || 1;
        const resurrectionAllowedTimes = Math.ceil(skillMultiplier + skillLevel * 0.01);

        // 使用 Map 来跟踪每个技能的复活次数
        if (!resurrectionTimesMap.has(fhSkill.name)) {
            resurrectionTimesMap.set(fhSkill.name, 0);
        }
        let resurrectionTimes = resurrectionTimesMap.get(fhSkill.name);

        let remainResurrectionTimes = resurrectionAllowedTimes - resurrectionTimes;

        if (resurrectionTimes < resurrectionAllowedTimes && battleAttributes.health <= 0) {
            const healthRecovered = Math.round(maxHealth * (0.1 * skillMultiplier));
            battleAttributes.health += healthRecovered;
            resurrectionTimes++;  // 只增加该技能的复活次数
            resurrectionTimesMap.set(fhSkill.name, resurrectionTimes);  // 更新 Map 中的次数

            updateDamageValue(-healthRecovered, false, 'damage');
            logBattleEvent(`${fhSkill.name} ${skillLevel}级触发，复活并恢复 ${healthRecovered} 点生命值，本局战斗还能再生效${remainResurrectionTimes}次`, 'lime');
            checkResurrectionState(remainResurrectionTimes);
        } else if (resurrectionTimes >= resurrectionAllowedTimes) {
            resurrectionState = false;
            logBattleEvent(`${fhSkill.name} 已经无法再触发复活。`, 'gray');
            showNextBattlePrompt(false);
        }
        
        updateUI();
    }
}

function handlePlayerPassiveSkills(damage = null) {
    // 定义被动技能数组
    const PASSIVE_SKILLS = ["上善若水"];  
    const skillsArea = document.getElementById("skills-area");
    
    if (!skillsArea || !currentPet || !currentPet.skills) return;

    // 遍历技能区域的所有技能
    const skillDivs = Array.from(skillsArea.children);
    for (const skillDiv of skillDivs) {
        if (!skillDiv || !skillDiv.innerText) continue;
        
        const skillText = skillDiv.innerText;
        
        // 检查技能文本是否包含任何被动技能关键字
        for (const passiveSkill of PASSIVE_SKILLS) {
            if (skillText.includes(passiveSkill)) {
                // 获取技能名称
                const skillName = skillText.split(' ')[0];
                // 从currentPet.skills中查找完整的技能信息
                const skill = currentPet.skills.find(s => s.name === skillName);
                if (!skill) continue;

                // 执行对应的被动技能效果
                switch(passiveSkill) {
                    case "上善若水":
                        handleShanShuiSkill(skill, damage);
                        break;
                    // 在这里添加其他被动技能的处理
                }
                // 一个技能只触发一次被动效果
                break;
            }
        }
    }
}

function handleShanShuiSkill(skill, damage) {
    if (!skill || typeof currentLifeSpan === 'undefined') {
        console.log("技能或寿命状态无效");
        return;
    }
    
    // 检查寿命是否足够
    if (currentLifeSpan < skill.level) {
        console.log("寿命不足，无法触发上善若水");
        return;
    }

    if (damage > maxHealth) return;
    
    // 计算治疗量
    let healAmount = 0;
    if (battleAttributes && typeof battleAttributes.magicAttack !== 'undefined') {
        healAmount = Math.floor(battleAttributes.magicAttack * (skill.multiplier || 0));
    }
    if (damage && typeof damage === 'number') {
        const damageBasedHeal = Math.floor(damage * (skill.multiplier || 0));
        healAmount = Math.max(healAmount, damageBasedHeal);
    }

    if (healAmount <= 0) {
        console.log("治疗量计算为0，不触发效果");
        return;
    }

    // 扣除寿命
    currentLifeSpan -= skill.level;
    
    // 增加生命值
    if (typeof battleAttributes.health !== 'undefined' && typeof maxHealth !== 'undefined') {
        const oldHP = battleAttributes.health;
        battleAttributes.health = Math.min(
            battleAttributes.health + healAmount,
            maxHealth
        );
        
        // 记录战斗事件
        logBattleEvent(
            `【被动技能】${skill.name} ${skill.level}级触发，治疗了${healAmount}点生命值，消耗${skill.level}点寿命`,
            'lime'
        );
        updateDamageValue(-healAmount, true, 'damage');
        
        console.log(`上善若水触发: HP ${oldHP} -> ${battleAttributes.health}, 消耗寿命 ${skill.level}`);
    }

    // 更新UI
    updateUI();
}

// handleRelieveEffects 优化版本
function handleRelieveEffects() {
    try {
        const jkSkills = [];
        const skillsArea = document.getElementById("skills-area");
        
        // 安全地获取技能列表
        if (!skillsArea) {
            console.warn("技能区域不存在");
            return;
        }

        // 提取并验证技能
        Array.from(skillsArea.children).forEach(skillDiv => {
            if (!skillDiv || !skillDiv.innerText) return;
            
            const skillName = skillDiv.innerText.split(' ')[0];
            if (!skillName) return;

            const skill = currentPet?.skills?.find(s => 
                s.name === skillName && 
                (s.type === "JK" || s.type === "JKE")
            );
            
            if (skill) {
                jkSkills.push(skill);
            }
        });

        if (jkSkills.length === 0) return;

        // 处理每个解控技能
        for (const jkSkill of jkSkills) {
            // 安全地获取技能属性
            const skillLevel = Number(jkSkill.level) || 1;
            const skillMultiplier = Number(jkSkill.multiplier) || 0.01;
            
            // 计算成功率
            const successRate = Math.min(0.1, skillLevel * skillMultiplier);
            
            // 判定是否触发
            if (Math.random() < successRate) {
                clearEnemyEffect();
                logBattleEvent(
                    `${jkSkill.name} ${skillLevel}级触发，成功解除敌人的控制效果！`,
                    'lime'
                );

                // 处理特殊效果
                if (jkSkill.type === "JKE") {
                    try {
                        applySpecialSkillEffects(jkSkill, null);
                    } catch (error) {
                        console.error("应用特殊效果时发生错误:", error);
                    }
                }
            }
        }
    } catch (error) {
        console.error("处理解控效果时发生错误:", error);
    } finally {
        updateUI();
    }
}

function performDefense() {
    if (!attributesFetched) {
        showInfoBox("请先从属性面板获取属性。");
        return;
    }

    if (!battleState || !battleState.enemy) {
        console.error("战斗状态未初始化");
        return;
    }

    if(!playerTurn) {
        return;
    }
        
    if (battleState.player.taunt) {
        performAttack('physical');
        return;
    }

    const skillsArea = document.getElementById('skills-area');
    const skillDivs = Array.from(skillsArea.children);
    const selectedSkills = skillDivs
        .map(skillDiv => skillDiv.innerText.split(' ')[0])
        .map(skillName => currentPet.skills.find(skill => skill.name === skillName && (skill.type === 'PD' || skill.type === 'PDE')))
        .filter(skill => skill);

    let skillMultiplier = 1;
    let selectedSkillName = '普通防御';
    let selectedSkill;
    
    if (selectedSkills.length > 0) {
        const randomIndex = Math.floor(Math.random() * selectedSkills.length);
        selectedSkill = selectedSkills[randomIndex];
        skillMultiplier = selectedSkill.multiplier;
        selectedSkillName = selectedSkill.name;
    }

    let defenseReduction = (Math.random() * (0.99 - 0.8) + 0.8) * skillMultiplier;

    battleState.player.defending = true;
    battleState.player.defenseReduction = defenseReduction;
    
    if (defenseReduction < 1){
        logBattleEvent(`🛡【玩家防御】你施放了防御技能 ${selectedSkillName}，本回合抵抗了 ${Math.floor(defenseReduction * 100)}% 伤害。`, 'orange');
    } else {
        logBattleEvent(`🛡【玩家防御】你施放了防御技能 ${selectedSkillName}，本回合抵抗了 ${Math.floor(defenseReduction * 100)}% 伤害，溢出值已形成护盾。`, 'orange');
    }
    
    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66a5d698d9c307b7e9718ca1.gif');

    if (selectedSkill && selectedSkill.type === 'PDE') {
        applySpecialSkillEffects(selectedSkill, value = null);
    }

    applyDefenseBonus(selectedSkillName);
    handleManaRecover();
    getShieldStatus();
    applyAscensionEffects();
    updateUI();
    if (battleAttributes.health <= 0) {
        showNextBattlePrompt(false); // 玩家失败，传递失败状态
        return;
    } else if (battleState.enemy.health <= 0) {
        showNextBattlePrompt(true);
        return;
    }
    playerTurn = false;
}

function handleDamageReduction(damage, isCritical = false) {
    let initialDamage = damage;
    let totalDamageReduction = 0;
    let shieldReduction = 0;
    let defenseReduction = 0;
    let finalDamage = damage;
    let toleranceReduction = 0;  // 新增：记录宽容减伤量
    
    // 获取当前生效的五行符效果
    const activeEffects = applyWuxingEffects();
    
    // 处理智慧守护的减伤逻辑
    finalDamage = handleWiseDefense(finalDamage);
    //console.log(`智慧守护后伤害修正为${finalDamage}`);
    
    // 处理元素力量（宽容）的减伤逻辑
    const skillsArea = document.getElementById("skills-area");
    if (skillsArea && currentPet && currentPet.skills) {
        const toleranceSkill = currentPet.skills.find(s => s.name === "元素力量（宽容）");
        
        if (toleranceSkill) {
            let reductionRate;
            if (toleranceSkill.level <= 20) {
                reductionRate = toleranceSkill.level * 0.005;  // 每级0.5%
            } else {
                reductionRate = (20 * 0.005) + ((toleranceSkill.level - 20) * 0.01);  // 20级后每级1%
            }
            
            toleranceReduction = Math.floor(finalDamage * reductionRate);
            //console.log(`元素宽容后后伤害减免为${toleranceReduction}`);
            if (toleranceReduction > 0) {  // 只在有实际减伤时记录
                finalDamage -= toleranceReduction;
                //console.log(`元素宽容后后伤害修正为${finalDamage}`);
                totalDamageReduction += toleranceReduction;
                logBattleEvent(
                    `【被动技能】元素力量（宽容） ${toleranceSkill.level}级触发，减免了${toleranceReduction}点伤害`,
                    'lime'
                );
            }
        }
    }

    // 处理凤佑天下
    const phoenixSkill = currentPet.skills.find(s => s.name === "凤佑天下");
    if (phoenixSkill) {
        let phoenixReductionRate;
        if (phoenixSkill.level <= 20) {
            phoenixReductionRate = phoenixSkill.level * 0.04;  // 1-20级，每级4%
        } else if (phoenixSkill.level <= 30) {
            phoenixReductionRate = (20 * 0.04) + ((phoenixSkill.level - 20) * 0.01);  // 21-30级，每级1%
        }
        
        const phoenixReduction = Math.floor(finalDamage * phoenixReductionRate);
        if (phoenixReduction > 0) {
            finalDamage -= phoenixReduction;
            totalDamageReduction += phoenixReduction;
            logBattleEvent(
                `【被动技能】凤佑天下 ${phoenixSkill.level}级触发，减免了${phoenixReduction}点伤害`,
                'orange'
            );
        }
    }

    // 检查是否触发"无我之境"
    if ((ascensionSkill.name === '无我之境' || secondAscensionSkill.name === '无我之境') && 
        Math.random() < battleState.player.invincibilityChance) {
        finalDamage = 0;
        logBattleEvent("遁入无我之境！", 'silver');
        showBattleOverlay("https://pic.imgdb.cn/item/66b86c3ad9c307b7e93202e9.gif", 3000, 0.8);
        return;
    }

    if (isNaN(finalDamage)) {
        finalDamage = 0;
        console.error("Damage is NaN, setting to 0.");
    }

    // 处理护盾的伤害吸收
    if (extraShield > 0) {
        const shieldBefore = extraShield;
        finalDamage -= extraShield;
        if (finalDamage < 0) {
            extraShield = -finalDamage;
            finalDamage = 0;
        } else {
            extraShield = 0;
        }
        shieldReduction = shieldBefore - extraShield;
    }

    // 飞升技能的伤害减免处理
    const damageReductionPercentage = battleState.player.damageReductionPercentage / 100;
    if (damageReductionPercentage > 0) {
        const reduction = Math.floor(finalDamage * damageReductionPercentage);
        finalDamage -= reduction;
        totalDamageReduction += reduction;
    }

    // 防御状态下的伤害减免处理
    if (battleState.player.defending) {
        const defenseReductionPercentage = battleState.player.defenseReduction;
        const reduction = Math.floor(finalDamage * defenseReductionPercentage);
        if (defenseReductionPercentage > 1) {
            extraShield += Math.floor(finalDamage * (defenseReductionPercentage - 1));
        }
        finalDamage -= reduction;
        defenseReduction += reduction;
        battleState.player.defending = false;
    }

    // 处理土符效果的伤害减免
    if (activeEffects.earthAmulet && activeEffects.earthAmulet > 0) {
        const earthReductionPercentage = [0, 0.02, 0.05, 0.07, 0.12, 0.20, 0.22, 0.25, 0.28, 0.4][activeEffects.earthAmulet];
        const earthReduction = Math.floor(finalDamage * earthReductionPercentage);
        finalDamage -= earthReduction;
        totalDamageReduction += earthReduction;
        logBattleEvent(`🟤奥义·土之庇护！你减少了 ${earthReduction}点所受的伤害。`, 'brown');
    }

    // 计算最终伤害并更新玩家血量
    const rightBattleAttributesHealth = battleAttributes.health;
    battleAttributes.health = Math.max(0, battleAttributes.health - finalDamage);
    if (battleAttributes.health > rightBattleAttributesHealth) {
        battleAttributes.health = rightBattleAttributesHealth;
    }

    // 记录最终的伤害减免和伤害值
    const finalDamageReduction = shieldReduction + defenseReduction + totalDamageReduction + (isNaN(wiseDefense) ? 0 : wiseDefense);
    const formattedFinalDamageReduction = isNaN(finalDamageReduction) ? 0 : finalDamageReduction;
    const formattedFinalDamage = isNaN(finalDamage) ? 0 : finalDamage;
    const formattedExtraShield = isNaN(extraShield) ? 0 : extraShield;

    // 打印战斗日志并更新UI
    wiseDefenseManaCost = 0;
    handleReflectAndHeal(formattedFinalDamage);
    if (isCritical) {
        updateDamageValue(formattedFinalDamage, true, 'damage', true);
    } else {
        updateDamageValue(formattedFinalDamage, true, 'damage');
    }
    
    // 更新控制台日志，加入宽容减伤的信息
    console.log(`护盾抵挡了 ${shieldReduction} 点伤害，土符抵挡了${totalDamageReduction}，格挡技能抵挡 ${defenseReduction} 点伤害，智慧守护抵挡${isNaN(wiseDefense) ? 0 : wiseDefense}点伤害，宽容抵挡了${toleranceReduction}点伤害，目前护盾量为 ${formattedExtraShield}，你最终受到了 ${formattedFinalDamage} 点伤害。`);
    getShieldStatus();
}

function handleWiseDefense(damage) {
    const shSkills = [];
    const skillsArea = document.getElementById("skills-area");
    if (skillsArea) {
        Array.from(skillsArea.children).forEach(skillDiv => {
            const skillName = skillDiv.innerText.split(' ')[0];
            const skill = currentPet.skills.find(skill => skill.name === skillName && skill.type === "SH");
            if (skill) {
                shSkills.push(skill);
            }
        });
    }

    if (shSkills.length === 0) return damage;

    let finalDamage = damage;

    for (const shSkill of shSkills) {
        const { skillLevel, skillMultiplier } = calculateSkillLevelAndMultiplier(shSkill);
        const damageReductionPercentage = Math.min(0.6, 0.4 + skillLevel * 0.01);
        const defenseFactor = 1 + 0.05 * (skillLevel - 1);
        const reservePercentage = Math.max(0, 0.19 - 0.01 * (skillLevel - 1));
        const maxManaUsed = Math.floor(battleAttributes.mana * (1 - reservePercentage));
        const maxDamageToCancel = Math.round(finalDamage * damageReductionPercentage);
        const damageToCancel = Math.min(maxDamageToCancel, maxManaUsed * defenseFactor);
        const manaUsed = Math.min(maxManaUsed, Math.ceil(damageToCancel / defenseFactor));
        battleAttributes.mana -= manaUsed;
        finalDamage -= Math.round(manaUsed * defenseFactor);
        wiseDefense = Math.round(manaUsed * defenseFactor); //此变量用于外部调用该数值并进行显示
        wiseDefenseManaCost = manaUsed; //此变量用于外部调用该数值并进行显示

        console.log(`${shSkill.name} ${skillLevel}级消耗 ${manaUsed} 点法力值。`);
    }

    return finalDamage;
}

function applyDefenseBonus(selectedSkillName) {
    if (!battleState.player.defenseBonusCount) {
        battleState.player.defenseBonusCount = 0;
    }
    if (battleState.player.defenseBonusCount < 5) {
        battleState.player.defenseBonusCount += 1;

        const bonusCritRate = 0.06;
        const bonusCritDamage = 0.09;

        battleState.player.critRate += bonusCritRate;
        battleState.player.critDamage += bonusCritDamage;

        if (!battleState.player.defenseBonus) {
            battleState.player.defenseBonus = {
                critRate: 0,
                critDamage: 0
            };
        }
        battleState.player.defenseBonus.critRate += bonusCritRate;
        battleState.player.defenseBonus.critDamage += bonusCritDamage;
        battleState.player.defensing = true;
        updatePlayerStatusDisplay();
    } else {
        logBattleEvent(`防御增益已达到最大值，无法再增加。`, 'yellow');
    }
}

function applyDefenseBonusEffect() {
    if (battleState.player.defenseBonus) {
        const { critRate, critDamage } = battleState.player.defenseBonus;

        battleState.player.critRate -= critRate;
        battleState.player.critDamage -= critDamage;

        logBattleEvent(`你的蓄力增益效果已应用：${Math.round(critRate * 100)}% 暴击率和 ${Math.round(critDamage * 100)}% 暴击伤害。`, 'yellow');
        battleState.player.defenseBonusCount = 0;
        battleState.player.defenseBonus = null;
        battleState.player.defensing = false;
    }
}
        
function handleManaRecover() {
    const hlSkills = [];
    const skillsArea = document.getElementById("skills-area");
    if (skillsArea) {
        Array.from(skillsArea.children).forEach(skillDiv => {
            const skillName = skillDiv.innerText.split(' ')[0];
            const skill = currentPet.skills.find(skill => skill.name === skillName && skill.type === "HL");
            if (skill) {
                hlSkills.push(skill);
            }
        });
    }

    if (hlSkills.length === 0) return;

    for (const hlSkill of hlSkills) {
        const skillLevel = hlSkill.level || 1;
        const skillMultiplier = hlSkill.multiplier || 1;
        const manaRecoverPercentage = skillMultiplier + skillLevel * 0.01;
        const manaRecovered = Math.round(maxMana * manaRecoverPercentage);
        battleAttributes.mana = Math.min(maxMana, battleAttributes.mana + manaRecovered);
        logBattleEvent(`${hlSkill.name} ${skillLevel}级为你恢复了 ${manaRecovered} 点法力值。`, 'lightblue');
    }
} //被动回复法力值

let enemyActionInterval;
function decideEnemyCanPerform() {
    if (!battleState?.enemy || !battleAttributes) {
        console.error("战斗状态未初始化");
        return;
    }
    const progressElement = document.getElementById('enemy-speed-bar');
    if (!progressElement) {
        console.error("速度条元素未找到");
        return;
    }

    if (enemyActionInterval) {
        clearInterval(enemyActionInterval);
        enemyActionInterval = null;
    }
    
    progressElement.style.width = '0%';
    let enemyAttackScheduled = false;

    enemyActionInterval = setInterval(() => {
        if (!onBattleState) {
            clearInterval(enemyActionInterval);
            enemyActionInterval = null;
            return;
        }

        if (playerTurn) {
            try {
                const enemySpeed = battleState.enemy.speed || 0;
                const enemySpeedFactor = Math.max(
                    0, 
                    (enemySpeed / (enemySpeed + 10000)) * battleRounds * 0.1
                );
                const currentWidth = parseFloat(progressElement.style.width) || 0;
                const newWidth = Math.min(100, currentWidth + enemySpeedFactor);
                progressElement.style.width = `${newWidth}%`;

                if (newWidth >= 100) {
                    progressElement.style.width = '0%';
                    playerTurn = false;
                    enemyAttack();
                }
                updateUI();
            } catch (error) {
                console.error("进度条更新出错:", error);
            }
        } else if (!enemyAttackScheduled) {
            enemyAttackScheduled = true;
            setTimeout(() => {
                if (onBattleState && !playerTurn) {
                    enemyAttack();
                }
                enemyAttackScheduled = false;
            }, 500);
        }
    }, 350);
}

document.getElementById('enemy-speed-container').addEventListener('click', () => {
    showInfoBox('这是敌人的行动条，当轮到玩家回合但玩家未行动时，此行动条积满敌人将会行动。行动条的积累速度与敌人的当前速度有关。关闭战斗界面会停止积累。');
});

function stopEnemyAction() {
    // 清除计时器，停止敌人行动
    if (enemyActionInterval) {
        clearInterval(enemyActionInterval);
        enemyActionInterval = null;  // 重置计时器ID
    }
}
        
// 【怪物战斗】怪物伤害函数（物理/物理效果、法术/法术效果）
function enemyAttack() {
    if (!battleState || !battleAttributes || !battleState.enemy) {
        console.error("战斗状态未初始化");
        return;
    }

    if (!summonEnemy) {
        handleRampaged(); //再判断狂暴状态
    }

    if (playerTurn) {
        return;
    }
    
    if (handleDazed()) return;
    
    if (handleStunned()) return;
    
    if (battleState.enemy.sleep) {
        playerTurn = true;
        return;
    }

    playerTurn = true;
    
    const enemyHealthPercentage = battleState.enemy.health / enemyMaxHealth;
    const enemyManaPercentage = battleState.enemy.mana / enemyMaxMana;
    const healProbability = enemyHealthPercentage < 0.3 ? 0.7 : 0.1;

    if (Math.random() < healProbability) {
        enemyHeal();
        return;
    }

    const defenseProbability = getRandomInt(0, 100);
    const defenseLine = enemyMaxHealth * 0.5;

    if (battleState.enemy.health <= defenseLine && defenseProbability <= 50) {
        enemyDefense();
        return;
    }
        
    if (handleEnemySteal(enemyHealthPercentage, enemyManaPercentage)) {
        updateUI();
        
        return;
    }

    let damage = 0;
    let isCritical = checkCriticalHit(enemyCritRate);

    if (battleState.enemy.intimidated) {
        isCritical = false;
    }

    const attackType = Math.random() < 0.5 ? 'physical' : 'magical';
    
    if (attackType === 'physical') {
        damage = performEnemyPhysicalAttack(isCritical);
    } else if (attackType === 'magical' && !battleState.enemy.silenced) {
        damage = performEnemyMagicalAttack(isCritical);
    } else {
        logBattleEvent("妖怪被沉默，无法进行法术攻击。", 'white');
    }
    
    handleBurnt();

    // 检查 damage 是否有效
    if (isNaN(damage) || damage <= 0) {
        console.error("Invalid damage value before reduction:", damage);
        damage = 0;
    }
    
    // 在enemyAttack函数中调整调用顺序
    damage = handleDamageReduction(damage, isCritical);
    handleResurrection(damage);
    handlePlayerPassiveSkills(damage);
    handleRelieveEffects();
    
    // 检查玩家和敌人的血量，更新战斗状态
    if (battleAttributes.health <= 0) {
        showNextBattlePrompt(false);
        return;
    } else if (battleState.enemy.health <= 0) {
        showNextBattlePrompt(true);
        return;
    } else {
        updateUI();
    }
    
     //轮到玩家回合
}

function performEnemyPhysicalAttack(isCritical) { 
    // 检查玩家是否闪避
    if (handleDodge('player')) {
        return 0; // 如果玩家闪避成功，物理攻击伤害为0
    }
   
    const defenseFactor = (Math.random() * (1.2 - 0.8) + 0.8);
    
    // 确保enemy-level的内容为数字并正确计算attackMultiplier
    const enemyLevel = parseInt(document.getElementById('enemy-level').innerText, 10) || 0;
    const attackMultiplier = 1 + (enemyLevel / 100);
    
    const x = battleAttributes.physicalDefense * defenseFactor;
    const effectiveDefense = f(x);
    const constantDamageReduction = Math.round(battleAttributes.physicalDefense * 0.1);

    let damage;
    if (effectiveDefense !== 0){
        damage = Math.max(1, Math.floor((battleState.enemy.physicalAttack * 1.2 * attackMultiplier) * (1 - effectiveDefense)));
    } else {
        damage = Math.max(1, Math.floor(battleState.enemy.physicalAttack * 1.2 * attackMultiplier));
    }
    
    damage = calculateDamage(damage, isCritical, enemyCritDamage);
    damage = Math.max(1, damage - constantDamageReduction);
    
    if (isCritical) {
        logBattleEvent(`⚔️【敌人攻击】妖怪施放物理技能·黑暗血刃并发起暴击，造成了 ${damage} 的猛烈伤害！`, 'red');
    } else {
        logBattleEvent(`⚔️【敌人攻击】妖怪施放物理技能·黑暗血刃，造成了 ${damage} 点伤害。`, 'white');
    }
    
    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66a0d3e8d9c307b7e93a8108.gif');

    // 新增规则判断
    if (battleState.player.slaughter) {
        const cultivationDiff = playerCultivation - enemyPetCultivation;
        let extraDamage = 0;

        if (cultivationDiff < 0) {
            // 玩家修为低于敌人修为
            const absM = Math.abs(cultivationDiff);
            enemyPhysicalAttackCount++;
            extraDamage = absM * enemyPhysicalAttackCount;
            logBattleEvent(`⚔️【敌人攻击】杀戮状态下由于修为差距，敌人本次物理攻击额外造成了 ${extraDamage} 点伤害！`, 'grey');
            updateDamageValue(extraDamage, true,'extra-damage');
        } else if (cultivationDiff > 0) {
            // 玩家修为高于敌人修为
            const mPlus = cultivationDiff;
            battleState.enemy.health -= mPlus;
            logBattleEvent(`⚔️【敌人攻击】杀戮状态下由于修为差距，敌人在施放物理攻击时自身损失了 ${mPlus} 点生命值！`, 'grey');
            updateDamageValue(extraDamage,false,'extra-damage');
        }

        damage += extraDamage;
    }

    if (!battleState.enemy.silenced || damage !== 0) {
        applyEnemyPhysicalEffects(damage); // 仅在未被沉默或有伤害时应用物理效果
    }
    
    return damage;
}

function performEnemyMagicalAttack(isCritical) {
    if (battleState.enemy.mana < 50) {
        enemyAttack('physical');
        return 0;
    }

    const enemyLevel = parseInt(document.getElementById('enemy-level').innerText, 10) || 0;
    const attackMultiplier = 1 + (enemyLevel / 100);
    
    const defenseFactor = (Math.random() * (1.2 - 0.8) + 0.8);
    const x = battleAttributes.magicDefense * defenseFactor;
    const effectiveDefense = f(x);
    const constantDamageReduction = Math.round(battleAttributes.magicDefense * 0.1);

    let damage;
    if (effectiveDefense !== 0){
        damage = Math.max(1, Math.floor(battleState.enemy.magicAttack * attackMultiplier * (1 - effectiveDefense)) - constantDamageReduction);
    } else {
        damage = Math.max(1, Math.floor(battleState.enemy.magicAttack * attackMultiplier) - constantDamageReduction);
    }
    
    damage = calculateDamage(damage, isCritical, enemyCritDamage);
    damage = Math.max(1, damage - constantDamageReduction);

    if (handleMagicDodge('player')) {
        return 0;
    }
    
    const manaCost = Math.floor(Math.random() * (100 - 50 + 1)) + 500;
    battleState.enemy.mana = Math.max(0, battleState.enemy.mana - manaCost);
    if (isCritical) {
        logBattleEvent(`⚔️【敌人攻击】妖怪施放法术技能·嗜血魔咒并发起暴击，造成了 ${damage} 的猛烈伤害！消耗了 ${manaCost} 点法力值。`, 'red');
        showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66a0d3e8d9c307b7e93a8108.gif');
    } else {
        logBattleEvent(`⚔️【敌人攻击】妖怪施放法术技能·嗜血魔咒，造成了 ${damage} 点伤害，消耗了 ${manaCost} 点法力值。`, 'wheat');
    }
    
    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66717584d9c307b7e98a90e6.gif');

    // 应用妖怪法术效果
    applyEnemyMagicEffects(damage);
    
    return damage;
}

// 【怪物辅助】怪物回血、增益等函数      
function enemyHeal() {
    if (enemyHealCount >= 20) {
        enemyAttack();
        return;
    }

    if (battleState.enemy.sleep) {
        return;
    }
    
    const manaCost = 288 * battleRounds;

    // 检查妖怪的法力值是否足够
    if (battleState.enemy.mana < manaCost) {
        performEnemyPhysicalAttack(false);
        return;
    }

    // 检查妖怪是否被沉默
    if (battleState.enemy.silenced) {
        logBattleEvent("由于妖怪被沉默，无法治疗", '#FFC8B4');
        performEnemyPhysicalAttack(false);
        return;
    }

    const healAmount = Math.floor(3 * battleState.enemy.magicAttack * (Math.random() * (1.2 - 0.8) + 0.8));
    battleState.enemy.health = Math.min(enemyMaxHealth, battleState.enemy.health + healAmount);
    battleState.enemy.mana = Math.max(0, battleState.enemy.mana - manaCost);
    enemyHealCount += 1; // 增加治疗次数

    logBattleEvent(`🔮【敌人治疗】妖怪施放魔王之力，恢复了 ${healAmount} 点生命值，消耗了 ${manaCost} 点法力值。`, 'aqua');
    showEffect('playerEffect', 'https://pic.imgdb.cn/item/66754252d9c307b7e9e67706.gif');
    updateDamageValue(-healAmount,false,'damage');

    // 检查中毒效果
    if (battleState.enemy.poisoned) {
        const poisonDamage = Math.floor(battleAttributes.magicAttack * battleRounds * (Math.random() * (0.06 - 0.03) + 0.03));
        battleState.enemy.health = Math.max(0, battleState.enemy.health - poisonDamage);
        logBattleEvent(`☣【敌人中毒】妖怪中毒，失去了 ${poisonDamage} 点生命值。`, '#C10066');
        updateDamageValue(poisonDamage,false,'extra-damage');
    }

     // 轮到玩家回合
    handleBurnt();
    showEffect('enemyEffect');
    updateUI();
}

function enemyDefense() {
    if (battleState.enemy.sleep) {
        return;
    }

    if (battleState.enemy.defensing) {
        enemyAttack();
        return;
    }

    battleState.enemy.defensing = true;
    const enemyPD = battleState.enemy.physicalDefense;
    const enemyMD = battleState.enemy.magicDefense;
    const defenseValue = Math.round((enemyPD + enemyMD) * 0.5);

    battleState.enemy.physicalDefense += defenseValue;
    battleState.enemy.magicDefense += defenseValue

    setTimeout(() => {
        battleState.enemy.defensing = false;
        battleState.enemy.physicalDefense = enemyPD;
        battleState.enemy.magicDefense = enemyMD;
        updateUI();
    },2000);
    
    
    logBattleEvent('🛡【敌人防御】敌人释放了能量场，双防得到了提升！','orange');
    showEffect('playerEffect', 'https://pic.imgdb.cn/item/66d4a22dd9c307b7e9f5faec.gif');
}

function applyEnemyPhysicalEffects(damage) {
    const effects = ['torn', 'suppressed', 'taunt', 'seal', 'slaughter'];
    
    const cultivationDifference = enemyPetCultivation - playerCultivation;
    const probabilityAdjustment = cultivationDifference / 10000 * 0.01;
    
    const triggeredEffects = [];
    
    effects.forEach(effect => {
        const baseChance = 0.2; // 基础触发概率为20%
        const adjustedChance = Math.max(0.01, baseChance + probabilityAdjustment);
        const effectChance = Math.random();

        //console.log(`Effect: ${effect}, 修为差：${cultivationDifference}, Effect Chance: ${effectChance}, Adjusted Chance: ${adjustedChance}`);

        if (battleState.player[effect]) {
            console.log(`玩家已经处于 ${effect} 状态，无法叠加。`);
            return;
        }

        if (effectChance < adjustedChance) {
            triggeredEffects.push(effect);
        }
    });
    
    if (triggeredEffects.length > 0) {
        const randomEffect = triggeredEffects[Math.floor(Math.random() * triggeredEffects.length)];
        
        switch (randomEffect) {
            case 'torn':
                if (!effectCooldowns.torn) {
                    handleTorn();
                }
                break;
            case 'suppressed':
                if (!effectCooldowns.suppressed) {
                    handleSuppressed();
                }
                break;
            case 'taunt':
                if (!battleState.player.taunt) {
                    handleTaunt();
                }
                break;
            case 'slaughter':
                if (!battleState.player.slaughter) {
                    handleSlaughter();
                }
                break;
            case 'seal':
                if (!battleState.player.seal) {
                    handleSeal();
                }
                break;
        }
    }
}

function applyEnemyMagicEffects(damage) {
    const effects = ['drunken', 'healingBan', 'soulCapture', 'blindfold', 'spellSlow'];
    
    const cultivationDifference = enemyPetCultivation - playerCultivation;
    const probabilityAdjustment = cultivationDifference / 10000 * 0.01;
    
    const triggeredEffects = [];
    
    effects.forEach(effect => {
        const baseChance = 0.2; // 基础触发概率为10%
        const adjustedChance = Math.max(0.01, baseChance + probabilityAdjustment);
        const effectChance = Math.random();

        //console.log(`Effect: ${effect}, 修为差：${cultivationDifference}, Effect Chance: ${effectChance}, Adjusted Chance: ${adjustedChance}`);
        
        if (effectChance < adjustedChance) {
            triggeredEffects.push(effect);
        }
    });
    
    if (triggeredEffects.length > 0) {
        const randomEffect = triggeredEffects[Math.floor(Math.random() * triggeredEffects.length)];
        
        switch (randomEffect) {
            case 'drunken':
                if (!effectCooldowns.drunken) {
                    battleState.player.drunken = true;
                    logBattleEvent("你受到了醉酒效果，每次攻击都会受到额外伤害。", '#FF0088');
                    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66742cffd9c307b7e931d5ee.gif');
                    effectCooldowns.drunken = true;
                    updatePlayerStatusDisplay();
                    setTimeout(() => {
                        battleState.player.drunken = false;
                        effectCooldowns.drunken = false;
                        updatePlayerStatusDisplay();
                    }, 5000);
                }
                break;
            case 'healingBan':
                if (!effectCooldowns.healingBan) {
                    battleState.player.healingBan = true;
                    logBattleEvent("你受到了禁疗效果，无法恢复生命值。", '#B94FFF');
                    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66742cffd9c307b7e931d5ee.gif');
                    effectCooldowns.healingBan = true;
                    updatePlayerStatusDisplay();
                    setTimeout(() => {
                        battleState.player.healingBan = false;
                        effectCooldowns.healingBan = false;
                        updatePlayerStatusDisplay();
                    }, 5000);
                }
                break;
            case 'soulCapture':
                if (!effectCooldowns.soulCapture) {
                    handleSoulCapture();
                }
                break;
            case 'spellSlow':
                if (!effectCooldowns.spellSlow) {
                    battleState.player.spellSlow = true;
                    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66742cffd9c307b7e931d5ee.gif');
                    effectCooldowns.spellSlow = true;
                    updatePlayerStatusDisplay();
                    setTimeout(() => {
                        battleState.player.spellSlow = false;
                        effectCooldowns.spellSlow = false;
                        updatePlayerStatusDisplay();
                    }, 5000);
                }
                break;
            case 'blindfold':
                if (!effectCooldowns.blindfold) {
                    battleState.player.blindfold = true;
                    logBattleEvent("你被附加了失明，施放物理技能时将无法对敌人造成伤害！", 'yellow');
                    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66742cffd9c307b7e931d5ee.gif');
                    effectCooldowns.blindfold = true;
                    updatePlayerStatusDisplay();
                    setTimeout(() => {
                        battleState.player.blindfold = false;
                        effectCooldowns.blindfold = false;
                        updatePlayerStatusDisplay();
                    }, 5000);
                }
                break;
        }
    }
}

function handleEnemySteal(enemyHealthPercentage, enemyManaPercentage) {
    if (enemyHealthPercentage < 0.05 && Math.random() < 0.5 && drugInventory['延寿露'] && drugInventory['延寿露'].quantity > 0) {
        if (Math.random() < 0.8) {
            const healthRecovered = Math.min(2000000, Math.floor(enemyMaxHealth * 0.2));
            battleState.enemy.health = Math.min(enemyMaxHealth, battleState.enemy.health + healthRecovered);
            drugInventory['延寿露'].quantity -= 1;
            logBattleEvent(`🥷【敌人偷窃】妖怪窥探了你的锦囊，吸收了一个来自你所拥有的延寿露的能量，恢复了${healthRecovered}点生命值。`, '#66CDAA');
            updateDamageValue(-healthRecovered, false, 'damage');
            showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66a250dfd9c307b7e97f96eb.png');
        } else {
            logBattleEvent("🥷【敌人偷窃】妖怪想窃取你的资源，但被你抓包打跑了，你没受到任何损失", '#66CDAA');
            handleSlow(); // 直接应用迟缓效果
        }
        return true;
    } else if (enemyManaPercentage < 0.05 && Math.random() < 0.5 && drugInventory['天山雪莲'] && drugInventory['天山雪莲'].quantity > 0) {
        if (Math.random() < 0.8) {
            const manaRecovered = Math.min(2000000, Math.floor(enemyMaxMana * 0.2));
            battleState.enemy.mana = Math.min(enemyMaxMana, battleState.enemy.mana + manaRecovered);
            drugInventory['天山雪莲'].quantity -= 1;
            logBattleEvent(`🥷【敌人偷窃】妖怪窥探了你的锦囊，吸收了一个来自你所拥有的天山雪莲的能量，恢复了${manaRecovered}点法力值。`, '#66CDAA');
            showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66a250dfd9c307b7e97f96eb.png');
        } else {
            logBattleEvent("🥷【敌人偷窃】妖怪想窃取你的资源，但你识破了，没受到任何损失", '#66CDAA');
            handleSlow(); // 直接应用迟缓效果
        }
        return true;
    }
    return false;
} //处理攻击途中偷窃行为

function handleSlaughter() {
    if (battleState.player.slaughter) {
        console.log("玩家已经处于杀戮状态，无法叠加。");
        return;
    }
    
    battleState.player.slaughter = true;
    effectCooldowns.slaughter = true;
    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66a33f39d9c307b7e942c36c.gif');
    updatePlayerStatusDisplay();

    const slaughterInterval = setInterval(() => {
        if (!battleState.player.slaughter) {
            clearInterval(slaughterInterval);
            return;
        }

        const cultivationDifference = playerCultivation - enemyPetCultivation;

        if (cultivationDifference > 0 && battleState.enemy.health <= cultivationDifference * 150) {
            battleState.enemy.health = 0;
            logBattleEvent(`⚔️【敌人攻击】道高一尺，魔高一丈，敌人低于你的修为，施法时损失${battleState.enemy.health}点生命值，被当即斩杀！`, '#FFDD55');
            updateDamageValue(battleState.enemy.health,false,'damage');
            updateUI();
            updatePlayerStatusDisplay();

        } else if (cultivationDifference < 0 && battleAttributes.health <= Math.abs(cultivationDifference)) {
            battleAttributes.health = 0;
            logBattleEvent(`⚔️【敌人攻击】道高一尺，魔高一丈，你低于敌人的修为，施法时损失${battleAttributes.health}点生命值，被当即斩杀！`, '#FFDD55');
            updateDamageValue(battleState.enemy.health,true,'damage');
            updateUI();
            updatePlayerStatusDisplay();
        }
    }, 500);

    if (battleAttributes.health <= 0) {
        showNextBattlePrompt(false); // 玩家失败，传递失败状态
        return;
    } else if (battleState.enemy.health <= 0) {
        showNextBattlePrompt(true);
        return;
    }
    
    setTimeout(() => {
        battleState.player.slaughter = false;
        effectCooldowns.slaughter = false;
        enemyPhysicalAttackCount = 0;
        clearInterval(slaughterInterval);
        updatePlayerStatusDisplay();
    }, 10000); // 杀戮效果持续10秒
} //处理杀戮状态

function handleShocked() {
    if (battleState.player.shocked) {
        battleAttributes.physicalDefense = Math.max(0, Math.floor(battleAttributes.physicalDefense * 0.8));
        battleAttributes.magicDefense = Math.max(0, Math.floor(battleAttributes.physicalDefense * 0.8));
    }
}
        
function handleSeal() {
    if (battleState.player.seal) {
        return;
    }

    battleState.player.seal = true;

    // 保存原始技能名称
    battleState.player.originalAscensionSkill = ascensionSkill.name;
    battleState.player.originalSecondAscensionSkill = secondAscensionSkill.name;

    // 设置封印技能名称
    ascensionSkill.name = "被封印的技能";
    secondAscensionSkill.name = "被封印的技能";
    updateAscensionDisplay();
    updateSecondAscensionDisplay();

    logBattleEvent("远古魔神的低吟充满离散心智的声量，令你短暂被封印了飞升技能带来的战斗增益。", 'aqua');

    // 封印效果持续时间
    setTimeout(() => {
        battleState.player.seal = false;

        // 恢复原始技能名称
        ascensionSkill.name = battleState.player.originalAscensionSkill;
        secondAscensionSkill.name = battleState.player.originalSecondAscensionSkill;
        
        logBattleEvent("封印解除，飞升技能可以发挥作用了。", 'aqua');
        updateAscensionDisplay();
        updateSecondAscensionDisplay();
        updateUI();
    }, 10000);
} //处理封印状态

function handleTorn() {
    battleState.player.torn = true;
    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/669c8a9ed9c307b7e94f5766.gif');
    effectCooldowns.torn = true;
    updatePlayerStatusDisplay();
    const tornInterval = setInterval(() => {
        if (!battleState.player.torn) {
            clearInterval(tornInterval);
            return;
        }
        const tornDamage = Math.floor(battleState.enemy.physicalAttack * 0.1);
        battleAttributes.health = Math.max(0, battleAttributes.health - tornDamage);
        updateDamageValue(tornDamage,true,'extra-damage');
        updateUI();
        updatePlayerStatusDisplay();
        
    }, 500);
    
    if (battleAttributes.health <= 0) {
        showNextBattlePrompt(false); // 玩家失败，传递失败状态
        return;
    } else if (battleState.enemy.health <= 0) {
        showNextBattlePrompt(true);
        return;
    }

    setTimeout(() => {
        battleState.player.torn = false;
        effectCooldowns.torn = false;
        clearInterval(tornInterval);
        updatePlayerStatusDisplay();
    }, 10000); // 撕裂效果持续10秒
} //处理撕裂状态

const suppressionState = {
    actionPerformed: false,
    timeoutId: null
}; // 全局对象来管理压制状态及相关变量
function handleSuppressed() {
    if (battleState.player.suppressed) {
        return;
    }

    battleState.player.suppressed = true;
    logBattleEvent("你受到了压制效果，必须在3秒内进行有效操作。", '#FF4500');
    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/669c8a9ed9c307b7e94f5766.gif');
    effectCooldowns.suppressed = true;
    updatePlayerStatusDisplay();

    suppressionState.actionPerformed = false; // 重置 actionPerformed

    const originalPerformPhysicalAttack = performPhysicalAttack;
    const originalPerformMagicalAttack = performMagicalAttack;
    const originalPerformHeal = performHeal;
    const originalPerformPoison = performPoison;
    const originalPerformDefense = performDefense;

    const wrappedAction = (originalFunction) => {
        return function(...args) {
            suppressionState.actionPerformed = true;
            return originalFunction.apply(this, args);
        };
    };

    performPhysicalAttack = wrappedAction(performPhysicalAttack);
    performMagicalAttack = wrappedAction(performMagicalAttack);
    performHeal = wrappedAction(performHeal);
    performPoison = wrappedAction(performPoison);
    performDefense = wrappedAction(performDefense);

    suppressionState.timeoutId = setTimeout(() => {
        cleanSuppressed();
    }, 3000); // 压制效果持续3秒
} //处理压制状态

let tauntTimeout; 
function handleTaunt() {
    if (battleState.player.taunt) {
        logBattleEvent("你已经被嘲讽,不能使用其他技能。", '#FF4500');
        return;
    }

    // 清除现有的嘲讽定时器（如果有）
    clearTimeout(tauntTimeout);

    battleState.player.taunt = true;
    logBattleEvent("妖怪极尽嬉笑怒骂之攻势,你未能压抑心中怒火,嘲讽时间内你只能对其使用物理攻击。", '#FF4500');
    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/669c8a9ed9c307b7e94f5766.gif');
    effectCooldowns.taunt = true;

    // 更新状态显示和UI
    updatePlayerStatusDisplay();
    updateUI();

    // 设置新的嘲讽定时器
    tauntTimeout = setTimeout(() => {
        battleState.player.taunt = false;
        effectCooldowns.taunt = false;
        updatePlayerStatusDisplay();
        updateUI();
    }, 10000); // 嘲讽效果持续10秒
} // 处理嘲讽状态

function handleHealingBan(skillMultiplier) {
    if (battleState.player.healingBan) {
        return 0;
    }

    let baseHealing = Math.floor(3 * battleAttributes.magicAttack * (Math.random() * (0.12 - 0.08) + 0.08) * skillMultiplier);
    let woodEffect;
    const activeEffects = applyWuxingEffects();

    // 应用木符效果增加治疗量
    if (activeEffects.woodAmulet && activeEffects.woodAmulet > 0) {
        const healBoostPercentage = [0, 0.02, 0.05, 0.07, 0.12, 0.20, 0.22, 0.25, 0.28, 0.4][activeEffects.woodAmulet];
        const woodEffect = Math.floor(baseHealing * healBoostPercentage);
        baseHealing = Math.floor(baseHealing * (1 + healBoostPercentage));
        logBattleEvent(`🟢奥义·木之春意！治疗量增加了 ${woodEffect}。`, 'aqua');
    }

    return baseHealing;
} //处理计算回复量和禁疗状态

function handleSoulCapture() {
    if (battleState.player.soulCapture) {
        return;
    }
    
    battleState.player.soulCapture = true;
    battleAttributes.physicalAttack *= 0.5;
    battleAttributes.magicAttack *= 0.5;
    logBattleEvent("你受到了摄魂效果，攻击力大幅下降。", '#B94FFF');
    showEffect('enemyEffect', 'https://pic.imgdb.cn/item/66742cffd9c307b7e931d5ee.gif');
    updatePlayerStatusDisplay();
    
    setTimeout(() => {
        battleState.player.soulCapture = false;
        battleAttributes.physicalAttack = battleState.player.physicalAttack;
        battleAttributes.magicAttack = battleState.player.magicAttack;
        updateUI();
        updatePlayerStatusDisplay();
    }, 5000); // 摄魂效果持续5秒
} //处理摄魂
            
function handleDrunken(damage) {
    if (battleState.player.drunken && damage > 0) {
        const drunkenDamage = Math.floor(damage * 0.05);
        battleAttributes.health = Math.max(0, battleAttributes.health - drunkenDamage);
        logBattleEvent(`⚔️【敌人反弹】醉酒状态下，你招式过猛误伤自身，受到 ${drunkenDamage} 点溅射伤害。`, '#FF0088');
        updateDamageValue(drunkenDamage,true,'extra-damage');
    }
} //处理醉酒



let enemyRivival = false;
let enemyRivivalCount = 0;
        
function handleRampaged() {
    console.log(`handleRampaged called. battleRounds: ${battleRounds}, enemy health: ${battleState.enemy.health}, enemyMaxHealth: ${enemyMaxHealth}`);
    if (summonEnemy) {
        return;
    }

    if (enemyRivival) {
        enemyRivival = false;
    }

    if (battleRounds === 150) {
        enemyCritRate = 1;
        enemyCritDamage = 3.5;
        battleState.enemy.rampaged = true;
        changeEnemyImage("mao");
        setBackgroundImage('https://pic.imgdb.cn/item/66bc6806d9c307b7e987b921.webp');
        console.log('Enemy is rampaged.');
    } else if (battleRounds > 150 && battleRounds % 10 === 0) {
        enemyCritRate = 1;
        enemyCritDamage = 3.5;
        battleState.enemy.rampaged = true;
        changeEnemyImage("darkShape");
        setBackgroundImage('https://pic.imgdb.cn/item/66bc6806d9c307b7e987b8ec.webp');
        console.log('Enemy is rampaged.');
    } else if (battleRounds <= 150 && battleRounds % 10 === 0) {
        enemyCritRate = 1;
        enemyCritDamage = 2.5;
        battleState.enemy.rampaged = true;
        changeEnemyImage("rampaged");
        setBackgroundImage('https://pic.imgdb.cn/item/66bc6806d9c307b7e987b921.webp');
        console.log('Enemy is rampaged.');
    } else {

        battleState.enemy.rampaged = false;
        changeEnemyImage(battleRounds > 150 ? "realShape" : "default");
        setBackgroundImage(battleRounds > 150 ? 'https://pic.imgdb.cn/item/66bc6806d9c307b7e987b907.webp' : 'https://pic.imgdb.cn/item/66bc6806d9c307b7e987b92d.webp');
        console.log('Enemy is not rampaged.');
    }

    // 检查并处理敌人复活机制
    if (battleState.enemy.rampaged && battleState.enemy.health < enemyMaxHealth * 0.2 && enemyRivivalCount <= (battleRounds === 150 ? 3 : 1)) {
        enemyRivivalCount += 1;
        logBattleEvent("妖怪的生命力正在复苏，请在2秒内击杀它，否则它将复活！", "red");
        enemyRivival = true;
        console.log(`Revival triggered. revivalCount: ${enemyRivivalCount}`);

        setTimeout(() => {
            // 重新检查敌人状态
            if (enemyRivival && battleState.enemy.health < enemyMaxHealth * 0.2) {
                battleState.enemy.health = enemyMaxHealth;
                logBattleEvent("妖怪复生成功，生命值恢复到100%！", "red");
                updateDamageValue(-enemyMaxHealth, false, 'damage');
                enemyRivival = false;
                updateUI();
                console.log('Enemy revived to full health.');
            }
        }, 2000);
    }
}
 //处理狂暴状态
        
// 【玩家战斗组件】药品系统函数
function useDrug() {
    if (!alreadyUseDrug) {
        showInfoBox("这是你第一次打开药品面板，附送至尊药品礼包一份！");
        alreadyUseDrug = true; // 修正拼写错误
    }
    
    if (battleState.player.taunt) {
        performAttack('physical');
        return;
    }
    
    document.getElementById('drug-modal').style.display = 'block';
    updateDrugGrid();
}

function updateDrugGrid() {
    const drugGrid = document.getElementById('drug-grid');
    drugGrid.innerHTML = '';
    for (let drug in drugInventory) {
        if (drugInventory[drug].quantity > 0) {
            const drugItem = document.createElement('div');
            drugItem.className = 'drug-item';
            drugItem.innerHTML = `
                <img src="${drugInventory[drug].url}" alt="${drug}" width="45" height="45">
                <div>${drug} <span>${drugInventory[drug].quantity}</span>个</div>
            `;
            drugItem.onclick = () => selectDrug(drug);
            drugGrid.appendChild(drugItem);
        }
    }

    // 更新选中药品的视觉效果
    if (selectedDrug) {
        const selectedDrugItem = Array.from(drugGrid.getElementsByClassName('drug-item'))
            .find(item => item.querySelector('div').innerText.startsWith(selectedDrug));
        if (selectedDrugItem) {
            selectedDrugItem.style.border = '2px solid white'; // 视觉提示
            selectedDrugItem.style.borderRadius = '10px'; // 视觉提示
            selectedDrugItem.style.padding = '5px'; // 视觉提示
        }
    }
}

function addDrugToInventory(drugKey, quantity = 1) {
    // 检查 drugInventory 中是否已有该药品
    if (drugInventory[drugKey]) {
        // 如果药品已经存在，增加数量
        drugInventory[drugKey].quantity += quantity;
    } else {
        // 如果药品不存在，创建新的药品并设定数量
        drugInventory[drugKey] = {
            quantity: quantity,
            url: 'https://pic.imgdb.cn/item/66cc940fd9c307b7e9cb77b1.png',
            tier: 0,
            description: '珍贵的神秘药材'
        };
    }
    updateDrugGrid();
    console.log(`${drugKey} 的数量已更新，当前数量: ${drugInventory[drugKey].quantity}`);
}
        
function closeDrugModal() {
    document.getElementById('drug-modal').style.display = 'none';
    selectedDrug = null;
    document.getElementById('drug-description').innerText = '选中药品后可直接使用，低品阶药品可合成更高品阶的药品。采集会花费金子，采集所得的原始药材只能用于合成。战斗精灵成长后，每次战斗胜利会有额外的掉落奖励。';
}

function selectDrug(drugName) {
    const drugDescriptionElement = document.getElementById('drug-description');
    selectedDrug = drugName;

    if (drugDescriptionElement) {
        drugDescriptionElement.innerText = drugInventory[drugName].description;
    }
    
    updateDrugGrid();
}

function useSelectedDrug() {
    if (!selectedDrug) {
        showInfoBox("请选择一种药品！");
        return;
    }

    if (activeBuffs[selectedDrug]) {
        showInfoBox(`${selectedDrug}效果尚在冷却中，无法叠加使用。`);
        return;
    }

    if (checkConflictingBuffs(selectedDrug)) {
        return;
    }

    const drug = drugInventory[selectedDrug];
    if (drug.quantity > 0) {
        drug.quantity -= 1;
        updateDrugGrid();

        switch (selectedDrug) {
            case "长生泉":
                tempBonus.health += 1000;
                updatePetInfo();
                logBattleEvent(`使用长生泉，你如获新生。`, 'gold');
                break;
            case "三花丸":
                const manaDuration = 3 * 1000; // 3 seconds
                const manaInterval = 1.5 * 1000; // 0.5 second
                const manaRegenAmount = Math.floor(maxMana * 0.01); // 1% of max mana

                let manaElapsedTime = 0;
                const manaRegenInterval = setInterval(() => {
                    if (manaElapsedTime >= manaDuration) {
                        clearInterval(manaRegenInterval);
                    } else {
                        battleAttributes.mana = Math.min(maxMana, battleAttributes.mana + manaRegenAmount);
                        logBattleEvent(`法力值 + ${manaRegenAmount}点。`, 'gold');
                        updateUI();
                        manaElapsedTime += manaInterval;
                    }
                }, manaInterval);
                break;
            case "忘忧水":
                const healthDuration = 3 * 1000; // 3 seconds
                const healthInterval = 1.5 * 1000; // 0.5 second
                const healthRegenAmount = Math.floor(maxHealth * 0.02); // 2% of max health

                let healthElapsedTime = 0;
                const healthRegenInterval = setInterval(() => {
                    if (healthElapsedTime >= healthDuration) {
                        clearInterval(healthRegenInterval);
                    } else {
                        battleAttributes.health = Math.min(maxHealth, battleAttributes.health + healthRegenAmount);
                        updateDamageValue(-healthRegenAmount,true,'damage');
                        updateUI();
                        healthElapsedTime += healthInterval;
                    }
                }, healthInterval);
                break;
                case "魔术棱柱":
                    const skillsArea = document.getElementById("skills-area");
                    const upgradableSkills = Array.from(skillsArea.children).map(skillDiv => {
                        const skillName = skillDiv.innerText.split(' ')[0];
                        const skill = currentPet.skills.find(skill => skill.name === skillName);
                        return skill;
                    }).filter(skill => skill.level < 24 && skill !== null && !skill.byLearned);
                    
                    if (upgradableSkills.length === 0) {
                        showInfoBox("魔术棱柱最高只能将所选技能等级提升至24级！");
                        break;
                    }
    
                    // 随机选择一个技能并提升一级
                    let skillToUpgrade = upgradableSkills[Math.floor(Math.random() * upgradableSkills.length)];
                    const expCost = (skillToUpgrade.level + 1) * 10000;
                    if (currentExp >= expCost) {
                        currentExp -= expCost; 
                                            
                        if (skillToUpgrade.level >= 24) {
                            // 如果随机选择的技能已经24级，则遍历其他技能进行升级
                            skillToUpgrade = upgradableSkills.find(skill => skill.level < 24);
                        }
                        
                        if (skillToUpgrade && Math.random() < 0.4) {
                            skillToUpgrade.level += 1;
                            showInfoBox(`你消耗了${expCost}点经验值，将${skillToUpgrade.name} 成功升至 ${skillToUpgrade.level} 级，威力增加了！`);
                        } else {
                            showInfoBox(`你消耗了${expCost}点经验值，升级技能失败！`);
                        }
                        
                        updateExpBar(currentExp, maxExp); // 更新经验条显示
                        updateUI(); // 更新界面显示
                    } else {
                        addDrugToInventory('魔术棱柱',1);
                        showInfoBox("经验不足，无法使用魔术棱柱。");
                    }
                break;
            case "幸运金币":
                if (Math.random() < 0.1 && battleRounds > 10) {
                    const battleRoundsToDecrease = battleRounds - 10;
                    initializeEnemyPet();
                    battleRounds = battleRoundsToDecrease;
                    updateEnemyAttributes();
                    logBattleEvent(`使用幸运金币，你成功回退至10轮之前。`, 'gold');
                } else if (Math.random() < 0.8) {
                    gainExp(50000);
                    logBattleEvent(`使用幸运金币，获得了50000点经验值。`, 'gold');
                } else {
                    battleState.enemy.health = 1;
                    logBattleEvent(`使用幸运金币，怪物血量变为1。`, 'gold');
                }
                updateUI();
                updateExpBar(currentExp, maxExp);
                break;
            case "双倍经验药":
                applyTimedBuff(
                    selectedDrug,
                    () => {
                        battleState.player.expMultiplier = 2;
                        logBattleEvent(`使用双倍经验药，60秒内战斗获胜所得经验变成两倍。`, 'gold');
                        return () => {
                            battleState.player.expMultiplier = 1;
                            logBattleEvent(`双倍经验药效果消失。`, 'red');
                        };
                    },
                    60000
                );
                break;
            case "四倍经验药":
                applyTimedBuff(
                    selectedDrug,
                    () => {
                        battleState.player.expMultiplier = 4;
                        logBattleEvent(`使用四倍经验药，60秒内战斗获胜所得经验变成四倍。`, 'gold');
                        return () => {
                            battleState.player.expMultiplier = 1;
                            logBattleEvent(`四倍经验药效果消失。`, 'red');
                        };
                    },
                    60000
                );
                break;
            case "武尊秘露":
            case "神力仙丹":
            case "狂暴印记":
            case "化功散":
            case "沉檀凝香":
            case "焚灵之丸":
                if (!activeBuffs[selectedDrug]) {
                    applyBuff(selectedDrug);
                } else {
                    showInfoBox(`${selectedDrug}效果尚在冷却中，无法叠加使用。`);
                    return;  // 提前返回，防止数量减少
                }
                break;
            case "见手青":
                handleMushroom();
                break;
            case "狂暴之魂":
                playerCritRate = Math.min(1.0, playerCritRate + 0.01); // 最大100%
                logBattleEvent(`使用狂暴之魂，暴击率永久提高1%。`, 'gold');
                break;
            case "慧心糖果":
                playerCritDamage = Math.min(30.0, playerCritDamage + 0.01); // 最大3000%
                logBattleEvent(`使用慧心糖果，暴击伤害永久提高1%。`, 'gold');
                break;
            case "延寿露":
                battleAttributes.health = Math.min(maxHealth, battleAttributes.health + Math.floor(maxHealth * 0.2));
                updateDamageValue(-Math.floor(maxHealth * 0.2),true,'damage');
                logBattleEvent(`使用延寿露，恢复了 ${Math.floor(maxHealth * 0.2)} 点生命值。`, 'gold');
                break;
            case "天山雪莲":
                battleAttributes.mana = Math.min(maxMana, battleAttributes.mana + Math.floor(maxMana * 0.2));
                logBattleEvent(`使用天山雪莲，恢复了 ${Math.floor(maxMana * 0.2)} 点法力值。`, 'gold');
                break;
            case "普通药材":
                battleAttributes.health = Math.min(maxHealth, battleAttributes.health + 1000);
                updateDamageValue(-(battleAttributes.health + 1000),true,'damage');
                battleAttributes.mana = Math.min(maxMana, battleAttributes.mana + 1000);
                break;
            case "上等药材":
                tempBonus.speed += 20;
                break;
            case "极品药材":
                tempBonus.health += 50;
                tempBonus.mana += 50;
                break;
            case "珍贵药材":
                tempBonus.physicalDefense += 35;
                tempBonus.magicDefense += 35;
                break;
            case "完美药材":
                tempBonus.physicalAttack += 15;
                tempBonus.magicAttack += 15;
                break;
            case "冰莲絮":
                tempBonus.health += 300;
                break;
            case "晗灵果":
                tempBonus.mana += 300;
                break;
        }
        updateUI();
    } else {
        showInfoBox("药品不足！", 'red');
    }
}

function checkConflictingBuffs(selectedDrug) {
    const conflictingDrugs = ["神力仙丹", "狂暴印记", "焚灵之丸"];
    if (conflictingDrugs.includes(selectedDrug)) {
        for (const drug of conflictingDrugs) {
            if (activeBuffs[drug]) {
                showInfoBox("已有同系效果发挥作用或正在冷却中，无法叠加效果使用");
                return true;
            }
        }
    }
    return false;
}

function applyBuff(drugName) {
    switch (drugName) {
        case "武尊秘露":
            applyTimedBuff(
                drugName,
                () => {
                    const originalPhysicalAttack = battleAttributes.physicalAttack;
                    battleAttributes.physicalAttack = Math.floor(battleAttributes.physicalAttack * 1.5);
                    logBattleEvent(`使用武尊秘露，物理攻击力提升150%，持续20秒。`, 'gold');
                    return () => {
                        battleAttributes.physicalAttack = originalPhysicalAttack;
                        logBattleEvent(`武尊秘露冷却结束。`, 'red');
                    };
                },
                20000
            );
            break;
        case "神力仙丹":
            applyTimedBuff(
                drugName,
                () => {
                    battleState.player.critDamage = Math.min(30.0, playerCritDamage + 0.50); // 最大3000%
                    logBattleEvent(`使用神力仙丹，暴击伤害提高50%，持续20秒。`, 'gold');
                    return () => {
                        battleState.player.critDamage = playerCritDamage - 0.5;
                        logBattleEvent(`神力仙丹冷却结束。`, 'red');
                    };
                },
                20000
            );
            break;
        case "狂暴印记":
            applyTimedBuff(
                drugName,
                () => {
                    battleState.player.critRate = Math.min(10.0, playerCritRate + 0.50); // 最大1000%
                    logBattleEvent(`使用狂暴印记，暴击率提高50%，持续20秒。`, 'gold');
                    return () => {
                        battleState.player.critRate = playerCritRate - 0.5;
                        logBattleEvent(`狂暴印记冷却结束。`, 'red');
                    };
                },
                20000
            );
            break;
        case "化功散":
            applyTimedBuff(
                drugName,
                () => {
                    const originalEnemyCritRate = enemyCritRate;
                    enemyCritRate = 0;
                    logBattleEvent(`使用化功散，妖怪暴击率降低至0%，持续30秒。`, 'gold');
                    return () => {
                        enemyCritRate = originalEnemyCritRate;
                        logBattleEvent(`化功散冷却结束。`, 'red');
                    };
                },
                30000
            );
            break;
        case "沉檀凝香":
            // 恢复10%生命值
            const healthRestored = Math.floor(maxHealth * 0.1);
            battleAttributes.health = Math.min(maxHealth, battleAttributes.health + healthRestored);
            logBattleEvent(`使用沉檀凝香，恢复了 ${healthRestored} 点生命值。`, 'gold');
            // 80% 几率清除玩家的异常状态
            if (Math.random() < 0.8) {
                clearEnemyEffect();
                logBattleEvent('沉檀凝香生效，清除了异常状态。', 'gold');
            } else {
                logBattleEvent('沉檀凝香生效，但未能清除异常状态。', 'red');
            }
        
            break;
        case "焚灵之丸":
            if (battleAttributes.health >= maxHealth * 0.2) {
                applyTimedBuff(
                    drugName,
                    () => {
                        const originalPA = battleAttributes.physicalAttack;
                        const originalMA = battleAttributes.magicAttack;
                        battleAttributes.health -= Math.floor(maxHealth * 0.2);
                        battleAttributes.physicalAttack = Math.floor(battleAttributes.physicalAttack * 1.5);
                        battleAttributes.magicAttack = Math.floor(battleAttributes.magicAttack * 1.5);
                        battleState.player.critRate = Math.min(10.0, playerCritRate + 0.50); // 最大1000%
                        battleState.player.critDamage = Math.min(30.0, playerCritDamage + 0.50); // 最大3000%
                        logBattleEvent(`使用焚灵之丸，消耗20%生命值，提升50%物理攻击力、法术攻击、暴击率和暴击伤害，持续20秒。`, 'gold');
                        return () => {
                            battleAttributes.physicalAttack = originalPA;
                            battleAttributes.magicAttack = originalMA;
                            battleState.player.critRate -= 0.5;
                            battleState.player.critDamage -= 0.5;
                            logBattleEvent(`焚灵之丸冷却结束。`, 'red');
                        };
                    },
                    20000
                );
            } else {
                showInfoBox("焚灵之丸效果无法触发，生命值不足20%。");
            }
            break;
    }
}

function applyTimedBuff(drugName, applyEffect, duration) {
    if (activeBuffs[drugName]) return;

    const removeEffect = applyEffect();
    activeBuffs[drugName] = setTimeout(() => {
        removeEffect();
        delete activeBuffs[drugName];
        updateUI();
    }, duration);
}

function applyDrugBonus0(type, bonus) {
    if (!battleState || !battleState.player) {
        console.error("Battle state or player state is not initialized");
        return;
    }

    // 更新 drugBonus 对象
    if (drugBonus0.hasOwnProperty(type)) {
        drugBonus0[type] += bonus;
    } else {
        console.error("Invalid drug type");
        return;
    }

    // 更新玩家属性
    if (battleState.player.hasOwnProperty(type)) {
        battleState.player[type] += bonus;
    } else {
        console.error("Invalid player attribute type");
    }

    // 更新最大生命值和法力值
    if (type === 'health') {
        maxHealth = battleState.player.health;
    } else if (type === 'mana') {
        maxMana = battleState.player.mana;
    }

    // 检查类型并调用 updatePetInfo() 函数
    if (['physicalAttack', 'physicalDefense', 'magicAttack', 'magicDefense', 'speed'].includes(type)) {
        updatePetInfo();
    }

    const typeMap = {
        health: '生命值',
        mana: '法力值',
        physicalAttack: '物理攻击力',
        physicalDefense: '物理防御力',
        magicAttack: '法术攻击力',
        magicDefense: '法术防御力',
        speed: '速度'
    };

    logBattleEvent(`永久增加了 ${bonus} 点${typeMap[type]}。`, 'gold');
    updateUI();
}

function collectDrug() {
    if (goldAmount < collectCost) {
        showInfoBox("金子不足，无法进行采集！");
        return;
    }

    // 扣除金子并更新显示
    goldAmount -= collectCost;
    updateGoldDisplay(goldAmount);

    // 递增下次采集的花费
    collectCost += 100;

    // 确定采集的药材
    const random = Math.random() * 100;
    let collectedDrug;
    if (random < 50) {
        collectedDrug = '普通药材';
        drugInventory['普通药材'].quantity += 1;
    } else if (random < 80) {
        collectedDrug = '上等药材';
        drugInventory['上等药材'].quantity += 1;
    } else if (random < 95) {
        collectedDrug = '极品药材';
        drugInventory['极品药材'].quantity += 1;
    } else if (random < 98) {
        collectedDrug = '珍贵药材';
        drugInventory['珍贵药材'].quantity += 1;
    } else {
        collectedDrug = '完美药材';
        drugInventory['完美药材'].quantity += 1;
        addItemToJinnang('treasureMap', 1);
        showInfoBox("功夫不负有心人，你意外获得一份藏宝图！")
        
    }

    // 触发奖励事件
    const rewardRandom = Math.random() * 100;
    let multiplier = 1;
    if (rewardRandom < 1) {
        multiplier = 3;
    } else if (rewardRandom < 3) {
        multiplier = 2;
    }

    if (multiplier > 1) {
        drugInventory[collectedDrug].quantity += (multiplier - 1);
        document.getElementById('drug-description').innerText = `你花费${convertPrice(collectCost - 100)}金子打点进山凭证，采集到了${multiplier}个${collectedDrug}！`;
    } else {
        document.getElementById('drug-description').innerText = `你花费${convertPrice(collectCost - 100)}金子打点进山凭证，采集到了1个${collectedDrug}！`;
    }

    updateDrugGrid(); // 更新药品显示
}

function mergeDrug() {
    if (!selectedDrug) {
        showInfoBox("请先选中要合成的药品。");
        return;
    }

    const selectedDrugDetails = drugInventory[selectedDrug];
    const selectedDrugTier = selectedDrugDetails.tier;

    if (selectedDrugTier === 0) {
        const requiredQuantity = 3;
        if (selectedDrugDetails.quantity < requiredQuantity) {
            showInfoBox("你至少需要3个同类药品才能进行合成！");
            return;
        }

        // 减少低级药品数量
        selectedDrugDetails.quantity -= requiredQuantity;

        // 执行tier0药品的特殊合成逻辑
        const probability = Math.random();
        let message = '';

        if (probability < 0.1) {
            message = `你使用3个${selectedDrug}尝试合成，但没有产出任何事物`;
        } else if (probability < 0.2) {
            drugInventory[selectedDrug].quantity += 1;
            message = `你使用3个${selectedDrug}进行炼制，但只得到了1个${selectedDrug}`;
        } else if (probability < 0.5) {
            const tier1Drugs = Object.keys(drugInventory).filter(drug => drugInventory[drug].tier === 1);
            const newDrugs = [];
            for (let i = 0; i < 3; i++) {
                const newDrug = tier1Drugs[Math.floor(Math.random() * tier1Drugs.length)];
                drugInventory[newDrug].quantity += 1;
                newDrugs.push(newDrug);
            }
            message = `你使用3个${selectedDrug}成功炼制出了3个随机紫色品阶药品：${newDrugs.join(', ')}`;
        } else {
            const tier0Drugs = Object.keys(drugInventory).filter(drug => drugInventory[drug].tier === 0);
            const newDrugs = [];
            for (let i = 0; i < 2; i++) {
                const newDrug = tier0Drugs[Math.floor(Math.random() * tier0Drugs.length)];
                drugInventory[newDrug].quantity += 1;
                newDrugs.push(newDrug);
            }
            message = `你使用3个${selectedDrug}成功炼制出了2个随机橙色品阶药品：${newDrugs.join(', ')}`;
        }

        document.getElementById('drug-description').innerText = message;
    } else {
        const requiredQuantity = 5;
        if (selectedDrugDetails.quantity < requiredQuantity) {
            showInfoBox("你至少需要5个同类药品才能进行合成！（橙色品阶需要3个）");
            return;
        }

        // 减少低级药品数量
        selectedDrugDetails.quantity -= requiredQuantity;

        // 随机选择高级药品
        const nextTier = selectedDrugTier - 1;
        const nextTierDrugs = Object.keys(drugInventory).filter(drug => drugInventory[drug].tier === nextTier);
        const newDrug = nextTierDrugs[Math.floor(Math.random() * nextTierDrugs.length)];

        // 增加高级药品数量
        drugInventory[newDrug].quantity += 1;

        document.getElementById('drug-description').innerText = `你使用5个${selectedDrug}成功炼制出了1个${newDrug}`;
    }

    updateDrugGrid();
} 

// 【玩家战斗组件】精灵系统函数      
document.getElementById('battle-spirit-button').addEventListener('click', () => {
    if (battleState.player.taunt) {
        performAttack('physical');
        return;
    }
    
    if (!awakened) {
        showInfoBox("\n1.宠物在觉醒后可以开启战斗精灵 \n2.经过精心培养的精灵可以大幅增加战斗属性\n3.精灵会提供额外的战场胜利物资\n4.战斗中精灵有概率施加恢复、控制或强化 \n5.精灵等级和增幅越高，增益越明显");
    } else {
        document.getElementById('battle-spirit-modal').style.display = 'block';
        updateSpiritDisplay(); // 打开时更新显示
    }
}); // 打开战斗精灵界面

function checkAwakening() {
    if (awakened) {
        document.getElementById('battle-spirit-button').style.display = 'block';
    } else {
        document.getElementById('battle-spirit-button').style.display = 'block';
    }
} // 显示战斗精灵按钮

function getBaseSpiritAttributes() {
    if (!awakened) {
        return {
            health: 0,
            mana: 0,
            physicalAttack: 0,
            physicalDefense: 0,
            magicAttack: 0,
            magicDefense: 0,
            speed: 0
        };
    } else {
        return {
            health: 7,
            mana: 6,
            physicalAttack: 2,
            physicalDefense: 2.1,
            magicAttack: 1.9,
            magicDefense: 2.05,
            speed: 1
        };
    }
} // 获取精灵提供的基础属性增益

function displayInBottle() {
    const spiritInfo = getCurrentSpiritAttributes();
    const nameMap = new Map([
        ['health', '生命值'],
        ['magicAttack', '法术攻击'],
        ['magicDefense', '法术防御'],
        ['mana', '法力值'],
        ['physicalAttack', '物理攻击'],
        ['physicalDefense', '物理防御'],
        ['speed', '速度']
    ]);

    let spiritInfoMessage = '';

    for (const [key, value] of Object.entries(spiritInfo)) {
        const displayName = nameMap.get(key) || key; // 如果没有匹配到替换的名称，则使用原始英文名
        spiritInfoMessage += `${displayName}: ${value}\n`;
    }

    showInfoBox(`\n1.当前你携带的精灵等级为${spiritLevel}，成长系数为${spiritMultiplier}。\n2.精灵的各项数值为：\n ${spiritInfoMessage}`);
}
        
function updateSpiritDisplay() {
    const spiritAttributes = getCurrentSpiritAttributes();
    document.getElementById('spirit-level').innerText = spiritLevel;
    document.getElementById('spirit-multiplier').innerText = Math.round(spiritMultiplier * 100) + '%';
    document.getElementById('spirit-health').innerText = spiritAttributes.health;
    document.getElementById('spirit-mana').innerText = spiritAttributes.mana;
    document.getElementById('spirit-physical-attack').innerText = spiritAttributes.physicalAttack;
    document.getElementById('spirit-physical-defense').innerText = spiritAttributes.physicalDefense;
    document.getElementById('spirit-magic-attack').innerText = spiritAttributes.magicAttack;
    document.getElementById('spirit-magic-defense').innerText = spiritAttributes.magicDefense;
    document.getElementById('spirit-speed').innerText = spiritAttributes.speed;
} // 更新精灵属性显示

document.getElementById('close-spirit-modal').addEventListener('click', () => {
    document.getElementById('battle-spirit-modal').style.display = 'none';
}); // 关闭战斗精灵界面

document.getElementById('level-up-spirit').addEventListener('click', () => {
    if (spiritLevel >= 100) {
        showMessage('战斗精灵已达到最大等级！', 'error');
        return;
    }

    if (useItem('spiritRefreshStone', 1)) {
        let successChance;
        let failPenalty = 0;
        let minLevelForCurrentRange;

        if (spiritLevel <= 20) {
            successChance = 1.0; // 100% 成功率
            minLevelForCurrentRange = 1;
        } else if (spiritLevel <= 30) {
            successChance = 0.95; // 95% 成功率
            minLevelForCurrentRange = 21;
        } else if (spiritLevel <= 40) {
            successChance = 0.9; // 90% 成功率
            failPenalty = 1;
            minLevelForCurrentRange = 31;
        } else if (spiritLevel <= 50) {
            successChance = 0.85; // 85% 成功率
            failPenalty = 1;
            minLevelForCurrentRange = 41;
        } else if (spiritLevel <= 60) {
            successChance = 0.8; // 80% 成功率
            failPenalty = 1;
            minLevelForCurrentRange = 51;
        } else if (spiritLevel <= 70) {
            successChance = 0.85; // 85% 成功率
            failPenalty = 2;
            minLevelForCurrentRange = 61;
        } else if (spiritLevel <= 80) {
            successChance = 0.8; // 80% 成功率
            failPenalty = 2;
            minLevelForCurrentRange = 71;
        } else if (spiritLevel <= 90) {
            successChance = 0.75; // 75% 成功率
            failPenalty = 2;
            minLevelForCurrentRange = 81;
        } else if (spiritLevel <= 99) {
            successChance = 0.7; // 70% 成功率
            failPenalty = 2;
            minLevelForCurrentRange = 91;
        }

        const randomChance = Math.random();
        if (randomChance < successChance) {
            spiritLevel += 1;
            updateSpiritDisplay(); // 更新显示
            updatePetInfo(); // 刷新战斗属性
        } else {
            if (failPenalty > 0) {
                spiritLevel = Math.max(minLevelForCurrentRange, spiritLevel - failPenalty);
                showMessage(`洗练失败，等级下降了 ${failPenalty} 级，保底 ${minLevelForCurrentRange} 级！`, 'error');
            } else {
                showMessage('洗练失败！', 'error');
            }
            updateSpiritDisplay(); // 更新显示
            updatePetInfo(); // 刷新战斗属性
        }
    } else {
        showMessage('您的精灵精炼石不足！', 'error');
    }
}); // 精灵洗练

document.getElementById('auto-level-up-spirit').addEventListener('click', () => {
    const targetLevel = parseInt(prompt('请输入目标精灵等级：'), 10);

    if (isNaN(targetLevel) || targetLevel <= spiritLevel || targetLevel > maxSpiritLevel) {
        showMessage('无效的目标等级！', 'error');
        return;
    }

    let initialLevel = spiritLevel;
    let stonesUsed = 0;

    while (spiritLevel < targetLevel && useItem('spiritRefreshStone', 1)) {
        stonesUsed++;
        let successChance;
        let failPenalty = 0;
        let minLevelForCurrentRange;

        if (spiritLevel <= 20) {
            successChance = 1.0;
            minLevelForCurrentRange = 1;
        } else if (spiritLevel <= 30) {
            successChance = 0.95;
            minLevelForCurrentRange = 21;
        } else if (spiritLevel <= 40) {
            successChance = 0.9;
            failPenalty = 1;
            minLevelForCurrentRange = 31;
        } else if (spiritLevel <= 50) {
            successChance = 0.85;
            failPenalty = 1;
            minLevelForCurrentRange = 41;
        } else if (spiritLevel <= 60) {
            successChance = 0.8;
            failPenalty = 1;
            minLevelForCurrentRange = 51;
        } else if (spiritLevel <= 70) {
            successChance = 0.85;
            failPenalty = 2;
            minLevelForCurrentRange = 61;
        } else if (spiritLevel <= 80) {
            successChance = 0.8;
            failPenalty = 2;
            minLevelForCurrentRange = 71;
        } else if (spiritLevel <= 90) {
            successChance = 0.75;
            failPenalty = 2;
            minLevelForCurrentRange = 81;
        } else if (spiritLevel <= 99) {
            successChance = 0.7;
            failPenalty = 2;
            minLevelForCurrentRange = 91;
        }

        const randomChance = Math.random();
        if (randomChance < successChance) {
            spiritLevel += 1;
            updateSpiritDisplay();
            updatePetInfo(); // 刷新战斗属性
        } else {
            if (failPenalty > 0) {
                spiritLevel = Math.max(minLevelForCurrentRange, spiritLevel - failPenalty);
            }
            updateSpiritDisplay();
            updatePetInfo(); // 刷新战斗属性
        }
    }

    showMessage(`您耗费了 ${stonesUsed} 颗精灵精炼石，将精灵升至 ${spiritLevel} 级。`, 'info');
}); // 精灵一键升级

function getCurrentSpiritAttributes() {
    const baseAttributes = getBaseSpiritAttributes();
    return {
        health: Math.floor(baseAttributes.health * Math.pow(1.08, spiritLevel) * spiritMultiplier),
        mana: Math.floor(baseAttributes.mana * Math.pow(1.08, spiritLevel) * spiritMultiplier),
        physicalAttack: Math.floor(baseAttributes.physicalAttack * Math.pow(1.07, spiritLevel) * spiritMultiplier),
        physicalDefense: Math.floor(baseAttributes.physicalDefense * Math.pow(1.08, spiritLevel) * spiritMultiplier),
        magicAttack: Math.floor(baseAttributes.magicAttack * Math.pow(1.07, spiritLevel) * spiritMultiplier),
        magicDefense: Math.floor(baseAttributes.magicDefense * Math.pow(1.08, spiritLevel) * spiritMultiplier),
        speed: Math.floor(baseAttributes.speed * Math.pow(1.07, spiritLevel) * spiritMultiplier)
    };
} // 计算精灵当前等级和倍数提供的属性增益

document.getElementById('enhance-spirit').addEventListener('click', () => {
    if (useItem('spiritAwakenStone', 1)) {
        let newMultiplier;
        const randomChance = Math.random();

        if (randomChance < 0.95) {
            // 95%的概率随机更新至0.01~3.00这个区间
            newMultiplier = (Math.random() * (3.00 - 0.01) + 0.01).toFixed(2);
        } else if (randomChance < 0.98) {
            // 3%的概率随机更新至3.01~3.99这个区间
            newMultiplier = (Math.random() * (3.99 - 3.01) + 3.01).toFixed(2);
        } else if (randomChance < 0.99) {
            // 1%的概率随机更新至4.00~4.10这个区间
            newMultiplier = (Math.random() * (4.10 - 4.00) + 4.00).toFixed(2);
        } else {
            // 1%的概率随机更新至4.11~4.15这个区间
            newMultiplier = (Math.random() * (4.15 - 4.11) + 4.11).toFixed(2);
        }

        // 检查新倍数是否高于3.90
        if (parseFloat(newMultiplier) > 3.90) {
            const confirmMessage = "您的精灵增幅已经到了一个比较高的层次，确定继续吗？";
            showInfoBox(confirmMessage, () => {
                spiritMultiplier = parseFloat(newMultiplier);
                updateSpiritDisplay(); // 更新显示
                updatePetInfo(); // 刷新战斗属性
            });
        } else {
            spiritMultiplier = parseFloat(newMultiplier);
            updateSpiritDisplay(); // 更新显示
            updatePetInfo(); // 刷新战斗属性
        }
    } else {
        showInfoBox('您的精灵觉醒石不足！');
    }
}); // 精灵增幅提升
        
function handleSpiritHeal() {
    if (!awakened){
        return;
    }

    if (summonEnemy) {
        return;
    }
    
    const baseProbability = 0.01;
    const finalProbability = baseProbability + spiritMultiplier / 400;
    const triggerProbability = Math.round(finalProbability * 100);

    if (Math.random() * 100 < triggerProbability) {
        const spiritAttributes = getCurrentSpiritAttributes();
        const healValue = Math.round((Math.random() * (1.8 - 0.9) + 0.9) * spiritAttributes.magicAttack * spiritMultiplier * 2.5);
        battleState.player.health = Math.min(battleState.player.health + healValue, maxHealth);

        logBattleEvent(`🧚🏻精灵为你祈福，恢复了⭐️${healValue}⭐️生命值`, "pink");
        updateDamageValue(-healValue,true,'extra-damage');
        updateUI();
    }
} //战斗精灵的随机回血

function handleSpiritPower() {
    if (!awakened){
        return;
    }

    if (summonEnemy) {
        return;
    }
    
    const baseProbability = 0.01;
    const finalProbability = baseProbability + spiritMultiplier / 400;
    const triggerProbability = Math.round(finalProbability * 100);

    if (Math.random() * 100 < triggerProbability && !spiritPowerActive) {
        spiritPowerActive = true;
        battleState.player.spiritPowerActive = true;

        const spiritAttributes = getCurrentSpiritAttributes();
        const attributeBoost = {
            health: Math.round(spiritAttributes.health / 2),
            mana: Math.round(spiritAttributes.mana / 1.5),
            physicalAttack: Math.round(spiritAttributes.physicalAttack / 1.5),
            physicalDefense: Math.round(spiritAttributes.physicalDefense / 1.2),
            magicAttack: Math.round(spiritAttributes.magicAttack / 1.5),
            magicDefense: Math.round(spiritAttributes.magicDefense / 1.3),
            speed: Math.round(spiritAttributes.speed / 1.3)
        };

        // Apply the boost
        Object.keys(attributeBoost).forEach(attr => {
            battleAttributes[attr] += attributeBoost[attr];
        });

        logBattleEvent(`🧚🏻Bless from your best teammate！战斗精灵带来全属性提升！`, "pink");
        updateUI();

        // Remove the boost after 5 seconds
        setTimeout(() => {
            Object.keys(attributeBoost).forEach(attr => {
                battleAttributes[attr] -= attributeBoost[attr];
            });

            spiritPowerActive = false;
            battleState.player.spiritPowerActive = false;
            updateUI();
        }, 5000);
    }
} //战斗精灵的随机增益

function handleSpiritAttack() {
    if (!awakened){
        return;
    }

    if (summonEnemy) {
        return;
    }
    
    const baseProbability = 0.01;
    const finalProbability = baseProbability + spiritMultiplier / 400;
    const triggerProbability = Math.round(finalProbability * 100);

    if (Math.random() * 100 < triggerProbability) {
        const spiritAttributes = getCurrentSpiritAttributes();
        const attackValue = Math.round((Math.random() * (2.4 - 1.8) + 1.8) * spiritAttributes.magicAttack * spiritMultiplier * battleState.player.critDamage);
        battleState.enemy.health = Math.max(battleState.enemy.health - attackValue, 0);

        logBattleEvent(`🧚🏻Attack from your best teammate！敌人受到来自精灵的${attackValue}点助攻伤害！`, "pink");
        
        if (battleState.enemy.health <= 0) {
            showNextBattlePrompt(true);
            return;
        }


        if (Math.random() < 0.4 + finalProbability) { // 40% 的基础概率触发沉睡效果
            handleSleep();
        }

        updateUI();
    }
} //战斗精灵的随机助攻
// 【玩家战斗组件】飞升技能系统函数
document.getElementById('enable-ascension').addEventListener('click', handleAscensionButtonClick); //开启面板

function handleAscensionButtonClick() {
    if (!ascend) {
        showInfoBox('您的宠物没有飞升，无法开启飞升增益！');
        return;
    }

    if (ascensionEnabled) {
        ascensionSkillDescription(); // 直接执行技能大全
    } else {
        // 未开启飞升之术时，执行开启逻辑
        if (useItem('heartStone', 1)) {
            showInfoBox('飞升之术增益已启用！');
            refreshAscensionSkill(); // 随机生成一个飞升之术
            applyAscensionBonus(); // 应用飞升之术增益
            ascensionEnabled = true; // 设置飞升之术已开启
        } else {
            showInfoBox('您的心鉴之石不足！');
        }
    }

    updateAscensionButton(); // 更新按钮状态
}

document.getElementById('close-ascension-modal').addEventListener('click', () => {
    document.getElementById('ascension-skill-modal').style.display = 'none';
}); //关闭面板

function checkAscensionEnabled() {
    if (!ascensionEnabled) {
        showInfoBox('请先开启飞升之术增益！');
        return false;
    }
    return true;
} //调用检查函数

function updateAscensionButton() {
    const ascensionButton = document.getElementById('enable-ascension');
    if (ascensionEnabled) {
        ascensionButton.innerText = '技能说明';
        ascensionButton.style.backgroundColor = 'darkred';
        ascensionButton.removeEventListener('click', handleAscensionButtonClick);
        ascensionButton.addEventListener('click', ascensionSkillDescription);
    } else {
        ascensionButton.innerText = '开启增益';
        ascensionButton.style.backgroundColor = '';
        ascensionButton.removeEventListener('click', ascensionSkillDescription);
        ascensionButton.addEventListener('click', handleAscensionButtonClick);
    }
}

function ascensionSkillDescription() {
    let skillDescriptions = [];
    let skillIndex = 1; // 初始化技能编号

    // 遍历 ascensionSkills 对象
    for (const category in ascensionSkills) {
        if (ascensionSkills.hasOwnProperty(category)) {
            ascensionSkills[category].forEach(skill => {
                skillDescriptions.push(`${skillIndex}. ${skill.name}：${skill.effect(1)}`); // 假设技能等级为1
                skillIndex++; // 编号递增
            });
        }
    }

    const skillDescriptionsText = skillDescriptions.join('\n');
    showInfoBox(skillDescriptionsText);
}

document.getElementById('ascension-skill-button').addEventListener('click', () => {
    if (!petAscended) {
        showInfoBox('您的宠物未飞升，还没有掌握飞升之术！');
    } else if (battleState.player.taunt) {
        performAttack('physical');
        return;
    } else {
        document.getElementById('ascension-skill-modal').style.display = 'block';
        updateAscensionDisplay(); // 打开时更新显示
    }
}); //开启第一个飞升之术

document.getElementById('refresh-ascension').addEventListener('click', () => {
    if (!checkAscensionEnabled()) return;
    if (useItem('heartStone', 1)) {
        refreshAscensionSkill(); // 刷新飞升之术技能
        applyAscensionBonus(); // 应用飞升之术增益
    } else {
        showInfoBox('您的心鉴之石不足！');
    }
}); //触发刷新第一个飞升之术函数

function refreshAscensionSkill() {
    let newSkill;
    do {
        const allSkills = [...ascensionSkills.attribute, ...ascensionSkills.combat, ...ascensionSkills.settlement];
        newSkill = allSkills[Math.floor(Math.random() * allSkills.length)];
    } while (newSkill.name === secondAscensionSkill.name || newSkill.name === "未开启" || newSkill.name === "被封印的技能");
    ascensionSkill = { ...newSkill, level: 1 };
    updateAscensionDisplay();
    applyAscensionBonus();
    applyAscensionEffects();
    updatePetInfo();
} //刷新第一个飞升之术

document.getElementById('level-up-ascension').addEventListener('click', () => {
    if (!checkAscensionEnabled()) return;
    if (useItem('earthlyEnergy', 10)) {
        levelUpAscensionSkill(); // 提升飞升之术技能
    } else {
        showInfoBox('每次提升技能需要消耗10个天地灵气，你的天地灵气数量不足！');
    }
}); //触发升级第一个飞升之术函数

function levelUpAscensionSkill() {
    if (ascensionSkill.level < 20) {
        ascensionSkill.level += 1;
        updateAscensionDisplay();
        applyAscensionBonus(); // 提升技能后重新应用增益
    } else {
        showInfoBox('飞升之术技能已达最大等级！');
    }
} //升级第一个飞升之术

function updateAscensionDisplay() {
    document.getElementById('ascension-icon').src = 'https://pic.imgdb.cn/item/666aa7b6d9c307b7e9495e97.png'; // 设置图标URL
    document.getElementById('ascension-name').innerText = ascensionSkill.name;
    document.getElementById('ascension-level').innerText = '等级: ' + ascensionSkill.level;
    document.getElementById('ascension-effect').innerText = ''; // 重置描述为空
    const skill = ascensionSkills.combat.find(skill => skill.name === ascensionSkill.name) || ascensionSkills.attribute.find(skill => skill.name === ascensionSkill.name) || ascensionSkills.settlement.find(skill => skill.name === ascensionSkill.name);
    if (skill) {
        document.getElementById('ascension-effect').innerText = skill.effect(ascensionSkill.level);
    }
} //更新第一个飞升之术显示

//第二个飞升技能模块
function checkSecondAscensionEnabled() {
    const secondSkillBox = document.getElementById('second-ascension-skill');
    
    if (!reenableAscension || !ascensionEnabled) {
        const errorShowUpSecondAscensionSkill = secondAscensionSkill ? secondAscensionSkill.name : null;
        secondSkillBox.style.display = 'none';
        
        if (errorShowUpSecondAscensionSkill) {
            console.log(`第二个飞升技能${errorShowUpSecondAscensionSkill}尚未开启！`);
        } else {
            console.log(`第二个飞升技能尚未开启，且当前没有技能名称可显示。`);
        }
        
        return false;
    } else {
        secondSkillBox.style.display = 'block';
        return true;
    }
} //调用检查函数
document.getElementById('reenable-ascension').addEventListener('click', () => {
    // 检查第一个飞升技能是否未打开
    if (!ascensionSkill.name && !ascensionEnabled) {
        showInfoBox("你还没有打开第一个飞升技能！");
        return; // 退出函数
    }

    const secondSkillBox = document.getElementById('second-ascension-skill');
    if (secondSkillBox.style.display === 'none') {
        if (confirm("你可以消耗10个飞升之石为宠物开启第二个飞升之术，确认请继续")) {
            if (useItem('ascensionStone', 10)) {
                secondSkillBox.style.display = 'block';
                refreshSecondAscensionSkill();
                reenableAscension = true;
            } else {
                showInfoBox('您的飞升之石不足！');
            }
        }
    } else {
        showInfoBox('您已经开启过第二个飞升之术了！');
    }
    checkSecondAscensionEnabled();

}); //开启第二个飞升之术

document.getElementById('refresh-second-ascension').addEventListener('click', () => {
    if (!checkSecondAscensionEnabled()) return;

    if (useItem('heartStone', 1)) {
        refreshSecondAscensionSkill();
    } else {
        showInfoBox('您的心鉴之石不足！');
    }
}); //触发刷新第二个飞升之术函数

function refreshSecondAscensionSkill() {
    let newSkill;
    do {
        const allSkills = [...ascensionSkills.attribute, ...ascensionSkills.combat, ...ascensionSkills.settlement];
        newSkill = allSkills[Math.floor(Math.random() * allSkills.length)];
    } while (newSkill.name === ascensionSkill.name || newSkill.name === "未开启" || newSkill.name === "被封印的技能");
    secondAscensionSkill = { ...newSkill, level: 1 };
    updateSecondAscensionDisplay();
    applyAscensionBonus();
    applyAscensionEffects();
    updatePetInfo();
} //刷新第二个飞升之术

document.getElementById('level-up-second-ascension').addEventListener('click', () => {
    if (!checkSecondAscensionEnabled()) return;
    if (useItem('earthlyEnergy', 10)) {
        levelUpSecondAscensionSkill();
    } else {
        showInfoBox('每次提升技能需要消耗10个天地灵气，你的天地灵气数量不足！');
    }
}); //触发升级第二个飞升之术函数

function levelUpSecondAscensionSkill() {
    if (secondAscensionSkill.level < 20) {
        secondAscensionSkill.level += 1;
        updateSecondAscensionDisplay();
        applyAscensionBonus();
        applyAscensionEffects(); // 确保提升后的技能生效
    } else {
        showInfoBox('飞升之术技能已达最大等级！');
    }
} //升级第一个飞升之术

function updateSecondAscensionSkill() {
    updateSecondAscensionDisplay();
    applyAscensionBonus();
    applyAscensionEffects();
    updatePetInfo();
}

function updateSecondAscensionDisplay() {
    if (!checkSecondAscensionEnabled()) return;
    const skillBox = document.getElementById('second-ascension-skill');
    document.getElementById('second-ascension-icon').src = 'https://pic.imgdb.cn/item/66726727d9c307b7e9118748.png';
    document.getElementById('second-ascension-name').innerText = secondAscensionSkill.name;
    document.getElementById('second-ascension-level').innerText = '等级: ' + secondAscensionSkill.level;
    const skill = ascensionSkills.combat.find(skill => skill.name === secondAscensionSkill.name) ||
                  ascensionSkills.attribute.find(skill => skill.name === secondAscensionSkill.name) ||
                  ascensionSkills.settlement.find(skill => skill.name === secondAscensionSkill.name);
    if (skill) {
        document.getElementById('second-ascension-effect').innerText = skill.effect(secondAscensionSkill.level);
    }
} //更新第二个飞升之术显示

// 应用所有飞升技能的增益逻辑
function applyAscensionBonus() {
    let initialAttributes = {
        health: 0,
        mana: 0,
        physicalAttack: 0,
        physicalDefense: 0,
        magicAttack: 0,
        magicDefense: 0,
        speed: 0
    };

    // 应用第一个技能增益
    initialAttributes = applySingleAscensionBonus(ascensionSkill, initialAttributes);

    // 应用第二个技能增益
    if (secondAscensionSkill.name && checkSecondAscensionEnabled()) {
        initialAttributes = applySingleAscensionBonus(secondAscensionSkill, initialAttributes);
    }

    ascensionAttributes = initialAttributes;
    updatePetInfo(); // 更新宠物信息，应用新的增益
}

function applySingleAscensionBonus(skill, attributes) {
    switch (skill.name) {
        case '力劈华山':
            attributes.physicalAttack += skill.baseValue + skill.increment(skill.level);
            break;
        case '慈悲心怀':
            attributes.health += skill.baseValue + skill.increment(skill.level);
            attributes.mana += 10000 + skill.increment(skill.level);
            break;
        case '势如破竹':
            attributes.speed += skill.baseValue + skill.increment(skill.level);
            attributes.magicAttack += 3000 + skill.increment(skill.level);
            break;
        case '固若金汤':
            attributes.physicalDefense += skill.baseValue + skill.increment(skill.level);
            attributes.magicDefense += 100000 + skill.increment(skill.level);
            break;
        // 其他技能增益逻辑...
    }
    return attributes;
}

function applyAscensionEffects() {
    resetBattleStateEffects();
    applySingleAscensionEffect(ascensionSkill);
    if (secondAscensionSkill.name && checkSecondAscensionEnabled()) {
        applySingleAscensionEffect(secondAscensionSkill);
    }
}

function applySingleAscensionEffect(skill) {
    switch (skill.name) {
        case '魔龙之力':
            const healPercentage = (skill.baseValue + skill.increment(skill.level)) / 100;
            const healAmount = Math.floor(maxHealth * healPercentage);
            battleAttributes.health = Math.min(maxHealth, battleAttributes.health + healAmount);
            logBattleEvent(`发动魔龙之力恢复了 ${healAmount} 点生命值。`, 'brown');
            updateUI();
            break;
        case '天降甘霖':
            battleState.player.divineProtectionChance = 0.5; // 固定概率50%
            battleState.player.divineProtectionDuration = 5 + skill.increment(skill.level);
            break;
        case '斩龙一式':
            battleState.player.whiteNightThreshold = skill.increment(skill.level) / 100;
            break;
        case '灵魂穿刺':
            battleState.player.extraCritDamageChance = skill.increment(skill.level) / 100;
            battleState.player.extraCritDamageMultiplier = 10; // 固定1000%
            break;
        case '吸血魔刃':
            battleState.player.bloodSuckPercentage = skill.increment(skill.level) / 100;
            break;
        case '无我之境':
            battleState.player.invincibilityChance = skill.increment(skill.level) / 100;
            break;
        case '铜墙铁壁':
            battleState.player.damageReductionPercentage += skill.baseValue + skill.increment(skill.level);
            break;
        case '法术精通':
            battleState.player.spellMasteryChance = skill.baseValue + skill.increment(skill.level);
            break;
        case '财源滚滚':
            battleState.player.goldBonus = skill.increment(skill.level);
            break;
        case '金牌调解':
            battleState.player.noGoldPenalty = true;
            battleState.player.goldCompensation = skill.increment(skill.level);
            break;
        case '焉知非福':
            battleState.player.protectionDuration = skill.increment(skill.level);
            break;
        case '向死而生':
            battleState.player.survivalChance = skill.increment(skill.level);
            break;
        case '举一反三':
            battleState.player.expBonus = skill.increment(skill.level);
            break;
        // 其他技能的战斗增益逻辑...
    }
}

function resetBattleStateEffects() {
    battleState.player.spellMasteryChance = 0;
    battleState.player.divineProtectionChance = 0;
    battleState.player.reflectPercentage = 0;
    battleState.player.bloodSuckPercentage = 0;
    battleState.player.invincibilityChance = 0;
    battleState.player.extraCritDamageChance = 0;
    battleState.player.extraCritDamageMultiplier = 0;
    battleState.player.whiteNightThreshold = 0;
    battleState.player.damageReductionPercentage = 0; // 重置减伤比例变量
    battleState.player.goldBonus = 0;
    battleState.player.noGoldPenalty = false;
    battleState.player.goldCompensation = 0;
    battleState.player.protectionDuration = 0;
    battleState.player.survivalChance = 0;
    battleState.player.expBonus = 0;
} //刷新新技能时，旧技能增益会被移除

// 【战斗组件】自动战斗、回退系统
function enemyInfo() {
    // 创建一个新的div元素作为弹窗的容器
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popup.style.color = 'white';
    popup.style.padding = '20px';
    popup.style.border = '1px solid white';
    popup.style.borderRadius = '10px';
    popup.style.zIndex = '9999';
    popup.style.width = '80%';
    popup.style.maxWidth = '600px';
    popup.style.boxSizing = 'border-box';
    popup.style.fontSize = '14px';

    // 创建关闭按钮
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(popup);
    });

    // 创建顶部容器
    const topContainer = document.createElement('div');
    topContainer.style.display = 'flex';
    topContainer.style.alignItems = 'center';
    topContainer.style.marginBottom = '20px';

    // 创建图片元素
    const enemyImage = enemyImages.find(image => image.name === battleState.enemy.name);
    const img = document.createElement('img');
    if (enemyImage) {
        img.src = enemyImage.url;
    } else {
        img.src = 'https://pic.imgdb.cn/item/6678135ed9c307b7e9060dd6.gif';
    }
    img.style.width = '100px';
    img.style.height = '100px';
    img.style.marginRight = '20px';

    // 创建标题和描述容器
    const titleDescContainer = document.createElement('div');

    // 创建标题元素
    const title = document.createElement('h2');
    if (!summonEnemy) {
        title.innerText = '妖怪(精英)';
    } else {
        title.innerText = `${battleState.enemy.name}`;
    }
    title.style.margin = '0';
    title.style.marginBottom = '10px';

    // 创建描述元素
    const description = document.createElement('p');
    if (!summonEnemy) {
        description.innerText = '潜藏于三界裂缝，以迷惑人心智、吸收人的恐惧而不断变强的邪祟。';
    } else {
        description.innerText = '这是一个召唤得来的怪物。';
    }
    
    description.style.margin = '0';

    // 将标题和描述添加到容器中
    titleDescContainer.appendChild(title);
    titleDescContainer.appendChild(description);

    // 将图片和标题描述容器添加到顶部容器中
    topContainer.appendChild(img);
    topContainer.appendChild(titleDescContainer);

    // 创建分割线
    const separator = document.createElement('hr');
    separator.style.borderColor = 'white';
    separator.style.margin = '20px 0';

    // 创建详情容器
    const detailsContainer = document.createElement('div');
    
    // 预先声明 details 变量
    let details;
    
    if (!summonEnemy) {
        details = [
            '妖怪共有两种形态：正常和狂暴',
            '正常形态下，它会交替使用物理和法术技能攻击妖怪。妖怪精通人心操纵之术,若玩家被施加"醉酒"、"摄魂"等效果，战局风险会极大提高。',
            '每10轮妖怪会进入狂暴状态，此时妖怪生命低于20%时将在2秒内加持霸体且触发复生。',
            '妖怪一共有150轮，通关后可以继续挑战无尽Boss“深渊之神”。这是一个强大的怪物，能力多变。'
        ];
    } else {
        details = [
            '挑战召唤的敌人往往会获得更丰富的奖励',
            '目前召唤敌人和妖怪共享一套战斗系统，但它们通常具备特殊的战斗效果。',
            '挑战失败会受到惩罚。',
            '中途退出会视为挑战失败哦。'
        ];
    }
    
    // 现在 details 数组在这里是可访问的
    details.forEach(detail => {
        const p = document.createElement('p');
        p.innerText = detail;
        p.style.margin = '10px 0';
        detailsContainer.appendChild(p);
    });
    
    // 创建按钮容器
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.width = '100%';
    buttonContainer.style.marginTop = '20px';
    
    // 创建 "跳过十轮" 按钮
    const jumpButton = document.createElement('button');
    jumpButton.innerText = '跳过十轮';
    jumpButton.style.padding = '5px 10px';
    jumpButton.style.backgroundColor = '#003670';
    jumpButton.style.color = 'white';
    jumpButton.style.border = 'none';
    jumpButton.style.borderRadius = '5px';
    jumpButton.style.cursor = 'pointer';
    jumpButton.addEventListener('click', () => {
        jumpByTenRounds();
    });
    
    // 创建 "自动战斗" 按钮
    const autoButton = document.createElement('button');
    autoButton.innerText = '自动战斗';
    autoButton.style.padding = '5px 10px';
    autoButton.style.backgroundColor = '#003670';
    autoButton.style.color = 'white';
    autoButton.style.border = 'none';
    autoButton.style.borderRadius = '5px';
    autoButton.style.cursor = 'pointer';
    autoButton.addEventListener('click', () => {
        autoBattle();
        document.body.removeChild(popup);
    });

    // 创建 "忘却之时" 按钮
    const backToRoundOneButton = document.createElement('button');
    backToRoundOneButton.innerText = '忘却之时';
    backToRoundOneButton.style.padding = '5px 10px';
    backToRoundOneButton.style.backgroundColor = '#003670';
    backToRoundOneButton.style.color = 'white';
    backToRoundOneButton.style.border = 'none';
    backToRoundOneButton.style.borderRadius = '5px';
    backToRoundOneButton.style.cursor = 'pointer';
    backToRoundOneButton.addEventListener('click', () => {
        backToRoundOne();
    });

    // 将按钮添加到按钮容器中
    buttonContainer.appendChild(jumpButton);
    buttonContainer.appendChild(autoButton);
    buttonContainer.appendChild(backToRoundOneButton);
    
    // 将所有元素添加到弹窗容器中
    popup.appendChild(closeButton);
    popup.appendChild(topContainer);
    popup.appendChild(separator);
    popup.appendChild(detailsContainer);
    popup.appendChild(buttonContainer);
    
    // 将弹窗容器添加到页面的body中
    document.body.appendChild(popup);

    // 点击弹窗以外的区域关闭弹窗
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            document.body.removeChild(popup);
        }
    });
} //用于展示敌人信息界面和执行托管操作

let playerSkillPreference = {
    physical: null,  // 存储玩家上次选择的物理技能
    magical: null    // 存储玩家上次选择的法术技能
};

// 修改：自动战斗函数
function autoBattle() {
    if (!battleState || !battleState.enemy) {
        console.error("战斗状态未初始化");
        clearAutoBattle();
        return;
    }
    
    if (autoBattleInterval !== null) {
        clearAutoBattle();
        showInfoBox('已关闭自动战斗！');
        return;
    }

    if (useItem('hailMonsterPill',1)) {
        logBattleEvent("自动战斗已开始。", 'lightgreen');
    
        autoBattleInterval = setInterval(() => {
            if (!battleState || !battleState.enemy) {
                console.error("战斗状态未初始化");
                clearAutoBattle();
                return;
            }

            if (!playerTurn) {
                return;
            }
    
            // 根据玩家生命值和状态进行行动
            if (battleAttributes.health / maxHealth < 0.5 && playerTurn) {
                if (Math.random() < 0.5) {
                    performDefense();
                } else {
                    performHeal();
                }
                return;
            }
    
            const debuffStates = [
                battleState.player.drunken,
                battleState.player.healingBan,
                battleState.player.soulCapture,
                battleState.player.blindfold,
                battleState.player.seal,
                battleState.player.torn,
                battleState.player.taunt,
                battleState.player.spellSlow,
                battleState.player.suppressed,
                battleState.player.slaughter
            ];
            const activeDebuffs = debuffStates.filter(Boolean).length;
    
            if (activeDebuffs >= 2) {
                const selectedDrug = "沉檀凝香";
                const drug = drugInventory[selectedDrug];
                if (drug && drug.quantity > 0) {
                    selectDrug(selectedDrug);
                    useSelectedDrug();
                    return;
                }
            }
    
            if (battleState.player.blindfold) {
                // 玩家处于失明状态且处于玩家回合时，使用法术攻击（根据偏好）
                performAutoAttack('magical');
            } else {
                // 玩家不处于失明状态且处于玩家回合时
                if (battleAttributes.magicAttack > 0.8 * battleAttributes.physicalAttack && !battleState.player.taunt) {
                    // 99% 概率使用法术攻击
                    if (Math.random() < 0.99) {
                        performAutoAttack('magical');
                    } else {
                        performAutoAttack('physical');
                    }
                } else {
                    // 否则使用物理攻击
                    performAutoAttack('physical');
                }
            }
        }, 350);
        
    } else {
        showInfoBox('聚灵丹数量不足，无法开启自动战斗！',null,null,'red');
    }
}

function clearAutoBattle() {
    if (autoBattleInterval !== null) {
        clearInterval(autoBattleInterval);
        autoBattleInterval = null;
        logBattleEvent("自动战斗已停止。", 'red');
    }
}

function jumpByTenRounds() {
    if (battleState.player.taunt) {
        performAttack('physical');
        return;
    }

    const maxSkipRounds = 1000;
    const remainingRounds = maxSkipRounds - battleRounds;
    const roundsToAdd = Math.min(10, remainingRounds);
    
    if (battleRounds >= maxSkipRounds) {
        showInfoBox(`当前是第${battleRounds}轮，无法再继续跳过！`);
        return;
    }
    
    if (useItem('hailMonsterAmulet',1)) {
        // 增加轮次
        let initialExp = currentExp;
        battleRounds += roundsToAdd;
        
        // 更新妖怪属性
        for (let i = 0; i < roundsToAdd; i++) {
            updateEnemyAttributes();
            gainExp();
            currentExp = initialExp
            updateExpBar(currentExp, maxExp);
            logBattleEvent(`你跳过了${roundsToAdd}轮，当前是${battleRounds}轮`, 'pink');
            updatePetInfo();
            updateUI();
        }   
            
    } else {
        showInfoBox('唤妖符数量不足，无法跳过轮次！',null,null,'red');
        return;
    }
}

function backToRoundOne() {
    showInfoBox("你可以使用100个固元鼎和100个清心酿回到第一轮", () => {
        const enhanceBowlItem = jinnangItems.find(item => item.name === 'enhanceBowl');
        const ignoranceWaterItem = jinnangItems.find(item => item.name === 'ignoranceWater');

        if (!enhanceBowlItem || enhanceBowlItem.quantity < 100 || !ignoranceWaterItem || ignoranceWaterItem.quantity < 100) {
            showInfoBox("你的固元鼎或清心酿数量不足，无法回退！");
            return;
        }

        // 使用道具
        useItem('enhanceBowl', 100);
        useItem('ignoranceWater', 100);

        // 重置回合
        battleRounds = 1;
        initializeEnemyPet();
        updateEnemyAttributes();
        updateUI();
        showInfoBox("时钟空转，你已进入忘却之时……");
    });
}

// 【玩家战斗组件】神器系统函数和减益效果驱散函数
function divinedWeapon() {
    if (!divinedWeaponStatus) {
        showInfoBox("使用神器可以为你的技能附加各种强力效果，极大增强你的战斗能力。\n1.神器的开启和使用需要消耗大量经验值或特定的「钥匙」。 \n2.【升满】按钮会根据你当前经验值或所拥有的道具数量直接升至最大值，请知悉。\n3.不建议未满级（180级）前执行神器升级操作。");
        divinedWeaponStatus = true;
    }
    divineWeaponManager.openDivineWeaponUI();
}

class DivineWeaponManager {
    constructor() {
        this.lostBook = { active: false, level: 1, effects: [] };
        this.fragmentedMap = { active: false, level: 1, effects: [] };
        this.nirvanaGem = { active: false, level: 1, effects: [] };
        this.divineWeaponUI = null;
    }
    
    getWeaponData() {
        return {
            lostBook: this.lostBook,
            fragmentedMap: this.fragmentedMap,
            nirvanaGem: this.nirvanaGem
        };
    }

    setWeaponData(data) {
        if (data.lostBook) this.lostBook = data.lostBook;
        if (data.fragmentedMap) this.fragmentedMap = data.fragmentedMap;
        if (data.nirvanaGem) this.nirvanaGem = data.nirvanaGem;
    }

    openDivineWeaponUI() {
        if (this.divineWeaponUI) {
            this.divineWeaponUI.remove();
        }
        
        if (battleState.player.taunt) {
            performAttack('physical');
            return;
        }

        this.divineWeaponUI = document.createElement('div');
        this.divineWeaponUI.style = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0, 0, 0, 0.8); border: 1px solid #F5F5F5; width: 90%; padding: 10px; color: white; z-index: 9990;';
        
        const lostBookTitle = this.lostBook.active ? `神品·遗失的洛书 (Lv${this.lostBook.level})` : '被封锁的上古神器（物理）';
        const lostBookDescription = this.lostBook.active 
            ? this.lostBook.effects.length > 0 
                ? `使用物理技能时，有${(this.lostBook.level * 0.6 + 1).toFixed(1)}%概率触发以下技能效果：` + this.lostBook.effects.map(this.getEffectChineseName).join(', ') 
                : '<p>开启后可能为物理技能附加如下效果：</p><p>破甲、恐吓、眩晕、穿透、麻痹、惶恐</p>'
            : '<p>炽热明亮的金樽，开启后可为物理技能概率附加效果：</p><p>破甲、恐吓、眩晕、穿透、麻痹、惶恐</p>';
    
        const fragmentedMapTitle = this.fragmentedMap.active ? `神品·残页的河图 (Lv${this.fragmentedMap.level})` : '被封锁的上古神器（法术）';
        const fragmentedMapDescription = this.fragmentedMap.active 
            ? this.fragmentedMap.effects.length > 0 
                ? `使用法术技能时，有${(this.fragmentedMap.level * 0.6 + 1).toFixed(1)}%概率触发以下技能效果：` + this.fragmentedMap.effects.map(this.getEffectChineseName).join(', ') 
                : '<p>开启后可能为法术技能附加如下效果：</p><p>迟缓、沉默、混乱、灼烧、法力燃烧、法力吸取</p>'
            : '<p>闪烁星光的宝盒，开启后可为法术技能概率附加效果：</p><p>迟缓、沉默、混乱、灼烧、法力燃烧、法力吸取</p>';
        
        const nirvanaGemTitle = this.nirvanaGem.active ? `神品·定空的灵石 (Lv${this.nirvanaGem.level})` : '被封锁的上古神器（庇护）';
        const nirvanaGemDescription = this.nirvanaGem.active 
            ? this.nirvanaGem.effects.length > 0 
                ? `每秒有${(this.nirvanaGem.level * 0.3 + 0.5).toFixed(1)}%概率驱散以下减益效果：` + this.nirvanaGem.effects.map(this.getEffectChineseName).join(', ') 
                : '<p>开启后可能解除如下减益效果：</p><p>醉酒、禁疗、摄魂、失明、法术迟钝、撕裂、压制、嘲讽、封印、杀戮</p>'
            : '<p>流光溢彩的锦囊，开启后每秒有一定概率驱散敌人的减益效果，成功概率与等级有关。</p>';

        this.divineWeaponUI.innerHTML = `
            <div style="text-align: right;">
                <button onclick="divineWeaponManager.closeDivineWeaponUI()" style="background: transparent; border: none; color: white; font-size: 20px; cursor: pointer;">×</button>
            </div>
            <div style="margin-bottom: 20px; border: 1px solid #F5F5F5; border-radius: 10px; padding: 10px;">
                <div style="display: flex; align-items: center;">
                    <img src="${this.lostBook.active ? 'https://pic.imgdb.cn/item/669a7ce3d9c307b7e9450f04.png' : 'https://pic.imgdb.cn/item/665aecc0d9c307b7e90a239e.png'}" alt="遗失的洛书" style="width: 45px; height: 45px; border: 1px solid white; border-radius: 5px; margin-right: 10px;">
                    <div>
                        <h3 style="margin: 0;">${lostBookTitle}</h3>
                        <p style="margin: 0;">${lostBookDescription}</p>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-evenly; margin-top: 10px;">
                    <button onclick="divineWeaponManager.activateDivineWeapon('lostBook')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">开启</button>
                    <button onclick="divineWeaponManager.refreshDivineWeapon('lostBook')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">刷新</button>
                    <button onclick="divineWeaponManager.upgradeDivineWeapon('lostBook')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">升级</button>
                    <button onclick="divineWeaponManager.upgradeMaxDivineWeapon('lostBook')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">升满</button>
                    <button onclick="divineWeaponManager.description('lostBook')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">说明</button>
                </div>
            </div>
            <div style="margin-bottom: 20px; border: 1px solid #F5F5F5; border-radius: 10px; padding: 10px;">
                <div style="display: flex; align-items: center;">
                    <img src="${this.fragmentedMap.active ? 'https://pic.imgdb.cn/item/669a7ce2d9c307b7e9450ef4.png' : 'https://pic.imgdb.cn/item/665aecc0d9c307b7e90a239e.png'}" alt="残页的河图" style="width: 45px; height: 45px; border: 1px solid white; border-radius: 5px; margin-right: 10px;">
                    <div>
                        <h3 style="margin: 0;">${fragmentedMapTitle}</h3>
                        <p style="margin: 0;">${fragmentedMapDescription}</p>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-evenly; margin-top: 10px;">
                    <button onclick="divineWeaponManager.activateDivineWeapon('fragmentedMap')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">开启</button>
                    <button onclick="divineWeaponManager.refreshDivineWeapon('fragmentedMap')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">刷新</button>
                    <button onclick="divineWeaponManager.upgradeDivineWeapon('fragmentedMap')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">升级</button>
                    <button onclick="divineWeaponManager.upgradeMaxDivineWeapon('fragmentedMap')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">升满</button>
                    <button onclick="divineWeaponManager.description('fragmentedMap')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">说明</button>
                </div>
            </div>
            <div style="margin-bottom: 10px; border: 1px solid #F5F5F5; border-radius: 10px; padding: 10px;">
                <div style="display: flex; align-items: center;">
                    <img src="${this.nirvanaGem.active ? 'https://pic.imgdb.cn/item/66a48e2cd9c307b7e9649085.png' : 'https://pic.imgdb.cn/item/665aecc0d9c307b7e90a239e.png'}" alt="定空的灵石" style="width: 45px; height: 45px; border: 1px solid white; border-radius: 5px; margin-right: 10px;">
                    <div>
                        <h3 style="margin: 0;">${nirvanaGemTitle}</h3>
                        <p style="margin: 0;">${nirvanaGemDescription}</p>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-evenly; margin-top: 10px;">
                    <button onclick="divineWeaponManager.activateDivineWeapon('nirvanaGem')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">开启</button>
                    <button onclick="divineWeaponManager.refreshDivineWeapon('nirvanaGem')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">刷新</button>
                    <button onclick="divineWeaponManager.upgradeDivineWeapon('nirvanaGem')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">升级</button>
                    <button onclick="divineWeaponManager.upgradeMaxDivineWeapon('nirvanaGem')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">升满</button>
                    <button onclick="divineWeaponManager.description('nirvanaGem')" style="background: green; color: white; font-size: 14px; border: 1px solid white;">说明</button>
                </div>
            </div>
            <div style="text-align: right;">
                <button onclick="divineWeaponManager.closeDivineWeaponUI()" style="background: transparent; border: none; color: white; font-size: 20px; cursor: pointer;"></button>
            </div>
        `;

        document.body.appendChild(this.divineWeaponUI);
    }

    closeDivineWeaponUI() {
        if (this.divineWeaponUI) {
            this.divineWeaponUI.remove();
            this.divineWeaponUI = null;
        }
    }

    activateDivineWeapon(type) {
        if (this[type].active) {
            showInfoBox("你已经开启此神器了，无法重复开启！");
            return;
        }

        const itemName = type === 'lostBook' ? 'lostBook' : type === 'fragmentedMap' ? 'fragmentedMap' : 'nirvanaGem';
        if (useItem(itemName)) {
            this[type].active = true;
            this[type].effects = [this.getRandomEffect(type)];
            showInfoBox(`${type === 'lostBook' ? '遗失的洛书' : type === 'fragmentedMap' ? '残页的河图' : '定空的灵石'}已成功开启！`);
            this.openDivineWeaponUI(); // 刷新界面显示
            return;
        }

        if (currentExp < 200000) {
            showInfoBox("经验不足200000或缺少对应的「钥匙」。神器的「钥匙」可以通过武神仙葫小概率获得。");
            return;
        }

        currentExp -= 200000;
        updateExpBar(currentExp, maxExp);

        this[type].active = true;
        this[type].effects = [this.getRandomEffect(type)];
        showInfoBox(`${type === 'lostBook' ? '遗失的洛书' : type === 'fragmentedMap' ? '残页的河图' : '定空的灵石'}已成功开启！`);
        this.openDivineWeaponUI(); // 刷新界面显示
    }
    

    
    description(type) {
        const itemName = type === 'lostBook' ? 'lostBook' : type === 'fragmentedMap' ? 'fragmentedMap' : 'nirvanaGem';
        showInfoBox(weaponDescriptions[itemName]);
        this.openDivineWeaponUI(); // 刷新界面显示
    }
    
    refreshDivineWeapon(type) {
        if (!this[type].active) {
            showInfoBox("开启神器后才能执行刷新！");
            return;
        }
    
        const itemName = type === 'lostBook' ? 'lostBook' : type === 'fragmentedMap' ? 'fragmentedMap' : 'nirvanaGem';
        if (useItem(itemName)) {
            const chance = Math.random();
            if (type === 'nirvanaGem') {
                if (chance < 0.05) {
                    this[type].effects = [
                        this.getRandomEffect(type),
                        this.getRandomEffect(type),
                        this.getRandomEffect(type),
                        this.getRandomEffect(type),
                        this.getRandomEffect(type)
                    ];
                } else if (chance < 0.15) {
                    this[type].effects = [
                        this.getRandomEffect(type),
                        this.getRandomEffect(type),
                        this.getRandomEffect(type),
                        this.getRandomEffect(type)
                    ];
                } else if (chance < 0.30) {
                    this[type].effects = [
                        this.getRandomEffect(type),
                        this.getRandomEffect(type),
                        this.getRandomEffect(type)
                    ];
                } else if (chance < 0.60) {
                    this[type].effects = [
                        this.getRandomEffect(type),
                        this.getRandomEffect(type)
                    ];
                } else {
                    this[type].effects = [this.getRandomEffect(type)];
                }
            } else {
                if (chance < 0.05) {
                    this[type].effects = [this.getRandomEffect(type), this.getRandomEffect(type), this.getRandomEffect(type)];
                } else if (chance < 0.20) {
                    this[type].effects = [this.getRandomEffect(type), this.getRandomEffect(type)];
                } else {
                    this[type].effects = [this.getRandomEffect(type)];
                }
            }
            this.openDivineWeaponUI(); // 刷新界面显示
            return;
        }
    
        if (currentExp < 100000) {
            showInfoBox("经验不足100000或没有对应钥匙，无法刷新效果。（如果你拥有钥匙，将会优先自动使用钥匙刷新）");
            return;
        }
    
        currentExp -= 100000;
        updateExpBar(currentExp, maxExp);
    
        const chance = Math.random();
        if (type === 'nirvanaGem') {
            if (chance < 0.05) {
                this[type].effects = [
                    this.getRandomEffect(type),
                    this.getRandomEffect(type),
                    this.getRandomEffect(type),
                    this.getRandomEffect(type),
                    this.getRandomEffect(type)
                ];
            } else if (chance < 0.15) {
                this[type].effects = [
                    this.getRandomEffect(type),
                    this.getRandomEffect(type),
                    this.getRandomEffect(type),
                    this.getRandomEffect(type)
                ];
            } else if (chance < 0.30) {
                this[type].effects = [
                    this.getRandomEffect(type),
                    this.getRandomEffect(type),
                    this.getRandomEffect(type)
                ];
            } else if (chance < 0.60) {
                this[type].effects = [
                    this.getRandomEffect(type),
                    this.getRandomEffect(type)
                ];
            } else {
                this[type].effects = [this.getRandomEffect(type)];
            }
        } else {
            if (chance < 0.05) {
                this[type].effects = [this.getRandomEffect(type), this.getRandomEffect(type), this.getRandomEffect(type)];
            } else if (chance < 0.20) {
                this[type].effects = [this.getRandomEffect(type), this.getRandomEffect(type)];
            } else {
                this[type].effects = [this.getRandomEffect(type)];
            }
        }
        showInfoBox(`${type === 'lostBook' ? '遗失的洛书' : type === 'fragmentedMap' ? '残页的河图' : '定空的灵石'}已通过经验刷新。`);
        this.openDivineWeaponUI(); // 刷新界面显示
    }
    
    upgradeDivineWeapon(type) {
        if (!this[type].active) {
            showInfoBox("开启神器后才能执行升级！");
            return;
        }
    
        if (this[type].level >= 165) {
            showInfoBox("神器等级已达到上限。");
            return;
        }
    
        const itemName = type === 'lostBook' ? 'lostBook' : type === 'fragmentedMap' ? 'fragmentedMap' : 'nirvanaGem';
    
        if (this[type].level >= 100 || useItem(itemName)) {
            if (this[type].level >= 100 && !useItem(itemName)) {
                showInfoBox("神器100级后，只能使用「钥匙」升级，你可以通过开启武神仙葫获取「钥匙」。");
                return;
            }
            
            this[type].level += 1;
            this.openDivineWeaponUI(); // 刷新界面显示
            return;
        }
    
        if (currentExp < 3000) {
            showInfoBox("经验不足3000或缺少对应「钥匙」，无法升级神器。");
            return;
        }
    
        currentExp -= 3000;
        updateExpBar(currentExp, maxExp);
        this[type].level += 1;
        this.openDivineWeaponUI(); // 刷新界面显示
    }
    
    upgradeMaxDivineWeapon(type) {
        while (this[type].level < 165) {
            const previousLevel = this[type].level;
            this.upgradeDivineWeapon(type);
            if (this[type].level === previousLevel) {
                break; // If the level didn't change, exit the loop
            }
        }
    }

    getRandomEffect(type) {
        if (type === 'lostBook') {
            const effects = ['破甲', '眩晕', '恐吓', '麻痹', '穿透', '惶恐'];
            return effects[Math.floor(Math.random() * effects.length)];
        } else if (type === 'fragmentedMap') {
            const effects = ['沉默', '迟缓', '混乱', '法力燃烧', '灼烧', '法力吸取'];
            return effects[Math.floor(Math.random() * effects.length)];
        } else if (type === 'nirvanaGem') {
            const effects = ['drunken', 'healingBan', 'soulCapture', 'blindfold', 'spellSlow', 'torn', 'suppressed', 'taunt', 'seal', 'slaughter'];
            return effects[Math.floor(Math.random() * effects.length)];
        }
    }

    getEffectChineseName(effect) {
        const effectMap = {
            '破甲': '破甲',
            '眩晕': '眩晕',
            '恐吓': '恐吓',
            '麻痹': '麻痹',
            '穿透': '穿透',
            '惶恐': '惶恐',
            '沉默': '沉默',
            '迟缓': '迟缓',
            '混乱': '混乱',
            '法力燃烧': '法力燃烧',
            '法力吸取': '法力吸取',
            '灼烧': '灼烧',
            'drunken': '醉酒',
            'healingBan': '禁疗',
            'soulCapture': '摄魂',
            'blindfold': '失明',
            'spellSlow': '法术迟钝',
            'torn': '撕裂',
            'suppressed': '压制',
            'taunt': '嘲讽',
            'seal': '封印',
            'slaughter': '杀戮'
        };
        return effectMap[effect] || effect;
    }

    applyNirvanaGemEffects() {
        if (!this.nirvanaGem.active) return;

        const triggerProbability = Math.min(1, 0.005 + (this.nirvanaGem.level - 1) * 0.003);
        if (Math.random() > triggerProbability) return; // 没有触发效果

        const debuffs = ['drunken', 'healingBan', 'soulCapture', 'blindfold', 'spellSlow', 'torn', 'suppressed', 'taunt', 'seal', 'slaughter'];
        const activeDebuffs = debuffs.filter(debuff => battleState.player[debuff]);
        const applicableDebuffs = this.nirvanaGem.effects.filter(effect => debuffs.includes(effect));

        const debuffsToRemove = activeDebuffs.filter(debuff => applicableDebuffs.includes(debuff));

        if (debuffsToRemove.length > 0) {
            const debuffToRemove = debuffsToRemove[Math.floor(Math.random() * debuffsToRemove.length)];
            battleState.player[debuffToRemove] = false;

            switch (debuffToRemove) {
                case 'drunken':
                    break;
                case 'healingBan':
                    break;
                case 'spellSlow':
                    break;
                case 'soulCapture':
                    battleAttributes.physicalAttack = battleState.player.physicalAttack;
                    battleAttributes.magicAttack = battleState.player.magicAttack;
                    updateUI();
                    updatePlayerStatusDisplay();
                    break;
                case 'torn':
                    clearInterval(battleState.player.tornInterval);
                    effectCooldowns.torn = false;
                    break;
                case 'suppressed':
                    // 清除压制效果，恢复原始函数
                    cleanSuppressed();
                    break;
                case 'taunt':
                    // 清除嘲讽效果，恢复原始函数
                    clearTaunt();
                    break;
                case 'slaughter':
                    // 清除杀戮效果，恢复原始函数
                    cleanSlaughter();
                    break;
                case 'blindFold':
                    break;
                case 'seal':
                    ascensionSkill.name = battleState.player.originalAscensionSkill;
                    secondAscensionSkill.name = battleState.player.originalSecondAscensionSkill;
                    updateAscensionDisplay();
                    updateSecondAscensionDisplay();
                    effectCooldowns.seal = false;
                    updateUI();
                    break;
            }

            logBattleEvent(`定空的灵石解除了你的${this.getEffectChineseName(debuffToRemove)}状态。`, '#D3D3D3');
            showBattleOverlay("https://pic.imgdb.cn/item/66a33f3ad9c307b7e942c38c.gif", 1000, 1, 1000);
            updatePlayerStatusDisplay();
            updateUI();
        }
    }
}

function cleanSlaughter() {
    battleState.player.slaughter = false;
    effectCooldowns.slaughter = false;
    enemyPhysicalAttackCount = 0;
    updatePlayerStatusDisplay();
    console.log("杀戮状态已被解除。");
}

function cleanSuppressed() {
    if (battleState.player.suppressed) {
        clearTimeout(suppressionState.timeoutId); // 清除压制定时器

        // 备份原始的攻击和防御函数
        const originalPerformPhysicalAttack = performPhysicalAttack;
        const originalPerformMagicalAttack = performMagicalAttack;
        const originalPerformHeal = performHeal;
        const originalPerformPoison = performPoison;
        const originalPerformDefense = performDefense;

        // 重置玩家的压制状态和效果冷却时间
        battleState.player.suppressed = false;
        effectCooldowns.suppressed = false;

        if (!suppressionState.actionPerformed || battleState.player.suppressed) {
            battleAttributes.health = 1;
            battleAttributes.mana = 1;
            battleAttributes.physicalAttack = 1;
            battleAttributes.magicAttack = 1;
            logBattleEvent("你的无动于衷极大助长了妖怪的威压，它降下地狱之火焚尽了你的战斗能力。", '#FF4500');
            showBattleOverlay("https://pic.imgdb.cn/item/66a484fcd9c307b7e95c2645.gif", 1500, 0.8);
        }

        // 恢复原始的攻击和防御函数
        performPhysicalAttack = originalPerformPhysicalAttack;
        performMagicalAttack = originalPerformMagicalAttack;
        performHeal = originalPerformHeal;
        performPoison = originalPerformPoison;
        performDefense = originalPerformDefense;

        // 更新玩家状态显示和 UI
        updatePlayerStatusDisplay();
    }
    updateUI();
}

function clearTaunt() {
    battleState.player.taunt = false;
    effectCooldowns.taunt = false;
    clearTimeout(tauntTimeout); // 清除嘲讽定时器

    // 更新状态显示和UI
    updatePlayerStatusDisplay();
    updateUI();
}

function clearEnemyEffect() {
    const effects = ['drunken', 'healingBan', 'soulCapture', 'blindfold', 'spellSlow', 'torn', 'suppressed', 'taunt', 'seal', 'slaughter', 'shocked', 'heat'];

    effects.forEach(effect => {
        if (battleState.player[effect]) {

            switch (effect) {
                case 'drunken':
                    // 清除醉酒效果，直接设置状态为false即可
                    break;
                case 'healingBan':
                    // 清除禁疗效果，直接设置状态为false即可
                    break;
                case 'soulCapture':
                    // 清除摄魂效果，恢复攻击力
                    battleAttributes.physicalAttack = battleState.player.physicalAttack;
                    battleAttributes.magicAttack = battleState.player.magicAttack;
                    updateUI();
                    updatePlayerStatusDisplay();
                    break;
                case 'torn':
                    // 清除撕裂效果，停止持续伤害
                    clearInterval(battleState.player.tornInterval);
                    break;
                case 'suppressed':
                    // 清除压制效果
                    cleanSuppressed();
                    break;
                case 'taunt':
                    // 清除嘲讽效果，恢复原始函数
                    clearTaunt();
                    break;
                case 'slaughter':
                    // 清除杀戮效果，恢复原始函数
                    cleanSlaughter();
                    break;
                case 'seal':
                    // 清除封印效果，恢复原始技能名称
                    ascensionSkill.name = battleState.player.originalAscensionSkill;
                    secondAscensionSkill.name = battleState.player.originalSecondAscensionSkill;
                    updateAscensionDisplay();
                    updateSecondAscensionDisplay();
                    updateUI();
                    break;
                case 'shocked':
                    // 设置为false
                    break;
                case 'heat':
                    handleCleanHeat();
                    break;
            }
            battleState.player[effect] = false;
            effectCooldowns[effect] = false;
        }
    });
    updatePlayerStatusDisplay();
} //清理玩家目前的减益效果

function clearPlayerEffect() {
    const effects = [
        { name: 'armorBreak', timer: battleState.enemy.armorBreakTimer },
        { name: 'pierced', timer: battleState.enemy.piercedTimer },
        { name: 'silenced', timer: battleState.enemy.silencedTimer },
        { name: 'poisoned', timer: battleState.enemy.poisonedTimer },
        { name: 'stunned', timer: battleState.enemy.stunnedTimer },
        { name: 'intimidated', timer: battleState.enemy.intimidatedTimer },
        { name: 'benumbed', timer: battleState.enemy.benumbedTimer },
        { name: 'dazed', timer: battleState.enemy.dazedTimer },
        { name: 'burnt', timer: battleState.enemy.burntTimer },
        { name: 'slow', timer: battleState.enemy.slowTimer },
        { name: 'terrified', timer: battleState.enemy.terrifiedTimer }
    ];

    effects.forEach(effect => {
        battleState.enemy[effect.name] = false;

        if (effect.timer) {
            clearTimeout(effect.timer);
            effect.timer = null;
        }
    });

    updateEnemyStatusDisplay();

} //清理敌人目前的减益效果

const divineWeaponManager = new DivineWeaponManager();







