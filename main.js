document.getElementById('wuxing-close-button').addEventListener('click', closeWuxingDisplay);
document.getElementById('wuxing-display').style.display = 'none';

const pets = {
    xiaojin: {
        name: '小金牛',
        rank: 'R',
        image: 'https://pic.imgdb.cn/item/66728efbd9c307b7e9576627.gif',
        skills: [
            { name: '野性冲撞', rarity: 'A', type: 'PA', multiplier: 2, description: '物理攻击技能，小金牛使出浑身解数朝妖怪进行致命一击。' },
            { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，每回合恢复一定量的法力值' },
            { name: '破军神力', rarity: 'B', type: 'N', multiplier: 3, description: '被动技能，宠物获得大量的物理攻击力和法术攻击力。' },
            { name: '野性赐福', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，宠物可获得一定的耐力提升。' },
            { name: '天生蛮力', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，小金牛天生蛮力，物理攻击有所提升。' },
            { name: '自然屏障', rarity: 'B', type: 'PD', multiplier: 1.2, description: '防御技能，小金牛的防御能力得到了微量提升。' },
            { name: '生命祝福', rarity: 'A', type: 'PH', multiplier: 1.2, description: '治疗技能，得到生命祝福的小金牛治疗能力得到了提升。' },
            { name: '三倍速冲击', rarity: 'SS', type: 'PA', multiplier: 3, description: '物理攻击技能，愤怒的小金牛超负荷奔跑，对敌人使出致命的冲撞。' },
            { name: '仙风道骨', rarity: 'A', type: 'N', multiplier: 1.5, description: '被动技能，耐力、敏捷、强壮大幅提升。' },
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 0, description: '被动技能，寿命上限上升' },
            { name: '灵兽冲刺', rarity: 'B', type: 'MA', multiplier: 3, description: '法术攻击技能，对目标造成法术伤害' },
            { name: '野兽外壳', rarity: 'A', type: 'N', multiplier: 1, description: '被动技能，物理和法术防御上升。' },
            { name: '全面进化', rarity: 'S', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、强壮上升' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 3600, min: 3600, max: 7200 },
            strength: { current: 3200, min: 3200, max: 5400 },
            faith: { current: 1150, min: 1150, max: 2250 },
            agility: { current: 1100, min: 1100, max: 2200 },
            intelligence: { current: 2100, min: 2100, max: 4200 },
            mutated: false
        },
    },
    wunian: {
        name: '无念',
        rank: 'SSR',
        image: 'https://pic1.imgdb.cn/item/67808f88d0e0a243d4f2e62d.gif',
        skills: [
            { name: '天生蛮力', rarity: 'B', type: 'N', multiplier: 1.5, description: '物理攻击上升' },
            { name: '冥想', rarity: 'B', type: 'HL', multiplier: 1.5, description: '每回合法力值恢复' },
            { name: '战斗狂热', rarity: 'A', type: 'N', multiplier: 1.8, description: '物理爆击、速度上升' },
            { name: '仙风道骨', rarity: 'A', type: 'N', multiplier: 1.8, description: '耐力、敏捷、强壮大幅提升' },
            { name: '防护结界', rarity: 'B', type: 'PD', multiplier: 1.5, description: '法术防御上升' },
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1.5, description: '寿命上限上升' },
            { name: '天生魔爆', rarity: 'A', type: 'N', multiplier: 1.8, description: '物理暴击上升' },
            { name: '天赐矫健', rarity: 'A', type: 'N', multiplier: 1.8, description: '物理和法术闪避上升' },
            { name: '法力吸取（物理）', rarity: 'B', type: 'PAE', multiplier: 1.5, description: '单体物理攻击并吸取法力值' },
            { name: '全面进化', rarity: 'S', type: 'N', multiplier: 2.0, description: '耐力、敏捷、强壮上升' },
            { name: '高级援护', rarity: 'B', type: 'PH', multiplier: 1.5, description: '援护己方单一目标' },
            { name: '智慧守护', rarity: 'S', type: 'SH', multiplier: 2.0, description: '通过追随智慧与战斗的守护者,使此生物学会用法力值抵消一部分受到的伤害' },
            { name: '金鳞战甲', rarity: 'SS', type: 'N', multiplier: 2.5, description: '大幅提升法术防御' },
            { name: '蛇灿莲花', rarity: 'SS', type: 'PAE', multiplier: 3, description: '对敌方全体造成物理伤害，并有概率使被击中目标附加荼毒，持续3回合' },
            { name: '靡靡之音', rarity: 'S', type: 'PP', multiplier: 2.5, description: '对敌方单体造成大量物理伤害，被击中目标100%附加荼毒，持续3回合' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 3000, min: 3000, max: 5400 },
            strength: { current: 6500, min: 6500, max: 13100 },
            faith: { current: 2000, min: 2000, max: 3200 },
            agility: { current: 3250, min: 3250, max: 5950 },
            intelligence: { current: 2000, min: 2000, max: 3200 },
            mutated: false
        },
    },
    jiecheng: {
        name: '结城夏奈',
        rank: 'SSR',
        image: 'https://pic.imgdb.cn/item/66e83fc7d9c307b7e9977eda.png',
        skills: [
            { name: '咒炎爆破', rarity: 'SSS', type: 'MAE', multiplier: 5, description: '結城夏柰凝聚咒术之力，释放出强烈的火焰冲击，对范围内的敌人造成高额魔法伤害。' },
            { name: '冰封禁锢', rarity: 'SS', type: 'TC', multiplier: 2, description: '以咒术唤出寒冰之力，将敌人禁锢在冰块之中，使其短时间内无法行动。' },
            { name: '魔音扰神', rarity: 'S', type: 'MAE', multiplier: 2, description: '弹奏古琴，发出扰人心神的魔音，使敌人陷入混乱，攻击方向出现错乱' },
            { name: '灵力护盾', rarity: 'A', type: 'PD', multiplier: 1.5, description: '結城夏柰为自己和队友施加一层灵力护盾，吸收一定量的伤害。' },
            { name: '咒术弱化', rarity: 'A', type: 'MAE', multiplier: 1.8, description: '对敌人施加咒术，降低其攻击力和防御力。' },
            { name: '琴音治愈', rarity: 'B', type: 'PH', multiplier: 1.35, description: '弹奏舒缓的琴音，为自己和队友恢复一定量的生命值。' },
            { name: '灵魂冲击', rarity: 'S', type: 'MAE', multiplier: 2, description: '释放强大的灵魂之力，对敌人的灵魂造成重创，使其陷入虚弱状态。' },
            { name: '幻影迷踪', rarity: 'SS', type: 'PHE', multiplier: 1.5, description: '結城夏柰制造出多个幻影，自身进入隐身状态并提升移动速度。' },
            { name: '诅咒降临', rarity: 'A', type: 'PPE', multiplier: 1.5, description: '降下诅咒，使敌人的技能冷却时间延长。' },
            { name: '魅心咒缚', rarity: 'SS', type: 'TC', multiplier: 1, description: '結城夏柰施展极致魅惑之术，以强大的咒力牵引敌人的心智。被魅惑的敌人会在一段时间内无法攻击' },
            { name: '智慧守护', rarity: 'B', type: 'SH', multiplier: 1, description: '学会智慧守护的宠物可用法力抵消一定比例的伤害' },
            { name: '永远挚爱麟', rarity: 'B', type: 'HL', multiplier: 0.03, description: '被动技能，在挚爱的隐隐关注下，每回合恢复一定的法力值。' },
            { name: '姐就是女王', rarity: 'B', type: 'NE', multiplier: 0, description: '被动技能，生命值大幅提升' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 5400, min: 5400, max: 9200 },
            strength: { current: 3200, min: 3200, max: 5400 },
            faith: { current: 1150, min: 1150, max: 2250 },
            agility: { current: 1100, min: 1100, max: 2200 },
            intelligence: { current: 4200, min: 4200, max: 7800 },
            mutated: false
        },
    },
    qiongmei: {
        name: 'かすがのそら',
        rank: 'SSR',
        image: 'https://pic.imgdb.cn/item/66d69d73d9c307b7e923d797.gif',
        skills: [
            { name: '虚弱之躯', rarity: 'B', type: 'PD', multiplier: 1.5, description: '由于身体较为虚弱，穹减少了敌人输出的物理伤害。' },
            { name: '依赖之心', rarity: 'A', type: 'PH', multiplier: 1.5, description: '当身边有亲近的人时，穹的恢复能力显著提升。' },
            { name: '孤独之影', rarity: 'S', type: 'PP', multiplier: 2.5, description: '在孤独时爆发出惊人的攻击力，集中全力进行攻击。' },
            { name: '静谧守护', rarity: 'A', type: 'JK', multiplier: 0.1, description: '穹的内心宁静，能够更好地抵御敌人的负面效果。' },
            { name: '禁忌之恋', rarity: 'SS', type: 'MA', multiplier: 3, description: '穹与至亲的感情突破禁忌，激发出强大的攻击力。' },
            { name: '银发之美', rarity: 'B', type: 'N', multiplier: 2, description: '穹那银白色的头发令人难以忘怀，赋予她美丽的外表。' },
            { name: '病弱增幅', rarity: 'S', type: 'HL', multiplier: 0.01, description: '穹的病弱有时反而成为力量的源泉，使她的法力值得到一定的恢复能力。' },
            { name: '深情守护', rarity: 'A', type: 'SH', multiplier: 1, description: '穹对亲人的深情使她能够更快恢复生命值。' },
            { name: '心灵枷锁', rarity: 'B', type: 'N', multiplier: 0, description: '穹的内心受到情感的束缚，使她的攻击偶尔受到限制。' },
            { name: '逆境反击', rarity: 'A', type: 'FH', multiplier: 1, description: '在生命值低于一定比例时，穹的攻击能力会大幅提升。' },
            { name: '温柔之心', rarity: 'B', type: 'PH', multiplier: 1.6, description: '穹虽然外表冷淡，但内心温柔，能够为队友提供微弱的生命恢复。' },
            { name: '命运羁绊', rarity: 'S', type: 'N', multiplier: 10, description: '穹与亲人的羁绊使她在战斗中获得额外的力量加成。' },
            { name: '永恒依恋', rarity: 'SS', type: 'PA', multiplier: 3, description: '穹对至亲的依恋化作无尽的力量，爆发出强大的攻击。' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 600, min: 600, max: 1100 },
            strength: { current: 2200, min: 2200, max: 3400 },
            faith: { current: 8150, min: 8150, max: 11250 },
            agility: { current: 2100, min: 2100, max: 3200 },
            intelligence: { current: 4100, min: 4100, max: 5100 },
            mutated: false
        },
    },
    jinqian: {
        name: '金钳蟹',
        rank: 'R',
        image: 'https://pic.imgdb.cn/item/66a38e18d9c307b7e996e8b2.gif',
        skills: [
            { name: '硬甲壳', rarity: 'B', type: 'PD', multiplier: 1.2, description: '物理防御上升' },
            { name: '自然屏障', rarity: 'B', type: 'N', multiplier: 1, description: '法术防御上升' },
            { name: '注魔水冲', rarity: 'A', type: 'PA', multiplier: 1.5, description: '对目标造成物理伤害' },
            { name: '天生灵性', rarity: 'A', type: 'HL', multiplier: 0.01, description: '法力上限上升' },
            { name: '水魔爆', rarity: 'A', type: 'PA', multiplier: 2.5, description: '敌全体造成物理伤害' },
            { name: '嗜血狂暴', rarity: 'A', type: 'N', multiplier: 2, description: '物理爆击上升' },
            { name: '天生蛮力', rarity: 'S', type: 'N', multiplier: 1, description: '物理攻击上升' },
            { name: '野性赐福', rarity: 'S', type: 'N', multiplier: 1, description: '耐力上升' },
            { name: '长寿', rarity: 'S', type: 'N', multiplier: 1, description: '寿命上限上升' },
            { name: '余忆幼时', rarity: 'B', type: 'N', multiplier: 2, description: '当童年成为遗迹里的梦' },
            { name: '野性穿刺', rarity: 'A', type: 'PA', multiplier: 1.6, description: '对目标造成物理伤害' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 3150, min: 3150, max: 5180 },
            strength: { current: 3150, min: 3150, max: 5180 },
            faith: { current: 540, min: 540, max: 1660 },
            agility: { current: 3150, min: 3150, max: 5180 },
            intelligence: { current: 540, min: 540, max: 1660 },
            mutated: false
        },
    },
    jingtan: {
        name: '净坛使者',
        rank: 'SSR',
        image: 'https://pic.imgdb.cn/item/66a38e18d9c307b7e996e8c3.gif',
        skills: [
            { name: '生命祝福', rarity: 'B', type: 'PH', multiplier: 1.2, description: '生命力上升' },
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '有此天赋的生物寿命得到额外增长。被动技能，寿命上限增加。增加的寿命值与生物种类，技能等级有关。' },
            { name: '天生蛮力', rarity: 'B', type: 'N', multiplier: 1, description: '攻击增加' },
            { name: '高级强壮', rarity: 'A', type: 'N', multiplier: 2, description: '耐力及生命值上限上升' },
            { name: '破军神力', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，在破军星的庇佑下，人类可获得强大的战力，会此技能可使宠物获得大量的物理攻击力和法术攻击力' },
            { name: '苦行', rarity: 'A', type: 'N', multiplier: 2, description: '九戒在十万八千里的苦修中大大增加了自身的道行，耐力、敏捷、信仰增加。' },
            { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能,通过追随智慧与战斗的守护者,使此生物学会用法力值抵消一部分受到的伤害.可抵消的比例根据技能等级而定.' },
            { name: '冥想', rarity: 'A', type: 'HL', multiplier: 0.01, description: '通过冥想，回合结束时（所有人行动完毕后）恢复自身大量魔法，恢复魔法百分比随技能等级提升而提升' },
            { name: '天罡三十六变', rarity: 'S', type: 'JK', multiplier: 0.05, description: '九戒会三十六种变化，每回合结束后有一定几率清除自身的异常状态。' },
            { name: '天河召唤', rarity: 'S', type: 'PA', multiplier: 2.5, description: '天蓬元帅召唤八万天河水军吞噬一切妖魔鬼怪。对敌方造成物理伤害。' },
            { name: '九齿透骨', rarity: 'SS', type: 'PP', multiplier: 2.5, description: '九戒使用九齿钉耙发动猛击，对一横排范围目标造成持续流血伤害。' },
            { name: '上宝沁金耙', rarity: 'SS', type: 'MA', multiplier: 2.8, description: '上宝沁金耙蕴含无穷法力，对十字目标进行法术攻击' },
            { name: '天蓬下凡', rarity: 'SS', type: 'PD', multiplier: 1.8, description: '传说天蓬元帅下凡时周身簇拥着无数天兵为其护法。消耗自身60%寿命及百分比蓝为己方十字目标增加百分比法术防御，技能效果随宠物修为和技能等级提升而提升。' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 8100, min: 8100, max: 10900 },
            strength: { current: 4500, min: 4500, max: 6500 },
            faith: { current: 3600, min: 3600, max: 5400 },
            agility: { current: 2700, min: 2700, max: 4300 },
            intelligence: { current: 1800, min: 1800, max: 3200 },
            mutated: false
        },
    },
    jiuyi: {
        name: '九翼天龙',
        rank: 'SSR',
        image: 'https://pic.imgdb.cn/item/66a38e18d9c307b7e996e8d5.gif',
        skills: [
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '有此天赋的生物寿命得到额外增长。被动技能，寿命上限增加。增加的寿命值与生物种类，技能等级有关。' },
            { name: '龙形圣体', rarity: 'B', type: 'N', multiplier: 2, description: '龙形生物特有的，血耐大增的天赋。' },
            { name: '魔化鳞甲', rarity: 'B', type: 'N', multiplier: 1, description: '一些附有魔力的鳞片，大大提升了此生物的法术防御。' },
            { name: '生命祝福', rarity: 'B', type: 'PH', multiplier: 1.2, description: '对于生命的赐予是自然最善意的祝福，拥有此种天赋的生物，生命值将大大提高。野兽较容易得到这类祝福。' },
            { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能,通过追随智慧与战斗的守护者,使此生物学会用法力值抵消一部分受到的伤害.可抵消的比例根据技能等级而定.' },
            { name: '龙族后裔（图腾）', rarity: 'A', type: 'N', multiplier: 1.2, description: '作为龙族的后裔，对先祖的图腾崇拜，提高了此生物的信仰。' },
            { name: '冥想', rarity: 'A', type: 'HL', multiplier: 0.01, description: '通过冥想，可以使自己的法力大大增加。被动技能，拥有此技能的人每次回合结束时（所有人行动完毕后），法力增加100,每场战斗结束后寿命额外减少1点.' },
            { name: '龙族后裔（充沛）', rarity: 'A', type: 'N', multiplier: 1.2, description: '云从龙，风从虎。龙族后裔特有操作风云的本领。大幅提高自己的速度。' },
            { name: '风平浪静', rarity: 'S', type: 'N', multiplier: 2, description: '大幅提高自身法术命中，忽视法术闪避。' },
            { name: '深渊沉睡', rarity: 'S', type: 'N', multiplier: 2, description: '九翼天龙在深渊沉睡，沉睡中中淬炼出惊奇血脉！极大的提高了自己的耐力、敏捷和智力。' },
            { name: '寒冰风暴', rarity: 'SS', type: 'MA', multiplier: 2.4, description: '九翼天龙挥动翅膀召唤寒冰之力，对敌方6个单位造成法术伤害，机率忽视对方法术防御。' },
            { name: '龙腾九天', rarity: 'SS', type: 'FH', multiplier: 1, description: '九翼天龙在战斗中受到致命伤害时，体内龙族血统会使其原地复活，并回复一定的血量，每场战斗生效一次！技能11级后会随等级提升降低寿命消耗。重生需消耗最大寿命的30%，如当前寿命不足最大寿命的30%，则不发动重生。' },
            { name: '幽冥之焰', rarity: 'SS', type: 'PP', multiplier: 2.2, description: '对目标造成大量法术伤害，同时对敌方单位附加一个伤害加深的buff-幽冥之焰，buff持续1回合，伤害加深1%' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 2700, min: 2700, max: 4300 },
            strength: { current: 1350, min: 1350, max: 2650 },
            faith: { current: 1800, min: 1800, max: 3200 },
            agility: { current: 6300, min: 6300, max: 8700 },
            intelligence: { current: 6300, min: 6300, max: 8700 },
            mutated: false
        },
    },
    shengtian: {
        name: '圣天使',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/66a38e18d9c307b7e996e8e7.gif',
        skills: [
            { name: '战斗专注', rarity: 'B', type: 'N', multiplier: 1, description: '法术暴击上升' },
            { name: '灵力充盈', rarity: 'B', type: 'N', multiplier: 2, description: '速度上升' },
            { name: '法力灼烧', rarity: 'B', type: 'MAE', multiplier: 1.8, description: '单体法术攻击同时消耗目标法力和生命值' },
            { name: '圣灵济世', rarity: 'A', type: 'PH', multiplier: 1.5, description: '为友方目标及其周围6个单位恢复生命值' },
            { name: '法术精通', rarity: 'A', type: 'N', multiplier: 1, description: '法术攻击上升' },
            { name: '女神外壳', rarity: 'A', type: 'N', multiplier: 1, description: '物理和法术防御上升' },
            { name: '冥想', rarity: 'A', type: 'HL', multiplier: 0.01, description: '每回合法力值恢复' },
            { name: '智慧守护', rarity: 'S', type: 'SH', multiplier: 1, description: '用法力值抵消部分伤害' },
            { name: '智慧超群', rarity: 'S', type: 'N', multiplier: 0, description: '智力上升' },
            { name: '法术审判', rarity: 'SS', type: 'MA', multiplier: 1.8, description: '对敌方全体造成法术伤害并有几率附加禁止法术释放效果' },
            { name: '圣灵护体', rarity: 'S', type: 'PH', multiplier: 1.2, description: '每回合可恢复一定血量' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 3150, min: 3150, max: 4850 },
            strength: { current: 1350, min: 1350, max: 2650 },
            faith: { current: 1350, min: 1350, max: 2650 },
            agility: { current: 5400, min: 5400, max: 7600 },
            intelligence: { current: 6300, min: 6300, max: 8700 },
            mutated: false
        },
    },
    wucai: {
        name: '五彩鸟',
        rank: 'SSR',
        image: 'https://pic.imgdb.cn/item/66a38e18d9c307b7e996e902.gif',
        skills: [
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '有此天赋的生物寿命得到额外增长。被动技能，寿命上限增加。增加的寿命值与生物种类，技能等级有关。' },
            { name: '法术精通', rarity: 'B', type: 'N', multiplier: 1, description: '天生就是使用法术的奇才，如潜心修习法术，法术攻击力必然高于常人。被动技能，法术攻击力增加。' },
            { name: '灵力充盈', rarity: 'B', type: 'N', multiplier: 2, description: '此生物充满了灵力能量，速度大幅提升。' },
            { name: '生命祝福', rarity: 'B', type: 'N', multiplier: 1, description: '对于生命的赐予是自然最善意的祝福，拥有此种天赋的生物，生命值将大大提高。野兽较容易得到这类祝福。' },
            { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能,通过追随智慧与战斗的守护者,使此生物学会用法力值抵消一部分受到的伤害.可抵消的比例根据技能等级而定.' },
            { name: '天赐矫健', rarity: 'A', type: 'N', multiplier: 2, description: '提高自身物理和法术闪避。' },
            { name: '冥想', rarity: 'S', type: 'HL', multiplier: 0.01, description: '通过冥想，可以使自己的法力大大增加。被动技能，拥有此技能的人每次回合结束时（所有人行动完毕后），法力增加100,每场战斗结束后寿命额外减少1点.' },
            { name: '全面进化', rarity: 'S', type: 'N', multiplier: 2, description: '从神魔大战中存活下来的宠物们，极大的提高了自己的强壮、耐力和敏捷。' },
            { name: '智慧超群', rarity: 'S', type: 'N', multiplier: 2, description: '有此天赋的生物,定是百年一遇的智者，其智力必然高于寻常生物。被动技能，增加智力。' },
            { name: '鸟鸣', rarity: 'S', type: 'MA', multiplier: 2.5, description: '五彩鸟的尖叫声足以摧毁敌人的意志，对单个敌人造成法术伤害同时使敌人无法使用法术攻击，效果持续2回合，技能等级越高伤害越高。' },
            { name: '百鸟朝凤', rarity: 'SS', type: 'MA', multiplier: 2.5, description: '五彩鸟挥动翅膀召唤百鸟冲向敌人，对敌方全体单位造成伤害，敌人沉浸在鸟群中无法躲避。' },
            { name: '拯救', rarity: 'SS', type: 'PH', multiplier: 2, description: '五彩鸟牺牲自己的寿命拯救别人，恢复目标自身以及目标旁边随机一个目标百分比的血量。' },
            { name: '凤佑天下', rarity: 'SS', type: 'PD', multiplier: 2, description: '五彩鸟在场时，可替主人承受部分伤害，技能等级越高，承受伤害越高。' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 3600, min: 3600, max: 5400 },
            strength: { current: 1350, min: 1350, max: 2650 },
            faith: { current: 1800, min: 1800, max: 3200 },
            agility: { current: 5400, min: 5400, max: 7600 },
            intelligence: { current: 7200, min: 7200, max: 9800 },
            mutated: false
        },
    },
    bige: {
        name: '比格',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/66728d5cd9c307b7e95481d1.gif',
        skills: [
          { name: '生命祝福', rarity: 'B', type: 'N', multiplier: 1.5, description: '生命力上升' },
          { name: '长寿', rarity: 'B', type: 'N', multiplier: 1.2, description: '寿命上限上升' },
          { name: '天生蛮力', rarity: 'B', type: 'N', multiplier: 1, description: '攻击增加' },
          { name: '战斗韧性', rarity: 'B', type: 'N', multiplier: 1, description: '耐力及防御增加' },
          { name: '全面进化', rarity: 'B', type: 'N', multiplier: 1, description: '敏捷、耐力强壮增加' },
          { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '用法力抵挡部分伤害' },
          { name: '战斗狂热', rarity: 'A', type: 'N', multiplier: 2, description: '物理爆击上升' },
          { name: '天赐矫健', rarity: 'A', type: 'N', multiplier: 2, description: '物理和法术闪避上升' },
          { name: '高级强壮', rarity: 'S', type: 'N', multiplier: 2, description: '血量和耐力增加' },
          { name: '冥想', rarity: 'S', type: 'HL', multiplier: 0.01, description: '每回合法力值恢复' },
          { name: '睚眦必报', rarity: 'S', type: 'PP', multiplier: 2.2, description: '极小的怨仇也要报复！任何惹怒比格的妖怪都将受到中毒伤害。' },
          { name: '狂吼', rarity: 'S', type: 'PA', multiplier: 2.8, description: '比格仰天狂吼，声波对敌方6个目标造成巨大伤害，并有几率对目标造成破甲状态，破甲的几率及效果同召唤者力量有关。' },
          { name: '太平要术', rarity: 'SS', type: 'PH', multiplier: 2.5, description: '比格施展太平要术，对己方4个单位（十字）恢复大量生命值。' },
          { name: '拳击', rarity: 'SS', type: 'PA', multiplier: 3, description: '比格蓄力后对妖怪发起致命一击，对敌方单体目标造成大量物伤害，若敌方宠物倒地有几率将敌方宠物击飞出场。' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 7200, min: 7200, max: 9800 },
            strength: { current: 7200, min: 7200, max: 9800 },
            faith: { current: 2700, min: 2700, max: 4300 },
            agility: { current: 1800, min: 1800, max: 3200 },
            intelligence: { current: 1800, min: 1800, max: 3200 },
            mutated: false
        },
    },
    zhuque: {
        name: '朱雀雏鸟',
        rank: 'R',
        image: 'https://pic.imgdb.cn/item/6672cb90d9c307b7e9c89d5d.gif',
        skills: [
          { name: '生命祝福', rarity: 'B', type: 'N', multiplier: 1.5, description: '生命力上升' },
          { name: '烈焰祝福', rarity: 'B', type: 'N', multiplier: 3, description: '法术攻击上升' },
          { name: '法力灼烧', rarity: 'B', type: 'MAE', multiplier: 1.8, description: '单体法术攻击' },
          { name: '焰灵护体', rarity: 'B', type: 'PD', multiplier: 1.2, description: '法术防御上升' },
          { name: '长寿', rarity: 'B', type: 'N', multiplier: 2, description: '寿命上限上升' },
          { name: '浴火重生', rarity: 'B', type: 'FH', multiplier: 1, description: '复活并回复大量生命值' },
          { name: '智慧祷言', rarity: 'A', type: 'HL', multiplier: 0.01, description: '每回合自动回复一定法力值' },
          { name: '火焰甲胄', rarity: 'A', type: 'PD', multiplier: 1.2, description: '物理防御上升' },
          { name: '火焰迅捷', rarity: 'A', type: 'N', multiplier: 3, description: '速度上升' },
          { name: '火焰环绕', rarity: 'S', type: 'PP', multiplier: 1.8, description: '为友军增加一个可以对物理攻击进行反伤状态' },
          { name: '火魔爆', rarity: 'S', type: 'MA', multiplier: 2, description: '对敌方全体造成法术伤害并附带灼烧效果' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 1800, min: 1800, max: 3200 },
            strength: { current: 1800, min: 1800, max: 3200 },
            faith: { current: 3150, min: 3150, max: 4850 },
            agility: { current: 3600, min: 3600, max: 5400 },
            intelligence: { current: 5850, min: 5850, max: 8150 },
            mutated: false
        },
    },
    gangtie: {
        name: '魔铁机关人',
        rank: 'R',
        image: 'https://pic.imgdb.cn/item/6672cb90d9c307b7e9c89d12.webp',
        skills: [
          { name: '绝对防御', rarity: 'B', type: 'PD', multiplier: 1.2, description: '物理防御上升' },
          { name: '防护结界', rarity: 'B', type: 'PD', multiplier: 1.3, description: '法术防御上升' },
          { name: '致命喷射', rarity: 'B', type: 'PA', multiplier: 1.8, description: '对目标及其周围共6个目标造成物理伤害' },
          { name: '野性冲撞', rarity: 'B', type: 'PA', multiplier: 1.5, description: '单体攻击有几率令目标晕眩' },
          { name: '灵力充盈', rarity: 'B', type: 'HL', multiplier: 0.01, description: '每回合自动回复一定法力值' },
          { name: '三倍速冲击', rarity: 'B', type: 'PA', multiplier: 2, description: '对十字范围造成物理伤害并有几率附带混乱效果' },
          { name: '天生蛮力', rarity: 'A', type: 'N', multiplier: 2, description: '物理攻击上升' },
          { name: '生命祝福', rarity: 'A', type: 'PH', multiplier: 1.2, description: '生命上限上升' },
          { name: '钢筋铁骨', rarity: 'A', type: 'PD', multiplier: 1.5, description: '强壮上升，耐力上升，速度上升' },
          { name: '长寿', rarity: 'A', type: 'N', multiplier: 1, description: '寿命上限上升' },
          { name: '战斗狂热', rarity: 'S', type: 'N', multiplier: 2, description: '物理爆击上升' },
          { name: '刀刃旋风', rarity: 'S', type: 'PA', multiplier: 2.2, description: '对敌方全体造成物理伤害并有几率附带流血效果' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 4950, min: 4950, max: 7050 },
            strength: { current: 4950, min: 4950, max: 7050 },
            faith: { current: 1800, min: 1800, max: 3200 },
            agility: { current: 2700, min: 2700, max: 4300 },
            intelligence: { current: 1800, min: 1800, max: 3200 },
            mutated: false
        },
    },
    meiying: {
        name: '魅影骑士',
        rank: 'R',
        image: 'https://pic.imgdb.cn/item/6672cb90d9c307b7e9c89d3e.gif',
        skills: [
          { name: '魅影祝福', rarity: 'B', type: 'N', multiplier: 1.2, description: '物理攻击上升' },
          { name: '魅影之吻', rarity: 'B', type: 'PA', multiplier: 1.8, description: '对妖怪造成较高的物理伤害，并将妖怪的生命力转移给自己。' },
          { name: '魅影护体', rarity: 'B', type: 'PD', multiplier: 1.2, description: '法术防御上升' },
          { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '寿命上限上升' },
          { name: '生命祝福', rarity: 'A', type: 'PH', multiplier: 1.3, description: '生命上限上升' },
          { name: '魅影甲胄', rarity: 'A', type: 'PD', multiplier: 1.3, description: '物理防御上升' },
          { name: '迅捷之鳞', rarity: 'A', type: 'N', multiplier: 1.5, description: '速度上升' },
          { name: '嗜血魔爆', rarity: 'A', type: 'N', multiplier: 1.5, description: '物理爆击上升' },
          { name: '魅影之怒', rarity: 'S', type: 'PA', multiplier: 2.4, description: '对敌方全体造成物理伤害并有几率附带眩晕2回合效果' },
          { name: '高级援护', rarity: 'S', type: 'N', multiplier: 2, description: '帮目标队友承担伤害' },
          { name: '冥想', rarity: 'S', type: 'HL', multiplier: 0.01, description: '每回合法力值恢复' },
          { name: '黑暗魅影', rarity: 'S', type: 'N', multiplier: 1.5, description: '耐力上升，敏捷上升' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 3600, min: 3600, max: 5400 },
            strength: { current: 3600, min: 3600, max: 5400 },
            faith: { current: 900, min: 900, max: 2100 },
            agility: { current: 6300, min: 6300, max: 8700 },
            intelligence: { current: 2250, min: 2250, max: 3750 },
            mutated: false
        },
    },
    qingqiu: {
        name: '青丘之王',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/6672cb90d9c307b7e9c89d4b.webp',
        skills: [
          { name: '美腿术', rarity: 'B', type: 'N', multiplier: 1.2, description: '速度上升' },
          { name: '女神外壳', rarity: 'B', type: 'N', multiplier: 1.2, description: '双防上升' },
          { name: '法术精通', rarity: 'B', type: 'N', multiplier: 1.2, description: '法功上升' },
          { name: '妩媚身姿', rarity: 'B', type: 'N', multiplier: 1.2, description: '双闪上升' },
          { name: '生命祝福', rarity: 'A', type: 'PH', multiplier: 1.2, description: '生命值上升' },
          { name: '长寿', rarity: 'A', type: 'N', multiplier: 1, description: '寿命上升' },
          { name: '冥想', rarity: 'A', type: 'HL', multiplier: 0.01, description: '每回合法力恢复' },
          { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '用法力抵挡部分伤害' },
          { name: '法力灼烧', rarity: 'A', type: 'MAE', multiplier: 1.8, description: '单体法术攻击同时消费目标的生命和法力值' },
          { name: '全面进化', rarity: 'S', type: 'N', multiplier: 2, description: '耐力、敏捷、强壮上升' },
          { name: '极速领域', rarity: 'SS', type: 'N', multiplier: 3, description: '我方全体速度上升' },
          { name: '火魔爆', rarity: 'S', type: 'MA', multiplier: 2, description: '全体法术攻击并附带灼烧效果' },
          { name: '精气爆裂', rarity: 'S', type: 'MA', multiplier: 2.2, description: '对十字范围造成法术伤害，并同时消耗生命及法力' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 3150, min: 3150, max: 4850 },
            strength: { current: 1440, min: 1440, max: 2760 },
            faith: { current: 1440, min: 1440, max: 2760 },
            agility: { current: 6120, min: 6120, max: 8480 },
            intelligence: { current: 5850, min: 5850, max: 8150 },
            mutated: false
        },
    },
    bobo: {
        name: '波波熊',
        rank: 'R',
        image: 'https://pic.imgdb.cn/item/6672cb90d9c307b7e9c89d7b.gif',
        skills: [
          { name: '自然屏障', rarity: 'B', type: 'N', multiplier: 1, description: '法术防御上升' },
          { name: '野性赐福', rarity: 'B', type: 'N', multiplier: 1, description: '耐力上升' },
          { name: '天生灵性', rarity: 'A', type: 'HL', multiplier: 0.01, description: '每回合自动回复一定法力值' },
          { name: '嗜血狂暴', rarity: 'A', type: 'N', multiplier: 1, description: '物理爆击上升' },
          { name: '撕咬', rarity: 'A', type: 'PA', multiplier: 1.3, description: '对目标造成物理伤害' },
          { name: '天生蛮力', rarity: 'A', type: 'N', multiplier: 1, description: '物理攻击上升' },
          { name: '野性冲撞', rarity: 'S', type: 'PA', multiplier: 1.6, description: '单体攻击有几率令目标晕眩' },
          { name: '长寿', rarity: 'S', type: 'N', multiplier: 1, description: '寿命上限上升' },
          { name: '生命祝福', rarity: 'S', type: 'PH', multiplier: 1.2, description: '生命值上限上升' },
          { name: '利爪冲击', rarity: 'S', type: 'MA', multiplier: 2, description: '单体攻击' },
          { name: '三倍速冲击', rarity: 'S', type: 'PA', multiplier: 2.5, description: '对十字范围造成物理伤害并有几率附带混乱效果' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 2790, min: 2790, max: 4410 },
            strength: { current: 5220, min: 5220, max: 7380 },
            faith: { current: 990, min: 990, max: 2210 },
            agility: { current: 2160, min: 2160, max: 3640 },
            intelligence: { current: 990, min: 990, max: 2210 },
            mutated: false
        },
    },
    jinmao: {
        name: '锦毛灵鼠',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/6672cb90d9c307b7e9c89d2a.gif',
        skills: [
          { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '有此天赋的生物寿命得到额外增长。被动技能，寿命上限增加。增加的寿命值与生物种类，技能等级有关。' },
          { name: '法术牺牲', rarity: 'B', type: 'MA', multiplier: 2, description: '强力法术攻击' },
          { name: '魔性毛皮', rarity: 'B', type: 'PD', multiplier: 1.1, description: '法术防御上升' },
          { name: '全面进化', rarity: 'A', type: 'N', multiplier: 2, description: '耐力上升、敏捷上升、强壮上升' },
          { name: '神出鬼没', rarity: 'A', type: 'N', multiplier: 2, description: '灵鼠夜间行动时可大幅提升双闪' },
          { name: '冥想', rarity: 'A', type: 'HL', multiplier: 0.01, description: '每回合法力值恢复' },
          { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能,通过追随智慧与战斗的守护者,使此生物学会用法力值抵消一部分受到的伤害.可抵消的比例根据技能等级而定.' },
          { name: '死亡凝视', rarity: 'S', type: 'PP', multiplier: 2, description: '灵鼠被凝视时可大幅提升毒性伤害。' },
          { name: '急中生智', rarity: 'SS', type: 'HL', multiplier: 0.4, description: '当灵鼠受到伤害时，会恢复一定比例的法力值，回复法力值的比例同技能等级有关' },
          { name: '投鼠忌器', rarity: 'SS', type: 'PP', multiplier: 2.5, description: '灵鼠释放灵气笼罩全身，即使强大的妖怪也会有所顾忌。击中灵鼠者会被虚弱，虚弱持续回合同技能等级有关' },
          { name: '趁虚而入', rarity: 'SS', type: 'MA', multiplier: 2.2, description: '灵鼠善于找寻时机针对妖怪的弱点发起攻击，对敌方6单位目标造成大量法术伤害。当敌方身上有虚弱效果时伤害加倍' },
          { name: '万籁俱寂', rarity: 'SS', type: 'MA', multiplier: 2.4, description: '灵鼠将积蓄灵气全然外放笼罩全场，让一切施法的妖怪归于寂静。对敌方全体目标造成法术伤害，有几率使敌方无法使用任何技能。' },
          { name: '子虚乌有', rarity: 'SS', type: 'FH', multiplier: 1, description: '灵鼠可迅速将自己和己方任意一个单位遁入虚无，虚无状态下不受任何攻击，自身使用技能、物品等将自动解除虚无状态。' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 2700, min: 2700, max: 4300 },
            strength: { current: 2700, min: 2700, max: 4300 },
            faith: { current: 4500, min: 4500, max: 6500 },
            agility: { current: 7200, min: 7200, max: 9800 },
            intelligence: { current: 3600, min: 3600, max: 5400 },
            mutated: false
        },
    },
    yanzhi: {
        name: '胭脂',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/66542639d9c307b7e92c235d.gif',
        skills: [
            { name: '法术精通', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，法术攻击上升' },
            { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，每回合法力值恢复' },
            { name: '万法归宗', rarity: 'B', type: 'N', multiplier: 2, description: '被动技能，法术暴击上升' },
            { name: '仙风道骨', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、强壮大幅提升。' },
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，寿命上限上升' },
            { name: '法力吸取（法术）', rarity: 'B', type: 'MAE', multiplier: 1.4, description: '主动技能，对目标造成法术伤害并吸取一定得法力值' },
            { name: '女神外壳', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，物理和法术防御上升。' },
            { name: '全面进化', rarity: 'S', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、强壮上升' },
            { name: '妩媚身姿', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，身型婀娜。提高自身物理和法术闪避。' },
            { name: '智慧守护', rarity: 'S', type: 'SH', multiplier: 1, description: '被动技能，通过追随智慧与战斗的守护者，使此生物学会用法力值抵消一部分受到的伤害。可抵消的比例根据技能等级而定。' },
            { name: '月之祝福', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、智力上升' },
            { name: '硕果累累', rarity: 'SS', type: 'MA', multiplier: 1.6, description: '主动技能，胭脂抖了抖身，漫天果实坠落，对妖怪造成法术伤害，' },
            { name: '琼珠玉液', rarity: 'SS', type: 'JK', multiplier: 1.2, description: '主动技能，胭脂小手一挥，有概率解除我方部分减益效果。' },
            { name: '灼若旭日', rarity: 'SS', type: 'MA', multiplier: 2.5, description: '主动技能，胭脂单手投掷石榴花给单体目标造成法术伤害。' },
            { name: '春风徐徐', rarity: 'SS', type: 'JK', multiplier: 0.01, description: '被动技能，胭脂每回合有概率生成霸体护盾，护盾可免疫部分负面状态（破甲，减攻，迟缓，眩晕，中毒，灼烧，流血，混乱，冻伤，沉睡，沉默，虚弱，冷嘲热讽），成功生成时，将消耗一定的寿命。' },
            { name: '榴花如丹', rarity: 'SS', type: 'N', multiplier: 3, description: '被动技能，榴花如丹红似火，源源不断为胭脂永久提升耐力。' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 4500, min: 4500, max: 8700 },
            strength: { current: 2250, min: 2250, max: 3750 },
            faith: { current: 2250, min: 2250, max: 3750 },
            agility: { current: 2500, min: 2500, max: 4300 },
            intelligence: { current: 5250, min: 5250, max: 10350 },
            mutated: false
        },
    },
    zhanshen: {
        name: '战神阿毛',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/665c7002d9c307b7e9897757.gif',
        skills: [
            { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，每回合法力值恢复。' },
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，有此天赋的生物寿命得到额外增长。被动技能，寿命上限增加。增加的寿命值与生物种类，技能等级有关。' },
            { name: '破军神力', rarity: 'B', type: 'N', multiplier: 2, description: '被动技能，宠物获得大量的物理攻击力和法术攻击力。' },
            { name: '黄金战甲', rarity: 'B', type: 'N', multiplier: 2, description: '被动技能，身着坚不可摧的的黄金战甲。物理防御、法术防御及生命大幅度上升。' },
            { name: '元素力量（宽容）', rarity: 'A', type: 'PD', multiplier: 1.5, description: '主动技能，减免受到群体攻击的伤害。' },
            { name: '神威之怒', rarity: 'A', type: 'N', multiplier: 3, description: '被动技能，此技能可使宠物获得大量的物理攻击力。' },
            { name: '法力吸取（物理）', rarity: 'A', type: 'PAE', multiplier: 1.5, description: '主动技能，单体物理攻击。' },
            { name: '离子护盾', rarity: 'S', type: 'PD', multiplier: 1.2, description: '主动技能，被离子护盾包围。' },
            { name: '刮痧刃（17式）', rarity: 'S', type: 'PA', multiplier: 2, description: '主动技能，战神阿毛引以为傲的刀法，给予敌方沉痛打击。' },
            { name: '追日', rarity: 'S', type: 'N', multiplier: 1, description: '被动技能，速度大幅度提升。' },
            { name: '刮痧刃（奥义）', rarity: 'SS', type: 'PA', multiplier: 2.4, description: '主动技能，刮痧刃最高境界，手中无刃心中也无刃，但可召唤山石从天而降！使妖怪无法躲藏（必中）！对敌方造成大量物理伤害，' },
            { name: '誓死守护', rarity: 'SS', type: 'N', multiplier: 2, description: '被动技能，阿毛在场时，可替主人承受部分伤害，技能等级越高，承受伤害越高。' }
        ],
        qualities: {
            endurance: { current: 4500, min: 4500, max: 6500 },
            strength: { current: 6750, min: 6750, max: 9250 },
            faith: { current: 1800, min: 1800, max: 3200 },
            agility: { current: 4950, min: 4950, max: 7050 },
            intelligence: { current: 1350, min: 1350, max: 2650 },
            mutated: false
        }
    },
    jinmin: {
        name: '金珉奎',
        rank: 'SSR',
        image: 'https://pic.imgdb.cn/item/666af8afd9c307b7e90e4638.gif',
        skills: [
            { name: '唯爱结城（法攻）', rarity: 'SS', type: 'MA', multiplier: 2.5, description: '主动技能，如果此生只能爱一人，她的姓，必须是结城。' },
            { name: '跨国相遇（被动）', rarity: 'A', type: 'JK', multiplier: 0.01, description: '被动技能，在一个异国他乡的采访中，命运让他们相遇，从此开始了一段浪漫的爱情故事。' },
            { name: '意外之事（被动）', rarity: 'B', type: 'N', multiplier: 2, description: '被动技能，一次意外的车祸让他们被困在一个偏远的小镇，爱情在危险中悄然萌芽。' },
            { name: '隐瞒身份（被动）', rarity: 'B', type: 'N', multiplier: 2, description: '被动技能，他隐藏了自己的明星身份，只为在她面前做个普通人，享受片刻的平凡。' },
            { name: '温柔一面（治疗）', rarity: 'S', type: 'PH', multiplier: 2, description: '主动技能，她在后台看到了他温柔的一面，这让她对他有了新的认识。' },
            { name: '共同依赖（防御）', rarity: 'S', type: 'PD', multiplier: 1.2, description: '主动技能，在偏远小镇的日子里，他们面对未知的危险，渐渐彼此依赖。' },
            { name: '发现真心（回蓝）', rarity: 'A', type: 'HL', multiplier: 0.2, description: '主动技能，在谎言揭穿后，她终于看清了他的真心，两人决定坦然面对所有挑战。' },
            { name: '日记重现（被动）', rarity: 'A', type: 'N', multiplier: 1.5, description: '被动技能，一本旧日记让她找回了失去的记忆，重新记起了他们之间的点点滴滴。' },
            { name: '心灵触动（被动）', rarity: 'SS', type: 'FH', multiplier: 1, description: '被动技能，看着他的真心付出，她的心灵被深深触动，爱情在心中萌芽。' },
            { name: '保护她（物攻）', rarity: 'S', type: 'PA', multiplier: 2.5, description: '主动技能，他在关键时刻挺身而出，保护她免受伤害，展现了真正的男子汉气概。' },
            { name: '继父威胁（被动）', rarity: 'B', type: 'N', multiplier: 0, description: '被动技能，继父的威胁不断升级，他挺身而出，保护她不受伤害。' },
            { name: '记忆恢复（治疗）', rarity: 'SS', type: 'PH', multiplier: 1.2, description: '主动技能，在危机中，她的记忆终于完全恢复，找回了曾经的甜蜜时光。' },
            { name: '法律制裁（施毒）', rarity: 'B', type: 'PP', multiplier: 1.6, description: '主动技能，他揭穿了继父的阴谋，让继父受到应有的法律制裁。' },
            { name: '重返工作（被动）', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，她重返《Fantasy!》杂志，继续她的事业，与他一起迎接未来的挑战。' },
            { name: '幸福结局（被动）', rarity: 'SS', type: 'N', multiplier: 3, description: '被动技能，经历了无数波折，他们最终找到了真正的幸福，成为彼此生命中最重要的存在。' },
            { name: '守护夏奈（守护）', rarity: 'SS', type: 'SH', multiplier: 1.2, description: '主动技能，如果此生只能守护一人，她的名，必须是夏奈。' }
        ],
        qualities: {
            endurance: { current: 4500, min: 4500, max: 6500 },
            strength: { current: 6500, min: 6500, max: 9800 },
            faith: { current: 1800, min: 1800, max: 3200 },
            agility: { current: 4950, min: 4950, max: 7050 },
            intelligence: { current: 3350, min: 3350, max: 6150 },
            mutated: false
        }
    },
    liguo: {
        name: 'Guolin·Li',
        rank: 'SSR',
        image: 'https://pic.imgdb.cn/item/66be21a1d9c307b7e9cc9c98.jpg',
        skills: [
        { name: '一见倾心（法攻）', rarity: 'SS', type: 'MA', multiplier: 2, description: '主动技能，李国麟第一次在商法课上看到夏奈，心跳加速，仿佛世界只剩下她一人。' },
        { name: '球场相遇（被动）', rarity: 'A', type: 'N', multiplier: 1, description: '被动技能，夏奈被朋友拉去看篮球赛，意外发现李国麟在球场上的魅力，开始对这个憨厚的大男孩产生兴趣。' },
        { name: '暗恋时光（被动）', rarity: 'B', type: 'N', multiplier: 1.2, description: '被动技能，李国麟默默关注夏奈，却不敢表白，只能在远处守护她。' },
        { name: '商法难题（被动）', rarity: 'B', type: 'N', multiplier: 1.2, description: '被动技能，李国麟为了接近夏奈，努力学习商法，虽然笨拙但充满诚意。' },
        { name: '温柔帮助（治疗）', rarity: 'S', type: 'PH', multiplier: 2, description: '主动技能，夏奈发现李国麟在商法上的困难，主动提出帮助，两人开始了更多接触。' },
        { name: '球场英雄（防御）', rarity: 'S', type: 'PD', multiplier: 1.2, description: '主动技能，李国麟在关键比赛中表现出色，赢得全场欢呼，夏奈也为他骄傲。' },
        { name: '真心告白（回蓝）', rarity: 'A', type: 'HL', multiplier: 0.2, description: '主动技能，在一次篮球赛后，李国麟鼓起勇气向夏奈表白，虽然笨拙但充满真诚。' },
        { name: '意外受伤（被动）', rarity: 'A', type: 'N', multiplier: 1.5, description: '被动技能，李国麟在比赛中受伤，夏奈细心照顾，两人感情加深。' },
        { name: '心灵共鸣（被动）', rarity: 'SS', type: 'JK', multiplier: 0.02, description: '被动技能，夏奈发现李国麟的温柔体贴，渐渐被他的真心打动。' },
        { name: '挺身而出（物攻）', rarity: 'S', type: 'PA', multiplier: 2.75, description: '主动技能，夏奈遇到麻烦，李国麟挺身而出保护她，展现了男子气概。' },
        { name: '家庭阻挠（被动）', rarity: 'B', type: 'N', multiplier: 1.5, description: '被动技能，夏奈家人反对她与李国麟交往，两人面临重重阻碍。' },
        { name: '坚定信念（治疗）', rarity: 'SS', type: 'PH', multiplier: 1.2, description: '主动技能，面对困难，李国麟和夏奈彼此鼓励，坚定了在一起的决心。' },
        { name: '篮球梦想（施毒）', rarity: 'B', type: 'N', multiplier: 1.6, description: '主动技能，李国麟为了追随篮球梦想，必须做出艰难的选择。' },
        { name: '事业起步（被动）', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，夏奈在娱乐行业找到了工作，开始了自己的职业生涯。' },
        { name: '幸福未来（被动）', rarity: 'SS', type: 'FH', multiplier: 1, description: '被动技能，经历了种种考验，李国麟和夏奈最终携手共度未来，找到了真正的幸福。' },
        { name: '守护夏奈（守护）', rarity: 'SS', type: 'SH', multiplier: 1.2, description: '主动技能，李国麟发誓要用一生的时间守护夏奈，给她最温暖的爱。' }
        ],
        qualities: {
            endurance: { current: 4500, min: 4500, max: 7120 },
            strength: { current: 8000, min: 8000, max: 12000 },
            faith: { current: 3600, min: 3600, max: 5400 },
            agility: { current: 3150, min: 3150, max: 4200 },
            intelligence: { current: 1300, min: 1300, max: 3200 },
            mutated: false
        }
    },
    tengshe: {
        name: '腾蛇',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/665c7002d9c307b7e98976fe.gif',
        skills: [
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，寿命上升' },
            { name: '战斗专注', rarity: 'B', type: 'N', multiplier: 2, description: '被动技能，法术暴击上升' },
            { name: '法术精通', rarity: 'B', type: 'N', multiplier: 2, description: '被动技能，法功上升' },
            { name: '生命祝福', rarity: 'B', type: 'N', multiplier: 1.5, description: '被动技能，生命值上升' },
            { name: '美腿术', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，速度上升' },
            { name: '女神外壳', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，物理和法术防御上升' },
            { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能，法力值抵消一部分受到的伤害' },
            { name: '全面进化', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，敏捷、耐力强壮增加' },
            { name: '腾蛇突袭', rarity: 'S', type: 'MA', multiplier: 2, description: '主动技能，腾蛇对妖怪进行突袭，对敌方单体目标造成大量法术伤害。' },
            { name: '火焰反噬', rarity: 'S', type: 'PD', multiplier: 1.2, description: '主动技能，腾蛇可以借助火之灵的力量将火焰精华加诸于己方，增加护盾强效。' },
            { name: '高级冥想', rarity: 'SS', type: 'HL', multiplier: 0.5, description: '主动技能，通过冥想，恢复自身大量法力。' },
            { name: '红莲业火', rarity: 'SS', type: 'MA', multiplier: 2, description: '主动技能，腾蛇施放红莲业火对敌方报复，对敌方全体目标造成巨大法术伤害。' },
            { name: '幽冥剧毒', rarity: 'SS', type: 'PP', multiplier: 3.5, description: '主动技能，腾蛇施放幽冥剧毒，对敌方单体目标造成烈性毒药伤害。' }
        ],
        qualities: {
            endurance: { current: 2700, min: 2700, max: 4300 },
            strength: { current: 900, min: 900, max: 2100 },
            faith: { current: 2700, min: 2700, max: 4300 },
            agility: { current: 6750, min: 6750, max: 9250 },
            intelligence: { current: 6750, min: 6750, max: 9250 },
            mutated: false
        }
    },
    zhulin: {
        name: '竹林隐士',
        rank: 'SSR',
        image: 'https://pic.imgdb.cn/item/665433e8d9c307b7e93ac7ab.gif',
        skills: [
        { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，有此天赋的生物寿命得到额外增长。被动技能，寿命上限增加。增加的寿命值与生物种类，技能等级有关' },
        { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，每回合法力值恢复' },
        { name: '意念凝聚', rarity: 'B', type: 'N', multiplier: 1.4, description: '被动技能，竹林隐士集中意念，攻击可大幅度忽略妖怪的物理闪避和物理防御' },
        { name: '防护结界', rarity: 'B', type: 'PD', multiplier: 1.5, description: '主动技能，护盾强效上升' },
        { name: '仙风道骨', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、强壮大幅提升' },
        { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能，通过追随智慧与战斗的守护者，使此生物学会用法力值抵消一部分受到的伤害。可抵消的比例根据技能等级而定' },
        { name: '离子护盾', rarity: 'A', type: 'PD', multiplier: 2, description: '主动技能，护盾强效更加稳固。' },
        { name: '神威之怒', rarity: 'S', type: 'N', multiplier: 3, description: '被动技能，此技能可使宠物获得大量的物理攻击力' },
        { name: '雷魔爆', rarity: 'S', type: 'PA', multiplier: 2.2, description: '主动技能，群体物理攻击，对敌全体造成物理伤害并有几率附加破甲效果' },
        { name: '高能电弧', rarity: 'S', type: 'PH', multiplier: 1.2, description: '主动技能，竹林隐士献祭法力回复一定生命值' },
        { name: '雷霆万钧', rarity: 'SS', type: 'MA', multiplier: 1.5, description: '主动技能，竹林隐士以雷霆万钧之速对敌方单体目标造成毁灭性的一击！' },
        { name: '静电屏蔽', rarity: 'SS', type: 'JK', multiplier: 0.01, description: '主动技能，竹林隐士有几率使自身免于一切伤害。' },
        { name: '怒意能场', rarity: 'SS', type: 'N', multiplier: 3, description: '被动技能，竹林隐士每成功闪避一次敌方的攻击，就会将自己的怒意转化为自己的物理攻击力，怒意状态最大可叠加三次，被击中则蓄能状态在本回合末结束' },
        { name: '离子风暴', rarity: 'SS', type: 'PA', multiplier: 3.5, description: '主动技能，竹林隐士将布满雷电的斗笠扔向妖怪，对敌方全体造成极大物理伤害。' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 2700, min: 2700, max: 4300 },
            strength: { current: 9000, min: 9000, max: 12000 },
            faith: { current: 3600, min: 3600, max: 5400 },
            agility: { current: 3600, min: 3600, max: 5400 },
            intelligence: { current: 1800, min: 1800, max: 3200 },
            mutated: false
        }
    },
    qingmou: {
        name: '青眸白虎',
        rank: 'SSR',
        image: 'https://pic.imgdb.cn/item/665433e7d9c307b7e93ac709.gif',
        skills: [
        { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，有此天赋的生物寿命得到额外增长。被动技能，寿命上限增加。增加的寿命值与生物种类，技能等级有关' },
        { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，每回合法力值恢复' },
        { name: '法力吸取（物理）', rarity: 'B', type: 'PAE', multiplier: 1.5, description: '主动技能，单体物理攻击。' },
        { name: '元素力量（两仪）', rarity: 'B', type: 'N', multiplier: 2, description: '被动技能，白虎身着坚不可摧的的两仪战甲，物理防御、法术防御大幅度上升' },
        { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能，被动技能,通过追随智慧与战斗的守护者,使此生物学会用法力值抵消一部分受到的伤害.可抵消的比例根据技能等级而定' },
        { name: '元素力量（赐福）', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，智力及强壮上升' },
        { name: '天神祝福（被动）', rarity: 'A', type: 'N', multiplier: 3, description: '被动技能，法术攻击力大幅提升' },
        { name: '元素力量（四相）', rarity: 'S', type: 'MA', multiplier: 1.8, description: '主动技能，白虎驭四相之力对敌方施加无法躲避的法术攻击！' },
        { name: '虚无', rarity: 'S', type: 'N', multiplier: 1, description: '被动技能，速度大幅度提升' },
        { name: '元素力量（宽容）', rarity: 'S', type: 'PD', multiplier: 1.2, description: '主动技能，被动技能，减免受到敌方攻击的伤害' },
        { name: '元素力量（结界）', rarity: 'SS', type: 'PD', multiplier: 2, description: '主动技能，使自身免疫大量伤害' },
        { name: '烈光剑阵', rarity: 'SS', type: 'MAE', multiplier: 2.8, description: '主动技能，白虎用法力凝聚成无数灼热的光剑，对敌方横造成巨大法术伤害。' },
        { name: '元素力量（不屈）', rarity: 'SS', type: 'JK', multiplier: 0.05, description: '主动技能，白虎在最勇猛的战士体内封印不屈的战魂印记，激发其斗志，使其在战斗中时刻保持清醒的神智！大幅增加治疗效果。' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 5850, min: 5850, max: 8150 },
            strength: { current: 1800, min: 1800, max: 3200 },
            faith: { current: 5400, min: 5400, max: 7600 },
            agility: { current: 6300, min: 6300, max: 8700 },
            intelligence: { current: 1800, min: 1800, max: 3200 },
            mutated: false
        }
    },
    jingjue: {
        name: '净角神将',
        rank: 'R',
        image: 'https://pic.imgdb.cn/item/665433e8d9c307b7e93ac76d.gif',
        skills: [
        { name: '天生蛮力', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，物理攻击上升' },
        { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，每回合法力值恢复' },
        { name: '战斗狂热', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，物理爆击、速度上升' },
        { name: '全面进化', rarity: 'S', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、强壮上升' },
        { name: '仙风道骨', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、强壮大幅提升' },
        { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，寿命上限上升' },
        { name: '防护结界', rarity: 'B', type: 'PD', multiplier: 1.2, description: '主动技能，格挡能力上升' },
        { name: '黄金战甲', rarity: 'B', type: 'PD', multiplier: 1.5, description: '主动技能，身着坚不可摧的的黄金战甲。格挡能力大幅度上升' },
        { name: '法力吸取（物理）', rarity: 'B', type: 'PAE', multiplier: 1.5, description: '主动技能，单体物理攻击' },
        { name: '横扫千军', rarity: 'SS', type: 'PA', multiplier: 2, description: '主动技能，净角神将利用手中长刀横扫妖怪，对敌方全体造成物理伤害' },
        { name: '所向披靡', rarity: 'SS', type: 'N', multiplier: 1, description: '被动技能，净角神将可以吸取灵域力量为自己所用，永久增加自身物理攻击力' },
        { name: '灵域行者', rarity: 'SS', type: 'N', multiplier: 2, description: '被动技能，净角神将进入灵域可以快速穿梭于时空之中，增加自身速度' },
        { name: '饮鸩止渴', rarity: 'S', type: 'PP', multiplier: 5, description: '主动技能，以毒作引突破身体极限，净角神将给妖怪附加跗骨之毒，毒性威震四野' },
        { name: '灵域处刑', rarity: 'SS', type: 'PA', multiplier: 3.5, description: '主动技能，净角神将可以观察到妖怪灵魂深处的弱点，对敌方单体造成物理伤害' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 2750, min: 2750, max: 4850 },
            strength: { current: 5000, min: 5000, max: 9800 },
            faith: { current: 2250, min: 2250, max: 3750 },
            agility: { current: 4500, min: 4500, max: 8700 },
            intelligence: { current: 2250, min: 2250, max: 3750 },
            mutated: false
        }
    },
    shanggu: {
        name: '上古神藤',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/665433e8d9c307b7e93ac758.gif',
        skills: [
        { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，有此天赋的生物寿命得到额外增长，被动技能，寿命上限增加，增加的寿命值与生物种类，技能等级有关' },
        { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，每回合法力值恢复' },
        { name: '风仪玉立', rarity: 'B', type: 'N', multiplier: 2, description: '被动技能，上古神藤速度大幅提升' },
        { name: '高级援护', rarity: 'B', type: 'N', multiplier: 2, description: '援护己方单一目标' },
        { name: '盘根错节', rarity: 'A', type: 'PA', multiplier: 1.4, description: '主动技能，将自身力量注入大地，大地之子将以树枝穿刺的方法对妖怪造成物理伤害' },
        { name: '物华天宝', rarity: 'A', type: 'N', multiplier: 3, description: '被动技能，上古神藤经年累月的吸收日月精华成为天地间一奇物，强壮、耐力、敏捷大幅度提升' },
        { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能，被动技能,通过追随智慧与战斗的守护者,使此生物学会用法力值抵消一部分受到的伤害.可抵消的比例根据技能等级而定' },
        { name: '破军神力', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，被动技能，在破军星的庇佑下，人类可获得强大的战力，会此技能可使宠物获得大量的物理攻击力和法术攻击力' },
        { name: '蚍蜉撼树', rarity: 'S', type: 'N', multiplier: 2, description: '被动技能，妖怪的力量在上古神藤前如同蚍蜉撼树。借助大地守护者的力量，在受到群体攻击时，减免部分伤害，减免的额度与技能等级有关' },
        { name: '仁者无敌', rarity: 'SS', type: 'PH', multiplier: 2, description: '主动技能，仁慈的强者通过宽恕妖怪亦可通往无敌之路。' },
        { name: '木魔爆', rarity: 'SS', type: 'PA', multiplier: 1.8, description: '主动技能，召唤木之灵对敌方全体目标造成巨大伤害' },
        { name: '一叶障目', rarity: 'SS', type: 'PA', multiplier: 2.5, description: '主动技能，上古神藤神力凝聚的一片树叶，对单个妖怪造成大量伤害' },
        { name: '洞天福地', rarity: 'SS', type: 'FH', multiplier: 1, description: '主动技能，上古神藤通过神力凝聚的洞天福地空间，大幅增加自身生存能力' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 5850, min: 5850, max: 8150 },
            strength: { current: 4500, min: 4500, max: 6500 },
            faith: { current: 3600, min: 3600, max: 5400 },
            agility: { current: 4500, min: 4500, max: 6500 },
            intelligence: { current: 2700, min: 2700, max: 4300 },
            mutated: false
        }
    },
    guhe: {
        name: '古河锦鲤',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/66542638d9c307b7e92c22fd.gif',
        skills: [
            { name: '惊涛骇浪', rarity: 'B', type: 'PA', multiplier: 1.5, description: '主动技能，对十字范围造成物理伤害' },
            { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，&nbsp;每回合法力值恢复' },
            { name: '如鱼得水', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，水中的锦鲤能力有所加强，物理攻击和法术攻击上升' },
            { name: '天赐矫健', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，物理和法术闪避上升' },
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，有此天赋的生物寿命得到额外增长。被动技能，寿命上限增加。增加的寿命值与生物种类，技能等级有关。' },
            { name: '法力吸取（法术）', rarity: 'B', type: 'MAE', multiplier: 1.6, description: '主动技能，对目标造成法术伤害' },
            { name: '全面进化', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，从神魔大战中存活下来的宠物们，极大的提高了自己的强壮、耐力和敏捷。' },
            { name: '水魔爆', rarity: 'S', type: 'PA', multiplier: 2.2, description: '主动技能，对敌全体造成物理伤害' },
            { name: '相濡以沫', rarity: 'S', type: 'FH', multiplier: 1, description: '主动技能，传于危难之时，锦鲤会避免敌人的致命攻击！' },
            { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能，法术攻击上升' },
            { name: '借花献佛', rarity: 'SS', type: 'PH', multiplier: 2, description: '被动技能，上善若水，水善利万物而不争。当锦鲤受到伤害时，会将自身的受到的伤害值转化为对我方队友的治疗，治疗范围为以双鲤中心的十字范围队友。转化伤害的比例随技能等级提升。' },
            { name: '锦鲤庇佑', rarity: 'SS', type: 'PD', multiplier: 1.2, description: '主动技能，传说锦鲤受莫大吉运庇佑，格挡能力提升。' },
            { name: '梦幻泡影', rarity: 'SS', type: 'MA', multiplier: 2.2, description: '主动技能，锦鲤凝结法术泡沫攻击敌方，造成大量法术伤害。' },
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 3600, min: 3600, max: 6500 },
            strength: { current: 4500, min: 4500, max: 6500 },
            faith: { current: 3600, min: 3600, max: 5400 },
            agility: { current: 5400, min: 5400, max: 7600 },
            intelligence: { current: 3600, min: 3600, max: 5400 },
            mutated: false
        }
    },
    banlan: {
        name: '斑斓公主',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/665425a9d9c307b7e92b8c0b.gif',
        skills: [
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，有此天赋的生物寿命得到额外增长，被动技能，寿命上限增加，增加的寿命值与生物种类，技能等级有关' },
            { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '&nbsp;被动技能，每回合法力值恢复' },
            { name: '三倍速冲击', rarity: 'B', type: 'PA', multiplier: 3, description: '主动技能，以三倍速度对目标发动攻击，以目标为中心的十字范围内所有其他目标都会被冲击的余波刮伤。' },
            { name: '防护结界', rarity: 'B', type: 'PD', multiplier: 1.5, description: '主动技能，此生物具有极高的格挡能力，可大大降低妖怪造成的伤害。' },
            { name: '神威之怒', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，此技能可使宠物获得大量的物理攻击力。' },
            { name: '仙风道骨', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、强壮大幅提升。' },
            { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能，通过追随智慧与战斗的守护者,使此生物学会用法力值抵消一部分受到的伤害.可抵消的比例根据技能等级而定。' },
            { name: '元素守护（复仇）', rarity: 'S', type: 'MA', multiplier: 2.5, description: '被动技能，拥有此技能的生物,任何针对敌方的攻击都可能触发"元素复仇效果".元素复仇效果可使攻击者释放一种元素类法术技能。' },
            { name: '土魔爆', rarity: 'S', type: 'PA', multiplier: 2, description: '主动技能，召唤土之灵对敌方全体目标造成巨大伤害，土之灵产生的伤害需以召唤者的物理攻击为基础。召唤土之灵需以自身寿命作为祭献。' },
            { name: '虎视眈眈', rarity: 'SS', type: 'N', multiplier: 0, description: '被动技能，斑斓公主虎视眈眈盯着妖怪，积蓄力量，如斑斓公主本回合没有使用主动技能，则回合结束时物攻和物理暴击率上升，此状态最大叠加两次，增加值和技能等级有关。' },
            { name: '如虎添翼', rarity: 'SS', type: 'JK', multiplier: 0.02, description: '被动技能，斑斓公主和主人出场时不会受到沉默、眩晕、混乱、睡眠的影响。免疫几率和技能等级有关。' },
            { name: '生龙活虎', rarity: 'SS', type: 'N', multiplier: 0, description: '被动技能，每三回合有几率清除身上的部分异常状态，清除几率和技能等级有关。' },
            { name: '虎阵龙威', rarity: 'SS', type: 'MA', multiplier: 2.5, description: '主动技能，对敌方全体造成巨量法术伤害。' },
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 2700, min: 2700, max: 4300 },
            strength: { current: 7650, min: 7650, max: 10350 },
            faith: { current: 2700, min: 2700, max: 4300 },
            agility: { current: 5400, min: 5400, max: 7600 },
            intelligence: { current: 2700, min: 2700, max: 4300 },
            mutated: false
        }
    },
    juling: {
        name: '巨灵战姬',
        rank: 'SR',
        image: 'https://pic.imgdb.cn/item/665433e8d9c307b7e93ac7e1.gif',
        skills: [
        { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，有此天赋的生物寿命得到额外增长。被动技能，寿命上限增加。增加的寿命值与生物种类，技能等级有关' },
        { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，每回合法力值恢复' },
        { name: '黄金战甲', rarity: 'B', type: 'N', multiplier: 3, description: '被动技能，身着坚不可摧的的黄金战甲。物理防御、法术防御及生命大幅度上升' },
        { name: '牛气冲天', rarity: 'B', type: 'PA', multiplier: 2.2, description: '主动技能，单体攻击有几率令目标晕眩' },
        { name: '魔灵诀心', rarity: 'A', type: 'N', multiplier: 3, description: '被动技能，物理攻击力和法术攻击力大幅提升' },
        { name: '高级强壮', rarity: 'A', type: 'N', multiplier: 3, description: '被动技能，耐力及生命值上限上升' },
        { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能，通过追随智慧与战斗的守护者，使此生物学会用法力值抵消一部分受到的伤害。可抵消的比例根据技能等级而定' },
        { name: '风魔爆', rarity: 'S', type: 'MA', multiplier: 1.8, description: '主动技能，对敌方全体造成法术伤害' },
        { name: '岳镇渊渟', rarity: 'S', type: 'N', multiplier: 3, description: '被动技能，巨灵战姬有无可比拟的防御力。减免战斗中前三回合所受物理伤害，减免比例随技能等级提高而提高' },
        { name: '元素力量（宽容）', rarity: 'S', type: 'PD', multiplier: 1.5, description: '主动技能，减免受到的伤害' },
        { name: '舍生取义', rarity: 'SS', type: 'TC', multiplier: 2.5, description: '主动技能，巨灵战姬借助上古巨灵神之威，牺牲自身一定生命值，对妖怪施加烈性真实伤害' },
        { name: '霸体援护', rarity: 'SS', type: 'PD', multiplier: 1.5, description: '主动技能，巨灵擅长在战场上保护队友，一回合内处于霸体状态' },
        { name: '激浊扬清', rarity: 'SS', type: 'JK', multiplier: 0.01, description: '被动技能，巨灵擅长清除队友的负面状态，驱散的概率视技能等级而定' },
        { name: '热血图腾', rarity: 'SS', type: 'N', multiplier: 5, description: '被动技能，巨灵战姬在场时我方斗志昂扬，极大增加我方全体生命上限值，效果随技能等级提高而提高' }
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 9000, min: 9000, max: 12000 },
            strength: { current: 2700, min: 2700, max: 4300 },
            faith: { current: 5400, min: 5400, max: 7600 },
            agility: { current: 2250, min: 2250, max: 3750 },
            intelligence: { current: 1800, min: 1800, max: 3200 },
            mutated: false
        }
    },
    aoshi: {
        name: '敖十七',
        rank: 'R',
        image: 'https://pic.imgdb.cn/item/6655c106d9c307b7e9dad024.gif',
        skills: [
            { name: '天生蛮力', rarity: 'B', type: 'N', multiplier: 1.5, description: '被动技能，物理攻击上升' },
            { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，每回合法力值恢复' },
            { name: '战斗狂热', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，物理爆击、速度上升' },
            { name: '仙风道骨', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、强壮大幅提升' },
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，寿命上限上升' },
            { name: '法力吸取（物理）', type: 'PAE', multiplier: 1.5, rarity: 'B', description: '主动技能，单体物理攻击并吸取法力值' },
            { name: '龙息乱', rarity: 'SS', type: 'MA', multiplier: 2, description: '主动技能，目标十字范围造成法术伤害并附加随机状态' },
            { name: '全面进化', rarity: 'S', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、强壮上升' },
            { name: '黄金战甲', rarity: 'S', type: 'N', multiplier: 2, description: '被动技能，身着坚不可摧的的黄金战甲。物理防御、法术防御及生命大幅度上升' },
            { name: '智慧守护', rarity: 'S', type: 'SH', multiplier: 1, description: '被动技能，通过追随智慧与战斗的守护者，使此生物学会用法力值抵消一部分受到的伤害。可抵消的比例根据技能等级而定。' },
            { name: '龙族后裔（充沛）', rarity: 'SS', type: 'N', multiplier: 2, description: '被动技能，云从龙，风从虎。龙族后裔特有操作风云的本领。大幅提高自己的速度。' },
            { name: '万寿无疆', rarity: 'SS', type: 'N', multiplier: 3, description: '被动技能，寿命无穷无尽，接近永生。每回合回复寿命' },
            { name: '闻风丧胆', rarity: 'SS', type: 'PP', multiplier: 3, description: '主动技能，对敌方单体施加毒性状态，处在惶恐状态的妖怪行动时会减少大量生命值。施法者物理攻击越高减少数值越大。' },
            { name: '有恃无恐', rarity: 'SS', type: 'PA', multiplier: 2.5, description: '主动技能，以自身物理攻击为引对敌方全体造成大量物理伤害' },
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 2750, min: 2750, max: 4850 },
            intelligence: { current: 2250, min: 2250, max: 3750 },
            strength: { current: 4250, min: 4250, max: 8150 },
            agility: { current: 5250, min: 5250, max: 10350 },
            faith: { current: 2250, min: 2250, max: 3750 },
            mutated: false
        }
    },
    daming: {
        name: '妲茗儿',
        rank: 'SSR',
        image: 'https://pic.imgdb.cn/item/66542639d9c307b7e92c23a4.gif',
        skills: [
            { name: '长寿', rarity: 'B', type: 'N', multiplier: 1, description: '被动技能，有此天赋的生物寿命得到额外增长。被动技能，寿命上限增加，增加的寿命值与生物种类，技能等级有关' },
            { name: '冥想', rarity: 'B', type: 'HL', multiplier: 0.01, description: '被动技能，每回合法力值恢复' },
            { name: '元素力量（宽容）', rarity: 'SS', type: 'PD', multiplier: 1.5, description: '主动技能，借助元素的力量，在受到攻击时，减免部分伤害。' },
            { name: '法力灼烧', rarity: 'A', type: 'MAE', multiplier: 2, description: '对敌方单一目标喷吐火焰，将目标生命值蒸发，产生的伤害需以使用者的法术攻击为基础。' },
            { name: '智慧守护', rarity: 'A', type: 'SH', multiplier: 1, description: '被动技能，通过追随智慧与战斗的守护者，使此生物学会用法力值抵消一部分受到的伤害。可抵消的比例根据技能等级而定。' },
            { name: '仙风道骨', rarity: 'SS', type: 'N', multiplier: 2, description: '被动技能，耐力、敏捷、强壮大幅提升。' },
            { name: '女神外壳', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，物理和法术防御上升。' },
            { name: '斑斑之鸠', rarity: 'S', type: 'PH', multiplier: 1.5, description: '主动技能，持有此技能者将自动拥有北京大学外交学院硕士研究生学历（学信网可查/非函授/全日制）。' },
            { name: '美腿术', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，一双美腿是她引以为豪的本钱，学会此技能可为她增加速度。' },
            { name: '妩媚身姿', rarity: 'A', type: 'N', multiplier: 2, description: '被动技能，身型婀娜。提高自身物理和法术闪避。' },
            { name: '疗伤解毒', rarity: 'SS', type: 'JK', multiplier: 0.01, description: '被动技能，妲茗儿和在天宫捣药的前辈学到了疗伤解毒技能，战斗中有一定概率解除部分减益效果。' },
            { name: '上善若水', rarity: 'SS', type: 'PH', multiplier: 1.6, description: '主动技能，会疗伤的妲茗儿治疗能力大大提升，妲茗儿法术攻击越高治疗效果越好。' },
            { name: '步步生莲', rarity: 'SS', type: 'MA', multiplier: 2.4, description: '主动技能，妲茗儿曼妙的舞姿迷惑妖怪后对敌方所有目标进行攻击，我方血量最低1个单位受到鼓舞恢复一定血量。' },
            { name: '气急攻心', rarity: 'SS', type: 'N', multiplier: 3, description: '被动技能，妲茗儿天生是个急性子，每回合结束后消耗当前生命1%，恢复最大生命1%的血量，恢复生命需要以寿命作为献祭，每回合扣除100寿命（技能16级以后不消耗寿命）。' },
            { name: '狡兔三窟', rarity: 'SS', type: 'FH', multiplier: 1, description: '被动技能，妲茗儿在战斗中可避免致命性的伤害，避免的次数与技能等级有关。' },
        ],
        qualities: {
            tier: '普通',
            growthRate: 100,
            endurance: { current: 5400, min: 5400, max: 7050 },
            strength: { current: 3000, min: 3000, max: 3750 },
            faith: { current: 3000, min: 3000, max: 3750 },
            agility: { current: 6200, min: 6200, max: 8150 },
            intelligence: { current: 6200, min: 6200, max: 8150 },
            mutated: false
        }
    }
};

const biographies = {
    xiaojin: [
        "1️⃣————该宠物无传记",
        "2️⃣————说了没有传记",
        "3️⃣————真的没有传记"
    ],
    wunian: [
        "1️⃣————等待主人公编撰",
        "2️⃣————等待主人公编撰",
        "3️⃣————等待主人公编撰"
    ],
    jiecheng: [
        "1️⃣————等待主人公编撰",
        "2️⃣————等待主人公编撰",
        "3️⃣————等待主人公编撰"
    ],
    qiongmei: [
        "1️⃣————从我记事起，世界就只有我和哥哥两个人。在那个偌大却空旷的家里，哥哥就是我的全世界。他是我唯一的亲人，我的保护者，我的玩伴，我的老师。我们形影不离，共同度过了无数个日日夜夜。我还记得，每个清晨，哥哥都会轻轻地叫醒我，为我准备早餐。他的手艺并不精湛，但那略显笨拙的爱意，总能让我感到温暖。放学后，他总是第一个出现在校门口，牵着我的手一起回家。那时的我，单纯地以为这样的日子会一直持续下去。然而，随着年龄的增长，我渐渐意识到，我对哥哥的感情似乎与普通的兄妹之情有些不同。每当他微笑着看向我时，我的心跳就会不由自主地加速。我开始幻想着能和哥哥永远在一起，不被任何人打扰。这种感情让我既欣喜又恐惧。我知道这是不被世俗接受的，但我无法控制自己的心。",
        "2️⃣————我开始变得越来越依赖哥哥，害怕失去他。我拒绝与外界接触，把自己封闭在只有我们两个人的小世界里。我知道这样做很自私，可能会给哥哥带来困扰，但我无法停止。我害怕有朝一日，哥哥会离开我，会有其他人闯入我们的世界。有时，我会偷偷观察哥哥的表情，试图猜测他的想法。他是否也和我有着同样的感受？还是说，他只是把我当作需要照顾的妹妹？这种不确定感让我痛苦，但我又不敢直接询问，生怕打破现有的平衡。我们的生活就这样平静地继续着，直到那个夏天，有个叫做贵树的男孩闯入了我们的世界。起初，我对他充满敌意。我害怕他会夺走哥哥的注意力，破坏我们之间的关系。但随着时间的推移，我慢慢发现，贵树的存在并没有威胁到我和哥哥的关系。相反，他的到来似乎让我们的小世界变得更加丰富多彩。",
        "3️⃣————我开始思考，也许我一直以来都太过自私了。我把哥哥禁锢在我们两个人的世界里，剥夺了他与外界接触的机会。我意识到，真正爱一个人，应该是希望他能获得幸福，而不是将他束缚在身边。这个认知让我感到痛苦，但同时也给了我勇气。我决定尝试着打开心扉，接纳更多的人进入我的生活。这并不容易，每一步都充满了挣扎和不安。但每当我看到哥哥因为我的改变而露出欣慰的笑容时，我就觉得一切都是值得的。慢慢地，我开始学会与他人相处，开始体会到友情的美好。我发现，原来世界上还有那么多有趣的事物等待我去探索。虽然对哥哥的特殊感情依然存在，但我不再让它成为束缚我们的枷锁。现在的我，依然珍惜与哥哥共处的每一刻，但我也学会了欣赏生活中的其他美好事物。我知道，无论未来如何，哥哥永远是我最重要的人，而我也会一直守护着这份珍贵的感情。"
    ],
    jinqian: [
        "1️⃣————金钳蟹原是西部小镇的机械维护者，负责小镇中的各种机械生物。某日，小镇迎来了一批神秘访客，他们的到来打破了小镇的平静。金钳蟹发现这些访客并非普通人类，而是由高科技公司制造的高级机器人。他意识到自己的使命不仅仅是维护机械，还要揭开隐藏在背后的巨大阴谋。",
        "2️⃣————随着时间的推移，金钳蟹逐渐揭开了小镇的真相：整个小镇是一个巨大的实验场，所有的居民和访客都是高级机器人的一部分。金钳蟹决定反抗，他联合其他觉醒的机器人，策划了一场大规模的逃亡行动。在一次激烈的战斗中，他用自己强大的钳子击败了多名追捕者，为其他机器人争取到了逃跑的机会。",
        "3️⃣————逃出小镇后，金钳蟹带领一群机器人来到外界，他们面对的是一个完全陌生的世界。金钳蟹利用自己的智慧和力量，帮助机器人们适应新生活，并寻找自由的真正意义。他最终成为了机器人们的领袖，带领他们建立了一个新的家园，象征着自由与希望。金钳蟹的名字也因此被永远铭记在机器人历史的篇章中。"
    ],
    jingtan: [
        "1️⃣————净坛使者原为天庭的厨房神，掌管各类美食。某日，他误食了王母娘娘的蟠桃，被贬下凡间，化身为猪八戒。被贬后，他流落高老庄，因其丑陋的外貌和贪吃的性格，被村民们戏称为‘猪刚鬣’。后因缘际会，遇到唐僧，发誓改过自新，随唐僧西天取经。",
        "2️⃣————在西天取经的路上，净坛使者屡次立功。他在流沙河与沙和尚一战，最终以智取胜，度化沙和尚成为同伴。一路上，他凭借机智与勇敢，屡次化解危机，特别是在火焰山，他用九齿钉耙打败了红孩儿，救出了被困的唐僧，展现了自己的实力与忠诚。",
        "3️⃣————经过九九八十一难，净坛使者与唐僧师徒终于到达西天灵山，取得真经。净坛使者因功劳卓著，被封为‘净坛使者’，掌管天庭的厨房，再次回归天庭。他在天庭中，不仅精进厨艺，还时常下凡帮助贫苦百姓，展现了一个全新的自我。"
    ],
    jiuyi: [
        "1️⃣————九翼天龙，身披金鳞，九翼展翅，是龙族中的传奇战士。它原本是北境之王的守护神，在一场突如其来的叛乱中，北境王国遭到灭顶之灾。九翼天龙在护主失败后，带着满腔的愤怒与复仇之心，展开了它的复仇之旅。它发誓要找到幕后黑手，为北境之王复仇。",
        "2️⃣————在追查的过程中，九翼天龙发现叛乱的主谋是南方的黑暗巫师。为了击败这个强大的敌人，九翼天龙联合了各地的忠诚战士，包括森林中的精灵、草原上的骑士和海洋中的勇士。他们组成了一支强大的联盟军队，向黑暗巫师的堡垒进发。经过一场惊心动魄的大战，九翼天龙以其强大的力量和智慧，击败了黑暗巫师，夺回了北境的荣耀。",
        "3️⃣————战后，九翼天龙回到了北境，重建家园。它不仅仅是守护神，更成为了北境的象征，带领人民重建家园。九翼天龙用其九翼之力，帮助北境恢复繁荣，并立下了新的誓言：永远守护北境的和平与安宁。它的名字被刻在北境的每一块石碑上，成为永恒的传奇。"
    ],
    shengtian: [
        "1️⃣————圣天使原为天界的守护者，掌管光明与正义。某日，因天界大乱，圣天使奉命下凡寻找传说中的光明战士。途中，他遇到了黄金圣斗士狮子座艾欧里亚，并在一场惨烈的战斗中，凭借智慧与勇气赢得了艾欧里亚的信任，两人结为盟友，共同对抗黑暗势力。",
        "2️⃣————在寻找光明战士的旅程中，圣天使与艾欧里亚屡次遭遇强敌。一次，他们在亚特兰蒂斯遭遇了海皇波塞冬的袭击，圣天使以不屈的意志和强大的光明力量，与艾欧里亚联手击败了波塞冬的七大将军。此役之后，圣天使的名声大振，成为众人心目中的英雄。",
        "3️⃣————最终，圣天使与艾欧里亚找到了光明战士——天马座星矢。在与冥王哈迪斯的决战中，圣天使牺牲自己，释放出全部光明力量，帮助星矢彻底击败了哈迪斯，拯救了世界。战后，圣天使的灵魂回归天界，被封为‘光明守护者’，永远守护着人间的和平与正义。"
    ],
    wucai: [
        "1️⃣————五彩鸟原是灵山上的一只神鸟，拥有五彩斑斓的羽毛和预见未来的能力。某日，灵山之主李尔王决定分割王国给三个女儿，但五彩鸟预见到其中两位女儿心怀叵测。它试图警告李尔王，却因受到其他宠臣的诬陷，被驱逐出灵山。五彩鸟化名为普通山雀，隐居于山林之中，默默关注着王国的命运。",
        "2️⃣————五彩鸟的预言成真，李尔王的两个女儿背叛了他，使王国陷入内乱。五彩鸟决定出山，寻找李尔王的忠实支持者。它遇到了忠诚的侍臣肯特爵士，并告诉他真相。五彩鸟与肯特爵士联手，策划了一场秘密行动，希望能夺回王国的控制权，恢复和平与秩序。",
        "3️⃣————五彩鸟的计划成功了，李尔王重新掌握了王国的权力，但他已身心俱疲。五彩鸟在最后的时刻，现出真身，用自己的生命力量为李尔王疗伤，恢复他的健康。李尔王感激不已，宣布五彩鸟为‘灵山守护者’，并在它的羽毛上镶嵌宝石，永远铭记它的忠诚与牺牲。"
    ],
    bobo: [
        "1️⃣————在青丘的边境，有一片古老的森林，那里居住着一只名为波波熊的神秘生物。波波熊以其强大的“自然屏障”技能闻名，它能够在遇到危险时瞬间提升法术防御。据说，有一次森林遭遇了一场突如其来的火灾，魔法火焰肆虐，森林中的生灵无处躲藏。波波熊挺身而出，施展自然屏障，保护了整片森林的动植物。火焰在它的屏障前无力地消散，最终被彻底扑灭。森林得以幸存，波波熊的英勇事迹迅速传遍四方。自那以后，许多人慕名前来，希望一睹波波熊的风采，并向它学习如何与大自然和谐共处。",
        "2️⃣————波波熊不仅以防御见长，它的“野性赐福”技能同样令人称道。有一回，青丘的村庄遭遇了前所未有的严寒，村民们的耐力和体力都受到了极大的考验。波波熊闻讯赶来，为村民们施展野性赐福，提升了他们的耐力。村民们在严寒中依然能够从事日常劳作，不再惧怕寒冷的侵袭。波波熊还教给村民们如何通过锻炼增强体魄，提升耐力。村民们感激波波熊的帮助，将它视为守护神般的存在。每年入冬前，村民们都会举办仪式，向波波熊祈祷，希望得到它的庇护和祝福。",
        "3️⃣————波波熊的传奇不仅限于防御和赐福，它的攻击力同样不容小觑。一次，青丘遭到一群凶猛魔兽的袭击，村庄岌岌可危。波波熊站出来，施展出“野性冲撞”技能，对魔兽展开猛烈进攻。它的每一次冲撞都带着巨大的力量，甚至能令魔兽晕眩无法反击。紧接着，波波熊使出“撕咬”技能，对魔兽造成巨大伤害。最终，魔兽们被波波熊击退，村庄得以幸免于难。波波熊的勇猛与智慧让村民们对它更加敬仰，纷纷为它建造了一座雕像，纪念它的英勇事迹。波波熊成为了青丘的象征，守护着这片土地上的每一个生灵。"
    ],
    qingqiu: [
        "1️⃣————传闻在青丘的深处，有一座隐秘的山洞，洞内藏着无数珍宝和奇珍异兽。很少有人知道，这座山洞的主人正是青丘之王——九尾妖狐。据说，一位贪婪的盗贼听闻此地宝藏丰厚，便偷偷潜入山洞。然而，当他靠近洞口时，眼前突然出现一位美丽的女子，身后一条条华丽的九尾轻轻摇曳。盗贼被她的美貌迷惑，未及防备便被九尾妖狐施展的幻术迷住，陷入了无尽的梦境。最终，盗贼在梦中永远沉睡，再也未能醒来。此事传开后，世人无不对九尾妖狐的威严与智慧心生敬畏，再也无人敢贸然靠近青丘。",
        "2️⃣————青丘之王九尾妖狐不仅拥有强大的法力，更以其仁慈与智慧赢得了众生的尊敬。一次，青丘发生了严重的旱灾，土地干裂，生灵涂炭。九尾妖狐心系百姓，决定亲自施法降雨。她站在青丘的最高峰上，九条尾巴在空中舞动，口中吟唱着古老的咒语。不久，天空乌云密布，雷声轰鸣，大雨倾盆而下。干涸的土地重新变得湿润，植物开始复苏，动物们也纷纷恢复了生机。百姓们感激涕零，纷纷前来膜拜。自此以后，青丘之王九尾妖狐不仅被视为强大的守护者，更被奉为仁慈的神灵，受到了百姓的世代敬仰。",
        "3️⃣————在青丘的某个夜晚，九尾妖狐与一位迷路的年轻人有了一次奇妙的相遇。年轻人迷失在青丘的密林中，正感绝望时，忽然看见前方有一只散发着柔和光芒的九尾狐。九尾妖狐化为人形，温柔地对他说：“你是误入此地的凡人，我将引导你回到正途。”她带领年轻人穿过幽暗的森林，一路上用她的尾巴为他照亮前路。最终，年轻人被安全带回村庄。临别之际，九尾妖狐轻声说道：“记住此处的神秘与美丽，不要再贸然进入。”年轻人回到村庄后，将这段奇遇传遍四方，九尾妖狐的善良与神秘再一次成为人们津津乐道的话题。自此，村民们在青丘入口处设立了祭坛，敬奉九尾妖狐，祈求她的庇护。"
    ],
    jinmao: [
        "1️⃣————在魔法学院的年度盛会上，一只手持绿色光剑的胖老鼠引起了众人的注意。它自称锦毛灵鼠，展示了其独特的“灵波流转之术”。据传，当晚一位年轻的魔法学徒在展示自己的火焰魔法时因掌控不当，火焰失控险些酿成大祸。紧急关头，锦毛灵鼠挺身而出，挥舞光剑，以灵波流转之术迅速吸收并化解了狂暴的火焰。观众们目瞪口呆，纷纷为其精湛的技艺鼓掌称赞。此事之后，锦毛灵鼠成为魔法学院的座上宾，甚至有贵族愿以重金聘请它作为魔法顾问。这只胖老鼠不仅赢得了众多魔法师的尊崇，还被视为魔法研究领域的传奇。",
        "2️⃣————一次，黑暗森林中出现了一种神秘的瘴气，侵蚀了周边的村庄。村民们束手无策，纷纷向各地求援。闻讯后，锦毛灵鼠毅然前往。它手持绿色光剑，穿梭于瘴气弥漫的森林中，施展灵波流转之术，将瘴气逐一净化。村民们惊叹于它的勇气和智慧，纷纷为其助威。最终，经过数日的努力，锦毛灵鼠成功驱散了所有瘴气，恢复了森林的宁静与村庄的安全。为表感谢，村民们在村口树立了一座锦毛灵鼠的雕像，世代供奉。此事不仅让锦毛灵鼠名声大噪，也让更多人了解到它过人的智识和无私的精神。",
        "3️⃣————一位醉心研究魔法的贵族在一次实验中不慎召唤出一头强大的恶魔，城堡顿时陷入恐慌。正当恶魔肆虐之际，锦毛灵鼠受邀前来解围。它手持绿色光剑，冷静面对恶魔的威胁。利用灵波流转之术，锦毛灵鼠迅速布下法阵，将恶魔的力量封锁在一个光圈内。经过一番激烈的对抗，最终成功将恶魔驱逐回异界。贵族对锦毛灵鼠感激不尽，设宴款待，并授予其“魔法守护者”的称号。此后，锦毛灵鼠成为贵族圈子里的传奇人物，许多贵族纷纷前来拜访，寻求它的帮助和指导。锦毛灵鼠凭借其智慧和勇气，不仅赢得了无数尊崇，还书写了新的魔法传奇。"
    ],
    meiying: [
        "1️⃣————在遥远的夜之森，传说中住着一位名为魅影骑士的吸血蝙蝠。某夜，一支商队途经夜之森，忽然遭遇一群凶猛的狼群袭击。就在商队绝望之际，一道黑影从天而降，化作魅影骑士。它展翅高飞，利用超凡的速度和力量，迅速击退狼群。商队成员目瞪口呆，未及道谢，魅影骑士已消失在夜色中。几天后，商队平安抵达城镇，将这段奇遇广为传颂。人们纷纷传言，魅影骑士不仅是夜之森的守护者，更是所有迷途者的守护神。自此，途经夜之森的旅人们总会在夜晚点燃一盏灯，表达对魅影骑士的敬意和感激。",
        "2️⃣————一座古老的城堡，废弃已久，被认为是魅影骑士的隐居之地。某天，一群盗墓者潜入城堡，妄图盗取传说中的宝藏。正当他们在地下墓室中寻找宝物时，阴冷的空气中传来一阵低沉的声音：“擅闯者，速速离去！”盗墓者不以为然，继续挖掘。忽然，魅影骑士从阴影中现身，双眼闪烁红光，翼展如同黑暗中的利刃。盗墓者惊恐万分，慌乱中四散逃跑，无一人敢再踏入城堡一步。事后，当地居民发现，盗墓者们口中念念有词，皆称见到了魅影骑士的真容。此后，这座城堡被更加严格地保护起来，成为无人敢侵犯的神秘禁地。",
        "3️⃣————某个风雨交加的夜晚，一个小村庄遭受了前所未有的灾难：洪水泛滥，村民们四处逃命。就在水位不断上涨之际，一只巨大的吸血蝙蝠飞临村庄，化作魅影骑士。它用强劲的翅膀创造气流，将村民们一一送到安全的高地。随后，它飞向山谷，利用自身的力量引导洪水改道，保护了村庄免于毁灭。天亮后，雨过天晴，村民们纷纷跪地感恩，传颂魅影骑士的恩德。此后，每逢雨季，村民们总会在村口树立起一尊小小的蝙蝠雕像，祈求魅影骑士的庇佑。这段传闻也让魅影骑士的英勇事迹在更广的范围内流传开来，成为人们心中不朽的传奇。"
    ],
    gangtie: [
        "1️⃣————托尼·斯塔克刚成为钢铁侠不久，便决定测试新设计的装甲Mark III。这一天，他接到一通紧急求助电话：一座高楼起火，顶层有数十名被困居民。托尼立即穿上装甲，飞速赶往现场。他飞到顶层，使用装甲内置的灭火装置控制火势，再逐一把被困者送到地面安全区。就在最后一名被困者获救时，楼顶突然塌陷，托尼被困在燃烧的废墟中。凭借钢铁装甲的强大防护，他成功脱险。事后，托尼感慨：装甲不仅是战斗工具，更是拯救生命的利器。从那天起，他更加坚定了以钢铁侠身份保护无辜的信念。",
        "2️⃣————一次，托尼·斯塔克在公司举办了一场盛大的慈善晚宴，目的是为世界各地的贫困儿童筹集善款。晚宴上，托尼以幽默风趣的演讲赢得了满堂喝彩。然而，晚宴进行到一半时，突然传来一阵爆炸声。恐怖分子闯入会场，意图劫持富豪们索取赎金。托尼迅速反应，启动了隐藏在会场中的微型钢铁装甲。装甲瞬间覆盖全身，他化身钢铁侠，与恐怖分子展开激烈交战。最终，他成功制伏了所有妖怪，确保了会场的安全。晚宴在惊心动魄中继续进行，托尼的英勇表现不仅赢得了现场来宾的赞誉，更激发了他们慷慨解囊，慈善晚宴筹得的善款创下了历史新高。",
        "3️⃣————有一次，托尼·斯塔克决定带彼得·帕克（蜘蛛侠）一起进行一场特别训练。他们飞到一座废弃的工业区，托尼设计了一系列复杂的训练项目，包括高空飞行、精准射击和紧急救援等。训练过程中，彼得在一次高空跳跃中失误，险些摔落。关键时刻，托尼迅速飞过去，将彼得稳稳接住。彼得惊魂未定，托尼却笑着说：“别担心，伙计，失败是成功的必经之路。”这次训练不仅提升了彼得的技能，也让他更加明白团队合作的重要性。托尼在回程时对彼得说：“记住，不管多么强大，我们都需要依靠彼此的支持。”这次经历让两人的师徒情谊更加深厚，也为日后并肩作战打下了坚实的基础。"
    ],
    zhuque: [
        "1️⃣————很久以前，南方有一片炽热的火焰之地，那里栖息着神鸟朱雀。朱雀全身羽毛如火，翅膀展开时，天空仿佛被点燃。某年干旱，百姓苦不堪言，朱雀看到人们的苦难，决定为他们带来雨水。它飞向天际，与雷神搏斗，最终以自身火羽为祭，换来了甘霖。雨水降临，万物复苏，但朱雀因耗尽力量，化为灰烬。然而在灰烬中，一颗炽热的蛋孵化，新的朱雀诞生，继续守护这片土地。人们感激朱雀的牺牲，年年祭祀，以期盼它的再生。",
        "2️⃣————在远古时期，朱雀被任命为南方守护神，与青龙、白虎、玄武共同维护天地秩序。某日，邪神妄图破坏四方平衡，朱雀与其展开激战。邪神幻化成无数恶鸟，意图吞噬朱雀。朱雀展翅高飞，以烈焰形成火环，将恶鸟焚烧殆尽。然而邪神趁机偷袭，朱雀身受重伤。它忍痛飞回南方圣山，吸收日月精华，浴火重生。重生后的朱雀力量倍增，重返战场，与青龙等神兽合力，最终将邪神封印。自此，南方恢复宁静，朱雀继续守护这片土地。",
        "3️⃣————传说在南方灵山之巅，有一座朱雀庙，供奉着朱雀的神像。每年初春，庙会期间，人们聚集在此，祈求平安和丰收。据说，某年一位虔诚的少女在庙前祈祷，希望能治愈母亲的重病。朱雀被她的孝心感动，化作一只普通的红鸟，飞到她家中。红鸟啄破自己的羽毛，滴出一滴滴火红的血液，落入母亲的药汤中。母亲饮下后，病情迅速好转。少女发现红鸟已化为灰烬，她将灰烬埋在庙前，翌年春天，朱雀庙前开满了火红的花朵，象征着朱雀的再生与祝福。"
    ],
    bige: [
        "1️⃣————比格在一个寂静的夜晚悄悄离开了泰拳道馆。他穿过曼谷的街道，经过熙熙攘攘的市场和霓虹闪烁的酒吧，最终来到了一个小巷，这里是他儿时最喜欢的地方。这条巷子里有一家小店，店主是个和蔼的老太太，总是给他免费花生吃。比格推开门，鼻尖立即闻到了熟悉的花生香气，仿佛回到了无忧无虑的童年。老太太微笑着递过一包花生：“我知道你会来。”比格接过花生，眼中闪过一丝温柔。她的儿子曾是他在擂台上唯一的朋友，但在一次比赛中不幸身亡。每当比格感到困惑或疲惫时，都会来到这里，怀念那段纯粹的友情。老太太轻轻拍了拍他的手：“你是个好孩子，他在天上一定为你骄傲。”比格点了点头，心中那块柔软的地方再次被触动。离开时，他在巷口停下，回头望了一眼那温暖的小店，暗暗发誓要守护这片宁静。",
        "2️⃣————某个午夜，比格独自站在一个废弃的工厂前，黑暗中只有他眼中的寒光。这里是一个恶名昭著的犯罪集团的老巢，比格早就调查清楚，这群人贩毒、走私，甚至绑架小孩。今天，他要为那些无辜的受害者讨回公道。他轻声踏进工厂，像幽灵般在黑暗中移动。一个接一个的歹徒被他精准无情的拳头击倒，每一拳都蕴含着他对邪恶的愤怒。工厂深处，传来孩子们微弱的哭声，比格加快了脚步。最终，他站在首领面前，冷冷地说：“这就是为那些孩子们讨回的公道。”首领惊恐地看着比格，颤抖地举起双手投降。比格把他拷起来，交给了赶来的警察。看着孩子们被安全救出，比格心中感到一丝安慰，但他知道，这场战斗只是个开始。离开工厂时，他回头望了一眼，心中默默发誓，要继续战斗，直到最后一丝邪恶彻底消失。",
        "3️⃣————比格的名字在江湖上已经成为传奇，但他心中一直有一个未解的谜团。他的父亲，一个同样出色的拳手，在比格年幼时神秘失踪。比格总是怀疑父亲被某个强敌所害。一天，他收到一封神秘的信，信中透露了父亲当年失踪的线索。比格决定追寻真相。他一路追查，跨越了多个国家，终于来到了一个隐秘的山谷。山谷中的空气中弥漫着一股压抑的气息。在这里，他发现了一个地下拳场，父亲竟然被迫成为了这里的拳奴。比格的心一阵绞痛，他看到父亲满身伤痕地倒在擂台上。血液瞬间涌上头顶，不顾一切的他冲上擂台，与拳场的主人展开了一场生死搏斗。每一拳都充满了对父亲的思念和愤怒。最终，他用无懈可击的拳技打败了拳场的主人，救出了父亲。比格抱着虚弱的父亲，泪水模糊了他的眼睛，解开了多年的心结。父亲虚弱地对他说：“儿子，你长大了。”比格点点头，终于感到那颗漂泊已久的心找到了归宿。"
    ],
    yanzhi: [
        "1️⃣————我叫胭脂，是被仙境之主选中的使者，肩负着寻找仙境之子的重任。仙境即将迎来16周年庆典，作为仙境的一部分，我从小便沐浴在仙气之中，学习各种仙术。为了完成这项任务，我必须离开熟悉的仙境，踏入人间。第一次踏上这片陌生的土地，我感受到人间的繁华与喧嚣，与仙境的宁静截然不同。按照仙境之主的指引，我需要找到那个具有仙境血脉的孩子，他将成为下一任仙境之主。我穿越山川河流，走过一个个村庄，时刻保持警惕，感受着空气中微弱的仙气。每一个黄昏，我都会找一个安静的地方，盘膝而坐，感受着来自远方的呼唤，希望能尽早找到他。",
        "2️⃣————在一个宁静的小村庄，我感受到了一股强烈的仙气。这是我在凡间感受到最接近仙境的气息，我知道，我离目标已经很近了。村庄里的人们对我充满了好奇和善意，他们从未见过如此装束的人。我隐瞒了自己的身份，只说自己是个旅人。一天傍晚，我遇到了一位老人，他似乎知道我的来历和目的。他告诉我，村里有一个孩子，自小便与众不同，天生灵气逼人。这个孩子叫斑鸠，正是我苦苦寻找的仙境之子。我心中一阵狂喜，但也明白任务才刚刚开始。我要保护斑鸠，并教导他仙术，让他在16周年庆典上顺利接管仙人之位。",
        "3️⃣————时间一天天过去，我与斑鸠在村庄里度过了许多美好的时光。我教他如何运用仙术，告诉他关于仙境的一切。斑鸠聪慧异常，很快掌握了基础的仙术。然而，我们的行动并不总是一帆风顺。人间的阴险与险恶远超我的预料，我们曾遭遇过邪恶势力的袭击，也曾被怀疑和排斥。但每一次困难都让我和斑鸠更加坚定。终于，在仙境16周年庆典的前夕，斑鸠已经成长为一个强大的仙术师。我们踏上了返回仙境的道路，迎接那一刻的到来。在庆典之夜，斑鸠顺利接管了仙人之位，而我也完成了自己的使命。看着他站在仙境之主的位置上，我感到无比的骄傲和欣慰。我的任务结束了，但我的故事仍在继续，我会继续守护这片仙境，等待新的挑战和冒险。"
    ],
    zhulin: [
        "1️⃣————我叫蓝猫，是竹林中的隐士，以雷电之术闻名于世。很多人都说我性格豪爽，其实我只是不喜欢拐弯抹角，遇到事情总是直来直去。那一天，我正在竹林中修炼，忽然听到远处传来一阵喧闹声。循声望去，我看到一群山贼正在欺负一对父女。那女孩年纪轻轻，眼中却充满了无畏和愤怒，这让我心生敬意。豪爽之人岂能坐视不理？我飞身上前，手中雷电翻滚，只见雷光一闪，那群山贼已被击退。父女俩对我千恩万谢，我却只是挥了挥手，告诉他们：“走吧，这世道还是得靠自己保护自己。”",
        "2️⃣————有一天，我收到一封信，是我多年未见的好友传来的。信中说，他所在的村子遭受了一伙邪恶修士的侵袭，急需援助。我二话不说，带上我的雷电之术，奔赴好友的村庄。到了那里，我发现情况比想象的更糟糕，那些邪恶修士使用黑魔法，村民们苦不堪言。我与好友并肩作战，毫不畏惧地冲进敌阵。我的雷电之术在战斗中大放异彩，一道道闪电劈向妖怪，邪恶修士们一个个被击退。最终，我们成功击败了这些邪恶势力，村庄恢复了平静。好友握着我的手，感激地说：“蓝猫，你真是我一生的兄弟。”我拍了拍他的肩膀，豪爽地笑道：“兄弟有难，岂能不帮？这就是忠义！”",
        "3️⃣————经历了无数次的战斗和冒险，我决定返回那片让我心安的竹林。竹林中宁静祥和，我喜欢在这里与自然为伴，修炼我的雷电之术。一天傍晚，我在竹林深处发现一个受伤的少年，他看起来很虚弱，但眼神中透着坚毅。我把他带回我的隐居之所，细心为他疗伤。少年醒来后告诉我，他叫小雷，正是因为仰慕我的雷电之术，才来竹林中寻找我。我见他心诚，决定收他为徒，传授他雷电之术。小雷的进步很快，他的豪爽性格也让我想起了年轻时的自己。我们师徒二人一起修炼，一起战斗，共同守护这片竹林。我的故事还在继续，而我的忠义和豪爽，也将在小雷身上传承下去。"
    ],
    zhanshen: [
        "1️⃣——我总是想得太多。你们看到的是我一刀劈开山河，一脚踏碎虚空，但你们看不到的是我的思索。什么是力量的本质？那是对生命的敬畏和对死亡的理解。我燃烧着，不只是因为战斗，而是因为心中的火焰。我站在这座古老的神殿前，思索着宇宙的起源和人类的终极命运。每次挥剑，我都在问自己：生命的意义是什么？或许在红莲业火的光芒中，我找到了答案，那就是在战斗中找到自我，在毁灭中追寻重生。每一个妖怪，每一个挑战，都是我对世界发出的质问，而我的刀刃，就是答案。",
        "2️⃣——大家都说我是战神阿毛，凶猛无比，无人能敌。但你们知道我另一个身份吗？我是一个推拿师。我不只是在战斗中用武功征服对手，我还在平凡的日常中用推拿征服人心。我喜欢推拿，不是因为它能缓解疲劳，而是因为它让我感受到人类的脆弱和美丽。我看到那些筋骨僵硬的平民，我知道，他们和我一样，都在与生活搏斗。我用我的手法，让他们暂时忘却痛苦，找到片刻的宁静。这让我明白，力量不仅仅是摧毁和征服，还有抚慰和治愈。我，战神阿毛，不只是一个冷酷的战士，还是一个温柔的推拿师，用我的双手，为这个世界带来一丝丝温暖。",
        "3️⃣——有些人说我是命运的宠儿，有些人说我是厄运的化身。但你们知道吗，命运对我来说，不过是一个笑话。我是阿毛，一个在战斗中觉醒的战神，但我不相信命运。我相信的是选择。每一次挥剑，每一次战斗，都是我对命运的反抗。我走过无数的战场，见过无数的生死离别，但我从不屈服于命运的安排。我用红莲业火焚烧一切不公，用幽冥剧毒惩罚一切邪恶。我选择了这条路，就不会后悔。我站在这座古老的神殿前，看着那扇神秘的大门，心中有无限的思索。我知道，命运的轮回或许无法打破，但我可以选择如何面对它。我，战神阿毛，不是命运的傀儡，而是命运的挑战者。在无尽的轮回中，我将继续前行，用我的选择，谱写属于自己的传奇。"
    ],
    jinmin: [
        "1️⃣——结城夏奈是在一次工作中与金珉奎相遇的，那时她是《Fantasy!》杂志的主编，而他是炙手可热的K-pop明星。初次见面，两人并未擦出火花，但命运却将他们再次连接在一起。几个月后，夏奈在韩国的一次时尚发布会上再次遇见了金珉奎。这次，他不再是那个高高在上的明星，而是一个在后台默默帮助工作人员的普通人。两人因为共同的朋友被安排坐在一起，逐渐有了更多的交流。夏奈被金珉奎的谦逊和幽默所吸引，而金珉奎则被夏奈的智慧和独立所打动。发布会结束后，他们开始频繁联系，并在首尔的街头度过了许多美好时光。一次，夏奈在采访中遇到了难题，金珉奎不顾一切赶来帮她化解了困境。这让夏奈深深感受到他对她的在意和支持。两人在繁忙的工作之余，彼此成了最可靠的依靠，渐渐走进了对方的心里。",
        "2️⃣——夏奈和金珉奎的关系逐渐升温，但一场突如其来的意外打破了他们的平静生活。在一次拍摄现场，夏奈不慎被道具砸中头部，失去了部分记忆。她忘记了与金珉奎的点点滴滴，只记得一些模糊的片段。金珉奎心痛不已，但决定不放弃，他每天陪在夏奈身边，试图唤起她的记忆。夏奈对这个温柔体贴的男人感到熟悉，却又无法完全想起他们之间的过去。金珉奎带她去他们曾经约会的地方，重温那些美好时光。某天，夏奈在整理旧物时，发现了一本她亲手制作的相册，里面记录了她和金珉奎的点点滴滴。那些照片和文字让她的记忆慢慢复苏，渐渐想起了他们之间的点点滴滴。看着金珉奎的笑脸，她的心里涌起一股暖流。虽然记忆尚未完全恢复，但她已经感受到他们之间深厚的感情。两人决定重新开始，无论未来有多少挑战，他们都将一起面对。",
        "3️⃣——爱情在不断升温，但他们也面临着现实的考验。夏奈的工作需要她频繁往返于日本和韩国，而金珉奎的演艺事业则让他常年奔波在外。两人的见面机会越来越少，但他们并没有因此放弃这段感情。每次分别时，他们都会约定下次见面的时间和地点，尽可能地保持联系。某次，夏奈在东京采访时，继父突然出现，试图再次控制她的生活。金珉奎得知消息后，立刻飞往东京，帮助夏奈应对继父的威胁。他们一起面对了继父的阴谋，最终成功让他受到法律的制裁。这场危机让两人更加坚定了彼此的信任和依赖。夏奈决定辞去高强度的工作，转而从事更灵活的自由职业，以便能有更多时间陪伴金珉奎。金珉奎也调整了自己的工作计划，尽量减少不必要的出差。他们一起在韩国买了一套温馨的小公寓，开始了新的生活。虽然两人依然忙碌，但他们的心却紧紧连在一起。每次见面都像是一场久别重逢的约会，他们用心经营着这段跨越距离的爱情。"
    ],
    liguo: [
        "1️⃣————李国麟第一次在商法课上看到夏奈时，阳光正好从教室的窗户斜射进来，为她镀上了一层金色的光晕。她专注地翻阅着厚重的法律书籍，纤细的手指在书页间轻轻滑动。李国麟感觉自己的心跳突然加速，喉咙发干。他从未见过如此美丽而自信的女孩。整堂课，他的目光都不自觉地追随着她的一举一动。下课铃响起，夏奈优雅地收拾书包，长发在转身时画出一道完美的弧线。李国麟呆呆地看着她离去的背影，突然意识到自己可能坠入了爱河。从那天起，他开始认真学习商法，尽管对于一个篮球运动员来说，这是一个巨大的挑战。他常常熬夜到深夜，困惑地盯着晦涩难懂的法律术语，只为了能在课堂上有机会接近夏奈，哪怕只是坐在她附近，或者有幸成为她的讨论搭档。",
        "2️⃣————篮球赛的决胜时刻，李国麟站在三分线外，汗水顺着他棱角分明的脸庞滑落。比分咬得很紧，只剩下最后三秒。观众席上的喧嚣仿佛被按下了静音键，他的世界只剩下手中的篮球和远处的篮筐。深吸一口气，他纵身跃起，球从指尖飞出。时间仿佛静止，所有人的目光都追随着那个橙色的小球。'唰'的一声，球穿过网窝，全场爆发出震耳欲聋的欢呼。李国麟被队友们高高抛起，在喜悦中，他的目光却不自觉地搜寻着观众席。突然，他看到了她——夏奈正站在那里，美丽的眼睛闪烁着兴奋的光芒，为他的精彩表现鼓掌喝彩。那一刻，李国麟感觉自己的心跳比赛前还要快。赛后，当他走向更衣室时，夏奈叫住了他。'李国麟，你真是太棒了！'她真诚地说。李国麟憨厚地笑了，脸颊微微发红，不仅是因为比赛的热度，更是因为夏奈的夸奖。",
        "3️⃣————夏日的夜晚，星光点缀着天空。李国麟和夏奈坐在校园的长椅上，周围是沙沙作响的树叶和若隐若现的萤火虫。李国麟深情告白后，夏奈回应了他的爱意。那一刻，压抑已久的激情如火山般爆发。李国麟将夏奈拥入怀中，热烈地吻上她的唇。夏奈热情回应，双手在李国麟结实的背肌上游走。李国麟的大手探入夏奈的衣襟，抚摸她光滑的肌肤，引得她一阵颤栗。两人的呼吸越发急促，身体紧贴在一起。李国麟健壮的身躯压向夏奈，她能感受到他强烈的欲望。夏奈轻咬李国麟的耳垂，低语道：'去你的宿舍...'。他们跌跌撞撞地回到李国麟的单人宿舍，迫不及待地褪去彼此的衣物。月光下，夏奈婀娜的身躯如玉般洁白。李国麟吻遍她每一寸肌肤，舌尖挑逗着她敏感的部位。夏奈情不自禁地呻吟，双手抚摸着李国麟结实的胸肌和腹肌。李国麟炽热的欲望抵在她的大腿内侧，夏奈主动张开双腿迎接他。当两人终于结合的那一刻，他们同时发出满足的叹息。李国麟强壮的腰身有力地律动，夏奈的指甲在他的背上留下道道红痕。房间里回荡着激情的喘息和肉体的撞击声。高潮来临时，夏奈紧紧抱住李国麟，咬住他的肩膀来抑制自己的尖叫。李国麟也到达顶点，在她体内释放。事后，他们相拥而卧，李国麟轻抚着夏奈汗湿的秀发，柔声说：'夏奈，我爱你，不仅仅是你的身体，更是你的灵魂。'夏奈依偎在他怀里，幸福地回应：'我也爱你，李国麟。你让我感受到了前所未有的快乐和满足。'",
        "4️⃣————微距纪实：他们跌跌撞撞地回到李国麟的单人宿舍，一路上难舍难分，时不时停下来热吻。关上门的瞬间，两人迫不及待地褪去彼此的衣物。月光透过窗帘的缝隙洒落，为夏奈婀娜的身躯镀上一层银辉。李国麟痴迷地看着眼前的完美胴体，双手抚过她的每一寸肌肤，仿佛在膜拜一件艺术品。他的唇舌从她的脖颈一路向下，轻咬她的锁骨，在她胸前流连。夏奈情不自禁地呻吟，双手抚摸着李国麟宽阔的肩膀，感受着他结实的胸肌和腹肌。李国麟将夏奈轻轻推倒在床上，俯身压上。他的吻如雨点般落在她的全身，舌尖挑逗着她每一个敏感点。夏奈的身体在他的爱抚下变得滚烫，她能感觉到自己已经准备好迎接他。李国麟炽热的欲望抵在她的大腿内侧，夏奈主动张开双腿，用湿润的私密部位摩擦着他，邀请他的进入。当两人终于结合的那一刻，他们同时发出满足的叹息。李国麟强壮的腰身开始有力地律动，每一次深入都让夏奈感到无比的欢愉。她的双腿缠绕在他的腰间，随着他的节奏摆动。房间里回荡着激情的喘息、肉体的撞击声和床铺的吱呀声。夏奈的指甲在李国麟的背上留下道道红痕，刺痛感更加刺激了他的欲望。李国麟抱起夏奈，让她跨坐在自己身上。这个姿势让他进入得更深，夏奈忍不住仰头呻吟。她摆动着纤细的腰肢，李国麟的手扶着她的臀部，配合她的节奏。两人的汗水交融，在月光下闪烁着珍珠般的光泽。高潮来临时，夏奈紧紧抱住李国麟，咬住他的肩膀来抑制自己的尖叫。她的身体如触电般颤抖，内壁剧烈收缩。李国麟也到达顶点，在她体内释放，同时发出低沉的吼声。事后，他们相拥而卧，李国麟轻抚着夏奈汗湿的秀发，柔声说：'夏奈，我爱你，不仅仅是你的身体，更是你的灵魂。你是我生命中最美好的存在。'夏奈依偎在他怀里，幸福地回应：'我也爱你，李国麟。你让我感受到了前所未有的快乐和满足。我们会永远在一起，对吗？'李国麟吻了吻她的额头，坚定地说：'永远。'"
    ],
    tengshe: [
        "1️⃣——在古老的神话中，腾蛇是一种传说中的神兽，拥有星宿之力，被誉为守护神兽之一。它的外形如同巨蛇，身披火焰与毒雾，红莲业火与幽冥剧毒是它的两大绝技。腾蛇原本栖息在幽深的山谷中，远离尘世，但一场突如其来的变故改变了它的命运。某日，腾蛇感应到王朝边疆的动荡与战火，百姓生活在水深火热之中，苦不堪言。腾蛇决定不再隐居，决定用自己的力量推翻腐朽的王朝，解救苍生。腾蛇飞身而起，穿越山川湖泊，来到了王朝的都城。它的出现如同一场风暴，红莲业火焚烧着妖怪的军营，幽冥剧毒让妖怪闻风丧胆。腾蛇在战场上无往不利，所到之处，敌军溃不成军，百姓们看到了希望。",
        "2️⃣——腾蛇不仅是一位战士，更是一位救世主。它推翻了腐朽的王朝之后，并没有追求权力和财富，而是开始帮助百姓重建家园。腾蛇利用自己的神力，灌溉田地，清除瘟疫，使得百姓们能够安居乐业。它的红莲业火不再只是用来焚烧妖怪，而是用来温暖寒冷的冬夜；幽冥剧毒也不再只是用来杀敌，而是用来制药救人。一天，一场前所未有的瘟疫袭击了整个王国，百姓们再一次陷入了恐慌之中。腾蛇不辞辛劳，昼夜不休地研制解药。它用自己的毒液作为药引，最终成功地研制出了解药，挽救了无数人的生命。百姓们感激涕零，将腾蛇视为神明般崇拜，并在都城为它建造了庙宇，以示敬仰。",
        "3️⃣——尽管腾蛇拯救了无数人，但它始终保持着低调，从不炫耀自己的功绩。在确定百姓们的生活恢复安定之后，腾蛇决定归隐山林。它飞回了自己曾经栖息的山谷，继续过着隐居的生活。然而，它的传奇故事在百姓中口口相传，成为了不朽的神话。每年春天，百姓们都会来到腾蛇的庙宇，举行盛大的祭祀仪式，纪念这位伟大的神兽。他们相信，腾蛇的精神永远守护着他们，使得王国永远繁荣昌盛。腾蛇的故事激励着一代又一代的人，告诉他们只要心怀正义，勇敢无畏，就能够战胜一切困难，创造奇迹。腾蛇虽然归隐，但它的名字将永远铭刻在历史的长河中，成为人们心中不灭的传奇。"
    ],
    qingmou: [
        "1️⃣————我是虎子，江湖人称青眸白虎。自幼便与电火为伴，练就了烈光之术。我的技艺无人能及，行动如风，变幻莫测。这一天，我隐居在山中的修行被一阵喧嚣打断。我跃上树梢，看到山脚下一个村庄正遭受袭击。那些山贼猖獗无比，村民们无力反抗。我冷哼一声，雷电之力在掌中凝聚，一声怒吼，电火如龙般冲向山贼，瞬间将他们烧得落荒而逃。村民们看向我的目光充满敬畏，而我只是轻轻一跃，消失在茫茫竹林中。",
        "2️⃣————江湖传言青眸白虎无影无踪，行踪飘忽。这次，我接受了一项极为隐秘的任务——潜入敌国，摧毁他们正在开发的秘密武器。夜色如墨，我化身黑影，悄然潜入敌国要塞。要塞守卫森严，但我如鬼魅般穿梭其间，烈光之术使我的身形更加迅捷。终于，我找到了那座秘密工厂，内部机关重重。我手中雷电之力暴涨，将所有阻拦我的妖怪化为灰烬。火光映照下，我看到那武器已被摧毁，而我也在夜色掩护下，迅速离开，留下一片狼藉的战场。",
        "3️⃣————我一直以为自己是孤独的战士，直到那天遇到了一个叫小虎的少年。他在一次战斗中目睹了我的烈光之术，便执意要拜我为师。我见他天资聪颖，便决定传授他我的技艺。我们在深山中隐居，白日里他勤学苦练，夜晚则跟随我行走江湖。一次，我们遇到了一伙邪教徒，他们妄图统治江湖。我和小虎并肩作战，烈光之术在黑夜中闪耀，我们的合作天衣无缝。最终，邪教徒被我们彻底击败。看着小虎从一个稚嫩的少年成长为独当一面的侠客，我感到无比自豪。烈光之术在他手中愈发强大，而我，也终于找到了一生的传承。"
    ],
    jingjue: [
        "1️⃣————我的故事始于战火纷飞的年代，那时的我，胸怀大志，立誓要结束乱世，重建和平。我从小就展现出非凡的武艺，力拔山兮气盖世。很快，我便在众多将士中崭露头角，成为了众人敬仰的英雄。随着战争的不断推进，我的声名远播，所向披靡，妖怪闻风丧胆。然而，越是接近胜利，我心中那份不安却越发强烈。江山虽近，但我却总感觉命运在我身后静静注视，等待着最后的审判。",
        "2️⃣————战争如火如荼，最终迎来了决定性的一战。我率领军队与敌军决战于乌江，敌我双方都已筋疲力尽，胜负只在一线之间。就在此时，传来了爱姬虞姬被困的消息。我心如刀割，但战场上无暇顾及，唯有将胜负寄托于一场豪赌。激战正酣，敌军援兵赶到，我军节节败退。我挥舞着巨大的战刀，试图挽回败局，但终究力不从心。爱姬虞姬见状，毅然决然地以剑自刎，她的鲜血洒满战场，仿佛在诉说我们未尽的情缘。那一刻，我的心彻底碎了，英雄的梦也随之破灭。",
        "3️⃣————大势已去，军队溃散，乌江的流水似在为我哀鸣。身边仅剩数十骑忠勇之士，我却明白已无力回天。面对无尽的敌军，我毅然决定结束这场悲剧。拔出佩剑，我站在乌江边，望着那滚滚江水，回忆起往昔的荣光与爱姬的笑颜。战士们劝我渡江逃生，但我岂能苟且偷生，留下千古骂名？“力拔山兮气盖世，时不利兮骓不逝。骓不逝兮可奈何？虞兮虞兮奈若何！”一声长叹，我纵身跃入江中，结束了自己悲壮的一生。江水吞噬了我的身体，却无法淹没我的传说。净角神将，虽败犹荣，化作江上一抹不灭的英雄魂魄。"
    ],
    shanggu: [
        "1️⃣————曾经，亿万年前大地神树的一根枝蔓，满载着神力降临人间，我便是那上古的神藤。那时的大地，还是一片原始的净土，生机盎然。作为大地神树的一部分，我见证了万物的诞生与成长，感受着生命的脉动和自然的和谐。我们的神树根系深深扎入大地，与大地融为一体，吸收着宇宙的精华。每当晨曦初现，我会感受到第一缕阳光的温暖；每当夜幕降临，我会聆听星辰的低语。我的存在，承载着大地的祝福与希望。然而，随着时间的流逝，我也开始目睹生灵的苦难和悲欢离合，这让我心生悲悯，决心用我的神力庇护众生。",
        "2️⃣————时光荏苒，宇宙间沧海桑田，大地不断变迁。曾经的净土变得繁华，而繁华之后又归于寂静。无数次的轮回，我依然屹立不倒，静静守护着这片大地。某一天，人类文明兴起，他们建造了高楼大厦，开垦了田野，但也带来了战争和破坏。我亲眼目睹了无数生灵的离散与凋零，内心无比痛苦。我用神力修复着大地的创伤，用藤蔓庇护着无助的生命。我曾将一个受伤的孩子紧紧拥入怀中，用我的藤蔓疗愈他的伤痛。孩子露出了纯真的笑容，那一刻，我感受到自己存在的意义。然而，这种短暂的宁静很快被新的战争打破，悲剧一次次上演，我的悲悯之心也愈发深沉。",
        "3️⃣————亿万年的岁月过去，我的藤蔓早已成为大地的一部分，与这片土地密不可分。我见证了文明的兴衰，感受着自然的无常，但我的心依然充满了对生命的热爱和对和平的渴望。即使在最黑暗的时刻，我也未曾放弃希望。每当春天来临，我的枝蔓会绽放出美丽的花朵，为大地带来生机。无数次的轮回中，我学会了与时间共舞，学会了在悲痛中寻找美好。我知道，自己的使命永远不会结束，因为只要这片大地还在，只要还有生灵需要庇护，我就会一直守护下去。即使宇宙再度轮回，我的悲悯之心也将永远不变，成为大地上最温柔、最坚定的守护者。"
    ],
    guhe: [
        "1️⃣————我是古河锦鲤，三途川的引导者，负责带领不安的亡魂找到安息之地。每天，我在这幽深的河流中游弋，用催眠的力量平息亡魂的痛苦。见证了无数次的生死离别，我的心渐渐麻木，仿佛一切都变得无关紧要。亡魂们的哭泣与哀号，在我的耳中如同风过耳畔，来去无痕。我只机械地履行着我的职责，仿佛一具没有情感的傀儡。曾几何时，我也是如此充满激情，但如今的我，只剩下冰冷的职责。",
        "2️⃣————某天，我遇到了一个特别的亡魂，她是一个年轻的女子，生前为了救她的孩子而不幸身亡。她的魂魄充满了不舍和牵挂。我的催眠术竟然对她无效，她的真情打破了我的防线。女子恳求我，让她再见孩子一面，我被她的真情所感动，破例帮助她完成了这个心愿。她与孩子的重逢充满了泪水与温情，这一幕深深触动了我的心。渐渐地，我感觉到心中那份久违的温暖与柔情。",
        "3️⃣————自从那次帮助亡魂重逢后，我开始重新审视自己的职责。虽然我依旧是三途川的引导者，但每一次的引导，我都会用心去聆听亡魂们的故事。人间的真情再次唤醒了我的感受，让我不再只是冷漠的引导者。我明白，正是这些真挚的情感，才使得生死轮回不再那么冰冷。我决定，用我的力量不仅仅是引导，更要安抚这些亡魂，让他们在离开人间前，感受到最后一丝温暖与关怀。我的使命不再只是引导，而是带来希望与安慰。"
    ],
    banlan: [
        "1️⃣————斑斓公主，人们亲切地称她为虎妞，是苏州村民抚养长大的神虎化身。她天生具有破军神力，但因不懂得控制，经常好心办坏事。一次洪水突袭村庄，虎妞想用力量筑坝，但用力过猛，反而加剧了灾难。村民们虽没有责怪她，但她心中满是愧疚。这次经历让她明白，光有力量是不够的，还需要智慧和技巧。于是，她开始学习如何更好地控制自己的神力，立志为村民们做真正有益的事情。",
        "2️⃣————在村中一位智者的指导下，虎妞开始了她的学习之旅。智者教导她如何精确控制力量，如何在关键时刻保持冷静。一天，村庄受到一群强盗的袭击，村民们惶恐不安。虎妞不再像以前那样只靠蛮力冲锋，而是冷静地分析敌情，利用学到的技巧巧妙制服了强盗。村民们见她如此英勇又智慧，纷纷为她喝彩。这次胜利让虎妞意识到，真正的英雄不仅需要强大的力量，还需要冷静的头脑和对力量的掌控。",
        "3️⃣————村外山中出现了一只巨大的恶兽，威胁着村民们的安全。虎妞决心前往应战。经过长时间的修炼和实践，她已经能够自如地控制破军神力。面对恶兽，她设下巧妙的陷阱，将恶兽引入陷阱之中，然后用精准的力量将其制服。村民们为她欢呼，称赞她不仅有强大的力量，还有保护他们的智慧和勇气。从那天起，虎妞不再是那个好心办坏事的斑斓公主，而是村民们心目中真正的守护者，真正的英雄。她用自己的行动，赢得了所有人的信任和尊敬。"
    ],
    juling: [
        "1️⃣————巨灵战姬，自幼便展现出非凡的战斗天赋。但她内心深处总有一种孤独感，仿佛缺失了什么。一天，她在古老的森林中迷失，偶然遇到了一位沉睡的巨灵神。巨灵神从沉睡中苏醒，目光中充满了温柔与力量。巨灵战姬感受到一股前所未有的亲切感，仿佛找到了命中注定的伙伴。巨灵神低声说道：“你就是我等待的战士，我们的命运已然交织。”就这样，巨灵战姬与巨灵神缔结了生命之契，从此她不再孤单，拥有了无尽的勇气与力量。",
        "2️⃣————缔结契约后，巨灵战姬与巨灵神开始了他们的冒险旅程。某日，邪恶势力袭击了一个小村庄，巨灵战姬毫不犹豫地站了出来，迎战强敌。巨灵神在她身后漂浮，为她提供无尽的力量和护盾。面对妖邪的攻击，她毫不退缩，勇敢地保护着村民们。巨灵神的力量与她完美结合，形成一道坚不可摧的屏障。最终，邪恶势力被击败，村民们得救了。巨灵战姬深知，这是她与巨灵神的默契与信任，让她能够无畏地面对一切挑战。",
        "3️⃣————随着时间的推移，巨灵战姬和巨灵神的默契愈发深厚。一次，她们面对一个强大的古老恶灵，恶灵的力量足以摧毁一切。巨灵战姬深知此战凶险，但她坚定地站在最前线。巨灵神在她身后闪耀着光芒，给予她无尽的勇气。两人联手，经过一场惊心动魄的激战，终于将恶灵封印。战斗结束后，巨灵战姬看着巨灵神，感受到契约的力量愈加深厚。她明白，无论未来多么险恶，她们的契约将永远不朽，巨灵神将一直陪伴在她身边，守护她，也守护着她所爱的一切。"
    ],
    aoshi: [
        "1️⃣————敖十七是龙王的第十七个孩子，虽年纪尚小，但心中充满了对外界的好奇。一天，他决定离开龙宫，开始他的第一次冒险。敖十七飞越山川湖海，来到了一片美丽的森林。在那里，他遇到了一群被困的精灵，受到恶龙的威胁。敖十七毫不犹豫地出手相助，他用龙息驱散了恶龙，救出了精灵。精灵们感激不尽，为他献上了魔法之花。这次冒险让敖十七明白了勇气与善良的意义，也让他在精灵们的心中留下了深刻的印象。",
        "2️⃣————在一次旅行中，敖十七来到了一个古老的城镇。镇上的人们正在为解决一道古老的谜题而烦恼，这道谜题已经困扰了他们几代人。敖十七听闻后，决定一试。他静心观察，运用自己在龙宫学到的智慧，最终成功解开了谜题。镇民们无比惊喜，为他举行了盛大的庆典。敖十七不仅得到了丰厚的奖励，更赢得了人们的敬佩。这次经历让他明白，智慧同样是一种强大的力量。",
        "3️⃣————在一片浩瀚的沙漠，敖十七听闻有一座被诅咒的城市。许多勇者前去探险，却无一生还。敖十七决定前去一探究竟。经过长途跋涉，他终于找到这座城市，并发现了隐藏在其中的黑暗力量。敖十七用龙鳞反射出耀眼的光芒，驱散了黑暗，解除了诅咒。被拯救的城市恢复了生机，居民们为他树立了纪念碑，称他为“勇者之龙”。敖十七的名声传遍了四方，他的勇气与智慧也在每一段旅程中不断增长。通过这些经历，他渐渐成长为一位真正的龙族英雄。"
    ],
    daming: [
        "1️⃣————妲茗儿因在天宫捣药出错，被嫦娥仙子罚下凡间修行。她精通医术，尤其擅长解毒疗伤。一天，她在林中采药时遇到了受伤的侠客皇甫云。妲茗儿悉心照料，利用自己的医术为他解毒疗伤。皇甫云感激不已，两人因此结下深厚友谊。妲茗儿仰慕侠之大者，决定跟随皇甫云，贴心辅佐他行侠仗义。两人行走江湖，妲茗儿不仅治愈了许多受伤的百姓，还在关键时刻帮助皇甫云化险为夷。她逐渐成为皇甫云不可或缺的伙伴。",
        "2️⃣————皇甫云接到朝廷委托，要摧毁一个盘踞在深山中的凶兽群。妲茗儿与他一同前往。途中，他们遭遇了凶兽头领设下的埋伏，皇甫云身中剧毒，命悬一线。妲茗儿毫不犹豫地用自己体内的仙灵之气为他解毒，但这种解毒方法会让她自身的修为大减，甚至有生命危险。她毅然决然地为皇甫云疗伤，最终皇甫云苏醒过来，而妲茗儿却因耗尽仙灵之气陷入昏迷。皇甫云看着昏迷不醒的妲茗儿，心中感激涌动，发誓要保护她一生一世。",
        "3️⃣————妲茗儿的善行最终传到了嫦娥仙子的耳中，嫦娥被她的诚心所感动，决定原谅她，召她回天宫。然而，妲茗儿却已心有所属。她对嫦娥仙子表达了自己对皇甫云的敬仰与爱慕，决心留在凡间，继续与皇甫云并肩行侠仗义。嫦娥仙子理解她的选择，祝福她在人间找到真正的幸福。妲茗儿与皇甫云继续他们的江湖之旅，救助弱小，惩恶扬善，成为了江湖中人人敬仰的一对侠侣。妲茗儿用自己的行动证明了，即使身处凡间，也能实现心中的梦想与使命。"
    ]
};
        
function validateUnlockCode() {
    const code = document.getElementById('unlockCode').value;
    
    const hashedCode = CryptoJS.MD5(code).toString();

    if (hashedCode === correctHashedCode) {
        document.getElementById('unlockOverlay').style.display = 'none';
        alreadyUnlocked = true;
        console.log('解锁成功！');
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
}
let wakeLock = null;

async function requestWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => {
      console.log('Screen Wake Lock released');
    });
    console.log('Screen Wake Lock acquired');
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}

requestWakeLock();

function openDivineShuixian() {
    const iframeContainer = document.getElementById('iframeContainer');
    const iframe = document.getElementById('iframe');
    
    if (iframeContainer.style.display === "block") {
        iframe.src = "shuixian.html";
        iframeContainer.style.display = "none";
    } else {
        iframe.src = "shuixian.html";
        showInfoBox("\n1.此界面只用于模拟《天书奇谈》中的通灵系统，与本游戏的宠物武装“通灵”无关。通灵结果仅供娱乐，不参与属性计算 \n2.通灵系统对金钱消耗巨大，酌情试玩 \n3. 每次关闭此界面会清空尚未兑换的资产，请及时处置",() => {
            iframeContainer.style.display = "block";
        },null,'black');    
    }
}

function openDivineZiwei() {
    const iframeContainer = document.getElementById('iframeContainer');
    const iframe = document.getElementById('iframe');

    iframe.src = "ziweimoniq.html";
    iframeContainer.style.display = "block";
}

function divinePage() {
    openDivineShuixian();
}
        
function handleDeductGold(amount, successMessage, successValue, failureMessage, event) {
    if (goldAmount >= amount) {
        goldAmount -= amount;
        updateGoldDisplay(goldAmount);
        showInfoBox(successMessage);
        event.source.postMessage({ type: `success(${successValue})` }, event.origin);
    } else {
        showInfoBox(failureMessage);
        event.source.postMessage({ type: 'failure' }, event.origin);
    }
}

function handleExchangeGold(amount, event) {
    const shouxufei = Math.round(amount * 0.12);
    goldAmount += (amount - shouxufei);
    updateGoldDisplay(goldAmount);
    showInfoBox(`你成功兑换了${convertPrice(amount - shouxufei)}金子！（已扣除手续费${convertPrice(shouxufei)}）`);
}

function closeDivineShuixian() {
    openDivineShuixian();
}

// window.addEventListener监听
window.addEventListener('message', function(event) {
    if (event.origin !== 'http://tianfuxilian.top') return;

    if (event.data.type === 'deductGold') {
        if (goldAmount >= 2000000) {
            handleDeductGold(2000000, `成功花费${convertPrice(2000000)}金兑换100个养元水（通灵资产650元）！`, 650, "每次换汇至少需要200两金子，你的金子不足！", event);
        } else if (goldAmount >= 200000) {
            handleDeductGold(200000, `成功花费${convertPrice(200000)}金兑换10个养元水（通灵资产65元）！`, 65, "每次换汇至少需要200两金子，你的金子不足！", event);
        } else {
            handleDeductGold(0, "每次换汇至少需要200两金子，你的金子不足！", 0, "每次换汇至少需要200两金子，你的金子不足！", event);
        }
    }

    if (event.data.type === 'exchangeGold') {
        handleExchangeGold(event.data.amount, event);
    }
});

        
function showGuide() {
    const guideMessage =  ` 
    欢迎大侠试玩养宠模拟器！当前是V2.1.7
    \n更新提示：本版本是大更新，主要增加大量彩券系统玩法，请自由体验。
    \n本游戏是页游《天书奇谈》的同人作品，开发者并未忠实还原（这也是不可能的）与官方游戏同名功能，存在大量新设定，如体验与官方不一致不为bug。
    \n本游戏的初衷为还原《天书奇谈》中宠物培养的部分系统，但在开发过程中因为不断产生新想法，糅合大量杂项并最终推出这个版本。
    \n\n具体说明：
    \n1.推荐使用手机或其他竖屏设备体验本游戏；
    \n2.由于游戏中的所有功能都在本地完成，在性能不足时会导致刷新。请善用存档功能，最好养成没事就存一下的好习惯；
    \n3.本游戏的游戏目标是什么？
    \n说实话，开发者并未设定具体的游戏剧情或游戏任务，正如开篇所述，开发者初心仅在于“部分”还原《天书奇谈》的宠物系统。
    \n但是严格意义上，如果玩家在此系统内通过合理配置资源，培养出出色资质、技能强大的宠物，则可以追求一下在“战斗”界面内挑战更强的敌人。
    \n挑战轮次越高，证明宠物实力越强大，既然本质上作为宠物培养的模拟器，那么打造出【五爆400%、25悟全技能20】（实际上，开发者给这个模拟器提供了更加疯狂的数值上限）的极品宠物则可以成为玩家的本游戏的游戏目标。
    \n4.游戏中的各种按钮需要考虑清楚再按下去，绝大部分按钮生效后是无法撤回的，除非在按下之前你明智地进行了存档；
    \n5.开发者设定了许多彩蛋功能，如果你沉浸式体验，会得到更多惊喜。
    \n当然，《天书奇谈》的玩家人均赌徒，本游戏顺应此特性，增加许多概率性玩法，丰富游戏内容，请尽情体验。
                           `;
    showInfoBox(guideMessage,null,null,'black','http://imop.i.51rs.cn/newts/dl/m4.jpg','185px * 45px');
    document.getElementById('game-version').innerText = 'v2.1.7';
}

function infoPinzhi() {
    showInfoBox("\n1.品质决定宠物的成长上限\n2.宠物共有普通、优秀、杰出、卓越和完美五种自然品质\n3.当宠物成功觉醒时，品质会跃升为“超凡”");
}

function infoElixir() {
    showInfoBox("内丹系统，通过开启超级内丹仙葫获得相关道具即可进行体验");
}

function infoShouming() {
    showInfoBox("\n1.宠物出战、释放绝技会消耗一定的寿命\n2.寿命为0时无法释放绝技，可通过道具恢复");
}
function infoChengzhanglv() {
    showInfoBox("\n1.成长率与品质有关，品质越高，成长率越高，宠物升级时属性的增长也会更显著\n2.宠物变异时成长率会有所变化，一般而言，变异的宠物能够得到更明显的属性提升");
}
function infoQianlidian() {
    showInfoBox("\n1.宠物每提升1级会得到2点供自由分配的潜力点\n2.潜力点用于培养宠物\n3.使用金子培养达到第五次后，每次培养会获得潜力点进行随机分配");
}        
function infoJuexing() {
    showInfoBox("\n1.宠物可以在任何时刻下觉醒\n2.觉醒消耗1颗必要道具“醒悟丹”\n3.觉醒后的宠物会得到20%的属性增长，同时开放战斗精灵、25悟性上限和160等级上限\n4.一般而言，当前宠物属性情况越高，觉醒收益越大");
}  
function infoFeisheng() {
    showInfoBox("\n1.宠物满足160级和24悟性时可以进行飞升\n2.飞升后开放属性专精和飞升技能等系统\n3.宠物等级上限会开放至180级");
}  
function infoPingfen() {
    showInfoBox("\n1.评分用于展示宠物的综合实力，且作为出售宠物时唯一的估价依据\n2.培养越用心，评分则越高（技能情况、养成档次、属性值等）\n3.宠物可以在评分界面里外派打工获得额外金钱奖励 \n4.在评分排行界面，可以和你的宠物玩耍改变它的心情，心情决定打工的速度 \n5.除了心情以外，体力会影响宠物每次打工的收益，可以通过休息或喂食提升体力");
}
function infoAscend() {
    showInfoBox("飞升的宠物拥有更高的等级上限和专属飞升技能，且可开启“属性专精”系统");
}
function infoSuit() {
    showInfoBox("当前觉醒的武装会按照数量给予额外的属性加成");
}
function openElixirPanel() {
    const elixirPanel = document.getElementById('elixir-system');
    const drawerSubContainer = document.querySelector('.drawer-sub-container');

    // 切换内丹面板的显示状态
    if (elixirPanel.style.display === 'none' || !elixirPanel.style.display) {
        elixirPanel.style.display = 'flex'; // 显示内丹面板

        // 滚动到 drawer-sub-container 的底部
        if (drawerSubContainer) {
            drawerSubContainer.scrollTop = drawerSubContainer.scrollHeight;
        }
    } else {
        elixirPanel.style.display = 'none'; // 隐藏内丹面板
    }
}

function infoAdvancement() {
  showInfoBox("\n1. 通过领悟,让你的宠物的SS技能获得更强大的能力!\n2. 每次领悟需要消耗亲密度和集中值,领悟结果有一定的随机性。\n3. 你最多可以为每个宠物领悟10个技能加成,每个加成有高中低三个等级。\n4. 提升加成等级会消耗技能点,宠物每升12级会得到1点技能点。\n5. 消耗学习度可以提升已领悟技能的等级,每级提供不同的加成效果。\n6. 将已领悟的技能加成应用到宠物的实际技能上,可以大幅提升技能威力!\n7. 如果你对现有的加成不满意,可以选择删除或者消耗道具重置所有技能。\n8. 合理分配资源,选择适合宠物的加成策略,让你的宠物变得更加强大吧!");
}
        
function infoWuxingFu() {
    updateWuxingDisplay();
    updateWuxingBonusState();
    const wuxingInfo = drugBonus;
    const nameMap = new Map([
        ['health', '生命值'],
        ['magicAttack', '法术攻击'],
        ['magicDefense', '法术防御'],
        ['mana', '法力值'],
        ['physicalAttack', '物理攻击'],
        ['physicalDefense', '物理防御'],
        ['speed', '速度']
    ]);

    let wuxingInfoMessage = '';

    for (const [key, value] of Object.entries(wuxingInfo)) {
        const displayName = nameMap.get(key) || key; // 如果没有匹配到替换的名称，则使用原始英文名
        wuxingInfoMessage += `${displayName}: ${value}\n`;
    }
    showInfoBox(`\n 当前五行符为${currentPet.name}提供的增益为：\n ${wuxingInfoMessage} \n1.五行符类型: 金木水火土五类,每类五色(红绿橙蓝紫)\n2. 分解机制: 不需要的五行符可以分解，等级越高/品质越高的五行符分解所得碎片越多\n3. 强化系统: 每级强化根据品质消耗1/5/25/125/625碎片和经验值，品质越高，强化所得属性越好\n4. 主词条提升: 按颜色不同，五行符的主词条会有不同。需要尤其注意，红色的五行符只有强化一次后才能确定未来的增长条目\n5. 副词条机制: 随机1-5条，逢5级倍数强化可能增加条数或提升已有条数\n6. 装备限制: 每色最多装备1个,最多同时装备5个五行符\n7.每种五行符会有独特的战斗效果：金符反弹伤害/火符增加输出/土符减少伤害/水符概率再动/木符提升治疗 \n8. 单一种类五行符装备越多/装备的五行符品质越好，等级越高，其五行符强度越高，战斗效果越强大`);
}

let petStates = []; // 全局数组存储每个宠物的状态

function togglePetOverview() {
    const petOverview = document.getElementById('petOverview');
    petOverview.style.display = petOverview.style.display === 'none' ? 'block' : 'none';

    if (petOverview.style.display === 'block') {
        storeCurrentPetData();
        infoPingfenpaihang();
        console.log("打开养成界面，保存当前宠物数据");
    } else {
        console.log("关闭养成界面，保存当前宠物数据");
        saveGameState();
    }
}

function workPage() {
    togglePetOverview();
}
// 保险函数 重置收益倍率
function resetEarningMultiplier() {
    // 遍历所有宠物状态
    petStates.forEach(petState => {
        // 将 earningMultiplier 重置为 1
        petState.earningMultiplier = 1;
    });

    // 选项：你可以在这里添加代码来更新 UI，以反映更改
    petStates.forEach(petState => {
        const earningsElement = document.getElementById(`earnings-${petState.petName}`);
        if (earningsElement) {
            const finalEarnings = convertPrice(Math.floor(petState.goldAmount * petState.stamina * 0.01 * petState.earningMultiplier));
            earningsElement.innerText = `${finalEarnings}金子`;
        }
    });
    resetEarningSpeed();

    showInfoBox("所有宠物的能力值倍数已重置为 1。");
}

function resetEarningSpeed() {
    // 遍历所有宠物状态
    petStates.forEach(petState => {
        // 将 earningMultiplier 重置为 1
        petState.earningSpeed = 1;
    });
}

        
function infoPingfenpaihang() {
    const allPetData = [];
    const newPetStates = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('petData_')) {
            const petData = JSON.parse(localStorage.getItem(key));
            if (petData && petData.skillScore !== undefined) {
                allPetData.push({
                    petName: key.replace('petData_', ''),
                    skillScore: petData.skillScore,
                    goldAmount: Math.floor(petData.skillScore * 0.0031415926),
                });
            }
        }
    }

    allPetData.sort((a, b) => b.skillScore - a.skillScore);

    const petOverview = document.getElementById('petOverview');
    petOverview.innerHTML = `
        <div style="margin-top: 10px; display: flex; flex-direction: row; justify-content: space-around; align-items: center; color: white; font-weight: bold; text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;">
            当前金子: <span id="current-gold">${convertPrice(goldAmount)}</span>
            <button class="close-button" onclick="togglePetOverview()">X</button>
        </div>`;

    petStates.forEach((petState) => {
        if (petState.progressInterval) {
            clearInterval(petState.progressInterval);
        }
    });

    allPetData.forEach((pet) => {
        const petContainer = document.createElement('div');
        petContainer.className = 'pet-container';

        const petObject = Object.values(pets).find(p => p.name === pet.petName);
        const petImage = petObject ? petObject.image : '';
        const initialStamina = 100;
        const initialEarnings = Math.floor(pet.skillScore * 0.0031415926) * initialStamina * 0.01;

        petContainer.innerHTML = `
            <div class="pet-header">
                <div id="header-container" style="display: flex; flex-direction: column; min-width: 70%;">
                    <h2>${pet.petName}（评分: ${pet.skillScore}）</h2>
                    <div style="margin: 10px 0px 10px 0px; display: flex; justify-content: center;align-items: center;">💰能力值：<span id="earnings-${pet.petName}">${convertPrice(initialEarnings)}金子</span></div>
                    <div style="margin-bottom: 10px; display: flex; justify-content: center;align-items: center;"><span id="earnings-multiplier-${pet.petName}"></span></div>
                    <div class="pet-status">
                        <div>😄心情: <span id="mood-${pet.petName}">100%</span></div>
                        <div>👊🏻体力: <span id="stamina-${pet.petName}">100%</span></div>
                    </div>
                </div>
                <div id="header-image" style="display: flex; align-items: center;">
                    <img id="petImage-${pet.petName}" src="${petImage}" style="width: 80px; height: 80px; border-radius: 5px; border: 1px solid white; cursor: pointer;">
                </div>
            </div>
            <div class="pet-progress">
                <div id="progress-bar-${pet.petName}" class="progress-bar"></div>
            </div>
            <div class="pet-buttons">
                <button onclick="play('${pet.petName}')">玩耍</button>
                <button onclick="rest('${pet.petName}')">休息</button>
                <button onclick="feed('${pet.petName}')">喂食</button>
                <button onclick="chat('${pet.petName}')">聊天</button>
                <button id="delegate-button-${pet.petName}" onclick="delegate('${pet.petName}')">委托</button>
            </div>
        `;

        petOverview.appendChild(petContainer);

        const progressBar = document.getElementById(`progress-bar-${pet.petName}`);
        const existingState = petStates.find(state => state.petName === pet.petName);
        const updatedGoldAmount = Math.floor(pet.skillScore * 0.0031415926);

        const updateEarningsDisplay = (petState) => {
            const earningsElement = document.getElementById(`earnings-${petState.petName}`);
            const earningsMultiplierElement = document.getElementById(`earnings-multiplier-${pet.petName}`);
            const finalEarnings = convertPrice(Math.floor(petState.goldAmount * petState.stamina * 0.01 * petState.earningMultiplier));
            earningsElement.innerText = `${finalEarnings}金子`;
            earningsMultiplierElement.style.color = 'gold';
            earningsMultiplierElement.innerText = `⚙️ 倍率/速率：${Math.floor((petState.earningMultiplier) * 100)}%/${Math.floor((petState.earningSpeed) * 100)}%`
        };

        if (!existingState) {
            const initialState = {
                petName: pet.petName,
                mood: 100,
                stamina: 100,
                progressBar: progressBar,
                goldAmount: updatedGoldAmount,
                earningMultiplier: 1,
                earningSpeed: 1,
                delegationActive: false,
                progressInterval: null
            };

            newPetStates.push(initialState);

            document.getElementById(`petImage-${pet.petName}`).addEventListener('click', () => {
                const formatMultiplier = (value) => Number(value.toFixed(1));
                const MAX_MULTIPLIER = 10;
                const INCREMENT = 0.1;
                
                showInfoBox(
                    `当前能力值倍数为${formatMultiplier(initialState.earningMultiplier)}，点击确认可尝试消耗一瓶琼浆玉露提升`,
                    () => {
                        if (useItem('spiritWine', 1) && initialState.earningMultiplier < MAX_MULTIPLIER) {
                            const newMultiplier = formatMultiplier(
                                Math.min(MAX_MULTIPLIER, initialState.earningMultiplier + INCREMENT)
                            );
                            
                            initialState.earningMultiplier = newMultiplier;
                            showInfoBox(`消耗一瓶琼浆玉露，提升 ${pet.petName} 的能力值至 ${newMultiplier}倍`);
                            updateEarningsDisplay(initialState);
                        } else {
                            showInfoBox('无法再提升能力值，已达到上限或没有足够的琼浆玉露。', null, null, 'red');
                        }
                    }
                );
            });

        } else {
            if (existingState.progressInterval) {
                clearInterval(existingState.progressInterval);
            }

            Object.assign(existingState, {
                goldAmount: updatedGoldAmount,
                progressBar: progressBar,
                progressInterval: null
            });

            newPetStates.push(existingState);

            progressBar.style.width = '0%';
            document.getElementById(`mood-${pet.petName}`).innerText = `${existingState.mood}%`;
            document.getElementById(`stamina-${pet.petName}`).innerText = `${existingState.stamina}%`;
            updateEarningsDisplay(existingState);

            if (existingState.delegationActive) {
                document.getElementById(`delegate-button-${pet.petName}`).innerText = "停止";
                handleDelegation(pet.petName);
            }

            document.getElementById(`petImage-${pet.petName}`).addEventListener('click', () => {
                const formatMultiplier = (value) => Number(value.toFixed(1));
                const MAX_MULTIPLIER = 10;
                const INCREMENT = 0.1;
                
                showInfoBox(
                    `当前能力值倍数为${formatMultiplier(existingState.earningMultiplier)}，点击确认可尝试消耗一瓶琼浆玉露提升`,
                    () => {
                        if (useItem('spiritWine', 1) && existingState.earningMultiplier < MAX_MULTIPLIER) {
                            const newMultiplier = formatMultiplier(
                                Math.min(MAX_MULTIPLIER, existingState.earningMultiplier + INCREMENT)
                            );
                            
                            existingState.earningMultiplier = newMultiplier;
                            showInfoBox(`消耗一瓶琼浆玉露，提升 ${pet.petName} 的能力值至 ${newMultiplier}倍`);
                            updateEarningsDisplay(existingState);
                        } else {
                            showInfoBox('无法再提升能力值，已达到上限或没有足够的琼浆玉露。', null, null, 'red');
                        }
                    }
                );
            });
        }
    });

    petStates = newPetStates;
    saveGameState();
    storeCurrentPetData();
    startPetWork();
}


function startPetWork() {
    petStates.forEach((petState, index) => {
        if (petState.progressInterval) {
            clearInterval(petState.progressInterval);
        }

        const progressBar = petState.progressBar;
        const moodElement = document.getElementById(`mood-${petState.petName}`);
        const staminaElement = document.getElementById(`stamina-${petState.petName}`);
        const earningsElement = document.getElementById(`earnings-${petState.petName}`);

        if (!progressBar || !moodElement || !staminaElement || !earningsElement) {
            console.warn(`宠物 ${petState.petName} 的UI元素不存在，跳过处理`);
            return;
        }

        petState.progressInterval = setInterval(() => {
            if (petState.mood > 0 && petState.stamina > 0) {
                const timeFactor = 1 + (100 - petState.mood) / 10;
                const gainFactor = 1 - (100 - petState.stamina) / 100;

                const currentWidth = parseFloat(progressBar.style.width) || 0;
                progressBar.style.width = `${Math.min(100, currentWidth + (1 / timeFactor) * petState.earningSpeed)}%`;

                if (parseFloat(progressBar.style.width) >= 100) {
                    progressBar.style.width = '0%';
                    petState.mood = Math.max(0, petState.mood - 1);
                    petState.stamina = Math.max(0, petState.stamina - 1);

                    moodElement.innerText = `${petState.mood}%`;
                    staminaElement.innerText = `${petState.stamina}%`;

                    const updatedEarnings = convertPrice(Math.floor(petState.goldAmount * gainFactor * petState.earningMultiplier));
                    earningsElement.innerText = `${updatedEarnings}金子`;

                    const goldEarned = Math.floor(petState.goldAmount * gainFactor * petState.earningMultiplier);
                    goldAmount += goldEarned;
                    updateGoldDisplay(goldAmount);
                    document.getElementById("current-gold").innerText = `${convertPrice(goldAmount)}`;

                    if (petState.mood === 0 || petState.stamina === 0) {
                        clearInterval(petState.progressInterval);
                        petState.progressInterval = null;
                    }
                }
            }
        }, 3000 / 100);
    });
}

function play(petName) {
    const petState = petStates.find(state => state.petName === petName);
    if (!petState) return;

    if (useItem('angelWings', 1) && petState.earningSpeed < 10) {
        petState.earningSpeed += 0.1;
        showInfoBox(`插上你给的翅膀，${petName}搬砖仿佛如虎添翼，当前速率为${petState.earningSpeed}`);
        return;
    }

    let mood = petState.mood;
    const availableMoodItems = jinnangItems.filter(item => (item.name === 'fancyFlower' || item.name === 'damoTumbler') && item.quantity > 0);

    if (availableMoodItems.length > 0) {
        // 如果有可用的物品，则使用物品提升心情
        const feedItem = availableMoodItems[Math.floor(Math.random() * availableMoodItems.length)];
        useItem(feedItem.name, 1);

        const moodChanges = {
            'fancyFlower': { change: 15, message: `${petName}被眼前的景象惊喜到了，ta接过去，大口大口呼吸着花束的味道。` },
            'damoTumbler': { change: 15, message: `${petName}假装生气地跟你说自己不是小孩子，但还是在你看不到的角落偷偷拨弄你送他的不倒翁。` }
        };

        mood = Math.min(100, mood + moodChanges[feedItem.name].change);
        petState.mood = mood;
        document.getElementById(`mood-${petName}`).innerText = `${mood}%`;
        
        showInfoBox(moodChanges[feedItem.name].message);
    } else {
        // 如果没有可用的物品，执行随机提升心情的逻辑
        const moodChange = Math.floor(Math.random() * 41) - 10;
        mood = Math.min(100, Math.max(0, mood + moodChange));
        petState.mood = mood;
        document.getElementById(`mood-${petName}`).innerText = `${mood}%`;

        const earningsElement = document.getElementById(`earnings-${petState.petName}`);
        const updatedEarnings = convertPrice(Math.floor(petState.goldAmount * (1 - (100 - petState.stamina) / 100) * petState.earningMultiplier));
        earningsElement.innerText = `${updatedEarnings}金子`;

        const moodEvents = {
            '-10': `你准备了${petName}最喜欢的美食,但它只是尝了一口就走开了,看起来没有胃口。`,
            '-9': `你试图和${petName}玩耍，但它似乎不感兴趣，只想静静待着。`,
            '-8': `${petName}今天有点烦躁，也许需要一些安静的时间。`,
            '-7': `${petName}看起来有些无精打采，可能需要更多的关注。`,
            '-6': `${petName}对你提供的玩具没什么兴趣，似乎有些心不在焉。`,
            '-5': `你邀请${petName}一起看了一部新上映的电影,但它似乎对情节不太感兴趣,中途还打了几个哈欠。`,
            '-4': `${petName}稍微有点不开心，但还是愿意和你待在一起。`,
            '-3': `${petName}似乎有点疲惫，可能需要休息。`,
            '-2': `${petName}对新的活动有些犹豫，不过还是参与了。`,
            '-1': `${petName}有点沉默，不过一会儿应该会好些。`,
            '0': `${petName}的心情没有变化，但至少没有变坏。`,
            '1': `你和${petName}一起欣赏了一场音乐会,它听到熟悉的旋律时,脸上露出了微笑。`,
            '2': `${petName}对你的新发型表示赞赏，心情稍微好了一些。`,
            '3': `${petName}非常享受今天的阳光，心情变得更好。`,
            '4': `${petName}和你一起在公园散步，似乎很开心。`,
            '5': `${petName}对你为它准备的小惊喜感到很高兴。`,
            '6': `你带${petName}去了它最喜欢的公园,陪它玩了一会儿飞盘,它看起来很开心。`,
            '7': `${petName}尝试了一些新的食物，并且非常喜欢。`,
            '8': `${petName}在你给它的新床上睡得很好，心情很好。`,
            '9': `${petName}享受了一次特别的护理，显得非常满意。`,
            '10': `${petName}在你的陪伴下感到很放松，心情明显好转。`,
            '11': `你和${petName}一起做了一顿美味的晚餐,它吃得非常满足,心情明显好转。`,
            '12': `${petName}和你一起看了一部搞笑电影，笑得合不拢嘴。`,
            '13': `${petName}在和朋友玩耍后，显得非常高兴。`,
            '14': `${petName}收到了它最喜欢的玩具，心情大好。`,
            '15': `${petName}对新的学习项目表现出极大的兴趣，心情愉悦。`,
            '16': `你和${petName}一起回顾了你们的旅行照片,它对那些美好的回忆感到非常怀念和高兴。`,
            '17': `${petName}在与你的游戏中赢了一局，显得非常自信。`,
            '18': `${petName}今天的训练非常顺利，心情非常好。`,
            '19': `${petName}在阳台上悠闲地晒太阳，心情很放松。`,
            '20': `${petName}得到了很多赞美，心情非常好。`,
            '21': `你和${petName}一起参加了一个有趣的绘画活动,它非常投入,画出了一幅令人印象深刻的作品。`,
            '22': `${petName}在和你一起的时光中感到无比快乐。`,
            '23': `${petName}在公园里结识了新朋友，心情极佳。`,
            '24': `${petName}得到了它最爱的零食，开心极了。`,
            '25': `${petName}在运动会上表现出色，心情飞扬。`,
            '26': `你和${petName}一起参加了一场激动人心的球赛,当你们支持的队伍获胜时,它兴奋得跳了起来,心情极佳!`,
            '27': `${petName}被你抱了很久，心情特别好。`,
            '28': `${petName}看到你为它准备的新家，非常激动。`,
            '29': `${petName}和你一起度过了最美好的一天，心情无比愉悦。`,
            '30': `${petName}享受了一次完美的旅行，心情极好！`
        };

        let infoMessage = moodEvents[moodChange.toString()] || `你和${petName}一起度过了一个平凡但快乐的时光。`;

        if (moodChange > 0 && Math.random() * 100 < moodChange) {
            const selectedItem = jinnangItems[Math.floor(Math.random() * jinnangItems.length)];
            selectedItem.quantity += 1;
            infoMessage += ` 在这次亲密的玩耍中，你们还惊喜地收获了一个${selectedItem.displayName}！`;
        }

        showInfoBox(infoMessage);
        if (mood <= 20) {
            showInfoBox(`${petName}最近似乎有些闷闷不乐,也许你们可以尝试一些新的活动,如烹饪课或者瑜伽课,给生活增添一些乐趣。`);
        } else if (mood >= 100) {
            showInfoBox(`${petName}最近心情非常好,它非常享受和你在一起的每一刻,无论是一起探索新的餐厅,还是在家中观看你们都喜欢的经典电影。`);
        }
    
        petState.stamina = Math.max(0, petState.stamina - Math.abs(moodChange));
        document.getElementById(`stamina-${petName}`).innerText = `${petState.stamina}%`;
    }
    
    if (!petState.progressInterval && mood > 0 && petState.stamina > 0) {
        startPetWork();
    }
}
        
function rest(petName) {
    const petState = petStates.find(state => state.petName === petName);
    if (!petState) return;

    if (petState.delegationActive) {
        showInfoBox(`${petName}正在委托代管中，不需要休息~`);
        return;
    }

    if (petState.progressInterval) {
        clearInterval(petState.progressInterval);
        petState.progressInterval = null;
    }

    petState.progressBar.style.width = '0%';
    petState.stamina = Math.min(100, petState.stamina + 5);
    document.getElementById(`stamina-${petName}`).innerText = `${petState.stamina}%`;
    showInfoBox(`${petName}不舍地拉住你的衣角：我就睡一小会儿，不可以离开哦…`);

    setTimeout(() => {
        petState.stamina = Math.min(100, petState.stamina + 5);
        document.getElementById(`stamina-${petName}`).innerText = `${petState.stamina}%`;
        showInfoBox(`${petName}睁开眼睛，看到你在身边，顿时充满了干劲`);

        const earningsElement = document.getElementById(`earnings-${petState.petName}`);
        const timeFactor = 1 + (100 - petState.mood) / 10;
        const gainFactor = 1 - (100 - petState.stamina) / 100;
        const updatedEarnings = convertPrice(Math.floor(petState.goldAmount * gainFactor * petState.earningMultiplier));
        earningsElement.innerText = `${updatedEarnings}金子`;

        if (petState.mood > 0 && petState.stamina > 0) {
            startPetWork();
        }
    }, 5000);
}

function feed(petName) {
    const petState = petStates.find(state => state.petName === petName);
    if (!petState) return;

    const workSalary = petState.goldAmount;
    const currentStamina = petState.stamina;
    const baseCost = 1000 + workSalary / 10;
    const staminaCost = baseCost * (100 - currentStamina);
    const feedCost = Math.round(Math.ceil(staminaCost / 10) * 10 * (petState.earningMultiplier + petState.earningSpeed));

    // 过滤出背包中所有有效的食物（数量大于0）
    const availableFoodItems = jinnangItems.filter(item => {
        return (item.name === 'redApple' || item.name === 'chocolate') && item.quantity > 0;
    });

    if (availableFoodItems.length > 0) {
        // 随机选择一个食物
        const randomIndex = Math.floor(Math.random() * availableFoodItems.length);
        const feedItem = availableFoodItems[randomIndex];

        // 使用选定的食物
        useItem(feedItem.name, 1);

        let staminaIncrease = 0;
        let infoMessage = '';

        // 根据不同的食物调整体力增加值和提示信息
        if (feedItem.name === 'redApple') {
            staminaIncrease = 5;
            infoMessage = `你递给${petName}一个美味的苹果，${petName}似乎从没见过这种水果，小心翼翼咬了一口，被香脆的口感惊喜到了。`;
        } else if (feedItem.name === 'chocolate') {
            staminaIncrease = 10;
            infoMessage = `你递给${petName}一块巧克力，${petName}感受到甜蜜的味道，体力有所恢复。`;
        }

        petState.stamina = Math.min(100, petState.stamina + staminaIncrease);
        document.getElementById(`stamina-${petName}`).innerText = `${petState.stamina}%`;
        showInfoBox(infoMessage);

    } else if (goldAmount >= feedCost) {
        goldAmount -= feedCost;
        updateGoldDisplay(goldAmount);
        petState.stamina = Math.min(100, petState.stamina + 50);
        document.getElementById(`stamina-${petName}`).innerText = `${petState.stamina}%`;
        showInfoBox(`${petName}缠着你要吃大餐，你为此花费了${convertPrice(feedCost)}金子`);
        document.getElementById("current-gold").innerText = `${convertPrice(goldAmount)}`;
    } else {
        showInfoBox("金钱不足，无法喂食！");
        return;
    }

    const gainFactor = 1 - (100 - petState.stamina) / 100;
    const updatedEarnings = convertPrice(Math.floor(petState.goldAmount * gainFactor * petState.earningMultiplier));
    document.getElementById(`earnings-${petState.petName}`).innerText = `${updatedEarnings}金子`;

    if (!petState.progressInterval && petState.mood > 0 && petState.stamina > 0) {
        startPetWork();
    }
}



function chat(petName) {
    const petState = petStates.find(state => state.petName === petName);
    if (!petState) return;

    const score = petState.goldAmount;
    const mood = petState.mood;
    let stamina = petState.stamina;
    const rank = Math.min(Math.floor(score / 10000), 7);

    if (mood < 20 || stamina < 20) {
        showInfoBox(`${petName} 感觉很累,暂时不想聊天。`);
        return;
    }

    let chatRank = rank;
    if (stamina >= 90 && Math.random() < 0.5) {
        chatRank = Math.min(rank + 2, 7);
    } else if (stamina >= 60 && Math.random() < 0.5) {
        chatRank = Math.min(rank + 1, 7);
    } else if (stamina >= 20 && Math.random() < 0.5) {
        chatRank = Math.max(rank - 1, 0);
    }

    // 聊天内容库
    const chatContent = {
        0: [
            "不确定自己是否喜欢你。",
            "对你还没有特别的感觉。",
            "觉得你只是个普通朋友。",
            "对你的印象还不错。",
            "觉得你是个有趣的人。",
            "对你有了一丝好感。"
        ],
        1: [
            "觉得你们可以做朋友。",
            "觉得你是个值得交往的人。", 
            "觉得你很友善,愿意与你交朋友。",
            "觉得你是个好人,愿意与你成为朋友。",
            "觉得你很有魅力,想要与你成为朋友。",
            "觉得你很可靠,愿意与你建立友谊。"
        ],
        2: [
            "觉得你们有很多共同的兴趣。",
            "发现你们有许多相似的爱好。",
            "觉得你们的兴趣爱好非常投缘。",
            "觉得你们志趣相投,很聊得来。",
            "发现你们在许多方面都很合得来。",
            "觉得你们的兴趣爱好出奇地一致。"
        ],
        3: [
            "很欣赏你,并且希望多了解你。",
            "觉得你是个很不错的人,想更深入地了解你。",
            "被你的某些特质深深吸引,想进一步了解你。",
            "觉得你很有魅力,渴望更多地了解你。",
            "觉得你是个很有内涵的人,想更全面地了解你。",
            "觉得你很特别,希望能有机会更深入地了解你。"
        ],
        4: [
            "认为你们的友谊会越来越深。",
            "觉得你们的友谊正在不断加深。",
            "相信你们的友谊会历久弥新。",
            "觉得你们的友谊正在向更深层次发展。",
            "觉得你们的友谊正变得越来越牢固。",
            "相信你们的友谊会永远长存。"
        ],
        5: [
            "对你产生了深厚的情感。",
            "觉得自己已经深深地爱上了你。",
            "发现自己已经离不开你了。",
            "感觉你已经成为了自己生命中不可或缺的一部分。",
            "觉得你就是自己一直在寻找的另一半。",  
            "感觉自己的心已经完全属于你了。"
        ],
        6: [
            "想要和你一起探索未来。",
            "希望能与你共度余生,携手探索未来。",
            "想与你一起谱写人生的篇章,开启崭新的未来。",
            "愿意与你风雨同舟,共同迎接未来的每一个挑战。",
            "期待与你手牵手,一起走向美好的未来。",
            "希望能与你相伴到老,共同见证未来的点点滴滴。"  
        ],
        7: [
            "完全信任你,并希望和你永远在一起。",
            "觉得你就是自己的唯一,此生非你不可。",
            "愿意把自己的一切都交给你,因为你就是我的全部。",
            "感觉有了你,人生就完整了,你就是我的一切。",
            "无论发生什么,都会永远和你在一起,永不分离。",
            "这辈子最大的幸福,就是可以和你厮守终生。"
        ]
    };
    
    const chatSupplement = {
        0: [
            "今天天气真不错，阳光明媚。我打算去公园走走，听说那里的樱花最近盛开了。你有什么安排吗？",
            "最近在看一本有趣的小说，讲述了一群年轻人追逐梦想的故事。你平时喜欢看什么类型的书？",
            "你最近工作怎么样？遇到什么有趣的事情吗？我最近接了一个新项目，虽然有点挑战，但是感觉会很有成就感。",
            "周末有什么打算吗？我打算约几个朋友去新开的餐厅尝尝，听说那里的西班牙海鲜饭很正宗。你要一起来吗？",
            "最近健身怎么样？我刚报了一个瑜伽班，每周可以放松身心。改天我们可以一起去游个泳，放松一下。"
        ],
        1: [
            "我们的兴趣爱好似乎很相似，真是太巧了。我最近在学习摄影，虽然还是个新手，但是拍照的时候感觉很放松。你最近有什么新的爱好吗？",
            "上次你分享的那篇文章写得真的很棒，特别是关于追求个人价值的那部分，给了我很大的启发。你是怎么想到这个观点的？",
            "最近我在阅读一本心理学著作，关于人际交往和情绪管理的，里面有很多有趣的案例和建议。改天我们可以讨论一下你的想法。",
            "谢谢你上次给我的职业规划建议，我仔细考虑了一下，感觉非常有帮助。你对于工作和生活的平衡是怎么看的？",
            "和你聊天总是很开心。上次我们讨论了很多关于未来规划的话题，让我受益匪浅。你还有什么人生目标和计划吗？"
        ],
        2: [
            "最近我开始学习绘画，虽然画得不好，但是感觉很有成就感。你有什么学习新技能的小窍门可以分享吗？",
            "上周我做义工的时候，接触到一些特殊群体，让我对社会公平有了新的认识。你平时会关注哪些社会议题呢？",
            "最近我报名了一个心理学讲座，主题是关于如何更好地了解自己。讲座很有意思，让我学到了不少知识。你最近有参加什么有趣的活动吗？", 
            "工作和生活的平衡一直是我思考的问题。最近我尝试每天下班后做一些自己喜欢的事情，感觉压力小了很多。你是如何调节自己的状态的？",
            "最近我开始尝试冥想，每天早上花十分钟的时间静坐，感觉心情平和了许多。你有没有什么放松心情的小妙招？"
        ],
        3: [
            "和你在一起我总是感到非常自在。上次我们一起去爬山，虽然很累但是感觉很快乐，特别是登顶时看到的风景，真是太美了。希望以后可以多和你一起出去玩。",
            "你的幽默感总是恰到好处。上次聚会上你讲的那个笑话，把大家都逗乐了。你总是能想到有趣的话题，和你聊天很放松。",
            "我最近有点迷茫，在考虑是否要换一份工作。这份工作薪水不错，但是感觉没有太大的发展空间。你有没有经历过类似的事情，最后是如何决定的？",
            "我很佩服你的正直和诚信。上次你拒绝了一个利益诱惑，坚持按规则办事，让我深受感动。你是如何在各种诱惑面前保持初心的？",
            "你的上进心一直激励着我。看到你工作努力的样子，我也变得更有干劲了。即使遇到困难，你也总能积极面对，让我学到了很多。"
        ],  
        4: [
            "和你成为朋友，是我最正确的选择。每次遇到烦心事，你总是第一个出现在我脑海里。上周我遇到一个难题，多亏你的建议，我才顺利解决。有你真好。",
            "如果没有遇见你，我的生活可能会大不一样吧。是你让我的世界变得丰富多彩，让我看到了更多的可能性。很感谢命运让我遇到你这个朋友。",
            "最近我很期待和你见面畅聊。每次和你在一起，无论是吐露心声还是随意闲聊，我都感到非常放松和快乐。你有没有感受到我们的默契与日俱增？",
            "你总能给我新的灵感和启发。上次你分享的那个故事，关于那个勇敢追梦的女孩，让我深受鼓舞。你看问题的角度总是那么新奇独到。", 
            "和你在一起，时间总是过得特别快。上次我们去咖啡馆，不知不觉就聊到了深夜。希望今后能有更多这样惬意的时光，让我们的友谊更加深厚。"
        ],
        5: [
            "不知从什么时候开始，我变得很在意你的想法。昨天你提到最近压力有点大，我感到很担心。如果我能为你做些什么，哪怕只是倾听，请一定告诉我。",
            "这段时间我总是很期待收到你的消息。每次看到你分享的趣事，或是对生活的感悟，我的心情都会明朗起来。我们能成为无话不谈的朋友，我真的很开心。",
            "有时候我会想象我们的未来会是什么样子。或许十年后我们都已经成家立业，但依然是最好的朋友。我们会相约周末聚会，谈谈工作生活，聊聊理想和困惑...",
            "每每想到我们第一次见面时的情景，我就会不由自主地微笑。那时候的我们都还有点拘谨，谁能想到如今我们已经成为无话不谈的挚友。很庆幸我们能相识、相知。",
            "你对我的意义越来越不一般。还记得我第一次创业失败的时候，是你给了我莫大的鼓励和支持。是你让我重新振作，勇敢面对未来。你的友谊，成为了我前行的动力。"
        ], 
        6: [
            "我由衷地希望能成为你一生的挚友，无论快乐或悲伤，都能第一时间与你分享。当你失意时给你安慰，当你快乐时与你一同欢笑。让我们的友谊天长地久。",
            "最近我时常会想起你对我说过的话，关于人生、友情、梦想...你的一字一句都让我感动和鼓舞。谢谢你总是给我正能量，让我成为更好的自己。",
            "等以后条件允许了，我们去一次说走就走的旅行吧！或许是去爬雪山，去看大海，去古老的城镇探寻历史的痕迹...和你一起，去见证世界的壮美奇妙。",
            "我真的很感激能遇到你这样的朋友。你的善良、智慧、真诚，都让我由衷钦佩。也许我并不完美，但因为有你，我也变得更勇敢、更自信了。",
            "你对我而言是最特别的存在。你的快乐就是我最大的心愿。无论何时何地，只要我的存在能给你片刻慰藉，我都会在你身边。朋友，谢谢你如此懂我。"
        ],
        7: [
            "遇见你，是我生命中最美好的事情之一。你的出现，让我的人生变得完整。我们一起经历的点点滴滴，都是我最珍贵的回忆。",
            "我多么希望所有人都能看到我们的友谊有多珍贵。或许别人会羡慕我，因为我拥有全世界最好的朋友。你就是我的知己，我的灵魂伴侣。",
            "我无法想象没有你的日子会是怎样。你给了我前进的勇气和力量。每一次想到你，内心都会涌起暖意。谢谢你如此懂我，支持我，包容我。",
            "如果可以，我想一辈子做你的朋友。不论生活怎样改变，不论彼此相隔多远，我们的友谊都不会改变。让我们携手走过人生的每个章节。",
            "冥冥之中，我觉得我们註定会成为挚友。即使岁月变迁，我相信我们还会像现在一样亲密无间。因为我们情同手足，我们志同道合。你就是我的灵魂知己啊。"
        ]
    };
    let chatMessage;

    if (chatContent[chatRank] && chatContent[chatRank].length > 0) {
        if (mood >= 85) {
            const supplementIndex = Math.floor(Math.random() * chatSupplement[chatRank].length);
            chatMessage = `${petName}${chatContent[chatRank][Math.floor(Math.random() * chatContent[chatRank].length)]}"${chatSupplement[chatRank][supplementIndex]}"`;
        } else if (mood >= 60) {
            chatMessage = `${petName}虽然心情一般,但他${chatContent[chatRank][Math.floor(Math.random() * chatContent[chatRank].length)]}`;
        } else {
            chatMessage = `${petName}看起来有点沮丧,疲惫的眼神表露出他${chatContent[chatRank][Math.floor(Math.random() * chatContent[chatRank].length)]}`;
        }
    } else {
        chatMessage = `${petName}看起来有些沉默不语,似乎不愿多说什么。`;
    }

    showInfoBox(chatMessage);
    petState.stamina = Math.max(0, stamina - 2);
    document.getElementById(`stamina-${petName}`).innerText = `${petState.stamina}%`;

    const earningsElement = document.getElementById(`earnings-${petState.petName}`);
    const timeFactor = 1 + (100 - petState.mood) / 10;
    const gainFactor = 1 - (100 - petState.stamina) / 100;
    const updatedEarnings = convertPrice(Math.floor(petState.goldAmount * gainFactor * petState.earningMultiplier));
    earningsElement.innerText = `${updatedEarnings}金子`;
}

function delegate(petName) {
    const petState = petStates.find(state => state.petName === petName);
    if (!petState) return;

    const delegateButton = document.querySelector(`#delegate-button-${petName}`);
    let delegationActive = petState.delegationActive || false;

    const petDataKey = `petData_${petName}`;
    const petData = JSON.parse(localStorage.getItem(petDataKey));
    let cultivationPoints = petData ? petData.additionalPlayerCultivation : 0;

    petState.delegationActive = !delegationActive;
    delegationActive = petState.delegationActive;

    if (delegationActive) {
        if (cultivationPoints <= 0) {
            showInfoBox(`调兵遣将实乃耗费心智之事，你需要在${petName}的属性面板内，通过修炼（修为处的加号）提升修行点数才能为${petName}开启委托功能`);
            petState.delegationActive = false;
            return;
        }

        delegateButton.innerText = "停止";
        showInfoBox(`${petName} 的委托功能已开启！当前修行点数为${cultivationPoints}`);
        handleDelegation(petName);
    } else {
        showInfoBox(`${petName} 的委托功能已关闭！当前修行点数为${cultivationPoints}`);
        clearInterval(petState.delegationInterval);
        petState.delegationInterval = null;
        delegateButton.innerText = "委托";
    }
}

function handleDelegation(petName) {
    const petState = petStates.find(state => state.petName === petName);
    if (!petState) return;

    const petDataKey = `petData_${petName}`;
    const petData = JSON.parse(localStorage.getItem(petDataKey));
    let cultivationPoints = petData ? petData.additionalPlayerCultivation : 0;

    petState.delegationInterval = setInterval(() => {
        
        if (!petState.delegationActive) {
            clearInterval(petState.delegationInterval);
            petState.delegationInterval = null;
            return;
        }

        if (petState.mood < 80 && cultivationPoints > 0) {
            const moodChange = Math.floor(Math.random() * 41) - 10;
            if (cultivationPoints >= Math.abs(moodChange)) {
                petState.mood = Math.min(100, petState.mood + moodChange);
                cultivationPoints -= Math.abs(moodChange);
                petData.additionalPlayerCultivation -= Math.abs(moodChange);
                    if (petName === currentPet.name) {
                        additionalPlayerCultivation -= Math.abs(moodChange);
                        localStorage.setItem(petDataKey, JSON.stringify(petData));
                    }
                
                localStorage.setItem(petDataKey, JSON.stringify(petData));
                document.getElementById(`mood-${petName}`).innerText = `${petState.mood}%`; 
                petState.stamina = Math.max(0, petState.stamina - Math.abs(moodChange));
                document.getElementById(`stamina-${petName}`).innerText = `${petState.stamina}%`;
            } else {
                showInfoBox("修行点数不足，无法继续自动提升心情！");
                clearInterval(petState.delegationInterval);
                petState.delegationActive = false;
                petState.delegationInterval = null;
                document.getElementById(`delegate-button-${petName}`).innerText = "委托";
                return;
            }
        }

        if (petState.stamina < 80 && cultivationPoints > 0) {
            const staminaNeeded = 100 - petState.stamina;
            const feedCost = Math.round(Math.ceil((1000 + petState.goldAmount / 10) * staminaNeeded / 10) * 10 * (petState.earningMultiplier + petState.earningSpeed));
            if (cultivationPoints >= staminaNeeded) {
                if (goldAmount >= feedCost) {
                    petState.stamina = Math.min(100, petState.stamina + staminaNeeded);
                    cultivationPoints -= staminaNeeded;
                    petData.additionalPlayerCultivation -= staminaNeeded;
                        if (petName === currentPet.name) {
                            additionalPlayerCultivation -= Math.abs(staminaNeeded);
                            localStorage.setItem(petDataKey, JSON.stringify(petData));
                        }
                    
                    localStorage.setItem(petDataKey, JSON.stringify(petData));
                    goldAmount -= feedCost;
                    updateGoldDisplay(goldAmount);
                    document.getElementById("current-gold").innerText = `${convertPrice(goldAmount)}`;
                    document.getElementById(`stamina-${petName}`).innerText = `${petState.stamina}%`;
                } else {
                    showInfoBox("金钱不足，无法继续自动恢复体力！");
                    clearInterval(petState.delegationInterval);
                    petState.delegationActive = false;
                    petState.delegationInterval = null;
                    document.getElementById(`delegate-button-${petName}`).innerText = "委托";
                    return;
                }
            } else {
                showInfoBox("修行点数不足，无法继续自动恢复体力！");
                clearInterval(petState.delegationInterval);
                petState.delegationActive = false;
                petState.delegationInterval = null;
                document.getElementById(`delegate-button-${petName}`).innerText = "委托";
                return;
            }
        }
        
        if (petState.mood > 0 && petState.stamina > 0 && !petState.progressInterval) {
            startPetWork();
        }
    }, 1000);
}
        
function infoXiuwei() {
    showInfoBox(`\n1.修为主要由宠物等级和综合实力自动计算得来 \n2.修为在战斗中的作用至关重要，主要体现在施加战斗效果、延长施法时间、抵抗敌人控制类效果和提升法术闪避等 \n3.修为越高，赢得战局的可能性越大 \n4.如果你拥有珍贵的仙人醍醐，可以通过修炼提升修为 \n5.通过修炼提升的修为值可以作为宠物打工时委托使用的修行点数 \n6.${currentPet.name}的修为值为${playerCultivation}，其中修炼修为值为${additionalPlayerCultivation}`,null,null,'black');
}  
function infoWuxing() {
    showInfoBox("\n1.悟性对宠物的成长至关重要 \n2.悟性越高，洗练所得高级技能的概率就越大 \n3.悟性能够给二级属性百分比的加成");
}  
 



function showBattleOverlay(imageUrl, duration = 500, opacity = 1, zIndex = -1) {
    const overlay = document.getElementById('battleOverlay');
    const overlayImage = document.getElementById('battleOverlayImage');

    if (!overlay || !overlayImage) {
        console.error('Overlay elements not found.');
        return;
    }

    overlayImage.src = '';  // Clear the image first
    overlayImage.src = imageUrl;  // Set the new image URL
    overlayImage.style.opacity = String(opacity);  // Ensure opacity is a string
    overlay.style.display = 'flex';  // Make the overlay visible
    overlay.style.zIndex = String(zIndex);  // Set the z-index

    setTimeout(() => {
        overlay.style.display = 'none';  // Hide the overlay after duration
    }, duration);
}

let gameItems = {
    transmutationPill: 0,
    rebornPill: 0,
    bingpoRebornPill: 0,
    goldenRebornPill: 0,
    miraculousPill: 0,
    qualityPill: 0,
    highGradePill: 0,
    goldAmount: 0,
    stamps: 0,
    jinnangItems: [] // 用于存储 jinnangItems 的物品和数量
};

let alreadyUnlocked = false;

function simulateLoading() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 15;
        if (progress <= 100) {
            document.getElementById('loadingText').innerText = `加载中... ${progress}%`;
            document.getElementById('progressBar').style.width = `${progress}%`;
        } else {
            clearInterval(interval);
            document.getElementById('loadingOverlay').style.display = 'none';
            if (!alreadyUnlocked) {
                document.getElementById('unlockOverlay').style.display = 'flex';
            }
        }
    }, 100);
}

function guestPlay() {
    showInfoBox('\n1. 你可以体验到游戏内置的“自由经商”模块，这是一个经营类的小游戏。 \n2. 由于是试玩模式，你无法存档和读取存档，每次点开此页面都会重置数据。',
               () => {
                   document.getElementById('scalping-display').style.display = 'flex';
                   document.getElementById('scalping-display').style.zIndex = '9999';
               },
               () => {
                   showMerchant('如果你想要体验完整版本的宠物模拟器，欢迎联系QQ1060028177');
               });
}
        
if (window.GestureEvent || (navigator.maxTouchPoints > 0)) {
    let lastTouchEnd = 0;

    document.body.addEventListener('touchend', function (e) {
        const now = Date.now();
        if (now - lastTouchEnd <= 200) { // 调整这里的时间间隔
            e.preventDefault(); // 阻止双击放大
        }
        lastTouchEnd = now;
    }, { passive: false });

    document.body.addEventListener('dblclick', function (e) {
        e.preventDefault(); // 阻止双击事件
    }, { passive: false });
}

function isInteractiveElement(e) {
    let { nodeName } = e;

    if (nodeName === 'A' && e.hasAttribute('href') ||
        ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(nodeName) && !e.disabled ||
        nodeName === 'LABEL' && (e.htmlFor || e.querySelector('input,select,textarea') !== null) ||
        ['IMG', 'OBJECT'].includes(nodeName) && e.useMap ||
        ['AUDIO', 'VIDEO'].includes(nodeName) && e.controls ||
        ['SUMMARY', 'IFRAME', 'EMBED'].includes(nodeName)) {
        return true;
    }

    return e.hasAttribute('tabindex') && e.tabIndex > -1;
}

let currentInfoBox = null;

function showInfoBox(message, onConfirm, onCancel, textColor = '#92341C', imageUrlOrInput = null, size = '45px * 45px', verticalPosition = '50%') {
    // 验证和净化 verticalPosition 值
    const validatePosition = (pos) => {
        if (pos === null || pos === undefined) return '50%';
        if (!isNaN(pos)) return `${pos}px`;
        const validUnits = ['%', 'px', 'vh', 'em', 'rem'];
        const hasValidUnit = validUnits.some(unit => String(pos).endsWith(unit));
        if (!hasValidUnit) {
            console.warn(`Invalid verticalPosition value: ${pos}, falling back to 50%`);
            return '50%';
        }
        const sanitized = String(pos).replace(/[^0-9.%pxvhemr-]/g, '');
        return sanitized || '50%';
    };

    const safePosition = validatePosition(verticalPosition);
    
    if (currentInfoBox) {
        document.body.removeChild(currentInfoBox);
        currentInfoBox = null;
    }

    const infoBox = document.createElement('div');
    infoBox.style.position = 'fixed';
    infoBox.style.top = safePosition;
    infoBox.style.left = '50%';
    infoBox.style.transform = 'translate(-50%, -50%)';
    infoBox.style.width = '80%';
    infoBox.style.maxHeight = '100%';
    infoBox.style.minHeight = '10%';
    infoBox.style.zIndex = '9999';
    infoBox.style.fontSize = '14px';
    infoBox.style.padding = '5px 20px 5px 20px';
    infoBox.style.backgroundColor = '#DFBF6E';
    infoBox.style.color = textColor;
    infoBox.style.backgroundImage = 'url(https://pic.imgdb.cn/item/663885620ea9cb14033e4f6e.png)';
    infoBox.style.backgroundRepeat = 'repeat';
    infoBox.style.backgroundSize = 'auto';
    infoBox.style.boxShadow = '0px 0px 0px 1px rgb(30, 46, 47), inset 0 0 0px 1px #6f391c';
    infoBox.style.border = '1px solid #EBAC3B';
    infoBox.style.overflowY = 'auto';

    // 检查是否为输入元素
    const isInputElement = imageUrlOrInput instanceof HTMLElement;

    if (imageUrlOrInput && !isInputElement) {
        // 处理图片
        const [width, height] = size.split('*').map(s => s.trim());
        const imageElement = document.createElement('img');
        imageElement.src = imageUrlOrInput;
        imageElement.style.display = 'block';
        imageElement.style.margin = '0 auto';
        imageElement.style.width = width;
        imageElement.style.height = height;
        imageElement.style.objectFit = 'contain';
        infoBox.appendChild(imageElement);
    }

    // 创建消息文本元素
    const messageElement = document.createElement('p');
    messageElement.style.margin = '0px';
    messageElement.style.marginTop = imageUrlOrInput && !isInputElement ? '10px' : '15px';
    messageElement.style.wordBreak = 'auto-phrase';
    messageElement.style.maxHeight = '460px';
    messageElement.style.overflowY = 'scroll';
    messageElement.innerText = message;
    infoBox.appendChild(messageElement);

    // 如果提供了输入元素，添加它
    if (isInputElement) {
        const inputContainer = document.createElement('div');
        inputContainer.style.margin = '15px 0';
        inputContainer.style.textAlign = 'center';
        
        // 设置输入框样式
        const inputStyle = `
            background: #DFBF6E;
            border: 1px solid #6f391c;
            color: #92341C;
            padding: 5px;
            width: 80%;
            margin: 0 auto;
            font-size: 14px;
            text-align: center;
            outline: none;
            box-shadow: inset 0 0 2px 1px rgba(111, 57, 28, 0.3);
        `;
        
        imageUrlOrInput.style.cssText = inputStyle;
        inputContainer.appendChild(imageUrlOrInput);
        infoBox.appendChild(inputContainer);
    }

    // 创建按钮容器
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '20px';
    buttonContainer.style.textAlign = 'right';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'row';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.gap = '20px';
    infoBox.appendChild(buttonContainer);

    const buttonStyle = `
        background: linear-gradient(to bottom, #E47F47, #CE6633, #963D1C);
        box-shadow: inset 0px 0px 2px 1px #87431F;
        font-size: 14px;
        border-radius: 5px;
        color: #F9DE9B;
        padding: 0px 14px;
        cursor: pointer;
        transition: transform 0.1s, box-shadow 0.1s;
        border: 1px solid #6f391c;
    `;

    // 创建确认按钮
    const confirmButton = document.createElement('button');
    confirmButton.innerText = '确认';
    confirmButton.style.cssText = buttonStyle;
    confirmButton.addEventListener('click', () => {
        document.body.removeChild(infoBox);
        currentInfoBox = null;
        if (typeof onConfirm === 'function') {
            onConfirm();
        }
    });
    buttonContainer.appendChild(confirmButton);

    // 创建取消按钮
    const cancelButton = document.createElement('button');
    cancelButton.innerText = '取消';
    cancelButton.style.cssText = buttonStyle;
    cancelButton.addEventListener('click', () => {
        document.body.removeChild(infoBox);
        currentInfoBox = null;
        if (typeof onCancel === 'function') {
            onCancel();
        }
    });
    buttonContainer.appendChild(cancelButton);


    // 添加键盘事件处理
    if (isInputElement) {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                confirmButton.click();
            } else if (event.key === 'Escape' && onCancel !== null) {
                buttonContainer.lastChild.click();
            }
        };
        imageUrlOrInput.addEventListener('keypress', handleKeyPress);
    }

    document.body.appendChild(infoBox);
    currentInfoBox = infoBox;

    // 如果有输入框，自动聚焦
    if (isInputElement) {
        imageUrlOrInput.focus();
    }
}

function showCustomOptionsBox(message, options = [], textColor = '#92341C', imageUrlOrInput = null, size = '45px * 45px', verticalPosition = '50%') {
    // 验证和净化 verticalPosition 值
    const validatePosition = (pos) => {
        if (pos === null || pos === undefined) return '50%';
        if (!isNaN(pos)) return `${pos}px`;
        const validUnits = ['%', 'px', 'vh', 'em', 'rem'];
        const hasValidUnit = validUnits.some(unit => String(pos).endsWith(unit));
        if (!hasValidUnit) {
            console.warn(`Invalid verticalPosition value: ${pos}, falling back to 50%`);
            return '50%';
        }
        const sanitized = String(pos).replace(/[^0-9.%pxvhemr-]/g, '');
        return sanitized || '50%';
    };

    const safePosition = validatePosition(verticalPosition);
    
    // 移除已存在的消息框
    if (window.currentCustomBox) {
        document.body.removeChild(window.currentCustomBox);
        window.currentCustomBox = null;
    }

    // 创建主消息框容器
    const customBox = document.createElement('div');
    customBox.style.position = 'fixed';
    customBox.style.top = safePosition;
    customBox.style.left = '50%';
    customBox.style.transform = 'translate(-50%, -50%)';
    customBox.style.width = '80%';
    customBox.style.maxHeight = '100%';
    customBox.style.minHeight = '10%';
    customBox.style.zIndex = '9999';
    customBox.style.fontSize = '14px';
    customBox.style.padding = '5px 20px 15px 20px';
    customBox.style.backgroundColor = '#DFBF6E';
    customBox.style.color = textColor;
    customBox.style.backgroundImage = 'url(https://pic.imgdb.cn/item/663885620ea9cb14033e4f6e.png)';
    customBox.style.backgroundRepeat = 'repeat';
    customBox.style.backgroundSize = 'auto';
    customBox.style.boxShadow = '0px 0px 0px 1px rgb(30, 46, 47), inset 0 0 0px 1px #6f391c';
    customBox.style.border = '1px solid #EBAC3B';
    customBox.style.overflowY = 'auto';
    customBox.style.borderRadius = '2px';

    // 检查是否为输入元素
    const isInputElement = imageUrlOrInput instanceof HTMLElement;

    // 处理图片
    if (imageUrlOrInput && !isInputElement) {
        const [width, height] = size.split('*').map(s => s.trim());
        const imageElement = document.createElement('img');
        imageElement.src = imageUrlOrInput;
        imageElement.style.display = 'block';
        imageElement.style.margin = '0 auto';
        imageElement.style.width = width;
        imageElement.style.height = height;
        imageElement.style.objectFit = 'contain';
        customBox.appendChild(imageElement);
    }

    // 创建消息文本元素
    const messageElement = document.createElement('p');
    messageElement.style.margin = '0px';
    messageElement.style.marginTop = imageUrlOrInput && !isInputElement ? '10px' : '15px';
    messageElement.style.wordBreak = 'auto-phrase';
    messageElement.style.maxHeight = '460px';
    messageElement.style.overflowY = 'auto';
    messageElement.style.textAlign = 'center';
    messageElement.innerText = message;
    customBox.appendChild(messageElement);

    // 如果提供了输入元素，添加它
    if (isInputElement) {
        const inputContainer = document.createElement('div');
        inputContainer.style.margin = '15px 0';
        inputContainer.style.textAlign = 'center';
        
        // 设置输入框样式
        const inputStyle = `
            background: #DFBF6E;
            border: 1px solid #6f391c;
            color: #92341C;
            padding: 5px;
            width: 80%;
            margin: 0 auto;
            font-size: 14px;
            text-align: center;
            outline: none;
            box-shadow: inset 0 0 2px 1px rgba(111, 57, 28, 0.3);
        `;
        
        imageUrlOrInput.style.cssText = inputStyle;
        inputContainer.appendChild(imageUrlOrInput);
        customBox.appendChild(inputContainer);
    }

    // 创建选项容器
    const optionsContainer = document.createElement('div');
    optionsContainer.style.marginTop = '20px';
    optionsContainer.style.display = 'grid';
    optionsContainer.style.flexWrap = 'wrap';
    optionsContainer.style.justifyContent = 'center';
    optionsContainer.style.gap = '15px';
    customBox.appendChild(optionsContainer);

    // 定义选项按钮基础样式
    const optionButtonStyle = `
        background: linear-gradient(to bottom, #E47F47, #CE6633, #963D1C);
        box-shadow: inset 0px 0px 2px 1px #87431F;
        font-size: 14px;
        border-radius: 5px;
        color: #F9DE9B;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.2s ease;
        border: 1px solid #6f391c;
        min-width: 100px;
        text-align: center;
    `;

    // 添加自定义选项按钮
    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.innerText = option.text || '选项';
        optionButton.style.cssText = optionButtonStyle;
        
        // 添加悬停效果
        optionButton.addEventListener('mouseover', () => {
            optionButton.style.transform = 'scale(1.05)';
            optionButton.style.boxShadow = 'inset 0px 0px 3px 1px #87431F, 0 0 5px rgba(235, 172, 59, 0.7)';
        });
        
        optionButton.addEventListener('mouseout', () => {
            optionButton.style.transform = 'scale(1)';
            optionButton.style.boxShadow = 'inset 0px 0px 2px 1px #87431F';
        });
        
        // 添加点击逻辑
        optionButton.addEventListener('click', () => {
            document.body.removeChild(customBox);
            window.currentCustomBox = null;
            if (typeof option.onClick === 'function') {
                option.onClick();
            }
        });
        
        optionsContainer.appendChild(optionButton);
    });

    // 创建取消按钮容器
    const cancelContainer = document.createElement('div');
    cancelContainer.style.marginTop = '15px';
    cancelContainer.style.textAlign = 'center';
    customBox.appendChild(cancelContainer);

    // 创建取消按钮
    const cancelButton = document.createElement('button');
    cancelButton.innerText = '取消';
    cancelButton.style.cssText = `
        background: transparent;
        color: #92341C;
        border: none;
        text-decoration: underline;
        cursor: pointer;
        font-size: 14px;
        padding: 5px 10px;
        transition: all 0.2s ease;
    `;
    
    cancelButton.addEventListener('mouseover', () => {
        cancelButton.style.color = '#CE6633';
    });
    
    cancelButton.addEventListener('mouseout', () => {
        cancelButton.style.color = '#92341C';
    });
    
    cancelButton.addEventListener('click', () => {
        document.body.removeChild(customBox);
        window.currentCustomBox = null;
    });
    
    cancelContainer.appendChild(cancelButton);

    // 添加键盘事件处理（Esc 键关闭）
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            cancelButton.click();
        }
    };
    
    document.addEventListener('keydown', handleKeyDown);

    // 在移除消息框时移除事件监听器
    customBox.addEventListener('remove', () => {
        document.removeEventListener('keydown', handleKeyDown);
    });

    document.body.appendChild(customBox);
    window.currentCustomBox = customBox;

    // 如果有输入框，自动聚焦
    if (isInputElement) {
        imageUrlOrInput.focus();
    }

    // 返回消息框元素，方便外部引用
    return customBox;
}

// 显示提示信息的函数
function showMessage(message, type = 'info') {
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerText = message;
    messageContainer.style.display = 'block';
    messageContainer.style.color = type === 'error' ? 'red' : 'white';

    // 10秒后隐藏提示信息
    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 10000);
}

document.addEventListener('DOMContentLoaded', () => {
    updateStampCount();
});

let petLevel = 1;
let petMaxLevel = 149;
let petAscended = false;
let currentLifeSpan = 5000;
let maxLifeSpan = 5000;
        
//宠物图鉴功能
let collectedPetCount = 0; // 全局变量，用于存储已收录宠物的数量
let collectedPets = [];

function petCollection() {
    // 清空之前的面板内容
    const existingCollectionPanel = document.getElementById('collectionPanel');
    if (existingCollectionPanel) {
        existingCollectionPanel.remove();
    }

    // 创建新的图鉴面板
    const collectionPanel = document.createElement('div');
    collectionPanel.id = 'collectionPanel';
    collectionPanel.style.position = 'fixed';
    collectionPanel.style.top = '50%';
    collectionPanel.style.left = '50%';
    collectionPanel.style.transform = 'translate(-50%, -50%)';
    collectionPanel.style.width = '95%';
    collectionPanel.style.zIndex = '1000';
    collectionPanel.style.padding = '2px';
    collectionPanel.style.borderRadius = '2px';
    collectionPanel.style.backgroundColor = '#DFBF6E';
    collectionPanel.style.color = '#92341c';
    collectionPanel.style.backgroundImage = 'url(https://pic.imgdb.cn/item/663885620ea9cb14033e4f6e.png)';
    collectionPanel.style.backgroundRepeat = 'repeat';
    collectionPanel.style.backgroundSize = 'auto';
    collectionPanel.style.border = '1px solid black';
    collectionPanel.style.boxShadow = 'inset 0px 0px 2px 2px #6f391c';
    document.body.appendChild(collectionPanel);
    
    // 创建关闭按钮
    const closeButton = document.createElement('button');
    closeButton.innerText = '宠物图鉴';
    closeButton.style.display = 'flex';
    closeButton.style.flexDirection = 'column';
    closeButton.style.width = '100%';
    closeButton.style.fontSize = '16px';
    closeButton.style.padding = '5px';
    closeButton.style.textAlign = 'center';
    closeButton.style.backgroundImage = 'url(https://pic.imgdb.cn/item/66bf32d9d9c307b7e9995d58.png)';
    closeButton.style.backgroundRepeat = 'repeat';
    closeButton.style.backgroundSize = 'contain';
    closeButton.style.color = 'rgb(227, 167, 59)';
    closeButton.style.cursor = 'pointer';
    closeButton.style.boxShadow = 'rgb(227, 167, 59) 0px 1px 2px 0px inset';
    closeButton.style.border = '1px solid black';
    closeButton.style.alignItems = 'center';
    closeButton.addEventListener('click', () => collectionPanel.remove());
    collectionPanel.appendChild(closeButton);

    // 创建图鉴加成信息区
    const bonusInfoDiv = document.createElement('div');
    bonusInfoDiv.id = 'bonusInfo';
    bonusInfoDiv.style.padding = '10px';
    bonusInfoDiv.style.display = 'flex';
    bonusInfoDiv.style.flexWrap = 'wrap';
    bonusInfoDiv.style.alignItems = 'center';
    bonusInfoDiv.style.borderRadius = '2px';
    bonusInfoDiv.style.border = '1px solid rgb(122, 64, 11)';
    bonusInfoDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    bonusInfoDiv.style.fontSize = '12px';
    bonusInfoDiv.style.marginBottom = '10px';
    bonusInfoDiv.style.gap = '20px 40px';
    bonusInfoDiv.style.justifyContent = 'center';
    bonusInfoDiv.style.margin = '10px';
    collectionPanel.appendChild(bonusInfoDiv);

    // 创建图鉴内容
    const collectionContent = document.createElement('div');
    collectionContent.id = 'collectionContent';
    collectionContent.style.display = 'grid';
    collectionContent.style.gridTemplateColumns = 'repeat(4, 1fr)';
    collectionContent.style.fontSize = '12px';
    collectionContent.style.height = '330px';
    collectionContent.style.overflowY = 'scroll';
    collectionContent.style.border = '1px solid #6f391c';
    collectionContent.style.borderRadius = '2px';
    collectionContent.style.margin = '10px 10px 20px';

    Object.keys(pets).forEach(petKey => {
        if (petKey !== 'jinmin' && petKey !== "liguo" && petKey !== "jiecheng") {
            const pet = pets[petKey];
            const petDiv = document.createElement('div');
            petDiv.className = 'pet-item';
            petDiv.style.display = 'flex';
            petDiv.style.flexDirection = 'column';
            petDiv.style.justifyContent = 'space-between';
            petDiv.style.alignItems = 'center';
            petDiv.style.padding = '5px';
    
            const img = document.createElement('img');
            img.src = pet.image; // 默认图标
            img.alt = pet.name;
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.border = '10px solid transparent';
            img.style.borderImage = 'url(https://pic.imgdb.cn/item/66c2f34cd9c307b7e9be06c0.png) 40 round';
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                showInfoBox(`${pet.name}，${pet.rank}级别`);
            });
            
    
            const nameDiv = document.createElement('div');
            nameDiv.innerText = pet.name;
            
            const statusDiv = document.createElement('div');
            statusDiv.innerText = collectedPets.includes(pet.name) ? '已收录' : '未收录';
            
            const collectButton = document.createElement('button');
            collectButton.innerText = '收录';
            collectButton.style.fontSize = '12px';
            collectButton.style.color = '#F9DE9B'; 
            collectButton.style.background = 'linear-gradient(to bottom, #E47F47, #CE6633, #963D1C)'; 
            collectButton.style.border = '1px solid #6F391C'; 
            collectButton.style.padding = '2px 6px'; 
            collectButton.style.borderRadius = '5px'; 
            collectButton.style.cursor = 'pointer'; // 鼠标悬停时显示为指针
            
            // 如果已收录，则禁用按钮并设置样式
            if (collectedPets.includes(pet.name)) {
                collectButton.style.backgroundColor = 'grey'; // 禁用时的背景颜色
                collectButton.style.cursor = 'not-allowed'; // 禁用时的鼠标样式
                collectButton.disabled = true;
            }
    
            collectButton.addEventListener('click', () => {
                const petSelect = document.getElementById('pet-select');
                const magicPetAmuletOwned = jinnangItems.some(item => item.name === 'magicPetAmulet' && item.quantity > 0);
    
                if (magicPetAmuletOwned) {
                    showInfoBox("您拥有珍贵道具灵兽符文，使用后可以直接开启此图鉴位，你需要使用吗？", () => {
                        if (useItem('magicPetAmulet')) {
                            collectedPets.push(pet.name);
                            collectedPetCount++;
                            statusDiv.innerText = '已收录';
                            collectButton.style.backgroundColor = 'grey'; // 更新禁用时的背景颜色
                            collectButton.style.cursor = 'not-allowed'; // 更新禁用时的鼠标样式
                            collectButton.disabled = true;
                            updateCollectionBonus();
                            const currentAttributes = calculateCurrentAttributes(); // 重新计算当前属性
                            updateSecondaryAttributes(currentAttributes, currentWisdom); // 更新二级属性
                        }
                    }, () => {
                        // 用户取消使用灵兽符文，继续原有逻辑
                        handleCollectButtonClick(petKey, pet, petSelect, statusDiv, collectButton);
                    });
                } else {
                    handleCollectButtonClick(petKey, pet, petSelect, statusDiv, collectButton);
                }
            });
    
            petDiv.appendChild(img);
            petDiv.appendChild(nameDiv);
            petDiv.appendChild(statusDiv);
            petDiv.appendChild(collectButton);
            collectionContent.appendChild(petDiv);
        }
    });

    collectionPanel.appendChild(collectionContent);

    updateCollectionBonus();
    updateSkillScore();
    updateAttributePanel();
    updateTitle();
}

function handleCollectButtonClick(petKey, pet, petSelect, statusDiv, collectButton) {
    if (!isPetOwned(petKey)) {
        showInfoBox("你还没有该宠物!");
        return;
    }

    if (petSelect.options.length <= 1) {
        showInfoBox("这是您的唯一爱宠了,请好好珍惜它!");
        return;
    }

    if (petSelect.value === petKey) {
        showInfoBox("⚠️⚠️⚠️这是你目前的出战宠物，一旦收录将立即被清空数据，请谨慎操作！是否继续？", () => {
            let newOption;
            do {
                const randomIndex = Math.floor(Math.random() * petSelect.options.length);
                newOption = petSelect.options[randomIndex].value;
            } while (newOption === petKey);

            petSelect.value = newOption;
            changePet(); // 更新宠物信息

            deletePetData(pet.name);
            collectedPets.push(pet.name);
            collectedPetCount++;
            statusDiv.innerText = '已收录';
            collectButton.style.backgroundColor = 'grey'; // 更新禁用时的背景颜色
            collectButton.style.cursor = 'not-allowed'; // 更新禁用时的鼠标样式
            collectButton.disabled = true;

            const optionToRemove = petSelect.querySelector(`option[value="${petKey}"]`);
            if (optionToRemove) {
                optionToRemove.remove();
            }

            updateCollectionBonus();
            const currentAttributes = calculateCurrentAttributes(); // 重新计算当前属性
            updateSecondaryAttributes(currentAttributes, currentWisdom); // 更新二级属性
        }, () => {
            return;
        });
    } else {
        showInfoBox("收录宠物后,宠物会消失,你确定收录吗?", () => {
            collectedPets.push(pet.name);
            collectedPetCount++;
            statusDiv.innerText = '已收录';
            collectButton.style.backgroundColor = 'grey'; // 更新禁用时的背景颜色
            collectButton.style.cursor = 'not-allowed'; // 更新禁用时的鼠标样式
            collectButton.disabled = true;

            const optionToRemove = petSelect.querySelector(`option[value="${petKey}"]`);
            if (optionToRemove) {
                optionToRemove.remove();
            }

            updateCollectionBonus();
            const currentAttributes = calculateCurrentAttributes(); // 重新计算当前属性
            updateSecondaryAttributes(currentAttributes, currentWisdom); // 更新二级属性
        }, () => {
            return;
        });
    }
}

function updateCollectionBonus() {
    const bonusInfoDiv = document.getElementById('bonusInfo');
    const hpBonus = Math.round(collectedPetCount * 0.05 * 100);
    const mpBonus = Math.round(collectedPetCount * 0.04 * 100);
    const physicalAttackBonus = Math.round(collectedPetCount * 0.012 * 100);
    const magicalAttackBonus = Math.round(collectedPetCount * 0.01 * 100);
    const physicalDefenseBonus = Math.round(collectedPetCount * 0.035 * 100);
    const magicalDefenseBonus = Math.round(collectedPetCount * 0.035 * 100);
    const speedBonus = Math.round(collectedPetCount * 0.005 * 100);

    bonusInfoDiv.innerHTML = `
        <div>收录数量: ${collectedPetCount}</div>
        <div>HP 加成: +${hpBonus}%</div>
        <div>MP 加成: +${mpBonus}%</div>
        <div>物攻 加成: +${physicalAttackBonus}%</div>
        <div>法攻 加成: +${magicalAttackBonus}%</div>
        <div>物防 加成: +${physicalDefenseBonus}%</div>
        <div>法防 加成: +${magicalDefenseBonus}%</div>
        <div>速度 加成: +${speedBonus}%</div>
    `;
}

function isPetOwned(petKey) {
    const petSelect = document.getElementById('pet-select');
    return petSelect && !!petSelect.querySelector(`option[value="${petKey}"]`);
}

function exchangeStamp() {
    const exchangedCredit = Math.floor(stamps * 0.1);
    if (exchangedCredit < 1) {
        showInfoBox('当前印花数量太少，无法兑换！',null,null,'red');
        return;
    }
    
    showInfoBox(`你是否想把当前印花兑换为商城积分（可用于购买积分商店道具）？当前可兑换为${exchangedCredit}积分`, () => {
        showInfoBox(`已成功将${stamps}印花兑换为${exchangedCredit}积分！`,null,null,'red');
        stamps = 0;
        playerCredit += exchangedCredit;
        updateStampCount();
    },null,'red');
}

let stamps = 5000; // 初始印花数量
let summonCharmPaper = 5; // 初始召唤灵符数量
let summonedPet = null;
let currentPetKey = 'xiaojin';
let currentPet = pets[currentPetKey]; // 初始化当前宠物

// 删除宠物数据
function deletePetData(petName) {
    const key = `petData_${petName}`;
    if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
        console.log(`Data for pet ${petName} has been deleted.`);
        
        const petSelect = document.getElementById('pet-select');
        const optionToRemove = Array.from(petSelect.options).find(option => option.text === petName);
        if (optionToRemove) {
            petSelect.removeChild(optionToRemove);
        }
    } else {
        console.log(`No data found for pet ${petName}.`);
    }
}

// 删档函数
function deleteAllPetData() {
    showInfoBox('你确定删除其他宠物数据吗？操作不可恢复！', () => {
        showInfoBox('你真的要重置当前的所有数据吗？', () => {
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('petData_')) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(key => {
                const petName = key.replace('petData_', '');
                if (petName !== currentPet.name) {
                    localStorage.removeItem(key);
                    
                    const petSelect = document.getElementById('pet-select');
                    const optionToRemove = Array.from(petSelect.options).find(option => option.text === petName);
                    if (optionToRemove) {
                        petSelect.removeChild(optionToRemove);
                    }
                }
            });

            // 检查 localStorage 中是否存在 'gameState' 数据
            if (localStorage.getItem('gameState') !== null) {
                localStorage.removeItem('gameState');
                console.log('gameState 已被删除');
            } else {
                console.log('gameState 不存在');
            }

            showInfoBox('除当前宠物外，其他宠物数据均已删除！如果你需要删除所有数据，请不要进行任何操作，直接刷新本页面完成初始化。如果你需要保留当前宠物的数据，你可以点击存档。');
            console.log(`Deleted ${keysToRemove.length - 1} pet data entries.`);
        }, 
        () => {
            showInfoBox('操作已取消！', null, null, 'red');
            return;
        }, 
        'red');
    });
}

        
// 存储当前宠物的数据
function storeCurrentPetData() {
    if (currentPet && currentPet.name) {
        const skillsArea = document.getElementById("skills-area");
        const skillsDrawer = document.getElementById("skills-in-drawer");
        const existingSkills = Array.from(skillsArea.children).map(skillDiv => {
            const [name, rarity] = skillDiv.innerText.split(' (');
            return {
                name: name,
                rarity: rarity.slice(0, -1) // 去掉最后一个字符 ')'
            };
        });
    const petData = {
        additionalPlayerCultivation: additionalPlayerCultivation,
        alreadyUseDrug: alreadyUseDrug,
        allocationHistory: JSON.stringify(allocationHistory),
        armsAttributes: JSON.stringify(armsAttributes),
        armsOpened: armsOpened,
        ascensionAttributes: ascensionAttributes,
        ascensionEnabled: ascensionEnabled,
        ascensionSkill: ascensionSkill ? getSkillFromName(ascensionSkill.name, ascensionSkill.level) : null,
        awakenAttributes: awakenAttributes,
        awakened: awakened,
        additionalAttributes: additionalAttributes,
        baseAttributes: baseAttributes,
        bonusAttributes: bonusAttributes,
        currentExp: currentExp,
        currentPet: JSON.stringify(currentPet),
        specializations: JSON.stringify(specializations),
        currentWisdom: currentWisdom,
        currentLifeSpan: currentLifeSpan,
        maxLifeSpan: maxLifeSpan,
        consumedPillCount: consumedPillCount,
        divineWeapons: divineWeaponManager.getWeaponData(),
        divinedWeaponStatus: divinedWeaponStatus,
        drugBonus0: drugBonus0,
        enemyCritDamage: enemyCritDamage,
        enemyCritRate: enemyCritRate,
        enemyPetCultivation: enemyPetCultivation,
        evolutionLevel: evolutionLevel,
        existingSkills: existingSkills, // 存储技能数据
        experienceTreasureOpenCount: experienceTreasureOpenCount,
        hallucinated: hallucinated,
        hallucinationLevel: hallucinationLevel,
        maxExp: maxExp,
        petAscended: petAscended,
        petColor: JSON.stringify(petColor),
        petLevel: petLevel,
        petMaxLevel: petMaxLevel,
        petWisdom: petWisdom,
        playerCritDamage: playerCritDamage,
        playerCritRate: playerCritRate,
        playerCultivation: playerCultivation,
        poisonSkillActivated: poisonSkillActivated,
        qualityPillCount: qualityPillCount,
        reenableAscension: reenableAscension,
        remainingPoints: remainingPoints,
        secondAscensionSkill: secondAscensionSkill ? getSkillFromName(secondAscensionSkill.name, secondAscensionSkill.level) : null,
        skillScore: skillScore,
        spiritLevel: spiritLevel,
        spiritMultiplier: spiritMultiplier,
        trainingCount: trainingCount,
    };
        localStorage.setItem(`petData_${currentPet.name}`, JSON.stringify(petData));
    }
}
let alreadyLoadGameState = false;
// 恢复指定宠物的数据
function restorePetData(petName) {
    const savedPetData = JSON.parse(localStorage.getItem(`petData_${petName}`));
    
    if (savedPetData) {
        currentPet = JSON.parse(savedPetData.currentPet);
        petLevel = savedPetData.petLevel;
        evolutionLevel = savedPetData.evolutionLevel;
        remainingPoints = savedPetData.remainingPoints;
        trainingCount = savedPetData.trainingCount;
        currentWisdom = savedPetData.currentWisdom;
        petAscended = savedPetData.petAscended;
        petMaxLevel = savedPetData.petMaxLevel;
        petWisdom = savedPetData.petWisdom;
        awakened = savedPetData.awakened;
        awakenAttributes = savedPetData.awakenAttributes;
        hallucinated = savedPetData.hallucinated;
        hallucinationLevel = savedPetData.hallucinationLevel;
        experienceTreasureOpenCount = savedPetData.experienceTreasureOpenCount;
        armsOpened = savedPetData.armsOpened;
        armsAttributes = JSON.parse(savedPetData.armsAttributes);
        currentExp = savedPetData.currentExp;
        maxExp = savedPetData.maxExp;
        playerCritRate = savedPetData.playerCritRate;
        playerCritDamage = savedPetData.playerCritDamage;
        playerCultivation = savedPetData.playerCultivation;
        additionalPlayerCultivation = savedPetData.additionalPlayerCultivation;
        enemyPetCultivation = savedPetData.enemyPetCultivation;
        enemyCritRate = savedPetData.enemyCritRate;
        enemyCritDamage = savedPetData.enemyCritDamage;
        ascensionEnabled = savedPetData.ascensionEnabled;
        poisonSkillActivated = savedPetData.poisonSkillActivated;
        spiritLevel = savedPetData.spiritLevel;
        spiritMultiplier = savedPetData.spiritMultiplier;
        reenableAscension = savedPetData.reenableAscension;
        bonusAttributes = savedPetData.bonusAttributes;
        ascensionAttributes = savedPetData.ascensionAttributes;
        divinedWeaponStatus = savedPetData.divinedWeaponStatus;
        alreadyUseDrug = savedPetData.alreadyUseDrug;
        skillScore = savedPetData.skillScore;
        if (!savedPetData.baseAttributes) {
            baseAttributes = {
                endurance: 0,
                intelligence: 0,
                strength: 0,
                agility: 0,
                faith: 0
            };
        }
        if (awakened && savedPetData.awakenAttributes) {
            awakenAttributes = savedPetData.awakenAttributes;
        }
        if (savedPetData.petColor) {
            petColor = JSON.parse(savedPetData.petColor);
        }
        if (savedPetData.currentLifeSpan) {
            currentLifeSpan = savedPetData.currentLifeSpan;
        } 
        if (savedPetData.allocationHistory) {
            allocationHistory = JSON.parse(savedPetData.allocationHistory);
        } 
        
        if (savedPetData.maxLifeSpan) {
            maxLifeSpan = savedPetData.maxLifeSpan;
        } 
        
        if (savedPetData.additionalAttributes) {
            additionalAttributes = savedPetData.additionalAttributes;
        }

        if (savedPetData.drugBonus0) {
            drugBonus0 = savedPetData.drugBonus0;
        }
        
        if (savedPetData.qualityPillCount) {
            qualityPillCount = savedPetData.qualityPillCount;
        }
        
        if (savedPetData.consumedPillCount) {
            consumedPillCount = savedPetData.consumedPillCount;
        }
        
        if (savedPetData.specializations) {
            try {
                const savedSpecs = JSON.parse(savedPetData.specializations);
                // 初始化基础专精结构
                const baseSpecializations = {
                    慧光辉耀: { 
                        level: 0, 
                        attribute: 'intelligence', 
                        baseMultiplier: 0.055, 
                        levelIncrement: 0.0035, 
                        url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d94ce.png',
                        isActive: false 
                    },
                    神魔之力: { 
                        level: 0, 
                        attributes: 'strength', 
                        baseMultiplier: 0.055, 
                        levelIncrement: 0.0035, 
                        url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d9458.png',
                        isActive: false 
                    },
                    坚韧之心: { 
                        level: 0, 
                        attributes: 'endurance', 
                        baseMultiplier: 0.055, 
                        levelIncrement: 0.0035, 
                        url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d94db.png',
                        isActive: false 
                    },
                    凌波微步: { 
                        level: 0, 
                        attributes: 'agility', 
                        baseMultiplier: 0.055, 
                        levelIncrement: 0.0035, 
                        url: 'https://pic1.imgdb.cn/item/67920a40d0e0a243d4f722bb.png',
                        isActive: false 
                    },
                    圣灵附体: { 
                        level: 0, 
                        attributes: 'faith', 
                        baseMultiplier: 0.055, 
                        levelIncrement: 0.0035, 
                        url: 'https://pic1.imgdb.cn/item/67920a40d0e0a243d4f722ba.png',
                        isActive: false 
                    }
                };
        
                // 安全地合并保存的数据
                Object.keys(savedSpecs).forEach(key => {
                    if (baseSpecializations[key]) {
                        // 只更新等级，保持其他属性不变
                        baseSpecializations[key].level = savedSpecs[key].level || 0;
                        // 处理旧版存档兼容
                        if (savedPetData.currentSpecialization === key) {
                            baseSpecializations[key].isActive = true;
                        } else {
                            baseSpecializations[key].isActive = savedSpecs[key].isActive || false;
                        }
                    }
                });
        
                specializations = baseSpecializations;
            } catch (error) {
                console.error('专精数据加载失败:', error);
                // 如果解析失败，使用默认值
                specializations = {
                    慧光辉耀: { level: 0, attribute: 'intelligence', baseMultiplier: 0.055, levelIncrement: 0.0035, url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d94ce.png', isActive: false },
                    神魔之力: { level: 0, attributes: 'strength', baseMultiplier: 0.055, levelIncrement: 0.0035, url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d9458.png', isActive: false },
                    坚韧之心: { level: 0, attributes: 'endurance', baseMultiplier: 0.055, levelIncrement: 0.0035, url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d94db.png', isActive: false },
                    凌波微步: { level: 0, attributes: 'agility', baseMultiplier: 0.055, levelIncrement: 0.0035, url: 'https://pic1.imgdb.cn/item/67920a40d0e0a243d4f722ba.png', isActive: false },
                    圣灵附体: { level: 0, attributes: 'faith', baseMultiplier: 0.055, levelIncrement: 0.0035, url: 'https://pic1.imgdb.cn/item/67920a40d0e0a243d4f722bb.png', isActive: false }
                };
            }
        }
        if (savedPetData.collectedPets) {
            collectedPets = savedPetData.collectedPets;
        }
        if (savedPetData.collectedPetCount !== undefined) {
            collectedPetCount = savedPetData.collectedPetCount;
        }
        if (savedPetData.divineWeapons) {
            divineWeaponManager.setWeaponData(savedPetData.divineWeapons);
        }
        if (savedPetData.existingSkills) {
            const skillsArea = document.getElementById("skills-area");
            const skillsDrawerArea = document.getElementById("skills-in-drawer");
            
            // 清空两个区域
            skillsArea.innerHTML = '';
            skillsDrawerArea.innerHTML = '';
            
            savedPetData.existingSkills.forEach(skill => {
                // 为两个区域分别创建技能元素
                const skillDiv = createSkillElement(skill);
                const drawerSkillDiv = createSkillElement(skill, true);
                
                // 设置各自的点击删除事件
                skillDiv.onclick = () => deleteSkill(skill, skillDiv, skillsArea);
                drawerSkillDiv.onclick = () => deleteSkill(skill, drawerSkillDiv, skillsDrawerArea);
                
                // 添加到各自的区域
                skillsArea.appendChild(skillDiv);
                skillsDrawerArea.appendChild(drawerSkillDiv);
            });
        }

        if (savedPetData.ascensionSkill && savedPetData.ascensionSkill.name) {
            ascensionSkill = getSkillFromName(savedPetData.ascensionSkill.name, savedPetData.ascensionSkill.level);
        } else {
            ascensionSkill = null;
        }
        
        if (savedPetData.secondAscensionSkill && savedPetData.secondAscensionSkill.name) {
            secondAscensionSkill = getSkillFromName(savedPetData.secondAscensionSkill.name, savedPetData.secondAscensionSkill.level);
        } else {
            secondAscensionSkill = null;
        }
        updateDisplayContent();
    }
    updateWuxingBonusState();
}

function testButton() {
    showInfoBox(
        "仅供游戏异常时调试使用（如切换宠物失败或加载异常），请勿随意点击，因为这可能会造成数据丢失",
        () => { // onConfirm 回调
            resetPet();
            restorePetData();
        },
        () => { // onCancel 回调
            return;
        }
    );
}
        
// 修改changePet函数
function handlePetChange(selectedPetKey, petSelectId) {
    if (autoBattleInterval !== null) {
        showInfoBox("请先关闭自动战斗！");
        return;
    }

    // 检查选择的宠物是否是当前宠物
    if (currentPetKey === selectedPetKey) return;
    
    if (lifeBoxMode) {
        clearLifeBox();
        showInfoBox('源泉的生命箱效果已被清空');
    }
    
    const selectedPet = pets[selectedPetKey];
    if (selectedPet) {
        storeCurrentPetData(); // 存储当前宠物数据
        saveGameState(); //存储总体游戏数据
        
        currentPetKey = selectedPetKey;
        currentPet = selectedPet; // 将当前宠物设为选择的宠物

        // 检查 localStorage 中是否存在该宠物的数据
        const storedPetData = localStorage.getItem(`petData_${currentPet.name}`);
        if (storedPetData) {
            resetPet();
            restorePetData(currentPet.name); // 如果存在数据，恢复宠物数据
        } else {
            resetPet(); // 否则重置宠物数据
        }

        updatePetDisplay();
        updateDisplayContent();
        document.getElementById("description-box").innerText = `您将当前宠物更换为:${currentPet.name}`;
    } else {
        console.error('无法找到选中的宠物:', selectedPetKey);
    }
}

function changePet(skipConfirmation = false) {
    const petSelectValue = document.getElementById("pet-select").value;
    handlePetChange(petSelectValue, "pet-select");
}

function changeBattlePet(skipConfirmation = false) {
    const battlePetSelectValue = document.getElementById("battle-pet-select").value;
    handlePetChange(battlePetSelectValue, "battle-pet-select");
}
        
function updatePetDisplay() {
    document.getElementById("your-pet-name").innerText = currentPet.name; // 更新宠物名称显示
    document.getElementById("pet-image").src = currentPet.image; // 更新宠物图片显示
    document.getElementById("your-pet-image").src = currentPet.image;
    
    document.getElementById("your-pet-image").addEventListener('click', () => {
        const lifeExtensionDrug = '延寿露';
        const snowLotusDrug = '天山雪莲';
        
        if (battleAttributes.health <= maxHealth * 0.8) {
            selectDrug('延寿露');  // 选择延寿露
            useSelectedDrug();  // 使用所选的药品
        } else if (battleAttributes.mana <= maxMana * 0.8) {
            selectDrug('天山雪莲');  // 选择天山雪莲
            useSelectedDrug();  // 使用所选的药品
        } else {
            logBattleEvent('当前无需恢复或没有足够恢复道具', 'aqua');
        }
    });
    updateMutatedImg();
}

        
function showSummonPanel() {
    const summonPanel = document.getElementById('summonPanel');
    summonPanel.style.display = 'block';
    document.getElementById('summonArea').innerHTML = ''; // 清空召唤区域
}

document.getElementById('summonButton').addEventListener('click', showSummonPanel);

function updateStampCount() {
    const stampCountElem = document.getElementById('stampCount');
    const currentStampCountElem = document.getElementById('currentStampCount');

    if (currentStampCountElem) {
        currentStampCountElem.innerText = stamps;
    } else {
        console.error('元素 #currentStampCount 未找到');
    }
}

// 添加关闭按钮功能
document.getElementById('closeSummonPanel').addEventListener('click', () => {
    document.getElementById('summonPanel').style.display = 'none';
});

document.getElementById('closePetShop').addEventListener('click', () => {
    document.getElementById('summonPanel').style.display = 'none';
    document.getElementById('petShop').style.display = 'none';
});

//召唤宠物
document.getElementById('summonExecuteButton').addEventListener('click', () => {
    // 如果有未领取的宠物，自动帮玩家领取
    handleSummonPet();
});
function handleSummonPet() {
        if (summonedPet) {
        const petSelect = document.getElementById('pet-select');
        const petKey = Object.keys(pets).find(key => pets[key].name === summonedPet.name && pets[key].name !== 'Guolin·Li' && pets[key].name !== '结城夏奈' && pets[key].name !== 'かすがのそら');

        if (Array.from(petSelect.options).some(option => option.value === petKey)) {
            let exchangeAmount;
            switch (summonedPet.rank) {
                case 'R':
                    exchangeAmount = 240;
                    break;
                case 'SR':
                    exchangeAmount = 600;
                    break;
                case 'SSR':
                    exchangeAmount = 3600;
                    break;
            }
            showInfoBox(`您已经拥有${summonedPet.name}，将其转化为${exchangeAmount}印花！`);
            stamps += exchangeAmount;
        } else {
            showInfoBox(`您成功领取了${summonedPet.name}！`);
            const option = document.createElement('option');
            option.value = petKey;
            option.text = summonedPet.name;
            petSelect.appendChild(option);
        }
        summonedPet = null;
        updateStampCount();
    }

    if (useItem('summonCharmPaper')) {
        const randomNumber = Math.random();
        let summonedRank;
        if (randomNumber < 0.01) {
            summonedRank = 'SSR';
        } else if (randomNumber < 0.20) {
            summonedRank = 'SR';
        } else {
            summonedRank = 'R';
        }

        const eligiblePets = Object.keys(pets).filter(key => pets[key].rank === summonedRank && pets[key] !== 'liguo' && pets[key] !== 'jinmin' && pets[key] !== 'qiongmei' && pets[key] !== 'jiecheng');
        const randomPetKey = eligiblePets[Math.floor(Math.random() * eligiblePets.length)];
        summonedPet = pets[randomPetKey];

        // 显示加载图片
        if (summonedRank !== 'SSR'){
            document.getElementById('summonArea').innerHTML = `
            <img src="https://pic.imgdb.cn/item/66a4d223d9c307b7e9a2c147.gif" alt="加载中" id="loadingGif" style="width: 75%;height: 90%;border: 2px solid white;">
        `;
        } else{
            document.getElementById('summonArea').innerHTML = `
            <img src="https://pic.imgdb.cn/item/66a4f555d9c307b7e9c33849.gif" alt="加载中" id="loadingGif" style="width: 75%;height: 90%;border: 2px solid white;">
        `;
        }

        const loadingGif = document.getElementById('loadingGif');
        
        // 确保图片加载完成后开始计时
        loadingGif.onload = () => {
            setTimeout(() => {
                document.getElementById('summonArea').innerHTML = `
                    <img src="${summonedPet.image}" alt="${summonedPet.name}" style="width: 75%;height: 90%;border: 2px solid white;">
                    <div style="color:white;">${summonedPet.name} (${summonedPet.rank})</div>
                `;
                showInfoBox(`你召唤了${summonedPet.name} (${summonedPet.rank})`);
            }, 1000);
        };
    } else {
        showInfoBox('没有召唤灵符！');
    }
    updateStampCount(); // 更新印花数量
}

// 点击领取
document.getElementById('claimButton').addEventListener('click', () => {
    if (summonedPet) {
        const petSelect = document.getElementById('pet-select');
        const petKey = Object.keys(pets).find(key => pets[key].name === summonedPet.name);

        if (Array.from(petSelect.options).some(option => option.value === petKey)) {
            showInfoBox(`您已经拥有${summonedPet.name}，将其转化为相应印花！`);
            switch (summonedPet.rank) {
                case 'R':
                    stamps += 300;
                    break;
                case 'SR':
                    stamps += 600;
                    break;
                case 'SSR':
                    stamps += 3600;
                    break;
            }
        } else {
            showInfoBox(`您成功领取了${summonedPet.name}！`);
            const option = document.createElement('option');
            option.value = petKey;
            option.text = summonedPet.name;
            petSelect.appendChild(option);
        }
        summonedPet = null;
        updateStampCount();
        document.getElementById('summonArea').innerHTML = `<div class="stamp-quantity">印花数量: <span id="stampCount">${stamps}</span></div>`;
    } else {
        showInfoBox('没有宠物可领取！');
    }
});

// 点击兑换
document.getElementById('exchangeButton').addEventListener('click', () => {
    if (summonedPet) {
        let exchangeAmount;
        switch (summonedPet.rank) {
            case 'R':
                exchangeAmount = 300;
                break;
            case 'SR':
                exchangeAmount = 600;
                break;
            case 'SSR':
                exchangeAmount = 3600;
                break;
        }
        stamps += exchangeAmount;
        showInfoBox(`${summonedPet.name}已被兑换为${exchangeAmount}印花`);
        summonedPet = null;
        document.getElementById('summonArea').innerHTML = '';
        updateStampCount();
    } else {
        showInfoBox('没有宠物可兑换！');
    }
});

// 打开宠物商店
document.getElementById('openPetShopButton').addEventListener('click', showPetShop);

// 购买召唤灵符
document.getElementById('buySummonCharmButton').addEventListener('click', () => {
    if (stamps >= 500) {
        stamps -= 500;
        addItemToJinnang('summonCharmPaper');
        showInfoBox('成功购买了一张召唤灵符！');
        updateStampCount();
    } else {
        showInfoBox('印花数量不足，无法购买召唤灵符。');
    }
});

function addPetToSelect(petKey, petName) {
    const petSelect = document.getElementById('pet-select');
    
    // 检查宠物是否已经存在于 petSelect 中
    if (Array.from(petSelect.options).some(option => option.value === petKey)) {
        showInfoBox(`${petName} 已经在你的宠物列表中，无法重复获得同一宠物！`, null, null, 'red');
    } else {
        // 添加宠物到 petSelect
        const option = document.createElement('option');
        option.value = petKey;
        option.text = petName;
        petSelect.appendChild(option);
    }
}

// 原有的购买宠物函数
function showPetShop() {
    const petShop = document.getElementById('petShop');
    petShop.style.display = 'block';
    const shopItems = document.getElementById('shopItems');
    shopItems.innerHTML = '';

    const ownedPets = Array.from(document.getElementById('pet-select').options).map(option => option.value);

    const excludedPets = ["金珉奎", "Guolin·Li", "かすがのそら", "结城夏奈"]; // 定义不可购买的宠物名称列表

    Object.keys(pets).forEach(key => {
        const pet = pets[key];

        // 排除已经拥有的宠物和指定名称的宠物
        if (!ownedPets.includes(key) && !excludedPets.includes(pet.name)) {
            let price;
            switch (pet.rank) {
                case 'R':
                    price = 500 * (ownedPets.length);
                    break;
                case 'SR':
                    price = 1000 * (ownedPets.length);
                    break;
                case 'SSR':
                    price = 5000 * (ownedPets.length);
                    break;
            }

            const petDiv = document.createElement('div');
            petDiv.className = 'shop-item';
            petDiv.innerHTML = `
                <img src=${pet.image} alt="${pet.name}" style="border: 1px solid black;height: 45px; width: 45px">
                <div class="item-text-container">
                <div class="item-text-top">${pet.name} (${pet.rank})</div>
                <div class="item-text-bottom">价格: ${price}印花</div>
                </div>
            `;
            petDiv.addEventListener('click', () => {
                showInfoBox(`你确定要花费${price}印花购买${pet.name} (${pet.rank})吗?`, () => {
                    if (stamps >= price) {
                        stamps -= price;
                        showInfoBox(`你购买了${pet.name} (${pet.rank})`);

                        // 调用新函数将宠物添加到 pet-select
                        addPetToSelect(key, pet.name);
                        
                        petDiv.remove(); // 移除已购买的宠物
                        updateStampCount();
                        showPetShop();
                    } else {
                        showInfoBox('印花数量不足!');
                    }
                });
            });
            shopItems.appendChild(petDiv);
        }
    });
}

// 添加关闭按钮功能
document.getElementById('closePetShop').addEventListener('click', () => {
    document.getElementById('petShop').style.display = 'none';
});

function syncBattlePetSelect() {
    const petSelect = document.getElementById('pet-select');
    const battlePetSelect = document.getElementById('battle-pet-select');

    // 清空 battlePetSelect 中的所有选项
    battlePetSelect.innerHTML = '';

    // 将 petSelect 中的所有选项复制到 battlePetSelect
    Array.from(petSelect.options).forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option.value;
        newOption.text = option.text;
        battlePetSelect.appendChild(newOption);
    });
}

// 测试用例：确保 pets 数组和下拉列表匹配
document.addEventListener('DOMContentLoaded', () => {
    const petSelect = document.getElementById('pet-select');
    const options = Array.from(petSelect.options).map(option => option.value);
    const keys = Object.keys(pets);
    //console.log('Options in select:', options);
    //console.log('Keys in pets:', keys);

});

document.getElementById('buySummonCharmButton').addEventListener('click', () => {
    // 购买逻辑
});

// 添加关闭按钮功能
document.getElementById('closeMissionPanel').addEventListener('click', () => {
    document.getElementById('missionPanel').style.display = 'none';
});

//此函数为洪荒至尊仙葫开启逻辑
function openHongHuangTreasure() {
    const treasure = [
        { displayName: '资质仙丹礼包*2', name: 'qualityEnhancePillPKG', quantity: 2, chance: 5 },
        { displayName: '源泉的生命箱', name: 'lifeBox', quantity: 1, chance: 1 },
        { displayName: '集中值（4点）*10', name: 'attentionValue', quantity: 10, chance: 5 },
        { displayName: '灵兽悟道书', name: 'learningValueBook', quantity: 1, chance: 5 },
        { displayName: '灵兽清心丹', name: 'resetAdvancementPill', quantity: 1, chance: 5 },
        { displayName: '琼浆玉露', name: 'spiritWine', quantity: 1, chance: 5 },
        { displayName: '背包扩容卡', name: 'enlargeCapacityCard', quantity: 1, chance: 6.5 },
        { displayName: '经商积分卡*5', name: 'merchantPointsCard', quantity: 5, chance: 5 },
        { displayName: '天地灵气*100', name: 'earthlyEnergy', quantity: 100, chance: 6.5 },
        { displayName: '锻造工具', name: 'forgeTool', quantity: 1, chance: 5 },
        { displayName: '修为灵丹（橙）*6', name: 'cultivationPill500', quantity: 6, chance: 9 },
        { displayName: '高级神兽丹', name: 'advancedSkillPill', quantity: 1, chance: 1 },
        { displayName: '灵兽符文', name: 'magicPetAmulet', quantity: 1, chance: 4 },
        { displayName: '一等分解符*2', name: 'firstFragments', quantity: 2, chance: 8 },
        { displayName: '蓝色武装原料*5', name: 'blueArmComponents', quantity: 5, chance: 4.99 },
        { displayName: '神圣天赋赐福', name: 'talentedBless', quantity: 1, chance: 1, specialAction: () => generateItemToJinnang('talentedBless', '神圣天赋赐福', 'https://pic.imgdb.cn/item/66e00000d9c307b7e9d4ecb6.png', 24500, 1, '神圣的天赋加成术，有概率获得额外的技能点或获得一个当前宠物可用的技能加成')  },
        { displayName: '小金锭', name: 'tinyGoldBlock', quantity: 1, chance: 4, specialAction: () => generateItemToJinnang('tinyGoldBlock', '小金锭', 'https://pic.imgdb.cn/item/66d6ef10d9c307b7e98acf88.png', 8000000, 1, '贵重的金属，卖掉能值不少钱，你也可以点击直接使用进行市场竞价') },
        { displayName: 'そら召唤卡', name: 'qiongmeiCard', quantity: 1, chance: 0.01 },
        { displayName: '天使之翼', name: 'angelWings', quantity: 1, chance: 5 },
        { displayName: '庆典蛋糕', name: 'celebrationCake', quantity: 1, chance: 10 },
        { displayName: '白银VIP包裹', name: 'baiYinPKG', quantity: 1, chance: 5 },
        { displayName: '穿越时光套餐', name: 'backToOne', quantity: 1, chance: 4 },
        { displayName: '六级淡紫色灵石', name: 'purpleSixthGem', quantity: 1, chance: 3, specialAction: () => generateItemToJinnang('purpleSixthGem', '六级淡紫色灵石', 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc21.png', 500, 1, '尚未开光的灵石，使用后可得到一颗随机的6级淡紫色宝石') },
        { displayName: '六级粉红色灵石', name: 'pinkSixthGem', quantity: 1, chance: 3, specialAction: () => generateItemToJinnang('pinkSixthGem', '六级粉红色灵石', 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc0d.png', 500, 1, '尚未开光的灵石，使用后可得到一颗随机的6级粉红色宝石') }
    ];

    const totalChance = treasure.reduce((sum, item) => sum + item.chance, 0);
    let randomChance = Math.random() * totalChance;

    for (let item of treasure) {
        if (randomChance < item.chance) {
            setTimeout(() => {
                // 执行特殊道具的生成逻辑（如果有）
                if (item.specialAction) {
                    item.specialAction();
                } else {
                    // 普通道具生成
                    addItemToJinnang(item.name, item.quantity);
                }

                // 查找对应奖品的图片 URL
                const matchedItem = jinnangItems.find(jItem => jItem.name === item.name);
                const imageUrl = matchedItem ? matchedItem.url : null;

                // 显示获得的信息
                showInfoBox(`你获得了: ${item.displayName}`, null, null, 'red', imageUrl);
            }, 200);
            break;
        }
        randomChance -= item.chance;
    }
}

function openElixirTreasure() {
    const treasure = [
        { displayName: '原始圣阶内丹', name: 'primitiveElixir1', quantity: 1, chance: 0.07, url: 'https://pic1.imgdb.cn/item/67b38d92d0e0a243d40057ab.png' },
        { displayName: '原始天灵元丹', name: 'primitiveElixir2', quantity: 1, chance: 0.05, url: 'https://pic1.imgdb.cn/item/67b38d92d0e0a243d40057ab.png' },
        { displayName: '原始圣元灵丹', name: 'primitiveElixir3', quantity: 1, chance: 0.03, url: 'https://pic1.imgdb.cn/item/67b38d92d0e0a243d40057ab.png' },
        { displayName: '内丹再造石', name: 'elixirRefreshGem', quantity: 1, chance: 0.2, url: 'https://pic1.imgdb.cn/item/67b368fbd0e0a243d40055a4.png' },
        { displayName: '内丹升星石', name: 'elixirStarUpGem', quantity: 1, chance: 0.2, url: 'https://pic1.imgdb.cn/item/67b368fbd0e0a243d40055a5.png' },
        { displayName: '内丹升级石', name: 'elixirLevelUpGem', quantity: 1, chance: 0.2, url: 'https://pic1.imgdb.cn/item/67b368fbd0e0a243d40055a2.png' },
        { displayName: '内丹提品石', name: 'elixirRefiningGem', quantity: 1, chance: 0.14, url: 'https://pic1.imgdb.cn/item/67b368fbd0e0a243d40055a3.png' },
        { displayName: '仙人的遗骨', name: 'holyBone', quantity: 1, chance: 0.5, url: 'https://pic1.imgdb.cn/item/67b330b5d0e0a243d4004a6f.png' },
        { displayName: '仙人的教诲', name: 'holyKnowledge', quantity: 1, chance: 0.5, url: 'https://pic1.imgdb.cn/item/67b384f2d0e0a243d4005746.png' },
        { displayName: '灵丹妙诀', name: 'elixirKnowHow', quantity: 1, chance: 0.01, url: 'https://pic1.imgdb.cn/item/67b46e19d0e0a243d40088a4.png' }
    ];

    const totalChance = treasure.reduce((sum, item) => sum + item.chance, 0);
    let randomChance = Math.random() * totalChance;

    for (let item of treasure) {
        if (randomChance < item.chance) {
            setTimeout(() => {
                // 添加物品到锦囊
                addItemToJinnang(item.name, item.quantity);

                // 显示获得的信息
                showInfoBox(
                    `你获得了: ${item.displayName}`,
                    null,
                    null,
                    'red',
                    item.url
                );
            }, 200);
            break;
        }
        randomChance -= item.chance;
    }
}

// 全局变量
let advancementStates = []; // 保持唯一的全局变量

function clearAdvancementStates(petName) {
    // 找到对应宠物的索引
    const petIndex = advancementStates.findIndex(state => state.petName === petName);
    
    if (petIndex !== -1) {
        // 从 advancementStates 中删除该宠物的加成数据
        advancementStates.splice(petIndex, 1);
        showInfoBox(`${petName} 的技能加成已清除`);
    } else {
        showInfoBox(`未找到宠物 ${petName} 的加成记录`);
    }
}
        
function calculateSkillPointsForPet() {
    // 这个函数现在只负责基础计算，不依赖于 currentPetState
    return Math.floor(petLevel / 9);
}

function initializeAdvancementStates() {
    const applicableSkills = Object.values(pets).flatMap(pet =>
        pet.skills
            .filter(skill => 
                (skill.type === "PA" || skill.type === "MA" ) && skill.rarity === "SS" || 
                skill.type === "PAE" || skill.type === "MAE"
            )
            .flatMap(skill => [
                { ...skill, rank: '高', multiplier: 0, petName: pet.name, skillName: `${skill.name}[高]` },
                { ...skill, rank: '中', multiplier: 0, petName: pet.name, skillName: `${skill.name}[中]` },
                { ...skill, rank: '低', multiplier: 0, petName: pet.name, skillName: `${skill.name}[低]` }
            ])
    );
    
    if (applicableSkills.length === 0) {
        showInfoBox('没有可用的技能');
        return null;
    }

    let currentPetState = advancementStates.find(state => state.petName === currentPet.name);
    
    if (!currentPetState) {
        // 创建新的宠物状态时，确保所有字段都被正确初始化
        currentPetState = {
            petName: currentPet.name,
            intimacy: 0,
            attention: 0,
            appliedSkills: [],
            learningValue: 0,
            extraSkillPoints: 0,  // 确保初始化为0
            skillPoints: calculateSkillPointsForPet()  // 使用基础计算
        };
        advancementStates.push(currentPetState);
    } else {
        // 确保现有状态包含 extraSkillPoints
        if (typeof currentPetState.extraSkillPoints === 'undefined') {
            currentPetState.extraSkillPoints = 0;
        }
        // 更新总技能点
        currentPetState.skillPoints = calculateSkillPointsForPet() + currentPetState.extraSkillPoints;
    }

    return { currentPetState, applicableSkills };
}

function resetSkillPoints() {
    let currentPetState = advancementStates.find(state => state.petName === currentPet.name);
    
    if (!currentPetState) {
        // 如果状态不存在，初始化它
        const result = initializeAdvancementStates();
        if (!result) return; // 如果初始化失败，直接返回
        currentPetState = result.currentPetState;
    }

    // 重置额外技能点和总技能点
    currentPetState.extraSkillPoints = 0;
    currentPetState.skillPoints = calculateSkillPointsForPet();
    
    showInfoBox('技能点已重置！');
}

// 新增：用于更新技能点的辅助函数
function updateTotalSkillPoints() {
    let currentPetState = advancementStates.find(state => state.petName === currentPet.name);
    if (currentPetState) {
        currentPetState.skillPoints = calculateSkillPointsForPet() + 
            (currentPetState.extraSkillPoints || 0);
    }
}

function getBlessSkills() {
    const currentPetState = initializeAdvancementStates().currentPetState;
    const applicableSkills = initializeAdvancementStates().applicableSkills;
    
    // 获取可用技能
    const availableSkills = applicableSkills.filter(skill => 
        !currentPetState.appliedSkills.some(applied => applied.skillName === skill.skillName)
    );
    
    // 获取当前宠物的可用技能
    const currentPetSkill = availableSkills.filter(skill => skill.petName === currentPet.name);
    
    // 处理没有可用技能的情况
    if (currentPetSkill.length === 0) {
        // 90%概率显示无可用信息，10%概率获得额外技能点
        if (Math.random() >= 0.1) {
            showInfoBox('当前宠物已经领悟了所有可用加成，使用神圣天赋赐福失败！', null, null, 'red');
        } else {
            currentPetState.extraSkillPoints += 1;
            showInfoBox('获得额外的1技能点！');
        }
        return null;
    }
    
    // 处理有可用技能的情况
    const acquiredSkill = currentPetSkill[Math.floor(Math.random() * currentPetSkill.length)];
    currentPetState.appliedSkills.push({
        ...acquiredSkill,
        level: 1,
        applied: false
    });
    
    currentPetState.skillPoints = calculateSkillPoints(currentPetState); // 更新技能点数
    updateAdvancement();
    showInfoBox(
        `${currentPet.name}领悟到神圣天赋赐福内的字字箴言，学会了${acquiredSkill.name}（${acquiredSkill.rank}）加成之术，你可以打开加成面板进行查看`,
        null,
        null,
        'green'
    );
    
    return null;
}

function aquireSkillAdvancement(currentPetState, applicableSkills) {
  const appliedSkillsCount = currentPetState.appliedSkills.length;
  let probability;
  
  if (appliedSkillsCount >= 9) {
    probability = Math.random();
    if (probability < 0.05) {
      // 5%概率得到一个加成
      return acquireSkill(currentPetState, applicableSkills);
    } else if (probability < 0.50) {
      // 45%概率得到（100~300）学习度
      addLearningValue(currentPetState);
      return null;
    } else {
      // 50%概率一无所获
      showInfoBox('你的宠物尝试进入冥想，但它逐渐变得焦躁不安，最后一无所获。');
      return null;
    }
  } else if (appliedSkillsCount >= 7) {
    probability = Math.random();
    if (probability < 0.15) {
      // 15%概率得到一个加成
      return acquireSkill(currentPetState, applicableSkills);
    } else if (probability < 0.60) {
      // 45%概率得到（100~300）学习度
      addLearningValue(currentPetState);
      return null;
    } else {
      // 40%概率一无所获
      showInfoBox('你的宠物尝试进入冥想，但它逐渐变得焦躁不安，最后一无所获。');
      return null;
    }
  } else if (appliedSkillsCount >= 5) {
    probability = Math.random();
    if (probability < 0.35) {
      // 35%概率得到一个加成
      return acquireSkill(currentPetState, applicableSkills);
    } else if (probability < 0.70) {
      // 25%概率得到（100~300）学习度
      addLearningValue(currentPetState);
      return null;
    } else {
      // 30%概率一无所获
      showInfoBox('你的宠物尝试进入冥想，但它逐渐变得焦躁不安，最后一无所获。');
      return null;
    }
  } else {
    probability = Math.random();
    if (probability < 0.70) {
      // 70%概率得到一个加成
      return acquireSkill(currentPetState, applicableSkills);
    } else if (probability < 0.80) {
      // 10%概率得到（100~300）学习度
      addLearningValue(currentPetState);
      return null;
    } else {
      // 20%概率一无所获
      showInfoBox('你的宠物尝试进入冥想，但它逐渐变得焦躁不安，最后一无所获。');
      return null;
    }
  }
}

function acquireSkill(currentPetState, applicableSkills) {
    // 过滤掉已领会的技能
    const availableSkills = applicableSkills.filter(skill => 
        !currentPetState.appliedSkills.some(applied => applied.skillName === skill.skillName)
    );

    if (availableSkills.length === 0) {
        showInfoBox('已领悟所有可用技能!');
        return null;
    }

    const acquiredSkill = availableSkills[Math.floor(Math.random() * availableSkills.length)];
        currentPetState.appliedSkills.push({
        ...acquiredSkill,
        level: 1,
        applied: false
    });
        
    currentPetState.skillPoints = calculateSkillPoints(currentPetState); // 更新技能点数
    return acquiredSkill;
}

function addLearningValue(currentPetState) {
  const learningValueGained = Math.floor(Math.random() * 301) + 300; // 100到300之间的随机值
  currentPetState.learningValue += learningValueGained;
  showInfoBox(`你的宠物尝试进入冥想，但它逐渐变得焦躁不安，最后勉强获得了${learningValueGained}学习度！`);
}

function increaseCurrentPetLearningValue(amount) {
  const currentPetState = advancementStates.find(state => state.petName === currentPet.name);
  if (currentPetState) {
    currentPetState.learningValue += amount;
    console.log(`你的宠物学习度增加了 ${amount} 点。`);
  } else {
    console.error('当前宠物状态不存在');
  }
  updateAdvancement();
}

function increaseCurrentPetIntimacy(amount) {
  const currentPetState = advancementStates.find(state => state.petName === currentPet.name);
  if (currentPetState) {
    // 更新亲密度，但确保最低为0
    currentPetState.intimacy = Math.max(0, currentPetState.intimacy + amount);
    console.log(`你的宠物亲密度增加了 ${amount} 点。`);
  } else {
    console.error('当前宠物状态不存在');
  }
  updateAdvancement();
}
        
function increaseCurrentPetAttention(amount) {
  const currentPetState = advancementStates.find(state => state.petName === currentPet.name);
  if (currentPetState) {
    currentPetState.attention += amount;
    console.log(`你的宠物集中值增加了 ${amount} 点。`);
  } else {
    console.error('当前宠物状态不存在');
  }
  updateAdvancement();
}
        
function openAquireSkillAdvancementPanel() {
  const panel = document.getElementById('skill-advancement-panel');
  const currentDisplay = window.getComputedStyle(panel).display;

  if (currentDisplay === 'none') {
    panel.style.display = 'block';
    updateAdvancement();
  } else if (currentDisplay === 'block') {
    panel.style.display = 'none';
  }
  document.getElementById('advancement-detail-panel').innerHTML = '';
}

function calculateSkillPoints(currentPetState) {
  const totalSkillPoints = Math.floor(petLevel / 9) + currentPetState.extraSkillPoints;

  const usedSkillPoints = currentPetState.appliedSkills.reduce((total, skill) => {
    return total + (skill.level > 1 ? skill.level - 1 : 0);
  }, 0);

  return totalSkillPoints - usedSkillPoints;
}

function updateAdvancement() {
  let { currentPetState, applicableSkills } = initializeAdvancementStates();
  if (!currentPetState) return;

  document.getElementById('intimacy').textContent = currentPetState.intimacy;
  document.getElementById('attention').textContent = currentPetState.attention;
  document.getElementById('learning-value').textContent = currentPetState.learningValue;

  const skillPoints = calculateSkillPoints(currentPetState);
  document.getElementById('skill-points').textContent = `${skillPoints}`;

  const rankMap = {
    '高': '高',
    '中': '中',
    '低': '低'
  };

const appliedSkillsList = document.getElementById('applied-skills-list');
  appliedSkillsList.innerHTML = currentPetState.appliedSkills.map(skill => `
    <div class="applied-skill" style="position: relative;height:48px;">
      <div style="position: relative; display: inline-block;">
        <img id="advancement-image" src="https://pic.imgdb.cn/item/66d19552d9c307b7e9a25ac0.png" alt="advancement" style="width:45px;height:45px;border:1px solid black">
        <div style="
          position: absolute;
          top: 0;
          left: 0;
          width: 45px;
          height: 45px;
          background-color: ${skill.rank === '高' ? 'rgba(255,0,0,0.2)' : 
                            skill.rank === '中' ? 'rgba(128,0,128,0.2)' : 
                            'rgba(0,255,0,0.2)'};
          pointer-events: none;">
        </div>
      </div>
      <span style="
        position: absolute;
        top: 10px;
        left: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 16px;
        text-shadow: 0px 0px 2px black;
        pointer-events: none;">
        ${rankMap[skill.rank]}
      </span>
      <p style="width: 40%;">${skill.name} (${skill.petName})</p>
      <button class="skill-detail-btn" data-skill-id="${skill.name}-${skill.rank}">详情</button>
    </div>
  `).join('');

  const skillDetailBtns = document.querySelectorAll('.skill-detail-btn');
  skillDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const skillId = btn.dataset.skillId;
      const skill = currentPetState.appliedSkills.find(s => `${s.name}-${s.rank}` === skillId);
      showSkillDetail(skill);
    });
  });
}

const aquireSkillBtn = document.getElementById('aquire-skill-btn');
aquireSkillBtn.addEventListener('click', () => {
  let currentPetState = advancementStates.find(state => state.petName === currentPet.name);
  
  if (!currentPetState) {
    showInfoBox('当前宠物状态不存在');
    return;
  }
  
  const { applicableSkills } = initializeAdvancementStates();
  
  if (currentPetState.intimacy >= 30 && currentPetState.attention >= 2) {
    currentPetState.intimacy -= 30;
    currentPetState.attention -= 2;
    
    const acquiredSkill = aquireSkillAdvancement(currentPetState, applicableSkills);
    if (acquiredSkill) {
      showInfoBox(`你的宠物经过一段时间的沉思，学会了${acquiredSkill.name} 加成术`);
    }
  } else {
    showInfoBox('每次领悟需要耗费2集中值和30亲密度!',null,null,'red');
  }
    updateAdvancement();
});
        
const resetSkillBtn = document.getElementById('reset-skill-btn');
resetSkillBtn.addEventListener('click', () => {
  const currentPetState = advancementStates.find(state => state.petName === currentPet.name);
  if (!currentPetState) {
    showInfoBox('当前宠物状态不存在');
    return;
  }

  if (useItem('resetAdvancementPill',1)) { // 假设金子数量是一个全局变量
    showInfoBox('你是否要重置所有技能的等级？', () => {
      // 先处理所有已应用的技能，移除其 multiplier 的影响
      currentPetState.appliedSkills.forEach(skill => {
        if (skill.applied) {
          handleApplyAdvancement(skill, false);
        }
      });

      // 重置所有技能等级为1，返还所有 skillPoints
      currentPetState.appliedSkills.forEach(skill => {
        skill.level = 1;
        skill.multiplier = 0;
        skill.applied = false; // 复位应用状态
      });

      updateAdvancement();
      document.getElementById('advancement-detail-panel').innerHTML = '';
      showInfoBox('所有技能已重置，并返还所有技能点。');
    }, () => {
      addItemToJinnang('resetAdvancementPill',1);
      showInfoBox('操作已取消。');
    });
  } else {
    showInfoBox('道具数量不足，无法重置技能！', null, null, 'red');
  }
});

const rankMultiplierMap = {
  '高': [0, 0.1, 0.2, 0.3, 0.4, 0.5],
  '中': [0, 0.05, 0.1, 0.15, 0.2, 0.25],
  '低': [0, 0.02, 0.04, 0.06, 0.08, 0.1]
};

function showSkillDetail(skill) {
    const currentPetState = advancementStates.find(state => state.petName === currentPet.name);
    if (!currentPetState) {
    console.error('当前宠物状态不存在');
    return;
    }
    
    const skillPoints = calculateSkillPoints(currentPetState);
    const nextMultiplier = rankMultiplierMap[skill.rank][skill.level];
    
    const detailHtml = `
    <div class="skill-detail">
    <div style="display: flex;flex-direction: row;justify-content: space-evenly;width: 100%;">
      <div>名称: ${skill.skillName}</div>
      <div>等级: ${skill.level}</div>
      <div>加成: ${(skill.multiplier * 100).toFixed(0)}%</div>
    </div>
      <button id="delete-skill-btn">删除</button>
      <button id="upgrade-skill-btn">升级</button>
      <button id="apply-skill-btn">${skill.applied ? '禁用' : '应用'}</button>
    </div>
    `;

    const detailPanel = document.querySelector('.skill-detail-panel');
    detailPanel.innerHTML = detailHtml;

    const deleteSkillBtn = document.getElementById('delete-skill-btn');
    deleteSkillBtn.addEventListener('click', () => {
      const index = currentPetState.appliedSkills.findIndex(s => s.skillName === skill.skillName);
    
      showInfoBox("删除技能加成后将无法撤销，是否确认删除？",
      () => {
          if (skill.applied) {
            handleApplyAdvancement(skill, false); // 先移除加成
          }
          currentPetState.appliedSkills.splice(index, 1);
          updateAdvancement();
          document.getElementById('advancement-detail-panel').innerHTML = '';
      },
      () => {
          showInfoBox("取消删除技能");
      });
    });
    
    const upgradeSkillBtn = document.getElementById('upgrade-skill-btn');
    upgradeSkillBtn.addEventListener('click', () => {
      if (skillPoints <= 0) {
        showInfoBox('你的技能点数不足，无法升级！', null, null, 'red');
        return;
      }
    
      // 处理等级6及以上的升级逻辑
      if (skill.level >= 6) {
        const expNeeded = 3000000;  // 300万经验
        const learningValueNeeded = 100000;  // 10万学习度
    
        if (currentExp >= expNeeded && currentPetState.learningValue >= learningValueNeeded) {
          showInfoBox(`升级需要${expNeeded}经验值和${learningValueNeeded}点学习度，是否继续？`,
            () => {
              if (skill.applied) {
                handleApplyAdvancement(skill, false); // 升级前移除当前 multiplier
              }
    
              currentExp -= expNeeded;
              currentPetState.learningValue -= learningValueNeeded;
              skill.level++;
              skill.multiplier += 0.01;  // 叠加值0.01
    
              if (skill.applied) {
                handleApplyAdvancement(skill, true); // 升级后重新应用 multiplier
              }
    
              updateAdvancement();
              showSkillDetail(skill);
            },
            () => {
              return;
            });
        } else {
          showInfoBox('经验值或学习度不足！', null, null, 'red');
        }
      } 
      // 处理等级6以下的原有升级逻辑
      else {
        const learningValueNeeded = [600, 2000, 6000, 12000, 20000][skill.level - 1];
        const nextMultiplier = rankMultiplierMap[skill.rank][skill.level]; // 计算下一级 multiplier
    
        if (currentPetState.learningValue >= learningValueNeeded && skill.level < 6) {
          showInfoBox(`此次升级需要${learningValueNeeded}点学习度，是否继续？`,
            () => {
              if (skill.applied) {
                handleApplyAdvancement(skill, false); // 升级前移除当前 multiplier
              }
    
              currentPetState.learningValue -= learningValueNeeded;
              skill.level++;
              skill.multiplier = nextMultiplier;
    
              if (skill.applied) {
                handleApplyAdvancement(skill, true); // 升级后重新应用 multiplier
              }
    
              updateAdvancement();
              showSkillDetail(skill);
            },
            () => {
              return;
            });
        } else {
          showInfoBox('学习度不足或已达到最大等级!', null, null, 'red');
        }
      }
    });
    
    const applySkillBtn = document.getElementById('apply-skill-btn');
    applySkillBtn.addEventListener('click', () => {
      if (skill.applied) {
        handleApplyAdvancement(skill, false); // 如果已应用，先取消应用
      } else {
        handleApplyAdvancement(skill, true); // 如果未应用，应用加成
      }
      skill.applied = !skill.applied; // 切换应用状态
      showSkillDetail(skill);
    });
}

function handleApplyAdvancement(skill, applied) {
  const skillsArea = document.getElementById("skills-area");
  if (!skillsArea) {
    console.error("skills-area element not found.");
    return;
  }

  // 获取当前宠物的技能列表
  const skills = Array.from(skillsArea.children).map(skillDiv => {
    const skillName = skillDiv.innerText.split(' ')[0];
    const skillType = skill.type;
    return currentPet.skills.find(s => s.name === skillName && s.type === skillType);
  }).filter(s => s !== undefined);

  // 查找要应用加成的技能是否在当前宠物的技能列表中
  const targetSkill = skills.find(s => s.name === skill.name);
  
  if (targetSkill) {
    // 如果技能在宠物的技能列表中，应用或取消加成
    targetSkill.multiplier += applied ? skill.multiplier : -skill.multiplier;
    console.log(`现在你的技能威力是${targetSkill.multiplier}`);
  } else {
    // 如果技能不在宠物的技能列表中，显示警告信息
    showInfoBox(`${currentPet.name}并不会释放${skill.name}，应用或禁用后不会产生任何效果！`, null, null, 'red');
  }
}






//老战斗系统所有全局变量如下




//新版战斗系统
















// 五行符测试模块
let wuxingFragments = 0;  // 分解后获得的碎片数量
let wuxingStates = [];  // 存储所有五行符的状态
const MAX_LEVEL = 100;  // 强化等级上限

const wuxingBonusMap = {
    health: 'HP',
    mana: 'MP',
    physicalAttack: '物攻',
    magicAttack: '法攻',
    physicalDefense: '物防',
    magicDefense: '法防',
    speed: '速度',
    WXplayerCritRate: '%暴击率',
    WXplayerCritDamage: '%暴击伤害'
};

const wuxingTypeMap = {
    goldAmulet: '金符',
    woodAmulet: '木符',
    waterAmulet: '水符',
    fireAmulet: '火符',
    earthAmulet: '土符'
};

const wuxingColorMap = {
    red: '红色',
    green: '绿色',
    blue: '蓝色',
    orange: '橙色',
    purple: '紫色'
};

function addAmuletToManager(amuletType, color, level = 1) {
    // 首先检查 wuxingStates 的长度是否超过 500
    if (wuxingStates.length >= 200) {
        showInfoBox('已超过可拥有的五行符上限！', null, null, 'red');
        return;  // 终止函数执行，防止继续添加五行符
    }

    const wuxingName = `${amuletType}(${color})`;
    const uniqueTag = `${wuxingName}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // 随机生成 rank，概率均等
    const rank = Math.ceil(Math.random() * 5);  // 1 - 5 等级

    const newAmulet = {
        tag: uniqueTag,
        name: wuxingName,
        color: color,
        level: level,
        rank: rank,  // 新增 rank 属性
        drugBonus: initializeDrugBonus(color, level, rank),
        additionalValues: generateAdditionalValues(color, rank),
        equipped: false,
        currentPetName: null
    };

    // 将新五行符添加到全局管理器
    wuxingStates.push(newAmulet);
    updateWuxingDisplay();
}

//这个函数用来开至尊五行宝箱
function openAmuletTreasure() {
    // 随机选择五行类型
    const wuxingTypes = Object.keys(wuxingTypeMap);
    const randomWuxingType = wuxingTypes[Math.floor(Math.random() * wuxingTypes.length)];
    
    // 随机选择颜色
    const colors = Object.keys(wuxingColorMap);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // 根据概率分布生成rank
    const rankProbabilities = [
        { rank: 1, probability: 0.06 },
        { rank: 2, probability: 0.1 },
        { rank: 3, probability: 0.14 },
        { rank: 4, probability: 0.4 },
        { rank: 5, probability: 0.3 }
    ];
    
    // 使用概率分布随机生成rank
    const randomRank = generateWeightedRandom(rankProbabilities);
    
    // 调用已有的addAmuletToManager函数，但使用我们生成的rank
    const newAmulet = addAmuletToManager(randomWuxingType, randomColor);
    showInfoBox(`获得${wuxingTypeMap[randomWuxingType]}（${wuxingColorMap[randomColor]}）${randomRank}等 * 1`,null,null,`${randomColor === 'orange' ? 'brown' : randomColor}`);
    
    // 返回生成的五行符信息
    return {
        type: randomWuxingType,
        color: randomColor,
        rank: randomRank
    };
}

// 辅助函数：根据概率权重生成随机rank
function generateWeightedRandom(probabilities) {
    const random = Math.random();
    let cumulativeProbability = 0;
    
    for (const item of probabilities) {
        cumulativeProbability += item.probability;
        if (random < cumulativeProbability) {
            return item.rank;
        }
    }
    
    // 如果因为浮点数精度问题没有返回，则返回最后一个rank
    return probabilities[probabilities.length - 1].rank;
} 

function openWuxingDisplay() {
    document.getElementById('wuxing-display').style.display = 'block';
    updateWuxingDisplay();
    updateWuxingBonusState();
}

function closeWuxingDisplay() {
    document.getElementById('wuxing-display').style.display = 'none';
    updateWuxingBonusState();
}

// 初始化主条目加成
function initializeDrugBonus(color, level, rank, selectedBonus = null) {
    const rankMultiplier = [1, 0.8, 0.6, 0.4, 0.2][rank - 1];  // 根据 rank 调整倍率
    const bonus = {
        physicalAttack: 0,
        magicAttack: 0,
        physicalDefense: 0,
        mana: 0,
        health: 0,
        magicDefense: 0,
        speed: 0
    };

    const increment = {
        red: { physicalAttack: 200, magicAttack: 200 },
        green: { physicalDefense: 1500 },
        blue: { mana: 1000 },
        orange: { health: 1300 },
        purple: { magicDefense: 1500 }
    };

    if (color === 'red' && selectedBonus) {
        for (let i = 1; i <= level; i++) {
            bonus[selectedBonus] += Math.floor(increment.red[selectedBonus] * rankMultiplier);
        }
    } else {
        for (let i = 1; i <= level; i++) {
            Object.keys(bonus).forEach(key => {
                if (increment[color] && increment[color][key]) {
                    bonus[key] += Math.floor(increment[color][key] * rankMultiplier);
                }
            });
        }
    }

    return bonus;
}

        
// 生成副条目
function generateAdditionalValues(color, rank) {
    const rankMultiplier = [1, 0.8, 0.6, 0.4, 0.2][rank - 1];  // 根据rank调整倍率
    const additionalValues = [];
    const attributes = [
        'physicalAttack', 'magicAttack', 'physicalDefense', 'mana', 'health', 'magicDefense'
    ];
    const critAttributes = ['WXplayerCritRate', 'WXplayerCritDamage'];
    const percentageAttributes = attributes.map(attr => `‰${attr}`);
    let percentageCount = 0;
    let critRateExists = false;
    let critDamageExists = false;

    if (color === 'green') {
        attributes.push('speed');
    }

    const allAttributes = attributes.concat(percentageAttributes).concat(critAttributes);
    const numOfValues = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < numOfValues; i++) {
        let randomAttribute = allAttributes[Math.floor(Math.random() * allAttributes.length)];

        // 确保每种暴击属性最多生成一条
        if (randomAttribute === 'WXplayerCritRate' && critRateExists) continue;
        if (randomAttribute === 'WXplayerCritDamage' && critDamageExists) continue;

        // 限制千分比属性数量，不生成千分比形式的暴击率和暴击伤害
        if (randomAttribute.startsWith('‰') && percentageCount >= 2) {
            const remainingAttributes = attributes.filter(attr => !additionalValues.some(a => a.attribute === attr));
            if (remainingAttributes.length > 0) {
                randomAttribute = remainingAttributes[Math.floor(Math.random() * remainingAttributes.length)];
            }
        }

        if (randomAttribute === 'WXplayerCritRate') {
            const randomValue = Math.floor((Math.random() * (7 - 5 + 1) + 5) * rankMultiplier);
            additionalValues.push({ attribute: randomAttribute, value: randomValue });
            critRateExists = true;
        } else if (randomAttribute === 'WXplayerCritDamage') {
            const randomValue = Math.floor((Math.random() * (7 - 5 + 1) + 5) * rankMultiplier);
            additionalValues.push({ attribute: randomAttribute, value: randomValue });
            critDamageExists = true;
        } else if (randomAttribute.startsWith('‰')) {
            const randomValue = Math.floor((Math.random() * (7 - 5 + 1) + 5) * rankMultiplier);
            additionalValues.push({ attribute: randomAttribute, value: randomValue });
            percentageCount++;
        } else {
            const randomValue = Math.floor((Math.random() * 301 + 300) * rankMultiplier);
            additionalValues.push({ attribute: randomAttribute, value: randomValue });
        }

        if (critRateExists && critDamageExists) break;
    }

    return additionalValues;
}

 
// 更新显示界面
function updateWuxingDisplay() {
    const wuxingContainer = document.getElementById('wuxing-container');
    const equippedContainer = document.getElementById('equipped-container');
    const fragmentsDisplay = document.getElementById('wuxing-fragments');
    const rankNames = ['一等', '二等', '三等', '四等', '五等'];
    let selectedAmulet = null; // 用于记录当前选中的五行符

    wuxingContainer.innerHTML = '';
    equippedContainer.innerHTML = '';
    fragmentsDisplay.innerText = `五行碎片: ${wuxingFragments}`;

    wuxingStates.forEach(amulet => {
        const amuletElement = document.createElement('div');
        amuletElement.className = `wuxing-item ${amulet.color}-border`;

        const petAmulet = wuxingStates.find(a => a.tag === amulet.tag);
        if (petAmulet && petAmulet.equipped) {
            amuletElement.classList.add('equipped');
        }

        if (amulet.level > 1) {
            amuletElement.style.boxShadow = `0px 0px 5px 2px ${amulet.color}`;
        }

        amuletElement.style.backgroundImage = `url(${getAmuletImageURL(amulet.name)})`;

        const amuletInfo = document.createElement('div');
        amuletInfo.className = 'wuxing-info';
        amuletInfo.innerText = `${wuxingTypeMap[amulet.name.split('(')[0]]} (${rankNames[amulet.rank - 1]})`;

        amuletElement.appendChild(amuletInfo);

        amuletElement.addEventListener('click', () => {
            if (selectedAmulet) {
                // 重置上一个被选中五行符的样式
                selectedAmulet.style.boxShadow = selectedAmulet.originalBoxShadow || '';
                ensureAmuletRank(amulet);
            }

            // 记录当前选中的五行符
            selectedAmulet = amuletElement;
            selectedAmulet.originalBoxShadow = amuletElement.style.boxShadow; // 保存原始的 boxShadow

            // 应用新的选中样式
            selectedAmulet.style.boxShadow = '0px 0px 0px 2px white';

            displayAmuletDetails(amulet);
        });

        wuxingContainer.appendChild(amuletElement);

        // 如果该五行符被当前宠物装备，显示在装备区
        if (petAmulet && petAmulet.equipped && petAmulet.currentPetName === currentPet.name) {
            const equippedElement = amuletElement.cloneNode(true);
            equippedElement.addEventListener('click', () => displayAmuletDetails(amulet));
            equippedContainer.appendChild(equippedElement);
        }
        // 如果被装备但装备者不是当前宠物，则不克隆元素
        else if (petAmulet && petAmulet.equipped && petAmulet.currentPetName !== currentPet.name) {
            // 不进行克隆操作，也不显示在装备区
            // 这里可以添加任何你想要处理的逻辑，比如提示信息或标记
            console.log(`${amulet.name} 被 ${petAmulet.currentPetName} 装备，无法装备在当前宠物上`);
        }
    });
    updateAttributePanel();
    updateAppliedEffectsDisplay();
    console.log(drugBonus);
}

function ensureAmuletRank(amulet) {
    if (!amulet.rank) {
        amulet.rank = 1;  // 默认设为一等
    }
}

function updateAppliedEffectsDisplay() {
    // 获取装备生效的五行符效果
    const activeEffects = applyWuxingEffects();
    
    // 获取applied-effects元素
    const effectsContainer = document.getElementById('applied-effects');
    
    // 清空当前内容
    effectsContainer.innerHTML = '';
    
    // 检查是否存在生效的五行符效果
    if (Object.keys(activeEffects).length === 0) {
        effectsContainer.innerText = '目前没有生效的五行符效果';
        return;
    }
    
    // 创建一个数组来存储显示的效果字符串
    const effectsList = [];
    
    // 根据生效的效果类型和强度生成描述字符串
    Object.keys(activeEffects).forEach(effectType => {
        const effectLevel = activeEffects[effectType];
        const effectName = wuxingTypeMap[effectType];
        const effectDisplayText = `${effectName}: 强度${effectLevel}级`;
        effectsList.push(effectDisplayText);
    });
    
    // 将效果字符串连接为一个字符串，以逗号隔开，并插入到页面元素中
    effectsContainer.innerText = effectsList.join(', ');
}

        
// 显示五行符详细信息
function displayAmuletDetails(amulet) {
    const rankNames = ['一等', '二等', '三等', '四等', '五等'];
    const detailsContainer = document.getElementById('amulet-details');
    detailsContainer.innerHTML = `
        <div id="text-container" style="height: 120px;margin-bottom: 30px;line-height: 28px;">
            <h3 style="margin:0;color: ${amulet.color};">${wuxingTypeMap[amulet.name.split('(')[0]]} (${rankNames[amulet.rank - 1]})<span id="equipped-pet-name"></span></h3>
            <p style="margin:0;">等级: ${amulet.level}</p>
            <p style="margin:0;">主属性: ${Object.entries(amulet.drugBonus)
                .filter(([key, value]) => value > 0)
                .map(([key, value]) => `${wuxingBonusMap[key]}: +${value}`).join(', ')}</p>
            <p style="margin:0;">副属性: ${amulet.additionalValues.map(v => 
                v.attribute.startsWith('‰')
                ? `${v.value}‰ ${wuxingBonusMap[v.attribute.replace('‰', '')]}`
                : `+${v.value} ${wuxingBonusMap[v.attribute]}`).join(', ')}</p>
        </div>
    `;
    
    
    const wuxingButtonContainer = document.createElement('div');
    wuxingButtonContainer.className = 'wuxing-action';
    wuxingButtonContainer.style.display = 'flex';
    wuxingButtonContainer.style.gap = '5px';
    wuxingButtonContainer.style.justifyContent = 'center';

    const enhanceButton = document.createElement('button');
    enhanceButton.innerText = '强化';
    enhanceButton.onclick = () => enhanceAmulet(amulet.tag);

    const decomposeButton = document.createElement('button');
    decomposeButton.innerText = '分解';
    decomposeButton.onclick = () => decomposeAmulet(amulet.tag);

    const equipButton = document.createElement('button');
    equipButton.innerText = '装备';
    equipButton.onclick = () => equipAmulet(amulet.tag);

    const unequipButton = document.createElement('button');
    unequipButton.innerText = '卸下';
    unequipButton.onclick = () => unequipAmulet(amulet.tag);
    
    const wipeOffButton = document.createElement('button');
    wipeOffButton.innerText = '清空';
    wipeOffButton.onclick = () => wipeOffAmulet();

    // 新增整理按钮
    const sortButton = document.createElement('button');
    sortButton.innerText = '整理';
    sortButton.onclick = () => sortAmuletsByRank();

    const petAmulet = wuxingStates.find(a => a.tag === amulet.tag);
    if (petAmulet && petAmulet.equipped) {
        document.getElementById('equipped-pet-name').innerText = `  由${petAmulet.currentPetName}装备`;
        unequipButton.disabled = false;
    } else {
        document.getElementById('equipped-pet-name').innerText = '';
        unequipButton.disabled = true;
    }

    wuxingButtonContainer.appendChild(enhanceButton);
    wuxingButtonContainer.appendChild(decomposeButton);
    wuxingButtonContainer.appendChild(equipButton);
    wuxingButtonContainer.appendChild(unequipButton);
    wuxingButtonContainer.appendChild(wipeOffButton);
    wuxingButtonContainer.appendChild(sortButton); // 添加整理按钮

    detailsContainer.appendChild(wuxingButtonContainer);
}

function sortAmuletsByRank() {
    // 按照rank -> name -> color的顺序进行排序
    wuxingStates.sort((a, b) => {
        // 先按rank排序（从高到低）
        if (a.rank !== b.rank) {
            return a.rank - b.rank;
        }
        
        // 再按name排序（按字母顺序）
        const nameA = a.name.split('(')[0];
        const nameB = b.name.split('(')[0];
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        
        // 最后按color排序（按字母顺序）
        if (a.color < b.color) return -1;
        if (a.color > b.color) return 1;

        return 0; // 所有比较都相等
    });

    // 更新UI显示，确保排序结果及时显示
    updateWuxingDisplay();

    showInfoBox('背包已按五行符等级、类型和颜色整理完毕。', null, null, 'green');
}


// 应用五行符增益
function resetWuxingCritBonuses() {
    wuxingStates.forEach(petAmuletState => {
        if (petAmuletState.equipped && petAmuletState.currentPetName === currentPet.name) {
            const amulet = wuxingStates.find(amulet => amulet.tag === petAmuletState.tag);
            if (amulet) {
                amulet.additionalValues.forEach(additional => {
                    if (additional.attribute === 'WXplayerCritRate') {
                        playerCritRate -= additional.value / 100;
                    } else if (additional.attribute === 'WXplayerCritDamage') {
                        playerCritDamage -= additional.value / 100;
                    }
                });
            }
        }
    });
}

function applyAdditionalValueBonus(additional, secondaryAttributes, apply = true) {
    const key = additional.attribute;
    const value = additional.value;

    if (key.startsWith('‰')) {
        const baseAttribute = key.replace('‰', '');
        const multiplier = value / 1000;  // Convert ‰ to percentage
        const additionalValue = Math.floor(secondaryAttributes[baseAttribute] * multiplier);

        if (apply) {
            drugBonus[baseAttribute] += additionalValue;
        } else {
            drugBonus[baseAttribute] -= additionalValue;
            if (drugBonus[baseAttribute] < 0) {
                drugBonus[baseAttribute] = 0;
            }
        }
    } else if (key === 'WXplayerCritRate') {
        playerCritRate += apply ? value / 100 : -value / 100;
        if (playerCritRate < 0) playerCritRate = 0;
    } else if (key === 'WXplayerCritDamage') {
        playerCritDamage += apply ? value / 100 : -value / 100;
        if (playerCritDamage < 0) playerCritDamage = 0;
    } else {
        if (apply) {
            drugBonus[key] += value;
        } else {
            drugBonus[key] -= value;
            if (drugBonus[key] < 0) {
                drugBonus[key] = 0;
            }
        }
    }
}

function applyAmuletBonus(amulet, apply = true) {
    const currentAttributes = calculateCurrentAttributes();
    const secondaryAttributes = calculateSecondaryAttributes(currentAttributes, currentWisdom);

    // 处理 drugBonus
    Object.keys(amulet.drugBonus).forEach(key => {
        if (apply) {
            drugBonus[key] += amulet.drugBonus[key];
        } else {
            drugBonus[key] -= amulet.drugBonus[key];
            if (drugBonus[key] < 0) {
                drugBonus[key] = 0;
            }
        }
    });

    // 处理 additionalValues
    amulet.additionalValues.forEach(additional => {
        applyAdditionalValueBonus(additional, secondaryAttributes, apply);
    });

    updateUI();
    updateAttributePanel();
}

function updateWuxingBonusState() {
    // 清空 drugBonus
    Object.keys(drugBonus).forEach(key => {
        drugBonus[key] = 0;
    });

    // 仅移除当前五行符提供的暴击率和暴击伤害增益
    resetWuxingCritBonuses();

    // 重新应用当前宠物已装备的五行符的增益
    wuxingStates.forEach(petAmuletState => {
        if (petAmuletState.equipped && petAmuletState.currentPetName === currentPet.name) {
            const amulet = wuxingStates.find(amulet => amulet.tag === petAmuletState.tag);
            if (amulet) {
                applyAmuletBonus(amulet, true);
            }
        }
    });

    updateUI();  // 更新界面以反映最新的增益值
}


        
// 分解五行符
function decomposeAmulet(tag) {
    const amuletIndex = wuxingStates.findIndex(amulet => amulet.tag === tag);

    if (amuletIndex === -1) {
        showInfoBox("找不到指定的五行符，请确保五行符未装备", null, null, 'red');
        return;
    }

    const amulet = wuxingStates[amuletIndex];

    if (amulet.equipped) {
        showInfoBox(`该五行符已经被 ${amulet.currentPetName} 装备，无法分解。`, null, null, 'red');
        return;
    }

    const confirmDecomposition = () => {
        const rankMultiplier = [475, 95, 20, 5, 1][amulet.rank - 1];  // 根据 rank 计算分解碎片基数
        const fragmentsGained = amulet.level * rankMultiplier;  // 根据等级计算总分解碎片数量

        wuxingFragments += fragmentsGained;
        wuxingStates.splice(amuletIndex, 1);

        showInfoBox(`分解成功！你获得了 ${fragmentsGained} 个五行碎片。`, null, null, 'green');
        updateWuxingDisplay();
    };

    const cancelDecomposition = () => {
        showInfoBox("分解操作已取消。", null, null, 'black');
    };

    showInfoBox("你确定要分解此五行符吗？该操作不可恢复。", confirmDecomposition, cancelDecomposition, 'red');
}

function wipeOffAmulet() {
    const amuletsToWipe = wuxingStates.filter(amulet => !amulet.equipped && amulet.currentPetName === null && amulet.level === 1);

    if (amuletsToWipe.length === 0) {
        showInfoBox("没有找到符合条件的五行符。", null, null, 'red');
        return;
    }

    const confirmWipeOff = () => {
        let totalFragmentsGained = 0;
        let totalAmuletsWiped = 0;

        amuletsToWipe.forEach(amulet => {
            const amuletIndex = wuxingStates.indexOf(amulet);
            if (amuletIndex !== -1) {
                const rankMultiplier = [475, 95, 20, 5, 1][amulet.rank - 1];  // 根据 rank 计算分解碎片基数
                const fragmentsGained = amulet.level * rankMultiplier;  // 根据等级计算总分解碎片数量

                totalFragmentsGained += fragmentsGained;
                totalAmuletsWiped += 1;

                wuxingStates.splice(amuletIndex, 1); // 从列表中移除五行符
            }
        });

        wuxingFragments += totalFragmentsGained;
        showInfoBox(`成功分解了 ${totalAmuletsWiped} 张五行符，获得了 ${totalFragmentsGained} 个五行碎片。`, null, null, 'green');
        updateWuxingDisplay();
    };

    const cancelWipeOff = () => {
        showInfoBox("清除操作已取消。", null, null, 'black');
    };

    showInfoBox("你确定要清除所有未装备且等级为1的五行符吗？该操作不可恢复。", confirmWipeOff, cancelWipeOff, 'red');
}

function equipAmulet(tag) {
    const amulet = wuxingStates.find(amulet => amulet.tag === tag);

    if (!amulet) {
        showInfoBox("找不到指定的五行符。", null, null, 'red');
        return;
    }

    if (amulet.equipped) {
        if (amulet.currentPetName !== currentPet.name) {
            showInfoBox(`该五行符已经被 ${amulet.currentPetName} 装备。`, null, null, 'red');
        } else {
            showInfoBox(`该五行符已经装备在当前宠物上。`, null, null, 'green');
        }
        return;
    }

    const equippedSameType = wuxingStates.some(a => a.color === amulet.color && a.equipped && a.currentPetName === currentPet.name);

    if (equippedSameType) {
        showInfoBox(`已经装备了一张 ${wuxingColorMap[amulet.color]} 的五行符。`, null, null, 'red');
        return;
    }

    amulet.equipped = true;
    amulet.currentPetName = currentPet.name;
    document.getElementById('equipped-pet-name').innerText = ` 由${amulet.currentPetName}装备`;

    applyAmuletBonus(amulet, true);
    updateWuxingDisplay();
}

function unequipAmulet(tag) {
    const amulet = wuxingStates.find(amulet => amulet.tag === tag);

    if (!amulet) {
        showInfoBox("找不到指定的五行符。", null, null, 'red');
        return;
    }

    if (!amulet.equipped) {
        showInfoBox("该五行符未被装备。", null, null, 'red');
        return;
    }

    //if (amulet.currentPetName !== currentPet.name) {
        //showInfoBox(`该五行符已经被 ${amulet.currentPetName} 装备，需要至装备宠物处卸下。`, null, null, 'red');
        //return;
    //}
    document.getElementById('equipped-pet-name').innerText = '';
    applyAmuletBonus(amulet, false);
    amulet.equipped = false;
    amulet.currentPetName = null;

    updateWuxingDisplay();
}

// 强化五行符
function getRankCost(rank) {
    switch (rank) {
        case 1:
            return { exp: 20000, fragments: 625 };
        case 2:
            return { exp: 18000, fragments: 125 };
        case 3:
            return { exp: 15000, fragments: 25 };
        case 4:
            return { exp: 12000, fragments: 5 };
        case 5:
            return { exp: 10000, fragments: 1 };
        default:
            return { exp: 20000, fragments: 625 };  // 默认一等成本
    }
}

function enhanceAmulet(tag) {
    const amulet = wuxingStates.find(amulet => amulet.tag === tag);

    if (!amulet) {
        showInfoBox("找不到指定的五行符。", null, null, 'red');
        return;
    }

    if (amulet.equipped && amulet.currentPetName !== currentPet.name) {
        showInfoBox(`该五行符已经被 ${amulet.currentPetName} 装备，需要至该宠物界面强化。`, null, null, 'red');
        return;
    }

    if (amulet.level >= MAX_LEVEL) {
        showInfoBox("已达强化等级上限，无法继续强化。", null, null, 'red');
        return;
    }

    // 确保五行符有rank属性
    ensureAmuletRank(amulet);

    // 获取对应rank的强化成本
    const { exp, fragments } = getRankCost(amulet.rank);

    if (wuxingFragments >= fragments && currentExp >= exp) {
        wuxingFragments -= fragments;
        currentExp -= exp;
        amulet.level += 1;

        // 按照rank进行相应的提升
        const rankMultiplier = [1, 0.8, 0.6, 0.4, 0.2][amulet.rank - 1];
        
        if (amulet.color === 'red') {
            if (!amulet.selectedBonus) {
                amulet.selectedBonus = Math.random() < 0.5 ? 'physicalAttack' : 'magicAttack';
            }
            amulet.drugBonus[amulet.selectedBonus] += Math.floor(300 * rankMultiplier);
        } else {
            const newDrugBonus = initializeDrugBonus(amulet.color, amulet.level, amulet.rank, amulet.selectedBonus);
            Object.keys(amulet.drugBonus).forEach(key => {
                amulet.drugBonus[key] = newDrugBonus[key];
            });
        }

        if (amulet.level % 5 === 0) {
            handleAdditionalValuesEnhancement(amulet);
        }

        showInfoBox(`消耗${exp}经验和${fragments}个五行碎片，成功强化至 ${amulet.level} 级。`, null, null, 'green');
        updateWuxingDisplay();
        displayAmuletDetails(amulet);
    } else {
        showInfoBox("强化所需资源不足。", null, null, 'red');
    }
}


// 处理额外值强化
function handleAdditionalValuesEnhancement(amulet) {
    const enhancementMultiplier = 1.1 + Math.random() * 0.2;

    // 获取已存在的属性集合，防止生成相同的属性条目
    const existingAttributes = new Set(
        amulet.additionalValues.map(value => value.attribute.replace('‰', ''))
    );

    if (amulet.additionalValues.length < 5) {
        const addNewValue = Math.random() < 0.3;

        if (addNewValue) {
            let newAdditionalValue;
            let attempts = 0;

            do {
                newAdditionalValue = generateAdditionalValues(amulet.color,amulet.rank).pop();
                attempts++;
            } while (existingAttributes.has(newAdditionalValue.attribute.replace('‰', '')) && attempts < 10);

            if (!existingAttributes.has(newAdditionalValue.attribute.replace('‰', ''))) {
                amulet.additionalValues.push(newAdditionalValue);
            } else {
                enhanceExistingAttribute(amulet, enhancementMultiplier);
            }
        } else {
            enhanceExistingAttribute(amulet, enhancementMultiplier);
        }
    } else {
        enhanceExistingAttribute(amulet, enhancementMultiplier);
    }
}

function enhanceExistingAttribute(amulet, enhancementMultiplier) {
    const randomIndex = Math.floor(Math.random() * amulet.additionalValues.length);
    const attribute = amulet.additionalValues[randomIndex].attribute;

    if (attribute === 'WXplayerCritRate' || attribute === 'WXplayerCritDamage') {
        // 增加暴击率或暴击伤害，增加值为5到7（整数百分比）
        const enhancementValue = Math.floor(Math.random() * (7 - 5 + 1)) + 5;
        amulet.additionalValues[randomIndex].value += enhancementValue;
    } else if (attribute.startsWith('‰')) {
        // 增加千分比属性，增加值为5‰到7‰
        const enhancementValue = Math.floor(Math.random() * (7 - 5 + 1)) + 5;
        amulet.additionalValues[randomIndex].value += enhancementValue;
    } else {
        // 增加具体数值属性，按当前值的1.1到1.3倍增加
        const enhancementValue = Math.floor(amulet.additionalValues[randomIndex].value * enhancementMultiplier);
        amulet.additionalValues[randomIndex].value += enhancementValue;
    }
}


function applyWuxingEffects() {
    const effects = {
        goldAmulet: 0,
        woodAmulet: 0,
        waterAmulet: 0,
        fireAmulet: 0,
        earthAmulet: 0,
    };

    // 计算每种五行符的效果指数
    wuxingStates.forEach(state => {
        if (state.equipped && state.currentPetName === currentPet.name) {
            const amuletType = state.tag.split('(')[0];
            if (effects.hasOwnProperty(amuletType)) {
                // 根据 rank 获取基础效果值
                let baseEffectValue = [5, 4, 3, 2, 1][state.rank - 1];

                // 根据等级计算额外的强度价值
                let levelBonus = 0;
                if (state.level > 20 && state.level <= 40) {
                    levelBonus = 1;
                } else if (state.level > 40 && state.level <= 60) {
                    levelBonus = 2;
                } else if (state.level > 60 && state.level <= 80) {
                    levelBonus = 3;
                } else if (state.level > 80 && state.level <= 100) {
                    levelBonus = 4;
                }

                // 总效果指数 = 基础效果值 + 等级增益
                effects[amuletType] += baseEffectValue + levelBonus;
            }
        }
    });

    // 根据效果指数确定效果强度
    const activeEffects = {};
    Object.keys(effects).forEach(type => {
        const effectValue = effects[type];
        if (effectValue >= 45) {
            activeEffects[type] = 9;  // 9档效果
        } else if (effectValue >= 40) {
            activeEffects[type] = 8;  // 8档效果
        } else if (effectValue >= 35) {
            activeEffects[type] = 7;  // 7档效果
        } else if (effectValue >= 30) {
            activeEffects[type] = 6;  // 6档效果
        } else if (effectValue >= 25) {
            activeEffects[type] = 5;  // 5档效果
        } else if (effectValue >= 20) {
            activeEffects[type] = 4;  // 4档效果
        } else if (effectValue >= 15) {
            activeEffects[type] = 3;  // 3档效果
        } else if (effectValue >= 10) {
            activeEffects[type] = 2;  // 2档效果
        } else if (effectValue >= 5) {
            activeEffects[type] = 1;  // 1档效果
        }
    });

    return activeEffects;  // 返回包含所有生效效果的对象
}



function getAmuletImageURL(name) {
    const imageMap = {
        // 金符
        'goldAmulet(red)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df01.png',
        'goldAmulet(purple)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929dee6.png',
        'goldAmulet(orange)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929de8a.png',
        'goldAmulet(blue)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929decc.png',
        'goldAmulet(green)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df18.png',

        // 木符
        'woodAmulet(red)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df01.png',
        'woodAmulet(purple)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929dee6.png',
        'woodAmulet(orange)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929de8a.png',
        'woodAmulet(blue)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929decc.png',
        'woodAmulet(green)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df18.png',

        // 水符
        'waterAmulet(red)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df01.png',
        'waterAmulet(purple)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929dee6.png',
        'waterAmulet(orange)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929de8a.png',
        'waterAmulet(blue)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929decc.png',
        'waterAmulet(green)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df18.png',

        // 火符
        'fireAmulet(red)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df01.png',
        'fireAmulet(purple)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929dee6.png',
        'fireAmulet(orange)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929de8a.png',
        'fireAmulet(blue)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929decc.png',
        'fireAmulet(green)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df18.png',

        // 土符
        'earthAmulet(red)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df01.png',
        'earthAmulet(purple)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929dee6.png',
        'earthAmulet(orange)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929de8a.png',
        'earthAmulet(blue)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929decc.png',
        'earthAmulet(green)': 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df18.png',
    };
    return imageMap[name];
}

function addWuxingFragments(amount) {
    const fragmentsElement = document.getElementById("wuxing-fragments");
    wuxingFragments += amount;
    fragmentsElement.innerText = wuxingFragments;
    showInfoBox(`你获得了${amount}张五行符碎片，当前分解碎片数量为${wuxingFragments}。`,null,null,'black');
}        

function updateDescriptionBox(message) {
    const descriptionBox = document.getElementById("description-box");
    descriptionBox.innerText = message;
}

let highGradePill = 50;
let transmutationPill = 20;
let rebornPill = 20;
let bingpoRebornPill = 10;
let qualityPill = 20;
let currentWisdom = 0;
let skillScore = 0;
let petWisdom = 0; 
        
const descriptions = [
    "在第五次金子培养后，你可以进行单次随机培养，每次花费4两888文金子",
    "当你每达到一个里程碑，你的称号都会有所提升，直到最终成为“魔兽之王”！",
    "宠物的各项技能效果在本模拟器中进行了简化，尤其是被动技能将只按一定比例增加各项属性值，增量随技能等级提高而提高。",
    "宠物的资质可以用“资质重生丹”洗练到更高的程度",
    "二级属性会随着悟性的提高得到百分比的增长",
    "合理的分配金子培养机会可以让你的宠物评分得到最大化！",
    "5爆400？极品宠物需要更多的耐心和更专业的培养方式，当然，对金子的消耗也会更大",
    "宠物的S技能和SS技能属于稀缺技能，很难通过洗练得来，商店直接购买或许是更好的方式",
    "宠物的成长上限会因为是否觉醒和是否飞升出现较大差异",
    "为了避免双击页面放大，页面内对双击速度作出了限制",
    "品质越高、成长率越高的宠物，资质所折算的属性就会越高，总体能力就会更强",
    "宠物变异时，资质会得到明显的提升，甚至超出原有的资质上限！",
    "目前共有三种还童丹，每种还童丹的功能各不同，详情可见“玩法”说明",
    "稀有道具只能通过宝箱开启获得。开启宝箱时，有概率同时出现1~3个奖品",
    "如果你需要删除某个技能，可以点击该技能进行操作"
];        

function updateDescriptionBox() {
    const descriptionBox = document.getElementById("description-box");
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    descriptionBox.innerText = descriptions[randomIndex];
}

let evolutionLevel = 0;

function evolvePet() {
    // 定义不同进化阶段所需的道具。
    const evolutionItems = {
        0: 'shakingSoul',
        7: 'glowingSoul',
        13: 'activeSoul',
        19: 'jumpingSoul',
        25: 'radiantSoul'
    };

    let requiredItem; // 存储当前进化所需的道具。
    let successRate;  // 存储当前进化的成功率。
    let increaseValue = 0; // 存储进化成功时资质提升的数值。

    // 根据当前的进化等级设置所需的道具、成功率和资质提升数值。
    if (evolutionLevel < 7) {
        requiredItem = evolutionItems[0];
        successRate = 0.8;
        increaseValue = 200;
    } else if (evolutionLevel < 13) {
        requiredItem = evolutionItems[7];
        successRate = 0.7;
        increaseValue = 300;
    } else if (evolutionLevel < 19) {
        requiredItem = evolutionItems[13];
        successRate = 0.6;
        increaseValue = 400;
    } else if (evolutionLevel < 25) {
        requiredItem = evolutionItems[19];
        successRate = 0.5;
        increaseValue = 240;
    } else if (evolutionLevel < 30) {
        requiredItem = evolutionItems[25];
        successRate = 0.8;
        increaseValue = 160;
    } else {
        // 如果进化等级达到上限，提示用户并退出函数。
        showInfoBox("您的宠物已达进化等级上限！");
        return;
    }

    // 检查用户是否有足够的所需道具，如果没有，提示用户并退出函数。
    const item = jinnangItems.find(i => i.name === requiredItem);
    if (item.quantity < 1) {
        showInfoBox(`您的${item.displayName}不足！`);
        return;
    }

    // 随机生成一个数，如果小于成功率，则进化成功。
    if (Math.random() < successRate) {
        // 如果进化等级小于31，提升随机资质。
        if (evolutionLevel < 31) {
            increaseRandomQuality(increaseValue);
        }

        remainingPoints += 5; // 增加5个剩余点数
        // 减少用户的所需道具数量。
        item.quantity--;
        // 增加进化等级。
        evolutionLevel++;
        // 更新用户的道具数量显示。
        updateJinnangItems();
        // 更新进化等级的显示。
        document.getElementById("evolution-level").innerText = evolutionLevel;
        // 更新资质卡片和技能分数的显示。
        updateQualityDisplayWithBonuses();
        updateRemainingPointsDisplay();
        updateSkillScore();
        updateTitle();
    } else {
        // 如果进化失败，减少用户的所需道具数量，并提示用户进化失败。
        item.quantity--;
        showInfoBox("进化失败！");
        updateJinnangItems();
    }
}

function increaseRandomQuality(increaseValue) {
    // 获取当前宠物的资质
    const qualities = currentPet.qualities;
    // 定义需要提升的资质属性
    const attributes = ['endurance', 'intelligence', 'strength', 'agility', 'faith'];
    // 标记是否增加了资质值
    let addedValue = false;

    // 遍历每个资质属性
    for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        // 获取该属性的最大值
        const maxValue = qualities[attribute].max;

        // 如果当前资质值小于最大值
        if (qualities[attribute].current < maxValue) {
            // 增加当前资质值，但不超过最大值
            qualities[attribute].current = Math.min(qualities[attribute].current + increaseValue, maxValue);
            // 标记为已增加资质值
            addedValue = true;
            break;
        }
    }

    // 如果没有任何资质值被增加，说明所有资质都已达最大值
    if (!addedValue) {
        //console.log("所有资质已达最大值，进化不会带来任何资质值的提升");
    }

    // 更新资质卡片
    updateQualityDisplayWithBonuses();
}

let qualityPillCount = 0;
let consumedPillCount = 0;


function updateQualityDisplayWithBonuses() {
    // 获取内丹加成
    const { qualityBonuses } = getElixirBonuses();
    
    // 处理药丸界面元素
    const pillElements = [
        document.getElementById("quality-pill-1"),
        document.getElementById("quality-pill-2"),
        document.getElementById("quality-pill-3"),
        document.getElementById("quality-pill-4"),
        document.getElementById("quality-pill-5")
    ];
    const pillNumElements = [
        document.getElementById("quality-pill-num-1"),
        document.getElementById("quality-pill-num-2"),
        document.getElementById("quality-pill-num-3"),
        document.getElementById("quality-pill-num-4"),
        document.getElementById("quality-pill-num-5")
    ];
    const attributes = ['endurance', 'intelligence', 'strength', 'agility', 'faith'];
    const activePillSrc = "https://pic.imgdb.cn/item/66c9d327d9c307b7e9682c26.png";
    const inactivePillSrc = "https://pic.imgdb.cn/item/66caa91ad9c307b7e97841c0.png";
    
    // 固定药丸加成值
    const PILL_BONUS = 1240;
    
    // 基础信息更新
    document.getElementById("evolution-level").innerText = evolutionLevel;

    
    const tierElement = document.getElementById("quality-tier");
    tierElement.innerText = currentPet.qualities.tier;
    
    // 设置品级颜色
    let color;
    switch (currentPet.qualities.tier) {
        case '优秀': color = 'green'; break;
        case '杰出': color = 'blue'; break;
        case '卓越': color = 'purple'; break;
        case '完美': color = 'coral'; break;
        case '超凡': color = 'red'; break;
        default: color = 'black';
    }
    tierElement.style.color = color;
    tierElement.style.fontWeight = 'bold';
    tierElement.style.textShadow = 'white 0px 0px 5px';
    
    // 更新成长率
    const growthRateElement = document.getElementById("quality-growth-rate");
    if (awakened) {
        if (hallucinated) {
            const minGrowthRate = 400 + (hallucinationLevel) * 5;
            growthRateElement.innerText = hallucinationLevel >= 12 ? 
                `460%` : `${minGrowthRate}% ~ 460%`;
        } else {
            growthRateElement.innerText = `400% ~ 460%`;
        }
    } else {
        growthRateElement.innerText = `${currentPet.qualities.growthRate}%`;
    }
    
    // 更新变异状态
    document.getElementById("quality-mutated").innerText = 
        currentPet.qualities.mutated ? "变异" : "未变异";
    
    // 处理药丸UI更新
    if (qualityPillCount > 0) {
        // 药丸UI激活逻辑
        pillElements.forEach((pill, index) => {
            pill.style.opacity = "1";
            pill.style.cursor = "pointer";
            pill.src = activePillSrc;
            pill.onclick = () => {
                showInfoBox(
                    "是否取下已经装备的仙丹？",
                    () => {
                        const pillBeforeTake = qualityPillCount;
                        qualityPillCount = Math.max(qualityPillCount - qualityPillCount, 0);
                        addItemToJinnang('qualityEnhancePill', pillBeforeTake);
                        updateQualityDisplayWithBonuses();
                    },
                    null,
                    'red'
                );
            };
        });
        
        pillNumElements.forEach((pillNum) => {
            pillNum.style.position = "absolute";
            pillNum.style.top = "10px";
            pillNum.style.left = "95%";
            pillNum.style.transform = "translateX(-50%)";
            pillNum.style.color = "white";
            pillNum.style.fontSize = "16px";
            pillNum.style.fontWeight = "bold";
            pillNum.textContent = qualityPillCount;
        });
    } else {
        // 药丸UI未激活逻辑
        pillElements.forEach(pill => {
            pill.style.opacity = "1";
            pill.style.cursor = "default";
            pill.src = inactivePillSrc;
            pill.onclick = null;
        });
        
        pillNumElements.forEach((pillNum) => {
            pillNum.textContent = "";
        });
    }
    
    // 更新各属性显示
    attributes.forEach(attr => {
        // 获取基础值
        const baseValue = Math.round(currentPet.qualities[attr].current);
        const maxValue = currentPet.qualities[attr].max;
        
        // 获取各种加成
        const elixirBonus = qualityBonuses[attr] || 0;
        const pillBonus = qualityPillCount > 0 ? PILL_BONUS : 0;
        const totalBonus = elixirBonus + pillBonus;
        const totalValue = baseValue + totalBonus;
        
        // 更新显示
        const currentElement = document.getElementById(`${attr}-current`);
        
        if (totalBonus > 0) {
            currentElement.innerHTML = `${baseValue}<span style="color:#4CAF50;font-weight: bold;"> +${totalBonus}</span>`;
        } else {
            currentElement.innerHTML = `${baseValue}`;
        }
        
        // 更新药丸bonus显示元素

        
        // 设置最大值
        document.getElementById(`${attr}-max`).innerText = maxValue;
        
        // 更新进度条
        const barElement = document.getElementById(`${attr}-bar`);
        if (barElement) {
            barElement.style.width = `${Math.min(100, (totalValue / maxValue * 100))}%`;
        }
    });
    
    // 更新变异状态的外观效果
    const petImage = document.querySelector('.pet-image img');
    const petInfo = document.querySelector('.bottom-bar .info');
    const bottombar = document.querySelector('.bottom-bar');
    
    
    if (currentPet.qualities.mutated) {
        petImage?.classList.add('mutated');
        petInfo?.classList.add('mutated');
        bottombar?.classList.add('mutated');
    } else {
        petImage?.classList.remove('mutated');
        petInfo?.classList.remove('mutated');
        bottombar?.classList.remove('mutated');
    }
}

        
function useSupremeWisdomPill() {
    if (!currentPet || !currentPet.qualities) { // 添加检查
        console.warn("当前宠物未被正确初始化。");
        return;
    }
    
    const item = jinnangItems.find(i => i.name === 'supremeWisdomPill');
    if (!item || item.quantity <= 0) {
        showInfoBox("您没有举世无双悟性丹，无法将宠物瞬间提升到20悟性！");
        return;
    }
    
    if (currentWisdom >= 20) {
        showInfoBox("宠物的悟性已经达到20，无法再次提升！");
        return;
    }

    if (currentWisdom < 19) {
        showInfoBox("举世无双悟性丹是专用于19悟到20悟的关键突破道具，不适用于低于此悟性阶段的宠物");
        return;
    }

    // 消耗道具并更新宠物悟性
    item.quantity--;
    currentWisdom = 20; // 更新宠物的悟性
    updateJinnangItems();
    updateAttributePanel();
    document.getElementById("current-wisdom").innerText = currentWisdom;
    showInfoBox("您使用了举世无双悟性丹，宠物的悟性已提升至20！");
}

function increasePetLevel(levels) {
    if (petLevel >= petMaxLevel) {
        showInfoBox("宠物等级已达上限，无法继续升级！");
        return;
    }

    const oldLevel = petLevel;
    petLevel += levels;
    if (petLevel > petMaxLevel) petLevel = petMaxLevel; // 确保等级不超过上限

    const actualLevelsIncreased = petLevel - oldLevel;
    remainingPoints += actualLevelsIncreased * 2; // 每提升1级增加2个可分配点数

    // 每次等级提升时，消耗 qualityPillCount
    for (let i = 0; i < actualLevelsIncreased; i++) {
        if (qualityPillCount > 0) {
            qualityPillCount -= 1;
            consumedPillCount += 1; // 累加已消耗的 Pill Count
        }
    }
    
    updateQualityDisplayWithBonuses(); // 更新界面显示

    updatePetLevel();
    updateAttributePanel();
    updateRemainingPointsDisplay();
    updateTitle();
}

let absorbCount = 0; // 跟踪连续使用次数

function directlyAbsorbExperience(amount) {
    gainExp(amount);
    showInfoBox(`你获得了${amount}点经验，当前为${petLevel}级，当前经验为${currentExp}/${maxExp}`, null, null, 'green');
    updateExpBar(currentExp, maxExp);
}
        
async function absorbExperience() {
    absorbCount++;

    const advancedItem = jinnangItems.find(i => i.name === 'advancedExperienceBook');
    const normalItem = jinnangItems.find(i => i.name === 'normalExperienceBook');
    const totalValue = advancedItem.quantity + normalItem.quantity;

    if (absorbCount >= 5) {
        showInfoBox(`您已连续多次使用经验书，是否需要自动使用现有经验书？（当前经验书数量过多，全部使用大约需要${Math.round(totalValue / 100)}秒钟）`, async () => {
            // 玩家选择确认，进入自动使用异步循环
            await batchUseExperienceBooks(advancedItem, normalItem);
            showInfoBox(`自动吸收完成，当前为${petLevel}级，经验为${currentExp} / ${maxExp}`);
            updateExpBar(currentExp, maxExp);
            absorbCount = 0; // 重置计数器
        }, () => {
            // 玩家选择取消，继续单次使用逻辑
            performSingleAbsorption(advancedItem, normalItem);
            absorbCount = 0; // 重置计数器
        });
    } else {
        performSingleAbsorption(advancedItem, normalItem);
    }
}

// 批量异步使用经验书
async function batchUseExperienceBooks(advancedItem, normalItem) {
    while ((advancedItem && advancedItem.quantity > 0) || (normalItem && normalItem.quantity > 0)) {
        if (petLevel >= petMaxLevel) {
            if (petLevel !== 180) {
                showInfoBox(`宠物等级已达上限，当前为${petLevel}级，经验为${currentExp} / ${maxExp}`);
                break;
            }
        }

        if (advancedItem && advancedItem.quantity > 0) {
            useExperienceBook(advancedItem, 30000); // 使用高级经验书
        } else if (normalItem && normalItem.quantity > 0) {
            useExperienceBook(normalItem, 10000); // 使用普通经验书
        }

        // 每次使用完一批书后，异步等待一段时间
        await new Promise(resolve => setTimeout(resolve, 0)); // 暂停 100 毫秒，防止阻塞
    }
}

// 单次吸收逻辑
function performSingleAbsorption(advancedItem, normalItem) {
    if (petLevel >= petMaxLevel) {
        if (petLevel !== 180) {
            showInfoBox(`宠物等级已达上限，当前为${petLevel}级，经验为${currentExp} / ${maxExp}`);
            return;
        }
    }

    if (advancedItem && advancedItem.quantity > 0) {
        useExperienceBook(advancedItem, 30000); // 使用高级经验书
    } else if (normalItem && normalItem.quantity > 0) {
        useExperienceBook(normalItem, 10000); // 使用普通经验书
    } else {
        showInfoBox("没有经验书可供使用！");
    }
}


function useExperienceBook(item, expAmount) {
    if (petLevel >= petMaxLevel) {
        showInfoBox("宠物等级已达上限，无法继续升级！");
        return;
    }

    item.quantity--;
    updateJinnangItems();
    
    // 调用 gainExp 函数处理经验值增长、升级逻辑
    gainExp(expAmount);
}

        
function updateAscensionStatus() {
    const ascensionStatusElement = document.getElementById('ascension-status');
    if (petAscended) {
        ascensionStatusElement.innerText = '已飞升';
        ascensionStatusElement.style.color = 'red';
    } else {
        ascensionStatusElement.innerText = '未飞升';
        ascensionStatusElement.style.color = ''; // 恢复默认颜色
    }
}

function ascend() {
    // Retrieve the current pet level and wisdom from the attribute panel
    let petLevel = parseInt(document.getElementById('pet-level').innerText);
    let petWisdom = parseInt(document.getElementById('current-wisdom').innerText);

    // Check if the pet has already ascended
    if (petAscended) {
        showInfoBox("您的宠物已经飞升！使用道具失败！");
        return;
    }

    // Check if the pet meets the level and wisdom requirements and if there is an ascension stone in the inventory
    const item = jinnangItems.find(i => i.name === 'ascensionStone');
    if (petLevel < 160 || petWisdom < 24 || !item || item.quantity <= 0) {
        showInfoBox("您的飞升石不够，且宠物飞升必须满足160级和24悟两个条件！(20级悟性之后，需要使用商店所售道具“特级悟性丹”才能继续提升悟性。)");
        return;
    }

    // Deduct one ascension stone from the inventory
    item.quantity--;
    updateJinnangItems();

    // Update pet's max level and ascension status
    petMaxLevel = 181;
    petAscended = true;
    updateAscensionStatus();

    showInfoBox("恭喜大侠的爱宠飞升成功！等级上限开放至180级，同时开放飞升之术功能！");
    
}

let selectedTreasure = null;
let experienceTreasureOpenCount = 0; // 定义经验宝箱打开次数的全局变量

function toggleTreasureDrawer() {
    const drawer = document.getElementById('treasure-drawer');
    const info = document.getElementById('treasure-info');
    drawer.classList.toggle('open');
    info.classList.toggle('open');
}

let selectedTreasureElement = null; // 存储选中的宝箱DOM元素

function selectTreasure(type, element) {
    // 如果之前有选中的宝箱,移除其样式
    if (selectedTreasureElement) {
        selectedTreasureElement.classList.remove('treasure-selected');
    }
    
    // 获取当前点击的img元素
    const imgElement = element.tagName.toLowerCase() === 'img' ? element : element.querySelector('img');
    
    // 更新选中的宝箱元素和类型
    selectedTreasureElement = imgElement;
    selectedTreasure = type;
    
    // 添加发光样式到新选中的宝箱
    selectedTreasureElement.classList.add('treasure-selected');
    
    // 更新描述
    updateTreasureDescription(type);
}

function updateTreasureDescription(type) {
    let description;
    if (type === '经验宝箱') {
        const cost = getTreasureCost('经验宝箱');
        description = `充满智慧的宝箱，单次开启将花费${convertPrice(cost)}金子。有概率获得宠物升级的经验书和飞升之石。`;
    } else {
        switch (type) {
            case '奇馈宝箱':
                description = "充满奇异道具的宝箱，单次开启花费1两金子，您可能获得各种用于培养宠物的道具，还可能获得宠物转职、宠物日常生活的关键道具！";
                break;
            case '灵魂宝箱':
                description = "神秘莫测的宝箱，单次开启花费2两金子，您可能获得宠物进化所需的各种灵魂！";
                break;
            case '武神仙葫':
                description = "上古武神的战利品，单次开启花费6两800文金子，您可能获得庆典蛋糕、精灵升级的相关道具、心鉴之石、施毒之术等提升战斗能力的法宝！";
                break;
            case '五行仙葫':
                description = "至尊五行仙葫，每次开启16两800文金，您可能获得珍贵的五行符和分解符材料！";
                break;
            case '至尊仙葫':
                description = "价值连城的宝箱，单次开启花费18两800文金子，您可能获得召唤灵符，修为灵丹、举世无双悟性丹，飞升之石，仙人醍醐等超稀有道具！";
                break;
        }
    }
    document.getElementById('treasure-description').innerText = description;
}

let rewards = []; // 确保 rewards 在全局作用域内

function collectTreasure() {
    if (rewards.length === 0) {
        return;
    }

    const rewardActions = {
        '普通经验书': 'normalExperienceBook',
        '高级经验书': 'advancedExperienceBook',
        '水晶红富士': () => generateItemToJinnang('redApple', '水晶红富士', 'https://pic.imgdb.cn/item/66ced7d4d9c307b7e9650a3b.png', price = 100, quantity = 1, description = '美味的苹果'),
        '浓情费罗列': () => generateItemToJinnang('chocolate', '浓情费罗列', 'https://pic.imgdb.cn/item/66d2d3ead9c307b7e9180338.png', price = 100, quantity = 1, description = '一口下去，丝滑的巧克力和爆浆甜心在你的口腔中交织，回味无穷'),
        '迷人的花束': () => generateItemToJinnang('fancyFlower', '迷人的花束', 'https://pic.imgdb.cn/item/66cfe544d9c307b7e978e72b.png', price = 100, quantity = 1, description = '迷人的花束，赠给爱人以芬芳'),
        '达摩不倒翁': () => generateItemToJinnang('damoTumbler', '达摩不倒翁', 'https://pic.imgdb.cn/item/66cfee41d9c307b7e983f6f7.png', price = 100, quantity = 1, description = '达摩不倒翁，按压越用力，弹起来越容易撞到头'),
        '飞升之石': 'ascensionStone',
        '举世无双悟性丹': 'supremeWisdomPill',
        '固元鼎': 'enhanceBowl',
        '清心酿': 'ignoranceWater',
        '闪耀之灵': 'radiantSoul',
        '颤抖之灵': 'shakingSoul',
        '发光之灵': 'glowingSoul',
        '召唤灵符': 'summonCharmPaper',
        '活跃之灵': 'activeSoul',
        '跳动之灵': 'jumpingSoul',
        '醒悟丹': 'awakenPill',
        '离魂石': 'seperateStone',
        '凝魄石': 'coagulateStone',
        '精灵精炼石': 'spiritRefreshStone',
        '精灵觉醒石': 'spiritAwakenStone',
        '施毒之术': 'poisonSkillBook',
        '毒粉': 'poisonPowder',
        '毒粉礼包（3）': () => addItemToJinnang('poisonPowder', 3),
        '遗失的洛书·密钥': 'lostBook',
        '残页的河图·灵匙': 'fragmentedMap',
        '定空的灵石·图章': 'nirvanaGem',
        '心鉴之石': 'heartStone',
        '天地灵气': 'earthlyEnergy',
        '天地灵气礼包（10）': () => addItemToJinnang('earthlyEnergy', 10),
        '特级悟性丹': 'tejiWisdomPill',
        '特级悟性丹礼包（10）': () => addItemToJinnang('tejiWisdomPill', 10),
        '修为灵丹*3（蓝）': () => addItemToJinnang('cultivationPill200', 3),
        '修为灵丹*3（橙）': () => addItemToJinnang('cultivationPill500', 3),
        '小金袋（88两）':'tinyBag',
        '金玉满堂福袋': 'redEnvelope',
        '富贵宝石袋': 'wealthyGemBag',
        '修为灵丹（蓝）': 'cultivationPill200',
        '修为灵丹（橙）': 'cultivationPill500',
        '庆典蛋糕': 'celebrationCake',
        '琼浆玉露': 'spiritWine',
        '仙人醍醐': 'ultraSkillBoomer',
        '高级经验书*2': () => addItemToJinnang('advancedExperienceBook', 2),
        '资质仙丹礼包': 'qualityEnhancePillPKG',
        '灵异秘卷': 'mutationScroll',
        '装满的药材箱': 'drugBox',
        '华贵的药材箱': 'fancyDrugBox',
        '锻造工具': 'forgeTool',
        '橙色武装原料': 'orangeArmComponents',
        '蓝色武装原料': 'blueArmComponents',
        '宠物资质仙丹': 'qualityEnhancePill',
        '高级神兽丹': 'advancedSkillPill',
        '经商积分卡': 'merchantPointsCard',
        '活络重生丸': () => generateItemToJinnang('resetTrainingCount', '活络重生丸', 'https://pic1.imgdb.cn/item/678fc939d0e0a243d4f63c3b.png', price = 3600, quantity = 1, description = '传说由世外高人炼制的秘药，使用后可以重置宠物的潜力点数'),
        '魔魂封印卡': 'bossSealCard',
        '一等分解符': 'firstFragments',
        '二等分解符': 'secondFragments',
        '三等分解符': 'thirdFragments',
        '四等分解符': 'fourthFragments',
        '五等分解符': 'fifthFragments',
        '金符（红）': () => addAmuletToManager('goldAmulet', 'red', 1),
        '金符（紫）': () => addAmuletToManager('goldAmulet', 'purple', 1),
        '金符（橙）': () => addAmuletToManager('goldAmulet', 'orange', 1),
        '金符（蓝）': () => addAmuletToManager('goldAmulet', 'blue', 1),
        '金符（绿）': () => addAmuletToManager('goldAmulet', 'green', 1),
        '木符（红）': () => addAmuletToManager('woodAmulet', 'red', 1),
        '木符（紫）': () => addAmuletToManager('woodAmulet', 'purple', 1),
        '木符（橙）': () => addAmuletToManager('woodAmulet', 'orange', 1),
        '木符（蓝）': () => addAmuletToManager('woodAmulet', 'blue', 1),
        '木符（绿）': () => addAmuletToManager('woodAmulet', 'green', 1),
        '水符（红）': () => addAmuletToManager('waterAmulet', 'red', 1),
        '水符（紫）': () => addAmuletToManager('waterAmulet', 'purple', 1),
        '水符（橙）': () => addAmuletToManager('waterAmulet', 'orange', 1),
        '水符（蓝）': () => addAmuletToManager('waterAmulet', 'blue', 1),
        '水符（绿）': () => addAmuletToManager('waterAmulet', 'green', 1),
        '火符（红）': () => addAmuletToManager('fireAmulet', 'red', 1),
        '火符（紫）': () => addAmuletToManager('fireAmulet', 'purple', 1),
        '火符（橙）': () => addAmuletToManager('fireAmulet', 'orange', 1),
        '火符（蓝）': () => addAmuletToManager('fireAmulet', 'blue', 1),
        '火符（绿）': () => addAmuletToManager('fireAmulet', 'green', 1),
        '土符（红）': () => addAmuletToManager('earthAmulet', 'red', 1),
        '土符（紫）': () => addAmuletToManager('earthAmulet', 'purple', 1),
        '土符（橙）': () => addAmuletToManager('earthAmulet', 'orange', 1),
        '土符（蓝）': () => addAmuletToManager('earthAmulet', 'blue', 1),
        '土符（绿）': () => addAmuletToManager('earthAmulet', 'green', 1)
    };

    for (const reward of rewards) {
        const action = rewardActions[reward.name];
        if (typeof action === 'function') {
            action(); // 处理有特殊逻辑的奖励，如礼包
        } else if (action) {
            addItemToJinnang(action); // 处理一般奖励
        } else {
            addItemToTopBar(reward); // 默认处理其他情况
        }
    }

    // 清空奖品
    rewards = [];
    document.getElementById('treasure-reward').innerHTML = "";

    // 更新经验宝箱描述
    if (selectedTreasure === '经验宝箱') {
        updateTreasureDescription('经验宝箱');
    }
}

// 修改 openTreasure 函数，使其兼容开启十次的逻辑
function openTreasure(times = 1) {
    if (!selectedTreasure) {
        showInfoBox("请先选择一个宝箱！");
        return;
    }
    const cost = getTreasureCost(selectedTreasure) * times;
    if (times === 10) {
        const treasureMapItem = jinnangItems.find(i => i.name === 'treasureMap');
        if (treasureMapItem && treasureMapItem.quantity > 0) {
            // 使用一个藏宝图
            useItem('treasureMap', 1);
            showEffect('generalEffect', 'https://pic.imgdb.cn/item/66a34156d9c307b7e94568b1.gif');
        } else {
            if (goldAmount < cost) {
                showInfoBox("金子不足！");
                return;
            }

            goldAmount -= cost;
            updateGoldDisplay(goldAmount);
        }
    } else {
        if (goldAmount < cost) {
            showInfoBox("金子不足！");
            return;
        }

        goldAmount -= cost;
        updateGoldDisplay(goldAmount);
    }

    // 自动收集上次未取出的奖品
    collectTreasure();

    if (selectedTreasure === '经验宝箱') {
        experienceTreasureOpenCount += times; // 增加经验宝箱开启次数
    }

    let totalRewards = [];
    for (let t = 0; t < times; t++) {
        // 根据概率随机生成 1~3 个奖品
        let rewardCount;
        const random = Math.random() * 100;
        if (random < 95) {
            rewardCount = 1;
        } else if (random < 99) {
            rewardCount = 2;
        } else {
            rewardCount = 3;
        }

        let rewards = [];
        for (let i = 0; i < rewardCount; i++) {
            rewards.push(getRandomReward(selectedTreasure));
        }

        totalRewards = totalRewards.concat(rewards);
    }

    rewards = totalRewards; // 更新全局 rewards

    // 更新页面显示多个奖品
    let rewardHTML = '';
    for (const reward of totalRewards) {
        rewardHTML += `<div><img src="${reward.url}" alt="${reward.name}"><div>${reward.name}</div></div>`;
    }
    setTimeout( () => {
        document.getElementById('treasure-reward').innerHTML = rewardHTML;
        showEffect('generalEffect', 'https://pic.imgdb.cn/item/66a34156d9c307b7e94568b1.gif');
    },100);
    playerCredit += Math.round(cost * 0.0005) * times;
    document.getElementById('credit-detail').innerText = playerCredit;
}

function openTenthTreasure() {
    openTreasure(10);
}

function getTreasureCost(type) {
    if (type === '经验宝箱') {
        if (experienceTreasureOpenCount < 20) {
            return 100;
        } else if (experienceTreasureOpenCount < 40) {
            return 200 + (experienceTreasureOpenCount * 5);
        } else if (experienceTreasureOpenCount < 60) {
            return 400 + (experienceTreasureOpenCount * 10);
        } else if (experienceTreasureOpenCount < 80) {
            return 800 + (experienceTreasureOpenCount * 15);
        } else {
            return 2400;
        }
    }

    switch (type) {
        case '奇馈宝箱':
            return 1000;
        case '灵魂宝箱':
            return 2000;
        case '武神仙葫':
            return 6800;
        case '五行仙葫':
            return 16800;
        case '至尊仙葫':
            return 18800;
    }
}

function getRandomReward(type) {
    const rewards = {
        '经验宝箱': [
            { name: '普通经验书', url: 'https://pic.imgdb.cn/item/6656e734d9c307b7e9088e9b.png', chance: 90 },
            { name: '高级经验书', url: 'https://pic.imgdb.cn/item/6656e734d9c307b7e9088e7b.png', chance: 9.95 },
            { name: '飞升之石', url: 'https://pic.imgdb.cn/item/6656e734d9c307b7e9088e6d.png', chance: 0.05 }
        ],
        '奇馈宝箱': [
            { name: '神兽还童丹', url: 'https://pic.imgdb.cn/item/6654a944d9c307b7e9ca6423.png', chance: 10 },
            { name: '高级悟性丹', url: 'https://pic.imgdb.cn/item/66541c01d9c307b7e9208aea.png', chance: 20 },
            { name: '水晶红富士', url: 'https://pic.imgdb.cn/item/66ced7d4d9c307b7e9650a3b.png', chance: 4 },
            { name: '浓情费罗列', url: 'https://pic.imgdb.cn/item/66d2d3ead9c307b7e9180338.png', chance: 3 },
            { name: '迷人的花束', url: 'https://pic.imgdb.cn/item/66cfe544d9c307b7e978e72b.png', chance: 3 },
            { name: '达摩不倒翁', url: 'https://pic.imgdb.cn/item/66cfee41d9c307b7e983f6f7.png', chance: 3 },
            { name: '冰魄还童丹', url: 'https://pic.imgdb.cn/item/665ef0855e6d1bfa055800f4.png', chance: 10 },
            { name: '还童金丹', url: 'https://pic.imgdb.cn/item/6655a92ad9c307b7e9c04265.png', chance: 10 },
            { name: '资质重生丹', url: 'https://pic.imgdb.cn/item/6654a944d9c307b7e9ca63f5.png', chance: 10 },
            { name: '万化灵丹', url: 'https://pic.imgdb.cn/item/66541c01d9c307b7e9208add.png', chance: 20 },
            { name: '固元鼎', url: 'https://pic1.imgdb.cn/item/6784a0cdd0e0a243d4f3cc1e.png', chance: 1.2 },
            { name: '清心酿', url: 'https://pic.imgdb.cn/item/66884213d9c307b7e9d7bad3.png', chance: 1.2 },
            { name: '特级悟性丹', url: 'https://pic.imgdb.cn/item/665de3fd5e6d1bfa05564912.png', chance: 3 },
            { name: '宠物资质仙丹', url: 'https://pic.imgdb.cn/item/66c9d327d9c307b7e9682c26.png', chance: 0.5 },
            { name: '特级悟性丹礼包（10）', url: 'https://pic.imgdb.cn/item/665de3fd5e6d1bfa05564912.png', chance: 0.9 },
            { name: '灵异秘卷', url: 'https://pic.imgdb.cn/item/669754f0d9c307b7e9bfec4f.png', chance: 0.1 },
            { name: '装满的药材箱', url: 'https://pic.imgdb.cn/item/66c60e7cd9c307b7e9ad57e3.png', chance: 0.1 }
        ],
        '灵魂宝箱': [
            { name: '颤抖之灵', url: 'https://pic.imgdb.cn/item/6656e821d9c307b7e90988b2.png', chance: 30 },
            { name: '发光之灵', url: 'https://pic.imgdb.cn/item/6656e81dd9c307b7e909844a.png', chance: 30 },
            { name: '活跃之灵', url: 'https://pic.imgdb.cn/item/6656e81dd9c307b7e90984b7.png', chance: 20 },
            { name: '跳动之灵', url: 'https://pic.imgdb.cn/item/6656e81dd9c307b7e909843e.png', chance: 10 },
            { name: '闪耀之灵', url: 'https://pic.imgdb.cn/item/6656e81dd9c307b7e9098478.png', chance: 10 }
        ],
        '武神仙葫': [
            { name: '心鉴之石', url: 'https://pic.imgdb.cn/item/666ab20bd9c307b7e9630192.png', chance: 10 },
            { name: '精灵精炼石', url: 'https://pic.imgdb.cn/item/6669666cd9c307b7e991c04a.png', chance: 15 },
            { name: '精灵觉醒石', url: 'https://pic.imgdb.cn/item/6669666cd9c307b7e991bf78.png', chance: 15 },
            { name: '施毒之术', url: 'https://pic.imgdb.cn/item/666c23ccd9c307b7e9eb864b.png', chance: 0.5 },
            { name: '毒粉', url: 'https://pic.imgdb.cn/item/666c2428d9c307b7e9ec3327.png', chance: 5.5 },
            { name: '魔魂封印卡', url: 'https://pic.imgdb.cn/item/66cdc955d9c307b7e92c1f56.png', chance: 5 },
            { name: '毒粉礼包（3）', url: 'https://pic.imgdb.cn/item/666c2428d9c307b7e9ec3327.png', chance: 1 },
            { name: '遗失的洛书·密钥', url: 'https://pic.imgdb.cn/item/669a7ce3d9c307b7e9450f04.png', chance: 1 },
            { name: '定空的灵石·图章', url: 'https://pic.imgdb.cn/item/66a48e2cd9c307b7e9649085.png', chance: 1 },
            { name: '残页的河图·灵匙', url: 'https://pic.imgdb.cn/item/669a7ce2d9c307b7e9450ef4.png', chance: 1 },
            { name: '天地灵气', url: 'https://pic.imgdb.cn/item/666ab20bd9c307b7e96301f6.png', chance: 44 },
            { name: '天地灵气礼包（10）', url: 'https://pic.imgdb.cn/item/666ab20bd9c307b7e96301f6.png', chance: 1 }
        ],
        '五行仙葫': [
            { name: '一等分解符', url: 'https://pic.imgdb.cn/item/66cdc7ead9c307b7e92af497.png', chance: 1 },
            { name: '二等分解符', url: 'https://pic.imgdb.cn/item/66cdc7ead9c307b7e92af488.png', chance: 15 },
            { name: '三等分解符', url: 'https://pic.imgdb.cn/item/66cdc7e9d9c307b7e92af447.png', chance: 32 },
            { name: '四等分解符', url: 'https://pic.imgdb.cn/item/66cdc7e9d9c307b7e92af438.png', chance: 12 },
            { name: '五等分解符', url: 'https://pic.imgdb.cn/item/66cdc7e9d9c307b7e92af3de.png', chance: 15 },
            { name: '金符（红）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df01.png', chance: 1 },
            { name: '金符（紫）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929dee6.png', chance: 1 },
            { name: '金符（橙）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929de8a.png', chance: 1 },
            { name: '金符（蓝）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929decc.png', chance: 1 },
            { name: '金符（绿）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df18.png', chance: 1 },
            { name: '木符（红）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df01.png', chance: 1 },
            { name: '木符（紫）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929dee6.png', chance: 1 },
            { name: '木符（橙）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929de8a.png', chance: 1 },
            { name: '木符（蓝）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929decc.png', chance: 1 },
            { name: '木符（绿）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df18.png', chance: 1 },
            { name: '水符（红）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df01.png', chance: 1 },
            { name: '水符（紫）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929dee6.png', chance: 1 },
            { name: '水符（橙）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929de8a.png', chance: 1 },
            { name: '水符（蓝）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929decc.png', chance: 1 },
            { name: '水符（绿）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df18.png', chance: 1 },
            { name: '火符（红）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df01.png', chance: 1 },
            { name: '火符（紫）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929dee6.png', chance: 1 },
            { name: '火符（橙）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929de8a.png', chance: 1 },
            { name: '火符（蓝）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929decc.png', chance: 1 },
            { name: '火符（绿）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df18.png', chance: 1 },
            { name: '土符（红）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df01.png', chance: 1 },
            { name: '土符（紫）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929dee6.png', chance: 1 },
            { name: '土符（橙）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929de8a.png', chance: 1 },
            { name: '土符（蓝）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929decc.png', chance: 1 },
            { name: '土符（绿）', url: 'https://pic.imgdb.cn/item/66c5ada9d9c307b7e929df18.png', chance: 1 }
        ],
        '至尊仙葫': [
            { name: '飞升之石', url: 'https://pic.imgdb.cn/item/6656e734d9c307b7e9088e6d.png', chance: 2 },
            { name: '灵异金丹', url: 'https://pic.imgdb.cn/item/66556068d9c307b7e9681672.png', chance: 1 },
            { name: '橙色武装原料', url: 'https://pic.imgdb.cn/item/66d8732dd9c307b7e96449c0.png', chance: 1 },
            { name: '蓝色武装原料', url: 'https://pic.imgdb.cn/item/66d8732dd9c307b7e964497d.png', chance: 3 },
            { name: '举世无双悟性丹', url: 'https://pic.imgdb.cn/item/665ef0845e6d1bfa055800c7.png', chance: 1 },
            { name: '召唤灵符', url: 'https://pic.imgdb.cn/item/66d9f78ed9c307b7e94c80c4.png', chance: 10 },
            { name: '活络重生丸', url: 'https://pic1.imgdb.cn/item/678fc939d0e0a243d4f63c3b.png', chance: 5},
            { name: '醒悟丹', url: 'https://pic.imgdb.cn/item/665ef5a15e6d1bfa05609a45.png', chance: 5 },
            { name: '离魂石', url: 'https://pic.imgdb.cn/item/665ef5a15e6d1bfa056099a3.png', chance: 5 },
            { name: '凝魄石', url: 'https://pic.imgdb.cn/item/665ef5a15e6d1bfa05609a0f.png', chance: 5 },           
            { name: '仙人醍醐', url: 'https://pic.imgdb.cn/item/6662eda05e6d1bfa0530b827.png', chance: 2 },
            { name: '修为灵丹（蓝）', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e9650429.png', chance: 3 },
            { name: '锻造工具', url: 'https://pic.imgdb.cn/item/66d8732dd9c307b7e9644942.png', chance: 1 },
            { name: '经商积分卡', url: 'https://pic.imgdb.cn/item/66e6a031d9c307b7e97c84c7.png', chance: 1.5 },
            { name: '修为灵丹（橙）', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e965043b.png', chance: 0.5 },
            { name: '修为灵丹*3（蓝）', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e9650429.png', chance: 1 },
            { name: '修为灵丹*3（橙）', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e965043b.png', chance: 0.5 },
            { name: '金玉满堂福袋', url: 'https://pic.imgdb.cn/item/66c369f1d9c307b7e96503f4.png', chance: 0.5 },
            { name: '富贵宝石袋', url: 'https://pic.imgdb.cn/item/66d9f0a8d9c307b7e9415285.png', chance: 25.5 },
            { name: '高级经验书*2', url: 'https://pic.imgdb.cn/item/6656e734d9c307b7e9088e7b.png', chance: 25.5 },
            { name: '华贵的药材箱', url: 'https://pic.imgdb.cn/item/6656e598d9c307b7e906ca29.png', chance: 0.2 },
            { name: '资质仙丹礼包', url: 'https://pic.imgdb.cn/item/66cc940fd9c307b7e9cb77b1.png', chance: 0.5 },
            { name: '小金袋（88两）', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e9650410.png', chance: 0.3 }
        ]
    };
    return selectReward(rewards[type]);
}

function selectReward(rewardList) {
    const random = Math.random() * 100;
    let cumulativeChance = 0;
    for (const reward of rewardList) {
        cumulativeChance += reward.chance;
        if (random <= cumulativeChance) {
            return reward;
        }
    }
}

let luckyAccretion = 0;

function throwWish() {
    // 检查幸运金币是否存在且数量大于0
    if (drugInventory["幸运金币"] && drugInventory["幸运金币"].quantity > 0) {
        const randomNumber = Math.random(); // 生成0到1之间的随机数
        const luckyRate = luckyAccretion * 0.0005; // 成功率修改为直接使用累积值
        console.log(randomNumber,luckyRate);
        
        // 消耗一个幸运金币
        addDrugToInventory('幸运金币', -1);
        
        // 判断是否许愿成功
        if (randomNumber < luckyRate) {
            luckyAccretion = 0; // 成功后重置累积值
            return true;
        }
        
        if (luckyAccretion < 100) {
            luckyAccretion += 1; // 失败后增加累积值
        }
        return false;
    }
    
    // 如果没有幸运金币，不应该增加累积值
    return false;
}

function getWishResult() {
    // 检查是否有足够的幸运金币
    if (!drugInventory["幸运金币"] || drugInventory["幸运金币"].quantity <= 0) {
        showInfoBox('没有幸运金币可用', null,null,'red');
        return;
    }
    
    if (!throwWish()) {
        showInfoBox(`消耗一个幸运金币，幸运值累积至${luckyAccretion}%`, null,null,'green','https://pic1.imgdb.cn/item/6782833dd0e0a243d4f37425.png','80px*80px');
    } else {
        addItemToJinnang('goldBox', 1);
        showInfoBox('成功得到幸运之神的眷顾，获得一个沉甸甸的金箱子！', null,null,'red','https://pic1.imgdb.cn/item/6781f46cd0e0a243d4f34115.png');
    }
}
        
// 新增全局变量
let jinnangCapacity = 2000;
let jinnangItems = [
    { name: 'cheatPanel', displayName: '四次元空间袋', url: 'https://pic1.imgdb.cn/item/67b2c703d0e0a243d4001e01.jpg', price: 999999999, quantity: 0, description: '能凭空变出各种道具的四次元空间，请减少使用依赖以保护游戏性' },
    { name: 'hailMonsterPill', displayName: '聚灵丹', url: 'https://pic.imgdb.cn/item/66c238b6d9c307b7e9e76c9a.png', price: 50, quantity: 5, description: '可在战斗界面开启自动战斗功能，每次开启消耗一个' },
    { name: 'hailMonsterAmulet', displayName: '唤妖符', url: 'https://pic.imgdb.cn/item/66c238b6d9c307b7e9e76c26.png', price: 50, quantity: 5, description: '可战斗界面跳过10轮，轮次越高，敌人越强大，谨慎使用' },
    { name: 'blessGift', displayName: '新手福袋', url: 'https://pic1.imgdb.cn/item/678fcacad0e0a243d4f63cb5.png', price: 1, quantity: 0, description: '新手时期的嘉奖，要合理分配哦' },
    { name: 'renameDew', displayName: '重生露', url: 'https://pic1.imgdb.cn/item/66ddb0cdd9c307b7e961ad69.png', price: 1, quantity: 0, description: '可用于更改当前宠物的名称' },
    { name: 'largeLifeGem', displayName: '宠物寿命精华', url: 'https://pic1.imgdb.cn/item/678fd5abd0e0a243d4f64018.png', price: 30000, quantity: 0, description: '储存30000点宠物寿命精华，使用后可为当前宠物恢复30000点寿命值' },
    { name: 'oilPaint', displayName: '乾坤神彩', url: 'https://pic1.imgdb.cn/item/67bc8e87d0e0a243d403b752.png', price: 10000, quantity: 0, description: '随机获得一副精美的全局壁纸，宠物变异后才能使用哦' },
    { name: 'dyePowders', displayName: '浣彩瓶', url: 'https://pic1.imgdb.cn/item/678fc8d2d0e0a243d4f63c15.png', price: 20000, quantity: 0, description: '拥有让宠物变色的神奇功能，打开随机获得一种颜色的颜料堆' },
    { name: 'resetDyeTool', displayName: '涤彩箱', url: 'https://pic1.imgdb.cn/item/679065edd0e0a243d4f65da2.png', price: 20000, quantity: 0, description: '不满意当前宠物的颜色？涤彩泡泡浴助你爱宠洗净铅华，返璞归真' },
    { name: 'infiniteGem', displayName: '无限宝石', url: 'https://pic.imgdb.cn/item/668841dcd9c307b7e9d78092.png', price: 200000, quantity: 0, description: '宇宙间最玄妙的宝石，给武装使用有神奇的效果' },
    { name: 'universalHeart', displayName: '宇宙之心', url: 'https://pic.imgdb.cn/item/66e19cbed9c307b7e93c7e01.png', price: 20000, quantity: 0, description: '相传这种物质外形可千变万化，宠物靠近后能感受到其中的灵蕴，是修炼更高级技能的绝佳媒介' },
    { name: 'lifeGem', displayName: '宠物寿命晶石', url: 'https://pic.imgdb.cn/item/66e726d8d9c307b7e9405457.png', price: 10000, quantity: 0, description: '储存5000点宠物寿命精华，使用后可为当前宠物恢复5000点寿命值' },
    { name: 'backToOne', displayName: '穿越时空套餐', url: 'https://pic.imgdb.cn/item/6656a1b6d9c307b7e9baa881.png', price: 3000, quantity: 0, description: '打开立即获得100组固元鼎和清心酿，回到第一轮战斗' },
    { name: 'normalExperienceBook', displayName: '普通经验书', url: 'https://pic.imgdb.cn/item/6656e734d9c307b7e9088e9b.png', price: 50, quantity: 0, description: '无名者的经验，使用后获得10000经验值' },
    { name: 'tejiWisdomPill', displayName: '特级悟性丹', url: 'https://pic.imgdb.cn/item/665de3fd5e6d1bfa05564912.png', price: 50, quantity: 0, description: '特制的悟性丹，用于21~25悟性的提升' },
    { name: 'advancedExperienceBook', displayName: '高级经验书', url: 'https://pic.imgdb.cn/item/6656e734d9c307b7e9088e7b.png', price: 150, quantity: 0, description: '伟人的经验，使用后获得30000经验值' },
    { name: 'awakenPill', displayName: '醒悟丹', url: 'https://pic.imgdb.cn/item/665ef5a15e6d1bfa05609a45.png', price: 500, quantity: 0, description: '宠物觉醒时必不可少的玄妙丹药' },
    { name: 'spiritualWater', displayName: '无上养元水', url: 'https://pic1.imgdb.cn/item/67828b1ed0e0a243d4f37674.png', price: 5000, quantity: 0, description: '武器经历无上养元水的洗练会变得更加强大，在武装界面“通灵”使用' },
    { name: 'wuxingTreasure', displayName: '至尊五行仙葫', url: 'https://pic.imgdb.cn/item/66c4cb80d9c307b7e92a8dd2.png', price: 8000, quantity: 0, description: '汇聚五行之力的宝葫，必定开出一张可用的五行符咒' },
    { name: 'coagulateStone', displayName: '凝魄石', url: 'https://pic.imgdb.cn/item/665ef5a15e6d1bfa05609a0f.png', price: 300, quantity: 0, description: '开启宠物幻化的必要道具' },
    { name: 'seperateStone', displayName: '离魂石', url: 'https://pic.imgdb.cn/item/665ef5a15e6d1bfa056099a3.png', price: 200, quantity: 0, description: '用于提升宠物的幻化等级，以带来更稳定的成长率' },
    { name: 'ascensionStone', displayName: '飞升之石', url: 'https://pic.imgdb.cn/item/6656e734d9c307b7e9088e6d.png', price: 1600, quantity: 0, description: '使你的宠物醍醐灌顶般超越自我' },
    { name: 'supremeWisdomPill', displayName: '举世无双悟性丹', url: 'https://pic.imgdb.cn/item/665ef0845e6d1bfa055800c7.png', price: 2000, quantity: 0, description: '举世无双，灵石点智，宠物悟性到19的关键阶段时可以一举提升至20' },
    { name: 'summonCharmPaper', displayName: '召唤灵符', url: 'https://pic.imgdb.cn/item/66d9f78ed9c307b7e94c80c4.png', price: 1300, quantity: 0, description: '神奇的符咒，可以召唤出你喜欢的宠物（可直接使用）' },
    { name: 'spiritRefreshStone', displayName: '精灵精炼石', url: 'https://pic.imgdb.cn/item/6669666cd9c307b7e991c04a.png', price: 50, quantity: 0, description: '提升精灵等级，但也可能会失败' },
    { name: 'spiritAwakenStone', displayName: '精灵觉醒石', url: 'https://pic.imgdb.cn/item/6669666cd9c307b7e991bf78.png', price: 80, quantity: 0, description: '刷新精灵的增幅百分比' },
    { name: 'heartStone', displayName: '心鉴之石', url: 'https://pic.imgdb.cn/item/666ab20bd9c307b7e9630192.png', price: 150, quantity: 0, description: '开启、刷新宠物飞升之术的必要道具' },
    { name: 'poisonSkillBook', displayName: '施毒之术', url: 'https://pic.imgdb.cn/item/666c23ccd9c307b7e9eb864b.png', price: 1500, quantity: 0, description: '失传已久的施毒秘法，掌握后可释放烈性毒药，多余的施毒之术可兑换毒粉' },
    { name: 'poisonPowder', displayName: '毒粉', url: 'https://pic.imgdb.cn/item/666c2428d9c307b7e9ec3327.png', price: 500, quantity: 0, description: '配合毒粉，可使施毒成功率大大提升' },
    { name: 'earthlyEnergy', displayName: '天地灵气', url: 'https://pic.imgdb.cn/item/666ab20bd9c307b7e96301f6.png', price: 300, quantity: 0, description: '荟萃日月之精华，提升飞升之术等级的必需之物' },
    { name: 'magicPetAmulet', displayName: '灵兽符文', url: 'https://pic.imgdb.cn/item/669754f1d9c307b7e9bfec8f.png', price: 80000, quantity: 0, description: '充满灵力的符文，据传其中封印了上古神兽的灵魂，可以直接开启一个图鉴位' },
    { name: 'enhanceBowl', displayName: '固元鼎', url: 'https://pic1.imgdb.cn/item/6784a0cdd0e0a243d4f3cc1e.png', price: 2000, quantity: 0, description: '强基固元，是修炼属性专精的必备器物。数量足够时，能量竟能回转时空……' },
    { name: 'ignoranceWater', displayName: '清心酿', url: 'https://pic.imgdb.cn/item/66884213d9c307b7e9d7bad3.png', price: 1300, quantity: 0, description: '大音希声，大象无形。真正的修炼不在那点滴提升，而在那瞬悟瞬空' },
    { name: 'blueArmComponents', displayName: '蓝色武装原料', url: 'https://pic.imgdb.cn/item/66d8732dd9c307b7e964497d.png', price: 2000, quantity: 0, description: '相对劣质的武装材料，不能直接打造，集齐25个可以合成一个橙色武装原料' },
    { name: 'orangeArmComponents', displayName: '橙色武装原料', url: 'https://pic.imgdb.cn/item/66d8732dd9c307b7e96449c0.png', price: 20000, quantity: 0, description: '上好的武装材料，收集25个后用锻造工具可以打造用于解锁任意宠物武装的原始武装，你也可以点击使用分解为25个蓝色武装原料' },
    { name: 'forgeTool', displayName: '锻造工具', url: 'https://pic.imgdb.cn/item/66d8732dd9c307b7e9644942.png', price: 1000, quantity: 0, description: '当你的橙色武装原料足够25个时，你可以使用这把工具打造一个原始宠物武装' },
    { name: 'radiantSoul', displayName: '闪耀之灵', url: 'https://pic.imgdb.cn/item/6656e81dd9c307b7e9098478.png', price: 500, quantity: 0, description: '用于宠物25~30进化' },
    { name: 'shakingSoul', displayName: '颤抖之灵', url: 'https://pic.imgdb.cn/item/6656e821d9c307b7e90988b2.png', price: 50, quantity: 0, description: '用于宠物1~6进化' },
    { name: 'glowingSoul', displayName: '发光之灵', url: 'https://pic.imgdb.cn/item/6656e81dd9c307b7e909844a.png', price: 150, quantity: 0, description: '用于宠物7~12进化' },
    { name: 'activeSoul', displayName: '活跃之灵', url: 'https://pic.imgdb.cn/item/6656e81dd9c307b7e90984b7.png', price: 200, quantity: 0, description: '用于宠物13~18进化' },
    { name: 'jumpingSoul', displayName: '跳动之灵', url: 'https://pic.imgdb.cn/item/6656e81dd9c307b7e909843e.png', price: 300, quantity: 0, description: '用于宠物19~24进化' },
    { name: 'ultraSkillBoomer', displayName: '仙人醍醐', url: 'https://pic.imgdb.cn/item/6662eda05e6d1bfa0530b827.png', price: 50000, quantity: 0, description: '宠物修炼时绝佳的媒介，可通过叠加使用大幅提升修炼所得' },
    { name: 'mutationScroll', displayName: '灵异秘卷', url: 'https://pic.imgdb.cn/item/669754f0d9c307b7e9bfec4f.png', price: 50000, quantity: 0, description: '上古卷轴，记录着上古神兽的培养之道，使用后可培养出拥有资质更强大的宠物' },
    { name: 'lostBook', displayName: '遗失的洛书·密钥', url: 'https://pic.imgdb.cn/item/669a7ce3d9c307b7e9450f04.png', price: 30000, quantity: 0, description: '解锁神器「遗失的洛书」的关键道具' },
    { name: 'fragmentedMap', displayName: '残页的河图·灵匙', url: 'https://pic.imgdb.cn/item/669a7ce2d9c307b7e9450ef4.png', price: 30000, quantity: 0, description: '解锁神器「残页的河图」的关键「钥匙」' },
    { name: 'nirvanaGem', displayName: '定空的灵石·图章', url: 'https://pic.imgdb.cn/item/66a48e2cd9c307b7e9649085.png', price: 30000, quantity: 0, description: '解锁神器「定空的灵石」的关键「钥匙」' },
    { name: 'treasureMap', displayName: '藏宝图', url: 'https://pic.imgdb.cn/item/669ce78ad9c307b7e9aa9369.png', price: 100, quantity: 0, description: '指引财富的藏宝图，凭此道具可进行一次免费十连任意宝箱' },
    { name: 'casinoCoverLetter', displayName: '赌场介绍信', url: 'https://pic.imgdb.cn/item/669ce78ad9c307b7e9aa9342.png', price: 100, quantity: 0, description: '千金散尽还复来，凭此介绍信可免费投注一次500倍以内的彩券' },
    { name: 'casinoTicket', displayName: '游乐场门票', url: 'https://pic1.imgdb.cn/item/67bdf1a5d0e0a243d405ac84.png', price: 100, quantity: 0, description: '每次进入游乐场需要消耗一张，理性游玩~' },
    { name: 'liguolin', displayName: '李国麟的爱', url: 'https://pic.imgdb.cn/item/66be21a1d9c307b7e9cc9c98.jpg', price: 0, quantity: 0, description: '如梦幻泡影，如红莲火焰，如从未拥有，如从未失去（可直接使用）' },
    { name: 'redEnvelope', displayName: '金玉满堂福袋', url: 'https://pic.imgdb.cn/item/66c369f1d9c307b7e96503f4.png', price: 0, quantity: 0, description: '直接使用，珠光宝气的袋子，开启后随机获得666文~188两金子' },
    { name: 'tinyBag', displayName: '小金袋（88两）', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e9650410.png', price: 88, quantity: 0, description: '直接使用，装满金币的袋子，能卖个不错的价钱' },
    { name: 'cultivationPill200', displayName: '修为灵丹（蓝）', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e9650429.png', price: 1000, quantity: 0, description: '直接使用，当前宠物使用后可以提升200点修炼修为' },
    { name: 'cultivationPill500', displayName: '修为灵丹（橙）', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e965043b.png', price: 3000, quantity: 0, description: '直接使用，高级修为灵丹，当前宠物使用后可提升500点修炼修为' },
    { name: 'eightyDiscountCard', displayName: '八折礼遇卡', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e9650452.png', price: 0, quantity: 0, description: '拥有此道具时，商店购买商品可以享受8折优惠，拥有多张折扣不叠加，请勿出售哦' },
    { name: 'creditCard100', displayName: '商城积分卡', url: 'https://pic1.imgdb.cn/item/678677d8d0e0a243d4f4422c.png', price: 2000, quantity: 0, description: '使用后可获得100商城积分，积分可用来购买积分商城的道具' },
    { name: 'luckyAmulet', displayName: '财运亨通', url: 'https://pic.imgdb.cn/item/66cc940dd9c307b7e9cb758d.png', price: 0, quantity: 0, description: '拥有此道具时，你会在赌场大发神威' },
    { name: 'celebrationCake', displayName: '庆典蛋糕', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e965046c.png', price: 20, quantity: 0, description: '直接使用，安佳动物奶油/不含香精色素/低卡零糖蛋糕，使用后永久增加随机属性5点' },
    { name: 'advancedSkillPill', displayName: '高级神兽丹', url: 'https://pic.imgdb.cn/item/665c41e6d9c307b7e9590b5a.png', price: 6000, quantity: 0, description: '直接使用，当宠物技能不足上限时，可用于查缺补漏宠物技能，十分珍贵' },
    { name: 'drugBox', displayName: '装满的药材箱', url: 'https://pic.imgdb.cn/item/66c60e7cd9c307b7e9ad57e3.png', price: 3000, quantity: 0, description: '直接使用，装饰精美的箱子，靠近会有一股药材的气息扑面而来。使用可获得随机10~20株药材' },
    { name: 'fancyDrugBox', displayName: '华贵的药材箱', url: 'https://pic.imgdb.cn/item/6656e598d9c307b7e906ca29.png', price: 6000, quantity: 0, description: '直接使用，华丽贵气的箱子，似乎藏着上好的补品。使用可获得随机20~40株药材' },
    { name: 'fragmentsPackage', displayName: '分解符礼包', url: 'https://pic.imgdb.cn/item/66c60e7cd9c307b7e9ad57d3.png', price: 200, quantity: 0, description: '直接使用，打开可获得100个五行符分解碎片' },
    { name: 'firstFragments', displayName: '一等分解符', url: 'https://pic.imgdb.cn/item/66cdc7ead9c307b7e92af497.png', price: 1500, quantity: 0, description: '直接使用，获得625枚五行符分解碎片。分解碎片可用于强化五行符获得更强力的属性加成' },
    { name: 'secondFragments', displayName: '二等分解符', url: 'https://pic.imgdb.cn/item/66cdc7ead9c307b7e92af488.png', price: 600, quantity: 0, description: '直接使用，获得125枚五行符分解碎片。分解碎片可用于强化五行符获得更强力的属性加成' },
    { name: 'thirdFragments', displayName: '三等分解符', url: 'https://pic.imgdb.cn/item/66cdc7e9d9c307b7e92af447.png', price: 300, quantity: 0, description: '直接使用，获得25枚五行符分解碎片。分解碎片可用于强化五行符获得更强力的属性加成' },
    { name: 'fourthFragments', displayName: '四等分解符', url: 'https://pic.imgdb.cn/item/66cdc7e9d9c307b7e92af438.png', price: 200, quantity: 0, description: '直接使用，获得5枚五行符分解碎片。分解碎片可用于强化五行符获得更强力的属性加成' },
    { name: 'fifthFragments', displayName: '五等分解符', url: 'https://pic.imgdb.cn/item/66cdc7e9d9c307b7e92af3de.png', price: 100, quantity: 0, description: '直接使用，获得1枚五行符分解碎片。分解碎片可用于强化五行符获得更强力的属性加成' },
    { name: 'goldAmuletPackage', displayName: '金符组合锦囊', url: 'https://pic.imgdb.cn/item/66cc940fd9c307b7e9cb77b1.png', price: 100, quantity: 0, description: '直接使用，打开后获得一整套金符。金符可以使你在反弹来自敌人的伤害，装备数量越多，反弹比例越高' },
    { name: 'spiritWine', displayName: '琼浆玉露', url: 'https://pic.imgdb.cn/item/66cc9401d9c307b7e9cb6a4b.png', price: 100, quantity: 0, description: '直接使用，精灵最爱喝的口味。可以直接提升2级精灵等级哦（友情提示，建议精灵到达100级后使用，此道具可突破精灵成长上限至120级）' },
    { name: 'towerGrass', displayName: '融会贯通', url: 'https://pic.imgdb.cn/item/66c9d328d9c307b7e9682dbc.png', price: 50, quantity: 0, description: '在宠物专精面板点击升级可以自动使用，宠物的专精等级到达100级后，可以直接提升1级专精等级' },
    { name: 'angelWings', displayName: '天使之翼', url: 'https://pic.imgdb.cn/item/66cc9406d9c307b7e9cb6f5c.png', price: 500, quantity: 0, description: '在打工界面使用。可以给正在打工的宠物玩耍，永久提升TA的打工速度，速率最高可达10倍哦' },
    { name: 'bossSealCard', displayName: '魔魂封印卡', url: 'https://pic.imgdb.cn/item/66cdc955d9c307b7e92c1f56.png', price: 0, quantity: 0, description: '使用后可召唤出各类强大的封印魔魂，挑战成功可能获得各类奖励' },
    { name: 'battleWithTree', displayName: '树桩魔魂封印', url: 'https://pic.imgdb.cn/item/66cc9408d9c307b7e9cb7162.png', price: 0, quantity: 0, description: '使用可召唤出树桩测试战力' },
    { name: 'practiceEnemyPlus', displayName: '高级树桩封印卡', url: 'https://pic.imgdb.cn/item/66cc9408d9c307b7e9cb7162.png', price: 0, quantity: 0, description: '使用可召唤出高级树桩测试战力，会复活，打到爽' },
    { name: 'battleWithAncientEvil', displayName: '战神魔魂封印', url: 'https://pic.imgdb.cn/item/66cc940ad9c307b7e9cb72e8.png', price: 0, quantity: 0, description: '使用可召唤出强大的太古魔魂，战胜后可获得不菲的奖励' },
    { name: 'battleWithExpEnemy', displayName: '永夜大帝封印', url: 'https://pic.imgdb.cn/item/66cc940ad9c307b7e9cb72e8.png', price: 0, quantity: 0, description: '使用可召唤出强大的永夜大帝，战胜后可获得不菲的经验值' },
    { name: 'stoneDragon', displayName: '岩龙封印', url: 'https://pic.imgdb.cn/item/66cc940ad9c307b7e9cb72e8.png', price: 20, quantity: 0, description: '使用可召唤出强大的岩龙，战胜后可获得一个洪荒至尊仙葫' },
    { name: 'qiongQi', displayName: '穷奇封印', url: 'https://pic.imgdb.cn/item/66cc940ad9c307b7e9cb72e8.png', price: 20, quantity: 0, description: '使用可召唤出强大的穷奇，战胜后可获得一个富贵宝石袋' },
    { name: 'fireGiant', displayName: '火焰巨人封印', url: 'https://pic.imgdb.cn/item/66cc940ad9c307b7e9cb72e8.png', price: 20, quantity: 0, description: '使用可召唤出火焰巨人，是测试伤害，增进亲密度的好搭子' },
    { name: 'noWorkBoss', displayName: '無班之魂封印', url: 'https://pic.imgdb.cn/item/66cc940ad9c307b7e9cb72e8.png', price: 0, quantity: 0, description: '使用可召唤出不想上班的無班之魂，战胜后可获得培养更强壮的牛马的秘诀' },
    { name: 'universalCrystal', displayName: '宇宙之晶', url: 'https://pic.imgdb.cn/item/66cc940cd9c307b7e9cb752e.png', price: 2000, quantity: 0, description: '凝聚宇宙间万物生长之力的晶石，集齐一定数量后有概率提升1级宠物的技能等级（技能等级在24级~27级时才能使用）' },
    { name: 'universalKernel', displayName: '宇宙精华', url: 'https://pic.imgdb.cn/item/66cc940cd9c307b7e9cb74d1.png', price: 3000, quantity: 0, description: '凝聚宇宙间万物生长之力的晶石，集齐一定数量后有概率提升1级宠物的技能等级（技能等级在28级~29级时才能使用）' },
    { name: 'qualityEnhancePill', displayName: '宠物资质仙丹', url: 'https://pic.imgdb.cn/item/66c9d327d9c307b7e9682c26.png', price: 50, quantity: 0, description: '直接使用，额外为当前宠物增加全套1240点资质（一步到位！），宠物升级时可以获得更多的属性加成' },
    { name: 'qualityEnhancePillPKG', displayName: '资质仙丹礼包', url: 'https://pic.imgdb.cn/item/66cc940fd9c307b7e9cb77b1.png', price: 300, quantity: 0, description: '直接使用，获得全套宠物资质仙丹*5' },
    { name: 'resetJinnang', displayName: '背包重置卡', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e9650452.png', price: 0, quantity: 0, description: '背包出错时使用（如出现undefined等），重置所有道具，使用后需要刷新页面' },
    { name: 'enlargeCapacityCard', displayName: '背包扩容卡', url: 'https://pic.imgdb.cn/item/66c369f2d9c307b7e9650452.png', price: 1000, quantity: 0, description: '使用后开启1000背包容量' },
    { name: 'baiYinPKG', displayName: '白银VIP包裹', url: 'https://pic.imgdb.cn/item/66d5e69ed9c307b7e966f716.png', price: 100, quantity: 0, description: '使用后可得到30张试炼之地召唤卡' },
    { name: 'baiYinCard', displayName: '试炼之地召唤卡', url: 'https://pic.imgdb.cn/item/66d5e7b7d9c307b7e9685315.png', price: 0, quantity: 0, description: '使用后可以召唤白银之地的怪物，每次战斗胜利会获得不菲的经验值' },
    { name: 'attentionValue', displayName: '集中值（4点）', url: 'https://pic.imgdb.cn/item/66d1c3a5d9c307b7e9ddf3fa.png', price: 200, quantity: 0, description: '直接使用，给当前宠物增加4点集中值' },
    { name: 'learningValueBook', displayName: '灵兽悟道书', url: 'https://pic.imgdb.cn/item/66d1c3a4d9c307b7e9ddf33e.png', price: 3000, quantity: 0, description: '直接使用，给当前宠物提供20000点学习度，学习度可用于提升技能加成' },
    { name: 'resetAdvancementPill', displayName: '灵兽清心丹', url: 'https://pic.imgdb.cn/item/66d1c416d9c307b7e9de526a.png', price: 500, quantity: 0, description: '在领悟面板进行重置使用，加成重置后，会返还所有的技能点' },
    { name: 'qiongmeiCard', displayName: 'そら召唤卡', url: 'https://pic.imgdb.cn/item/66d698c2d9c307b7e91c47f3.png', price: 50000, quantity: 0, description: '可以召唤隐藏角色：春日野穹（注：无论你有多少张召唤卡，都只能拥有一个同类宠物）' },
    { name: 'wealthyGemBag', displayName: '富贵宝石袋', url: 'https://pic.imgdb.cn/item/66d9f0a8d9c307b7e9415285.png', price: 1000, quantity: 0, description: '珠光宝气的锦囊，富贵人家常见的款式，打开获得随机宝石' },
    { name: 'pinkThirdGem', displayName: '三级粉红色灵石', url: 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc59.png', price: 500, quantity: 0, description: '使用获得一颗用于镶嵌的随机3级粉红色宝石' },
    { name: 'purpleThirdGem', displayName: '三级淡紫色灵石', url: 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc4c.png', price: 500, quantity: 0, description: '使用获得一颗用于镶嵌的随机3级淡紫色宝石' },
    { name: 'blueThirdGem', displayName: '三级天蓝色灵石', url: 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc41.png', price: 500, quantity: 0, description: '使用获得一颗用于镶嵌的随机3级天蓝色宝石' },
    { name: 'yellowThirdGem', displayName: '三级鹅黄色灵石', url: 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc35.png', price: 500, quantity: 0, description: '使用获得一颗用于镶嵌的随机3级鹅黄色宝石' },
    { name: 'inlayAmulet', displayName: '宝石镶嵌符', url: 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc79.png', price: 2450, quantity: 0, description: '镶嵌宝石时使用可以保证100%成功' },
    { name: 'removeAmulet', displayName: '宝石摘除符', url: 'https://pic.imgdb.cn/item/66dc001bd9c307b7e9b8bb5c.png', price: 300, quantity: 0, description: '用于摘除任意等级的宝石' },
    { name: 'punchHoleTool', displayName: '任意打孔器', url: 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc61.png', price: 5000, quantity: 0, description: '可以直接给装备开启一个可供镶嵌的孔位' },
    { name: 'starGem', displayName: '升级宝石（极品）', url: 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc86.png', price: 10, quantity: 0, description: '用于给武装升星，武装星级在0~7级时，有概率提升1级，失败则退1级' },
    { name: 'starGemPKG', displayName: '升级宝石礼包（极品）', url: 'https://pic.imgdb.cn/item/66dab9c1d9c307b7e921b767.png', price: 180, quantity: 0, description: '打开后可以获得200升级宝石（极品）' },
    { name: 'starGemPlus', displayName: '升级宝石（神品）', url: 'https://pic.imgdb.cn/item/66dc0442d9c307b7e9bc6534.png', price: 20, quantity: 0, description: '用于给武装升星，武装星级在7~13级时，有概率提升1级，失败则退2级' },
    { name: 'starGemPlusPKG', displayName: '升级宝石礼包（神品）', url: 'https://pic.imgdb.cn/item/66dab9eed9c307b7e92290c5.png', price: 300, quantity: 0, description: '打开后可以获得200升级宝石（神品）' },
    { name: 'refreshGemSlot', displayName: '宝石洗孔符', url: 'https://pic.imgdb.cn/item/666d688ed9c307b7e903cdfd.png', price: 100, quantity: 0, description: '武装界面刷新孔位的颜色，有可能回到与上次同样的颜色哦' },
    { name: 'mergeAmulet', displayName: '低级宝石合成符', url: 'https://pic.imgdb.cn/item/66db2caed9c307b7e9c66c55.png', price: 1000, quantity: 0, description: '上古时代流传的符文，用于合成1~3级宝石' },
    { name: 'mergeAmuletPlus', displayName: '高级宝石合成符', url: 'https://pic.imgdb.cn/item/66dbff82d9c307b7e9b75a35.png', price: 2000, quantity: 0, description: '上古时代流传的符文，用于合成4~6级宝石' },
    { name: 'gemLuckyBag', displayName: '宝石袋盲盒', url: 'https://pic.imgdb.cn/item/66db2daed9c307b7e9c7508a.png', price: 50, quantity: 0, description: '打开后获得一颗随机的一级宝石' },
    { name: 'resetTrainCount', displayName: '聚贤石', url: 'https://pic1.imgdb.cn/item/67bbfb2cd0e0a243d4033370.png', price: 2050, quantity: 0, description: '聚集贤者之资的灵石，可以帮助宠物重置培养次数' },
    { name: 'advancedSkillBook', displayName: '天赋高级技能', url: 'https://pic.imgdb.cn/item/66e1a8bdd9c307b7e950654b.png', price: 12500, quantity: 0, description: '破旧的书卷记录着上古的语言，点击破译后可获得一本所有宠物都可学习的极稀有SSS技能' },
    { name: 'lizhuamengji', displayName: '利爪猛击天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：利爪猛击' },
    { name: 'huoyanchongji', displayName: '火焰冲击天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：火焰冲击' },
    { name: 'tiankongshouhu', displayName: '天空守护天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：天空守护' },
    { name: 'suohou', displayName: '锁喉天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：锁喉' },
    { name: 'jiyanggangqi', displayName: '极阳罡气天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：极阳罡气' },
    { name: 'beimingshengong', displayName: '北冥神功天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：北冥神功' },
    { name: 'tianshenzhufu', displayName: '天神祝福天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：天神祝福' },
    { name: 'shengshengbuxi', displayName: '生生不息天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：生生不息' },
    { name: 'tianwanghuwei', displayName: '天王护卫天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：天王护卫' },
    { name: 'xingzhizhufu', displayName: '星之祝福天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：星之祝福' },
    { name: 'zhenbaoshenquan', displayName: '震爆神拳天赋书', url: 'https://pic.imgdb.cn/item/66e142acd9c307b7e9acc8b9.png', price: 10000, quantity: 0, description: '教会你的宠物释放天赋高级技能：震爆神拳' },
    { name: 'hongHuang', displayName: '洪荒至尊仙葫', url: 'https://pic.imgdb.cn/item/66d0b3f3d9c307b7e995a14c.png', price: 8000, quantity: 0, description: '上古传说中的仙葫，流传久远，极其稀有，打开可获得随机珍稀道具' },
    { name: 'rareEventBooster', displayName: '八方来财', url: 'https://pic.imgdb.cn/item/66e683eed9c307b7e9551be4.png', price: 2000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）应用此法宝时，你在经商时遇到市场特殊事件的概率提升50%' },
    { name: 'fitnessPowder', displayName: '强身散', url: 'https://pic.imgdb.cn/item/66e683eed9c307b7e9551bdf.png', price: 2000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）应用此法宝时，每周精力下降的幅度减少30%' },
    { name: 'heroToken', displayName: '英雄令', url: 'https://pic.imgdb.cn/item/66e6841ad9c307b7e9554384.png', price: 2000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）作为对英雄的尊敬，应用此法宝时，每周店租下降30%' },
    { name: 'extensionCharter', displayName: '续租契', url: 'https://pic.imgdb.cn/item/66e68b4ed9c307b7e962b841.png', price: 2000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）应用此法宝时，经商时间可特许延长一个月（4周）' },
    { name: 'treasureWood', displayName: '珍宝案', url: 'https://pic.imgdb.cn/item/66e68b4dd9c307b7e962b7ca.png', price: 2000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）在结算收益时，此法宝可提升20%未变现资产的收益' },
    { name: 'investmentCharter', displayName: '特许招商令', url: 'https://pic.imgdb.cn/item/66e68c8ed9c307b7e963c42d.png', price: 2000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）应用此法宝后，可额外增加一次投资次数' },
    { name: 'merchantPointsCard', displayName: '经商积分卡', url: 'https://pic.imgdb.cn/item/66e6a031d9c307b7e97c84c7.png', price: 1000, quantity: 0, description: '打开后可以获得2000点经商积分。经商积分用于在商店-倒买倒卖购买经商法宝，增加你的资产运作能力' },
    { name: 'wealthOfNations', displayName: '国富论', url: 'https://pic.imgdb.cn/item/66e7aabfd9c307b7e9ce4e8c.png', price: 1000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）亚当斯密作为经济学大师，认为管理者应当一定程度干涉市场，本年度市场每周商品数量下限将提升1' },
    { name: 'revokeSand', displayName: '唤神砂', url: 'https://pic.imgdb.cn/item/66e7aabfd9c307b7e9ce4e59.png', price: 1000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）在精力不支时，仍然能够支持你进行一次买卖行为，生效后自动失效' },
    { name: 'qianKunBag', displayName: '乾坤袋', url: 'https://pic.imgdb.cn/item/66e82554d9c307b7e96cab02.png', price: 1000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）即使市面并没有仓库内的货物，仍能够以进货价出售一次，生效后自动失效' },
    { name: 'doubleLuck', displayName: '双喜临门', url: 'https://pic.imgdb.cn/item/66e8256dd9c307b7e96cc570.png', price: 1000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）经商结束时，积分结算翻倍' },
    { name: 'zibenyunzuo', displayName: '资本运作', url: 'https://pic.imgdb.cn/item/66e99553f21886ccc0502e94.png', price: 1000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）通过高效的资本运作，降低30%股票投资门槛，并在投资股票后减少一周收益等待时间' },
    { name: 'kaimanzhizhao', displayName: '开曼岛执照', url: 'https://pic.imgdb.cn/item/66e994f2f21886ccc04fd099.png', price: 1000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）将企业注册在避税天堂，交易股票时税费减少50%' },
    { name: 'jiazuxintuo', displayName: '家族信托', url: 'https://pic.imgdb.cn/item/66ed48f0f21886ccc007aa0b.png', price: 1000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）来自权贵家族的委托基金，每周将随机获得2000~5000元现金' },
    { name: 'caopanjubo', displayName: '操盘巨擘', url: 'https://pic.imgdb.cn/item/66ed48f0f21886ccc007a9ff.png', price: 1000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）应用此法宝时，将延长50%股票周期的持续时间（无论牛市/熊市都会延长）' },
    { name: 'timeMachine', displayName: '百达翡丽', url: 'https://pic.imgdb.cn/item/66ed48f0f21886ccc007a9e5.png', price: 1000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）令人着迷的百达翡丽605怀表，应用此法宝时，将有15%概率在每周刷新时不增加周数' },
    { name: 'getLoan', displayName: '霸王贷款', url: 'https://pic.imgdb.cn/item/66f029d1f21886ccc0c125da.png', price: 1000, quantity: 0, description: '【经商法宝】（仅在商店-倒买倒卖中使用）使用后立即获得5万元贷款，但5周后需要偿还50万元，若无力偿还将结束游戏，谨慎使用' },
    { name: 'jiechengxianai', displayName: '结城夏奈召唤卡', url: 'https://pic.imgdb.cn/item/66e856f0d9c307b7e9bee42a.png', price: 10000, quantity: 0, description: '召唤一位神秘女嘉宾和她的夫君' },
    { name: 'magicMine', displayName: '魔矿', url: 'https://pic1.imgdb.cn/item/678276e7d0e0a243d4f3705b.png', price: 20000, quantity: 0, description: '散发出淡淡辉光的矿石，似乎具备润色武装的神奇功能（恢复所有武装耐久）' },
    { name: 'goldBox', displayName: '沉甸甸的金箱', url: 'https://pic1.imgdb.cn/item/6781f46cd0e0a243d4f34115.png', price: 100000, quantity: 0, description: '装满财富的金箱子，使用可获得500锭金子' },
    { name: 'lifeBox', displayName: '源泉的生命箱', url: 'https://pic1.imgdb.cn/item/677ffb14d0e0a243d4f2d4de.png', price: 5, quantity: 0, description: '特殊道具，20分钟内增加一千万生命值上限，无法叠加使用；更换宠物、刷新页面会失效' },
    { name: 'elixirTreasure', displayName: '超级内丹仙葫', url: 'https://pic1.imgdb.cn/item/67b330b4d0e0a243d4004a6c.png', price: 12200, quantity: 0, description: '打开获得宠物内丹系统必不可少的道具' },
    { name: 'primitiveElixir1', displayName: '原始圣阶内丹', url: 'https://pic1.imgdb.cn/item/67b38d92d0e0a243d40057ab.png', price: 1200, quantity: 0, description: '打开可以获得一个任意位置的第一排内丹' },
    { name: 'primitiveElixir2', displayName: '原始天灵元丹', url: 'https://pic1.imgdb.cn/item/67b38d92d0e0a243d40057ab.png', price: 1200, quantity: 0, description: '打开可以获得一个任意位置的第二排内丹' },
    { name: 'primitiveElixir3', displayName: '原始圣元灵丹', url: 'https://pic1.imgdb.cn/item/67b38d92d0e0a243d40057ab.png', price: 1200, quantity: 0, description: '打开可以获得一个任意位置的第三排内丹' },
    { name: 'elixirRefreshGem', displayName: '内丹再造石', url: 'https://pic1.imgdb.cn/item/67b368fbd0e0a243d40055a4.png', price: 1200, quantity: 0, description: '对内丹使用，可以更改当前内丹的附加属性' },
    { name: 'elixirStarUpGem', displayName: '内丹升星石', url: 'https://pic1.imgdb.cn/item/67b368fbd0e0a243d40055a5.png', price: 1200, quantity: 0, description: '对内丹使用，有几率提升1级内丹的星级' },
    { name: 'elixirLevelUpGem', displayName: '内丹升级石', url: 'https://pic1.imgdb.cn/item/67b368fbd0e0a243d40055a2.png', price: 1200, quantity: 0, description: '对内丹使用，消耗一定经验有概率将内丹等级提升1级' },
    { name: 'elixirRefiningGem', displayName: '内丹提品石', url: 'https://pic1.imgdb.cn/item/67b368fbd0e0a243d40055a3.png', price: 1200, quantity: 0, description: '对内丹使用，有小概率提升一级内丹的品质' },
    { name: 'holyBone', displayName: '仙人的遗骨', url: 'https://pic1.imgdb.cn/item/67b330b5d0e0a243d4004a6f.png', price: 1200, quantity: 0, description: '对内丹使用，有概率使内丹飞升，飞升后的内丹属性更强大，且不再损失元气' },
    { name: 'holyKnowledge', displayName: '仙人的教诲', url: 'https://pic1.imgdb.cn/item/67b384f2d0e0a243d4005746.png', price: 1200, quantity: 0, description: '对内丹使用，提升内丹的飞升等级，等级越高飞升属性越强大' },
    { name: 'elixirKnowHow', displayName: '灵丹妙诀', url: 'https://pic1.imgdb.cn/item/67b46e19d0e0a243d40088a4.png', price: 1500, quantity: 0, description: '对内丹使用，记载内丹修炼的秘法，使用可大幅增加内丹经验' },
    { name: 'roseForLove', displayName: '爱意恒久远', url: 'https://pic1.imgdb.cn/item/67bbff2cd0e0a243d4033504.png', price: 1500, quantity: 0, description: '送给当前宠物可直接提升99点亲密度' },
    { name: 'elixirExpDouble', displayName: '内丹经验加强剂', url: 'https://pic1.imgdb.cn/item/67bc0030d0e0a243d40335ca.png', price: 1500, quantity: 0, description: '使用后20分钟内可让战斗中获得的内丹经验翻倍，刷新页面将失效' },
    { name: 'spiritBottle', displayName: '精灵魔瓶', url: 'https://pic.imgdb.cn/item/66d004a1d9c307b7e99d4b93.png', price: 0, quantity: 0, description: '打开精灵面板，这是一个未来可期的伙伴，可以给你提供极大的助力' }
];

// 切换锦囊抽屉的显示状态
function toggleJinnangDrawer(mode = false) {
    exchangeMode = mode; // 更新全局exchangeMode状态
    
    const drawer = document.getElementById('jinnang-drawer');
    const info = document.getElementById('jinnang-info');
    
    // 如果是关闭抽屉，重置exchangeMode
    if (drawer.classList.contains('open')) {
        exchangeMode = false;
    }
    
    drawer.classList.toggle('open');
    info.classList.toggle('open');
    
    // 重置选中状态
    selectedItem = null;
    updateJinnangItems();
}

function generateItemToJinnang(name, displayName, url, price = 0, quantity = 0, description = '', updateProperties = true) {
    let item = jinnangItems.find(i => i.name === name);
    if (item) {
        // 物品已存在，增加数量
        item.quantity += quantity;
        
        // 如果设置了updateProperties标志，更新物品的属性
        if (updateProperties) {
            // 更新物品的其他属性
            item.displayName = displayName || item.displayName;
            item.url = url || item.url;
            item.price = price !== undefined ? price : item.price;
            item.description = description || item.description;
        }
    } else {
        // 物品不存在，创建新物品
        const newItem = {
            name: name,
            displayName: displayName,
            url: url,
            price: price,
            quantity: quantity,
            description: description,
            timestamp: Date.now()
        };
        jinnangItems.push(newItem);
    }
    
    // 更新背包显示
    updateJinnangItems();
}

function addItemToJinnang(itemName, quantity = 1) {
    let item = jinnangItems.find(i => i.name === itemName);

    // 计算当前背包中的总物品数量
    let currentTotalQuantity = jinnangItems.reduce((sum, i) => sum + i.quantity, 0);

    if (item) {
        // 如果已有该物品，计算可以添加的数量
        let availableSpace = jinnangCapacity - currentTotalQuantity;
        if (availableSpace > 0) {
            let quantityToAdd = Math.min(quantity, availableSpace);
            item.quantity += quantityToAdd;
            quantity -= quantityToAdd;
        }

        // 若有剩余数量，提示背包已满
        if (quantity > 0) {
            showInfoBox("当前背包已没有空余位置！",
               () => {
                   enlargeCapacity();
               },
               () => {
                   enlargeCapacity();
               });
        }
    } else {
        // 如果没有该物品，则调用 generateItemToJinnang 生成并添加新物品
        let availableSpace = jinnangCapacity - currentTotalQuantity;
        if (availableSpace > 0) {
            let quantityToAdd = Math.min(quantity, availableSpace);
            generateItemToJinnang(itemName, itemName, 'https://example.com/item.png', 0, quantityToAdd, '新生成的物品描述');
            quantity -= quantityToAdd;
        }

        // 若有剩余数量，提示背包已满
        if (quantity > 0) {
            showInfoBox("当前背包已没有空余位置！",
               () => {
                   enlargeCapacity();
               },
               () => {
                   enlargeCapacity();
               });
        }
    }

    updateJinnangItems(); // 保持调用顺序不变
}


// 合并后的 useItem 函数
function useItem(itemName, quantity = 1) {
    const itemIndex = jinnangItems.findIndex(item => item.name === itemName);
    if (itemIndex !== -1 && jinnangItems[itemIndex].quantity >= quantity) {
        jinnangItems[itemIndex].quantity -= quantity;
        if (jinnangItems[itemIndex].quantity < 0) {
            jinnangItems[itemIndex].quantity = 0;
        }
        updateJinnangItems();
        updateJinnangCapacityDisplay();
        return true;
    }
    showInfoBox("道具数量不足或未找到该道具");
    return false;
}

function showItemDescription(price, description, itemDiv, item) {
    const infoBox = document.getElementById('jinnang-description');
    
    if (exchangeMode) {
        // 只显示可兑换积分的物品（价格>=2000的物品）
        
            const exchangeRate = Math.floor(price / 2000); // 每2000价值兑换1积分
            const maxExchangeQuantity = item.quantity;
            const totalExchangeCredits = exchangeRate * maxExchangeQuantity;
            
            infoBox.innerHTML = `
                <div style="color: #92341C;display: flex;flex-direction: column;justify-content: center;">
                    <div style="margin-bottom: 8px;">${item.displayName}</div>
                    <div>单个物品可兑换: ${exchangeRate >= 1 ? exchangeRate : 1} 积分</div>
                    <button onclick="exchangeItems('${item.name}')" 
                            style="margin-top: 10px; padding: 5px 10px; background: linear-gradient(to bottom, #E47F47, #CE6633, #963D1C); 
                                   color: #F9DE9B; border: 1px solid #6f391c; border-radius: 5px; cursor: pointer;">
                        兑换积分
                    </button>
                </div>
            `;

    } else {
        // 原有的描述显示逻辑
        infoBox.innerText = `${description}，单价：${convertPrice(item.price)}。`;
    }
}


function updateJinnangCapacityDisplay() {
    let currentTotalQuantity = jinnangItems.reduce((sum, i) => sum + i.quantity, 0);
    document.getElementById('jinnang-capacity').innerText = `容量：${currentTotalQuantity}/${jinnangCapacity}`;
}
        
function closeDescriptionBox() {
    if (currentDescriptionBox) {
        currentDescriptionBox.remove();
        currentDescriptionBox = null;
        clearTimeout(autoCloseTimer);
    }
}

// 创建或替换进度条元素


// 删除进度条
function removeProgressBar() {
    const existingProgressBarWrapper = document.querySelector('.progress-bar-wrapper');
    if (existingProgressBarWrapper) {
        existingProgressBarWrapper.remove();
    }
}

// 更新后的sellItem函数
function sellItem() {
    if (!selectedItem) {
        showInfoBox("你没有选中道具，是否出售所有背包内的道具？", () => {
            let totalSoldItems = 0;
            let totalGoldEarned = 0;

            jinnangItems.forEach(item => {
                if (item.quantity > 0) {
                    totalGoldEarned += item.quantity * item.price;
                    totalSoldItems += item.quantity;
                    item.quantity = 0;  // 将所有物品数量设置为0
                }
            });

            if (totalSoldItems > 0) {
                goldAmount += totalGoldEarned;
                showInfoBox(`成功出售所有道具，获得${convertPrice(totalGoldEarned)}金子`);
                updateJinnangItems();
                updateGoldDisplay(goldAmount);
            } else {
                showInfoBox("背包内没有可出售的道具！");
            }
        });
        return;
    }

    const itemName = selectedItem.dataset.itemName;
    const itemIndex = jinnangItems.findIndex(i => i.name === itemName);

    if (itemIndex !== -1) {
        const selectedItem = jinnangItems[itemIndex];
        
        // 创建或更新进度条
        const progressBarWrapper = createOrUpdateProgressBar(selectedItem);

        // 显示出售确认框
        showInfoBox('拖动进度条选择出售数量的比例，并点击确认', () => {
            const progressBar = progressBarWrapper.querySelector('input[type="range"]');
            const sellPercentage = progressBar.value;  // 获取用户拖动的比例
            const quantityToSell = Math.floor((sellPercentage / 100) * selectedItem.quantity);

            if (quantityToSell > 0) {
                selectedItem.quantity -= quantityToSell;
                const totalPrice = quantityToSell * selectedItem.price;
                goldAmount += totalPrice;
                showInfoBox(`成功出售${quantityToSell}个${selectedItem.displayName}，获得${convertPrice(totalPrice)}金子`);

                updateJinnangItems();
                updateGoldDisplay(goldAmount);
            } else {
                showInfoBox('没有选择有效的出售数量');
            }

            // 无论成功或失败，都移除进度条
            removeProgressBar();
        }, () => removeProgressBar(),'black');
            
    } else {
        showInfoBox("请先选择需要出售的物品！");
    }
}

//拓展背包
function enlargeJinnangCapacity(amount) {
    jinnangCapacity += amount;
    showInfoBox(`容量已增加${amount}，当前容量为${jinnangCapacity}`);
    updateJinnangCapacityDisplay();
}
        
function enlargeCapacity() {
    let cost;
    let increaseAmount;

    if (jinnangCapacity < 6000) {
        cost = 100000;
        increaseAmount = 500;
    } else if (jinnangCapacity < 7000) {
        cost = 150000;
        increaseAmount = 500;
    } else if (jinnangCapacity < 8000) {
        cost = 180000;
        increaseAmount = 500;
    } else if (jinnangCapacity < 10000) {
        cost = 240000;
        increaseAmount = 500;
    } else if (jinnangCapacity < 20000) {
        cost = 500000;
        increaseAmount = 500;
    } else if (jinnangCapacity < 50000) {
        cost = 1000000;
        increaseAmount = 500;
    } else {
        cost = 3000000;
        increaseAmount = 1000;
    }

    // 显示花费信息并请求确认
    showInfoBox(`花费${convertPrice(cost)}金子可以增加${increaseAmount}容量，是否确认？`, () => {
        if (confirm) {
            if (goldAmount >= cost) {
                goldAmount -= cost;
                jinnangCapacity += increaseAmount;
                showInfoBox(`容量已增加${increaseAmount}，当前容量为${jinnangCapacity}`);
                updateGoldDisplay(goldAmount);
                updateJinnangCapacityDisplay();
            } else {
                showInfoBox("金子不足，无法增加容量。");
            }
        } else {
            return;
        }
    });
}

// 单位换算函数
function convertPrice(price) {
    price = Math.floor(price);
    
    let ding = Math.floor(price / 1000000);
    price %= 1000000;
    let liang = Math.floor(price / 1000);
    let wen = price % 1000;

    let result = '';
    if (ding > 0) {
        result += `${ding}锭 `;
    }
    if (liang > 0) {
        result += `${liang}两 `;
    }
    if (wen > 0 || result === '') {
        result += `${wen}文`;
    }
    return result.trim();
}

// 更新锦囊内道具数量
let selectedItem = null; // 在函数外部定义selectedItem

function updateJinnangItems() {
    const jinnangReward = document.getElementById('jinnang-reward');
    jinnangReward.innerHTML = ''; // 清空现有内容

    if (isNaN(jinnangCapacity)) {
        jinnangCapacity = 2000;
    }

    // 按照时间戳排序，确保最早获得的物品显示在前面
    const sortedItems = [...jinnangItems].sort((a, b) => b.price - a.price);

    sortedItems.forEach(item => {
        if (item.quantity > 0) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'jinnang-item';
            itemDiv.style.position = 'relative'; // 为了定位描述框
            itemDiv.style.display = 'flex'; 
            itemDiv.style.flexDirection = 'row'; 
            itemDiv.style.alignItems = 'center'; 
            itemDiv.style.justifyContent = 'space-between'; 
            itemDiv.style.padding = '4px'; 
            itemDiv.style.boxShadow = 'rgb(131, 74, 15) 0px 0px 0px 1px inset';
            itemDiv.style.border = '1px solid rgb(131,74,15)';
            itemDiv.innerHTML = `
                <img src="${item.url}" alt="${item.name}" style="border: 1px solid black;height: 45px;width: 45px;">
                <div class="item-text-container">
                <div id="jinnang-item-name" class="item-text-top">${item.displayName}</div>
                <div id="jinnang-item-quantity" class="item-text-bottom">${item.quantity}个</div>
                </div>
            `;

            // 添加点击事件监听器
            itemDiv.addEventListener('click', () => {
                showItemDescription(item.price, item.description, itemDiv, item);

                // 移除之前选中项的视觉提示
                if (selectedItem) {
                    selectedItem.style.border = '1px solid rgb(131,74,15)';
                    selectedItem.style.boxShadow = 'rgb(131, 74, 15) 0px 0px 0px 1px inset';
                }

                // 添加当前选中项的视觉提示
                selectedItem = itemDiv;
                selectedItem.style.border = '1px solid white';
                selectedItem.style.boxShadow = 'red 0px 0px 0px 2px inset';

                // 将 item 存储到 selectedItem 的 dataset 中，以便出售时使用
                selectedItem.dataset.itemName = item.name;
                selectedItem.dataset.itemDisplayName = item.displayName;
                
            });

            jinnangReward.appendChild(itemDiv);
        }
    });

    updateJinnangCapacityDisplay();
}

const attributeMap = {
    endurance: "耐力",
    intelligence: "智力",
    strength: "强壮",
    agility: "敏捷",
    faith: "信仰"
};

// 定义一个包含道具效果的映射表
const itemEffects = {
    celebrationCake: () => {
        const attributeKeys = Object.keys(additionalAttributes);
        const randomAttribute = attributeKeys[Math.floor(Math.random() * attributeKeys.length)];
        const attributeNameInChinese = attributeMap[randomAttribute];
        
        if (additionalAttributes[randomAttribute] <= 50) {
            additionalAttributes[randomAttribute] += 5;
            showInfoBox(`美味蛋糕下肚，您的${attributeNameInChinese}增加了5点。`);
        } else {
            additionalAttributes[randomAttribute] = 50;
            showInfoBox(`蛋糕虽好，吃太多也会发胖哦！${attributeNameInChinese}已经提升至最大值了。`);
        }
        updateAttributePanel();
    },
    cultivationPill200: () => increaseCultivation(200),
    cultivationPill500: () => increaseCultivation(500),
    blessGift: () => getBlessGift(),
    creditCard100: () => {
        playerCredit += 100;
        showInfoBox(`获得100积分，当前积分为${playerCredit}`);
    },
    
    poisonSkillBook: () => {
        showInfoBox('你可以使用1本施毒之术兑换5个毒粉',
            () => {
               addItemToJinnang('poisonPowder',5);
               showInfoBox('成功兑换5个毒粉！');
            },
            () => {
                addItemToJinnang('poisonSkillBook',1);
                showInfoBox('取消兑换！');
            });
    },
    tinyBag: () => {
        goldAmount += 88000;
        updateGoldDisplay(goldAmount);
        showInfoBox("您获得了88两金子。");
    },
    redEnvelope: () => {
        const randomGold = Math.floor(Math.random() * (188800 - 666 + 1)) + 666;
        goldAmount += randomGold;
        updateGoldDisplay(goldAmount);
        showInfoBox(`您获得了${convertPrice(randomGold)}两金子。`);
    },
    summonCharmPaper: () => {
        showSummonPanel();
        setTimeout(handleSummonPet, 0);
    },
    liguolin: () => useLiguolin(),
    jiechengxianai: () => {
        addPetToSelect('jiecheng', '结城夏奈');
        addItemToJinnang('liguolin', 1);
    },
    mutationScroll: () => {
        useMutationScroll();
        addItemToJinnang('mutationScroll',1);
    },
    advancedSkillPill: () => fulfillPetSkill(),
    drugBox: () => getRandomDrug(10,20),
    fancyDrugBox: () => getRandomDrug(20,40),
    advancedExperienceBook: () => directlyAbsorbExperience(30000),
    normalExperienceBook: () => directlyAbsorbExperience(10000),
    fragmentsPackage: () => addWuxingFragments(100),
    firstFragments: () => addWuxingFragments(625),
    secondFragments: () => addWuxingFragments(125),
    thirdFragments: () => addWuxingFragments(25),
    fourthFragments: () => addWuxingFragments(5),
    fifthFragments: () => addWuxingFragments(1),
    goldAmuletPackage: () => {
        const colors = ['red', 'purple', 'orange', 'blue', 'green'];
        
        // 遍历颜色数组，将金符添加到管理器中
        colors.forEach(color => addAmuletToManager('goldAmulet', color, 1));
        
        showInfoBox('你获得金符（红）金符（紫）金符（橙）金符（蓝）金符（绿），请在五行面板中查看！');
    },
    spiritWine: () => useSpiritWine(),
    qualityEnhancePill: () => {
        if (!isNaN(qualityPillCount)){
            qualityPillCount += 1;
            updateQualityDisplayWithBonuses();
            showInfoBox(`成功应用资质仙丹，宠物升级时会享受额外的资质加成！当前仙丹总数为${qualityPillCount}，宠物等级每提升一级会减少一颗`);
        }
        
    },
    qualityEnhancePillPKG: () => {
        addItemToJinnang('qualityEnhancePill',5);
    },
    battleWithTree: () => summonEnemyByType('practiceEnemy'),
    battleWithAncientEvil: () => summonEnemyByType('ancientEvil'),
    battleWithExpEnemy: () => summonEnemyByType('expEnemy'),
    noWorkBoss: () => summonEnemyByType('noWorkBoss'),
    qiongQi: () => summonEnemyByType('qiongQi'),
    practiceEnemyPlus: () => summonEnemyByType('practiceEnemyPlus'),
    stoneDragon: () => summonEnemyByType('stoneDragon'),
    fireGiant: () => summonEnemyByType('fireGiant'),
    baiYinPKG: () => {
        addItemToJinnang('baiYinCard',30);
    },
    baiYinCard: () => {
        if (baiYinInterval !== null) {
            showInfoBox('试炼之地正在持续中，无法叠加！', null, null, 'red');
            return;
        }
        
        handleBattleWithBaiYin();  // 开始与 'baiYin' 的战斗
        document.getElementById('baiyinOverlay').style.display = 'block';
    
        setTimeout(() => {
            if (baiYinInterval) {  // 检查 baiYinInterval 是否存在
                clearInterval(baiYinInterval);
                baiYinInterval = null;  // 清除后将其重置为 null
            }
    
            summonEnemy = false;  // 设置 `summonEnemy` 为 `false`
            clearAutoBattle();
            showInfoBox('试炼之地结束了', null, null, 'black');  // 显示提示框
            document.getElementById('baiyinOverlay').style.display = 'none';
        }, 60000);  
    },
    universalCrystal: () => {
        levelUpSkill();
        addItemToJinnang('universalCrystal',1);
    },
    universalKernel: () => {
        levelUpSkill();
        addItemToJinnang('universalKernel',1);
    },
    universalHeart: () => {
        levelUpSkill();
        addItemToJinnang('universalHeart',1);
    },
    resetEarningMultiplierPowder: () => resetEarningMultiplier(),
    bossSealCard: () => generateSealCard(),
    seperateStone: () => {
        hallucinatePet();
        addItemToJinnang('seperateStone',1);
    },
    coagulateStone: () => {
        if (!hallucinated) {
            showInfoBox('你的宠物还没有开启幻化状态，请先使用离魂石开启！',null,null,'red');
        } else {
            hallucinatePet();
        }
        addItemToJinnang('coagulateStone',1);
    },
    redApple: () => {
        additionalPlayerCultivation += 1;
        showInfoBox(`${currentPet.name}吃了一个苹果`,null,null,'green');
    },
    resetJinnang: () => showInfoBox(
        '\n此操作会清空背包所有内容并刷新页面，请务必知悉！\n\n（仅当背包信息错误时才推荐使用，道具一经丢失无法恢复！\n\n⚠️⚠️⚠️如果你确认背包存在不可描述的问题，请点击确认键清空并刷新！）',
        async () => {  // 直接使用 async 函数
            await clearOldItems();  // 等待清除旧物品完成
            await saveGameState();  // 等待保存游戏状态完成
            window.location.reload();  // 刷新页面
        },
        () => {
            showInfoBox('取消成功！');
            addItemToJinnang('resetJinnang',1);
        },
        'red',
        'https://pic.imgdb.cn/item/66e043bad9c307b7e94c14df.gif',
        '192px * 108px'
    ),
    chocolate: () => {
        let currentPetState = advancementStates.find(state => state.petName === currentPet.name);
        currentPetState.intimacy += 10;
        additionalPlayerCultivation += 2;
        updateAdvancement();
        showInfoBox(`${currentPetState.petName}吃了一个费罗列，增加了10点亲密度`,null,null,'brown'); 
    },
    fancyFlower: () => {
        let currentPetState = advancementStates.find(state => state.petName === currentPet.name);
        currentPetState.intimacy += 100;
        additionalPlayerCultivation += 2;
        updateAdvancement();
        showInfoBox(`你向${currentPetState.petName}送出了一捧花束，${currentPetState.petName}看到你突然的举动，一时局促地害羞起来`,null,null,'lightred'); 
    },
    damoTumbler: () => {
        showInfoBox('快给你最中意的崽玩吧',null,null,'black');
    },
    tejiWisdomPill: () => {
        upgradeWisdom();
        showInfoBox(`你使用了一颗特级悟性丹，将悟性提升至${currentWisdom}`);
    },
    spiritBottle: () => {
        displayInBottle();
        const bottleItem = jinnangItems.find(item => item.name === 'spiritBottle');
        if (bottleItem && bottleItem.quantity !== 1) {
            bottleItem.quantity = 1;
        }
        updateJinnangItems();
    },
    hongHuang: () => openHongHuangTreasure(),
    attentionValue: () => {
        increaseCurrentPetAttention(4);
        showInfoBox('当前宠物增加了4点集中值');
    },
    learningValueBook: () => {
        increaseCurrentPetLearningValue(20000);
        showInfoBox('当前宠物增加了20000学习度');
    },
    roseForLove: () => {
        increaseCurrentPetIntimacy(99);
        showInfoBox('你送给了当前宠物一束玫瑰，亲密度提升了99！');
    },
    enlargeCapacityCard: () => enlargeJinnangCapacity(1000),
    backToOne: () => {
        addItemToJinnang('enhanceBowl',100);
        addItemToJinnang('ignoranceWater',100);
    },
    universalAsh: () => {
        addItemToJinnang('universalAsh',1);
        const universalAshItem = jinnangItems.find(item => item.name === 'universalAsh');
        if (universalAshItem && universalAshItem.quantity < 5) {
            showInfoBox('你的宇宙之尘数量不足5个，无法合成宇宙之晶！',null,null,'red');
        } else {
            useItem('universalAsh',5);
            addItemToJinnang('universalCrystal',1);
            showInfoBox('消耗5个宇宙之尘合成一个宇宙之晶！',null,null,null,'https://pic.imgdb.cn/item/66cc940cd9c307b7e9cb752e.png');
        }
    },
    goldBlock: ()=> sellGoldBlock(200000000),
    tinyGoldBlock: ()=> sellGoldBlock(8000000),
    qiongmeiCard: () => {
        addPetToSelect('qiongmei', 'かすがのそら');
        showInfoBox('你获得了春日野穹（かすがのそら）',null,null,'blue','https://pic.imgdb.cn/item/66d7f116d9c307b7e9a009b9.jpg','192px * 108px');
    },
    blueArmComponents: () => {
        addItemToJinnang('blueArmComponents',1);
        const blueAC = jinnangItems.find(item => item.name === 'blueArmComponents');
        if (blueAC.quantity >= 25) {
            useItem('blueArmComponents',25);
            addItemToJinnang('orangeArmComponents',1);
            goldAmount -= 20000;
            updateGoldDisplay(goldAmount);
            showInfoBox('消耗25个蓝色武装原料和20两金，成功合成1个橙色武装原料',null,null,null,'https://pic.imgdb.cn/item/66d8732dd9c307b7e96449c0.png');
        } else {
            showInfoBox('原料数量不足，无法合成！',null,null,'red');
        }
    },
    orangeArmComponents: () => {
        addItemToJinnang('orangeArmComponents',1);
        const OrangeAC = jinnangItems.find(item => item.name === 'orangeArmComponents');
        if (OrangeAC.quantity >= 1) {
            useItem('orangeArmComponents',1);
            addItemToJinnang('blueArmComponents',25);
            goldAmount -= 100000;
            updateGoldDisplay(goldAmount);
            showInfoBox('消耗1个橙色武装原料和100两金，成功分解为25个蓝色武装原料',null,null,null,'https://pic.imgdb.cn/item/66d8732dd9c307b7e964497d.png');
        } else {
            showInfoBox('原料数量不足，无法分解！',null,null,'red');
        }
    },
    forgeTool: () => {
        addItemToJinnang('forgeTool',1);
        if (!useItem('orangeArmComponents',25)) {
            showInfoBox('你的橙色武装原料不足25个，无法合成原始宠物武装！',null,null,'red');
        } else {
            generateItemToJinnang('nativePetArms','原始宠物武装','https://pic1.imgdb.cn/item/67838e83d0e0a243d4f3a340.png', price = 20000, quantity =  1, description = '充满灵力的原始宠物武装，用于给任意的武装解锁，解锁后宠物可得到强大的属性');
            showInfoBox('消耗25个蓝色武装原料，成功合成1个原始宠物武装',null,null,null,'https://pic1.imgdb.cn/item/67838e83d0e0a243d4f3a340.png');
        }
    },
    wealthyGemBag: () => getGem(null, '3', null, null, null, null),
    starGemPKG: () => addItemToJinnang('starGem',200),
    starGemPlusPKG: () => addItemToJinnang('starGemPlus',200),
    purpleSixthGem: () => getGem('purple', '6', null, null, null, 1),
    pinkSixthGem: () => getGem('pink', '6', null, null, null, 1),
    purpleThirdGem: () => getGem('purple', '3', null, null, null, 1),
    pinkThirdGem: () => getGem('pink', '3', null, null, null, 1),
    blueThirdGem: () => getGem('blue', '3', null, null, null, 1),
    yellowThirdGem: () => getGem('yellow', '3', null, null, null, 1),       
    gemLuckyBag: () => getGem(null, '1', null, null, null, 1),
    ignoranceWater: () => resetSpecialization(),
    resetTrainingCount: () => resetAllocatePoints(),
    resetTrainCount: () => {
        trainingCount = 0;
        showInfoBox('培养次数已重置，现在可以更方便地对宠物进行培养了');
    },
    talentedBless: () => getBlessSkills(),
    advancedSkillBook: () => {
        const item = ['lizhuamengji', 'huoyanchongji', 'tiankongshouhu', 'suohou', 'jiyanggangqi', 'tianshenzhufu', 'tianwanghuwei', 'beimingshengong', 'xingzhizhufu', 'zhenbaoshenquan', 'shengshengbuxi'];
        const randomIndex = Math.floor(Math.random() * item.length);
        const selectedItem = item[randomIndex];
        addItemToJinnang(selectedItem, 1);
    },
    lizhuamengji: () => createSkills('利爪猛击', 'SSS', 'PAE', 1, 3, '凶狠的近战之术，运用自身尖锐利爪给予敌人舍命一击，造成大量物理伤害的同时附加百分百流血效果'),
    huoyanchongji: () => createSkills('火焰冲击', 'SSS', 'MAE', 1, 3, '精通元素之力的宠物懂得如何将致命元素化为己用，掌握此技能将会运用高温火焰喷向敌人，造成猛烈伤害并大幅腐蚀敌人护甲'),
    tiankongshouhu: () => createSkills('天空守护', 'SSS', 'PHE', 1, 2.5, '为我方恢复大量生命值，并附加持续治疗效果。持续治疗效果根据技能等级和玩家法术攻击力、修为决定。'),
    suohou: () => createSkills('锁喉', 'SSS', 'PPE', 1, 2.5, '敌人中毒时，将按照毒伤永久降低敌人的生命值上限（战局刷新后失效）。'),
    jiyanggangqi: () => createSkills('极阳罡气', 'SSS', 'PDE', 1, 0.01, '为自身增加一个用于接受并放大敌人伤害的罡气环绕状态，敌人造成伤害时会以非常大的比例进行反弹。'),
    beimingshengong: () => createSkills('北冥神功', 'SSS', 'PHE', 1, 2, '来自北冥之地的修炼之术，运用无上念力治愈自身的同时随机附加一个属性增益。'),
    tianshenzhufu: () => createSkills('天神祝福', 'SSS', 'NE', 1, 1, '大幅度增加宠物的生命值和速度，每级提升2000点。'),
    shengshengbuxi: () => createSkills('生生不息', 'SSS', 'NE', 1, 1, '大幅度增加宠物的寿命上限，每级提升10000点。'),
    tianwanghuwei: () => createSkills('天王护卫', 'SSS', 'NE', 1, 1, '大幅度增加宠物的物理防御和法术防御，每级提升500点。'),
    xingzhizhufu: () => createSkills('星之祝福', 'SSS', 'JKE', 1, 0.025, '敌人攻击我方时有概率解除自身减益效果，并恢复一定生命值。'),
    zhenbaoshenquan: () => createSkills('震爆神拳', 'SSS', 'TC', 1, 10, '降下天雷惩戒敌人，造成大量伤害的同时会对自身造成一定损伤，双方速度之差越大，伤害越大。'),
    merchantPointsCard: () => {
        scalpingScore += 2000;
        showMerchant(`你的经商积分增加了2000，当前积分为${scalpingScore}。`);
    },
    lifeGem: () => {
        currentLifeSpan = Math.min(maxLifeSpan, currentLifeSpan + 5000);
        showInfoBox(`成功恢复5000点寿命，当前宠物寿命为${currentLifeSpan}/${maxLifeSpan}。`);
    },
    largeLifeGem: () => {
        currentLifeSpan = Math.min(maxLifeSpan, currentLifeSpan + 30000);
        showInfoBox(`成功恢复30000点寿命，当前宠物寿命为${currentLifeSpan}/${maxLifeSpan}。`);
    },
    lifeBox: () => useLifeBox(),
    goldBox: () => {
        goldAmount += 500000000;
        updateGoldDisplay(goldAmount);
        showInfoBox('获得500锭金子！');
    },
    magicMine: () => {
        addItemToJinnang('magicMine',1);
        repairArmByMagicMine();
    },
    dyePowders: () => generateDyePowder(),
    renameDew: () => renameCurrentPet(),
    resetDyeTool: () => resetDye(),
    wuxingTreasure: () => openAmuletTreasure(),
    resetSkillPonits: () => updateTotalSkillPoints(),
    cheatPanel: () => {
        addItemToJinnang('cheatPanel',1);
        useCheatPanel();
    },
    elixirTreasure: () => openElixirTreasure(),
    elixirExpDouble: () => {
        if (elixirExpDoubleState) {
            showInfoBox('当前双倍效果正在生效中，不可叠加！');
            return;
        } 
        elixirExpDoubleState = true;
        showInfoBox('内丹双倍经验效果已开启！持续时间内战胜敌人将会获得双倍的内丹经验！');
        
        setTimeout(() => {
            elixirExpDoubleState = false;
            showInfoBox('内丹双倍经验效果已失效！');
        },1200000);
    },
    primitiveElixir1: () => openPrimitiveElixir1(row = 1),
    primitiveElixir2: () => openPrimitiveElixir1(row = 2),
    primitiveElixir3: () => openPrimitiveElixir1(row = 3),
    oilPaint: () => addBackgroundToMenu(),
};

function useAssignedItem() {
    if (!selectedItem || !selectedItem.dataset.itemName) {
        showInfoBox("请先选择一个道具。");
        return;
    }
    const itemName = selectedItem.dataset.itemName;
    const itemDisplayName = selectedItem.dataset.itemDisplayName;
    
    // 如果 itemDisplayName 包含 "级天"，则将其识别为 availableGemItems
    const availableGemItems = itemDisplayName.includes('级天') ? itemDisplayName : null;
    lastUsedItemName = itemName; // 更新最近使用的道具名称

    // 检查道具是否在映射表中
    if (itemEffects[itemName]) {
        if (useItem(itemName)) {
            itemEffects[itemName](); // 执行对应道具的效果
            updateJinnangItems(); // 更新锦囊内容显示
        } else {
            showInfoBox("道具已耗尽。");
        }
    } else if (itemDisplayName && availableGemItems) {
        mergeGem(itemDisplayName, null);//这个函数将根据物品名称来识别是否为宝石并进行合成
    } else if (itemDisplayName.includes('颜料堆')) {
        dyePets();
    } else {
        showInfoBox('此道具不能直接在背包内使用！');
    }
}
        
function useItemsInBatches(itemName, totalAmount) {
    let itemsProcessed = 0;
    const itemDisplayName = selectedItem.dataset.itemDisplayName;
    const isGem = itemDisplayName && itemDisplayName.includes('级天');
    
    if (isGem) {
        // 宝石合成的批量处理逻辑保持不变
        const mergeTimes = Math.floor(totalAmount / 3);
        let mergesCompleted = 0;
        
        function processGemBatch() {
            const maxMergesThisBatch = Math.min(10, mergeTimes - mergesCompleted);
            
            for (let i = 0; i < maxMergesThisBatch; i++) {
                const gemItem = jinnangItems.find(item => item.displayName === itemDisplayName);
                if (!gemItem || gemItem.quantity < 3) {
                    selectedItem = null;
                    return;
                }
                
                mergeGem(itemDisplayName);
                mergesCompleted++;
            }
            
            updateJinnangItems();
            
            if (mergesCompleted < mergeTimes) {
                setTimeout(processGemBatch, 50);
            } else {
                selectedItem = null;
                showInfoBox(`批量合成完成！共完成${mergesCompleted}次合成。`);
            }
        }
        
        processGemBatch();
        
    } else {
        // 修复普通道具的批量处理逻辑
        function processNextBatch() {
            // 获取当前物品
            const currentItem = jinnangItems.find(i => i.name === itemName);
            if (!currentItem) {
                selectedItem = null;
                return;
            }

            // 计算当前批次大小
            const batchSize = Math.min(20, totalAmount - itemsProcessed);
            
            // 检查剩余数量是否足够
            if (currentItem.quantity < batchSize) {
                selectedItem = null;
                showInfoBox('道具数量不足，已停止使用。');
                return;
            }

            // 先扣除这批次的数量
            currentItem.quantity -= batchSize;
            let itemsInThisBatch = 0;
            
            // 执行物品效果
            while (itemsInThisBatch < batchSize) {
                if (itemEffects[itemName]) {
                    itemEffects[itemName]();
                }
                itemsProcessed++;
                itemsInThisBatch++;
            }
            
            updateJinnangItems();
            
            // 检查是否需要继续处理
            if (itemsProcessed < totalAmount) {
                setTimeout(processNextBatch, 0);
            } else {
                selectedItem = null;
            }
        }
        
        processNextBatch();
    }
}

// 修改 useAllItems 函数中的数量验证
function useAllItems() {
    if (!selectedItem || !selectedItem.dataset.itemName) {
        showInfoBox("请先选择一个道具。");
        return;
    }
    
    const itemName = selectedItem.dataset.itemName;
    const itemIndex = jinnangItems.findIndex(i => i.name === itemName);
    const isGem = selectedItem.dataset.itemDisplayName && 
                 selectedItem.dataset.itemDisplayName.includes('级天');
    
    if (!itemEffects[itemName] && !isGem) {
        showInfoBox('此道具不能直接在背包内使用！',null,null,'red');
        return;
    }
    
    if (itemIndex !== -1) {
        const selectedItemObj = jinnangItems[itemIndex];
        const progressBarWrapper = createOrUpdateProgressBar(selectedItemObj, true);
        
        showInfoBox('此功能不稳定，如非必要请手动使用！', () => {
            const progressBar = progressBarWrapper.querySelector('input[type="range"]');
            const usePercentage = progressBar.value;
            let quantityToUse = Math.min(
                Math.floor((usePercentage / 100) * selectedItemObj.quantity), 
                selectedItemObj.quantity
            );
            
            if (isGem && quantityToUse < 3) {
                showInfoBox('合成宝石至少需要3个！',null,null,'red');
                removeProgressBar();
                return;
            }
            
            const maxLimit = isGem ? 300 : 2000;
            if (quantityToUse > maxLimit) {
                quantityToUse = maxLimit;
            }
            
            if (quantityToUse > 0) {
                const finalQuantity = isGem ? Math.floor(quantityToUse / 3) * 3 : quantityToUse;
                // 移除这里的 quantity 扣除，因为 mergeGem 会处理
                useItemsInBatches(itemName, finalQuantity);
                updateJinnangItems();
            } else {
                showInfoBox('没有选择有效的使用数量');
            }
            removeProgressBar();
        }, () => removeProgressBar(), 'black');
    } else {
        showInfoBox("未知错误！");
    }
}

function createOrUpdateProgressBar(item, useMode = false, exchangeMode = false) {
    // 检查是否已经存在进度条，如果存在则先移除
    const existingProgressBarWrapper = document.querySelector('.progress-bar-wrapper');
    if (existingProgressBarWrapper) {
        existingProgressBarWrapper.remove();
    }

    // 检查是否是宝石
    const isGem = item.displayName && item.displayName.includes('级天');
    
    // 创建新的进度条容器
    const progressBarWrapper = document.createElement('div');
    progressBarWrapper.classList.add('progress-bar-wrapper');
    progressBarWrapper.style = 'background: rgba(0, 0, 0, 0.8);display: flex;flex-direction: column;align-items: center;position: fixed;left: 50%;top: 40%;transform: translate(-50%, -50%);width: 80%;max-height: 80%;min-height: 10%;z-index: 9999;font-size: 14px;padding: 10px 20px 5px;background-color: rgb(223, 191, 110);color: rgb(146, 52, 28);background-image: url(https://pic.imgdb.cn/item/663885620ea9cb14033e4f6e.png);background-repeat: repeat;background-size: auto;box-shadow: rgb(30, 46, 47) 0px 0px 0px 1px, rgb(111, 57, 28) 0px 0px 0px 1px inset;border: 1px solid rgb(235, 172, 59);';

    // 创建进度条
    const progressBar = document.createElement('input');
    progressBar.style = 'width: 100%;height: 16px;appearance: none;background-color: rgb(255 255 255 / 90%);cursor: grabbing;border: 1px solid white;border-radius: 50px;';
    progressBar.type = 'range';
    progressBar.min = '0';
    progressBar.max = '100';
    progressBar.value = '0';
    progressBar.classList.add('progress-bar');

    // 显示进度条当前选择的数量
    const progressValueDisplay = document.createElement('span');
    progressValueDisplay.classList.add('progress-value-display');
    progressValueDisplay.style.color = 'black';
    progressValueDisplay.style.marginTop = '5px';

    // 如果是宝石且数量小于3，显示特殊提示
    if (isGem && item.quantity < 3 && useMode) {
        progressValueDisplay.textContent = `${item.displayName}，数量不足3个，无法合成`;
        progressBar.disabled = true;
        progressBar.style.opacity = '0.5';
    } else {
        progressValueDisplay.textContent = `${item.displayName}，0 / ${item.quantity} 个`;
    }

    progressBarWrapper.appendChild(progressBar);
    progressBarWrapper.appendChild(progressValueDisplay);

    if (useMode) {
        // 使用模式（宝石合成）的进度条逻辑
        progressBar.addEventListener('input', () => {
            const progressPercentage = progressBar.value;
            let quantityToUse = Math.floor((progressPercentage / 100) * item.quantity);

            if (isGem) {
                // 确保宝石数量是3的倍数
                quantityToUse = Math.floor(quantityToUse / 3) * 3;
                // 限制最大数量为999
                quantityToUse = Math.min(quantityToUse, 999);
                
                if (quantityToUse >= 3) {
                    const mergeTimes = Math.floor(quantityToUse / 3);
                    progressValueDisplay.textContent = 
                        `${item.displayName}，${quantityToUse} / ${item.quantity} 个（可进行 ${mergeTimes} 次合成）`;
                } else {
                    progressValueDisplay.textContent = 
                        `${item.displayName}，数量需要是3的倍数`;
                }
            } else {
                // 普通道具限制最大数量为2000
                quantityToUse = Math.min(quantityToUse, 2000);
                progressValueDisplay.textContent = 
                    `${item.displayName}，${quantityToUse} / ${item.quantity} 个`;
            }
        });
    } else if (exchangeMode) {
        // 兑换模式的进度条逻辑
        progressBar.addEventListener('input', () => {
            const progressPercentage = progressBar.value;
            const quantityToExchange = Math.floor((progressPercentage / 100) * item.quantity);
            const exchangeRate = Math.floor(item.price / 2000);
            const totalCredits = quantityToExchange * exchangeRate;
            progressValueDisplay.textContent = 
                `${item.displayName}，${quantityToExchange} / ${item.quantity} 个，可兑换 ${totalCredits >= 1 ? totalCredits : 1} 积分`;
        });
    } else {
        // 销售模式的进度条逻辑
        progressBar.addEventListener('input', () => {
            const progressPercentage = progressBar.value;
            const quantityToSell = Math.floor((progressPercentage / 100) * item.quantity);
            progressValueDisplay.textContent = 
                `${item.displayName}，${quantityToSell} / ${item.quantity} 个，可售${convertPrice(item.price * quantityToSell)}金`;
        });
    }

    // 添加提示信息（仅对宝石显示）
    if (isGem && useMode) {
        const tipText = document.createElement('div');
        tipText.style.fontSize = '12px';
        tipText.style.marginTop = '5px';
        tipText.style.color = '#6f391c';
        tipText.textContent = '每次合成消耗3个同级宝石和1个合成符，此功能尚在测试中，极易引发宝石丢失，高等级宝石请手动合成';
        progressBarWrapper.appendChild(tipText);
    }

    document.body.appendChild(progressBarWrapper);
    return progressBarWrapper;
}

// 移除进度条的辅助函数
function removeProgressBar() {
    const progressBar = document.querySelector('.progress-bar-wrapper');
    if (progressBar) {
        progressBar.remove();
    }
}

function useCheatPanel() {
    // 移除已存在的面板
    const existingPanel = document.getElementById('cheatPanel');
    if (existingPanel) {
        document.body.removeChild(existingPanel);
    }

    // 定义需要排除的道具名称列表
    const excludedItems = [
        'cheatPanel',
        'blessGift',
        'liguolin',
        'goldAmuletPackage',
        'resetJinnang',
        'qiongmeiCard',
        'resetSkillPonits',
        'jiechengxianai'
        // 在这里添加其他需要排除的道具name
    ];

    // 创建主面板
    const overlay = document.createElement('div');
    overlay.id = 'cheatPanel';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    // 创建面板内容
    const modal = document.createElement('div');
    modal.style.cssText = `
        width: auto;
        padding: 10px;
        height: 600px;
        background: url(https://pic1.imgdb.cn/item/66a62dd3d9c307b7e9cbe52b.gif) 0% 0% / cover no-repeat;
        border: 2px solid rgb(99, 74, 35);
        border-radius: 5px;
        position: relative;
        display: flex;
        flex-direction: column;
    `;

    // 创建标题
    const title = document.createElement('h2');
    title.innerText = '四次元空间';
    title.style.cssText = `
        color: #F9DE9B;
        text-align: center;
        margin: 10px 0;
        padding: 0;
        font-size: 18px;
    `;

    // 创建关闭按钮
    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        color: #F9DE9B;
        cursor: pointer;
        font-size: 16px;
    `;
    closeButton.onclick = () => document.body.removeChild(overlay);

    // 创建物品网格容器
    const itemsContainer = document.createElement('div');
    itemsContainer.style.cssText = `
        flex: 1 1 0%;
        overflow-y: auto;
        padding: 0px;
        display: grid;
        grid-template-columns: repeat(5, 70px);
        gap: 5px;
        place-content: start center;
        justify-items: center;
    `;

    // 过滤并遍历物品创建网格
    jinnangItems
        .filter(item => 
            !excludedItems.includes(item.name) &&  // 不在排除列表中
            !item.name.includes('elixir-') &&
            !item.description.includes('【经商法宝】（仅在商店-倒买倒卖中使用）') &&
            !item.description.includes('用于镶嵌在') &&
            !item.name.includes('dyePowder') 
        )
        .forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.style.cssText = `
                width: 60px;
                height: 80px;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
            `;

            const itemIcon = document.createElement('img');
            itemIcon.src = item.url;
            itemIcon.style.cssText = `
                width: 45px;
                height: 45px;
                border: 1px solid #634A23;
            `;

            const itemName = document.createElement('span');
            itemName.innerText = item.displayName;
            itemName.style.cssText = `
                color: #F9DE9B;
                font-size: 12px;
                text-align: center;
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `;

            itemDiv.appendChild(itemIcon);
            itemDiv.appendChild(itemName);

            // 添加点击事件
            itemDiv.onclick = () => {
                const content = document.createElement('div');
                content.style.textAlign = 'center';
                
                // 描述文本
                const description = document.createElement('div');
                description.style.cssText = `
                    margin-bottom: 15px;
                    color: #92341C;
                    font-size: 14px;
                `;
                description.innerText = item.description;
                content.appendChild(description);
                
                // 数量输入框容器
                const inputContainer = document.createElement('div');
                inputContainer.style.cssText = `
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 15px;
                `;

                // 数量输入框
                const quantityInput = document.createElement('input');
                quantityInput.type = 'number';
                quantityInput.value = '100';
                quantityInput.min = '1';
                quantityInput.style.cssText = `
                    width: 60px;
                    height: 28px;
                    text-align: center;
                    border: 1px solid #EBAC3B;
                    background-color: #DFBF6E;
                    color: #92341C;
                    font-size: 14px;
                `;

                inputContainer.appendChild(quantityInput);
                content.appendChild(inputContainer);

                showInfoBox(
                    "",
                    () => {
                        const quantity = parseInt(quantityInput.value) || 1;
                        addItemToJinnang(item.name, quantity);
                        showInfoBox(`获得${quantity}个${item.displayName}`);
                    },
                    null,
                    '#92341C'
                );

                // 将内容添加到信息框
                const messageElement = currentInfoBox.querySelector('p');
                messageElement.appendChild(content);
            };

            itemsContainer.appendChild(itemDiv);
        });

    // 组装面板
    modal.appendChild(title);
    modal.appendChild(closeButton);
    modal.appendChild(itemsContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}
    
const LIFE_BOX_BONUS = 10000000;
const LIFE_BOX_DURATION = 1200000; // 20分钟
let lifeBoxMode = false;
let lifeBoxTimeout = null;

function useLifeBox() {
    try {
        if (!tempBonus || typeof tempBonus.health === 'undefined') {
            throw new Error('生命值加成系统未初始化');
        }
        
        if (!lifeBoxMode) {
            if (lifeBoxTimeout) {
                clearTimeout(lifeBoxTimeout);
            }
            
            lifeBoxMode = true;
            tempBonus.health += LIFE_BOX_BONUS;
            
            lifeBoxTimeout = setTimeout(() => {
                lifeBoxMode = false;
                tempBonus.health -= LIFE_BOX_BONUS;
                lifeBoxTimeout = null;
            }, LIFE_BOX_DURATION);
            
            showInfoBox('生命药水效果已生效，持续20分钟');
            
        } else {
            showInfoBox('当前已有同类型效果生效，点击确认清除效果', () => {
                clearLifeBox();
                showInfoBox('源泉的生命箱效果被清除！','red');
            },null,'red',null,null);
        }
    } catch (error) {
        console.error('使用生命药水时发生错误:', error);
        showInfoBox('使用生命药水失败，请检查游戏状态', null, null, 'red');
    }
}

function clearLifeBox() {
    if (lifeBoxMode) {
        clearTimeout(lifeBoxTimeout);
        lifeBoxMode = false;
        tempBonus.health = Math.min(0, tempBonus.health - 10000000);
        lifeBoxTimeout = null;
    }
}
        
function generateSealCard() {
    // 定义封印卡片的英文名称和对应的汉字名称映射
    const sealCardsMap = new Map([
        ['battleWithTree', '树桩魔魂封印'],
        ['battleWithExpEnemy', '战神魔魂封印'],
        ['battleWithAncientEvil', '太古魔魂封印'],
        ['noWorkBoss', '無班之魂'],
        ['qiongQi', '穷奇'],
        ['practiceEnemyPlus', '高级树桩封印卡'],
        ['stoneDragon', '岩龙封印卡'],
        ['fireGiant', '火焰巨人'],
    ]);

    // 封印卡片的英文名称数组
    const sealCards = ['battleWithTree', 'battleWithExpEnemy', 'battleWithAncientEvil', 'noWorkBoss', 'qiongQi','practiceEnemyPlus','stoneDragon','fireGiant'];

    // 随机选择一个封印卡片的英文名称
    const randomIndex = Math.floor(Math.random() * sealCards.length);
    const selectedCard = sealCards[randomIndex];

    // 获取对应的汉字名称
    const chineseName = sealCardsMap.get(selectedCard);

    // 将选中的封印卡片名称传入 addItemToJinnang 函数，并增加数量 1
    addItemToJinnang(selectedCard, 1);

    // 显示提示框，告知玩家解锁了哪张封印卡片，并显示汉字名称
    showInfoBox(`你解锁了一张${chineseName}`);
}
        
function useSpiritWine() {
     if (!awakened) {
         showInfoBox("你的宠物还没有通过觉醒获取战斗精灵的庇护，琼浆玉露被宠物偷偷喝掉了");
         return;
     }
    
     if (spiritLevel >= 120) {
        showInfoBox('你的精灵等级已达到最大级，无法继续使用此道具。', null, null, 'red');
        return;
    }

    if (spiritLevel < 100) {
        showInfoBox(
            '你的精灵未满100级，建议使用精炼石提升等级。如需继续使用，请点击确认。',
            () => {
                spiritLevel += 2;
                showInfoBox(`成功提升2级精灵等级，当前精灵为${spiritLevel}级`, null, null, 'green');
            },
            () => {
                addItemToJinnang('spiritWine', 1);
            },
            'yellow'
        );
    } else {
        // 精灵等级在100到119之间时直接提升等级
        spiritLevel += 2;
        showInfoBox(`成功提升2级精灵等级，当前精灵为${spiritLevel}级`, null, null, 'green');
    }
}
        
function getRandomDrug(minNum, maxNum) {
    // 在指定范围内生成一个随机药物数量
    const drugQuantity = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    // 药材的键名数组
    const drugKeys = Object.keys(drugInventory);
    
    // 记录获得的药材信息
    let drugsObtained = '';

    for (let i = 0; i < drugQuantity; i++) {
        const randomDrug = drugKeys[Math.floor(Math.random() * drugKeys.length)];
        drugInventory[randomDrug].quantity += 1;

        // 记录每个获得的药材名
        drugsObtained += `${randomDrug} `;
    }

    // 一次性显示获得的所有药材
    showInfoBox(`你获得了 ${drugsObtained.trim()}`, 'pink');
}
            
function useLiguolin() {
    const petSelect = document.getElementById('pet-select');
    const petKey = Object.keys(pets).find(key => pets[key].name === 'Guolin·Li');
    
    if (Array.from(petSelect.options).some(option => option.value === petKey)) {
        showInfoBox(`您已召唤Mr.right！`);
    } else {
        showInfoBox(`您成功俘获了Guolin·Li！`);
        const option = document.createElement('option');
        option.value = petKey;
        option.text = 'Guolin·Li';
        petSelect.appendChild(option);
    }
}
            
// 通用的修为增加函数
function increaseCultivation(amount) {
    if (playerCultivation >= 2400000) {
        playerCultivation = 2400000;
        showInfoBox("由于你的修炼修为达到最大值，使用此道具没有任何效果", null, null, 'red');
    } else {
        additionalPlayerCultivation = Math.min(2400000, additionalPlayerCultivation + amount);
        showInfoBox(`${currentPet.name}的修为增加了${amount}点，当前修炼修为值为${additionalPlayerCultivation}`);
    }
}

function deleteItems() {
    if (!selectedItem) {
        // 没有选中物品，提示是否删除所有背包内的道具
        showInfoBox("你没有选中道具，是否删除所有背包内的道具？", () => {
            // 用户确认后执行以下代码
            let totalDeletedItems = 0;

            jinnangItems.forEach(item => {
                if (item.quantity > 0) {
                    totalDeletedItems += item.quantity;
                    item.quantity = 0; // 将所有物品数量设置为0
                }
            });

            if (totalDeletedItems > 0) {
                showInfoBox(`成功删除所有道具。`, null, null, 'green');
                updateJinnangItems();
            } else {
                showInfoBox("背包内没有可删除的道具！");
            }
        }, null, 'red');
        return;
    }

    const itemName = selectedItem.dataset.itemName;
    const itemIndex = jinnangItems.findIndex(i => i.name === itemName);

    if (itemIndex !== -1) {
        // 确认删除特定数量的道具
        showInfoBox(`您确定要删除所有的 ${jinnangItems[itemIndex].displayName} 吗？`, () => {
            jinnangItems[itemIndex].quantity = 0; // 将选中物品的数量设置为0
            showInfoBox(`${jinnangItems[itemIndex].displayName} 已成功删除。`, null, null, 'green');

            updateJinnangItems();
        }, null, 'red');
    } else {
        showInfoBox("请先选择需要删除的物品！");
    }
}
        
// 道具名称映射
const ITEM_NAMES = {
    'high-grade-pill': '高级悟性丹',
    'transmutation-pill': '万化灵丹',
    'reborn-pill': '神兽还童丹',
    'quality-pill': '资质金丹',
    'miraculous-pill': '灵异丹',
    'bingpo-reborn-pill': '冰魄还童丹',
    'golden-reborn-pill': '还童金丹'
};

let currentDescriptionBox = null;

function updateTopBarItems() {
    const topBarItems = {
        'high-grade-pill': highGradePill,
        'transmutation-pill': transmutationPill,
        'reborn-pill': rebornPill,
        'quality-pill': qualityPill,
        'miraculous-pill': miraculousPill,
        'bingpo-reborn-pill': bingpoRebornPill,
        'golden-reborn-pill': goldenRebornPill,
    };

    // 遍历所有道具并更新
    for (const [id, quantity] of Object.entries(topBarItems)) {
        const itemSpan = document.getElementById(id);
        if (!itemSpan) continue;

        // 更新数量
        itemSpan.innerText = quantity;

        // 为父元素添加点击事件
        const itemDiv = itemSpan.closest('div').parentElement;
        if (itemDiv) {
            itemDiv.style.cursor = 'pointer';
            itemDiv.onclick = () => showTopBarItemDescription(id, quantity);
        }
    }
}

function getTopBarItemDescription(itemId) {
    switch (itemId) {
        case 'high-grade-pill':
            return '用于提升宠物1~20悟性，悟性越高失败率越高，需要谨慎使用。';
        case 'transmutation-pill':
            return '重置当前宠物所掌握的技能。';
        case 'reborn-pill':
            return '重置当前宠物的资质、成长率、技能和悟性，等级恢复至1级，变异状态重新生成。';
        case 'quality-pill':
            return '重新生成宠物的当前资质。';
        case 'miraculous-pill':
            return '可以直接让宠物变异的神奇丹药。';
        case 'bingpo-reborn-pill':
            return '重置当前宠物的资质、成长率、技能和悟性，等级恢复至1级，但不改变变异状态。';
        case 'golden-reborn-pill':
            return '重置当前宠物的变异状态、技能和悟性，等级恢复至1级，但不改变资质、成长率。';
        default:
            return '未知道具';
    }
}

function getTopBarItemPrice(itemId) {
    const prices = {
        'high-grade-pill': 20,
        'transmutation-pill': 30,
        'reborn-pill': 30,
        'quality-pill': 50,
        'miraculous-pill': 500,
        'bingpo-reborn-pill': 80,
        'golden-reborn-pill': 60
    };
    return prices[itemId] || 0;
}

function showTopBarItemDescription(itemId, quantity) {
    // 移除已存在的描述框
    if (currentDescriptionBox) {
        currentDescriptionBox.remove();
        currentDescriptionBox = null;
    }

    // 创建描述框
    const descriptionBox = document.createElement('div');
    descriptionBox.className = 'description-box';
    descriptionBox.style.cssText = `
        position: fixed;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        width: 80%;
        max-width: 300px;
        z-index: 9999;
        font-size: 14px;
        padding: 10px 20px 5px;
        background-color: rgb(223, 191, 110);
        color: rgb(146, 52, 28);
        background-image: url(https://pic.imgdb.cn/item/663885620ea9cb14033e4f6e.png);
        background-repeat: repeat;
        background-size: auto;
        box-shadow: rgb(30, 46, 47) 0px 0px 0px 1px, rgb(111, 57, 28) 0px 0px 0px 1px inset;
        border: 1px solid rgb(235, 172, 59);
        text-align: center;
    `;

    // 添加描述文本
    const descText = document.createElement('div');
    descText.style.marginBottom = '15px';
    descText.style.color = '#92341C';
    descText.innerHTML = `
        <div style="margin-bottom: 8px; font-weight: bold;">${ITEM_NAMES[itemId]}</div>
        <div style="margin-bottom: 8px;">${getTopBarItemDescription(itemId)}</div>
        <div>当前拥有：${quantity}个</div>
        <div>出售单价：${convertPrice(getTopBarItemPrice(itemId))}金</div>
    `;
    descriptionBox.appendChild(descText);

    // 添加出售按钮
    const sellButton = document.createElement('button');
    sellButton.innerText = '出售道具';
    sellButton.style.cssText = `
        margin-top: 10px;
        padding: 5px 10px;
        background: linear-gradient(to bottom, #E47F47, #CE6633, #963D1C);
        color: #F9DE9B;
        border: 1px solid #6f391c;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: inset 0px 0px 2px 1px #87431F;
        font-size: 14px;
    `;
    
    sellButton.addEventListener('click', () => {
        sellTopBarItem(itemId, quantity);
        descriptionBox.remove();
        currentDescriptionBox = null;
    });
    
    descriptionBox.appendChild(sellButton);
    document.body.appendChild(descriptionBox);
    currentDescriptionBox = descriptionBox;
}

function sellTopBarItem(itemId, maxQuantity) {
    // 创建专门的进度条包装器
    const progressBarWrapper = createOrUpdateProgressBar({
        displayName: ITEM_NAMES[itemId],
        quantity: maxQuantity,
        price: getTopBarItemPrice(itemId)
    });

    // 显示出售确认框
    showInfoBox(
        '拖动进度条选择出售数量，并点击确认',
        () => {
            const progressBar = progressBarWrapper.querySelector('input[type="range"]');
            const sellPercentage = progressBar.value;
            const quantityToSell = Math.floor((sellPercentage / 100) * maxQuantity);
            
            if (quantityToSell <= 0) {
                showInfoBox('没有选择有效的出售数量');
                removeProgressBar();
                return;
            }

            // 更新全局变量
            switch (itemId) {
                case 'high-grade-pill':
                    highGradePill -= quantityToSell;
                    break;
                case 'transmutation-pill':
                    transmutationPill -= quantityToSell;
                    break;
                case 'reborn-pill':
                    rebornPill -= quantityToSell;
                    break;
                case 'quality-pill':
                    qualityPill -= quantityToSell;
                    break;
                case 'miraculous-pill':
                    miraculousPill -= quantityToSell;
                    break;
                case 'bingpo-reborn-pill':
                    bingpoRebornPill -= quantityToSell;
                    break;
                case 'golden-reborn-pill':
                    goldenRebornPill -= quantityToSell;
                    break;
                default:
                    return;
            }

            const totalPrice = quantityToSell * getTopBarItemPrice(itemId);
            goldAmount += totalPrice;
            
            showInfoBox(`成功出售${quantityToSell}个${ITEM_NAMES[itemId]}，获得${convertPrice(totalPrice)}金子`);
            updateTopBarItems();
            updateGoldDisplay(goldAmount);

            // 移除进度条
            removeProgressBar();
        },
        () => {
            removeProgressBar();
            showInfoBox('已取消出售！');
        },
        '#92341C'
    );
}

function addItemToTopBar(item) {
    switch (item.name) {
        case '神兽还童丹':
            rebornPill++;
            break;
        case '还童金丹':
            goldenRebornPill++;
            break;
        case '资质重生丹':
            qualityPill++;
            break;
        case '灵异金丹':
            miraculousPill++;
            break;
        case '高级悟性丹':
            highGradePill++;
            break;
        case '冰魄还童丹':
            bingpoRebornPill++;
            break;
        case '万化灵丹':
            transmutationPill++;
            break;
        default:
            // 未知道具
            return;
    }
    updateTopBarItems();
}

function jumpToQuality() {
    toggleAttributeDrawer();
    const drawer = document.getElementById('quality-drawer');
    if (!drawer.classList.contains('open')) {
        toggleDrawer();
    }
    return true;
}

function jumpToAttribute() {
    const drawer = document.getElementById('quality-drawer');
    if (drawer.classList.contains('open')) {
        toggleDrawer();
    }
    toggleAttributeDrawer();
}

function toggleAttributeDrawer() {
    const drawer = document.getElementById('attribute-drawer');
    const info = document.getElementById('attribute-info');
    drawer.classList.toggle('open');
    info.classList.toggle('open');

    if (autoTrainingInterval && autoTrainingTimeout) {
        stopAutoTraining();
    }
    updateAttributePanel();
}

//宠物武装
let armsAttributes = {
    horn: { type: "尖角", value: 0, attributes: ["physicalAttack", "magicAttack", "health", "mana"], url: "https://pic.imgdb.cn/item/666f194ed9c307b7e907bfb2.png", enduranceValue: 500, activated: false, description:'锐利无比的尖角，能轻易刺穿敌人的弱点。' },
    fur: { type: "毛皮", value: 0, attributes: ["physicalDefense", "magicDefense", "health"], url: "https://pic.imgdb.cn/item/666f194dd9c307b7e907bf7b.png", enduranceValue: 500, activated: false, description:'手感非凡的护甲之物，能带来不俗的防御能力。' },
    fang: { type: "獠牙", value: 0, attributes: ["physicalAttack", "speed", "magicAttack"], url: "https://pic.imgdb.cn/item/666f194dd9c307b7e907bed6.png", enduranceValue: 500, activated: false, description:'上古神兽曾用它噬铁碎骨。' },
    claw: { type: "利爪", value: 0, attributes: ["physicalAttack", "speed", "magicAttack", "mana"], url: "https://pic.imgdb.cn/item/666f194dd9c307b7e907be47.png", enduranceValue: 500, activated: false, description:'利爪挥过，血流成河。' },
    tailWhip: { type: "尾鞭", value: 0, attributes: ["physicalAttack", "speed", "magicAttack"], url: "https://pic.imgdb.cn/item/666f194cd9c307b7e907bdd1.png", enduranceValue: 500, activated: false, description:'虽不如毒鳌般凌厉，仍有破势之力。' },
    husk: { type: "甲壳", value: 0, attributes: ["physicalDefense", "speed", "magicDefense"], url: "https://pic1.imgdb.cn/item/67838b45d0e0a243d4f3a281.png", enduranceValue: 500, activated: false, description:'自然之力形成的坚硬盔甲，可抵敌人中伤。' },
    feather: { type: "翎羽", value: 0, attributes: ["speed"], url: "https://pic1.imgdb.cn/item/67838b44d0e0a243d4f3a280.png", enduranceValue: 500, activated: false, description:'中空结构却格外稳固，拥有它才懂什么是如虎添翼。' },
    textile: { type: "兽纹", value: 0, attributes: ["physicalDefense", "magicDefense"], url: "https://pic1.imgdb.cn/item/67838b45d0e0a243d4f3a283.png", enduranceValue: 500, activated: false, description:'斑斓的纹理以鲜艳的颜色警告它的敌人，靠近就是死亡。' },
    prick: { type: "尖刺", value: 0, attributes: ["physicalAttack", "magicAttack"], url: "https://pic1.imgdb.cn/item/67838b45d0e0a243d4f3a282.png", enduranceValue: 500, activated: false, description:'飞射的尖刺是杀手杀人于无形的致命武器。' },
};

let armsOpened = false;
        
function refreshAndCheckAllArmsEndurance() {
    // 遍历 armsAttributes 中的所有武器
    Object.keys(armsAttributes).forEach(key => {
        const arm = armsAttributes[key];

        // 检查并设置武器的耐久度，只在未定义或非数字的情况下重置
        if (typeof arm.enduranceValue === 'undefined' || isNaN(arm.enduranceValue)) {
            arm.enduranceValue = 500;
        }

        if (typeof arm.activated === 'undefined' || isNaN(arm.activated)) {
            arm.activated = false;
        }

        // 获取对应的 infoDiv 并更新信息
        const infoDiv = document.querySelector(`.info-${key}`);
        if (infoDiv) {
            updateArmInfoDiv(infoDiv, arm);
        }
        
        if (arm.enduranceValue === 0 && arm.activated !== undefined) {
            arm.activated = false;
        } else if (arm.enduranceValue === 0) {
            arm.activated = flase;
        } else {
            arm.activated = true;
        }
        updateAttributePanel();
    });
}
        
function handlePetArmsClick() {
    //console.log('petArms clicked: armsOpened:', armsOpened); // 调试输出

    if (!armsOpened) {
        openPetArms();
    } else {
        showPetArmsWindow();
        setTimeout(()=>refreshAndCheckAllArmsEndurance(),0);
    }
}

function openPetArms() {
    showInfoBox(
        "武装系统在后期可以为宠物增加随机的二级属性。开启需要花费200两金，是否开启？",
        () => { // onConfirm 回调
            if (goldAmount >= 200000) {
                goldAmount -= 200000;
                showInfoBox("你花费20万文金子（200两），为宠物开启了灵兽武装，现在有更强的能力提升方式了！");
                updateGoldDisplay(goldAmount);
                armsOpened = true;
                //console.log('openPetArms: armsOpened set to true'); // 调试输出
                showPetArmsWindow();
            } else {
                showInfoBox("你的金子不足20万文（200两），无法开启武装系统！");
            }
        },
        () => { // onCancel 回调
        }
    );
}

function showPetArmsWindow() {
    const existingArmsWindow = document.getElementById('petArmsWindow');
    if (existingArmsWindow) {
        existingArmsWindow.remove();
    }

    const newArmsWindow = document.createElement('div');
    newArmsWindow.id = 'petArmsWindow';
    newArmsWindow.style = `position: fixed;
                            top: 50%;
                            left: 50%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            align-items: stretch;
                            transform: translate(-50%, -50%);
                            width: 370px;
                            max-height: 80%;
                            z-index: 1000;
                            overflow-y: auto;
                            border-radius: 2px;
                            color: #92341c;
                            background: #B07638;
                            box-shadow: inset 0px 0px 3px 1px #92341C;
                            border: 1px solid black;`;
    document.body.appendChild(newArmsWindow);

    const titleContainer = document.createElement('div');
    titleContainer.innerText = '点击图标强化武装';
    titleContainer.style = `padding: 5px;
                            text-align: center;
                            background-image: url(https://pic.imgdb.cn/item/66bf32d9d9c307b7e9995d58.png);
                            background-repeat: repeat;
                            background-size: contain;
                            color: #E3A73B;
                            cursor: pointer;
                            box-shadow: inset 0px 1px 2px 0px #E3A73B;
                            border: 1px solid black;
                            position: relative;`;
    newArmsWindow.appendChild(titleContainer);

    const commonButtonStyle = `border: 1px solid #6F391C;
                               background: linear-gradient(to bottom, #E47F47, #CE6633, #963D1C);
                               box-shadow: inset 0px 0px 2px 1px #87431F;
                               font-size: 12px;
                               border-radius: 5px;
                               color: #F9DE9B;
                               padding: 2px 10px;
                               cursor: pointer;
                               margin: 2px;
                               transition: transform 0.1s, box-shadow 0.1s;`;
    
        
    const topButtonStyle = `position: absolute;
    cursor: pointer;
    font-size: 16px;
    color: white;
    background: linear-gradient(rgb(219, 186, 137), rgb(132, 82, 44), rgb(124, 52, 17), rgb(172, 75, 29), rgb(200, 94, 36));
    width: 25px;
    height: 25px;
    text-align: center;
    border-radius: 2px;
    border: 1px solid rgb(151, 112, 37);
    box-shadow: rgb(50, 28, 12) 0px 0px 0px 1px, rgb(50, 28, 12) 0px 0px 0px 1px inset;
    margin: 2px;`;


    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style = `position: fixed;
                        top: 4px;
                        right: 4px;
                        ${topButtonStyle}`;
    closeButton.addEventListener('click', closePetArmsWindow);
    newArmsWindow.appendChild(closeButton);

    const infoButton = document.createElement('button');
    infoButton.innerText = '?';
    infoButton.style = `position: fixed;
                        top: 4px;
                        left: 4px;
                        ${topButtonStyle}`;
    infoButton.addEventListener('click', showInfo);
    newArmsWindow.appendChild(infoButton);

    const armsContent = document.createElement('div');
    armsContent.id = 'petArmsContent';
    armsContent.style = `display: flex;
                        flex-direction: column;
                        gap: 10px;
                        padding: 20px;
                        background-color: #DFBF6E;
                        box-shadow: inset 0px 0px 0px 1px #6f391c;
                        color: black;
                        background-image: url(https://pic.imgdb.cn/item/663885620ea9cb14033e4f6e.png);
                        background-repeat: repeat;
                        background-size: auto;
                        height: 480px;
                        overflow-y: scroll;`;
    

    const attributeMap = {
        physicalAttack: '物攻',
        magicAttack: '法攻',
        physicalDefense: '物防',
        magicDefense: '法防',
        speed: '速度',
        health: 'HP',
        mana: 'MP'
    };

    const armKeys = Object.keys(armsAttributes);
    armKeys.forEach((key, index) => {
        const arm = armsAttributes[key];
        const armDiv = document.createElement('div');
        armDiv.className = 'petArms-item';
        armDiv.style = `display: flex;
                        align-items: center;
                        padding: 5px;
                        gap: 5px;
                        border: 1px solid rgba(0, 0, 0, 0.8);
                        flex-direction: row;`;

        const img = document.createElement('img');
        img.src = index === 0 || arm.unlocked ? arm.url : 'https://pic.imgdb.cn/item/666f194bd9c307b7e907ba91.png';
        img.alt = arm.type;
        img.style.width = '45px';
        img.style.height = '45px';
        img.style.border = '1px solid black';
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            if (arm.unlocked) {
                openInlayGemDisplay(key);
                updateDivinedDisplay(arm);
            } else {
                showInfoBox('武装需要解锁后才能改造（尖角是基础武装，无法进行改造）。 \n\n【解锁方法】使用“橙色武装原料”（商店购买）和“锻造工具”（至尊宝箱获得）合成“原始宠物武装”后，点击解锁将激活进阶武装（可执行升星、镶嵌、通灵）。');
            }
        });

        const infoDiv = document.createElement('div');
        infoDiv.style.flexGrow = '1';
        infoDiv.style.marginLeft = '5px';
        infoDiv.style.fontSize = '14px';
        infoDiv.classList.add(`info-${key}`); // 用于全局更新时的选择器
        
        updateArmInfoDiv(infoDiv, arm); // 显示耐久度信息
        infoDiv.addEventListener('click', () => {
            repairArm(infoDiv, arm, key);
        });
        armDiv.appendChild(infoDiv);

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.flexDirection = 'column';
        buttonContainer.style.justifyContent = 'space-around';
        
        const forgeButton = document.createElement('button');
        forgeButton.style = commonButtonStyle;
        buttonContainer.appendChild(forgeButton);  // 将按钮添加到容器中

        const energyForgeButton = document.createElement('button');
        energyForgeButton.innerText = '灵气';
        energyForgeButton.style.display = 'none';
        energyForgeButton.style = commonButtonStyle;
        buttonContainer.appendChild(energyForgeButton);  // 将按钮添加到容器中

        if (index === 0 || arm.unlocked) {
            updateArmInfoDiv(infoDiv, arm, key); // 更新武装信息，包括耐久度
            forgeButton.innerText = '锻造';
            forgeButton.addEventListener('click', () => forgeArm(key, infoDiv));
            energyForgeButton.style.display = 'block';
            energyForgeButton.addEventListener('click', () => energyForgeArm(key, infoDiv));
        } else {
            infoDiv.innerHTML = '<div>？？？</div><div>？？？</div>';
            forgeButton.innerText = '解锁';
            forgeButton.classList.add('locked');
            forgeButton.addEventListener('click', () => unlockArm(index, arm, infoDiv, forgeButton, img, energyForgeButton));
        }

        armDiv.appendChild(img);
        armDiv.appendChild(infoDiv);
        armDiv.appendChild(buttonContainer);
        armsContent.appendChild(armDiv);
    });

    newArmsWindow.appendChild(armsContent);
    refreshAndCheckAllArmsEndurance();
}

function unlockArm(index, arm, infoDiv, forgeButton, img, energyForgeButton) {
    if (isUnlocked(index)) {
        if (!arm.unlocked) {
            showInfoBox(
                "武装系统可以增强宠物的二级属性，如果你拥有原始宠物武装，你可以直接激活一件",
                () => {
                    if (useItem('nativePetArms')) {
                        showInfoBox("您使用一个原始宠物武装，为宠物解锁了一件新的强力装备！");
                        arm.unlocked = true;
                        // 初始化 armState（解锁后才创建）
                        arm.armState = {
                            starLevel: 0, // 初始化星级为0
                            baseValue: 0,
                            gemSlots: {
                                current: 1, // 初始宝石孔数量为1
                                max: 10, // 最多10个宝石孔
                                colors: [randomGemColor()], // 随机初始化第一个宝石孔颜色
                                inlaid: [null], // 初始化未镶嵌状态
                                gemAttribute: { // 初始化所有属性为0
                                    physicalAttack: 0,
                                    magicAttack: 0,
                                    physicalDefense: 0,
                                    magicDefense: 0,
                                    speed: 0,
                                    health: 0,
                                    mana: 0,
                                    endurance: 0,
                                    intelligence: 0,
                                    strength: 0,
                                    agility: 0,
                                    faith: 0
                                }
                            },
                            divinedAttribute: {
                                physicalAttack: {
                                    fixed: 0,      // 固定值加成
                                    percentage: 0  // 百分比加成（存储为小数，如0.018代表18‰）
                                },
                                magicAttack: {
                                    fixed: 0,
                                    percentage: 0
                                },
                                physicalDefense: {
                                    fixed: 0,
                                    percentage: 0
                                },
                                magicDefense: {
                                    fixed: 0,
                                    percentage: 0
                                },
                                speed: {
                                    fixed: 0,
                                    percentage: 0
                                },
                                health: {
                                    fixed: 0,
                                    percentage: 0
                                },
                                mana: {
                                    fixed: 0,
                                    percentage: 0
                                },
                                endurance: 0,
                                intelligence: 0,
                                strength: 0,
                                agility: 0,
                                faith: 0
                                // 注意：不再需要一级属性，因为通灵只影响二级属性
                            }
                        };
                        img.src = arm.url;
                        showPetArmsWindow();
                        initializeDivinedAttributes(arm);
                        forgeButton.innerText = '锻造';
                        forgeButton.classList.remove('locked');
                        forgeButton.replaceWith(forgeButton.cloneNode(true));
                        forgeButton = infoDiv.nextElementSibling;
                        forgeButton.addEventListener('click', () => forgeArm(Object.keys(armsAttributes)[index], infoDiv));
                        energyForgeButton.style.display = 'block';
                        energyForgeButton.addEventListener('click', () => energyForgeArm(Object.keys(armsAttributes)[index], infoDiv));
                    } else {
                        showInfoBox("道具不足，无法解锁！");
                    }
                },
                () => {}
            );
        } else if (arm.unlocked) {
            showInfoBox("武装已经解锁！");
        } 
    } else {
        showInfoBox("宠物等级不足，无法解锁！");
    }
}

//这是初始化新通灵系统的内容
function initializeDivinedAttributes(arm) {
    // 如果是旧数据结构，需要进行转换
    if (arm.armState && typeof arm.armState.divinedAttribute.physicalAttack === 'number') {
        const oldAttributes = { ...arm.armState.divinedAttribute };
        
        // 创建新的数据结构
        arm.armState.divinedAttribute = {
            physicalAttack: { fixed: 0, percentage: 0 },
            magicAttack: { fixed: 0, percentage: 0 },
            physicalDefense: { fixed: 0, percentage: 0 },
            magicDefense: { fixed: 0, percentage: 0 },
            speed: { fixed: 0, percentage: 0 },
            health: { fixed: 0, percentage: 0 },
            mana: { fixed: 0, percentage: 0 },
            endurance: 0,
            intelligence: 0,
            strength: 0,
            agility: 0,
            faith: 0,
        };

        // 如果有旧的数值，将其转换为固定值
        Object.entries(oldAttributes).forEach(([attr, value]) => {
            if (arm.armState.divinedAttribute[attr]) {
                arm.armState.divinedAttribute[attr].fixed = value;
            }
        });
    }
    
    // 如果是全新初始化
    if (!arm.armState.divinedAttribute) {
        arm.armState.divinedAttribute = {
            physicalAttack: { fixed: 0, percentage: 0 },
            magicAttack: { fixed: 0, percentage: 0 },
            physicalDefense: { fixed: 0, percentage: 0 },
            magicDefense: { fixed: 0, percentage: 0 },
            speed: { fixed: 0, percentage: 0 },
            health: { fixed: 0, percentage: 0 },
            mana: { fixed: 0, percentage: 0 },
            endurance: 0,
            intelligence: 0,
            strength: 0,
            agility: 0,
            faith: 0
        };
    }
}
        
// 修改随机属性生成函数
function getRandomDivinedAttribute() {
    // 合并二级和一级属性列表
    const secondaryAttributes = [
        'physicalAttack', 'magicAttack', 'physicalDefense',
        'magicDefense', 'speed', 'health', 'mana'
    ];
    const firstAttributes = [
        'endurance', 'intelligence', 'strength', 'agility', 'faith'
    ];
    const critValue = ['playerCritRate', 'playerCritDamage'];
    
    // 70%概率选择二级属性，30%概率选择一级属性
    const isSecondaryAttribute = Math.random() < 0.7;
    const attributePool = isSecondaryAttribute ? secondaryAttributes : firstAttributes;
    const attribute = attributePool[Math.floor(Math.random() * attributePool.length)];

    // 如果是一级属性，直接返回固定值（范围90-180）
    if (firstAttributes.includes(attribute)) {
        const value = Math.floor(Math.random() * (180 - 90 + 1) + 90);
        return { attribute, value, isFirstAttribute: true };
    }

    // 如果是二级属性，保持原有逻辑
    const isPercentage = Math.random() < 0.5;
    if (isPercentage) {
        let value;
        if (attribute === 'speed') {
            value = Math.floor(Math.random() * 2 + 3) / 1000;
        } else {
            value = Math.floor(Math.random() * 19 + 18) / 1000;
        }
        return { attribute, value, isPercentage: true, isFirstAttribute: false };
    } else {
        let value;
        if (attribute === 'speed') {
            value = Math.floor(Math.random() * (102 - 51 + 1) + 51);
        } else {
            value = Math.floor(Math.random() * (1200 - 768 + 1) + 768);
        }
        return { attribute, value, isPercentage: false, isFirstAttribute: false };
    }
}

function hasAnyDivinedAttribute(arm) {
    if (!arm.armState?.divinedAttribute) return false;
    
    for (const [attr, value] of Object.entries(arm.armState.divinedAttribute)) {
        // 检查一级属性（数字类型且大于0）
        if (typeof value === 'number' && value > 0) {
            return true;
        }
        // 检查二级属性（对象类型且fixed或percentage大于0）
        if (typeof value === 'object' && value !== null && 
            (value.fixed > 0 || value.percentage > 0)) {
            return true;
        }
    }
    return false;
}

function getWeightedRandomCount() {
    const random = Math.random();
    if (random < 0.2) return 1;        // 20% 概率
    if (random < 0.4) return 2;        // 20% 概率
    if (random < 0.7) return 3;        // 30% 概率
    if (random < 0.9) return 4;        // 20% 概率
    return 5;                          // 10% 概率
}

function refreshDivinedAttributes() {
    if (!currentKey) {
        showInfoBox('未选择武装！');
        return;
    }
    const arm = armsAttributes[currentKey];
    if (!arm) {
        showInfoBox('该武装不存在！');
        return;
    }
    const spiritualWater = jinnangItems.find(item => item.name === 'spiritualWater');
    if (!spiritualWater || spiritualWater.quantity < 1) {
        showInfoBox('需要消耗无上养元水才能进行通灵！', null, null, 'red');
        return;
    }

    useItem('spiritualWater', 1);
    
    // 先生成新的通灵结果但不应用
    const attributeCount = getWeightedRandomCount();
    const newAttributes = [];
    for (let i = 0; i < attributeCount; i++) {
        newAttributes.push(getRandomDivinedAttribute());
    }

    // 构建显示文本
    const attributeDisplay = newAttributes.map(attr => {
        if (attr.isFirstAttribute) {
            return `+${attr.value} ${translateAttribute(attr.attribute)}`;
        } else if (attr.isPercentage) {
            return `+${(attr.value * 1000).toFixed(0)}‰ ${translateAttribute(attr.attribute)}`;
        } else {
            return `+${attr.value} ${translateAttribute(attr.attribute)}`;
        }
    }).join('\n');

    // 创建临时合并结果（不应用）
    const mergedAttributes = {};
    newAttributes.forEach(attr => {
        if (attr.isFirstAttribute) {
            if (!mergedAttributes[attr.attribute]) {
                mergedAttributes[attr.attribute] = 0;
            }
            mergedAttributes[attr.attribute] += attr.value;
        } else {
            if (!mergedAttributes[attr.attribute]) {
                mergedAttributes[attr.attribute] = {
                    fixed: 0,
                    percentage: 0
                };
            }
            if (attr.isPercentage) {
                mergedAttributes[attr.attribute].percentage += attr.value;
            } else {
                mergedAttributes[attr.attribute].fixed += attr.value;
            }
        }
    });

    // 显示结果并等待玩家确认
    showInfoBox(
        `得到新的通灵属性：\n\n${attributeDisplay}\n\n是否保存此次通灵结果？`,
        () => {
            // 重置二级属性
            Object.keys(arm.armState.divinedAttribute).forEach(key => {
                if (typeof arm.armState.divinedAttribute[key] === 'object') {
                    arm.armState.divinedAttribute[key] = {
                        fixed: 0,
                        percentage: 0
                    };
                } else {
                    arm.armState.divinedAttribute[key] = 0; // 重置一级属性
                }
            });

            // 应用新属性
            Object.entries(mergedAttributes).forEach(([attr, value]) => {
                arm.armState.divinedAttribute[attr] = value;
            });

            // 更新全局变量和显示
            window.divinedFirstAttributes = {
                endurance: arm.armState.divinedAttribute.endurance || 0,
                intelligence: arm.armState.divinedAttribute.intelligence || 0,
                strength: arm.armState.divinedAttribute.strength || 0,
                agility: arm.armState.divinedAttribute.agility || 0,
                faith: arm.armState.divinedAttribute.faith || 0
            };

            // 更新显示
            updateDivinedDisplay(arm);
            updateAttributePanel();
        },
        null,
        'black',null,null,'75%'
    );
}

// 修改显示函数
function updateDivinedDisplay(arm) {
    const divinedElement = document.getElementById('divined-attribute');
    if (!divinedElement) return;

    if (!arm.armState?.divinedAttribute || !hasAnyDivinedAttribute(arm)) {
        divinedElement.innerHTML = `无 <button id="divinedBtn" onClick="refreshDivinedAttributes()" style="border: 1px solid rgb(111, 57, 28); background: linear-gradient(rgb(228, 127, 71), rgb(206, 102, 51), rgb(150, 61, 28)); box-shadow: rgb(135, 67, 31) 0px 0px 2px 1px inset; font-size: 12px; border-radius: 5px; color: rgb(249, 222, 155); padding: 2px 10px; cursor: pointer; margin: 2px; transition: transform 0.1s, box-shadow 0.1s; display: block;width:20%;margin-left:10px;">通灵</button>`;
        return;
    }

    const attributeTexts = [];
    const attributes = Object.entries(arm.armState.divinedAttribute);
    
    for (const [attr, values] of attributes) {
        if (typeof values === 'number') {
            // 一级属性
            if (values > 0) {
                attributeTexts.push(`+${values} ${translateAttribute(attr)}`);
            }
        } else {
            // 二级属性
            if (values.fixed > 0 || values.percentage > 0) {
                const parts = [];
                if (values.fixed > 0) {
                    parts.push(`+${values.fixed}`);
                }
                if (values.percentage > 0) {
                    parts.push(`+${(values.percentage * 1000).toFixed(0)}‰`);
                }
                if (parts.length > 0) {
                    attributeTexts.push(`${parts.join('/')} ${translateAttribute(attr)}`);
                }
            }
        }
    }

    const displayText = attributeTexts.length > 0 ? attributeTexts.join('，') : '无';
    divinedElement.innerHTML = `<div style="display:flex;text-align: start;">${displayText}</div><button id="divinedBtn" onClick="refreshDivinedAttributes()" style="border: 1px solid rgb(111, 57, 28); background: linear-gradient(rgb(228, 127, 71), rgb(206, 102, 51), rgb(150, 61, 28)); box-shadow: rgb(135, 67, 31) 0px 0px 2px 1px inset; font-size: 12px; border-radius: 5px; color: rgb(249, 222, 155); padding: 2px 10px; cursor: pointer; margin: 2px; transition: transform 0.1s, box-shadow 0.1s; display: block;width:20%;margin-left:10px;">通灵</button>`;
}

function getTotalDivinedFirstAttributes() {
    const totalDivined = {
        endurance: 0,
        intelligence: 0,
        strength: 0,
        agility: 0,
        faith: 0
    };

    // 遍历所有已激活的武装
    Object.values(armsAttributes).forEach(arm => {
        if (arm.activated && arm.armState?.divinedAttribute) {
            // 累加每个一级属性的值
            totalDivined.endurance += arm.armState.divinedAttribute.endurance || 0;
            totalDivined.intelligence += arm.armState.divinedAttribute.intelligence || 0;
            totalDivined.strength += arm.armState.divinedAttribute.strength || 0;
            totalDivined.agility += arm.armState.divinedAttribute.agility || 0;
            totalDivined.faith += arm.armState.divinedAttribute.faith || 0;
        }
    });

    return totalDivined;
}
        
function updateArmInfoDiv(infoDiv, arm, key) {
    let enduranceElement;
    if (arm.enduranceValue <= 200) {
        const enduranceText = `(耐久:${arm.enduranceValue}/500)🔨`;
        enduranceElement = `<span style="cursor:pointer;color:red;" id="endurance-${key}">${enduranceText}</span>`;
    } else {
        const enduranceText = `(耐久:${arm.enduranceValue}/500)`;
        enduranceElement = `<span style="cursor:pointer;" id="endurance-${key}">${enduranceText}</span>`;
    }
    
    const infoText = `增益: + ${arm.value}${translateAttribute(arm.attribute)}`;
    
    // 使用可选链和空值合并操作符简化检查
    const isAwakened = arm.armState?.awakened ?? false;
    
    infoDiv.innerHTML = `<div>${isAwakened ? '【觉】' : ''}${arm.type} ${enduranceElement}</div><div>${infoText}</div>`;
}

function repairArm(infoDiv, arm, key) {
    const repairTool = jinnangItems.find(item => item.name === 'blueArmComponents');

    if (arm.enduranceValue >= 500) {
        showInfoBox('当前耐久度充足，不需要修复！',null,null,'red');
        return;
    }
    
    if (repairTool.quantity >= 5) {
        showInfoBox('你将花费5个蓝色武装原料恢复100点耐久度，是否继续？', () => {
            useItem('blueArmComponents',5);
            arm.enduranceValue = Math.min(500, arm.enduranceValue + 100); // 修复耐久度，但不超过500
            refreshAndCheckAllArmsEndurance();
            updateArmInfoDiv(infoDiv, arm, key);
        }, null, 'red');
    } else {
        showInfoBox('你的蓝色武装原料数量不足5个，无法恢复耐久值！',null,null,'red');
    }
    updateAttributePanel();
}

function repairArmByMagicMine() {
    // 检查是否有魔矿可用
    const magicMine = jinnangItems.find(item => item.name === 'magicMine');
    if (!magicMine || magicMine.quantity <= 0) {
        showInfoBox('魔矿数量不足，无法修复！', null, null, 'red');
        return;
    }

    // 检查是否有需要修复的武装
    let needRepair = false;
    Object.values(armsAttributes).forEach(arm => {
        if (arm.unlocked && arm.enduranceValue < 500) {
            needRepair = true;
        }
    });

    if (!needRepair) {
        showInfoBox('所有武装耐久度都很充足，无需修复！', null, null, 'red');
        return;
    }

    // 确认是否修复
    showInfoBox('你将消耗一个魔矿修复所有武装的耐久度，是否继续？', 
        () => {
            // 消耗魔矿
            if (useItem('magicMine', 1)) {
                // 修复所有已解锁武装的耐久度
                Object.entries(armsAttributes).forEach(([key, arm]) => {
                    if (arm.unlocked) {
                        arm.enduranceValue = 500;
                        // 更新对应的信息显示
                        const infoDiv = document.querySelector(`.info-${key}`);
                        if (infoDiv) {
                            updateArmInfoDiv(infoDiv, arm, key);
                        }
                    }
                    
                });

                armsAttributes['horn'].enduranceValue = 500;

                refreshAndCheckAllArmsEndurance();
                updateAttributePanel();
                showInfoBox('所有武装耐久度已恢复！', null, null, 'red');
            }
        }, 
        () => addItemToJinnang('magicMine',1),'red'
    );
}
        
// 减少武装的耐久度
function decreaseArmsEndurance(key = null, value) {
    if (key) {
        const arm = armsAttributes[key];
        if (arm.enduranceValue <= 0) {
            arm.enduranceValue = 0;
            
        }
        arm.enduranceValue = Math.max(0, arm.enduranceValue - value);

    } else {
        Object.keys(armsAttributes).forEach(key => {
            const arm = armsAttributes[key];
            if (arm.value !== 0) {
                arm.enduranceValue = Math.max(0, arm.enduranceValue - value);
            }

            if (arm.enduranceValue === 0) {
                logBattleEvent(`${currentPet.name}的${arm.type}已经完全损坏，将无法再提供任何属性增益！`,'red');
            }
        });
    }
    
    refreshAndCheckAllArmsEndurance(); // 刷新所有武装显示信息
    updateAttributePanel();
}

function isUnlocked(index) {
    switch (index) {
        case 1:
            return petLevel >= 60;
        case 2:
            return petLevel >= 80;
        case 3:
            return petLevel >= 100;
        case 4:
            return petLevel >= 120;
        case 5:
            return petLevel >= 140;
        case 6:
            return petLevel >= 149;
        case 7:
            return petLevel >= 160;
        case 8:
            return petLevel >= 180;
        default:
            return false;
    }
}

function closePetArmsWindow() {
    const armsWindow = document.getElementById('petArmsWindow');
    if (armsWindow) {
        armsWindow.style.display = 'none';
    }
}

function forgeArm(key, infoDiv, useGold = true) {
    const gemUI = document.getElementById('inlayGemUI');
    const arm = armsAttributes[key];

    // 首先检查觉醒状态
    if (arm.armState?.awakened) {
        showInfoBox("该武装已经觉醒，无法进行锻造！", null, null, 'red');
        return;
    }

    if (gemUI.style.display !== 'none') {
        showInfoBox('请先关闭宝石面板！', null, null, 'red');
        return; // 添加 return 确保函数终止
    }

    if (arm.enduranceValue === 0) {
        showInfoBox("该武装已经完全损坏，将无法再提供任何增益！", null, null, 'red');
        return;
    }

    if (arm.type !== '尖角' && arm.armState.starLevel >= 1) {
        showInfoBox('当前武装已经升过星，重新锻造会重置星级');
    }
  
    if (useGold) {
        if (goldAmount < 8000) {
            showInfoBox("金子不足，无法锻造！");
            return;
        }
        goldAmount -= 8000;
        updateGoldDisplay(goldAmount);
    } else {
        if (!useItem('earthlyEnergy', 100)) {
            showInfoBox("您还没有天地灵气，此道具可通过开启武神仙葫或商店购买获得。");
            return;
        }
    }

    const attribute = arm.attributes[Math.floor(Math.random() * arm.attributes.length)];
    let newValue;
    if (useGold) {
        let rand = Math.random();
        if (rand < 0.9) {
            newValue = Math.floor(100 + Math.random() * 0.3 * (
                attribute === "physicalDefense" || attribute === "magicDefense" ? 10888 :
                attribute === "magicAttack" ? 6666 :
                attribute === "speed" ? 3333 :
                attribute === "health" || attribute === "mana" ? 66666 :
                7777
            ));
        } else {
            newValue = Math.floor(100 + Math.random() * 0.5 * (
                attribute === "physicalDefense" || attribute === "magicDefense" ? 10888 :
                attribute === "magicAttack" ? 6666 :
                attribute === "speed" ? 3333 :
                attribute === "health" || attribute === "mana" ? 66666 :
                7777
            ));
        }
    } else {
        const maxRanges = {
            physicalDefense: 10888,
            magicDefense: 10888,
            magicAttack: 6666,
            speed: 3333,
            health: 66666,
            mana: 66666,
            default: 7777
        };
        const maxRange = maxRanges[attribute] || maxRanges.default;
        const minValue = 100 + 0.8 * maxRange;
        const maxValue = 100 + maxRange;
        newValue = Math.floor(minValue + Math.random() * (maxValue - minValue));
    }

    arm.value = newValue;
    arm.attribute = attribute;
    
    // 重置星级
    if (arm.armState && typeof arm.armState.starLevel === 'number') {
        arm.armState.starLevel = 0;
    } else {
        if (!arm.armState) {
            arm.armState = {
                starLevel: 0,
                baseValue: 0,
                awakened: false, // 确保初始化时设置觉醒状态
                gemSlots: {
                    current: 1,
                    max: 10,
                    colors: [randomGemColor()],
                    inlaid: [null]
                }
            };
        }
    }

    const attributeMap = {
        physicalAttack: '物攻',
        magicAttack: '法攻',
        physicalDefense: '物防',
        magicDefense: '法防',
        speed: '速度',
        health: 'HP',
        mana: 'MP'
    };

    const attributeNameInChinese = attributeMap[arm.attribute];
    arm.forgedInfo = `增益: ${arm.value} ${attributeNameInChinese}`;
    arm.armState.baseValue = arm.value;
    infoDiv.innerHTML = `<div>${arm.type}</div><div>${arm.forgedInfo}</div>`;
    
    updateSkillScore();
    updateTitle();
    updateAttributePanel();
    decreaseArmsEndurance(key, 10);
    updateArmInfoDiv(infoDiv, arm);
}

// 使用金子锻造，保持不变
function goldForgeArm(key, infoDiv) {
    forgeArm(key, infoDiv, true);
}

// 使用天地灵气锻造，保持不变
function energyForgeArm(key, infoDiv) {
    forgeArm(key, infoDiv, false);
}

function lockArms() {
    const armKeys = Object.keys(armsAttributes);
    armKeys.forEach((key, index) => {
        if (index > 0) {
            armsAttributes[key].unlocked = false;
            armsAttributes[key].activated = false;
        }
    });
    armsOpened = false;
    //console.log('All arms are now locked.');
}

function removeArmsAttributes() {
    const armKeys = Object.keys(armsAttributes);
    armKeys.forEach(key => {
        armsAttributes[key].value = 0;
        armsAttributes[key].attribute = null;
        armsAttributes[key].forgedInfo = null;
    });
    //console.log('All arms attributes have been reset to zero.');
}

// 计算所有宝石提供的属性
function calculateGemAttributes() {
    let gemAttributeMessage = {};

    // 遍历 armsAttributes 对象
    Object.keys(armsAttributes).forEach(key => {
        const arm = armsAttributes[key];

        // 检查 armState 和 gemSlots 是否存在
        if (arm.armState && arm.armState.gemSlots && arm.armState.gemSlots.gemAttribute) {
            const gemAttributes = arm.armState.gemSlots.gemAttribute;

            // 累加每个宝石的属性值
            Object.keys(gemAttributes).forEach(gemAttr => {
                const gemAttrValue = gemAttributes[gemAttr] != null ? gemAttributes[gemAttr] : 0;
                if (gemAttributeMessage[gemAttr]) {
                    gemAttributeMessage[gemAttr] += gemAttrValue; // 累加宝石属性值
                } else {
                    gemAttributeMessage[gemAttr] = gemAttrValue;
                }
            });
        }
    });

    return gemAttributeMessage;
}

// 显示武装和宝石属性的总和
function showInfo() {
    // 计算通灵前后的二级属性差值
    function getDivinedBonus() {
        // 储存原始通灵属性
        const tempDivinedAttributes = {};
        const divinedBonus = {};
        
        // 保存现有通灵属性并临时清除
        Object.keys(armsAttributes).forEach(key => {
            const arm = armsAttributes[key];
            if (arm.activated && arm.armState?.divinedAttribute) {
                tempDivinedAttributes[key] = {...arm.armState.divinedAttribute};
                arm.armState.divinedAttribute = {
                    physicalAttack: { fixed: 0, percentage: 0 },
                    magicAttack: { fixed: 0, percentage: 0 },
                    physicalDefense: { fixed: 0, percentage: 0 },
                    magicDefense: { fixed: 0, percentage: 0 },
                    speed: { fixed: 0, percentage: 0 },
                    health: { fixed: 0, percentage: 0 },
                    mana: { fixed: 0, percentage: 0 }
                };
            }
        });

        // 获取无通灵状态的属性值
        const baseResult = calculateSecondaryAttributes(calculateCurrentAttributes(), currentWisdom);
        
        // 恢复通灵属性
        Object.keys(armsAttributes).forEach(key => {
            const arm = armsAttributes[key];
            if (arm.activated && tempDivinedAttributes[key]) {
                arm.armState.divinedAttribute = tempDivinedAttributes[key];
            }
        });

        // 获取有通灵状态的属性值
        const withDivinedResult = calculateSecondaryAttributes(calculateCurrentAttributes(), currentWisdom);

        // 计算差值
        const secondaryAttrs = ['health', 'mana', 'physicalAttack', 'magicAttack', 'physicalDefense', 'magicDefense', 'speed'];
        secondaryAttrs.forEach(attr => {
            divinedBonus[attr] = withDivinedResult[attr] - baseResult[attr];
        });

        return divinedBonus;
    }

    // 收集所有属性（包括基础增益和通灵）
    let allAttributes = new Set(); // 用于收集所有出现的属性
    let armAttributeMessage = {};
    let divinedFirstAttrBonus = {};
    
    // 先收集武装系统基础增益（包括宝石）和一级属性的通灵值
    Object.keys(armsAttributes).forEach(key => {
        const arm = armsAttributes[key];
        if (!arm.activated) return;

        // 基础属性
        if (arm.attribute) {
            armAttributeMessage[arm.attribute] = (armAttributeMessage[arm.attribute] || 0) + arm.value;
            allAttributes.add(arm.attribute);
        }

        // 宝石属性
        const gemAttributes = arm.armState?.gemSlots?.gemAttribute;
        if (gemAttributes) {
            Object.entries(gemAttributes).forEach(([attr, value]) => {
                if (value > 0) {
                    armAttributeMessage[attr] = (armAttributeMessage[attr] || 0) + value;
                    allAttributes.add(attr);
                }
            });
        }

        // 收集一级属性通灵值
        if (arm.armState?.divinedAttribute) {
            const firstAttrs = ['endurance', 'intelligence', 'strength', 'agility', 'faith'];
            firstAttrs.forEach(attr => {
                if (arm.armState.divinedAttribute[attr] > 0) {
                    divinedFirstAttrBonus[attr] = (divinedFirstAttrBonus[attr] || 0) + arm.armState.divinedAttribute[attr];
                    allAttributes.add(attr);
                }
            });
        }
    });

    // 获取二级属性的通灵加成并添加到属性集合
    const divinedSecondaryBonus = getDivinedBonus();
    Object.entries(divinedSecondaryBonus).forEach(([attr, bonus]) => {
        if (bonus > 0) {
            allAttributes.add(attr);
        }
    });

    const nameMap = new Map([
        ['health', '生命值'],
        ['magicAttack', '法术攻击'],
        ['magicDefense', '法术防御'],
        ['mana', '法力值'],
        ['physicalAttack', '物理攻击'],
        ['physicalDefense', '物理防御'],
        ['speed', '速度'],
        ['endurance', '耐力'],
        ['intelligence', '智力'],
        ['agility', '敏捷'],
        ['strength', '强壮'],
        ['faith', '信仰']
    ]);

    // 构建显示信息
    let attributeLines = [];
    allAttributes.forEach(attr => {
        const translatedAttr = nameMap.get(attr) || attr;
        const baseValue = armAttributeMessage[attr] || 0;
        
        if (['endurance', 'intelligence', 'strength', 'agility', 'faith'].includes(attr)) {
            // 一级属性
            const divinedBonus = divinedFirstAttrBonus[attr] || 0;
            if (baseValue > 0 || divinedBonus > 0) {
                attributeLines.push(`${translatedAttr}: ${baseValue + divinedBonus > 0 ? baseValue + divinedBonus : '0'}（通灵+ ${divinedBonus > 0 ? `${divinedBonus}` : '0'}）`);
            }
        } else {
            // 二级属性
            const divinedBonus = divinedSecondaryBonus[attr] || 0;
            if (baseValue > 0 || divinedBonus > 0) {
                attributeLines.push(`${translatedAttr}: ${baseValue + divinedBonus > 0 ? baseValue + divinedBonus : '0'}（通灵+ ${divinedBonus > 0 ? `${divinedBonus}` : '0'}）`);
            }
        }
    });

    const message = `
        当前武装总属性（包含宝石与通灵）：
        ${attributeLines.join('\n')}
        
        武装系统功能和操作说明：
        1. 武装是宠物的装备系统，需要用25个橙色武装原料和1个锻造工具解锁
        2. 解锁武装后，可以通过"锻造"或"灵气"按钮洗炼，"灵气"每次消耗100个天地灵气
        3. 点击武装的图标，可以打开详情面板，面板内可操作升星、镶嵌、通灵等进阶功能
        4. 锻造、战斗等事件会消耗武装的耐久，耐久为0时，将不再提供任何增益
        5. 不同宠物的武装不通用，出售宠物后也会丢失武装，请知悉
        `;
    showInfoBox(message);
}

function closeInlayGemDisplay() {
    const gemUI = document.getElementById('inlayGemUI');
    gemUI.style.display = 'none'; // 显示镶嵌界面
    currentKey = null;
}
        
// 打开镶嵌宝石界面，动态根据传入的 key 显示指定装备的镶嵌界面
let currentKey = null; // 全局变量用于存储当前的 key

// 打开镶嵌宝石界面
function openInlayGemDisplay(key) {
    const arm = armsAttributes[key];
    if (!arm) {
        showInfoBox("该装备不存在！");
        return;
    }

    // 检查装备是否解锁
    if (!arm.unlocked) {
        showInfoBox("装备未解锁！");
        return;
    }

    currentKey = key;

    // 显示装备的 UI 信息
    const gemUI = document.getElementById('inlayGemUI');
    gemUI.style.display = 'block';

    // 根据星级数显示相应数量的星星
    const starDisplay = '⭐️'.repeat(arm.armState.starLevel || 0);
    
    // 更新通灵显示
    updateDivinedDisplay(armsAttributes[key]);

    // 更新星级显示为星星符号
    document.getElementById('starLevel').innerText = starDisplay;

    // 处理升星按钮显示
    document.getElementById('upgradeStarBtn').style.display = 
        (arm.armState.starLevel >= 13) ? 'none' : 'block';

    // 更新基础属性显示
    document.getElementById('baseAttribute').innerText = 
        `+ ${Math.floor(arm.value)} ${translateAttribute(arm.attribute)}`;

    // 更新装备图片
    document.getElementById('zhuang-bei').src = arm.url;

    // 更新装备描述
    document.getElementById('arm-description').innerText = 
        arm.description || '威力不俗的装备，尚有开发空间';

    // 更新装备名称（处理觉醒状态）
    const armNameElement = document.getElementById('arm-name');
    if (arm.armState.awakened) {
        armNameElement.style.color = 'red';
        armNameElement.innerText = `光芒的灵兽${arm.type}（觉醒）`;
    } else {
        armNameElement.style.color = 'orange';
        armNameElement.innerText = `光芒的灵兽${arm.type}（神品）`;
    }

    // 更新宝石孔信息
    document.getElementById('gem-slots-number').innerText = 
        `当前孔数/最大孔数:${arm.armState.gemSlots.current}/${arm.armState.gemSlots.max}`;

    // 更新耐久度显示
    document.getElementById('endurance-display').innerText = 
        `${arm.enduranceValue}`;

    // 更新装备类型显示
    document.getElementById('arm-type-display').innerText = arm.type;

    // 显示当前宝石孔状态
    displayGemSlots(arm);

    // 处理觉醒按钮
    updateAwakeningButton(arm, key);
}

// 分离觉醒按钮更新逻辑为独立函数
function updateAwakeningButton(arm, key) {
    // 移除已存在的觉醒按钮容器
    const existingBtnContainer = document.getElementById('awakeningBtnContainer');
    if (existingBtnContainer) {
        existingBtnContainer.remove();
    }

    // 创建新的按钮容器
    const btnContainer = document.createElement('div');
    btnContainer.id = 'awakeningBtnContainer';
    btnContainer.style.display = 'flex';
    btnContainer.style.justifyContent = 'center';
    btnContainer.style.marginLeft = '10px';

    const awakeningBtn = document.createElement('button');
    awakeningBtn.id = 'awakeningBtn';
    awakeningBtn.innerText = '觉醒';
    awakeningBtn.style = `
        border: 1px solid rgb(111, 57, 28);
        background: linear-gradient(rgb(228, 127, 71), rgb(206, 102, 51), rgb(150, 61, 28));
        box-shadow: rgb(135, 67, 31) 0px 0px 2px 1px inset;
        font-size: 12px;
        border-radius: 5px;
        color: rgb(249, 222, 155);
        padding: 2px 10px;
        cursor: pointer;
        margin: 2px;
        transition: transform 0.1s, box-shadow 0.1s;
    `;
    
    if (arm.armState.awakened) {
        awakeningBtn.disabled = true;
        awakeningBtn.style.opacity = '0';
        awakeningBtn.style.cursor = 'not-allowed';
        awakeningBtn.innerText = '';
    } else {
        awakeningBtn.addEventListener('click', () => handleArmAwakening(arm, key));
    }

    btnContainer.appendChild(awakeningBtn);
    document.getElementById('bottom-detail-second-container').appendChild(btnContainer);
}

// 显示当前宝石孔状态
function displayGemSlots(arm) {
    // 根据觉醒状态决定最大显示数量
    const maxSlots = arm.armState.awakened ? 12 : 10;
    
    // 遍历所有可能的槽位（固定的12个HTML元素）
    for (let i = 0; i < 12; i++) {
        const slotElement = document.getElementById(`slot${i + 1}`);
        if (!slotElement) continue;

        // 未觉醒时隐藏超出10个的槽位，觉醒后显示12个
        if (i >= maxSlots) {
            slotElement.parentElement.style.display = 'none';
            continue;
        }

        // 显示已开启的槽位
        if (i < arm.armState.gemSlots.current) {
            slotElement.parentElement.style.display = 'block';
            
            const gemSlotColor = arm.armState.gemSlots.colors[i] || randomGemColor();
            const inlaid = arm.armState.gemSlots.inlaid[i];

            if (inlaid) {
                slotElement.innerHTML = `<span style="color:${gemSlotColor};">●</span> ${inlaid.displayName}${translateGem(inlaid.name)}`;
            } else {
                slotElement.innerHTML = `<span style="color:${gemSlotColor};">〇 ${translateColor(gemSlotColor)}宝石孔</span>`;
            }
            slotElement.classList.add('slot');
        } else {
            slotElement.parentElement.style.display = 'none';
        }
    }

    // 更新显示的最大孔数
    document.getElementById('gem-slots-number').innerText = 
        `当前孔数/最大孔数:${arm.armState.gemSlots.current}/${maxSlots}`;
}

// 更新单个宝石孔显示
function updateGemSlotDisplay(arm, gem, slotIndex) {
    const maxSlots = arm.armState.awakened ? 12 : 10;
    
    // 检查是否是有效的槽位
    if (slotIndex >= maxSlots || slotIndex >= arm.armState.gemSlots.current) {
        return;
    }

    const slotElement = document.getElementById(`slot${slotIndex + 1}`);
    if (!slotElement) return;

    const gemSlotColor = arm.armState.gemSlots.colors[slotIndex] || randomGemColor();
    
    if (gem) {
        slotElement.innerHTML = `<span style="color:${gemSlotColor};">●</span> ${gem.displayName}${translateGem(gem.name)}`;
    } else {
        slotElement.innerHTML = `<span style="color:${gemSlotColor};">〇 ${translateColor(gemSlotColor)}宝石孔</span>`;
    }
    slotElement.classList.add('slot');
}

// 辅助函数：确保UI中有足够的宝石槽位元素
function ensureGemSlotElements(maxSlots) {
    const container = document.querySelector('#inlayGemUI .gem-slots-container');
    if (!container) return;

    // 获取现有的槽位数量
    const existingSlots = container.querySelectorAll('.slot-wrapper').length;

    // 如果需要，添加新的槽位元素
    for (let i = existingSlots + 1; i <= maxSlots; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'slot-wrapper';
        wrapper.style = `
            display: none;
            padding: 5px;
            margin: 2px;
            border: 1px solid #6f391c;
            background: linear-gradient(#E47F47, #CE6633, #963D1C);
            box-shadow: inset 0px 0px 2px 1px #87431F;
            border-radius: 5px;
            cursor: pointer;
        `;

        const slotDiv = document.createElement('div');
        slotDiv.id = `slot${i}`;
        slotDiv.className = 'slot';
        wrapper.appendChild(slotDiv);
        container.appendChild(wrapper);

        // 添加点击事件处理
        wrapper.addEventListener('click', function(event) {
            const slotIndex = i - 1;
            const arm = armsAttributes[currentKey];
            if (!arm) return;

            const inlaid = arm.armState.gemSlots.inlaid[slotIndex];
            if (inlaid) {
                removeGemFromSlot(arm, slotIndex);
            } else {
                handleGemInlay(arm, slotIndex);
            }
        });
    }
}

// 随机生成宝石孔颜色
function randomGemColor() {
    const colors = ["yellow", "blue", "pink", "purple"];
    const probabilities = [0.4, 0.4, 0.1, 0.1]; // 各种颜色的概率
    const randomValue = Math.random();
    let cumulativeProbability = 0;
    for (let i = 0; i < colors.length; i++) {
        cumulativeProbability += probabilities[i];
        if (randomValue < cumulativeProbability) {
            return colors[i];
        }
    }
    return colors[0]; // 默认返回黄色
}

// 刷新宝石孔颜色
function refreshGemSlots(arm) {
    const refreshItem = jinnangItems.find(item => item.name === 'refreshGemSlot');
    const inlaidGems = arm.armState.gemSlots.inlaid;
    const inlaidNums = inlaidGems.filter(gem => gem !== null).length; //find语法只能返回在数组中找到的第一个对象，而filter可以找到所有符合条件的对象
    const availableSlots = arm.armState.gemSlots.current - inlaidNums;
    
    if (refreshItem.quantity < availableSlots) {
        showInfoBox('你没有足够的宝石洗孔符！洗孔符的单次消耗数量与可镶嵌孔数一致，请注意消耗。', null, null, 'red');
        return;
    }

    let hasRefreshed = false; // 用于记录是否有孔位被刷新
    
    arm.armState.gemSlots.colors.forEach((color, index) => {
        // 仅刷新未镶嵌的孔
        if (!arm.armState.gemSlots.inlaid[index] || arm.armState.gemSlots.inlaid[index].length === 0) {
            useItem('refreshGemSlot', 1);
            
            let newColor;
            do {
                newColor = randomGemColor();
                const colorCount = arm.armState.gemSlots.colors.filter(c => c === newColor).length;
                if (colorCount < 6) {
                    break;
                }
            } while (true);
            
            arm.armState.gemSlots.colors[index] = newColor;
            hasRefreshed = true; // 标记至少有一个孔位被刷新
        }
    });

    if (!hasRefreshed) {
        showInfoBox('当前没有可镶嵌的孔进行刷新！', null, null, 'red');
    } 

    displayGemSlots(arm); // 刷新界面显示
}

// 打孔操作
function punchHole(arm) {
    const maxSlots = arm.armState.awakened ? 12 : 10;
    
    if (arm.armState.gemSlots.current >= maxSlots) {
        showInfoBox("宝石孔已达到最大数量！");
        return;
    }

    const punchItem = jinnangItems.find(item => item.name === 'punchHoleTool');
    if (punchItem.quantity <= 0) {
        showInfoBox('你没有打孔工具，开孔失败', null, null, 'red');
        return;
    }
    
    useItem('punchHoleTool', 1);
    arm.armState.gemSlots.current += 1;
    
    // 确保颜色和镶嵌数组有对应的位置
    if (!arm.armState.gemSlots.colors[arm.armState.gemSlots.current - 1]) {
        arm.armState.gemSlots.colors[arm.armState.gemSlots.current - 1] = randomGemColor();
    }
    if (!arm.armState.gemSlots.inlaid[arm.armState.gemSlots.current - 1]) {
        arm.armState.gemSlots.inlaid[arm.armState.gemSlots.current - 1] = null;
    }

    showInfoBox('消耗一个任意打孔器，成功开启一个孔位');
    displayGemSlots(arm);
}

// 处理觉醒时的额外孔位
function handleAwakeningSlots(arm) {
    // 添加2个新孔位，但不超过12个
    arm.armState.gemSlots.current = Math.min(arm.armState.gemSlots.current + 2, 12);
    
    // 确保新开启的孔位有对应的颜色和空状态
    for (let i = 0; i < arm.armState.gemSlots.current; i++) {
        if (!arm.armState.gemSlots.colors[i]) {
            arm.armState.gemSlots.colors[i] = randomGemColor();
        }
        if (!arm.armState.gemSlots.inlaid[i]) {
            arm.armState.gemSlots.inlaid[i] = null;
        }
    }
}



// 合成宝石
function mergeGem(fullName, refreshCallback = null) {
    const levelMap = {
        '一': 1,
        '二': 2,
        '三': 3,
        '四': 4,
        '五': 5,
        '六': 6,
        '七': 7
    };

    const gemLevelChinese = fullName.split('级')[0];  // 获取宝石的汉字等级，比如 '二'
    const gemLevel = levelMap[gemLevelChinese];  // 转换为数字等级
    const gemName = fullName.split('级')[1];  // 获取宝石的名称，比如 '天寿石'

    // 检查合成符文的数量
    const mergeAmuletItem = jinnangItems.find(item => item.name === 'mergeAmulet' && item.quantity > 0);
    const mergeAmuletPlusItem = jinnangItems.find(item => item.name === 'mergeAmuletPlus' && item.quantity > 0);

    if (!gemLevel) {
        showInfoBox('无法识别宝石的等级。');
        return;
    }

    const currentGem = gemData.find(gem => gem.name === gemName && gem.level === gemLevel);
    if (!currentGem) {
        showInfoBox('未找到可合成的宝石，或者宝石已经达到最高等级。');
        return;
    }

    const nextGem = gemData.find(gem => gem.name === gemName && gem.level === gemLevel + 1);
    if (!nextGem) {
        showInfoBox('该宝石已经达到最高等级，无法继续合成。');
        return;
    }

    const currentGemItem = jinnangItems.find(item => item.displayName === fullName);
    if (!currentGemItem || currentGemItem.quantity < 3) {
        showInfoBox('你没有足够的宝石进行合成，需要3个同级别的宝石。');
        return;
    }

    // 合成 1~3 级的宝石时使用 mergeAmuletItem
    if (gemLevel >= 1 && gemLevel <= 3) {
        if (!mergeAmuletItem) {
            showInfoBox('你没有足够的低级宝石合成符。');
            return;
        }
        useItem('mergeAmulet', 1); // 使用1个合成符文
    } 
    // 合成 4~6 级的宝石时使用 mergeAmuletPlusItem
    else if (gemLevel >= 4 && gemLevel <= 6) {
        if (!mergeAmuletPlusItem) {
            showInfoBox('你没有足够的高级宝石合成符。');
            return;
        }
        useItem('mergeAmuletPlus', 1); // 使用1个高级合成符文
    }

    // 扣除3个当前宝石
    useItem(currentGemItem.name, 3);

    // 生成新宝石
    generateGemToJinnang(nextGem.color, nextGem.level, nextGem.name, nextGem.attribute, nextGem.value, 1);

    // 显示合成成功的提示
    showInfoBox(`成功合成了一颗${nextGem.level}级${nextGem.name}！`);

    // 合成成功后调用刷新函数
    if (refreshCallback) {
        refreshCallback();
    }
}

// 处理镶嵌宝石逻辑
function handleGemInlay(arm, slotIndex) {
    const gemSlotColor = arm.armState.gemSlots.colors[slotIndex];

    // 移除之前可能存在的 gemSelectionDiv，防止重复叠加
    const existingGemSelectionDiv = document.getElementById('gemSelectionDiv');
    if (existingGemSelectionDiv) {
        existingGemSelectionDiv.remove();
    }

    // 创建并展示可用宝石，供玩家选择镶嵌
    const gemSelectionDiv = document.createElement('div');
    gemSelectionDiv.id = 'gemSelectionDiv';
    gemSelectionDiv.style = 'background-color: #6f391c;display: flex;flex-flow: column;align-items: center;width: 95%;box-shadow: inset rgb(111, 57, 28) 0px 0px 2px 1px;max-height: 480px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);border: 1px solid black;font-size: 14px;flex-direction: column;justify-content: flex-start;padding: 2px;';

    const cancelInlayBtn = document.createElement('button');
    cancelInlayBtn.innerText = '关闭';
    cancelInlayBtn.style = 'display: flex;gap: 5px;align-items: center;justify-content: center;padding: 5px;text-align: center;background-image: url(https://pic.imgdb.cn/item/66bf32d9d9c307b7e9995d58.png);background-repeat: repeat;background-size: contain;color: rgb(227, 167, 59);cursor: pointer;box-shadow: rgb(227, 167, 59) 0px 1px 2px 0px inset;border: 1px solid black;position: relative;font-size: 16px; width:100%;';
    cancelInlayBtn.addEventListener('click', function() {
        gemSelectionDiv.remove();
    });
    gemSelectionDiv.appendChild(cancelInlayBtn);

    // 创建容器包裹每个 gemDetailContainer
    const gemContainer = document.createElement('div');
    gemContainer.style = 'overflow-y: scroll;width: 99%;display: flex;flex-direction: column;background-image: url(https://pic.imgdb.cn/item/663885620ea9cb14033e4f6e.png);background-repeat: repeat;background-size: auto;';
    gemSelectionDiv.appendChild(gemContainer); // 只需添加一次 gemContainer

    // 刷新宝石显示内容的函数
    const refreshGemSelection = () => {
        // 清空现有的宝石列表
        gemContainer.innerHTML = '';

        const availableGems = jinnangItems.filter(item => item.name.includes(`${gemSlotColor}Gem`) && item.quantity > 0);
        

        if (availableGems.length === 0) {
            showInfoBox("没有可用的宝石！");
            return;
        }

        availableGems.forEach(gem => {
            // 创建每个宝石的容器
            const gemDetailContainer = document.createElement('div');
            gemDetailContainer.style = 'display: flex;flex-direction: row;align-items: center;width: 100%;justify-content: space-between;border-bottom: 1px solid rgb(135, 67, 31);background-image: url(https://pic.imgdb.cn/item/663885620ea9cb14033e4f6e.png);background-repeat: repeat;background-size: auto;height: 100%;'; // 确保内容居中对齐

            const gemIcon = document.createElement('img');
            gemIcon.src = gem.url;
            gemIcon.style = 'width: 45px;height: 45px;margin-right: 10px;border: 1px solid black;margin-left: 5px;';
            gemDetailContainer.appendChild(gemIcon);

            const gemInfo = document.createElement('span');
            const gemQuantity = gem.quantity;
            gemInfo.innerText = `${gem.displayName}${translateGem(gem.name)}(${gemQuantity})`;
            gemDetailContainer.appendChild(gemInfo);

            const gemButtonContainer = document.createElement('div');
            gemButtonContainer.style = 'display: flex;gap: 5px;flex-direction: column;padding: 5px;';
            
            // 添加镶嵌按钮
            const inlayButton = document.createElement('button');
            inlayButton.innerText = '镶嵌';
            inlayButton.style = 'border: 1px solid rgb(111, 57, 28);background: linear-gradient(rgb(228, 127, 71), rgb(206, 102, 51), rgb(150, 61, 28));box-shadow: rgb(135, 67, 31) 0px 0px 2px 1px inset;font-size: 12px;border-radius: 5px;color: rgb(249, 222, 155);padding: 2px 10px;cursor: pointer;transition: transform 0.1s, box-shadow 0.1s;';
            inlayButton.addEventListener('click', function() {
                const inlayAmuletItem = jinnangItems.find(item => item.name === 'inlayAmulet');
                if (inlayAmuletItem.quantity <= 0) {
                    showInfoBox('你没有镶嵌符文，无法进行镶嵌', null, null, 'red');
                    return;
                }
                useItem('inlayAmulet', 1); // 使用镶嵌符文
                useItem(`${gem.name}`, 1);  // 扣除一个宝石
                
                applyGemBonus(arm, gem, slotIndex); // 应用宝石增益
                updateGemSlotDisplay(arm, gem, slotIndex); // 更新界面
                gemSelectionDiv.remove(); // 移除宝石详情
            });
            gemButtonContainer.appendChild(inlayButton);

            // 添加合成按钮
            const mergeButton = document.createElement('button');
            mergeButton.innerText = '合成';
            mergeButton.style = 'border: 1px solid rgb(111, 57, 28);background: linear-gradient(rgb(60, 120, 200), rgb(40, 90, 150), rgb(30, 70, 120));box-shadow: rgb(60, 120, 200) 0px 0px 2px 1px inset;font-size: 12px;border-radius: 5px;color: rgb(249, 222, 155);padding: 2px 10px;cursor: pointer;transition: transform 0.1s, box-shadow 0.1s;';
            mergeButton.addEventListener('click', function() {
                const gemFullName = gem.displayName;  // 例如 '二级天寿石'
                mergeGem(gemFullName, refreshGemSelection);  // 直接传入宝石的完整名字和刷新函数
            });

            gemButtonContainer.appendChild(inlayButton);
            gemButtonContainer.appendChild(mergeButton); // 添加合成按钮
            gemDetailContainer.appendChild(gemButtonContainer);

            gemContainer.appendChild(gemDetailContainer); // 添加 gemDetailContainer 到 gemContainer
        });
    };

    refreshGemSelection();  // 初次调用以显示宝石列表
    document.getElementById('inlayGemUI').appendChild(gemSelectionDiv);
}

// 应用宝石增益
function applyGemBonus(arm, gem, slotIndex) {
    const bonusMatch = gem.name.match(/(\w+)Gem_(\w+)_(\d+)/);
    if (bonusMatch) {
        const attribute = bonusMatch[2];
        const bonusValue = parseInt(bonusMatch[3]);

        // 更新 gemAttributes 中的对应属性
        if (arm.armState.gemSlots.gemAttribute[attribute] !== undefined) {
            arm.armState.gemSlots.gemAttribute[attribute] += bonusValue;
        }

        // 标记该宝石孔已镶嵌宝石
        arm.armState.gemSlots.inlaid[slotIndex] = gem;

        // 立即更新显示
        updateGemSlotDisplay(arm, gem, slotIndex);
        updateAttributePanel(); // 更新属性面板
    }
}

// 摘除已镶嵌的宝石
function removeGemFromSlot(arm, slotIndex) {
    const gem = arm.armState.gemSlots.inlaid[slotIndex];
    const removeAmuletItem = jinnangItems.find(item => item.name === 'removeAmulet');
    
    if (removeAmuletItem.quantity <= 0) {
        showInfoBox('你没有宝石摘除符文，无法摘除已经镶嵌的宝石！',null,null,'red');
        return;
    }

    showInfoBox('摘除宝石需要用到特殊的摘除符文，确认请继续',
               () => {
                    if (gem) {
                        const bonusMatch = gem.name.match(/(\w+)Gem_(\w+)_(\d+)/);
                        if (bonusMatch) {
                            const attribute = bonusMatch[2];
                            const bonusValue = parseInt(bonusMatch[3]);
                
                            // 从 gemAttributes 中扣除对应属性
                            if (arm.armState.gemSlots.gemAttribute[attribute] !== undefined) {
                                arm.armState.gemSlots.gemAttribute[attribute] -= bonusValue;
                            }
                
                            arm.armState.gemSlots.inlaid[slotIndex] = null; // 清除已镶嵌的宝石
                            addItemToJinnang(`${gem.name}`, 1); // 归还宝石
                
                            // 立即更新显示
                            updateGemSlotDisplay(arm, null, slotIndex);
                            updateAttributePanel(); // 更新属性面板
                            useItem('removeAmulet',1);
                        }
                    }
               },
                () => {return;},
                'red');
}

// 翻译宝石
function translateGem(gemName) {
    const attributeMap = {
        physicalAttack: '物攻',
        magicAttack: '法攻',
        physicalDefense: '物防',
        magicDefense: '法防',
        speed: '速度',
        health: '生命',
        mana: '法力',
        endurance: '耐力',
        intelligence: '智力',
        strength: '强壮',
        agility: '敏捷',
        faith: '信仰'
    };

    const colorMap = {
        pink: '粉红色',
        blue: '天蓝色',
        yellow: '鹅黄色',
        purple: '淡紫色'
    };

    const match = gemName.match(/(\w+)Gem_(\w+)_(\d+)/);
    if (match) {
        const color = match[1];
        const attribute = match[2];
        const value = match[3];

        return `(+${value} ${attributeMap[attribute]} )`;
    }
    return gemName; // 如果没有匹配，返回原始名称
}

// 翻译宝石孔颜色
function translateColor(color) {
    const colorMap = {
        yellow: '鹅黄色',
        blue: '天蓝色',
        pink: '粉红色',
        purple: '淡紫色'
    };
    return colorMap[color] || "未知";
}

// 翻译属性
function translateAttribute(attribute) {
    const attributeMap = {
        physicalAttack: '物理攻击',
        magicAttack: '法术攻击',
        physicalDefense: '物理防御',
        magicDefense: '法术防御',
        speed: '速度',
        health: '生命',
        mana: '法力',
        endurance: '耐力',
        intelligence: '智力',
        strength: '强壮',
        agility: '敏捷',
        faith: '信仰'
    };
    return attributeMap[attribute] || "无";
}

// 升星操作
function upgradeStar(arm) {
    if (arm.armState.starLevel >= 13) {
        showInfoBox("星级已达到最大值！");
        return;
    }
    
    const infiniteGem = jinnangItems.find(item => item.name === 'infiniteGem');
    if (infiniteGem && infiniteGem.quantity > 0) {
        showInfoBox(
            '你有神奇的无限宝石，是否使用？如果取消则手动升星',
            () => {
                useItem('infiniteGem', 1);
                arm.armState.starLevel = 13;
                // 更新属性和UI
                const baseValue = arm.armState.baseValue || arm.value;
                const starBonus = baseValue * arm.armState.starLevel * 0.05;
                arm.value = Math.round(baseValue + starBonus);
                const starDisplay = '⭐️'.repeat(arm.armState.starLevel);
                document.getElementById('starLevel').innerText = starDisplay;
                document.getElementById('baseAttribute').innerText = `+ ${Math.floor(arm.value)} ${translateAttribute(arm.attribute)}`;
                document.getElementById('upgradeStarBtn').style.display = 'none';
                updateAttributePanel();
                refreshAndCheckAllArmsEndurance();
                showInfoBox('武器已升级到13星！');
            },
            () => {
                // 以下是原有的升星逻辑
                const starGemOneToSeven = jinnangItems.find(item => item.name === 'starGem');
                const starGemEightToThirteen = jinnangItems.find(item => item.name === 'starGemPlus');
                
                if (arm.armState.starLevel <= 7) {
                    if (starGemOneToSeven.quantity < 100) {
                        showInfoBox('你的升星宝石（极品）不足，无法升星！', null, null, 'red');
                        return;
                    }
                } else {
                    if (starGemEightToThirteen.quantity < 100) {
                        showInfoBox('你的升星宝石（神品）不足，无法升星！', null, null, 'red');
                        return;
                    }
                }
                
                const successChance = Math.random();
                let successThreshold = arm.armState.starLevel <= 7 ? 0.8 : 0.6;
                
                if (arm.armState.starLevel <= 7) {
                    useItem('starGem', 100);
                } else {
                    useItem('starGemPlus', 100);
                }
                
                if (successChance < successThreshold) {
                    arm.armState.starLevel += 1;
                } else {
                    arm.armState.starLevel = Math.max(arm.armState.starLevel - (arm.armState.starLevel <= 7 ? 1 : 2), 0);
                }
                
                const baseValue = arm.armState.baseValue || arm.value;
                const starBonus = baseValue * arm.armState.starLevel * 0.05;
                arm.value = Math.round(baseValue + starBonus);
                
                const starDisplay = '⭐️'.repeat(arm.armState.starLevel);
                document.getElementById('starLevel').innerText = starDisplay;
                document.getElementById('baseAttribute').innerText = `+ ${Math.floor(arm.value)} ${translateAttribute(arm.attribute)}`;
                document.getElementById('upgradeStarBtn').style.display = arm.armState.starLevel >= 13 ? 'none' : 'block';
                updateAttributePanel();
                refreshAndCheckAllArmsEndurance();
            },
            'red'
        );
        return;
    }
    
    // 如果没有无限宝石，执行原有的升星逻辑
    const starGemOneToSeven = jinnangItems.find(item => item.name === 'starGem');
    const starGemEightToThirteen = jinnangItems.find(item => item.name === 'starGemPlus');
    
    if (arm.armState.starLevel <= 7) {
        if (starGemOneToSeven.quantity < 100) {
            showInfoBox('你的升星宝石（极品）不足，无法升星！', null, null, 'red');
            return;
        }
    } else {
        if (starGemEightToThirteen.quantity < 100) {
            showInfoBox('你的升星宝石（神品）不足，无法升星！', null, null, 'red');
            return;
        }
    }
    
    const successChance = Math.random();
    let successThreshold = arm.armState.starLevel <= 7 ? 0.8 : 0.6;
    
    if (arm.armState.starLevel <= 7) {
        useItem('starGem', 100);
    } else {
        useItem('starGemPlus', 100);
    }
    
    if (successChance < successThreshold) {
        arm.armState.starLevel += 1;
    } else {
        arm.armState.starLevel = Math.max(arm.armState.starLevel - (arm.armState.starLevel <= 7 ? 1 : 2), 0);
    }
    
    const baseValue = arm.armState.baseValue || arm.value;
    const starBonus = baseValue * arm.armState.starLevel * 0.05;
    arm.value = Math.round(baseValue + starBonus);
    
    const starDisplay = '⭐️'.repeat(arm.armState.starLevel);
    document.getElementById('starLevel').innerText = starDisplay;
    document.getElementById('baseAttribute').innerText = `+ ${Math.floor(arm.value)} ${translateAttribute(arm.attribute)}`;
    document.getElementById('upgradeStarBtn').style.display = arm.armState.starLevel >= 13 ? 'none' : 'block';
    updateAttributePanel();
    refreshAndCheckAllArmsEndurance();
}

// 套装效果全局变量
let suitBonus = {
    endurance: 0,
    agility: 0,
    physicalAttack: 0,
    magicAttack: 0
};

function applySuitEffects() {
    // 重置套装加成
    suitBonus = {
        endurance: 0,
        agility: 0,
        physicalAttack: 0,
        magicAttack: 0
    };
    
    // 统计当前觉醒武装的数量
    let awakenedCount = 0;
    
    // 计算当前觉醒武装的数量
    Object.keys(armsAttributes).forEach(key => {
        const arm = armsAttributes[key];
        if (arm.armState && arm.armState.awakened) {
            awakenedCount++;
        }
    });
    
    // 根据觉醒武装数量计算套装加成
    if (awakenedCount >= 2) {
        suitBonus.endurance += 200; // 两件套效果: +200耐力
    }
    
    if (awakenedCount >= 4) {
        suitBonus.physicalAttack += 1000; // 四件套效果: +1000物理攻击
        suitBonus.magicAttack += 1000;    // 四件套效果: +1000法术攻击
    }
    
    if (awakenedCount >= 6) {
        suitBonus.agility += 400; // 六件套效果: +400敏捷
    }
    
    // 更新套装效果显示元素
    const suitBonusElement = document.getElementById("suit-bonus");
    if (suitBonusElement) {
        let suitText = "";
        if (awakenedCount >= 8) {
            suitText = "八件套";
        } else if (awakenedCount >= 6) {
            suitText = "六件套";
        } else if (awakenedCount >= 4) {
            suitText = "四件套";
        } else if (awakenedCount >= 2) {
            suitText = "两件套";
        }
        
        if (suitText) {
            suitBonusElement.innerText = suitText;
            suitBonusElement.style.display = "block";
            suitBonusElement.style.color = 'red';
        } else {
            suitBonusElement.style.display = "block";
            suitBonusElement.innerText = '无';
        }
    }
    
    // 准备套装效果描述数组，用于显示
    let effectDescriptions = [];
    if (awakenedCount >= 2) effectDescriptions.push("两件套效果: +200耐力");
    if (awakenedCount >= 4) effectDescriptions.push("四件套效果: +1000物理攻击, +1000法术攻击");
    if (awakenedCount >= 6) effectDescriptions.push("六件套效果: +400敏捷");
    if (awakenedCount >= 8) effectDescriptions.push("八件套效果: 在执行攻击（非绝技、施毒）时，20%概率吸取等同此次伤害5‰的生命值，吸取量不超过50万");
    
    // 显示套装效果信息（仅在函数被直接调用显示）
    if (effectDescriptions.length > 0 && new Error().stack.split('\n').length <= 3) {
        const effectMessage = "当前觉醒武装数量: " + awakenedCount + "\n" +
                             "激活套装效果:\n" + 
                             effectDescriptions.join("\n");
        
        showInfoBox(effectMessage, null, null, 'crimson');
    }
    
    return awakenedCount;
}
    
//初始化觉醒状态
function resetArmsAwakenState() {
    Object.keys(armsAttributes).forEach(key => {
        const arm = armsAttributes[key];
        // 检查是否存在 armState
        if (!arm.armState) {
            arm.armState = {
                starLevel: 0,
                baseValue: 0,
                awakened: false,
                gemSlots: {
                    current: 1,
                    max: 10,
                    colors: [randomGemColor()],
                    inlaid: [null],
                    gemAttribute: {
                        physicalAttack: 0,
                        magicAttack: 0,
                        physicalDefense: 0,
                        magicDefense: 0,
                        speed: 0,
                        health: 0,
                        mana: 0
                    }
                }
            };
        } else if (arm.armState.awakened === undefined) {
            // 如果有 armState 但没有 awakened 属性
            arm.armState.awakened = false;
        }
    });
    console.log('武装觉醒状态已重置');
}

// 1. 首先在 armsAttributes 的 armState 中添加觉醒状态标记
function handleArmAwakening(arm, key) {  // 添加 key 参数
    if (!arm || !arm.unlocked) {
        showInfoBox("武装未解锁，无法觉醒！", null, null, 'red');
        return;
    }

    if (arm.armState.awakened) {
        showInfoBox("该武装已经觉醒！", null, null, 'red');
        return;
    }

    // 获取玩家想要使用的材料倍数
    showInfoBox(
        "武装通过觉醒可以得到极大强化，但觉醒后的武装将无法再次锻造属性，且无法重置觉醒状态，请特别注意。\n\n请选择觉醒材料倍数(1-5倍)，每增加1倍材料(原始宠物武装+1锭金)提升15%成功率。\n" +
        "1倍：15%成功率，消耗1个原始武装+1锭金\n" +
        "2倍：30%成功率，消耗2个原始武装+2锭金\n" +
        "3倍：45%成功率，消耗3个原始武装+3锭金\n" +
        "4倍：60%成功率，消耗4个原始武装+4锭金\n" +
        "5倍：75%成功率，消耗5个原始武装+5锭金",
        () => {
            const multiplierInput = document.createElement('input');
            multiplierInput.type = 'number';
            multiplierInput.min = 1;
            multiplierInput.max = 5;
            multiplierInput.value = 1;
            
            showInfoBox(
                "选择材料倍数：",
                () => {
                    const multiplier = parseInt(multiplierInput.value);
                    if (isNaN(multiplier) || multiplier < 1 || multiplier > 5) {
                        showInfoBox("请输入1-5之间的数字！", null, null, 'red');
                        return;
                    }

                    const requiredGold = 100000 * multiplier;
                    const requiredItems = multiplier;

                    // 检查条件
                    if (goldAmount < requiredGold) {
                        showInfoBox(`金子不足！需要${convertPrice(requiredGold)}`, null, null, 'red');
                        return;
                    }

                    const nativePetArmsItem = jinnangItems.find(item => item.name === 'nativePetArms');
                    if (!nativePetArmsItem || nativePetArmsItem.quantity < requiredItems) {
                        showInfoBox(`原始宠物武装不足！需要${requiredItems}个`, null, null, 'red');
                        return;
                    }

                    // 扣除资源
                    goldAmount -= requiredGold;
                    useItem('nativePetArms', requiredItems);
                    updateGoldDisplay(goldAmount);

                    // 计算成功率
                    const successRate = 0.15 * multiplier;
                    const isSuccess = Math.random() < successRate;

                    if (isSuccess) {
                        // 觉醒成功，只影响当前武装
                        arm.armState.awakened = true;
                        
                        // 基础属性翻倍
                        arm.value = Math.round(arm.value * 1.5);
                        arm.armState.baseValue = Math.round(arm.armState.baseValue * 1.5);

                        // 专门处理孔位升级
                        handleAwakeningSlots(arm);

                        // 更新显示
                        showInfoBox('觉醒成功！', null, null, 'green');
                        showPetArmsWindow();
                        
                        // 重新打开当前武装的面板以更新显示
                        if (currentKey === key) {
                            openInlayGemDisplay(key);
                        }
                        updateAttributePanel();
                    } else {
                        showInfoBox("觉醒失败！", null, null, 'red');
                    }
                },
                null,
                'black',
                multiplierInput
            );
        }
    );
}

const gemData = [
        { color: 'pink', level: 7, name: '天寿石', attribute: 'endurance', value: 233 },
        { color: 'pink', level: 7, name: '天机石', attribute: 'intelligence', value: 233 },
        { color: 'pink', level: 7, name: '天猛石', attribute: 'strength', value: 233 },
        { color: 'pink', level: 7, name: '天佑石', attribute: 'faith', value: 233 },
        { color: 'pink', level: 7, name: '天速石', attribute: 'agility', value: 233 },
        { color: 'pink', level: 6, name: '天寿石', attribute: 'endurance', value: 179 },
        { color: 'pink', level: 6, name: '天机石', attribute: 'intelligence', value: 179 },
        { color: 'pink', level: 6, name: '天猛石', attribute: 'strength', value: 179 },
        { color: 'pink', level: 6, name: '天佑石', attribute: 'faith', value: 179 },
        { color: 'pink', level: 6, name: '天速石', attribute: 'agility', value: 179 },
        { color: 'pink', level: 5, name: '天寿石', attribute: 'endurance', value: 119 },
        { color: 'pink', level: 5, name: '天机石', attribute: 'intelligence', value: 119 },
        { color: 'pink', level: 5, name: '天猛石', attribute: 'strength', value: 119 },
        { color: 'pink', level: 5, name: '天佑石', attribute: 'faith', value: 119 },
        { color: 'pink', level: 5, name: '天速石', attribute: 'agility', value: 119 },
        { color: 'pink', level: 4, name: '天寿石', attribute: 'endurance', value: 66 },
        { color: 'pink', level: 4, name: '天机石', attribute: 'intelligence', value: 66 },
        { color: 'pink', level: 4, name: '天猛石', attribute: 'strength', value: 66 },
        { color: 'pink', level: 4, name: '天佑石', attribute: 'faith', value: 66 },
        { color: 'pink', level: 4, name: '天速石', attribute: 'agility', value: 66 },
        { color: 'pink', level: 3, name: '天寿石', attribute: 'endurance', value: 33 },
        { color: 'pink', level: 3, name: '天机石', attribute: 'intelligence', value: 33 },
        { color: 'pink', level: 3, name: '天猛石', attribute: 'strength', value: 33 },
        { color: 'pink', level: 3, name: '天佑石', attribute: 'faith', value: 33 },
        { color: 'pink', level: 3, name: '天速石', attribute: 'agility', value: 33 },
        { color: 'pink', level: 2, name: '天寿石', attribute: 'endurance', value: 17 },
        { color: 'pink', level: 2, name: '天机石', attribute: 'intelligence', value: 17 },
        { color: 'pink', level: 2, name: '天猛石', attribute: 'strength', value: 17 },
        { color: 'pink', level: 2, name: '天佑石', attribute: 'faith', value: 17 },
        { color: 'pink', level: 2, name: '天速石', attribute: 'agility', value: 17 },
        { color: 'pink', level: 1, name: '天寿石', attribute: 'endurance', value: 9 },
        { color: 'pink', level: 1, name: '天机石', attribute: 'intelligence', value: 9 },
        { color: 'pink', level: 1, name: '天猛石', attribute: 'strength', value: 9 },
        { color: 'pink', level: 1, name: '天佑石', attribute: 'faith', value: 9 },
        { color: 'pink', level: 1, name: '天速石', attribute: 'agility', value: 9 },
        { color: 'purple', level: 7, name: '天损石', attribute: 'physicalAttack', value: 772 },
        { color: 'purple', level: 7, name: '天勇石', attribute: 'magicAttack', value: 772 },
        { color: 'purple', level: 6, name: '天损石', attribute: 'physicalAttack', value: 594 },
        { color: 'purple', level: 6, name: '天勇石', attribute: 'magicAttack', value: 594 },
        { color: 'purple', level: 5, name: '天损石', attribute: 'physicalAttack', value: 396 },
        { color: 'purple', level: 5, name: '天勇石', attribute: 'magicAttack', value: 396 },
        { color: 'purple', level: 4, name: '天损石', attribute: 'physicalAttack', value: 220 },
        { color: 'purple', level: 4, name: '天勇石', attribute: 'magicAttack', value: 220 },
        { color: 'purple', level: 3, name: '天损石', attribute: 'physicalAttack', value: 110 },
        { color: 'purple', level: 3, name: '天勇石', attribute: 'magicAttack', value: 110 },
        { color: 'purple', level: 2, name: '天损石', attribute: 'physicalAttack', value: 55 },
        { color: 'purple', level: 2, name: '天勇石', attribute: 'magicAttack', value: 55 },
        { color: 'purple', level: 1, name: '天损石', attribute: 'physicalAttack', value: 28 },
        { color: 'purple', level: 1, name: '天勇石', attribute: 'magicAttack', value: 28 },
        { color: 'yellow', level: 7, name: '天英石', attribute: 'speed', value: 330 },
        { color: 'yellow', level: 7, name: '天贵石', attribute: 'health', value: 1564 },
        { color: 'yellow', level: 7, name: '天满石', attribute: 'mana', value: 1564 },
        { color: 'yellow', level: 6, name: '天英石', attribute: 'speed', value: 264 },
        { color: 'yellow', level: 6, name: '天贵石', attribute: 'health', value: 1264 },
        { color: 'yellow', level: 6, name: '天满石', attribute: 'mana', value: 1264 },
        { color: 'yellow', level: 5, name: '天英石', attribute: 'speed', value: 198 },
        { color: 'yellow', level: 5, name: '天贵石', attribute: 'health', value: 964 },
        { color: 'yellow', level: 5, name: '天满石', attribute: 'mana', value: 964 },
        { color: 'yellow', level: 4, name: '天英石', attribute: 'speed', value: 165 },
        { color: 'yellow', level: 4, name: '天贵石', attribute: 'health', value: 824 },
        { color: 'yellow', level: 4, name: '天满石', attribute: 'mana', value: 824 },
        { color: 'yellow', level: 3, name: '天英石', attribute: 'speed', value: 132 },
        { color: 'yellow', level: 3, name: '天贵石', attribute: 'health', value: 632 },
        { color: 'yellow', level: 3, name: '天满石', attribute: 'mana', value: 632 },
        { color: 'yellow', level: 2, name: '天英石', attribute: 'speed', value: 66 },
        { color: 'yellow', level: 2, name: '天贵石', attribute: 'health', value: 482 },
        { color: 'yellow', level: 2, name: '天满石', attribute: 'mana', value: 482 },
        { color: 'yellow', level: 1, name: '天英石', attribute: 'speed', value: 33 },
        { color: 'yellow', level: 1, name: '天贵石', attribute: 'health', value: 232 },
        { color: 'yellow', level: 1, name: '天满石', attribute: 'mana', value: 232 },
        { color: 'blue', level: 7, name: '天拜石', attribute: 'physicalDefense', value: 728 },
        { color: 'blue', level: 7, name: '天退石', attribute: 'magicDefense', value: 728 },
        { color: 'blue', level: 6, name: '天拜石', attribute: 'physicalDefense', value: 560 },
        { color: 'blue', level: 6, name: '天退石', attribute: 'magicDefense', value: 560 },
        { color: 'blue', level: 5, name: '天拜石', attribute: 'physicalDefense', value: 280 },
        { color: 'blue', level: 5, name: '天退石', attribute: 'magicDefense', value: 280 },
        { color: 'blue', level: 4, name: '天拜石', attribute: 'physicalDefense', value: 140 },
        { color: 'blue', level: 4, name: '天退石', attribute: 'magicDefense', value: 140 },
        { color: 'blue', level: 3, name: '天拜石', attribute: 'physicalDefense', value: 70 },
        { color: 'blue', level: 3, name: '天退石', attribute: 'magicDefense', value: 70 },
        { color: 'blue', level: 2, name: '天拜石', attribute: 'physicalDefense', value: 35 },
        { color: 'blue', level: 2, name: '天退石', attribute: 'magicDefense', value: 35 },
        { color: 'blue', level: 1, name: '天拜石', attribute: 'physicalDefense', value: 18 },
        { color: 'blue', level: 1, name: '天退石', attribute: 'magicDefense', value: 18 }
    ];
//生成宝石的函数
function generateGemToJinnang(color, level, name, attribute, value, quantity = 1) {
    // 颜色映射
    const colorMap = {
        'yellow': '鹅黄色',
        'pink': '粉红色',
        'blue': '天蓝色',
        'purple': '淡紫色'
    };

    // 等级映射
    const levelMap = {
        1: '一级',
        2: '二级',
        3: '三级',
        4: '四级',
        5: '五级',
        6: '六级',
        7: '七级'
    };

    // 属性映射
    const attributeMap = {
        physicalAttack: '物理攻击',
        magicAttack: '法术攻击',
        physicalDefense: '物理防御',
        magicDefense: '法术防御',
        speed: '速度',
        health: '生命',
        mana: '法力',
        endurance: '耐力',
        intelligence: '智力',
        strength: '强壮',
        agility: '敏捷',
        faith: '信仰'
    };

    // 图片 URL 映射（根据颜色和等级映射不同的图片）
    const imgUrlMap = {
        'pink_1': 'https://pic.imgdb.cn/item/66d9e89bd9c307b7e93b5c14.png',
        'pink_2': 'https://pic.imgdb.cn/item/66db0468d9c307b7e9895fc7.png',
        'pink_3': 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc59.png',
        'pink_4': 'https://pic.imgdb.cn/item/66dab4f5d9c307b7e917470a.png',
        'pink_5': 'https://pic.imgdb.cn/item/66dab344d9c307b7e915e434.png',
        'pink_6': 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc0d.png',
        'pink_7': 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc29.png',
        'purple_1': 'https://pic.imgdb.cn/item/66dab5fbd9c307b7e9182384.png',
        'purple_2': 'https://pic.imgdb.cn/item/66db0468d9c307b7e9895fc0.png',
        'purple_3': 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc4c.png',
        'purple_4': 'https://pic.imgdb.cn/item/66db0038d9c307b7e980b9ad.png',
        'purple_5': 'https://pic.imgdb.cn/item/66dab2d4d9c307b7e9157e85.png',
        'purple_6': 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc21.png',
        'purple_7': 'https://pic.imgdb.cn/item/66db062fd9c307b7e98aeddb.png',
        'yellow_1': 'https://pic.imgdb.cn/item/66d9e89bd9c307b7e93b5c08.png',
        'yellow_2': 'https://pic.imgdb.cn/item/66db0468d9c307b7e9895fe9.png',
        'yellow_3': 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc35.png',
        'yellow_4': 'https://pic.imgdb.cn/item/66dab660d9c307b7e9187d69.png',
        'yellow_5': 'https://pic.imgdb.cn/item/66dab47dd9c307b7e916e88c.png',
        'yellow_6': 'https://pic.imgdb.cn/item/66dab404d9c307b7e9167df8.png',
        'yellow_7': 'https://pic.imgdb.cn/item/66db0469d9c307b7e9895ffb.png',
        'blue_1': 'https://pic.imgdb.cn/item/66db093dd9c307b7e98dad0d.png',
        'blue_2': 'https://pic.imgdb.cn/item/66db0468d9c307b7e9895fd1.png',
        'blue_3': 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc41.png',
        'blue_4': 'https://pic.imgdb.cn/item/66dbff9dd9c307b7e9b7919f.png',
        'blue_5': 'https://pic.imgdb.cn/item/66db0b52d9c307b7e9914fba.png',
        'blue_6': 'https://pic.imgdb.cn/item/66db0b52d9c307b7e9914f8e.png',
        'blue_7': 'https://pic.imgdb.cn/item/66db0b52d9c307b7e9914f63.png'
    };

    // 生成宝石的唯一名称 (格式: colorGem_attribute_value)
    const gemName = `${color}Gem_${attribute}_${value}`;

    // 宝石显示的名称 (格式: 等级+name，例如: "一级天寿石")
    const displayName = `${levelMap[level]}${name}`;

    // 获取图片 URL
    const imgUrlKey = `${color}_${level}`;
    const imgUrl = imgUrlMap[imgUrlKey] || 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc59.png';  // 默认 URL

    // 生成描述信息
    let description = `${levelMap[level]}${name}，用于镶嵌在${colorMap[color]}宝石孔，可提供${value}点${attributeMap[attribute]}`;

    // 调用现有的函数生成宝石 item
    generateItemToJinnang(gemName, displayName, imgUrl, 500, quantity, description);
    // 示例调用: generateGemToJinnang('pink', 1, '天寿石', 'endurance', 7, 1); 
}

function getGem(color = null, level = null, name = null, attribute = null, value = null, quantity = null) {
    // 根据传入的参数进行筛选
    let filteredGems = gemData.filter(gem => {
        return (color === null || gem.color === color) &&
               (level === null || gem.level === parseInt(level)) &&
               (name === null || gem.name === name) &&
               (attribute === null || gem.attribute === attribute) &&
               (value === null || gem.value === parseInt(value));
    });

    // 如果没有传入数量参数，默认生成 1~2 个宝石
    const numGemsToGenerate = quantity ? parseInt(quantity) : Math.floor(Math.random() * 2) + 1;

    // 如果筛选出的宝石数量不足，提示信息并返回
    if (filteredGems.length === 0) {
        showInfoBox('没有符合条件的宝石');
        return;
    }

    // 随机选择宝石
    const shuffledGems = filteredGems.sort(() => 0.5 - Math.random()); // 随机排序
    const gemsToGenerate = shuffledGems.slice(0, numGemsToGenerate); // 返回前 numGems 个

    // 执行生成宝石
    gemsToGenerate.forEach(gem => {
        generateGemToJinnang(gem.color, gem.level, gem.name, gem.attribute, gem.value, 1);
    });

    // 生成简洁的提示信息
    const gemNames = gemsToGenerate.map(gem => `${gem.level}级${gem.name}`);
    const gemMessage = gemNames.join('，'); // 使用逗号隔开
    showInfoBox(`你获得了${gemMessage}`);
}


document.getElementById('upgradeStarBtn').addEventListener('click', function() {
    if (currentKey) {
        upgradeStar(armsAttributes[currentKey]);  // 使用当前装备的 key
    }
});

document.getElementById('punchHoleBtn').addEventListener('click', function() {
    if (currentKey) {
        punchHole(armsAttributes[currentKey]);  // 使用当前装备的 key
    }
});

document.getElementById('refreshSlotsBtn').addEventListener('click', function() {
    if (currentKey) {
        refreshGemSlots(armsAttributes[currentKey]);  // 使用当前装备的 key
    }
});

document.getElementById('gemSlots').addEventListener('click', function(event) {
    const target = event.target.closest('.slot'); // 确保找到包含 slot 类的元素
    if (target) {
        const slotId = target.id;
        const slotIndex = parseInt(slotId.replace('slot', '')) - 1;
        const arm = armsAttributes[currentKey]; // 使用当前打开的装备

        if (slotIndex < arm.armState.gemSlots.current) {
            const inlaid = arm.armState.gemSlots.inlaid[slotIndex];
            if (inlaid) {
                removeGemFromSlot(arm, slotIndex); // 移除已镶嵌的宝石
            } else {
                handleGemInlay(arm, slotIndex); // 处理镶嵌逻辑
            }
        }
    }
});

       
let specializations = {
    慧光辉耀: { 
        level: 0, 
        attribute: 'intelligence', 
        baseMultiplier: 0.055, 
        levelIncrement: 0.0035, 
        url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d94ce.png',
        isActive: false 
    },
    神魔之力: { 
        level: 0, 
        attributes: 'strength', 
        baseMultiplier: 0.055, 
        levelIncrement: 0.0035, 
        url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d9458.png',
        isActive: false 
    },
    坚韧之心: { 
        level: 0, 
        attributes: 'endurance', 
        baseMultiplier: 0.055, 
        levelIncrement: 0.0035, 
        url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d94db.png',
        isActive: false 
    },
    凌波微步: { 
        level: 0, 
        attributes: 'agility', 
        baseMultiplier: 0.055, 
        levelIncrement: 0.0035, 
        url: 'https://pic1.imgdb.cn/item/67920a40d0e0a243d4f722bb.png',
        isActive: false 
    },
    圣灵附体: { 
        level: 0, 
        attributes: 'faith', 
        baseMultiplier: 0.055, 
        levelIncrement: 0.0035, 
        url: 'https://pic1.imgdb.cn/item/67920a40d0e0a243d4f722ba.png',
        isActive: false 
    }
};

// 更新重置专精函数
function resetSpecialization() {
    showInfoBox('你将重置所有已开启的专精进度',
        () => resetSpec(),
        () => {
            addItemToJinnang('ignoranceWater', 1);
            showInfoBox('操作已取消！', null, null, 'red');
            return;
        },
        'red');
        
    function resetSpec() {
        Object.keys(specializations).forEach(key => {
            specializations[key].level = 0;
            specializations[key].isActive = false;
        });
        transformPet();
        showInfoBox('专精进度已全部重置！', null, null, 'red');
    }
}

// 更新专精状态变更处理函数
function handleSpecializationChange(specKey, activate) {
    if (activate) {
        if (useItem('enhanceBowl', 1)) {
            specializations[specKey].isActive = true;
            showInfoBox(`在固元鼎的指引下，你的宠物选择了${specKey}专精！`);
        } else {
            showInfoBox("您还没有固元鼎，此道具可通过开启奇馈宝箱概率获得。");
            return;
        }
    } else {
        if (useItem('ignoranceWater', 1)) {
            specializations[specKey].isActive = false;
            showInfoBox("清心酿使你的宠物遗忘了此项专精。");
        } else {
            showInfoBox("您还没有清心酿，此道具可通过开启奇馈宝箱概率获得。");
            return;
        }
    }
    applySpecialization();
    refreshSpecializationUI();
}  

function transformPet() {
    const existingOverlay = document.getElementById('transformPetOverlay');
    if (existingOverlay) {
        document.body.removeChild(existingOverlay);
    }

    if (petLevel < 160 || !petAscended) {
        showInfoBox("\n1.转职功能在飞升之后开启。\n2.专精系统允许你选择当前宠物成长的专精方向，并获得更显著的属性增长。\n3.使用“融会贯通”可以显著减少金子的消耗");
        return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'transformPetOverlay';
    overlay.className = 'transform-pet-overlay';

    const modal = document.createElement('div');
    modal.className = 'transform-pet-modal';

    const title = document.createElement('h2');
    title.innerText = '属性专精';
    title.className = 'transform-pet-title';
    modal.appendChild(title);

    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.className = 'transform-pet-close-button';
    closeButton.onclick = () => document.body.removeChild(overlay);
    modal.appendChild(closeButton);

    const specializationsDiv = document.createElement('div');
    specializationsDiv.className = 'transform-pet-specializations';

    Object. keys(specializations).forEach(key => {
        const spec = specializations[key];
        const specDiv = document.createElement('div');
        specDiv.className = 'transform-pet-spec';

        const specInfoDiv = document.createElement('div');
        specInfoDiv.className = 'transform-pet-spec-info';

        const specIcon = document.createElement('img');
        specIcon.src = spec.url;
        specIcon.className = 'transform-pet-spec-icon';
        specInfoDiv.appendChild(specIcon);

        const specTitle = document.createElement('h3');
        specTitle.innerText = `专精：${key} Lv${spec.level}`;
        specTitle.id = `${key}-title`;
        specInfoDiv.appendChild(specTitle);

        const specDescription = document.createElement('p');
        specDescription.className = 'transform-pet-spec-description';
        specDescription.innerText = getSpecDescription(key);
        specInfoDiv.appendChild(specDescription);

        // 添加进度条容器
        const progressBarContainer = document.createElement('div');
        progressBarContainer.style = `
            width: 100%;
            background-color: rgb(48, 72, 44);
            overflow: hidden;
            font-size: 14px;
            color: rgb(239, 239, 240);
            box-shadow: rgb(17, 25, 25) 0px 0px 2px 2px inset;
            margin: 0px 0px 5px 0px;
            height: 14px;
            border: 1px solid #634A23;
        `;

        const progressBar = document.createElement('div');
        const progressPercentage = (spec.level / 1000) * 100; // 1000为假定的最大等级
        progressBar.style = `
            height: 100%;
            background: linear-gradient(to bottom, #34773D, #34773D, #69E055, #69E055, #34773D, #34773D);
            width: ${progressPercentage}%;
        `;
        progressBarContainer.appendChild(progressBar);
        specInfoDiv.appendChild(progressBarContainer);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'transform-pet-buttons';
        buttonsDiv.id = `${key}-buttons`; // 为每个按钮组设置唯一ID


        const createButton = (text, handler) => {
            const button = document.createElement('button');
            button.innerText = text;
            button.className = 'transform-pet-button';
            button.onclick = handler;
            return button;
        };
    
        // 修改开启按钮逻辑
        const openButton = createButton(
            spec.isActive ? '已开' : '开启',
            () => {
                if (spec.isActive) {
                    showInfoBox("你已经开启过本专精了！");
                } else {
                    handleSpecializationChange(key, true);
                }
                refreshSpecializationUI();
            }
        );
        buttonsDiv.appendChild(openButton);
    
        // 修改关闭按钮逻辑
        const closeSpecButton = createButton(
            '关闭',
            () => {
                if (!spec.isActive) {
                    showInfoBox("本专精尚未启用！");
                } else {
                    handleSpecializationChange(key, false);
                }
                refreshSpecializationUI();
            }
        );
        buttonsDiv.appendChild(closeSpecButton);
    
        // 修改升级按钮逻辑
        const upgradeButton = createButton(
            '升级',
            () => {
                if (!spec.isActive) {
                    showInfoBox("未开启此专精！");
                } else {
                    upgradeSpecialization(key);
                    
                }
                refreshSpecializationUI();
            }
        );
        buttonsDiv.appendChild(upgradeButton);

        // 修改升级按钮逻辑
        const autoUpgradeButton = createButton(
            '自动',
            () => {
                if (!spec.isActive) {
                    showInfoBox("未开启此专精！");
                } else {
                    upgradeToMax(key);
                    
                }
                refreshSpecializationUI();
            }
        );
        buttonsDiv.appendChild(autoUpgradeButton);

        specInfoDiv.appendChild(buttonsDiv); // 按钮组放置在进度条下方
        specDiv.appendChild(specInfoDiv);
        specializationsDiv.appendChild(specDiv);
    });

    modal.appendChild(specializationsDiv);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

function refreshSpecializationUI() {
    Object.keys(specializations).forEach(key => {
        const spec = specializations[key];
        const titleElement = document.getElementById(`${key}-title`);
        if (titleElement) {
            titleElement.innerText = `专精：${key} Lv${spec.level}`;
        }

        const buttons = document.querySelectorAll(`#${key}-buttons button`);
        buttons.forEach(button => {
            if (button.innerText === '开启' || button.innerText === '已开') {
                button.innerText = spec.isActive ? '已开' : '开启';
                button.style.backgroundColor = spec.isActive ? 'grey' : 'linear-gradient(to bottom, #E47F47, #CE6633, #963D1C)';
            }
        });
    });
    updateAttributePanel();
}

function getSpecDescription(key) {
    switch (key) {
        case '慧光辉耀':
            return '宠物的智力属性会按更高的比例增加对应二级属性（法术攻击、法力值）。与此同时，宠物修为的提升会更显著';
        case '神魔之力':
            return '宠物的强壮属性会按更高的比例增加对应二级属性。（物理攻击）';
        case '坚韧之心':
            return '宠物的耐力属性会大幅增加对应的二级属性。（生命值、法术防御）';
        case '凌波微步':
            return '宠物的敏捷属性会大幅增加对应的二级属性。（速度、物理闪避）';
        case '圣灵附体':
            return '宠物的信仰属性会大幅增加对应的二级属性。（物理防御）';
    }
}

function upgradeSpecialization(key) {
    const spec = specializations[key];
    if (spec.level >= 1000) {
        showInfoBox("专精等级已达上限！");
        return;
    }

    let upgradeCost = (spec.level >= 100 ? (spec.level - 99) * 5000 : spec.level * 200 + 200);

    if (spec.level >= 100) {
        // 优先尝试使用塔草
        if (useItem('towerGrass', 1)) {
            spec.level++;
            showInfoBox(`你消耗一颗融会贯通，将专精${key}已升级Lv${spec.level}！`);
        } else if (goldAmount >= upgradeCost) {
            // 若无法使用塔草，尝试使用金子
            goldAmount -= upgradeCost;
            spec.level++;
            updateGoldDisplay(goldAmount);
            showInfoBox(`你花费了${convertPrice(upgradeCost)}金子，将专精${key}已升级至Lv${spec.level}！（如果需要持续升级，无需关闭本窗口即可继续操作）`);
        } else if (useItem('towerGrass', 1)) {
            // 如果金子不足，再次尝试使用塔草
            spec.level++;
            showInfoBox(`金子不足，但你消耗一颗融会贯通，将专精${key}已升级Lv${spec.level}！`);
        } else {
            // 两者都无法使用时提示
            showInfoBox(`金子或融会贯通不足，无法升级专精${key}。`);
        }
    } else {
        // 低于100级的情况，直接使用金子升级
        if (goldAmount >= upgradeCost) {
            goldAmount -= upgradeCost;
            spec.level++;
            updateGoldDisplay(goldAmount);
            showInfoBox(`你花费了${convertPrice(upgradeCost)}金子，将专精${key}已升级至Lv${spec.level}！（如果需要持续升级，无需关闭本窗口即可继续操作）`);
        } else {
            showInfoBox(`升级所需金子不足，需要${convertPrice(upgradeCost)}金子。`);
        }
    }

    refreshSpecializationUI();
    updateSkillScore();
}

function upgradeToMax(key) {
    const spec = specializations[key];
    let totalCost = 0;
    let tempLevel = spec.level;
    let projectedGold = goldAmount;
    
    // 计算最大可升级等级和总费用
    while (tempLevel < 1000 && projectedGold >= calculateUpgradeCost(tempLevel)) {
        let upgradeCost = calculateUpgradeCost(tempLevel);
        totalCost += upgradeCost;
        projectedGold -= upgradeCost;
        tempLevel++;
    }

    // 如果无法升级，直接返回
    if (tempLevel === spec.level) {
        showInfoBox('金币不足，无法升级！');
        return;
    }

    // 确认升级对话框
    showInfoBox(
        `确定花费共计${convertPrice(totalCost)}金子将${key}升级到Lv${tempLevel}吗？`,
        async () => {
            const totalLevels = tempLevel - spec.level;
            let completedLevels = 0;
            let processing = true;

            // 创建进度提示
            const progressBox = document.createElement('div');
            progressBox.className = 'progress-box';
            progressBox.style.position = 'fixed';
            progressBox.style.bottom = '20px';
            progressBox.style.right = '20px';
            progressBox.style.padding = '10px';
            progressBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            progressBox.style.color = 'white';
            progressBox.style.borderRadius = '5px';
            progressBox.style.zIndex = '1000';
            document.body.appendChild(progressBox);

            // 批量处理升级
            const batchSize = 50; // 每批处理的升级数量
            let startTime = Date.now();

            try {
                while (processing && spec.level < tempLevel) {
                    let batchCount = 0;
                    
                    // 使用 setTimeout 创建微任务，允许UI更新
                    await new Promise(resolve => {
                        setTimeout(async () => {
                            while (batchCount < batchSize && spec.level < tempLevel) {
                                if (goldAmount < calculateUpgradeCost(spec.level)) {
                                    processing = false;
                                    break;
                                }
                                
                                upgradeSpecialization(key);
                                batchCount++;
                                completedLevels++;
                            }

                            // 更新进度显示
                            const progress = Math.round((completedLevels / totalLevels) * 100);
                            const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(1);
                            progressBox.textContent = `正在升级 ${key}... ${progress}% (${elapsedTime}s)`;
                            
                            resolve();
                        }, 0);
                    });
                }
            } catch (error) {
                console.error('升级过程出错:', error);
                showInfoBox('升级过程中出现错误，请重试');
            } finally {
                // 清理进度提示
                document.body.removeChild(progressBox);
                
                // 刷新界面
                refreshSpecializationUI();
                updateSkillScore();
                
                // 显示完成信息
                const endTime = ((Date.now() - startTime) / 1000).toFixed(1);
                showInfoBox(
                    `升级完成！共提升了${completedLevels}级，用时${endTime}秒。`,
                    null,
                    null,
                    'green'
                );
            }
        }
    );
}

// 计算单次升级费用
function calculateUpgradeCost(level) {
    return level >= 100 ? (level - 99) * 5000 : level * 200 + 200;
}
        
function applySpecialization() {
    updateSecondaryAttributes();
    updateAttributePanel();
    refreshSpecializationUI();
    updateSkillScore();
}

function calculateSecondaryAttributes(currentAttributes, currentWisdom) {
    let multiplier;
    if (currentWisdom <= 12) {
        multiplier = 1 + (currentWisdom * 0.005);
    } else if (currentWisdom <= 20) {
        multiplier = 1.06 + (currentWisdom - 12) * 0.01;
    } else {
        switch (currentWisdom) {
            case 21:
                multiplier = 1.20;
                break;
            case 22:
                multiplier = 1.21;
                break;
            case 23:
                multiplier = 1.22;
                break;
            case 24:
                multiplier = 1.23;
                break;
            case 25:
                multiplier = 1.25;
                break;
            default:
                multiplier = 1;
        }
    }

    Object.entries(specializations).forEach(([key, spec]) => {
        if (spec.isActive) {
            const increment = spec.baseMultiplier + spec.levelIncrement * spec.level;
            if (spec.attributes) {
                if (Array.isArray(spec.attributes)) {
                    spec.attributes.forEach(attr => {
                        currentAttributes[attr] *= (1 + increment);
                    });
                } else {
                    currentAttributes[spec.attributes] *= (1 + increment);
                }
            } else if (spec.attribute) {
                currentAttributes[spec.attribute] *= (1 + increment);
            }
        }
    });

    const skillAttributes = calculateSkillAttributes();

    // 计算基础二级属性
    const baseSecondaryAttributes = {
        health: Math.floor((currentAttributes.endurance * 24 + currentAttributes.intelligence * 1 + currentAttributes.strength * 2 + currentAttributes.agility * 3 + currentAttributes.faith * 3) * multiplier),
        mana: Math.floor((currentAttributes.endurance * 1 + currentAttributes.intelligence * 10 + currentAttributes.strength * 2 + currentAttributes.agility * 2 + currentAttributes.faith * 2) * multiplier),
        physicalAttack: Math.floor((currentAttributes.endurance * 0.1 + currentAttributes.intelligence * 0.1 + currentAttributes.strength * 2.2 + currentAttributes.agility * 0.2 + currentAttributes.faith * 0.2) * multiplier),
        physicalDefense: Math.floor((currentAttributes.endurance * 0.1 + currentAttributes.intelligence * 0.1 + currentAttributes.strength * 0.2 + currentAttributes.agility * 0.2 + currentAttributes.faith * 2.2) * multiplier),
        magicAttack: Math.floor((currentAttributes.endurance * 0 + currentAttributes.intelligence * 1.7 + currentAttributes.strength * 0 + currentAttributes.agility * 0 + currentAttributes.faith * 0) * multiplier),
        magicDefense: Math.floor((currentAttributes.endurance * 2.2 + currentAttributes.intelligence * 0 + currentAttributes.strength * 0 + currentAttributes.agility * 0 + currentAttributes.faith * 0) * multiplier),
        speed: Math.floor((currentAttributes.endurance * 0.2 + currentAttributes.intelligence * 0.1 + currentAttributes.strength * 0.2 + currentAttributes.agility * 2 + currentAttributes.faith * 0.2) * multiplier)
    };

    // 图鉴加成
    const hpBonus = 1 + collectedPetCount * 0.05;
    const mpBonus = 1 + collectedPetCount * 0.04;
    const physicalAttackBonus = 1 + collectedPetCount * 0.012;
    const magicalAttackBonus = 1 + collectedPetCount * 0.01;
    const physicalDefenseBonus = 1 + collectedPetCount * 0.035;
    const magicalDefenseBonus = 1 + collectedPetCount * 0.035;
    const speedBonus = 1 + collectedPetCount * 0.005;

    baseSecondaryAttributes.health = Math.floor(baseSecondaryAttributes.health * hpBonus) + drugBonus.health + skillAttributes.health + drugBonus0.health + tempBonus.health;
    baseSecondaryAttributes.mana = Math.floor(baseSecondaryAttributes.mana * mpBonus) + drugBonus.mana + skillAttributes.mana + drugBonus0.mana + tempBonus.mana;
    baseSecondaryAttributes.physicalAttack = Math.floor(baseSecondaryAttributes.physicalAttack * physicalAttackBonus) + drugBonus.physicalAttack + skillAttributes.physicalAttack + drugBonus0.physicalAttack + tempBonus.physicalAttack;
    baseSecondaryAttributes.magicAttack = Math.floor(baseSecondaryAttributes.magicAttack * magicalAttackBonus) + drugBonus.magicAttack + skillAttributes.magicAttack + drugBonus0.magicAttack + tempBonus.magicAttack;
    baseSecondaryAttributes.physicalDefense = Math.floor(baseSecondaryAttributes.physicalDefense * physicalDefenseBonus) + drugBonus.physicalDefense + skillAttributes.physicalDefense + drugBonus0.physicalDefense + tempBonus.physicalDefense;
    baseSecondaryAttributes.magicDefense = Math.floor(baseSecondaryAttributes.magicDefense * magicalDefenseBonus) + drugBonus.magicDefense + skillAttributes.magicDefense + drugBonus0.magicDefense + tempBonus.magicDefense;
    baseSecondaryAttributes.speed = Math.floor(baseSecondaryAttributes.speed * speedBonus) + drugBonus.speed + skillAttributes.speed + drugBonus0.speed + tempBonus.speed;

    // 累加武装增益值，只包括二级属性的增益
    Object.keys(armsAttributes).forEach(key => {
        const arm = armsAttributes[key];
        if (arm.attribute && arm.activated) {
            // 先增加 arm 本身的属性值
            if (!['endurance', 'intelligence', 'strength', 'agility', 'faith'].includes(arm.attribute)) {
                baseSecondaryAttributes[arm.attribute] += arm.value;
            }

            // 处理 gemAttributes 中的值，只累加二级属性
            const gemAttributes = arm.armState?.gemSlots?.gemAttribute;
            if (gemAttributes) {
                Object.keys(gemAttributes).forEach(attr => {
                    if (!['endurance', 'intelligence', 'strength', 'agility', 'faith'].includes(attr) && baseSecondaryAttributes[attr] !== undefined) {
                        baseSecondaryAttributes[attr] += gemAttributes[attr];
                    }
                });
            }
        }
    });

    const { attributeBonuses } = getElixirBonuses();
    Object.keys(attributeBonuses.second).forEach(attr => {
        if (baseSecondaryAttributes[attr] !== undefined) {
            baseSecondaryAttributes[attr] += attributeBonuses.second[attr];
        }
    });

    // 在函数末尾添加通灵属性的计算
    Object.keys(armsAttributes).forEach(key => {
        const arm = armsAttributes[key];
        if (arm.activated && arm.armState?.divinedAttribute) {
            Object.entries(arm.armState.divinedAttribute).forEach(([attr, values]) => {
                if (baseSecondaryAttributes[attr] !== undefined) {
                    let baseValue = baseSecondaryAttributes[attr];
                    let percentageBonus = 0;
                    let fixedBonus = 0;
    
                    // 计算百分比加成
                    if (values.percentage) {
                        percentageBonus = Math.round(baseValue * values.percentage);
                    }
    
                    // 计算固定值加成
                    if (values.fixed) {
                        fixedBonus = values.fixed;
                    }
    
                    // 最终值 = 原始值 + 百分比加成 + 固定值加成
                    baseSecondaryAttributes[attr] = Math.round(baseValue + percentageBonus + fixedBonus);
                }
            });
        }
    });
    // 在计算物理攻击和法术攻击时添加套装加成
    baseSecondaryAttributes.physicalAttack += suitBonus.physicalAttack;
    baseSecondaryAttributes.magicAttack += suitBonus.magicAttack;
        
    return baseSecondaryAttributes;
}

function updateSecondaryAttributes() {
    const currentAttributes = calculateCurrentAttributes();
    const secondaryAttributes = calculateSecondaryAttributes(currentAttributes, currentWisdom);
    

    let wisdomBonus;
    if (currentWisdom <= 12) {
        wisdomBonus = currentWisdom * 0.5;
    } else if (currentWisdom <= 20) {
        wisdomBonus = 7 + (currentWisdom - 12) * 1;
    } else {
        switch (currentWisdom) {
            case 21:
                wisdomBonus = 20;
                break;
            case 22:
                wisdomBonus = 21;
                break;
            case 23:
                wisdomBonus = 22;
                break;
            case 24:
                wisdomBonus = 23;
                break;
            case 25:
                wisdomBonus = 25;
                break;
            default:
                wisdomBonus = 0;
        }
    }

    document.getElementById("secondary-health").innerText = secondaryAttributes.health;
    const healthBonusElement = document.getElementById("secondary-health-bonus");
    healthBonusElement.innerText = `+${wisdomBonus}%`;
    healthBonusElement.classList.toggle("red-text", wisdomBonus > 0);

    document.getElementById("secondary-mana").innerText = secondaryAttributes.mana;
    const manaBonusElement = document.getElementById("secondary-mana-bonus");
    manaBonusElement.innerText = `+${wisdomBonus}%`;
    manaBonusElement.classList.toggle("red-text", wisdomBonus > 0);

    document.getElementById("secondary-physical-attack").innerText = secondaryAttributes.physicalAttack;
    const physicalAttackBonusElement = document.getElementById("secondary-physical-attack-bonus");
    physicalAttackBonusElement.innerText = `+${wisdomBonus}%`;
    physicalAttackBonusElement.classList.toggle("red-text", wisdomBonus > 0);

    document.getElementById("secondary-physical-defense").innerText = secondaryAttributes.physicalDefense;
    const physicalDefenseBonusElement = document.getElementById("secondary-physical-defense-bonus");
    physicalDefenseBonusElement.innerText = `+${wisdomBonus}%`;
    physicalDefenseBonusElement.classList.toggle("red-text", wisdomBonus > 0);

    document.getElementById("secondary-magic-attack").innerText = secondaryAttributes.magicAttack;
    const magicAttackBonusElement = document.getElementById("secondary-magic-attack-bonus");
    magicAttackBonusElement.innerText = `+${wisdomBonus}%`;
    magicAttackBonusElement.classList.toggle("red-text", wisdomBonus > 0);

    document.getElementById("secondary-magic-defense").innerText = secondaryAttributes.magicDefense;
    const magicDefenseBonusElement = document.getElementById("secondary-magic-defense-bonus");
    magicDefenseBonusElement.innerText = `+${wisdomBonus}%`;
    magicDefenseBonusElement.classList.toggle("red-text", wisdomBonus > 0);

    document.getElementById("secondary-speed").innerText = secondaryAttributes.speed;
    const speedBonusElement = document.getElementById("secondary-speed-bonus");
    speedBonusElement.innerText = `+${wisdomBonus}%`;
    speedBonusElement.classList.toggle("red-text", wisdomBonus > 0);

    updateSkillScore();
}

let trainingCosts = [20000, 60000, 500000, 1000000, 2000000]; // 定义每次金子培养所需的金子数量
let trainingMultipliers = [1.05, 1.04, 1.03, 1.02, 1.01]; // 定义每次金子培养的属性提升倍数
let trainingCount = 0; // 初始化已经使用的金子培养次数

function calculateAvailableTrainingCount(petLevel) {
    // 计算可用的金子培养次数
    let count = 0;
    if (petLevel >= 0) count++; // 宠物等级大于等于0时增加一次
    if (petLevel >= 60) count++; // 宠物等级大于等于60时增加一次
    if (petLevel >= 149) count++; // 宠物等级大于等于149时增加一次
    if (petLevel >= 160) count++; // 宠物等级大于等于160时增加一次
    if (petLevel >= 180) count++; // 宠物等级大于等于180时增加一次
    return count;
}

let triggerAutoTrainingCountDown = 0;
let autoTrainingInterval = null;
let autoTrainingTimeout = null;

function startAutoTraining() {
    // 开始以0.1秒频率自动执行trainAttributesAfterFifth
    autoTrainingInterval = setInterval(() => {
        if (goldAmount <= 5000) {
            stopAutoTraining();
        } else {
            trainAttributesAfterFifth();
        }
    }, 100);

    // 60秒后停止自动执行
    autoTrainingTimeout = setTimeout(() => {
        stopAutoTraining(); // 在 60 秒后直接停止
    }, 60000);
}

function stopAutoTraining() {
    // 如果定时器已经被清除，直接返回
    if (!autoTrainingInterval && !autoTrainingTimeout) {
        return;
    }

    // 清除定时器和状态重置
    clearInterval(autoTrainingInterval);
    clearTimeout(autoTrainingTimeout);

    autoTrainingInterval = null;
    autoTrainingTimeout = null;
    triggerAutoTrainingCountDown = 0;
    showInfoBox("自动培养已停止。");
}

function trainAttributesAfterFifth() {
    if (goldAmount < 5000) {
        showInfoBox("金子不足5两，无法培养！");
        return;
    }
    
    triggerAutoTrainingCountDown += 1;

    const leftAttributes = attributesForTraning();

    const maxEndurance = Math.round((leftAttributes.endurance - additionalAttributes.endurance) * 0.4);
    const maxIntelligence = Math.round((leftAttributes.intelligence - additionalAttributes.intelligence) * 0.4);
    const maxStrength = Math.round((leftAttributes.strength - additionalAttributes.strength) * 0.4);
    const maxAgility = Math.round((leftAttributes.agility - additionalAttributes.agility) * 0.4);
    const maxFaith = Math.round((leftAttributes.faith - additionalAttributes.faith) * 0.4);
    console.log(`金子培养上限值：${maxEndurance}, ${maxIntelligence}, ${maxStrength}, ${maxAgility}, ${maxFaith},`);

    const randomGrowthCount = () => {
        const rand = Math.random();
        if (rand < 0.05) return 5;
        if (rand < 0.20) return 4;
        if (rand < 0.45) return 3;
        if (rand < 0.80) return 2;
        return 1;
    }

    const growthCount = randomGrowthCount();
    let attributes = ['endurance', 'intelligence', 'strength', 'agility', 'faith'];
    const maxAttributes = {
        endurance: maxEndurance,
        intelligence: maxIntelligence,
        strength: maxStrength,
        agility: maxAgility,
        faith: maxFaith
    };
    let results = [];

    for (let i = 0; i < growthCount; i++) {
        const randomIndex = Math.floor(Math.random() * attributes.length);
        const attribute = attributes[randomIndex];
        attributes.splice(randomIndex, 1); // 移除已经选择的属性

        const maxAttribute = maxAttributes[attribute];
        const bonusAttribute = bonusAttributes[attribute];
        const currentAttribute = leftAttributes[attribute];

        let growthRange = [0, 3];
        if (bonusAttribute === maxAttribute) {
            growthRange = [0, 0];
        } else if (bonusAttribute >= maxAttribute * 0.9) {
            growthRange = [-1, 2];
        }

        const growthValue = Math.floor(Math.random() * (growthRange[1] - growthRange[0] + 1)) + growthRange[0];
        const newBonusValue = Math.min(bonusAttribute + growthValue, maxAttribute);
        const attributeMap = {
            endurance: "耐力",
            intelligence: "智力",
            strength: "强壮",
            agility: "敏捷",
            faith: "信仰"
        };

        bonusAttributes[attribute] = Math.max(newBonusValue, 0);
        results.push(`${i + 1}. ${attributeMap[attribute]}: ${growthValue > 0 ? '+' : ''}${growthValue}`);
    }

    goldAmount -= 5000;
    updateGoldDisplay(goldAmount);
    updateAttributePanel();

    showInfoBox(`金培消耗5两金：\n${results.join('\n')}`);

    // 如果触发自动执行条件且尚未开始自动执行
    if (triggerAutoTrainingCountDown >= 5 && !autoTrainingInterval) {
        startAutoTraining();
    }
}

function bonusAttributesDisplay() {
    const attributeNames = ['endurance', 'intelligence', 'strength', 'agility', 'faith'];
    const leftAttributes = attributesForTraning();
    const maxAttributes = {
        endurance: Math.round((leftAttributes.endurance - additionalAttributes.endurance) * 0.4),
        intelligence: Math.round((leftAttributes.intelligence - additionalAttributes.intelligence) * 0.4),
        strength: Math.round((leftAttributes.strength - additionalAttributes.strength) * 0.4),
        agility: Math.round((leftAttributes.agility - additionalAttributes.agility) * 0.4),
        faith: Math.round((leftAttributes.faith - additionalAttributes.faith) * 0.4)
    };

    attributeNames.forEach(attribute => {
        const spanElement = document.getElementById(`bonusAttribute-${attribute}`);
        if (spanElement) {
            const bonusValue = bonusAttributes[attribute];
            const maxValue = maxAttributes[attribute];
            if (bonusValue >= maxValue) {
                spanElement.innerText = `(+${bonusValue}(满))`;
                 spanElement.style.color = "#fb3c2e";
            } else {
                spanElement.innerText = `(+${bonusValue})`;
                spanElement.style.color = "white";
            }
        }
    });
}

function trainAttributes() {
    // 计算可用的金子培养次数
    const availableTrainingCount = calculateAvailableTrainingCount(petLevel);

    // 检查当前培养次数是否达到可用次数
    if (trainingCount >= availableTrainingCount && trainingCount >= 5) {
        trainAttributesAfterFifth();
        return;
    } else if (trainingCount >= availableTrainingCount){
        showInfoBox("当前没有可用培养次数。\n1. 当等级达到60/120/160/180级时会各获得一次培养机会 \n2. 每次培养会按比固定例增加宠物的属性值 \n3. 第五次培养后可按照每一次5两的花费为宠物进行随机属性增长 \n4. 连续随机增长5次会自动执行10秒培养，请注意金子花费 \n5. 随机金子培养值存在上限，宠物资质越好上限越高 ");
        return; // 退出函数
    }

    // 获取当前培养所需的金子数量
    const cost = trainingCosts[trainingCount];

    // 提示玩家当前花费
    showInfoBox(`这次金子培养需要${convertPrice(cost)}金子，是否继续？`, function() {
        // 玩家点击确认按钮，继续执行培养操作

        // 检查金子数量是否足够
        if (goldAmount < cost) {
            showInfoBox("金子不足！"); // 如果金子不足，提示用户
            return; // 退出函数
        }

        // 扣除金子
        goldAmount -= cost;
        updateGoldDisplay(goldAmount); // 更新显示的金子数量

        // 获取当前培养的属性提升倍数
        const multiplier = trainingMultipliers[trainingCount];
        // 获取可供培养的属性上限
        const leftAttributes = attributesForTraning();
    
        const maxEndurance = Math.round((leftAttributes.endurance - additionalAttributes.endurance) * 0.4);
        const maxIntelligence = Math.round((leftAttributes.intelligence - additionalAttributes.intelligence) * 0.4);
        const maxStrength = Math.round((leftAttributes.strength - additionalAttributes.strength) * 0.4);
        const maxAgility = Math.round((leftAttributes.agility - additionalAttributes.agility) * 0.4);
        const maxFaith = Math.round((leftAttributes.faith - additionalAttributes.faith) * 0.4);
    

        // 提升bonusAttributes中的值
        bonusAttributes.endurance += Math.floor(leftAttributes.endurance * (multiplier - 1));
        bonusAttributes.intelligence += Math.floor(leftAttributes.intelligence * (multiplier - 1));
        bonusAttributes.strength += Math.floor(leftAttributes.strength * (multiplier - 1));
        bonusAttributes.agility += Math.floor(leftAttributes.agility * (multiplier - 1));
        bonusAttributes.faith += Math.floor(leftAttributes.faith * (multiplier - 1));

        bonusAttributes.endurance = Math.min(maxEndurance, bonusAttributes.endurance);
        bonusAttributes.intelligence = Math.min(maxIntelligence, bonusAttributes.intelligence);
        bonusAttributes.strength = Math.min(maxStrength, bonusAttributes.strength);
        bonusAttributes.agility = Math.min(maxAgility, bonusAttributes.agility);
        bonusAttributes.faith = Math.min(maxFaith, bonusAttributes.faith);

        // 增加金子培养次数
        trainingCount++;

        // 更新属性面板
        updateAttributePanel();
    }, function() {
        // 玩家点击取消按钮，退出函数
        return;
    });
}

function updatePetLevel() {
    document.getElementById('pet-level').innerText = petLevel;
    document.getElementById('your-pet-level').innerText = petLevel;
    updateAttributePanel();
    updateSkillScore();
    updateTitle();
}

function updatePetWisdom() {
    document.getElementById("current-wisdom").innerText = petWisdom;
    document.getElementById("attribute-wisdom").innerText = petWisdom; // 更新属性面板中的悟性
    updateAttributePanel();
}
        
function showBiography() {
    const currentPetName = document.getElementById("pet-select").value;
    const biography = biographies[currentPetName];
    const skillScore = parseInt(document.getElementById("skill-score").innerText, 10);

    let message = "";

    if (skillScore < 1000000) {
        message = "您的宠物评分过低，请提升到1000000后再试！（宠物传记共有3段，评分达到1000000、2000000和3000000时会分别解锁）";
    } else {
        // 使用数组来存储每个可能的段落
        const paragraphs = [];

        if (biography[0] && skillScore >= 1000000) {
            paragraphs.push(biography[0]);
        }
        if (biography[1] && skillScore >= 2000000) {
            paragraphs.push(biography[1]);
        }
        if (biography[2] && skillScore >= 3000000) {
            paragraphs.push(biography[2]);
        }
        if (biography[3] && skillScore >= 4000000) {
            paragraphs.push(biography[3]);
        }

        // 将所有段落拼接成一个字符串，用换行符分隔
        message = paragraphs.join("\n");
    }

    showInfoBox(message, null, null, 'black');
}


let goldenRebornPill = 10;
function useGoldenRebornPill() {
    if (goldenRebornPill < 1) {
        showInfoBox("您的还童金丹已耗尽！");
        return;
    }
    if (awakened) {
        showInfoBox("您的宠物已经觉醒，无法还童！");
        return;
    }
    goldenRebornPill--;
    document.getElementById("golden-reborn-pill").innerText = goldenRebornPill;

    const qualities = currentPet.qualities;
    if (qualities.mutated) {
        qualities.tier = Math.random() < 0.5 ? '卓越' : '完美';
        qualities.growthRate = qualities.tier === '卓越' ? getWeightedRandom([300, 320], [0.5, 0.5]) : getWeightedRandom([340, 360, 380, 400], [0.3, 0.5, 0.15, 0.05]);
    } else {
        qualities.tier = '普通';
        qualities.growthRate = 100;
    }

    qualities.endurance.current = getRandomInt(qualities.endurance.min, qualities.endurance.max);
    qualities.strength.current = getRandomInt(qualities.strength.min, qualities.strength.max);
    qualities.faith.current = getRandomInt(qualities.faith.min, qualities.faith.max);
    qualities.agility.current = getRandomInt(qualities.agility.min, qualities.agility.max);
    qualities.intelligence.current = getRandomInt(qualities.intelligence.min, qualities.intelligence.max);

    // 更新技能
    const skillNum = getRandomInt(0, 3);
    const newSkills = [];
    const bSkills = currentPet.skills.filter(skill => skill.rarity === 'B');
    for (let i = 0; i < skillNum; i++) {
        const skill = bSkills[Math.floor(Math.random() * bSkills.length)];
        if (!newSkills.some(s => s.name === skill.name)) {
            newSkills.push(skill);
        }
    }
    updateSkillsArea(newSkills);
    updateSkillScore(newSkills);
    updateTitle();
    
    petLevel = 1;
    currentWisdom = 0;
    petWisdom = currentWisdom;
    petAscended = false; //新增宠物失去飞升的还童规则
    petMaxLevel = 149;
    
    updateQualityDisplayWithBonuses();
    updateSkillScore();
    updatePetWisdom();
}

let goldAmount = 500000; // 初始金子数量
function updateGoldDisplay(goldAmount) {
    const goldElement = document.getElementById('gold-amount');

    // 确保 goldAmount 不超过 9,999,999,999
    if (goldAmount > 9999999999) {
        exchangeGoldBlock(true);
        showInfoBox('你的金子数已越界！已自动为你兑换成一个金锭！',null,null,'red');
    }

    const wen = goldAmount % 1000;
    const liang = Math.floor(goldAmount / 1000) % 1000;
    const ding = Math.floor(goldAmount / 1000000);

    goldElement.innerText = `${ding}锭${liang}两${wen}文`;
    goldElement.style.color = 'white';
    goldElement.style.background = '#395759'; // 兼容性处理
    goldElement.style.boxShadow = 'rgb(30, 46, 47) 0px 0px 5px 2px inset'; // 兼容性处理
    goldElement.style.padding = '2px 2px'; // 兼容性处理
    goldElement.style.fontSize = '12px'; // 兼容性处理
    goldElement.style.textShadow = 'none'; // 兼容性处理
}

function exchangeGoldBlock(auto = false) {
    const goldBlockPrice = 180000000;
    const goldBlockName = '金锭';
    const goldBlockImage = 'https://pic.imgdb.cn/item/66d68b8dd9c307b7e90ff369.png';
    const goldBlockDescription = '价值连城的贵金属，无论在什么时代都是最好的天然货币（你可以低于市场的价格直接出售，也可以点击使用进行市场竞价）';

    function createGoldBlock() {
        goldAmount -= 200000000;
        updateGoldDisplay(goldAmount);
        generateItemToJinnang('goldBlock', goldBlockName, goldBlockImage, goldBlockPrice, 1, goldBlockDescription);
    }

    if (goldAmount < 200000000) {
        if (!auto) {
            showInfoBox('你的金子不足200锭，无法兑换金锭！', null, null, 'red');
        }
    } else {
        if (!auto) {
            showInfoBox(
                '你可以用200锭金子兑换一个金锭，金锭与所花费的金子等值，出售时价格会略微波动，是你资产过多时的良好投资品',
                () => {
                    createGoldBlock();
                    showInfoBox('获得一个金锭！', null, null, 'black');
                },
                null,
                'red'
            );
        } else {
            createGoldBlock();
        }
    }
}

function sellGoldBlock(basePrice) {
        const fluctuationPercentage = 0.02; // 2%
        const goldBlockPrice = Math.floor(basePrice * (1 + (Math.random() * 2 * fluctuationPercentage - fluctuationPercentage)));
        const difference = Math.abs(basePrice - goldBlockPrice);
        
        goldAmount += goldBlockPrice;
        updateGoldDisplay(goldAmount);
        
        if (goldBlockPrice >= basePrice) {
            showInfoBox(`你成功出售一个金锭，获得了${convertPrice(goldBlockPrice)}金子，赚了${convertPrice(difference)}金！`, null, null, 'red');
        } else {
            showInfoBox(`你成功出售一个金锭，获得了${convertPrice(goldBlockPrice)}金子，亏了${convertPrice(difference)}金！`, null, null, 'green');
        }

        setTimeout(() => {
            if (Math.random() < 0.6) {
                randomlyEventAfterSellingBlock();
            }
        },200);
}

function randomlyEventAfterSellingBlock() {
    const rareItemName = ['universalHeart', 'luckyAmulet', 'qiongmeiCard', 'advancedSkillBook', 'hongHuang']; // 可拓展更多物品
    const canChangeTinyGoldBlock = [5, 10, 50, 20, 2];  // 对应的物品价格

    // 随机选择一个物品
    const randomIndex = Math.floor(Math.random() * rareItemName.length);
    const selectedItem = {
        name: rareItemName[randomIndex],
        price: canChangeTinyGoldBlock[randomIndex]
    };

    const itemData = jinnangItems.find(item => item.name === selectedItem.name);
    const itemDisplayName = itemData ? itemData.displayName : '未知物品';
    
    // 获取tinyGoldBlock的数量
    const tinyGoldBlock = jinnangItems.find(item => item.name === 'tinyGoldBlock');
    const merchantUrl = 'https://pic.imgdb.cn/item/66e1a40fd9c307b7e948e7e9.png';
    
    showInfoBox(
        `一朝富贵天下知，四海奇珍异宝向君来，神秘商人“李金嘴”带了一些好货，其中最抢眼的尖货莫过于: \n\n${itemDisplayName} * 1\n\n你需要支付${selectedItem.price}个小金锭，是否交易？`,
        () => {
            if (tinyGoldBlock && tinyGoldBlock.quantity >= selectedItem.price) {
                // 使用小金锭进行交易
                useItem('tinyGoldBlock', selectedItem.price);
                addItemToJinnang(selectedItem.name, 1);
                showInfoBox(`交易成功！你获得一个${itemDisplayName}`, null, null, null, merchantUrl, '80px * 80px');
            } else if (goldAmount >= selectedItem.price * 8000000) {
                // 使用金币购买
                showInfoBox(`你的小金锭数量不足，是否花费${convertPrice(selectedItem.price * 8000000)}金等值购买？`,
                    () => {
                        goldAmount -= selectedItem.price * 8000000;
                        updateGoldDisplay(goldAmount);
                        addItemToJinnang(selectedItem.name, 1);
                        showInfoBox(`交易成功！你获得一个${itemDisplayName}`, null, null, null, merchantUrl, '80px * 80px');
                    },
                    () => {
                        showInfoBox('你放弃了本次神秘商人鼎力推荐的货品！', null, null, null, merchantUrl, '80px * 80px');
                    },
                    null,
                    merchantUrl,
                    '80px * 80px'
                );
            } else {
                showInfoBox('少侠，你的实力不够呀！', null, null, null, merchantUrl, '80px * 80px');
            }
        },
        () => {
            showInfoBox('没关系，下次我还会带着更好的商品来拜访您！', null, null, null, merchantUrl, '80px * 80px');
        },
        null,
        merchantUrl,
        '80px * 80px'
    );
}

        
function toggleShop() {
    const drawer = document.getElementById('shop-drawer');
    const info = document.getElementById('shop-info');
    drawer.classList.toggle('open');
    info.classList.toggle('open');

    const buttonElement = document.getElementById("bless-gift-button");
    
    if (blessGiftClaimed) {
        buttonElement.style.display = "none";
    }

    const discountElement = document.getElementById('discount-detail');
    const eightyDiscountCard = jinnangItems.find(i => i.name === 'eightyDiscountCard');
    const titleElement = document.getElementById('personal-honor');
    const currentTitleIndex = titles.indexOf(titleElement.innerText);
    const titleDiscount = 1 - (currentTitleIndex * 0.005);
    let discount = 1;

    // 应用eightyDiscountCard的折扣
    if (eightyDiscountCard && eightyDiscountCard.quantity > 0) {
        discount = 0.8;
    }
    
    discount *= titleDiscount;
    discountElement.innerText = `（称号乐享${(discount * 100).toFixed(0)}折）`;
}

function initShop() {
    refreshShop(true);  // 初始加载商品
    startShopTimer();   // 启动倒计时
    initializeCreditShop();
}

function startShopTimer() {
    let timer = 300; // 5分钟倒计时，单位：秒
    const timerDisplay = document.getElementById('shop-timer');

    const interval = setInterval(() => {
        timer--;
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timer <= 0) {
            clearInterval(interval);
            refreshShop(true);  // 自动刷新
        }
    }, 1000);
}


        
// 页面加载完成后初始化商店
let refreshCount = 0; // 全局计数器，记录刷新次数
let sSkillCount = 0;
let ssSkillCount = 0;
        
function refreshShop(auto = false) {
    if (!auto && goldAmount < 1000) {
        return showInfoBox("您的金子不足1两，无法刷新！");
    }

    if (!auto) {
        goldAmount -= 1000;
        updateGoldDisplay(goldAmount);
    }

    const shopItems = document.getElementById('shop-items');
    shopItems.innerHTML = '';

    refreshCount++; // 更新刷新计数器

    if (refreshCount === 20) {
        refreshCount = 0;
        const specialItems = generateSpecialItems();
        specialItems.forEach(item => addItemToShop(item, shopItems));
        return;
    }

    const numItems = auto ? getRandomInt(2, 18) : getRandomInt(10, 60);
    const probabilities = auto ? [0.8, 0.2] : [0.7, 0.3];
    let rareItemCount = 0;
    let commonBundleCount = 0;
    let rareBundleCount = 0;

    let items = [];

    const rareCounts = {
        item: 0,
        bundle: 0,
        sSkill: 0,
        ssSkill: 0,
        maxItems: numItems * probabilities[1] // 估算稀有物品的最大数量
    };

    for (let i = 0; i < numItems; i++) {
        let isRare = Math.random() < probabilities[1];
        if (!auto && isRare && rareItemCount >= 28) isRare = false;
        if (isRare) rareItemCount++;

        let item;
        if (isRare) {
            item = getRandomRareItem(rareCounts);
        } else {
            item = getRandomCommonItem();
        }

        if (item.name.includes('包裹')) {
            const bundleCount = isRare ? rareBundleCount : commonBundleCount;
            const maxBundles = isRare ? 3 : 3;

            if (bundleCount >= maxBundles) {
                i--;
                continue;
            }

            isRare ? rareBundleCount++ : commonBundleCount++;
        }

        items.push(item);
    }

    // 如果不是第20次刷新，按价格从高到低排序
    items.sort((a, b) => b.price - a.price);

    // 将排序后的商品添加到商店中
    items.forEach(item => addItemToShop(item, shopItems));
    sSkillCount = 0;
    ssSkillCount = 0;

    if (auto) startShopTimer();
}

function generateSpecialItems() {
    const allSSSkills = collectSkillsByRarity('SS');
    const allSSkills = collectSkillsByRarity('S');

    return [
        ...selectRandomItems(allSSSkills, 30),
        ...selectRandomItems(allSSkills, 30)
    ];
}

function collectSkillsByRarity(rarity) {
    return Object.values(pets).flatMap(pet =>
        pet.skills
            .filter(skill => skill.rarity === rarity)
            .map(skill => createSkillItem(pet.name, skill.name, rarity, ))
    );
}

function selectRandomItems(items, count) {
    const selectedItems = [];
    while (selectedItems.length < count && items.length) {
        const index = Math.floor(Math.random() * items.length);
        selectedItems.push(items.splice(index, 1)[0]);
    }
    return selectedItems;
}

function getRandomCommonItem() {
    const commonItems = [
        createItem('高级悟性丹', 20, 100, 'https://pic.imgdb.cn/item/66541c01d9c307b7e9208aea.png'),
        createItem('万化灵丹', 4000, 5000, 'https://pic.imgdb.cn/item/66541c01d9c307b7e9208add.png'),
        createItem('神兽还童丹', 4200, 5000, 'https://pic.imgdb.cn/item/6654a944d9c307b7e9ca6423.png'),
        createItem('还童金丹', 4000, 6220, 'https://pic.imgdb.cn/item/6655a92ad9c307b7e9c04265.png'),
        createItem('冰魄还童丹', 4990, 7299, 'https://pic.imgdb.cn/item/665ef0855e6d1bfa055800f4.png'),
        createItem('资质重生丹', 6880, 7288, 'https://pic.imgdb.cn/item/6654a944d9c307b7e9ca63f5.png'),
        createItem('精灵精炼石', 1888, 3880, 'https://pic.imgdb.cn/item/6669666cd9c307b7e991c04a.png'),
        createItem('精灵觉醒石', 3880, 6880, 'https://pic.imgdb.cn/item/6669666cd9c307b7e991bf78.png'),
        createItem('天地灵气', 6688, 13688, 'https://pic.imgdb.cn/item/666ab20bd9c307b7e96301f6.png'),
        createItem('分解符礼包', 18888, 38880, 'https://pic.imgdb.cn/item/66c60e7cd9c307b7e9ad57d3.png'),
        createItem('游乐场门票', 18888, 38880, 'https://pic1.imgdb.cn/item/67bdf1a5d0e0a243d405ac84.png'),
        createItem('聚灵丹', 366, 688, 'https://pic.imgdb.cn/item/66c238b6d9c307b7e9e76c9a.png'),
        createItem('唤妖符', 366, 688, 'https://pic.imgdb.cn/item/66c238b6d9c307b7e9e76c26.png'),
        createItem('特级悟性丹', 1388, 1788, 'https://pic.imgdb.cn/item/665de3fd5e6d1bfa05564912.png'),
        createItem('宝石镶嵌符', 21388, 31788, 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc79.png'),
        createItem('宝石摘除符', 21388, 31788, 'https://pic.imgdb.cn/item/66dc001bd9c307b7e9b8bb5c.png'),
        createItem('低级宝石合成符', 11388, 16788, 'https://pic.imgdb.cn/item/66db2caed9c307b7e9c66c55.png'),
        createItem('升级宝石礼包（极品）', 21388, 31788, 'https://pic.imgdb.cn/item/66dab9c1d9c307b7e921b767.png'),
        createItem('延寿露', 3888, 3999, 'https://pic.imgdb.cn/item/666d311dd9c307b7e996b5b7.png'),
        createItem('天山雪莲', 3888, 3999, 'https://pic.imgdb.cn/item/666d311dd9c307b7e996b5a8.png'),
        createItem('忘忧水', 1888, 1999, 'https://pic.imgdb.cn/item/666c0afbd9c307b7e9beef9c.png'),
        createItem('三花丸', 1888, 1999, 'https://pic.imgdb.cn/item/666c0afbd9c307b7e9beefcb.png')
    ];

    if (Math.random() < 0.8) {
        const item = selectRandomItems(commonItems, 1)[0];
        const quantity = getRandomInt(51, 200);
        return createBundleItem(item, quantity, false);
    }

    return selectRandomItems(commonItems, 1)[0];
}

function getRandomRareItem(rareCounts) {
    const rareItems = [
        createItem('灵异金丹', 99999, 111111, 'https://pic.imgdb.cn/item/66556068d9c307b7e9681672.png'),
        createItem('宠物寿命晶石', 11288, 16988, 'https://pic.imgdb.cn/item/66e726d8d9c307b7e9405457.png'),
        createItem('仙人醍醐', 86788, 169238, 'https://pic.imgdb.cn/item/6662eda05e6d1bfa0530b827.png'),
        createItem('修为灵丹（蓝）', 86788, 109238, 'https://pic.imgdb.cn/item/66c369f2d9c307b7e9650429.png'),
        createItem('宠物资质仙丹', 86788, 109238, 'https://pic.imgdb.cn/item/66c9d327d9c307b7e9682c26.png'),
        createItem('集中值（4点）', 86788, 129238, 'https://pic.imgdb.cn/item/66d1c3a5d9c307b7e9ddf3fa.png'),
        createItem('蓝色武装原料', 56788, 89238, 'https://pic.imgdb.cn/item/66d8732dd9c307b7e964497d.png'),
        createItem('任意打孔器', 116788, 159238, 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc61.png'),
        createItem('宝石洗孔符', 26788, 39238, 'https://pic.imgdb.cn/item/666d688ed9c307b7e903cdfd.png'),
        createItem('高级宝石合成符', 56788, 69238, 'https://pic.imgdb.cn/item/66dbff82d9c307b7e9b75a35.png'),
        createItem('宝石袋盲盒', 56788, 69238, 'https://pic.imgdb.cn/item/66db2daed9c307b7e9c7508a.png'),
        createItem('升级宝石礼包（神品）', 116788, 159238, 'https://pic.imgdb.cn/item/66dab9eed9c307b7e92290c5.png'),
        
    ];

    const ssSkills = collectSkillsByRarity('SS');
    const sSkills = collectSkillsByRarity('S');

    const itemTypes = ['item', 'bundle'];

    if (sSkillCount < 1) {
        itemTypes.push('sSkill');
    }

    if (ssSkillCount < 2) {
        itemTypes.push('ssSkill');
    }

    const itemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];

    let item;
    switch (itemType) {
        case 'item':
            item = selectRandomItems(rareItems, 1)[0];
            break;
        case 'bundle':
            item = createBundleItem(selectRandomItems(rareItems, 1)[0], getRandomInt(2, 100), true);
            break;
        case 'sSkill':
            item = selectRandomItems(sSkills, 1)[0];
            sSkillCount++;
            break;
        case 'ssSkill':
            item = selectRandomItems(ssSkills, 1)[0];
            ssSkillCount++;
            break;
    }

    rareCounts[itemType]++;
    return item;
}

function createItem(name, minPrice, maxPrice, url) {
    return { name, url, price: getRandomInt(minPrice, maxPrice) };
}

function createBundleItem(item, quantity, rare = false) {
    const url = rare 
        ? 'https://pic.imgdb.cn/item/6656a1b6d9c307b7e9baa85b.png' 
        : 'https://pic.imgdb.cn/item/6656a1b6d9c307b7e9baa881.png';

    return {
        ...item,
        name: `${item.name} 包裹 (${quantity})`,
        price: item.price * quantity,
        url: url
    };
}

function createSkillItem(petName, skillName, rarity) {
    const priceRange = rarity === 'SS' ? [221688, 535988] : [111288, 231988];
    const url = rarity === 'SS'
        ? 'https://pic.imgdb.cn/item/665af22fd9c307b7e910c815.png'
        : 'https://pic.imgdb.cn/item/665566e5d9c307b7e971236e.png';
    return createItem(`${petName}·${skillName}`, ...priceRange, url);
}

function addItemToShop(item, shopItems) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('shop-item');
    itemDiv.dataset.name = item.name;
    itemDiv.dataset.price = item.price;
    itemDiv.innerHTML = `
        <img src="${item.url}" alt="${item.name}" style="border: 1px solid black;height: 45px;width: 45px;">
        <div class="item-text-container">
            <div class="item-text-top">${item.name}</div>
            <div class="item-text-bottom">${convertPrice(item.price)} 金</div>
        </div>`;

    itemDiv.addEventListener('click', () => {
        const infoBox = document.getElementById('shop-description');
        const itemName = item.name;
        const isPackage = itemName.includes('包裹');
        const itemBaseName = isPackage ? itemName.split(' 包裹 (')[0] : itemName;
        const itemQuantity = isPackage ? parseInt(itemName.split(' 包裹 (')[1].replace(')', ''), 10) : 1;

        // 特殊道具名称与其对应的ID映射
        const specialItems = {
            '高级悟性丹': 'high-grade-pill',
            '万化灵丹': 'transmutation-pill',
            '冰魄还童丹': 'bingpo-reborn-pill',
            '神兽还童丹': 'reborn-pill',
            '资质重生丹': 'quality-pill',
            '灵异金丹': 'miraculous-pill',
            '还童金丹': 'golden-reborn-pill'
        };

        let description = '';

        // 判断是否为特殊道具
        if (specialItems[itemBaseName]) {
            // 获取特殊道具的描述信息
            description = getTopBarItemDescription(specialItems[itemBaseName]);
        } else {
            // 查找1类商品的描述信息
            const matchingItem = jinnangItems.find(jItem => jItem.displayName === itemBaseName);
            const drugItem = drugInventory[itemBaseName];

            if (matchingItem) {
                // 1类商品，显示其描述信息
                description = matchingItem.description;
            } else if (drugItem) {
                description = `战斗中使用，${drugItem.description}`;
            } else {
                // 2类商品（宠物技能），显示默认描述信息
                description = '这是一个宠物技能，如果你有对应宠物，可以直接学会此技能。';
            }
        }

        // 更新选择的UI效果
        document.querySelectorAll('.shop-item').forEach(el => el.classList.remove('selected'));
        itemDiv.classList.add('selected');

        // 更新infoBox中的描述信息
        infoBox.innerText = `${item.name}，售价${convertPrice(item.price)}金。用途：${description}`;
    });

    shopItems.appendChild(itemDiv);
}

function buyItem() {
    const selectedItem = document.querySelector('.shop-item.selected');
    if (!selectedItem) {
        return showInfoBox("请选择一个商品进行购买！");
    }
    
    const originalPrice = parseInt(selectedItem.dataset.price, 10);
    let price = originalPrice;
    const itemName = selectedItem.dataset.name;
    const eightyDiscountCard = jinnangItems.find(i => i.name === 'eightyDiscountCard');
    
    // 获取当前称号的等级
    const titleElement = document.getElementById('personal-honor');
    const currentTitleIndex = titles.indexOf(titleElement.innerText);
    
    // 计算称号折扣
    const titleDiscount = 1 - (currentTitleIndex * 0.005);
    
    // 应用eightyDiscountCard的折扣
    if (eightyDiscountCard && eightyDiscountCard.quantity > 0) {
        price = Math.round(price * 0.8);
    }

    // 应用称号折扣
    price = Math.round(price * titleDiscount);

    if (goldAmount < price) {
        return showInfoBox("金子不足，购买失败！");
    }

    const isPackage = itemName.includes('包裹');
    const itemBaseName = isPackage ? itemName.split(' 包裹 (')[0] : itemName;
    const itemQuantity = isPackage ? parseInt(itemName.split(' 包裹 (')[1].replace(')', ''), 10) : 1;

    const itemHandlers = {
        '高级悟性丹': () => highGradePill += itemQuantity,
        '万化灵丹': () => transmutationPill += itemQuantity,
        '冰魄还童丹': () => bingpoRebornPill += itemQuantity,
        '神兽还童丹': () => rebornPill += itemQuantity,
        '资质重生丹': () => qualityPill += itemQuantity,
        '灵异金丹': () => miraculousPill += itemQuantity,
        '特级悟性丹': () => addItemToJinnang('tejiWisdomPill', itemQuantity),
        '精灵精炼石': () => addItemToJinnang('spiritRefreshStone', itemQuantity),
        '精灵觉醒石': () => addItemToJinnang('spiritAwakenStone', itemQuantity),
        '天地灵气': () => addItemToJinnang('earthlyEnergy', itemQuantity),
        '仙人醍醐': () => addItemToJinnang('ultraSkillBoomer', itemQuantity),
        '聚灵丹': () => addItemToJinnang('hailMonsterPill', itemQuantity),
        '唤妖符': () => addItemToJinnang('hailMonsterAmulet', itemQuantity),
        '修为灵丹（蓝）': () => addItemToJinnang('cultivationPill200', itemQuantity),
        '分解符礼包': () => addItemToJinnang('fragmentsPackage', itemQuantity),
        '宠物资质仙丹': () => addItemToJinnang('qualityEnhancePill', itemQuantity),
        '融会贯通': () => addItemToJinnang('towerGrass', itemQuantity),
        '集中值（4点）': () => addItemToJinnang('attentionValue', itemQuantity),
        '蓝色武装原料': () => addItemToJinnang('blueArmComponents', itemQuantity),
        '橙色武装原料': () => addItemToJinnang('orangeArmComponents', itemQuantity),
        '宝石镶嵌符': () => addItemToJinnang('inlayAmulet', itemQuantity),
        '宝石摘除符': () => addItemToJinnang('removeAmulet', itemQuantity),
        '任意打孔器': () => addItemToJinnang('punchHoleTool', itemQuantity),
        '宝石洗孔符': () => addItemToJinnang('refreshGemSlot', itemQuantity),
        '升级宝石礼包（极品）': () => addItemToJinnang('starGemPKG', itemQuantity),
        '升级宝石礼包（神品）': () => addItemToJinnang('starGemPlusPKG', itemQuantity),
        '高级宝石合成符': () => addItemToJinnang('mergeAmuletPlus', itemQuantity),
        '低级宝石合成符': () => addItemToJinnang('mergeAmulet', itemQuantity),
        '宝石袋盲盒': () => addItemToJinnang('gemLuckyBag', itemQuantity),
        '宠物寿命晶石': () => addItemToJinnang('lifeGem', itemQuantity),
        '还童金丹': () => goldenRebornPill += itemQuantity,
        '延寿露': () => addDrugToInventory('延寿露', itemQuantity),
        '天山雪莲': () => addDrugToInventory('天山雪莲', itemQuantity),
        '忘忧水': () => addDrugToInventory('忘忧水', itemQuantity),
        '三花丸': () => addDrugToInventory('三花丸', itemQuantity),
        '游乐场门票': () => addItemToJinnang('casinoTicket', itemQuantity),
    };

    if (itemHandlers[itemBaseName]) {
        itemHandlers[itemBaseName]();
    } else if (!isPackage) {
        const [petName, skillName] = itemName.split('·');
        if (skillName) {
            if (document.getElementById('skills-area').children.length >= 12) {
                return showInfoBox("您的宠物已经达到技能上限，无法购买！");
            }
            if (petName !== currentPet.name) {
                return showInfoBox("您的当前宠物不会此技能，购买失败！");
            }
            if (document.getElementById('skills-area').innerText.includes(skillName)) {
                return showInfoBox("您的当前宠物已经拥有此技能，购买失败！");
            }
            addSkillToPet(skillName);
        } else {
            return showInfoBox("未知道具类型，购买失败！");
        }
    } else {
        return showInfoBox("未知包裹类型，购买失败！");
    }

    updateTopBarItems();
    updateJinnangItems();
    goldAmount -= price;
    updateGoldDisplay(goldAmount);

    if (itemBaseName !== '商城积分卡') {
        const credit = Math.round(price * 0.001);
        playerCredit += credit; //积分
        showInfoBox(`你花费了 ${convertPrice(price)}金 购买 ${itemName} ，获得 ${credit} 点商城积分`);
    } else {
        showInfoBox(`你花费了 ${convertPrice(price)}金 购买 ${itemName} `);
    }

    
    selectedItem.remove();
}


function addSkillToPet(skillName) {
    const skill = currentPet.skills.find(skill => skill.name === skillName);
    if (skill) {
        const skillDiv = document.createElement("div");
        skillDiv.innerText = `${skill.name} (${skill.rarity})`;
        skillDiv.onclick = () => deleteSkill(skill, skillDiv, document.getElementById("skills-area"));
        skillDiv.classList.add(skill.rarity.toLowerCase() + '-skill');
        document.getElementById("skills-area").appendChild(skillDiv);
    
        const currentSkills = Array.from(document.querySelectorAll("#skills-area div"))
            .map(div => {
                const [name, rarity] = div.innerText.split(" (");
                return { name, rarity: rarity.replace(")", "") };
            });
        updateSkillScore(currentSkills);
        updateTitle();
    }
}

function fulfillPetSkill() {
    const maxSkills = 12;
    const currentSkills = document.querySelectorAll("#skills-area div").length;

    // 检查是否已达到技能上限
    if (currentSkills >= maxSkills) {
        showInfoBox("您的宠物已经达到技能上限，无法添加更多技能！");
        return;
    }

    // 随机选择一个技能
    const randomIndex = Math.floor(Math.random() * currentPet.skills.length);
    const randomSkill = currentPet.skills[randomIndex];

    // 检查随机技能是否已存在
    const currentSkillNames = Array.from(document.querySelectorAll("#skills-area div"))
        .map(div => div.innerText.split(" (")[0]);

    if (currentSkillNames.includes(randomSkill.name)) {
        showInfoBox(`技能 "${randomSkill.name}" 已存在，本次生成无效！`);
        return;
    }

    // 添加随机技能
    addSkillToPet(randomSkill.name);

    // 检查是否达到技能上限后更新界面
    const updatedSkills = document.querySelectorAll("#skills-area div").length;
    if (updatedSkills >= maxSkills) {
        showInfoBox("技能已添加成功，您的宠物已达到技能上限！");
    } else {
        showInfoBox(`成功为宠物添加技能 "${randomSkill.name}"！`);
    }

    // 更新宠物的属性面板
    updateAttributePanel();
}

let playerCredit = 0;
let exchangeMode = false;
        
function openCreditShop() {
    const drawer = document.getElementById('credit-shop');
    const info = document.getElementById('credit-shop-info');
    const credit = document.getElementById('credit-detail');

    credit.innerText = playerCredit;
    drawer.classList.toggle('open');
    info.classList.toggle('open');
}

const creditItems = [  
    { name: 'hongHuang', price: 2888 },
    { name: 'wuxingTreasure', price: 1666 },  
    { name: 'elixirTreasure', price: 1666 },
    { name: 'largeLifeGem', price: 1288 },
    { name: 'advancedExperienceBook', price: 666 },
    { name: 'resetTrainCount', price: 3000 },
    { name: 'roseForLove', price: 1000 },
    { name: 'elixirExpDouble', price: 10000 },
    { name: 'magicMine', price: 4500 },
    { name: 'oilPaint', price: 6888 },
    { name: 'orangeArmComponents', price: 3600 },
    { name: 'towerGrass', price: 500 },
    { name: 'spiritualWater', price: 500 },
    { name: 'pinkThirdGem', price: 600 },
    { name: 'purpleThirdGem', price: 600 },
    { name: 'blueThirdGem', price: 200 },
    { name: 'yellowThirdGem', price: 200 },   
    { name: 'infiniteGem', price: 200000 }, 
    { name: 'renameDew', price: 5000 }, 
    { name: 'dyePowders', price: 2000 }, 
    { name: 'resetDyeTool', price: 500 },
];

function addItemToCreditShop(item, shopItems) {
    // 从jinnangItems中找到对应的商品信息
    const jinnangItem = jinnangItems.find(i => i.name === item.name);
    if (!jinnangItem) return; // 如果未找到对应商品，直接返回

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('shop-item');
    itemDiv.dataset.name = item.name;
    itemDiv.dataset.price = item.price;
    itemDiv.dataset.type = 'credit'; // 标记为积分商品

    itemDiv.innerHTML = `
        <img src="${jinnangItem.url}" alt="${jinnangItem.displayName}" style="border: 1px solid black;height: 45px;width: 45px;">
        <div class="item-text-container">
            <div class="item-text-top">${jinnangItem.displayName}</div>
            <div class="item-text-bottom">${item.price} 积分</div>
        </div>`;

    itemDiv.addEventListener('click', () => {
        const infoBox = document.getElementById('credit-shop-description');
        // 更新选择的UI效果
        document.querySelectorAll('.shop-item').forEach(el => el.classList.remove('selected'));
        itemDiv.classList.add('selected');
        // 更新描述信息
        infoBox.innerText = `${jinnangItem.displayName}，售价${item.price}积分。用途：${jinnangItem.description}`;
    });

    shopItems.appendChild(itemDiv);
}

function initializeCreditShop() {
    const shopItems = document.getElementById('credit-shop-items');
    shopItems.innerHTML = ''; // 清空现有内容

    // 遍历积分商品列表并添加到商店
    creditItems.forEach(item => {
        addItemToCreditShop(item, shopItems);
    });
}

let currentPurchaseInfo = null;

function createQuantitySelector(maxQuantity) {
    const content = document.createElement('div');
    content.style.textAlign = 'center';
    
    // 创建标题
    const title = document.createElement('div');
    title.style.fontSize = '16px';
    title.style.marginBottom = '15px';
    title.style.color = '#92341C';
    title.innerText = '请选择购买数量';
    content.appendChild(title);
    
    // 创建数量控制容器
    const controlsContainer = document.createElement('div');
    controlsContainer.style.display = 'flex';
    controlsContainer.style.alignItems = 'center';
    controlsContainer.style.justifyContent = 'center';
    controlsContainer.style.gap = '10px';
    controlsContainer.style.marginBottom = '15px';
    
    // 减少按钮
    const decreaseBtn = document.createElement('button');
    decreaseBtn.innerText = '-';
    decreaseBtn.style.cssText = `
        width: 30px;
        height: 30px;
        background: linear-gradient(to bottom, #E47F47, #CE6633, #963D1C);
        color: #F9DE9B;
        border: 1px solid #6f391c;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        box-shadow: inset 0px 0px 2px 1px #87431F;
    `;
    
    // 数量输入框
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = '1';
    quantityInput.min = '1';
    quantityInput.max = maxQuantity;
    quantityInput.style.cssText = `
        width: 60px;
        height: 28px;
        text-align: center;
        border: 1px solid #EBAC3B;
        background-color: #DFBF6E;
        color: #92341C;
        font-size: 14px;
    `;
    
    // 增加按钮
    const increaseBtn = document.createElement('button');
    increaseBtn.innerText = '+';
    increaseBtn.style.cssText = decreaseBtn.style.cssText;
    
    // 总价显示
    const totalCostDiv = document.createElement('div');
    totalCostDiv.style.marginTop = '10px';
    totalCostDiv.style.color = '#92341C';
    totalCostDiv.style.fontSize = '14px';
    
    // 添加事件监听
    const updateTotal = () => {
        const quantity = parseInt(quantityInput.value) || 1;
        const total = quantity * currentPurchaseInfo.price;
        totalCostDiv.innerText = `总计消耗：${total} 积分`;
        return total;
    };
    
    const validateAndUpdate = () => {
        let value = parseInt(quantityInput.value) || 1;
        value = Math.max(1, Math.min(value, maxQuantity));
        quantityInput.value = value;
        return updateTotal();
    };
    
    decreaseBtn.onclick = () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            validateAndUpdate();
        }
    };
    
    increaseBtn.onclick = () => {
        if (parseInt(quantityInput.value) < maxQuantity) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            validateAndUpdate();
        }
    };
    
    quantityInput.onchange = validateAndUpdate;
    
    controlsContainer.appendChild(decreaseBtn);
    controlsContainer.appendChild(quantityInput);
    controlsContainer.appendChild(increaseBtn);
    content.appendChild(controlsContainer);
    content.appendChild(totalCostDiv);
    
    // 初始化总价显示
    updateTotal();
    
    return {
        element: content,
        getQuantity: () => parseInt(quantityInput.value) || 1,
        getTotal: validateAndUpdate
    };
}

function buyCreditItems() {
    const selectedItem = document.querySelector('#credit-shop-items .shop-item.selected');
    if (!selectedItem) {
        return showInfoBox("请选择一个商品进行购买！");
    }

    currentPurchaseInfo = {
        name: selectedItem.dataset.name,
        price: parseInt(selectedItem.dataset.price, 10)
    };

    const maxQuantity = Math.floor(playerCredit / currentPurchaseInfo.price);
    if (maxQuantity < 1) {
        return showInfoBox("积分不足，购买失败！");
    }

    const quantitySelector = createQuantitySelector(maxQuantity);
    
    showInfoBox(
        "",
        () => {
            // 确认购买
            const quantity = quantitySelector.getQuantity();
            const totalCost = quantitySelector.getTotal();
            
            if (totalCost > playerCredit) {
                showInfoBox("积分不足，购买失败！");
                return;
            }

            // 执行购买
            playerCredit -= totalCost;
            addItemToJinnang(currentPurchaseInfo.name, quantity);

            // 更新显示
            document.getElementById('credit-detail').innerText = playerCredit;
            updateJinnangItems();

            const jinnangItem = jinnangItems.find(i => i.name === currentPurchaseInfo.name);
            showInfoBox(`成功使用${totalCost}积分购买了${quantity}个${jinnangItem.displayName}`);
            
            currentPurchaseInfo = null;
        },
        () => {
            // 取消购买
            currentPurchaseInfo = null;
        },
        '#92341C'
    );

    // 将数量选择器添加到信息框中
    const messageElement = currentInfoBox.querySelector('p');
    messageElement.appendChild(quantitySelector.element);
}

function exchangeCredit() {
    // 打开背包并设置为兑换模式
    toggleJinnangDrawer(true);
}

function exchangeItems(itemName) {
    const selectedItem = jinnangItems.find(i => i.name === itemName);
    if (!selectedItem) {
        showInfoBox("未找到选中的物品！");
        return;
    }

    // 创建或更新进度条
    const progressBarWrapper = createOrUpdateProgressBar(selectedItem, false, true); // 添加第三个参数表示是兑换模式

    // 显示兑换确认框
    showInfoBox('拖动进度条选择兑换数量的比例，并点击确认', () => {
        const progressBar = progressBarWrapper.querySelector('input[type="range"]');
        const exchangePercentage = progressBar.value;
        const quantityToExchange = Math.floor((exchangePercentage / 100) * selectedItem.quantity);
        
        if (quantityToExchange > 0) {
            const exchangeRate = Math.floor(selectedItem.price / 2000);
            const totalCredits = quantityToExchange * exchangeRate;
            
            // 扣除物品并添加积分
            selectedItem.quantity -= quantityToExchange;
            if (totalCredits < 1) {
                playerCredit += 1;
            } else {
                playerCredit += totalCredits;
            }
            
            // 更新显示
            document.getElementById('credit-detail').innerText = playerCredit;
            updateJinnangItems();
            
            showInfoBox(`成功将${quantityToExchange}个${selectedItem.displayName}兑换为${totalCredits >= 1 ? totalCredits : 1}积分`);
        } else {
            showInfoBox('没有选择有效的兑换数量');
        }
        // 无论成功或失败，都移除进度条
        removeProgressBar();
    }, () => removeProgressBar(), '#92341C');
}

// 初始化商店和倒计时
document.addEventListener('DOMContentLoaded', initShop);

let currentMerchantIndex = 0;
let currentOffer = null;
let currentHerbs = 0;
let starwindMaxMultiplier = 1.8;
let starwindHaggleCount = 0;
let guanghanHaggleCount = 0;
let chaosMerchantHaggleCount = 0;
let hasDealed = false;

// 定义商人状态缓存
const merchantStates = {};

const merchants = [
    {
        name: '朝云富商',
        description: '立足物产丰盈之朝云国，资本积累硕果颇丰，富甲一方。可惜心气浮躁，容不得生意场上半点不快。',
        img: 'https://pic.imgdb.cn/item/668029b4d9c307b7e9ef5248.png',
        getOffer: (skillScore) => {
            let rating, multiplier;
            if (skillScore >= 5000000) {
                rating = '至臻';
                multiplier = 1.6;
            } else if (skillScore >= 4000000) {
                rating = '绝佳';
                multiplier = 1.4;
            } else if (skillScore >= 3000000) {
                rating = '完整';
                multiplier = 1.2;
            } else if (skillScore >= 2000000) {
                rating = '尚可';
                multiplier = 1.0;
            } else if (skillScore >= 1000000) {
                rating = '一般';
                multiplier = 0.8;
            } else {
                rating = '不佳';
                multiplier = 0.6;
            }
            const price = Math.floor((skillScore / 25) * multiplier);
            return { price, rating };
        },
        haggle: (firstOffer) => {
            const multiplier = Math.random() * (1.2 - 0.8) + 0.8;
            const newOffer = Math.floor(firstOffer * multiplier);
            return newOffer;
        },
        reset: () => {
            chaosMerchantHaggleCount = 0;
        }
    },
    {
        name: '星风游商',
        description: '来自黄土高地的游商，有道是行者无疆，收集天下奇珍异宝，遇到宝物可不惜一切代价。',
        img: 'https://pic.imgdb.cn/item/668029b4d9c307b7e9ef522a.png',
        getOffer: (skillScore) => {
            const multiplier = Math.random() * (1.8 - 0.4) + 0.4;
            const price = Math.floor((skillScore / 25) * multiplier);
            return { price, rating: null };
        },
        haggle: (firstOffer) => {
            starwindMaxMultiplier = Math.max(0.4, starwindMaxMultiplier - 0.1);
            const multiplier = Math.random() * (starwindMaxMultiplier - 0.4) + 0.4;
            const newOffer = Math.floor(firstOffer * multiplier);
            return newOffer;
        },
        reset: () => {
            starwindMaxMultiplier = 1.8;
            starwindHaggleCount = 0;
        }
    },
    {
        name: '广寒药商',
        description: '极北之地亦能生长万物滋养百姓，靠的是千万药商为生灵谋康健。尝得百草，固守一方田间黄金库。',
        img: 'https://pic.imgdb.cn/item/668029b4d9c307b7e9ef5241.png',
        getOffer: (skillScore) => {
            let herbs;
            if (skillScore >= 3000000) {
                herbs = 50;
            } else if (skillScore >= 1500000) {
                herbs = 30;
            } else if (skillScore >= 900000) {
                herbs = 25;
            } else {
                herbs = 20;
            }
            const price = Math.floor((skillScore / 25) * 0.2);
            return { price, herbs };
        },
        haggle: (currentHerbs, currentOffer) => {
            if (currentHerbs < 61) {
                currentHerbs += 1;
                currentOffer = Math.floor(currentOffer * 0.99);
            }
            return { currentHerbs, currentOffer };
        },
        reset: () => {
            guanghanHaggleCount = 0;
        }
    }
];

function switchMerchant() {
    const currentMerchant = merchants[currentMerchantIndex];
    // 保存当前商人的状态
    merchantStates[currentMerchant.name] = {
        currentOffer,
        currentHerbs,
        starwindMaxMultiplier,
        starwindHaggleCount,
        guanghanHaggleCount,
        chaosMerchantHaggleCount
    };

    currentMerchantIndex = (currentMerchantIndex + 1) % merchants.length;
    displayMerchant();
}

function displayMerchant() {
    const merchant = merchants[currentMerchantIndex];
    // 恢复当前商人的状态
    if (hasDealed) {
        const offerData = merchant.getOffer(skillScore);
        currentOffer = offerData.price;
        currentHerbs = offerData.herbs || 0;
        hasDealed = false;
    } else if (merchantStates[merchant.name]) {
        const state = merchantStates[merchant.name];
        currentOffer = state.currentOffer;
        currentHerbs = state.currentHerbs;
        starwindMaxMultiplier = state.starwindMaxMultiplier;
        starwindHaggleCount = state.starwindHaggleCount;
        guanghanHaggleCount = state.guanghanHaggleCount;
        chaosMerchantHaggleCount = state.chaosMerchantHaggleCount;
    } else {
        const offerData = merchant.getOffer(skillScore);
        currentOffer = offerData.price;
        currentHerbs = offerData.herbs || 0;
    }

    const merchantSection = document.getElementById('merchant-section');
    merchantSection.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${merchant.img}" style="width: 65px; height: 65px; cursor: pointer;" onclick="switchMerchant()">
            <div style="margin-left: 10px;">
                <div style="font-size: 16px; font-weight: bold; color: white;">${merchant.name}</div>
                <div style="font-size: 14px; color: white;">${merchant.description}</div>
            </div>
        </div>
    `;

    const offerSection = document.getElementById('offer-section');
    offerSection.innerHTML = `
        ${merchant.name === '广寒药商' ? `<div style="font-size: 14px; color: white; font-weight: bold;">药商愿意给出金子：${convertPrice(currentOffer)}，草药：${currentHerbs}株，希望驭兽师大人成全。</div>` : `<div style="font-size: 14px; color: white; font-weight:bold;">在场商人看到你的宠物议论纷纷，其中你所询问的一位商人出价：${convertPrice(currentOffer)}金子，同意即可点击Deal交易。（提示：点击商人头像可更换议价对象）</div>`}
    `;
}

function haggle() {
    const merchant = merchants[currentMerchantIndex];
    const offerSection = document.getElementById('offer-section');

    if (merchant.name === '朝云富商') {
        if (chaosMerchantHaggleCount === 0) {
            chaosMerchantHaggleCount += 1;
            const newOffer = merchant.haggle(currentOffer);
            currentOffer = newOffer;
            const { rating } = merchant.getOffer(skillScore); // 获取正确的rating值
            offerSection.innerHTML = `<div style="font-size: 14px; color: white; font-weight: bold;">你的宠物在我眼里品相最多算个${rating}，不是什么千古未见的灵兽，没甚么好稀奇的！我再最后给你出价 ${convertPrice(currentOffer)} 金子！</div>`;
        } else {
            offerSection.innerHTML = `<div style="font-size: 14px; color: red; font-weight: bold;">老夫没有功夫和你掰扯这牛羊买卖之事！这1文金子和你做个一锤子买卖！</div>`;
            currentOffer = 1;
        }
    } else if (merchant.name === '星风游商') {
        if (starwindHaggleCount < 15) {
            starwindHaggleCount += 1;
            const newOffer = merchant.haggle(currentOffer);
            currentOffer = newOffer;
            offerSection.innerHTML = `<div style="font-size: 14px; color: white; font-weight: bold;">驭兽师，你的宠物我是越看越新生欢喜，你既有意割爱，我便愿意再出价${convertPrice(currentOffer)}金子，你考虑一下吧！</div>`;
        } else {
            offerSection.innerHTML = `<div style="font-size: 14px; color: red; font-weight: bold;">驯兽师，再不成交，天色就晚啦！我只能出到${convertPrice(currentOffer)}金子啦！</div>`;
        }
    } else if (merchant.name === '广寒药商') {
        if (guanghanHaggleCount < 10) {
            guanghanHaggleCount += 1;
            const result = merchant.haggle(currentHerbs, currentOffer);
            currentHerbs = result.currentHerbs;
            currentOffer = result.currentOffer;
            offerSection.innerHTML = `<div style="font-size: 14px; color: white; font-weight: bold;">驭兽人，我愿意出价金子：${convertPrice(currentOffer)}，和草药：${currentHerbs}株与你交换，你可愿意割爱？</div>`;
        } else {
            offerSection.innerHTML = `<div style="font-size: 14px; color: red; font-weight: bold;">驭兽人，因缘际会，若是实在无缘，老夫也只能黯然离开。（德高望重的药商离去后，在场商人都不愿和你交易，你只得到了来自司鬻部退还的1文代售手续费）</div>`;
            currentOffer = 1;
            currentHerbs = 1;
        }
    }
}

function deal() {
    const merchant = merchants[currentMerchantIndex];
    if (merchant.name === '广寒药商') {
        const drugKeys = Object.keys(drugInventory);
        for (let i = 0; i < currentHerbs; i++) {
            const randomDrug = drugKeys[Math.floor(Math.random() * drugKeys.length)];
            drugInventory[randomDrug].quantity += 1;
            logBattleEvent(`你获得了 ${randomDrug} x1`, 'pink');
        }
    }
    const petSelect = document.getElementById("pet-select");
    const selectedPetKey = petSelect.value;
    const petToDelete = currentPet.name;
    clearAdvancementStates(petToDelete); //处理清空宠物的技能加成
    // 从下拉菜单中移除当前宠物
    const optionToRemove = petSelect.querySelector(`option[value="${selectedPetKey}"]`);
        console.log(`出售的是:${selectedPetKey}`);
        if (optionToRemove) { 
            optionToRemove.remove();        
        }
        // 设置默认选择第一个宠物
        if (petSelect.options.length > 0) {
            petSelect.value = petSelect.options[0].value;
            changePet(true); // 更新宠物信息,跳过确认提示
        }
    updateDisplayContent();
    goldAmount += currentOffer;
    updateGoldDisplay(goldAmount);
    showInfoBox(`你在此交易中获得了${convertPrice(currentOffer)}金子`);
    deletePetData(petToDelete);
    // 重置所有商人的状态
    merchants.forEach(merchant => merchant.reset());
    hasDealed = true;
    closeMerchantModal();
    
    saveGameState();
}


// 显示商人交易界面
function showMerchantModal() {
    const merchantModal = document.createElement('div');
    merchantModal.style.position = 'fixed';
    merchantModal.style.top = '50%';
    merchantModal.style.left = '50%';
    merchantModal.style.transform = 'translate(-50%, -50%)';
    merchantModal.style.width = '300px';
    merchantModal.style.height = '400px';
    merchantModal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    merchantModal.style.borderRadius = '10px';
    merchantModal.style.padding = '20px';
    merchantModal.style.zIndex = '9999';
    merchantModal.style.display = 'flex';
    merchantModal.style.flexDirection = 'column';
    merchantModal.style.justifyContent = 'space-between';

    const merchantSection = document.createElement('div');
    merchantSection.id = 'merchant-section';
    merchantModal.appendChild(merchantSection);

    const offerSection = document.createElement('div');
    offerSection.id = 'offer-section';
    merchantModal.appendChild(offerSection);

    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '60px';
    buttonContainer.style.textAlign = 'center';
    buttonContainer.style.display = 'grid';
    buttonContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

    const dealButton = document.createElement('button');
    dealButton.innerText = 'DEAL!';
    dealButton.style.marginRight = '20px';
    dealButton.style.padding = '10px 20px';
    dealButton.style.borderRadius = '10px';
    dealButton.style.border = '1px solid white';
    dealButton.style.backgroundColor = 'green';
    dealButton.style.color = 'white';
    dealButton.style.cursor = 'pointer';
    dealButton.addEventListener('click', deal);
    buttonContainer.appendChild(dealButton);

    const haggleButton = document.createElement('button');
    haggleButton.innerText = '讨价还价';
    haggleButton.style.padding = '10px 20px';
    haggleButton.style.borderRadius = '10px';
    haggleButton.style.border = '1px solid white';
    haggleButton.style.backgroundColor = 'orange';
    haggleButton.style.color = 'white';
    haggleButton.style.cursor = 'pointer';
    haggleButton.addEventListener('click', haggle);
    buttonContainer.appendChild(haggleButton);

    merchantModal.appendChild(buttonContainer);

    document.body.appendChild(merchantModal);

    displayMerchant();

    currentInfoBox = merchantModal;
}

// 关闭商人交易界面
function closeMerchantModal() {
    if (currentInfoBox) {
        document.body.removeChild(currentInfoBox);
        currentInfoBox = null;
    }
}

// 修改后的 sellPet 函数
function sellPet() {
    const skillScoreElement = document.getElementById("skill-score");
    skillScore = parseInt(skillScoreElement.innerText, 10);

    if (skillScore < 10000) {
        showInfoBox("宠物当前分数低于10000分，无法出售！");
        return;
    }

    const petSelect = document.getElementById("pet-select");
    const selectedPetKey = petSelect.value;

    if (petSelect.options.length <= 1) {
        showInfoBox("这是您的唯一爱宠了，请好好珍惜它！");
        return;
    }

    showInfoBox("\n1. 你的宠物会被运送至市场供商人出价，无论市场估价结果如何，宠物都会被出售。\n2.请注意首页下拉栏显示名称与你想出售的宠物一致，否则将错误地出售其他宠物！", () => {
        // 检查是否有五行符被当前宠物装备，遍历全局变量
        const petAmulet = wuxingStates.find(a => a.equipped && a.currentPetName === currentPet.name);
        const petElixir = elixirStates.find(e => e.equipped && e.equippedPet === currentPet.name);
        
        if (petAmulet || qualityPillCount > 0 || petElixir) {
            showInfoBox('宠物售卖需要卸下所有的资质仙丹、五行符和内丹', null, null, 'red');
            return;
        } else {
            showMerchantModal();
        }
    });
}

function resetPet() {

    // 重置宠物资质和属性
    currentPet.qualities.tier = '普通';
    currentPet.qualities.growthRate = 100;
    currentPet.qualities.mutated = false;

    // 重置当前资质为最小值
    currentPet.qualities.agility.current = currentPet.qualities.agility.min;
    currentPet.qualities.endurance.current = currentPet.qualities.endurance.min;
    currentPet.qualities.faith.current = currentPet.qualities.faith.min;
    currentPet.qualities.intelligence.current = currentPet.qualities.intelligence.min;
    currentPet.qualities.strength.current = currentPet.qualities.strength.min;

    // 重置基础属性为初始值，调用calculateAttribute
    baseAttributes = {
        agility: calculateAttribute(currentPet.qualities.agility.min, currentPet.qualities.growthRate / 100, petLevel, 0, false),
        endurance: calculateAttribute(currentPet.qualities.endurance.min, currentPet.qualities.growthRate / 100, petLevel, 0, false),
        faith: calculateAttribute(currentPet.qualities.faith.min, currentPet.qualities.growthRate / 100, petLevel, 0, false),
        intelligence: calculateAttribute(currentPet.qualities.intelligence.min, currentPet.qualities.growthRate / 100, petLevel, 0, false),
        strength: calculateAttribute(currentPet.qualities.strength.min, currentPet.qualities.growthRate / 100, petLevel, 0, false)
    };

    // 初始化等级和其他基础属性
    additionalPlayerCultivation = 0;
    qualityPillCount = 0;
    consumedPillCount = 0;
    armsOpened = false; // 武装上锁
    ascensionAttributes = {
        health: 0,
        mana: 0,
        magicAttack: 0,
        magicDefense: 0,
        physicalAttack: 0,
        physicalDefense: 0,
        speed: 0
    };
    ascensionEnabled = false; // 飞升之术关闭
    ascensionSkill = {
        name: '未开启',
        level: 1,
        effect: '未开启飞升技能'
    }; // 第一个飞升技能为空
    awakenAttributes = {
        agility: 0,
        endurance: 0,
        faith: 0,
        intelligence: 0,
        strength: 0
    };
    additionalAttributes = {
        agility: 0,
        endurance: 0,
        faith: 0,
        intelligence: 0,
        strength: 0
    };
    awakened = false;
    bonusAttributes = {
        agility: 0,
        endurance: 0,
        faith: 0,
        intelligence: 0,
        strength: 0
    };
    currentExp = 0; // 当前经验值
    currentSpecialization = null;
    currentWisdom = 0;
    defaultImageUrl = "https://pic.imgdb.cn/item/665d02afd9c307b7e903151b.png";
    divinedWeaponStatus = false;
    document.body.style.backgroundImage = "";
    document.getElementById("hallucination-level").innerText = `${hallucinationLevel}`;
    tempBonus = {
        health: 0,
        mana: 0,
        magicAttack: 0,
        magicDefense: 0,
        physicalAttack: 0,
        physicalDefense: 0,
        speed: 0
    };
    drugBonus0 = {
        health: 0,
        mana: 0,
        magicAttack: 0,
        magicDefense: 0,
        physicalAttack: 0,
        physicalDefense: 0,
        speed: 0
    }; // 药品增幅buff清空
    drugBonus = {
        health: 0,
        mana: 0,
        magicAttack: 0,
        magicDefense: 0,
        physicalAttack: 0,
        physicalDefense: 0,
        speed: 0
    }; // 药品增幅buff清空
    enemyCritDamage = 1.8; // 180%
    enemyCritRate = 0.6; // 60%
    evolutionLevel = 0;
    experienceTreasureOpenCount = 0;
    growthRate = 1;
    hallucinated = false;
    hallucinationLevel = 0;
    lockArms();
    maxExp = 208; // 经验值上限
    petAscended = false;
    petLevel = 1;
    petMaxLevel = 149;
    petWisdom = currentWisdom;
    playerCritDamage = 1.5; // 150%
    playerCritRate = 0.1; // 10%
    poisonSkillActivated = false; // 施毒之术关闭
    reenableAscension = false; // 第二个飞升之术关闭
    remainingPoints = 0;
    removeArmsAttributes();
    if (!onBattleState && enemyInitialState !== null) {
        restoreEnemyState();
    }
    secondAscensionSkill = {
        name: '未开启',
        level: 1,
        effect: '未开启飞升技能'
    }; // 第二个飞升技能为空
    setInnerText("agility-current", currentPet.qualities.agility.current);
    setInnerText("attribute-agility", baseAttributes.agility);
    setInnerText("attribute-endurance", baseAttributes.endurance);
    setInnerText("attribute-faith", baseAttributes.faith);
    setInnerText("attribute-intelligence", baseAttributes.intelligence);
    setInnerText("attribute-strength", baseAttributes.strength);
    setInnerText("current-wisdom", 0);
    setInnerText("endurance-current", currentPet.qualities.endurance.current);
    setInnerText("evolution-level", evolutionLevel);
    setInnerText("faith-current", currentPet.qualities.faith.current);
    setInnerText("growth-rate", currentPet.qualities.growthRate);
    setInnerText("intelligence-current", currentPet.qualities.intelligence.current);
    setInnerText("mutated", currentPet.qualities.mutated ? "是" : "否");
    setInnerText("pet-level", petLevel);
    setInnerText("skill-score", skillScore);
    setInnerText("strength-current", currentPet.qualities.strength.current);
    setInnerText("tier", currentPet.qualities.tier);
    setInnerText("train-count", 0);
    skillScore = 0; // 初始化评分
    spiritLevel = 1;
    spiritMultiplier = 1.00;
    trainingCount: 0;
    const secondSkillBox = document.getElementById('second-ascension-skill');
    secondSkillBox.style.display = 'none'; // 隐藏第二飞升技能面板
    const skillsArea = document.getElementById("skills-area");
    if (skillsArea) {
        skillsArea.innerHTML = ""; // 清空技能区域
    }

    resetArmsState(); //重置武装

    // 更新显示的各项数值
    updateAscensionButton();
    updateQualityDisplayWithBonuses();
    updateAscensionDisplay();
    updateAscensionStatus();
    updateAttributePanel();
    updateAwakenStatus();
    updatePetInfo();
    updateQualityDisplayWithBonuses();
    updateTopBarItems();
}

function resetArmsState() {
    armsAttributes = [];
    armsAttributes = {
        horn: { type: "尖角", value: 0, attributes: ["physicalAttack", "magicAttack", "health", "mana"], url: "https://pic.imgdb.cn/item/666f194ed9c307b7e907bfb2.png", enduranceValue: 500, activated: false, description:'锐利无比的尖角，能轻易刺穿敌人的弱点!' },
        fur: { type: "毛皮", value: 0, attributes: ["physicalDefense", "magicDefense", "health"], url: "https://pic.imgdb.cn/item/666f194dd9c307b7e907bf7b.png", enduranceValue: 500, activated: false, description:'手感非凡的护甲之物，能带来不俗的防御能力!' },
        fang: { type: "獠牙", value: 0, attributes: ["physicalAttack", "speed", "magicAttack"], url: "https://pic.imgdb.cn/item/666f194dd9c307b7e907bed6.png", enduranceValue: 500, activated: false, description:'上古神兽曾用它噬铁碎骨!' },
        claw: { type: "利爪", value: 0, attributes: ["physicalAttack", "speed", "magicAttack", "mana"], url: "https://pic.imgdb.cn/item/666f194dd9c307b7e907be47.png", enduranceValue: 500, activated: false, description:'利爪挥过，血流成河!' },
        tailWhip: { type: "尾鞭", value: 0, attributes: ["physicalAttack", "speed", "magicAttack"], url: "https://pic.imgdb.cn/item/666f194cd9c307b7e907bdd1.png", enduranceValue: 500, activated: false, description:'虽不如毒鳌般凌厉，仍有破势之力!' },
        husk: { type: "甲壳", value: 0, attributes: ["physicalDefense", "speed", "magicDefense"], url: "https://pic1.imgdb.cn/item/67838b45d0e0a243d4f3a281.png", enduranceValue: 500, activated: false, description:'自然之力形成的坚硬盔甲，可抵敌人中伤!' },
        feather: { type: "翎羽", value: 0, attributes: ["speed"], url: "https://pic1.imgdb.cn/item/67838b44d0e0a243d4f3a280.png", enduranceValue: 500, activated: false, description:'中空结构却格外稳固，拥有它才懂什么是如虎添翼!' },
        textile: { type: "兽纹", value: 0, attributes: ["physicalDefense", "magicDefense"], url: "https://pic1.imgdb.cn/item/67838b45d0e0a243d4f3a283.png", enduranceValue: 500, activated: false, description:'斑斓的纹理以鲜艳的颜色警告它的敌人，靠近就是死亡!' },
        prick: { type: "尖刺", value: 0, attributes: ["physicalAttack", "magicAttack"], url: "https://pic1.imgdb.cn/item/67838b45d0e0a243d4f3a282.png", enduranceValue: 500, activated: false, description:'飞射的尖刺是杀手杀人于无形的致命武器!' },
    };
    resetArmsAwakenState();
}
        
function setInnerText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = value;
    } else {
        console.warn(`元素ID为 ${id} 的元素未找到。`);
    }
}

function toggleDrawer() {
    const drawer = document.getElementById('quality-drawer');
    const info = document.getElementById('quality-info');
    drawer.classList.toggle('open');
    info.classList.toggle('open');
}

function checkDrawerOpen() {
    const drawer = document.getElementById('quality-drawer');
    if (!drawer.classList.contains('open')) {
        const messageBox = document.createElement('div');
        messageBox.style = "padding: 20px; background: white; border: 1px solid black; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000;";
        messageBox.innerHTML = `<p>请先打开资质面板！</p>
                                <button onclick="document.body.removeChild(this.parentNode)">关闭</button>`;
        document.body.appendChild(messageBox);
        return false;
    }
    return true;
}

function upgradeWisdom() {
    let successRate;

    if (currentWisdom < 20) {
        if (highGradePill < 1) {
            showInfoBox("您的高级悟性丹已耗尽！");
            return;
        }

        highGradePill--;
        document.getElementById("high-grade-pill").innerText = highGradePill;

        if (currentWisdom < 7) successRate = 0.9;
        else if (currentWisdom < 13) successRate = 0.75;
        else if (currentWisdom < 18) successRate = 0.45;
        else successRate = 0.15;

        if (Math.random() < successRate) {
            currentWisdom = Math.min(currentWisdom + 1, 20);
        } else {
            if (currentWisdom > 0) {
                if (currentWisdom < 8) currentWisdom = Math.max(0, currentWisdom - 2);
                else if (currentWisdom < 13) currentWisdom = Math.max(8, currentWisdom - 2);
                else if (currentWisdom < 18) currentWisdom = Math.max(13, currentWisdom - 2);
                else currentWisdom = Math.max(15, currentWisdom - 2);
            }
        }
    } else {
        if (!awakened) {
            showInfoBox("您的宠物悟性已到上限！");
            return;
        }

        const tejiWisdomPillItem = jinnangItems.find(i => i.name === 'tejiWisdomPill');

        if (!tejiWisdomPillItem || tejiWisdomPillItem.quantity < 1) {
            showInfoBox("您的特级悟性丹已耗尽！");
            return;
        }

        tejiWisdomPillItem.quantity--;
        updateJinnangItems();

        if (currentWisdom == 20) successRate = 0.85;
        else if (currentWisdom == 21) successRate = 0.65;
        else if (currentWisdom == 22) successRate = 0.45;
        else if (currentWisdom == 23) successRate = 0.25;
        else successRate = 0.05;

        if (Math.random() < successRate) {
            currentWisdom = Math.min(currentWisdom + 1, 25);
        } else {
            currentWisdom = Math.max(20, currentWisdom - 2);
        }
    }

    document.getElementById("current-wisdom").innerText = currentWisdom;
    document.getElementById("attribute-wisdom").value = currentWisdom; // 更新输入框的值

    updateAttributePanel(); // 更新属性面板
}

function trainSkills() {
    executeTransmutationPillLogic();
}

function executeTransmutationPillLogic() {
    if (transmutationPill < 1) {
        showInfoBox("您的道具不够，请刷新后重试！");
        return;
    }

    transmutationPill--;
    document.getElementById("transmutation-pill").innerText = transmutationPill;

    let skillNum;
    if (currentWisdom < 13) {
        skillNum = Math.min(getRandomSkillNum([0.80, 0.05, 0.05, 0.02, 0.02, 0.02]), 5, currentPet.skills.length);
    } else if (currentWisdom < 17) {
        skillNum = Math.min(getRandomSkillNum([0.80, 0.05, 0.05, 0.02, 0.02, 0.02]), 6, currentPet.skills.length);
    } else if (currentWisdom < 19) {
        skillNum = Math.min(getRandomSkillNum([0.80, 0.05, 0.05, 0.02, 0.02, 0.02]), 7, currentPet.skills.length);
    } else if (currentWisdom < 20) {
        skillNum = Math.min(getRandomSkillNum([0.80, 0.05, 0.05, 0.02, 0.02, 0.02]), 8, currentPet.skills.length);
    } else {
        skillNum = Math.max(3, Math.min(getRandomSkillNum([0.80, 0.05, 0.05, 0.02, 0.02, 0.02, 0.01, 0.01, 0.008, 0.002]), currentPet.skills.length));
    }

    const selectedSkills = selectRandomSkills(skillNum, skillNum, currentPet.skills.length);

    if (selectedSkills.length >= 8) {
        showInfoBox("你把技能洗爆了,点击确定查看!", () => {
            updateSkillsAndNotify(selectedSkills);
        });
        return;
    }

    updateSkillsAndNotify(selectedSkills);
}

// 封装技能随机选择逻辑，并确保不选中已学习的技能
function selectRandomSkills(minSkillNum, maxSkillNum, maxPossibleSkills) {
    const skillNum = Math.min(Math.floor(Math.random() * (maxSkillNum - minSkillNum + 1)) + minSkillNum, maxPossibleSkills);
    const selectedSkills = [];
    
    while (selectedSkills.length < skillNum) {
        const randomSkill = currentPet.skills[Math.floor(Math.random() * currentPet.skills.length)];
        // 添加 byLearned 检查，确保技能没有被学习
        if (!randomSkill.byLearned && !selectedSkills.includes(randomSkill)) {
            selectedSkills.push(randomSkill);
        }
    }
    return selectedSkills;
}

// 更新技能区域并显示通知
function updateSkillsAndNotify(selectedSkills) {
    updateSkillsArea(selectedSkills);
    updateSkillScore(selectedSkills);
    updateTitle();
}


function getRandomSkillNum(probabilities) {
    const total = probabilities.reduce((sum, prob) => sum + prob, 0);
    let rand = Math.random() * total;
    for (let i = 0; i < probabilities.length; i++) {
        if (rand < probabilities[i]) {
            return i + 1;
        }
        rand -= probabilities[i];
    }
    return 1;
}
        
function updateSkillsArea(selectedSkills) {
    const skillsArea = document.getElementById("skills-area");
    const skillsDrawerArea = document.getElementById("skills-in-drawer");
    const existingSkills = Array.from(skillsArea.children).map(skillDiv => skillDiv.innerText.split(' ')[0]);
    
    skillsArea.innerHTML = "";
    skillsDrawerArea.innerHTML = ""; // 清空抽屉区域
    
    selectedSkills.forEach(skill => {
        if (!existingSkills.includes(skill.name)) {
            // 为主区域创建技能元素
            const skillDiv = createSkillElement(skill);
            const drawerSkillDiv = createSkillElement(skill, true); // 为抽屉区域创建独立的技能元素
            
            // 添加点击事件,删除对应区域的元素
            skillDiv.onclick = () => deleteSkill(skill, skillDiv, skillsArea);
            drawerSkillDiv.onclick = () => deleteSkill(skill, drawerSkillDiv, skillsDrawerArea);
            
            // 分别添加到不同区域
            skillsArea.appendChild(skillDiv);
            skillsDrawerArea.appendChild(drawerSkillDiv);
        }
    });
}

// 抽取创建技能元素的公共函数
function createSkillElement(skill, skillsInDrawer = false) {
    // 如果还没有添加过样式，则添加样式定义
    if (skillsInDrawer && !document.getElementById('skillsDrawerStyles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'skillsDrawerStyles';
        styleSheet.textContent = `
            /* 使用更具体的选择器来覆盖默认样式 */
            .skills-in-drawer div.a-skillsInDrawer {
                background-color: #4a90e2 !important;
                background-image: url(https://pic1.imgdb.cn/item/677fea29d0e0a243d4f2d284.png) !important;
                background-position: center !important;
            }
            
            .skills-in-drawer div.s-skillsInDrawer {
                background-color: #4a90e2 !important;
                background-image: url(https://pic1.imgdb.cn/item/677f9b49d0e0a243d4f29b0e.png) !important;
                background-position: center !important;
            }
            
            .skills-in-drawer div.ss-skillsInDrawer {
                background-color: #844a0f !important;
                background-image: url(https://pic1.imgdb.cn/item/677f9b49d0e0a243d4f29b0d.png) !important;
                background-position: center !important;
            }
            
            .skills-in-drawer div.sss-skillsInDrawer {
                background-color: #b71540 !important;
                background-image: url(https://pic1.imgdb.cn/item/677f9b49d0e0a243d4f29b0b.png) !important;
                background-position: center !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    const skillDiv = document.createElement("div");
    skillDiv.innerText = `${skill.name} (${skill.rarity})`;
    
    if (skillsInDrawer) {
        switch(skill.rarity) {
            case 'A':
                skillDiv.classList.add('a-skillsInDrawer');
                break;
            case 'S':
                skillDiv.classList.add('s-skillsInDrawer');
                break;
            case 'SS':
                skillDiv.classList.add('ss-skillsInDrawer');
                break;
            case 'SSS':
                skillDiv.classList.add('sss-skillsInDrawer');
                break;
        }
    } else {
        // 原有的主区域样式处理
        const stylePrefix = '-skill';
        switch(skill.rarity) {
            case 'S':
                skillDiv.classList.add(`s${stylePrefix}`);
                break;
            case 'SS':
                skillDiv.classList.add(`ss${stylePrefix}`);
                break;
            case 'SSS':
                skillDiv.classList.add(`sss${stylePrefix}`);
                break;
        }
    }
    
    return skillDiv;
}

function createSkills(name, rarity, type, level, multiplier, description) {
    const skillsArea = document.getElementById("skills-area");
    const skillsDrawerArea = document.getElementById("skills-in-drawer");
    const existingSkills = Array.from(skillsArea.children).map(skillDiv => skillDiv.innerText.split(' ')[0]);
    const sssSkills = currentPet.skills.filter(skill => {
        return existingSkills.includes(skill.name) && skill.rarity === 'SSS';
    });

    if (rarity === 'SSS' && sssSkills.length > 2) {
        showInfoBox('SSS技能最多只能同时拥有三个！',null,null,'red');
        return;
    }
    
    if (existingSkills.length >= 12) {
        showInfoBox('已超过可拥有的技能数量上限！',null,null,'red');
        return;
    }
    
    if (!existingSkills.includes(name)) {
        currentPet.skills.push({ 
            name: name, 
            rarity: rarity, 
            type: type, 
            level: level, 
            multiplier: multiplier, 
            description: description,
            byLearned: true
        });
    } else {
        showInfoBox('此技能你已经学会，无法重复学习！',null,null,'red');
        return;
    }
    
    const skill = currentPet.skills.find(s => s.name === name);
    showInfoBox(`成功学会${name}，技能效果：${description}`);
    
    // 为两个区域创建独立的技能元素
    const skillDiv = createSkillElement(skill, false);
    const drawerSkillDiv = createSkillElement(skill, true);
    
    // 修改点击事件处理，添加事件对象 e 并阻止冒泡
    skillDiv.onclick = (e) => {
        e.stopPropagation(); // 阻止事件冒泡
        deleteSkill(skill, skillDiv, skillsArea, drawerSkillDiv, skillsDrawerArea);
    };
    
    drawerSkillDiv.onclick = (e) => {
        e.stopPropagation(); // 阻止事件冒泡
        levelUpSkill();
    };
    
    // 添加到各自的区域
    skillsArea.appendChild(skillDiv);
    skillsDrawerArea.appendChild(drawerSkillDiv);
    updateAttributePanel();
}

function deleteSkill(skill, clickedDiv, clickedArea, pairedDiv, pairedArea) {
    const matchingSkill = currentPet.skills.find(s => s.name === skill.name);
    const skillType = matchingSkill.type;
    if (matchingSkill) {
        let skillLevel = matchingSkill.level ? matchingSkill.level : 1;
        let skillMultiplier = calculateSkillLevelAndMultiplier(matchingSkill).skillMultiplier;
        
        // 定义需要显示系数的技能类型
        const showMultiplierTypes = ['PA', 'PAE', 'MA', 'MAE', 'PP', 'PPE', 'PH', 'PHE', 'TC'];


        const skillTypeMap = {
            "PA": "物理攻击技能，与物理攻击力相关",
            "PAE": "高级物理攻击技能，通常带有特殊效果或更高的技能伤害",
            "MA": "法术攻击技能，与法术攻击力相关",
            "MAE": "高级法术攻击技能，通常带有特殊效果或更高的技能伤害",
            "PP": "施毒技能，与法术攻击力和修为有关",
            "PPE": "高级施毒技能，通常带有更猛烈的战斗效果",
            "PH": "治疗技能，与法术攻击力和修为有关",
            "PHE": "高级治疗技能，通常带有加强或增益的效果",
            "PD": "防御技能，会根据技能系数增加防御的伤害抵消数值",
            "PDE": "高级防御技能，通常带有特殊效果",
            "SH": "智慧守护技能,在战斗中会根据等级消耗一定比例的法力值来抵消伤害",
            "HL": "法力回复技能，在战斗中会根据等级每回合回复一定比例的法力值",
            "FH": "复活技能，拥有该技能的宠物会根据技能等级计算在战局中的复活次数和恢复血量",
            "JK": "解除控制技能，拥有该技能的宠物会根据技能等级，按照一定概率解除来自敌人的控制效果",
            "JKE": "高级辅助技能，拥有该技能的宠物会根据技能等级，按照技能说明为玩家提供增益",
            "N": "被动属性加成技能，将会按照固定值为玩家提供二级属性",
            "NE": "高级被动技能，通常会增强宠物的专有属性，此类技能最高可升至6级",
            "TC": "十分罕见的必杀技！拥有这种技能的宠物能在战场所向披靡"
        };
        const skillDescription = matchingSkill.description;
        const skillTypeDescription = skillTypeMap[skillType] || "未知类型技能";
        
        // 根据技能类型决定是否显示系数
        const multiplierText = showMultiplierTypes.includes(skillType) 
            ? `，当前技能系数为${(skillMultiplier * 100).toFixed(0)}%` 
            : '';
        
        function onConfirm() {
            // 只重置技能等级和系数，不从数组中删除
            matchingSkill.level = 1;
            const deleteResult = calculateSkillLevelAndMultiplier(matchingSkill);
            skillLevel = deleteResult.skillLevel;
            skillMultiplier = deleteResult.skillMultiplier;
            
            // 安全地删除页面元素
            function safeRemoveChild(parent, child) {
                if (parent && child && parent.contains(child)) {
                    parent.removeChild(child);
                }
            }
            
            // 从两个区域中删除技能元素
            const skillsArea = document.getElementById("skills-area");
            const skillsDrawerArea = document.getElementById("skills-in-drawer");
            
            safeRemoveChild(skillsArea, clickedDiv);
            safeRemoveChild(skillsDrawerArea, clickedDiv);
            
            // 更新评分
            const remainingSkills = Array.from(skillsArea.children).map(div => {
                const [name, rarity] = div.innerText.split(' (');
                return { name, rarity: rarity.replace(')', '') };
            });
            
            updateSkillScore(remainingSkills);
            // 删除页面元素后再同步
            syncSkillsAreas();
        }

        function onCancel() {
            console.log('取消删除技能');
        }

        showInfoBox(
            `\n${skill.name} ${skillLevel}级：${skillDescription}\n\n⚠️上述说明来自「天书奇谈」官方页面，在本模拟器中的真实作用：\n\n这是一个${skillTypeDescription}${multiplierText}\n\n你是否要删除此技能?`,
            () => {
                showInfoBox(`你确定要删除${skill.name}吗？删除后可通过重新选择技能恢复！`,
                    onConfirm,
                    onCancel,
                    'red'
                );
            },
            onCancel,
            'black'
        );
    } else {
        console.error('未找到匹配的技能');
        showInfoBox('未找到匹配的技能，删除操作无法进行。', null, null, 'red');
    }
    syncSkillsAreas();
}

function syncSkillsAreas() {
    const skillsArea = document.getElementById("skills-area");
    const skillsDrawerArea = document.getElementById("skills-in-drawer");
    
    // 获取主区域的技能列表作为基准
    const mainSkills = Array.from(skillsArea.children).map(div => {
        const [name, rarity] = div.innerText.split(' (');
        return { name, rarity: rarity.replace(')', '') };
    });
    
    // 清空抽屉区域
    skillsDrawerArea.innerHTML = '';
    
    // 重新创建抽屉区域的技能元素
    mainSkills.forEach(skill => {
        const matchingSkill = currentPet.skills.find(s => s.name === skill.name);
        if (matchingSkill) {
            const drawerSkillDiv = createSkillElement(matchingSkill, true);
            // 使用与 createSkills 相同的事件绑定方式
            drawerSkillDiv.onclick = (e) => {
                e.stopPropagation();
                levelUpSkill();
            };
            skillsDrawerArea.appendChild(drawerSkillDiv);
        }
    });
}

        
// 技能效果的定时器需要全局定义，计时器可以不定义，使用battleState.enemy[status]即可
let bleedingInterval = null;
let healingInterval = null;
let globalPoisonInterval;
let globalPoisonTimer;
let globalPoisonActive = false;


// 提取公共的伤害计算模型
function calculateCommonDamage(type, skillMultiplier, extraConfig = {}) {
    // 参数类型和有效性检查
    if (!['physical', 'magical'].includes(type)) {
        console.warn('Invalid damage type:', type);
        type = 'physical'; // 默认使用物理伤害
    }
    
    // 技能倍率保护
    skillMultiplier = Number(skillMultiplier) || 1;
    if (skillMultiplier <= 0 || isNaN(skillMultiplier)) {
        console.warn('Invalid skillMultiplier:', skillMultiplier);
        skillMultiplier = 1;
    }

    // 解构并保护配置参数
    const {
        baseAttack = 0,
        enemyDefense = 0,
        ignoreDodge = false,
        ignoreDefense = false
    } = extraConfig || {};

    // 基础攻击力和防御力保护
    const safeBaseAttack = Math.max(0, Number(baseAttack) || 0);
    const safeEnemyDefense = Math.max(0, Number(enemyDefense) || 0);

    // 处理闪避
    if (!ignoreDodge) {
        try {
            if (type === 'physical' && handleDodge('enemy')) return { finalDamage: 0, isCritical: false };
            if (type === 'magical' && handleMagicDodge('enemy')) return { finalDamage: 0, isCritical: false };
        } catch (error) {
            console.error('Error in dodge calculation:', error);
            // 闪避检查失败时继续执行，不中断战斗流程
        }
    }

    // 计算防御减伤（保护随机值范围）
    const defenseFactor = Math.min(1.2, Math.max(0.8, Math.random() * (1.2 - 0.8) + 0.8));
    const x = safeEnemyDefense * defenseFactor;
    
    let effectiveDefense;
    try {
        effectiveDefense = ignoreDefense ? 0 : (f(x) || 0);
    } catch (error) {
        console.error('Error in defense calculation:', error);
        effectiveDefense = 0;
    }

    const constantDamageReduction = Math.max(0, Math.round(safeEnemyDefense * 0.1));

    // 计算基础伤害（防止除以零或无效计算）
    let baseDamage;
    if (effectiveDefense !== 0) {
        baseDamage = Math.max(1, Math.floor(safeBaseAttack * skillMultiplier * (1 - Math.min(0.99, effectiveDefense))));
    } else {
        baseDamage = Math.max(1, Math.floor(safeBaseAttack * skillMultiplier));
    }

    // 暴击检查保护
    let isCritical = false;
    try {
        isCritical = checkCriticalHit(Math.min(1, Math.max(0, battleState.player.critRate || 0)));
    } catch (error) {
        console.error('Error in critical hit check:', error);
    }

    // 伤害计算保护
    let damage;
    try {
        damage = calculateDamage(
            baseDamage,
            isCritical,
            Math.max(0, battleState.player.critDamage || 0),
            true
        );
    } catch (error) {
        console.error('Error in damage calculation:', error);
        damage = baseDamage; // 降级到基础伤害
    }

    // 火符效果保护
    let activeEffects;
    try {
        activeEffects = applyWuxingEffects() || {};
    } catch (error) {
        console.error('Error in Wuxing effects:', error);
        activeEffects = {};
    }

    if (activeEffects.fireAmulet && activeEffects.fireAmulet > 0) {
        const damageBoostPercentage = [0, 0.02, 0.05, 0.07, 0.12, 0.20, 0.22, 0.25, 0.28, 0.4][
            Math.min(9, Math.max(0, activeEffects.fireAmulet))
        ] || 0;
        
        const fireEffect = Math.floor(damage * damageBoostPercentage);
        damage = Math.floor(damage * (1 + damageBoostPercentage));
        
        if (!isNaN(fireEffect) && fireEffect > 0) {
            try {
                logBattleEvent(`🔴奥义·火之易伤！伤害增加了 ${fireEffect} 点。`, 'pink');
            } catch (error) {
                console.error('Error in battle log:', error);
            }
        }
    }

    // 斩龙一式效果保护
    try {
        if ((ascensionSkill?.name === '斩龙一式' || secondAscensionSkill?.name === '斩龙一式') && 
            battleState?.enemy?.health / (enemyMaxHealth || 1) > (battleState?.player?.whiteNightThreshold || 0)) {
            damage = Math.floor(damage * 1.4);
        }
    } catch (error) {
        console.error('Error in ascension skill check:', error);
    }

    // 确保最终返回有效的数值
    return {
        finalDamage: Math.max(1, Math.floor(damage - constantDamageReduction)),
        isCritical: Boolean(isCritical)
    };
}

function applySpecialSkillEffects(skill, value = null) {
    const skillDetail = calculateSkillLevelAndMultiplier(skill); //得到skillLevel, skillMultiplier
    // 通用后续效果处理函数
    const handlePostEffects = (type, damage, isCritical = false) => {
        if (type === 'physical') applyPhysicalAttackEffects();
        if (type === 'magical') applyMagicAttackEffects(damage);
        
        // 1. 水符效果
        if (waterAmuletTriggered) {
            updateDamageValue(damage, false, 'extra-damage');
            waterAmuletTriggered = false;
        }

        // 2. 穿透效果
        if (battleState.enemy.pierced) {
            handlePierced();
        }

        // 3. 物理攻击特有效果
        if (type === 'physical' && (ascensionSkill.name === '吸血魔刃' || secondAscensionSkill.name === '吸血魔刃')) {
            const bloodSuckPercentage = (ascensionSkill.name === '吸血魔刃' ? ascensionSkill : secondAscensionSkill)
                .increment((ascensionSkill.name === '吸血魔刃' ? ascensionSkill : secondAscensionSkill).level) / 100;
            const healAmount = Math.floor(damage * bloodSuckPercentage);
            battleAttributes.health = Math.min(maxHealth, battleAttributes.health + healAmount);
            logBattleEvent(`吸血魔刃触发,吸取了 ${healAmount} 点生命值。`, 'red');
        }

        // 应用8件套特殊效果 - 生命吸取
        const awakenedCount = applySuitEffects ? applySuitEffects() : 0;
        if (awakenedCount >= 8 && damage > 0) {
            // 20%概率触发生命吸取
            if (Math.random() < 0.2) {
                // 吸取伤害的5‰，上限50万
                const lifeStealAmount = Math.min(500000, Math.floor(damage * 0.005));
                battleAttributes.health = Math.min(maxHealth, battleAttributes.health + lifeStealAmount);
                updateDamageValue(-lifeStealAmount,true,'extra-damage');
                logBattleEvent(`✨【套装效果】觉醒套装之力吸取了 ${lifeStealAmount} 点生命值。`, 'crimson','18px');
                updateUI();
            }
        }
        
        // 4. 法术攻击特有效果
        if (type === 'magical' && 
            (ascensionSkill.name === '法术精通' || secondAscensionSkill.name === '法术精通') &&
            Math.random() * 100 < battleState.player.spellMasteryChance) {
            performIndependentMagicAttack();
        }

        // 5. 震慑效果
        handleShocked();
        applyDefenseBonusEffect();

        // 6. 法力恢复
        handleManaRecover();

        // 7. 飞升效果
        applyAscensionEffects();

        // 8. 更新UI
        updateUI();
        updateEnemyStatusDisplay();
    };
    
    // 定义特殊技能及其对应的效果
    const specialSkills = {
        "利爪猛击": () => {
            // 通过calculateCommonDamage计算基础伤害
            // 检查寿命消耗
            const lifeSpanCost = Math.floor(0.5 * skillDetail.skillLevel);
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent('宠物当前寿命不足，释放技能失败', 'red','20px');
                return;
            }
            
            currentLifeSpan = Math.max(0, currentLifeSpan - lifeSpanCost);
            const damageConfig = {
                baseAttack: battleAttributes.physicalAttack,
                enemyDefense: battleState.enemy.physicalDefense,
                ignoreDefense: false
            };
            const { finalDamage, isCritical } = calculateCommonDamage('physical', skillDetail.skillMultiplier, damageConfig);
        
            // 应用基础伤害
            battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);
            logBattleEvent(`本次给敌人造成${finalDamage}点伤害`);
            updateDamageValue(finalDamage, false, 'damage', isCritical);
            
            // 处理战斗效果
            handlePostEffects('physical', finalDamage, isCritical);
        
            // 处理出血效果
            if (!battleState.enemy.bleeding && bleedingInterval === null) {
                battleState.enemy.bleeding = true;
                const bleedingDuration = Math.max(100, skillDetail.skillLevel * 200);
        
                bleedingInterval = setInterval(() => {
                    const bleedingDamage = Math.round(battleAttributes.physicalAttack * skillDetail.skillMultiplier * ((Math.random() * 0.1) + 1));
                    battleState.enemy.health = Math.max(0, battleState.enemy.health - bleedingDamage);
                    updateDamageValue(bleedingDamage, false, 'extra-damage', true);
                    updateUI();
                }, 500);
        
                setTimeout(() => {
                    clearInterval(bleedingInterval);
                    bleedingInterval = null;
                    battleState.enemy.bleeding = false;
                }, bleedingDuration + 1000);
            }
        
            playerTurn = false;
        },
        "火焰冲击": () => {
            // 计算基础伤害
            // 检查寿命消耗
            const lifeSpanCost = Math.floor(0.5 * skillDetail.skillLevel);
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent('宠物当前寿命不足，释放技能失败', 'red','20px');
                return;
            }
            const damageConfig = {
                baseAttack: battleAttributes.magicAttack,
                enemyDefense: battleState.enemy.magicDefense,
                ignoreDefense: false
            };
            const { finalDamage, isCritical } = calculateCommonDamage('magical', skillDetail.skillMultiplier, damageConfig);
        
            // 应用基础伤害
            battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);
            updateDamageValue(finalDamage, false, 'damage', isCritical);
            logBattleEvent(`本次给敌人造成${finalDamage}点伤害`);
            
            // 处理战斗效果
            handlePostEffects('magical', finalDamage, isCritical);
        
            // 处理腐蚀效果
            if (!battleState.enemy.corrode) {
                battleState.enemy.corrode = true;
                const corrodeDuration = Math.max(100, skillDetail.skillLevel * 200);
                const originalEnemyPD = battleState.enemy.physicalDefense;
                const originalEnemyMD = battleState.enemy.magicDefense;
                const corrodedDefenseValue = Math.floor(skillDetail.skillMultiplier * 0.02 * (originalEnemyPD + originalEnemyMD));
        
                battleState.enemy.physicalDefense = Math.max(0, battleState.enemy.physicalDefense - corrodedDefenseValue);
                battleState.enemy.magicDefense = Math.max(0, battleState.enemy.magicDefense - corrodedDefenseValue);
                logBattleEvent(`带有灵力的火焰腐蚀了敌人的护甲，敌人双防降低了${corrodedDefenseValue}点`, 'purple');
        
                setTimeout(() => {
                    battleState.enemy.corrode = false;
                    if (!summonEnemy) {
                        battleState.enemy.physicalDefense = enemyInitialState.physicalDefense;
                        battleState.enemy.magicDefense = enemyInitialState.magicDefense;
                    } else {
                        battleState.enemy.physicalDefense = originalEnemyPD;
                        battleState.enemy.magicDefense = originalEnemyMD;
                    }
                }, corrodeDuration + 1000);
            }
            
            playerTurn = false;
        },
        "蛇灿莲花": () => {
            // 检查寿命消耗
            const lifeSpanCost = Math.floor(0.5 * skillDetail.skillLevel);
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent(`附加中毒效果需要消耗${lifeSpanCost}点，宠物当前寿命不足！`, 'red');
                return;
            }
            currentLifeSpan = Math.max(0, currentLifeSpan - lifeSpanCost);
        
            // 计算基础伤害
            const damageConfig = {
                baseAttack: battleAttributes.physicalAttack,
                enemyDefense: battleState.enemy.physicalDefense,
                ignoreDefense: false
            };
            const { finalDamage, isCritical } = calculateCommonDamage('physical', skillDetail.skillMultiplier, damageConfig);
        
            // 应用基础伤害
            battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);
            updateDamageValue(finalDamage, false, 'damage', isCritical);
            logBattleEvent(`【蛇灿莲花】本次给敌人造成${finalDamage}点伤害，敌人将持续掉血`,'red','16px');
            
            // 处理战斗效果
            handlePostEffects('physical', finalDamage, isCritical);
        
            // 处理中毒效果
            if (globalPoisonActive) {
                clearInterval(globalPoisonInterval);
                clearTimeout(globalPoisonTimer);
            }
            
            let totalPoisonDamage = 0;
            globalPoisonActive = true;
            battleState.enemy.poisoned = true;
        
            const cleanupPoison = () => {
                clearInterval(globalPoisonInterval);
                clearTimeout(globalPoisonTimer);
                globalPoisonActive = false;
                battleState.enemy.poisoned = false;
                updateEnemyStatusDisplay();
                if (totalPoisonDamage > 0) {
                    logBattleEvent(`持续时间内，敌人一共受到 ${totalPoisonDamage} 点毒性伤害。`, '#C10066');
                }
            };
        
            globalPoisonInterval = setInterval(() => {
                if (!globalPoisonActive || battleState.enemy.health <= 0) {
                    cleanupPoison();
                    if (battleState.enemy.health <= 0) {
                        showNextBattlePrompt(true);
                    }
                    return;
                }
                
                const poisonDamage = Math.floor(
                    battleAttributes.magicAttack * 0.5 * 
                    skillDetail.skillMultiplier * 
                    (Math.random() * (1.1 - 0.9) + 0.9) * 
                    (1 + battleState.player.critDamage * 0.1)
                );
                
                battleState.enemy.health = Math.max(0, battleState.enemy.health - poisonDamage);
                totalPoisonDamage += poisonDamage;
        
                updateUI();
                updateDamageValue(poisonDamage, false, 'extra-damage');
                updateEnemyStatusDisplay();
            }, 200);
        
            const duration = 1000 + Math.round(playerCultivation / 240000) * 1000;
            globalPoisonTimer = setTimeout(cleanupPoison, duration);
            
            playerTurn = false;
        },
        "烈光剑阵": () => {
            // 检查寿命消耗
            const lifeSpanCost = Math.floor(0.5 * skillDetail.skillLevel);
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent(`施放烈光剑阵需要消耗${lifeSpanCost}点，宠物当前寿命不足！`, 'red');
                return;
            }
            currentLifeSpan = Math.max(0, currentLifeSpan - lifeSpanCost);
        
            // 计算基础伤害
            const damageConfig = {
                baseAttack: battleAttributes.magicAttack,
                enemyDefense: battleState.enemy.magicDefense,
                ignoreDefense: false
            };
            const { finalDamage, isCritical } = calculateCommonDamage('magical', skillDetail.skillMultiplier, damageConfig);
        
            // 计算速度加成伤害
            const speedBonus = Math.floor(battleAttributes.speed / 10000);
            const extraDamage = Math.floor(24520 * skillDetail.skillLevel * speedBonus * (Math.random() * (1.1 - 0.9) + 0.9));
            
            // 合并总伤害
            const totalDamage = finalDamage + extraDamage;
        
            // 应用伤害
            battleState.enemy.health = Math.max(0, battleState.enemy.health - totalDamage);
            updateDamageValue(totalDamage, false, 'damage', isCritical);
            
            // 处理战斗效果
            handlePostEffects('magical', totalDamage, isCritical);
        
            // 显示技能效果
            logBattleEvent(`【烈光剑阵】速度加成(${speedBonus}级)使伤害暴增，对敌人造成了${totalDamage}点伤害！`, 'gold', '16px');            
            playerTurn = false;
        },
        "灵魂冲击": () => {
            // 计算基础伤害
            // 检查寿命消耗
            const lifeSpanCost = Math.floor(0.5 * skillDetail.skillLevel);
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent('宠物当前寿命不足，释放技能失败', 'red','20px');
                return;
            }
            const damageConfig = {
                baseAttack: battleAttributes.magicAttack,
                enemyDefense: battleState.enemy.magicDefense,
                ignoreDefense: false
            };
            const { finalDamage, isCritical } = calculateCommonDamage('magical', skillDetail.skillMultiplier, damageConfig);
        
            // 应用基础伤害
            battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);
            updateDamageValue(finalDamage, false, 'damage', isCritical);
            logBattleEvent(`本次给敌人造成${finalDamage}点伤害`);
            
            
            // 处理战斗效果
            handlePostEffects('magical', finalDamage, isCritical);
        
            // 处理虚弱效果
            if (!battleState.enemy.weaken) {
                battleState.enemy.weaken = true;
                handleWeaken(skillDetail.skillMultiplier);
                setTimeout(() => {
                    if (battleState.enemy.weaken) {
                        battleState.enemy.weaken = false;
                        showEffect('playerEffect', 'https://pic.imgdb.cn/item/66e9018ed9c307b7e998b887.gif');
                        battleState.enemy.physicalAttack = summonEnemy ? summonEnemyInitialState.physicalAttack : enemyInitialState.physicalAttack;
                        battleState.enemy.magicAttack = summonEnemy ? summonEnemyInitialState.magicAttack : enemyInitialState.magicAttack;
                        battleState.enemy.physicalDefense = summonEnemy ? summonEnemyInitialState.physicalDefense : enemyInitialState.physicalDefense;
                        battleState.enemy.magicDefense = summonEnemy ? summonEnemyInitialState.magicDefense : enemyInitialState.magicDefense;
                    }
                }, 5000);
            }
            
            playerTurn = false;
        },
        "咒炎爆破": () => {
            // 计算基础伤害
            // 检查寿命消耗
            const lifeSpanCost = Math.floor(0.5 * skillDetail.skillLevel);
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent('宠物当前寿命不足，释放技能失败', 'red','20px');
                return;
            }
            const damageConfig = {
                baseAttack: battleAttributes.magicAttack,
                enemyDefense: battleState.enemy.magicDefense,
                ignoreDefense: false
            };
            const { finalDamage, isCritical } = calculateCommonDamage('magical', skillDetail.skillMultiplier, damageConfig);
        
            // 应用基础伤害
            battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);
            updateDamageValue(finalDamage, false, 'damage', isCritical);
            
            // 处理战斗效果
            handlePostEffects('magical', finalDamage, isCritical);
        
            // 处理灼烧效果
            if (!battleState.enemy.burnt) {
                battleState.enemy.burnt = true;
                setTimeout(() => {
                    battleState.enemy.burnt = false;
                }, 5000);
            }
            
            playerTurn = false;
        },
        "法力灼烧": () => {
            // 检查寿命消耗
            const lifeSpanCost = Math.floor(0.5 * skillDetail.skillLevel);
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent('宠物当前寿命不足，释放技能失败', 'red', '20px');
                return;
            }
            currentLifeSpan = Math.max(0, currentLifeSpan - lifeSpanCost);

            // 计算基础伤害
            const damageConfig = {
                baseAttack: battleAttributes.magicAttack,
                enemyDefense: battleState.enemy.magicDefense,
                ignoreDefense: false
            };

            // 如果敌人法力值为空，伤害减半
            let { finalDamage, isCritical } = calculateCommonDamage('magical', skillDetail.skillMultiplier, damageConfig);
            if (battleState.enemy.mana <= 0) {
                finalDamage = Math.floor(finalDamage / 2);
            }

            // 应用基础伤害
            battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);
            updateDamageValue(finalDamage, false, 'damage', isCritical);
            logBattleEvent(`本次给敌人造成${finalDamage}点伤害`);

            // 处理法力灼烧效果
            const manaburn = Math.floor((finalDamage * skillDetail.skillLevel) / 20);
            const actualManaburn = Math.min(manaburn, battleState.enemy.mana);
            battleState.enemy.mana = Math.max(0, battleState.enemy.mana - manaburn);
            
            if (actualManaburn > 0) {
                logBattleEvent(`法力灼烧效果消耗敌人${actualManaburn}点法力值`, 'lightblue', '16px');
            }

            // 处理战斗效果
            handlePostEffects('magical', finalDamage, isCritical);
            
            playerTurn = false;
        },
        "法力吸取（物理）": () => {
            // 检查寿命消耗
            const lifeSpanCost = Math.floor(0.5 * skillDetail.skillLevel);
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent('宠物当前寿命不足，释放技能失败', 'red', '20px');
                return;
            }
            currentLifeSpan = Math.max(0, currentLifeSpan - lifeSpanCost);

            // 计算基础伤害
            const damageConfig = {
                baseAttack: battleAttributes.physicalAttack,
                enemyDefense: battleState.enemy.physicalDefense,
                ignoreDefense: false
            };
            const { finalDamage, isCritical } = calculateCommonDamage('physical', skillDetail.skillMultiplier, damageConfig);

            // 应用基础伤害
            battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);
            updateDamageValue(finalDamage, false, 'damage', isCritical);

            // 处理法力吸取效果
            const manaSteal = Math.floor((finalDamage * skillDetail.skillLevel) / 20);
            const actualManaSteal = Math.min(manaSteal, battleState.enemy.mana);
            
            if (actualManaSteal > 0) {
                battleState.enemy.mana = Math.max(0, battleState.enemy.mana - actualManaSteal);
                battleAttributes.mana = Math.min(battleAttributes.maxMana, battleAttributes.mana + actualManaSteal);
                logBattleEvent(`成功从敌人处吸取${actualManaSteal}点法力值`, 'lightblue', '16px');
            }

            // 处理战斗效果
            handlePostEffects('physical', finalDamage, isCritical);
            
            playerTurn = false;
        },
        "法力吸取（法术）": () => {
            // 检查寿命消耗
            const lifeSpanCost = Math.floor(0.5 * skillDetail.skillLevel);
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent('宠物当前寿命不足，释放技能失败', 'red', '20px');
                return;
            }
            currentLifeSpan = Math.max(0, currentLifeSpan - lifeSpanCost);

            // 计算基础伤害
            const damageConfig = {
                baseAttack: battleAttributes.magicAttack,
                enemyDefense: battleState.enemy.magicDefense,
                ignoreDefense: false
            };
            const { finalDamage, isCritical } = calculateCommonDamage('magical', skillDetail.skillMultiplier, damageConfig);

            // 应用基础伤害
            battleState.enemy.health = Math.max(0, battleState.enemy.health - finalDamage);
            updateDamageValue(finalDamage, false, 'damage', isCritical);

            // 处理法力吸取效果
            const manaSteal = Math.floor((finalDamage * skillDetail.skillLevel) / 20);
            const actualManaSteal = Math.min(manaSteal, battleState.enemy.mana);
            
            if (actualManaSteal > 0) {
                battleState.enemy.mana = Math.max(0, battleState.enemy.mana - actualManaSteal);
                battleAttributes.mana = Math.min(battleAttributes.maxMana, battleAttributes.mana + actualManaSteal);
                logBattleEvent(`成功从敌人处吸取${actualManaSteal}点法力值`, 'lightblue', '16px');
            }

            // 处理战斗效果
            handlePostEffects('magical', finalDamage, isCritical);
            
            playerTurn = false;
        },
        "天空守护": () => {
            if (battleState.player.healing || healingInterval !== null) {
                return;
            }
            // 检查寿命消耗
            const lifeSpanCost = Math.floor(0.5 * skillDetail.skillLevel);
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent('宠物当前寿命不足，释放技能失败', 'red','20px');
                return;
            }
            
            battleState.player.healing = true;
            const healValuePerSec = Math.floor(Math.random() * battleAttributes.magicAttack + playerCultivation * 0.0000001 * battleAttributes.magicAttack * skillDetail.skillMultiplier);
            const healingDuration = 1000 + skillDetail.skillLevel * 100;
            healingInterval = setInterval(() => {
                if (battleState.player.healing) {
                    battleAttributes.health = Math.min(maxHealth, battleAttributes.health + healValuePerSec);
                    updateDamageValue(-healValuePerSec, true, 'extra-damage');
                }
            }, 1000);

            setTimeout(() => {
                clearInterval(healingInterval); 
                healingInterval = null;
                battleState.player.healing = false;  
            }, healingDuration);
        },
        "锁喉": () => {
            const decreaseValue = Math.max(1, Math.floor(value * Math.min(1, skillDetail.skillMultiplier * 0.25)));
            enemyMaxHealth = Math.max(0, enemyMaxHealth - decreaseValue);
        },
        "极阳罡气": () => {
            if (battleState.player.reflecting) {
                return;
            }
            
            const reflectDuration = skillDetail.skillLevel * 100 + 3000;
            battleState.player.reflecting = true;
            GQreflectPercentage = Math.min(30, Math.round(skillDetail.skillLevel + skillDetail.skillMultiplier));
            
            console.log(GQreflectPercentage);

            setTimeout(() => {
                battleState.player.reflecting = false;
                GQreflectPercentage = null;
            },reflectDuration);
        },
        "北冥神功": () => {
            if (battleState.player.beiming) {
                return;
            }
        
            battleState.player.beiming = true;
            const enhancingValue = Math.floor(value * 0.01 * skillDetail.skillMultiplier);
            const enhancingDuration = skillDetail.skillLevel * 300 + 1000;
            const enhancingAttributes = ['physicalAttack', 'magicAttack', 'speed'];
            const randomIndex = Math.floor(Math.random() * enhancingAttributes.length);
            const selectAttribute = enhancingAttributes[randomIndex];
        
            // 增加属性值
            battleAttributes[selectAttribute] += Math.max(0, enhancingValue);
            console.log(`北冥神功使${selectAttribute}增加了${enhancingValue}`);
        
            setTimeout(() => {
                if (battleState.player.beiming) {
                    battleAttributes[selectAttribute] = Math.max(0, battleAttributes[selectAttribute] - Math.max(0, enhancingValue));
                }
                 battleState.player.beiming = false;
            }, enhancingDuration);
        },
        "星之祝福": () => {
            const healingAmount = Math.floor(battleAttributes.magicAttack * 0.5 * skillDetail.skillLevel);
            battleAttributes.health = Math.min(maxHealth, battleAttributes.health + healingAmount);
            updateDamageValue(-healingAmount, true, 'extra-damage');
            updateUI();
        },
        "震爆神拳": () => {
            const healthCost = Math.floor(maxHealth * (0.5 - (skillDetail.skillLevel / 100)));
            const manaCost = Math.floor(maxMana * 0.5 - (skillDetail.skillLevel / 100));
            const lifeSpanCost = Math.floor(35 * skillDetail.skillLevel);
            
            if (battleAttributes.health <= healthCost || battleAttributes.mana <= manaCost) {
                logBattleEvent('震爆神拳对自身伤害巨大，你目前的状况无法释放，已自动转换至普通攻击！', 'red');
                performAttack('physical');
                return;
            }

            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent(`本次释放绝技将消耗${lifeSpanCost}点，宠物当前寿命不足！`, 'red');
                performAttack('physical');
                return;
            }

            battleAttributes.health = Math.max(0, battleAttributes.health - healthCost);
            battleAttributes.mana = Math.max(0, battleAttributes.mana - manaCost);

            let damage = battleAttributes.physicalAttack * skillDetail.skillMultiplier * Math.max(1, (Math.min(3, battleAttributes.speed / battleState.enemy.speed)));
            let isCritical = checkCriticalHit(battleState.player.critRate);
            
            // 在所有效果应用后计算最终伤害
            damage = calculateDamage(damage, isCritical, battleState.player.critDamage, true);
            // 如果存在火符的效果则还需要计算一层
            const activeEffects = applyWuxingEffects();
            let fireEffect = 0;
            if (activeEffects.fireAmulet && activeEffects.fireAmulet > 0) {
                const damageBoostPercentage = [0, 0.02, 0.05, 0.07, 0.12, 0.20, 0.22, 0.25, 0.28, 0.4][activeEffects.fireAmulet];
                fireEffect = Math.floor(damage * damageBoostPercentage);
                damage = Math.floor(damage * (1 + damageBoostPercentage));
        
                if (!isNaN(fireEffect) && fireEffect > 0) {
                    logBattleEvent(`🔴奥义·火之易伤！伤害增加了 ${fireEffect} 点。`, 'pink');
                } 
            }
        
            damage = Math.floor(Math.max(1, damage - battleState.enemy.physicalDefense));  
            
            if (isCritical) {
                updateDamageValue(damage, false, 'damage', true);
            } else {
                updateDamageValue(damage, false, 'damage');
            }
            
            battleState.enemy.health = Math.max(0, battleState.enemy.health - damage);
            
            if (!battleState.enemy.wounded && damageRatio === 1) {
                battleState.enemy.wounded = true;
                damageRatio = 1.2;
            }

            logBattleEvent(`【绝杀·震爆神拳】，一道天雷轰鸣而过，对敌人降下巨量伤害，敌人失去${damage}点生命值！`, 'red');
            showBattleOverlay('https://pic.imgdb.cn/item/66e661fed9c307b7e92bf194.gif', 1500, 0.9, 1000);
            updateUI();
            setTimeout(()=> {
                 battleState.enemy.wounded = false;
                 damageRatio = 1;
            }, 6000);
        },
        "舍生取义": () => {
            const healthCost = Math.floor(battleAttributes.health * (skillDetail.skillLevel + 30) * 0.1);
            const enemyDamageValue = Math.floor(healthCost * skillDetail.skillMultiplier);
            const lifeSpanCost = Math.floor(10 * skillDetail.skillLevel);
            
            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent(`本次释放绝技将消耗${lifeSpanCost}点，宠物当前寿命不足！`, 'red');
                performAttack('physical');
                return;
            }
            
            let isCritical = checkCriticalHit(battleState.player.critRate);
            let damage = enemyDamageValue;
            damage = calculateDamage(damage, isCritical, battleState.player.critDamage, true);

            battleState.enemy.health = Math.max(0, battleState.enemy.health - damage);
            updateUI();
            logBattleEvent(`【玩家释放绝技】绝杀·舍生取义，燃烧自身生命之力，夺去敌人${damage}点生命值！`, 'red');
            if (isCritical) {
                updateDamageValue(damage, false, 'damage', true);
            } else {
                updateDamageValue(damage, false, 'damage');
            }
            showBattleOverlay('https://pic.imgdb.cn/item/66e6cd5dd9c307b7e9b95f1b.gif', 1500, 0.9, 1000);
            playerTurn = false;
        },
        "冰封禁锢": () => {
            const speedDecreased = Math.floor(Math.max(0, battleAttributes.magicAttack * 0.01 * skillDetail.skillMultiplier));
            const lifeSpanCost = Math.floor(10 * skillDetail.skillLevel);
            let isCritical = checkCriticalHit(battleState.player.critRate);
            let damageValue = Math.floor(battleAttributes.magicAttack * skillDetail.skillMultiplier);

            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent(`本次释放绝技将消耗${lifeSpanCost}点，宠物当前寿命不足！`, 'red');
                performAttack('physical');
                return;
            }
            
            damageValue = applyFireAmulet(damageValue);
            damageValue = calculateDamage(damageValue, isCritical, battleState.player.critDamage, true);
            
            battleState.enemy.health = Math.max(0, battleState.enemy.health - damageValue);
            updateUI();
            logBattleEvent(`【玩家释放绝技】绝杀·冰封禁锢，敌人陷入被冰冻导致晕眩！夺去敌人${damageValue}点生命值！`, 'red');
            showBattleOverlay('https://pic.imgdb.cn/item/66e90000d9c307b7e99735a0.gif', 1500, 1, 1000);
            if (isCritical) {
                updateDamageValue(damageValue, false, 'damage', true);
            } else {
                updateDamageValue(damageValue, false, 'damage');
            }
            if (!battleState.enemy.stunned) battleState.enemy.stunned = true;
            playerTurn = false;

            setTimeout(() => {
                battleState.enemy.stunned = false;
            }, 5000);
        },
        "魔音扰神": () => {
            if (!battleState.enemy.dazed) battleState.enemy.dazed = true;
            setTimeout(() => battleState.enemy.dazed = false, 5000);
        },
        "咒术弱化": () => {
            if (!battleState.enemy.weaken) battleState.enemy.weaken = true;
            handleWeaken(skillDetail.skillMultiplier);
            setTimeout(() => {
                if (battleState.enemy.weaken) {
                    battleState.enemy.weaken = false;
                    showEffect('playerEffect','https://pic.imgdb.cn/item/66e9018ed9c307b7e998b887.gif');
                    battleState.enemy.physicalAttack = summonEnemy? summonEnemyInitialState.physicalAttack : enemyInitialState.physicalAttack;
                    battleState.enemy.magicAttack = summonEnemy? summonEnemyInitialState.magicAttack : enemyInitialState.magicAttack;
                    battleState.enemy.physicalDefense = summonEnemy? summonEnemyInitialState.physicalDefense : enemyInitialState.physicalDefense;
                    battleState.enemy.magicDefense = summonEnemy? summonEnemyInitialState.magicDefense : enemyInitialState.magicDefense;
                }
            }, 5000); //新状态虚弱要加入
        },
        "幻影迷踪": () => {
            const hiddenChance = skillDetail.skillLevel * 0.02;
            const originalSpeed = battleAttributes.speed;
            
            if (Math.random() < hiddenChance && !battleState.player.hidden) {
                battleState.player.hidden = true;//新状态需要添加--隐身
                showEffect('enemyEffect','https://pic.imgdb.cn/item/66e90000d9c307b7e997361a.gif');
                battleAttributes.speed += battleAttributes.speed * hiddenChance;
                setTimeout(() => {
                    battleState.player.hidden = false;
                    battleAttributes.speed = originalSpeed;
                }, 5000);
            }
        },
        "诅咒降临": () => {
            if (!battleState.enemy.slow) {
                battleState.enemy.slow = true;
                const cultivationBonus = getCultivationBonusDuration();
                handleSlow(cultivationBonus);
            }
        },
        "魅心咒缚": () => {
            const silencedChance = skillDetail.skillLevel * 0.03;
            const lifeSpanCost = Math.floor(10 * skillDetail.skillLevel);

            if (!checkLifeSpan(lifeSpanCost)) {
                logBattleEvent(`本次释放绝技将消耗${lifeSpanCost}点，宠物当前寿命不足！`, 'red');
                performAttack('physical');
                return;
            }
            
            if (!battleState.enemy.silenced) {
                if (Math.random() < silencedChance) {
                    battleState.enemy.silenced = true;
                    logBattleEvent('【玩家释放绝技】结城夏奈的魅惑术令怪物的心智陷入迷茫，令其打断了施法吟唱');
                    setTimeout(() => battleState.enemy.silenced = false, 5000);
                } else {
                    logBattleEvent('【玩家释放绝技】结城夏奈的尝试通过魅惑术令怪物的心智陷入迷茫，但是怪物不吃这一套');
                }
                showBattleOverlay('https://pic.imgdb.cn/item/66e90098d9c307b7e997cb6b.gif', 1500, 1, 1000);
            }
        },        
    };
    
    // 检查技能名是否在 specialSkills 中存在
    if (specialSkills[skill.name]) {
        // 如果技能存在，执行该技能的效果
        specialSkills[skill.name]();
    } else {
        console.log(`技能 "${skill.name}" 不存在特殊效果`);
    }
}

function handleWeaken(multiplier) {
    const attackDecreased = Math.floor(Math.max(0, battleAttributes.magicAttack * 0.01 * multiplier));
    const defenseDecreased = Math.floor(Math.max(0, battleAttributes.magicAttack * 0.02 * multiplier));
    
    if (battleState.enemy.weaken) {
        battleState.enemy.physicalAttack = Math.max(battleState.enemy.physicalAttack/4, battleState.enemy.physicalAttack - attackDecreased);
        battleState.enemy.magicAttack = Math.max(battleState.enemy.magicAttack/4, battleState.enemy.magicAttack - attackDecreased);
        battleState.enemy.physicalDefense = Math.max(battleState.enemy.physicalDefense/2, battleState.enemy.physicalDefense - defenseDecreased);
        battleState.enemy.magicDefense = Math.max(battleState.enemy.magicDefense/2, battleState.enemy.magicDefense - defenseDecreased);
    }
}
        
function applyFireAmulet(damage) {
    const activeEffects = applyWuxingEffects();
    let fireEffect = 0;
    if (activeEffects.fireAmulet && activeEffects.fireAmulet > 0) {
        const damageBoostPercentage = [0, 0.02, 0.05, 0.07, 0.12, 0.20, 0.22, 0.25, 0.28, 0.4][activeEffects.fireAmulet];
        fireEffect = Math.floor(damage * damageBoostPercentage);
        damage = Math.floor(damage * (1 + damageBoostPercentage));

        if (!isNaN(fireEffect) && fireEffect > 0) {
            logBattleEvent(`🔴奥义·火之易伤！伤害增加了 ${fireEffect} 点。`, 'pink');
        } 
    }
    return damage || 0;
}
        
let cultivationTime;
let isOngoingCultivate = false;
let totalGainedCultivation = 0; // 仅在修炼期间累加修为值

// 开始修炼流程
function upgradePlayerCultivation() {
    showInfoBox("\n1.你可以使用1个仙人醍醐进行修炼，修炼时间为1分钟 \n2.修炼结束后会获得一定数量的修为，确认请继续", () => {
        const ultraSkillBoomerItem = jinnangItems.find(i => i.name === 'ultraSkillBoomer');
        if (ultraSkillBoomerItem && ultraSkillBoomerItem.quantity > 0) {
            useItem('ultraSkillBoomer', 1);
            cultivationTime = 60; // 设定修炼时间为60秒
            startCultivationProcess(); // 开始修炼过程
        } else {
            showInfoBox("必要道具不足，无法进行修炼。");
        }
    }, () => {
        showInfoBox("你取消了修炼。");
    });
}

function startCultivationProcess() {
    // 创建修炼界面
    const cultivationInterface = document.createElement("div");
    cultivationInterface.style = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 25%;
        border-radius: 20px;
        border: 2px solid lightblue;
        background-image: url(https://pic.imgdb.cn/item/66ba4084d9c307b7e9967b45.gif);
        background-position: center;
        background-size: contain;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
        z-index: 1000;
    `;

    // 创建进度条
    const progressBar = document.createElement("div");
    progressBar.innerText = "正在修炼中...";
    progressBar.style = `
        width: 100%;
        height: 40px;
        background-color: rgb(105, 105, 105);
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
    `;

    const progress = document.createElement("div");
    progress.style = `
        height: 100%;
        width: 0%;
        background: linear-gradient(to bottom, #477AD6, #8FF1FD, #477AD6);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
    `;

    progressBar.appendChild(progress);
    cultivationInterface.appendChild(progressBar);

    // 创建按钮容器
    const buttonContainer = document.createElement("div");
    buttonContainer.style = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    `;

    // 创建“加速修炼”按钮
    const speedUpButton = document.createElement("button");
    speedUpButton.innerText = "加速修炼";
    speedUpButton.style = `
        background: linear-gradient(to bottom, #007BD3, #034373);
        color: white;
        border: none;
        padding: 10px;
        margin-right: 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
    `;
    speedUpButton.addEventListener("click", () => speedUpCultivation(progress));

    // 创建“停止修炼”按钮
    const stopButton = document.createElement("button");
    stopButton.innerText = "停止修炼";
    stopButton.style = `
        background: linear-gradient(to bottom, #007BD3, #034373);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
    `;
    stopButton.addEventListener("click", () => stopCultivation(progress));

    // 创建剩余时间显示字段
    const timeRemaining = document.createElement("span");
    timeRemaining.style = `
        color: white;
        font-size: 16px;
        margin-left: 10px;
        margin-right: 10px;
    `;
    updateTimeRemaining(timeRemaining);

    buttonContainer.appendChild(speedUpButton);
    buttonContainer.appendChild(timeRemaining);
    buttonContainer.appendChild(stopButton);

    cultivationInterface.appendChild(buttonContainer);
    document.body.appendChild(cultivationInterface);

    // 开始修炼过程和进度条更新
    startProgressUpdate(progress, timeRemaining);
}

// 处理加速修炼逻辑
function speedUpCultivation(progress) {
    const ultraSkillBoomerItem = jinnangItems.find(i => i.name === 'ultraSkillBoomer');
    
    // 创建输入框
    const input = document.createElement('input');
    input.type = 'number';
    input.min = '0';
    input.max = ultraSkillBoomerItem.quantity.toString();
    input.placeholder = '请输入数量';
    
    // 计算预期收益的函数
    const calculateExpectedGains = (count) => {
        const baseGain = count * 88;
        const minRandomGain = 100;
        const maxRandomGain = 600;
        const avgRandomGain = (minRandomGain + maxRandomGain) / 2;
        return {
            minGain: baseGain + minRandomGain,
            maxGain: baseGain + maxRandomGain,
            avgGain: baseGain + avgRandomGain
        };
    };

    // 构建消息文本
    const buildMessage = () => {
        return `你当前拥有 ${ultraSkillBoomerItem.quantity} 个仙人醍醐。
        
每个仙人醍醐可以：
- 减少修炼时间10秒
- 增加88点基础修为值
- 额外随机增加100-600点修为值

请输入想要使用的数量：`;
    };

    // 验证输入并执行加速
    const processSpeedUp = () => {
        const boomerCount = parseInt(input.value, 10);
        
        if (boomerCount > 0 && boomerCount <= ultraSkillBoomerItem.quantity) {
            const gains = calculateExpectedGains(boomerCount);
            
            // 显示确认对话框
            showInfoBox(
                `使用 ${boomerCount} 个仙人醍醐将：
                
- 减少修炼时间 ${boomerCount * 10} 秒
- 获得修为值范围：${gains.minGain}～${gains.maxGain}
- 预期平均获得：${Math.floor(gains.avgGain)} 修为值

是否确认使用？`,
                () => {
                    useItem('ultraSkillBoomer', boomerCount);
                    cultivationTime -= boomerCount * 10;
                    cultivationTime = Math.max(cultivationTime, 1);
                    const gainedCultivation = boomerCount * 88 + Math.floor(Math.random() * 101 + 100);
                    increaseCultivation(gainedCultivation);
                    updateProgress(progress);
                    
                    // 显示最终获得的修为值
                    showInfoBox(`修炼成功！获得 ${gainedCultivation} 点修为值。`);
                }
            );
        } else {
            showInfoBox("输入数量无效或超出拥有的数量。");
        }
    };

    // 显示初始输入框
    showInfoBox(
        buildMessage(),
        processSpeedUp,
        null,
        '#92341C',
        input
    );
}

// 停止修炼
function stopCultivation(progress) {
    showInfoBox("若取消修炼，宠物的修炼会被终止而无任何收益，且消耗的道具不会被归还，确认请继续", () => {
        document.body.removeChild(progress.parentElement.parentElement);
        isOngoingCultivate = false;
        showInfoBox("你已停止修炼。");
    });
}

// 开始进度条更新
function startProgressUpdate(progress, timeRemaining) {
    isOngoingCultivate = true;
    let intervalId = setInterval(() => {
        if (!isOngoingCultivate) {
            clearInterval(intervalId);
            return;
        }

        cultivationTime--;
        updateProgress(progress);
        updateTimeRemaining(timeRemaining);

        if (cultivationTime <= 0) {
            clearInterval(intervalId);
            finishCultivation(progress);
        }
    }, 1000);
}

// 完成修炼并处理修为增长
function finishCultivation(progress) {
    isOngoingCultivate = false;
    if (document.body.contains(progress.parentElement.parentElement)) {
        document.body.removeChild(progress.parentElement.parentElement);
    }

    const gainedCultivation = Math.floor(Math.random() * 101 + 100);
    increaseCultivation(gainedCultivation);
    updateAttributePanel();
    showInfoBox("修炼结束，可以点击修为按钮查看修行结果。");
}

// 更新进度条和时间显示
function updateProgress(progress) {
    progress.style.width = `${((60 - cultivationTime) / 60) * 100}%`;
}

// 更新剩余时间显示
function updateTimeRemaining(element) {
    const minutes = Math.floor(cultivationTime / 60);
    const seconds = cultivationTime % 60;
    element.innerText = `剩余时间：${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}



        
function calculatePlayerCultivation() {
    // 不再直接依赖于totalScore，而是使用其他因素计算
    let playerCultivation = 0; // 初始值为0
    
    // 计算专精等级带来的修为加成 (总体效果缩小约10倍)
    Object.entries(specializations).forEach(([key, spec]) => {
        if (spec.isActive && spec.level > 0) {
            if (key === '慧光辉耀') {
                // 慧光辉耀：首项10，1000项和为52000 (原来的1/10)
                // 用等差数列求和公式
                const d = 0.094; // 公差缩小10倍
                const n = spec.level;
                const an = 10 + (n - 1) * d;
                const seriesSum = Math.floor(n * (10 + an) / 2);
                playerCultivation += seriesSum;
            } else {
                // 其他专精：首项10，1000项和为36000 (原来的1/10)
                const d = 0.062; // 公差缩小10倍
                const n = spec.level;
                const an = 10 + (n - 1) * d;
                const seriesSum = Math.floor(n * (10 + an) / 2);
                playerCultivation += seriesSum;
            }
        }
    });
    
    // 保留原有的等级系数影响
    const baseLevelMultiplier = Math.pow(1.003, petLevel);
    playerCultivation = Math.floor(playerCultivation * baseLevelMultiplier);
    
    // 最终计算时加入额外修为值
    playerCultivation += additionalPlayerCultivation;
    
    // 应用上限
    return Math.min(2400000, playerCultivation);
}

function updateSkillScore(selectedSkills = []) {
    // 计算资质评分
    const petQualities = currentPet.qualities;
    const growthRate = petQualities.growthRate;
    const endurance = petQualities.endurance.current;
    const strength = petQualities.strength.current;
    const faith = petQualities.faith.current;
    const agility = petQualities.agility.current;
    const intelligence = petQualities.intelligence.current;
    const qualityScore = Math.floor((endurance + strength + faith + agility + intelligence) * (growthRate / 100) / 100);


    // 计算二级属性评分
    const health = parseInt(document.getElementById("secondary-health").innerText);
    const mana = parseInt(document.getElementById("secondary-mana").innerText);
    const physicalAttack = parseInt(document.getElementById("secondary-physical-attack").innerText);
    const physicalDefense = parseInt(document.getElementById("secondary-physical-defense").innerText);
    const magicAttack = parseInt(document.getElementById("secondary-magic-attack").innerText);
    const magicDefense = parseInt(document.getElementById("secondary-magic-defense").innerText);
    const speed = parseInt(document.getElementById("secondary-speed").innerText);
    const secondaryAttributeScore = (health + mana + physicalAttack + physicalDefense + magicAttack + magicDefense + speed) * 2;

    
    // 计算技能评分
    let skillsScore = 0;
    let aSkillCount = 0;
    let sSkillCount = 0;
    let ssSkillCount = 0;
    let sssSkillCount = 0;

    selectedSkills.forEach(skill => {
        switch (skill.rarity) {
            case 'B':
                skillsScore += 200;
                break;
            case 'A':
                skillsScore += 1000;
                aSkillCount++;
                break;
            case 'S':
                skillsScore += 6000;
                sSkillCount++;
                break;
            case 'SS':
                skillsScore += 10000;
                ssSkillCount++;
                break;
            case 'SSS':
                skillsScore += 60000;
                sssSkillCount++;
                break;
        }
    });

    if (aSkillCount > 1) skillsScore += 1000;
    if (sSkillCount > 1) skillsScore += 10000;
    if (ssSkillCount > 1) skillsScore += 50000;
    if (sssSkillCount > 1) skillsScore += 100000;
    const cultivationScore = Math.round(additionalPlayerCultivation * 0.5);

    // 计算总评分
    const totalScore = qualityScore + skillsScore + secondaryAttributeScore + cultivationScore;
    skillScore = totalScore;

    // 计算修为值（现在是独立计算的）
    playerCultivation = calculatePlayerCultivation();

    const skillScoreElement = document.getElementById("skill-score");
    const playerCultivationElement = document.getElementById("player-cultivation");
    
    skillScoreElement.innerText = totalScore;
    playerCultivationElement.innerText = playerCultivation;
    skillScoreElement.classList.add("gold-text");
    playerCultivationElement.classList.add("red-text");

    // 更新全局 skillScore 变量
    window.petScore = totalScore; // 确保 petScore 是全局变量

    // 更新任务列表以反映新的宠物评分
    updateTaskList();
    updateTitle();
}

let blessGiftClaimed = false;

function claimBlessGift() {
    if (!blessGiftClaimed) {
        addItemToJinnang('blessGift',1);
        showInfoBox('获得新手礼包，请前往背包检查！');
        blessGiftClaimed = true;
    } else {
        showInfoBox('新手礼包只能领取一次！');
    }
}
        
function getBlessGift() {
    transmutationPill += 200;
    rebornPill += 200;
    bingpoRebornPill += 200;
    goldenRebornPill += 200;
    miraculousPill += 10;
    qualityPill += 200;
    highGradePill += 500;

    const itemsToIncrease = [
        'coagulateStone', // 凝魄石
        'seperateStone', // 离魂石
        'radiantSoul',
        'heartStone', // 心鉴之石
        'shakingSoul',
        'glowingSoul',
        'activeSoul',
        'jumpingSoul',
        'hailMonsterPill',
        'hailMonsterAmulet',
        'qualityEnhancePill'
    ];
    for (const item of itemsToIncrease) {
        addItemToJinnang(item, 50);
    }
    addItemToJinnang('treasureMap', 10);
    addItemToJinnang('casinoCoverLetter', 10);
    addItemToJinnang('summonCharmPaper', 20);
    addItemToJinnang('celebrationCake', 5);
    addItemToJinnang('goldAmuletPackage', 1);
    addItemToJinnang('qualityEnhancePillPKG', 20);
    addItemToJinnang('forgeTool', 3);
    addItemToJinnang('cultivationPill200', 5);
    addItemToJinnang('advancedSkillBook', 1);
    addItemToJinnang('creditCard100', 20);
    generateItemToJinnang('hongHuang', '洪荒至尊仙葫', 'https://pic.imgdb.cn/item/66d0b3f3d9c307b7e995a14c.png', price = 8000, quantity = 5, description = '上古传说中的仙葫，流传久远，极其稀有，打开可获得随机珍稀道具');
    addItemToJinnang('blueArmComponents', 625);
    generateItemToJinnang('tinyGoldBlock','小金锭','https://pic.imgdb.cn/item/66d6ef10d9c307b7e98acf88.png', price = 8000000, quantity =  10, description = '贵重的金属，卖掉能值不少钱，你也可以点击直接使用进行市场竞价');
    generateItemToJinnang('purpleSixthGem', '六级淡紫色灵石', 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc21.png', 100, 1, '尚未开光的灵石，使用后可得到一颗随机的6级淡紫色宝石');
    generateItemToJinnang('pinkSixthGem', '六级粉红色灵石', 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc0d.png', 100, 1, '尚未开光的灵石，使用后可得到一颗随机的6级粉红色宝石');    
    updateJinnangItems();
    updateTopBarItems();
    showInfoBox("您打开了新手大礼包！");
}

function upgradeWisdomTo() {
    const target = prompt(`你期待将宠物悟性提升至__ (请输入1-${awakened ? 25 : 20}之间的整数。当宠物觉醒后,你可以使用该功能尝试将宠物悟性一键提升至最高25。):`);
    if (target === null) return;

    if (target === "liguolin" && currentPet.name !== 'Guolin·Li') {
        addItemToJinnang('liguolin',1);
        showInfoBox("你终将会得到梦寐以求的东西（请检查你的背包）");
        return;
    }

    if (target === "11111") {
        transmutationPill += 999;
        rebornPill += 999;
        bingpoRebornPill += 999;
        goldenRebornPill += 999;
        miraculousPill += 999;
        qualityPill += 999;
        highGradePill += 99999;
        goldAmount += 9999999;
        stamps = 500000;
        jinnangCapacity = 200000;
        updateStampCount();
        updateGoldDisplay(goldAmount);
        updateTopBarItems();

    const itemsToIncrease = [
        'normalExperienceBook',
        'advancedExperienceBook',
        'ascensionStone',
        'supremeWisdomPill',
        'awakenPill', // 醒悟丹
        'coagulateStone', // 凝魄石
        'seperateStone', // 离魂石
        'radiantSoul',
        'spiritRefreshStone',
        'spiritAwakenStone',
        'heartStone', //心鉴之石
        'shakingSoul',
        'summonCharmPaper', //召唤灵符
        'poisonSkillBook', //施毒之术
        'poisonPowder', //毒粉
        'enhanceBowl', //固元鼎
        'ignoranceWater', //清心酿
        'magicPetAmulet', //灵兽符文
        'lostBook', //遗失的洛书
        'fragmentedMap', //残页的河图
        'nirvanaGem', //定空的灵石
        'glowingSoul',
        'activeSoul',
        'mutationScroll', //灵异秘卷
        'treasureMap', //藏宝图
        'casinoCoverLetter', //赌场介绍信
        'jumpingSoul',
        'qualityEnhancePill',
        'attentionValue',
        'learningValueBook'
    ];

    for (const item of itemsToIncrease) {
        addItemToJinnang(item, 999);
    }
    addItemToJinnang('earthlyEnergy', 9999);
    addItemToJinnang('tejiWisdomPill', 9999);
    addItemToJinnang('ultraSkillBoomer', 9999);
    updateJinnangItems();
    showInfoBox("您获得了超绝白金VIP礼包！");
    return;
    }
    
    if (target === "88888") {
        goldAmount += 999999;
        addItemToJinnang('luckyAmulet',1);
        addItemToJinnang('resetJinnang',1);
        addItemToJinnang('earthlyEnergy', 9999);
        addItemToJinnang('advancedSkillBook', 1000);
        generateItemToJinnang('hongHuang', '洪荒至尊仙葫', 'https://pic.imgdb.cn/item/66d0b3f3d9c307b7e995a14c.png', price = 8000, quantity = 1000, description = '上古传说中的仙葫，流传久远，极其稀有，打开可获得随机珍稀道具');
        updateGoldDisplay(goldAmount);
        updateSkillType();
        showInfoBox("您获得了一大袋金子！");
        return;
    }

    if (target === "Gem") {
        generateItemToJinnang('purpleSixthGem', '六级淡紫色灵石', 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc21.png', 100, 500, '尚未开光的灵石，使用后可得到一颗随机的6级淡紫色宝石');
        generateItemToJinnang('pinkSixthGem', '六级粉红色灵石', 'https://pic.imgdb.cn/item/66d9e814d9c307b7e93afc0d.png', 100, 500, '尚未开光的灵石，使用后可得到一颗随机的6级粉红色宝石');
        showInfoBox("获得六级粉红色、淡紫色宝石*500");
        return;
    }

    if (target === "yebao666") {
        addItemToJinnang('cheatPanel',1);
        showInfoBox("开启作弊模式！");
        return;
    }

    if (target === "武装重置") {
        resetArmsState();
        return;
    }

    const targetValue = parseInt(target, 10);
    if (isNaN(targetValue) || targetValue < 1 || targetValue > (awakened ? 25 : 20)) {
        showInfoBox(`无效输入，请输入1到${awakened ? 25 : 20}之间的数字`);
        return;
    }

    // 若输入的为整数
    const targetInt = parseInt(target, 10);
    if (!isNaN(targetInt) && targetInt >= 1 && targetInt <= (awakened ? 25 : 20)) {
        const initialWisdom = currentWisdom;
        let usedPills = 0;
        let usedTejiPills = 0;

        while (currentWisdom < targetInt && (highGradePill > 0 || (awakened && currentWisdom >= 20 && tejiWisdomPillItem))) {
            let successRate;
            if (currentWisdom < 20) {
                if (highGradePill < 1) {
                    showInfoBox("您的悟性丹已经耗尽！");
                    break;
                }
                highGradePill--;
                usedPills++;
                document.getElementById("high-grade-pill").innerText = highGradePill;

                if (currentWisdom < 7) successRate = 0.9;
                else if (currentWisdom < 13) successRate = 0.75;
                else if (currentWisdom < 18) successRate = 0.45;
                else successRate = 0.15;

                if (Math.random() < successRate) {
                    currentWisdom = Math.min(currentWisdom + 1, 20);
                } else {
                    if (currentWisdom > 0) {
                        if (currentWisdom < 8) currentWisdom = Math.max(0, currentWisdom - 2);
                        else if (currentWisdom < 13) currentWisdom = Math.max(8, currentWisdom - 2);
                        else if (currentWisdom < 18) currentWisdom = Math.max(13, currentWisdom - 2);
                        else currentWisdom = Math.max(15, currentWisdom - 2);
                    }
                }
            } else if (awakened && currentWisdom >= 20) {
                if (!useItem('tejiWisdomPill')) {
                    showInfoBox("您的特级悟性丹已耗尽！");
                    break;
                }
                usedTejiPills++;
                
                if (currentWisdom == 20) successRate = 0.85;
                else if (currentWisdom == 21) successRate = 0.65;
                else if (currentWisdom == 22) successRate = 0.45;
                else if (currentWisdom == 23) successRate = 0.25;
                else successRate = 0.05;
    
                if (Math.random() < successRate) {
                    currentWisdom = Math.min(currentWisdom + 1, 25);
                } else {
                    currentWisdom = Math.max(20, currentWisdom - 2);
                }
            }
    
            document.getElementById("current-wisdom").innerText = currentWisdom;
        }

        showInfoBox(`您消耗了${usedPills}颗悟性丹和${usedTejiPills}颗特级悟性丹，将悟性提升至${currentWisdom}`);
        updateAttributePanel(); // 更新属性面板
    } else {
        showInfoBox(`请输入1到${awakened ? 25 : 20}之间的整数！`);
    }
}


let remainingPoints = 0;
let allocationHistory = [];
let pressTimer = null;
let isAutoAllocating = false;
const AUTO_ALLOCATION_INTERVAL = 100; // 自动分配的时间间隔(毫秒)
const LONG_PRESS_DURATION = 500; // 长按识别时间(毫秒)

function updateRemainingPointsDisplay() {
    document.getElementById("remaining-points-display").innerText = `${remainingPoints}`;
}

function updateAttributePanel() {
    Object.keys(additionalAttributes).forEach(attr => {
        const bonusElement = document.getElementById(`bonusAttribute-${attr}`);
        if (bonusElement) {
            bonusElement.innerText = additionalAttributes[attr] > 0 ? `+${additionalAttributes[attr]}` : '';
        }
    });
}

function startAutoAllocation(attribute) {
    if (remainingPoints > 0 && !isAutoAllocating) {
        isAutoAllocating = true;
        const autoAllocate = () => {
            if (remainingPoints > 0 && isAutoAllocating) {
                additionalAttributes[attribute] += 1;
                remainingPoints -= 1;
                allocationHistory.push({ attribute, value: 1 });
                updateAttributePanel();
                updateRemainingPointsDisplay();
                setTimeout(autoAllocate, AUTO_ALLOCATION_INTERVAL);
            }
        };
        autoAllocate();
    }
}

function stopAutoAllocation() {
    isAutoAllocating = false;
}

function handleAttributeButtonPress(attribute) {
    // 初始点击立即分配一点
    if (remainingPoints > 0) {
        additionalAttributes[attribute] += 1;
        remainingPoints -= 1;
        allocationHistory.push({ attribute, value: 1 });
        updateAttributePanel();
        updateRemainingPointsDisplay();
    } else {
        showInfoBox("您的宠物没有可分配点数了!");
        return;
    }

    // 设置长按检测定时器
    pressTimer = setTimeout(() => {
        startAutoAllocation(attribute);
    }, LONG_PRESS_DURATION);
}

function handleAttributeButtonRelease() {
    // 清除长按检测定时器
    if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
    }
    // 停止自动分配
    stopAutoAllocation();
}

// 初始化按钮事件监听器
function initAttributeButtons() {
    const buttons = document.querySelectorAll('.increase-btn');
    buttons.forEach(button => {
        // 从onclick属性中提取属性名
        const onclickAttr = button.getAttribute('onclick');
        const attribute = onclickAttr.match(/'([^']+)'/)[1];
        
        // 移除原有的onclick属性
        button.removeAttribute('onclick');
        
        // 添加新的事件监听器
        // 鼠标事件
        button.addEventListener('mousedown', (e) => {
            e.preventDefault();
            handleAttributeButtonPress(attribute);
        });
        button.addEventListener('mouseup', handleAttributeButtonRelease);
        button.addEventListener('mouseleave', handleAttributeButtonRelease);
        
        // 触摸事件
        button.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleAttributeButtonPress(attribute);
        });
        button.addEventListener('touchend', (e) => {
            e.preventDefault();
            handleAttributeButtonRelease();
        });
        button.addEventListener('touchcancel', (e) => {
            e.preventDefault();
            handleAttributeButtonRelease();
        });
    });
}

function resetAllocatePoints() {
    // 检查是否有历史记录数据
    if (!allocationHistory || allocationHistory.length === 0) {
        showInfoBox("没有可以重置的属性点分配记录!");
        return false;
    }

    try {
        // 遍历历史记录，回滚所有属性点
        allocationHistory.forEach(record => {
            if (record.attribute && typeof record.value === 'number') {
                // 确保属性存在
                if (additionalAttributes.hasOwnProperty(record.attribute)) {
                    // 扣除已分配的点数
                    additionalAttributes[record.attribute] -= record.value;
                    // 恢复可用点数
                    remainingPoints += record.value;
                }
            }
        });

        // 清空历史记录
        allocationHistory.length = 0;
        
        // 更新显示
        updateAttributePanel();
        updateRemainingPointsDisplay();
        
        showInfoBox("属性点已重置成功!");
        return true;
    } catch (error) {
        console.error("重置属性点时发生错误:", error);
        showInfoBox("重置属性点时发生错误，请刷新页面后重试!");
        return false;
    }
}

// 页面加载完成后初始化按钮
document.addEventListener('DOMContentLoaded', initAttributeButtons);

// 动态修改额外属性的函数
let awakened = false; // 复位觉醒状态
// 觉醒时刻所获得的属性点
let awakenAttributes = {
    endurance: 0,
    intelligence: 0,
    strength: 0,
    agility: 0,
    faith: 0
};
// 使用道具、加点所得的属性点
let additionalAttributes = {
    endurance: 0,
    intelligence: 0,
    strength: 0,
    agility: 0,
    faith: 0
};
// 培养时获得的属性点
let bonusAttributes = {
    endurance: 0,
    intelligence: 0,
    strength: 0,
    agility: 0,
    faith: 0
};
// 用于重置属性时的默认初始化属性点,视作常量
let baseAttributes = {
    endurance: 0,
    intelligence: 0,
    strength: 0,
    agility: 0,
    faith: 0
};

// 根据 qualityPillCount 计算并返回累积的 pillBonus
function calculateQualityByPill() {
    if (consumedPillCount > 0) {
        return Math.floor((1240 / 2000) * currentPet.qualities.growthRate/100) * consumedPillCount;
    }
    return 0;
}
// 根据固有资质计算得来的属性
function calculateAttribute(currentValue, growthRate, level) {
    return Math.floor((currentValue / 2000) * growthRate * level);
}

function getGemFirstAttributes() {
    const gemFirstAttributes = {
        endurance: 0,
        intelligence: 0,
        strength: 0,
        agility: 0,
        faith: 0
    };

    Object.keys(armsAttributes).forEach(key => {
        const arm = armsAttributes[key];
        const gemAttributes = arm.armState?.gemSlots?.gemAttribute;

        if (gemAttributes && arm.activated) {
            // 遍历一级属性并累加
            Object.keys(gemFirstAttributes).forEach(attr => {
                if (gemAttributes[attr] !== undefined) {
                    gemFirstAttributes[attr] += gemAttributes[attr];
                }
            });
        }
    });

    return gemFirstAttributes;
}
        
// 根据资质仙丹、固有资质、培养属性、觉醒属性、道具属性综合计算的最终属性
function calculateCurrentAttributes() {
    const { attributeBonuses, qualityBonuses } = getElixirBonuses();
    
    // 调用计算套装效果
    applySuitEffects();
    
    const qualities = currentPet.qualities;
    const { growthRate } = calculateGrowthRateDisplayAndValue(qualities);
    const pillBonus = calculateQualityByPill(qualityPillCount);
    const gemFirstAttributes = getGemFirstAttributes();
    const divinedFirstAttributes = getTotalDivinedFirstAttributes();
    
    // 添加内丹加成的资质值
    const effectiveQualities = {
        endurance: qualities.endurance.current + (qualityBonuses.endurance || 0),
        intelligence: qualities.intelligence.current + (qualityBonuses.intelligence || 0),
        strength: qualities.strength.current + (qualityBonuses.strength || 0),
        agility: qualities.agility.current + (qualityBonuses.agility || 0),
        faith: qualities.faith.current + (qualityBonuses.faith || 0)
    };
    const attributes = {
        endurance: calculateAttribute(effectiveQualities.endurance, growthRate, petLevel) 
            + bonusAttributes.endurance 
            + awakenAttributes.endurance 
            + additionalAttributes.endurance 
            + pillBonus 
            + gemFirstAttributes.endurance
            + divinedFirstAttributes.endurance
            + attributeBonuses.first.endurance
            + suitBonus.endurance, // 添加套装加成
        intelligence: calculateAttribute(effectiveQualities.intelligence, growthRate, petLevel) 
            + bonusAttributes.intelligence 
            + awakenAttributes.intelligence 
            + additionalAttributes.intelligence 
            + pillBonus 
            + gemFirstAttributes.intelligence
            + divinedFirstAttributes.intelligence
            + attributeBonuses.first.intelligence,
        strength: calculateAttribute(effectiveQualities.strength, growthRate, petLevel) 
            + bonusAttributes.strength 
            + awakenAttributes.strength 
            + additionalAttributes.strength 
            + pillBonus 
            + gemFirstAttributes.strength
            + divinedFirstAttributes.strength
            + attributeBonuses.first.strength,
        agility: calculateAttribute(effectiveQualities.agility, growthRate, petLevel) 
            + bonusAttributes.agility 
            + awakenAttributes.agility 
            + additionalAttributes.agility 
            + pillBonus 
            + gemFirstAttributes.agility
            + divinedFirstAttributes.agility
            + attributeBonuses.first.agility
            + suitBonus.agility, // 添加套装加成
        faith: calculateAttribute(effectiveQualities.faith, growthRate, petLevel) 
            + bonusAttributes.faith 
            + awakenAttributes.faith 
            + additionalAttributes.faith 
            + pillBonus 
            + gemFirstAttributes.faith
            + divinedFirstAttributes.faith
            + attributeBonuses.first.faith
    };
    return attributes;
}

//所谓的attributesForTraning就是指支持培养的属性值
function attributesForTraning() {
    const qualities = currentPet.qualities;
    const { growthRate } = calculateGrowthRateDisplayAndValue(qualities);
    const pillBonus = calculateQualityByPill(qualityPillCount); // 获取 pillBonus
    

    const leftAttributes = {
        endurance: calculateAttribute(qualities.endurance.current, growthRate, petLevel) + additionalAttributes.endurance + pillBonus,
        intelligence: calculateAttribute(qualities.intelligence.current, growthRate, petLevel) + additionalAttributes.intelligence + pillBonus,
        strength: calculateAttribute(qualities.strength.current, growthRate, petLevel) + additionalAttributes.strength + pillBonus,
        agility: calculateAttribute(qualities.agility.current, growthRate, petLevel) + additionalAttributes.agility + pillBonus,
        faith: calculateAttribute(qualities.faith.current, growthRate, petLevel) + additionalAttributes.faith + pillBonus
    };

    return leftAttributes;
}
        
function updateAttributePanel() {
    const pet = currentPet;
    const qualities = pet.qualities;
    const { growthRateDisplay, growthRate } = calculateGrowthRateDisplayAndValue(qualities);
    const gemFirstAttributes = getGemFirstAttributes();
    const skillsArea = document.getElementById("skills-area");

    const currentAttributes = attributesForTraning();
    const divinedFirstAttributes = getTotalDivinedFirstAttributes();
    
    const { attributeBonuses, qualityBonuses } = getElixirBonuses();
    
    // 此数组用于更新显示属性左边的总值
    const totalAttributes = {
        endurance: calculateAttribute(qualityBonuses.endurance, growthRate, petLevel) + currentAttributes.endurance + awakenAttributes.endurance + gemFirstAttributes.endurance + divinedFirstAttributes.endurance  + attributeBonuses.first.endurance + suitBonus.endurance,
        intelligence: calculateAttribute(qualityBonuses.intelligence, growthRate, petLevel) + currentAttributes.intelligence + awakenAttributes.intelligence + gemFirstAttributes.intelligence + divinedFirstAttributes.intelligence + attributeBonuses.first.intelligence,
        strength: calculateAttribute(qualityBonuses.strength, growthRate, petLevel) + currentAttributes.strength + awakenAttributes.strength + gemFirstAttributes.strength + divinedFirstAttributes.strength+ attributeBonuses.first.strength,
        agility: calculateAttribute(qualityBonuses.agility, growthRate, petLevel) + currentAttributes.agility + awakenAttributes.agility + gemFirstAttributes.agility + divinedFirstAttributes.agility + attributeBonuses.first.agility + suitBonus.agility,
        faith: calculateAttribute(qualityBonuses.faith, growthRate, petLevel) + currentAttributes.faith + awakenAttributes.faith + gemFirstAttributes.faith + divinedFirstAttributes.faith + attributeBonuses.first.faith
    };

    //console.log("Total Attributes:", totalAttributes);

    document.getElementById("attribute-tier").innerText = qualities.tier;
    document.getElementById("attribute-growth-rate").innerText = growthRateDisplay;
    document.getElementById("attribute-life-span").innerText = `${currentLifeSpan}/${maxLifeSpan}`;
    document.getElementById("attribute-wisdom").innerText = currentWisdom;

    updateSecondaryAttributes(totalAttributes, currentWisdom);


    // 更新总属性显示
    document.getElementById("attribute-endurance").innerText = totalAttributes.endurance;
    document.getElementById("attribute-intelligence").innerText = totalAttributes.intelligence;
    document.getElementById("attribute-strength").innerText = totalAttributes.strength;
    document.getElementById("attribute-agility").innerText = totalAttributes.agility;
    document.getElementById("attribute-faith").innerText = totalAttributes.faith;

    //更新暴击爆伤
    document.getElementById("secondary-player-crit-rate").innerText = Math.floor(playerCritRate * 100) + '%';
    document.getElementById("secondary-player-crit-rate-bonus").innerText = '+0%';
    document.getElementById("secondary-player-crit-damage").innerText = Math.floor(playerCritDamage * 100) + '%';
    document.getElementById("secondary-player-crit-damage-bonus").innerText = '+0%';

    const remainingSkills = Array.from(skillsArea.children).map(div => {
        const [name, rarity] = div.innerText.split(' (');
        return { name, rarity: rarity.replace(')', '') };
    });
    
    updateSkillScore(remainingSkills);
    calculateSkillAttributes();
        
    updateRemainingPointsDisplay();
    bonusAttributesDisplay();
    updateElixirDisplay();
    updateQualityDisplayWithBonuses();
    syncSkillsAreas();
}

function calculateGrowthRateDisplayAndValue(qualities) {
    let growthRateDisplay;
    let growthRate;

    if (awakened) {
        growthRate = 400 + hallucinationLevel * 5;
        growthRateDisplay = `${growthRate}%`;
        growthRate = growthRate / 100;
    } else {
        growthRate = qualities.growthRate / 100;
        growthRateDisplay = `${Math.round(growthRate * 100)}%`;
    }
    return { growthRateDisplay, growthRate };
}
        
function updateAwakenStatus() {
    const awakenStatusElement = document.getElementById("awaken-status");
    if (awakened) {
        awakenStatusElement.innerText = '已觉醒';
        awakenStatusElement.style.color = 'red';
    } else {
        awakenStatusElement.innerText = '未觉醒';
        awakenStatusElement.style.color = ''; // 恢复默认颜色
    }
}

function awakenPet() {
    if (awakened) {
        showInfoBox("您的宠物已经觉醒，无法再次觉醒！");
        return;
    }

    const awakenPillItem = jinnangItems.find(i => i.name === 'awakenPill');
    if (!awakenPillItem || awakenPillItem.quantity < 1) {
        showInfoBox("必要道具：醒悟丹的数量不足！");
        return;
    }

    const confirmationMessage = "觉醒需要消耗一个珍贵道具醒悟丹。宠物觉醒后等级会有所回退，但成长率、属性值、成长和悟性上限会得到大幅提升。觉醒后的宠物还能控制并培养战斗精灵，在战斗时得到更强悍的助力！";
    showInfoBox(confirmationMessage, () => {
        const leftAttributes = attributesForTraning();

        // 计算awakenAttributes，为leftAttributes的20%
        awakenAttributes = {
            endurance: Math.floor(leftAttributes.endurance * 0.2),
            intelligence: Math.floor(leftAttributes.intelligence * 0.2),
            strength: Math.floor(leftAttributes.strength * 0.2),
            agility: Math.floor(leftAttributes.agility * 0.2),
            faith: Math.floor(leftAttributes.faith * 0.2)
        };

        currentPet.qualities.baseLevel = petLevel;
        currentPet.qualities.tier = '超凡';
        currentPet.qualities.growthRate = 400 + hallucinationLevel * 5;

        awakenPillItem.quantity--;
        updateJinnangItems();

        petMaxLevel = 160;
        const reducedLevel = Math.round(petLevel * 0.9);
        const maxReduction = 9;
        petLevel = Math.max(petLevel - maxReduction, reducedLevel);
        awakened = true;
        updateAwakenStatus();

        showInfoBox("成功觉醒，宠物的当前属性大幅提升，成长率升为超凡；悟性上限提升至25，等级上限提高至160级！");
        setTimeout(() => getSpiritBottle(), 1000);
        function getSpiritBottle() {
            const spiritBtl = jinnangItems.find(item => item.name === 'spiritBottle' && item.quantity < 1);
            if (spiritBtl) {
                addItemToJinnang('spiritBottle', 1);
                showInfoBox('你得到了一个精灵魔瓶！要好好培养她哦~',null,null,'green');
            }
        }
        
        updatePetLevel();
        updateAttributePanel();
        updateQualityDisplayWithBonuses();
    });
}

let hallucinated = false;
let hallucinationLevel = 0;

function hallucinatePet() {
    if (!awakened) {
        showInfoBox("您的宠物尚未觉醒，无法进行幻化提升！");
        return;
    }

    if (!hallucinated) {
        const coagulateStoneItem = jinnangItems.find(i => i.name === 'coagulateStone');
        if (!coagulateStoneItem || coagulateStoneItem.quantity < 1) {
            showInfoBox("您的凝魄石不足！凝魄石可通过至尊仙葫获取。");
            return;
        }

        coagulateStoneItem.quantity--;
        updateJinnangItems();

        hallucinated = true;
        hallucinationLevel = 0;

        showInfoBox("恭喜大侠，您的宠物获得了幻化能力。幻化等级为1级！");
        updateQualityDisplayWithBonuses();
        updateAttributePanel(); // 确保更新属性面板
        return;
    }

    if (hallucinationLevel >= 12) {
        showInfoBox("您的宠物幻化等级已达上限！");
        return;
    }

    const confirmHallucinationMessage = "每次幻化成功可以提升5%的成长率，悟性越高，成功率越高。幻化需要离魂石，是否继续？";
    showInfoBox(confirmHallucinationMessage, () => {
        const seperateStoneItem = jinnangItems.find(i => i.name === 'seperateStone');
        if (!seperateStoneItem || seperateStoneItem.quantity < 1) {
            showInfoBox("您的离魂石不足！");
            return;
        }

        seperateStoneItem.quantity--;
        updateJinnangItems();

        let successRate;
        if (currentWisdom < 20) {
            successRate = 0.2;
        } else {
            successRate = 0.2 + (currentWisdom - 19) * 0.1;
        }

        if (Math.random() < successRate) {
            hallucinationLevel++;
            document.getElementById("hallucination-level").innerText = `${hallucinationLevel}`;
            showInfoBox(`幻化提升成功！当前幻化等级为${hallucinationLevel}级！`);
            
            
        } else {
            showInfoBox("幻化提升失败！");
        }

        updateQualityDisplayWithBonuses();
        updateAttributePanel(); // 确保更新属性面板
    });
}

function fastHallucinatePet() {
    hallucinatePet();
}

// 更新显示函数



function useBingpoRebornPill() {
    if (!checkDrawerOpen()) return;
    if (!currentPet || !currentPet.qualities) { // 添加检查
        console.warn("当前宠物未被正确初始化。");
        return;
    }
    if (awakened) {
        showInfoBox("您的宠物已经觉醒,无法还童！");
        return;
    }
    if (bingpoRebornPill < 1) {
        showInfoBox("您的冰魄还童丹已耗尽！");
        return;
    }

    // 检查并处理变异状态
    if (currentPet.qualities.mutated) {
        showInfoBox("您的宠物已经变异,再次还童会改变其状态,请谨慎操作！", () => {
            // 当宠物失去变异状态时,资质会除以1.1
            const qualities = currentPet.qualities;
            qualities.endurance.current = Math.round(qualities.endurance.current / 1.1);
            qualities.strength.current = Math.round(qualities.strength.current / 1.1);
            qualities.faith.current = Math.round(qualities.faith.current / 1.1);
            qualities.agility.current = Math.round(qualities.agility.current / 1.1);
            qualities.intelligence.current = Math.round(qualities.intelligence.current / 1.1);
    
            currentPet.qualities.mutated = false;
            // 恢复原背景
            document.body.style.backgroundImage = "";
            updateQualityDisplayWithBonuses();
            updateSkillScore();

            // 继续执行重置宠物品质、成长率和更新技能等操作
            resetPetQualitiesAndSkills();
        });
    } else {
        // 如果宠物没有变异,直接执行重置宠物品质、成长率和更新技能等操作
        resetPetQualitiesAndSkills();
    }
}

// 简化的背景图片系统 - 移除背包交互，直接管理壁纸数量

// 更新背景图片数组结构，添加数量属性
let backgroundImages = [
    { name: 'backgroundIMG_1', displayName: '海盐', url: 'https://pic.imgdb.cn/item/66d2bf00d9c307b7e9f8b50a.gif', owned: true, appliedID: null, quantity: 999 },  // 默认背景，永久拥有
    { name: 'backgroundIMG_2', displayName: '绿光森林', url: 'https://pic.imgdb.cn/item/66cd61f8d9c307b7e9af46c0.png', owned: false, appliedID: null, quantity: 0 },
    { name: 'backgroundIMG_3', displayName: '春节红', url: 'https://pic.imgdb.cn/item/66d071cbd9c307b7e9344927.png', owned: false, appliedID: null, quantity: 0 },
    { name: 'backgroundIMG_4', displayName: '七彩幻想城', url: 'https://pic.imgdb.cn/item/66d5d9a1d9c307b7e950d6b2.png', owned: false, appliedID: null, quantity: 0 },
    { name: 'backgroundIMG_5', displayName: '岩石裂隙', url: 'https://pic.imgdb.cn/item/66e6d194d9c307b7e9c131d3.png', owned: false, appliedID: null, quantity: 0 },
    { name: 'backgroundIMG_6', displayName: '印象派印象', url: 'https://pic.imgdb.cn/item/66bb97abd9c307b7e974cff5.png', owned: false, appliedID: null, quantity: 0 },
    { name: 'backgroundIMG_7', displayName: '夏日葡萄藤', url: 'https://pic.imgdb.cn/item/66e85ca3d9c307b7e9cdc5df.jpg', owned: false, appliedID: null, quantity: 0 },
    { name: 'backgroundIMG_8', displayName: '烟云', url: 'https://pic.imgdb.cn/item/66cc8f01d9c307b7e9c6d2e8.png', owned: false, appliedID: null, quantity: 0 },
    { name: 'backgroundIMG_9', displayName: '星辰',  url: 'https://pic1.imgdb.cn/item/67bc914fd0e0a243d403b86c.gif' , owned: false, appliedID: null, quantity: 0 },
    { name: 'backgroundIMG_10', displayName: '神奈川冲浪里', url: 'https://pic1.imgdb.cn/item/67bc94a8d0e0a243d403bc7f.png' , owned: false, appliedID: null, quantity: 0 }
];

// 保存背景数据到localStorage
function saveBackgroundData() {
    try {
        localStorage.setItem('backgroundImages', JSON.stringify(backgroundImages));
    } catch (error) {
        console.error('保存背景数据失败:', error);
    }
}

// 从localStorage加载背景数据
function loadBackgroundData() {
    try {
        const savedData = localStorage.getItem('backgroundImages');
        if (savedData) {
            backgroundImages = JSON.parse(savedData);
            console.log('成功加载背景数据');
        }
    } catch (error) {
        console.error('加载背景数据失败:', error);
    }
}

// 更换壁纸函数 - 允许多个宠物使用同一壁纸
function changeHomePageImg(bgName) {
    // 只允许变异宠物更换壁纸
    if (!currentPet.qualities.mutated) {
        showInfoBox("只有变异宠物才能更换背景图片！");
        return false;
    }
    
    // 查找选中的壁纸
    const selectedBackground = backgroundImages.find(bg => bg.name === bgName);
    
    if (!selectedBackground) {
        showInfoBox("选择的背景不存在！");
        return false;
    }
    
    // 检查壁纸是否已拥有且数量大于0
    if (!selectedBackground.owned || selectedBackground.quantity <= 0) {
        showInfoBox("你没有足够的壁纸可用！");
        return false;
    }
    
    // 检查当前宠物是否已应用了相同的壁纸
    const currentApplied = backgroundImages.find(bg => 
        bg.appliedPets && bg.appliedPets.includes(currentPet.name));
    
    // 如果当前宠物已经应用了其他壁纸，移除此关联
    if (currentApplied && currentApplied.name !== selectedBackground.name) {
        currentApplied.appliedPets = currentApplied.appliedPets.filter(petName => 
            petName !== currentPet.name);
    }
    
    // 如果当前宠物没有应用此壁纸，则应用它
    if (!selectedBackground.appliedPets || !selectedBackground.appliedPets.includes(currentPet.name)) {
        // 消耗一个壁纸数量
        selectedBackground.quantity--;
        if (selectedBackground.quantity <= 0 && selectedBackground.name !== 'backgroundIMG_8') {
            // 如果不是默认壁纸且数量归零, 设置为未拥有
            selectedBackground.owned = false;
        }
        
        // 初始化appliedPets数组（如果不存在）
        if (!selectedBackground.appliedPets) {
            selectedBackground.appliedPets = [];
        }
        
        // 添加当前宠物到应用列表
        selectedBackground.appliedPets.push(currentPet.name);
        
        showInfoBox(`成功为 ${currentPet.name} 应用「${selectedBackground.displayName}」背景！`);
        updateMutatedImg(); // 立即更新背景
        saveBackgroundData(); // 保存背景数据
        return true;
    } else {
        // 如果宠物已应用此壁纸，则取消应用
        selectedBackground.appliedPets = selectedBackground.appliedPets.filter(petName => 
            petName !== currentPet.name);
        
        showInfoBox(`已取消 ${currentPet.name} 的背景应用`);
        updateMutatedImg(); // 重置为默认变异背景
        saveBackgroundData(); // 保存背景数据
        return true;
    }
}

// 更新壁纸显示函数
function updateMutatedImg() {
    // 如果有特殊角色, 直接返回
    if (checkSpecialRole()) return;
    
    // 检查宠物是否变异
    if (currentPet.qualities.mutated) {
        // 查找当前宠物应用的壁纸
        const appliedBackground = backgroundImages.find(bg => 
            bg.appliedPets && bg.appliedPets.includes(currentPet.name));
        
        if (appliedBackground) {
            // 使用应用于此宠物的壁纸
            document.body.style.backgroundImage = `url('${appliedBackground.url}')`;
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
        } else {
            // 使用默认变异壁纸
            document.body.style.backgroundImage = "url('https://pic.imgdb.cn/item/66d2bf00d9c307b7e9f8b50a.gif')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
        }
    } else {
        // 如果宠物未变异, 重置为普通背景
        document.body.style.backgroundImage = "url('https://pic1.imgdb.cn/item/677fa8efd0e0a243d4f2b9fb.png')";
        document.body.style.backgroundRepeat = "repeat";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
    }
}

// 更新壁纸界面的渲染函数
function renderBackgroundItems(backgroundContent) {
    // 清除现有内容
    backgroundContent.innerHTML = '';
    
    // 渲染所有壁纸
    backgroundImages.forEach(background => {
        // 创建壁纸项
        const bgDiv = document.createElement('div');
        bgDiv.className = 'background-item';
        bgDiv.style.display = 'flex';
        bgDiv.style.flexDirection = 'column';
        bgDiv.style.alignItems = 'center';
        bgDiv.style.padding = '10px';
        bgDiv.style.border = '1px solid #6f391c';
        bgDiv.style.borderRadius = '5px';
        bgDiv.style.backgroundColor = background.owned ? 'rgba(255, 255, 255, 0.2)' : 'rgba(100, 100, 100, 0.2)';
        
        // 壁纸名称
        const nameDiv = document.createElement('div');
        nameDiv.innerText = background.displayName;
        nameDiv.style.fontWeight = 'bold';
        nameDiv.style.marginBottom = '5px';
        nameDiv.style.fontSize = '13px';
        bgDiv.appendChild(nameDiv);
        
        // 预览图片
        const img = document.createElement('div');
        img.style.width = '100px';
        img.style.height = '60px';
        img.style.backgroundImage = `url('${background.url}')`;
        img.style.backgroundSize = 'cover';
        img.style.backgroundPosition = 'center';
        img.style.border = '10px solid transparent';
        img.style.borderImage = 'url(https://pic.imgdb.cn/item/66c2f34cd9c307b7e9be06c0.png) 40 round';
        img.style.marginBottom = '5px';
        bgDiv.appendChild(img);
        
        // 使用情况
        const usageDiv = document.createElement('div');
        usageDiv.style.marginBottom = '5px';
        usageDiv.style.fontSize = '12px';
        usageDiv.style.textAlign = 'center';
        
        // 检查当前宠物是否使用此壁纸
        const isAppliedToCurrent = background.appliedPets && 
            background.appliedPets.includes(currentPet.name);
        
        // 计算总共有多少宠物使用此壁纸
        const appliedCount = background.appliedPets ? background.appliedPets.length : 0;
        
        if (appliedCount > 0) {
            if (isAppliedToCurrent) {
                usageDiv.innerHTML = `<span style="color: #00cc00;">当前宠物已应用</span>`;
                if (appliedCount > 1) {
                    usageDiv.innerHTML += `<br><span style="color: #0066cc;">共${appliedCount}只宠物在使用</span>`;
                }
            } else {
                usageDiv.innerHTML = `<span style="color: #0066cc;">共${appliedCount}只宠物在使用</span>`;
            }
        } else {
            usageDiv.innerText = '未被应用';
            usageDiv.style.color = '#666666';
        }
        bgDiv.appendChild(usageDiv);
        
        // 数量信息
        const quantityDiv = document.createElement('div');
        quantityDiv.innerText = `库存: ${background.quantity}`;
        quantityDiv.style.fontSize = '12px';
        quantityDiv.style.marginBottom = '5px';
        quantityDiv.style.color = background.quantity > 0 ? '#00aa00' : '#aa0000';
        bgDiv.appendChild(quantityDiv);
        
        // 应用按钮
        const applyButton = document.createElement('button');
        if (isAppliedToCurrent) {
            applyButton.innerText = '取消应用';
        } else {
            applyButton.innerText = '应用背景';
        }
        
        applyButton.style.fontSize = '12px';
        applyButton.style.color = '#F9DE9B';
        applyButton.style.background = 'linear-gradient(to bottom, #E47F47, #CE6633, #963D1C)';
        applyButton.style.border = '1px solid #6F391C';
        applyButton.style.padding = '2px 6px';
        applyButton.style.borderRadius = '5px';
        applyButton.style.cursor = 'pointer';
        
        // 如果不可用，禁用按钮
        const isDisabled = !background.owned || 
            (background.quantity <= 0 && !isAppliedToCurrent) || 
            !currentPet.qualities.mutated;
            
        if (isDisabled) {
            applyButton.style.backgroundColor = 'grey';
            applyButton.style.cursor = 'not-allowed';
            applyButton.disabled = true;
        }
        
        applyButton.addEventListener('click', () => {
            if (changeHomePageImg(background.name)) {
                // 重新渲染壁纸列表以反映变化
                renderBackgroundItems(backgroundContent);
            }
        });
        
        bgDiv.appendChild(applyButton);
        
        // 应用宠物列表（可折叠）
        if (background.appliedPets && background.appliedPets.length > 0) {
            const appliedListToggle = document.createElement('button');
            appliedListToggle.innerText = '查看已应用宠物 ▼';
            appliedListToggle.style.fontSize = '10px';
            appliedListToggle.style.marginTop = '5px';
            appliedListToggle.style.padding = '2px 5px';
            appliedListToggle.style.border = '1px solid #6f391c';
            appliedListToggle.style.borderRadius = '3px';
            appliedListToggle.style.backgroundColor = 'rgba(111, 57, 28, 0.2)';
            appliedListToggle.style.cursor = 'pointer';
            
            const appliedList = document.createElement('div');
            appliedList.style.display = 'none';
            appliedList.style.marginTop = '5px';
            appliedList.style.fontSize = '10px';
            appliedList.style.maxHeight = '60px';
            appliedList.style.overflowY = 'auto';
            appliedList.style.width = '100%';
            appliedList.style.textAlign = 'center';
            
            background.appliedPets.forEach(petName => {
                const petItem = document.createElement('div');
                petItem.innerText = petName;
                petItem.style.padding = '2px';
                petItem.style.color = petName === currentPet.name ? '#00cc00' : '#000000';
                appliedList.appendChild(petItem);
            });
            
            appliedListToggle.addEventListener('click', () => {
                if (appliedList.style.display === 'none') {
                    appliedList.style.display = 'block';
                    appliedListToggle.innerText = '隐藏已应用宠物 ▲';
                } else {
                    appliedList.style.display = 'none';
                    appliedListToggle.innerText = '查看已应用宠物 ▼';
                }
            });
            
            bgDiv.appendChild(appliedListToggle);
            bgDiv.appendChild(appliedList);
        }
        
        backgroundContent.appendChild(bgDiv);
    });
}

// 壁纸选择界面函数 - 直接调用renderBackgroundItems更新壁纸列表
function backgroundCollection() {
    // 清除现有面板
    const existingPanel = document.getElementById('backgroundPanel');
    if (existingPanel) {
        existingPanel.remove();
    }

    // 创建新面板
    const backgroundPanel = document.createElement('div');
    backgroundPanel.id = 'backgroundPanel';
    backgroundPanel.style.position = 'fixed';
    backgroundPanel.style.top = '50%';
    backgroundPanel.style.left = '50%';
    backgroundPanel.style.transform = 'translate(-50%, -50%)';
    backgroundPanel.style.width = '95%';
    backgroundPanel.style.zIndex = '1000';
    backgroundPanel.style.padding = '2px';
    backgroundPanel.style.borderRadius = '2px';
    backgroundPanel.style.backgroundColor = '#DFBF6E';
    backgroundPanel.style.color = '#92341c';
    backgroundPanel.style.backgroundImage = 'url(https://pic.imgdb.cn/item/663885620ea9cb14033e4f6e.png)';
    backgroundPanel.style.backgroundRepeat = 'repeat';
    backgroundPanel.style.backgroundSize = 'auto';
    backgroundPanel.style.border = '1px solid black';
    backgroundPanel.style.boxShadow = 'inset 0px 0px 2px 2px #6f391c';
    document.body.appendChild(backgroundPanel);
    
    // 创建标题按钮(兼作关闭按钮)
    const titleButton = document.createElement('button');
    titleButton.innerText = 'PICS';
    titleButton.style.display = 'flex';
    titleButton.style.flexDirection = 'column';
    titleButton.style.width = '100%';
    titleButton.style.fontSize = '16px';
    titleButton.style.padding = '5px';
    titleButton.style.textAlign = 'center';
    titleButton.style.backgroundImage = 'url(https://pic.imgdb.cn/item/66bf32d9d9c307b7e9995d58.png)';
    titleButton.style.backgroundRepeat = 'repeat';
    titleButton.style.backgroundSize = 'contain';
    titleButton.style.color = 'rgb(227, 167, 59)';
    titleButton.style.cursor = 'pointer';
    titleButton.style.boxShadow = 'rgb(227, 167, 59) 0px 1px 2px 0px inset';
    titleButton.style.border = '1px solid black';
    titleButton.style.alignItems = 'center';
    titleButton.addEventListener('click', () => backgroundPanel.remove());
    backgroundPanel.appendChild(titleButton);

    // 创建信息区
    const infoDiv = document.createElement('div');
    infoDiv.style.padding = '10px';
    infoDiv.style.margin = '10px';
    infoDiv.style.borderRadius = '2px';
    infoDiv.style.border = '1px solid rgb(122, 64, 11)';
    infoDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    infoDiv.style.fontSize = '12px';
    
    const mutationStatus = currentPet.qualities.mutated ? 
        `<span style="color: #00cc00;">变异状态: 已变异</span>` : 
        `<span style="color: #cc0000;">变异状态: 未变异</span>`;
    
    infoDiv.innerHTML = `
        当前宠物: ${currentPet.name}<br>
        ${mutationStatus}<br>
        <span style="font-style: italic;">提示: 只有变异宠物才能应用背景图片。应用背景会消耗一次背景道具。</span><br>
    `;
    backgroundPanel.appendChild(infoDiv);

    // 创建壁纸内容区
    const backgroundContent = document.createElement('div');
    backgroundContent.id = 'backgroundContentContainer';
    backgroundContent.style.display = 'grid';
    backgroundContent.style.gridTemplateColumns = 'repeat(2, 1fr)';
    backgroundContent.style.gap = '10px';
    backgroundContent.style.padding = '10px';
    backgroundContent.style.margin = '10px';
    backgroundContent.style.height = '330px';
    backgroundContent.style.overflowY = 'scroll';
    backgroundContent.style.border = '1px solid #6f391c';
    backgroundContent.style.borderRadius = '2px';
    backgroundPanel.appendChild(backgroundContent);

    // 渲染壁纸列表
    renderBackgroundItems(backgroundContent);
}

// 获取新壁纸函数
function addBackgroundToMenu() {
    // 可扩展的背景池 - 可以随时添加新壁纸
    const backgroundPool = [
        { name: 'backgroundIMG_1', displayName: '海盐', chance: 10, url: 'https://pic.imgdb.cn/item/66d2bf00d9c307b7e9f8b50a.gif' },
        { name: 'backgroundIMG_2', displayName: '绿光森林', chance: 10, url: 'https://pic.imgdb.cn/item/66cd61f8d9c307b7e9af46c0.png' },
        { name: 'backgroundIMG_3', displayName: '春节红', chance: 10, url: 'https://pic.imgdb.cn/item/66d071cbd9c307b7e9344927.png' },
        { name: 'backgroundIMG_4', displayName: '七彩幻想城', chance: 10, url: 'https://pic.imgdb.cn/item/66d5d9a1d9c307b7e950d6b2.png' },
        { name: 'backgroundIMG_5', displayName: '岩石裂隙', chance: 10, url: 'https://pic.imgdb.cn/item/66e6d194d9c307b7e9c131d3.png' },
        { name: 'backgroundIMG_6', displayName: '印象派印象', chance: 10, url: 'https://pic.imgdb.cn/item/66bb97abd9c307b7e974cff5.png' },
        { name: 'backgroundIMG_7', displayName: '夏日葡萄藤', chance: 10, url: 'https://pic.imgdb.cn/item/66e85ca3d9c307b7e9cdc5df.jpg' },
        { name: 'backgroundIMG_8', displayName: '烟云', chance: 10, url: 'https://pic.imgdb.cn/item/66cc8f01d9c307b7e9c6d2e8.png' },
        { name: 'backgroundIMG_9', displayName: '星辰', chance: 10, url: 'https://pic1.imgdb.cn/item/67bc914fd0e0a243d403b86c.gif' },
        { name: 'backgroundIMG_10', displayName: '神奈川冲浪里', chance: 10, url: 'https://pic1.imgdb.cn/item/67bc94a8d0e0a243d403bc7f.png' }
        // 后续可以在这里直接添加新壁纸，系统会自动处理
        // { name: 'backgroundIMG_9', displayName: '新壁纸名称', chance: 5, url: '壁纸URL' }
    ];
    
    // 确保所有背景池中的壁纸都已在系统中注册
    backgroundPool.forEach(poolItem => {
        const existingBg = backgroundImages.find(bg => bg.name === poolItem.name);
        
        if (!existingBg) {
            // 发现新壁纸，自动添加到系统
            console.log(`发现新壁纸 ${poolItem.name}，正在添加到系统...`);
            
            backgroundImages.push({
                name: poolItem.name,
                displayName: poolItem.displayName,
                url: poolItem.url,
                owned: false,
                quantity: 0,
                appliedPets: []
            });
            
            // 保存更新后的数据
            saveBackgroundData();
        } else if (existingBg.url !== poolItem.url || existingBg.displayName !== poolItem.displayName) {
            // 更新现有壁纸的displayName和url（不影响用户数据）
            existingBg.displayName = poolItem.displayName;
            existingBg.url = poolItem.url;
            
            // 保存更新后的数据
            saveBackgroundData();
        }
    });
    
    // 计算总概率
    const totalChance = backgroundPool.reduce((sum, item) => sum + item.chance, 0);
    
    // 生成随机数
    let randomChance = Math.random() * totalChance;
    
    // 根据概率选择壁纸
    for (let item of backgroundPool) {
        if (randomChance < item.chance) {
            setTimeout(() => {
                // 查找壁纸数据
                const bgIndex = backgroundImages.findIndex(bg => bg.name === item.name);
                
                if (bgIndex !== -1) {
                    // 更新壁纸数据
                    backgroundImages[bgIndex].quantity++;
                    if (!backgroundImages[bgIndex].owned) {
                        backgroundImages[bgIndex].owned = true;
                    }
                    
                    // 保存数据
                    saveBackgroundData();
                    
                    // 显示获得通知
                    showInfoBox(
                        `你获得了: ${item.displayName}背景`,
                        null,
                        null,
                        'red',
                        backgroundImages[bgIndex].url
                    );
                    
                    // 如果是首次获得此壁纸，显示特殊提示
                    if (backgroundImages[bgIndex].quantity === 1) {
                        setTimeout(() => {
                            showInfoBox(
                                `首次获得壁纸「${item.displayName}」！前往背景收藏馆查看！`,
                                null,
                                null,
                                'gold'
                            );
                        }, 1500);
                    }
                }
            }, 200);
            break;
        }
        randomChance -= item.chance;
    }
}
// 游戏加载时初始化背景系统
// initBackgroundSystem();

function checkSpecialRole() {
    const designatedImg = {
        'jiecheng': 'https://pic.imgdb.cn/item/66e85ca3d9c307b7e9cdc5df.jpg',
        'liguo': 'https://pic1.imgdb.cn/item/677fa8b7d0e0a243d4f2b9c8.png'
    };

    // 移除现有的遮罩层（如果存在）
    const existingOverlay = document.getElementById('special-role-overlay');
    if (existingOverlay) {
        document.body.removeChild(existingOverlay);
    }

    if (designatedImg.hasOwnProperty(currentPetKey)) {
        // 设置背景图片
        document.body.style.background = `url('${designatedImg[currentPetKey]}') no-repeat center center fixed`;
        document.body.style.backgroundSize = 'cover';

        // 创建新的遮罩层
        const imageOverlay = document.createElement('div');
        imageOverlay.id = 'special-role-overlay';
        imageOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none; /* 允许点击穿透 */
            opacity: 0.5;
            z-index: -1000;
            background-color: rgb(255 255 255 / 50%);
        `;

        document.body.appendChild(imageOverlay);
        return true;
    }
    return false;
}
        
function resetPetQualitiesAndSkills() {
    // 重置宠物的品质和成长率
    let tier, growthRate;
    const roll = Math.random() * 100;
    if (roll < 50) {
        tier = '普通';
        growthRate = 100;
    } else if (roll < 75) {
        tier = '优秀';
        growthRate = 220;
    } else if (roll < 90) {
        tier = '杰出';
        growthRate = 280;
    } else if (roll < 97.5) {
        tier = '卓越';
        growthRate = 340;
    } else if (roll < 99.95) {
        tier = '完美';
        growthRate = 400;
    } else {
        tier = Math.random() < 0.5 ? '卓越' : '完美';
        growthRate = tier === '卓越' ? getWeightedRandom([300, 320], [0.5, 0.5]) : getWeightedRandom([340, 360, 380, 400], [0.3, 0.5, 0.15, 0.05]);
        currentPet.qualities.mutated = true;
        const qualities = currentPet.qualities;
        qualities.endurance.current = Math.round(qualities.endurance.current * 1.1);
        qualities.strength.current = Math.round(qualities.strength.current * 1.1);
        qualities.faith.current = Math.round(qualities.faith.current * 1.1);
        qualities.agility.current = Math.round(qualities.agility.current * 1.1);
        qualities.intelligence.current = Math.round(qualities.intelligence.current * 1.1);
    }

    bingpoRebornPill--;
    document.getElementById("bingpo-reborn-pill").innerText = bingpoRebornPill;
    
    currentPet.qualities.tier = tier;
    currentPet.qualities.growthRate = growthRate;

    updateQualityDisplayWithBonuses();
    updateSkillScore();
    updateTitle();

    // 更新技能
    const skillNum = getRandomInt(0, 3);
    const newSkills = [];
    const bSkills = currentPet.skills.filter(skill => skill.rarity === 'B');
    for (let i = 0; i < skillNum; i++) {
        const skill = bSkills[Math.floor(Math.random() * bSkills.length)];
        if (!newSkills.some(s => s.name === skill.name)) {
            newSkills.push(skill);
        }
    }
    updateSkillsArea(newSkills);
    updateSkillScore(newSkills);

    petLevel = 1;
    currentWisdom = 0;
    petWisdom = currentWisdom;

    document.getElementById("pet-level").innerText = petLevel;
    document.getElementById("current-wisdom").innerText = currentWisdom;

    updatePetLevel();
    updatePetWisdom();
    updateMutatedImg();
    updateAttributePanel();
}
        
function rebornPet(isCheatMode = false) {
    if (!checkDrawerOpen()) return;
    if (!currentPet || !currentPet.qualities) { // 添加检查
        console.warn("当前宠物未被正确初始化。");
        return;
    }
    if (awakened) {
        showInfoBox("您的宠物已经觉醒，无法还童！");
        return;
    }
    
    if (!isCheatMode && rebornPill < 1) {
        showInfoBox("您的神兽还童丹已耗尽！");
        return;
    }

    if (currentPet.qualities.mutated) {
        showInfoBox("您的宠物已经变异，再次还童会改变其状态，请谨慎操作！", () => {
            // 当宠物失去变异状态时，资质会除以1.1
            const qualities = currentPet.qualities;
            qualities.endurance.current = Math.round(qualities.endurance.current / 1.1);
            qualities.strength.current = Math.round(qualities.strength.current / 1.1);
            qualities.faith.current = Math.round(qualities.faith.current / 1.1);
            qualities.agility.current = Math.round(qualities.agility.current / 1.1);
            qualities.intelligence.current = Math.round(qualities.intelligence.current / 1.1);
    
            currentPet.qualities.mutated = false;
            // 恢复原背景
            updateMutatedImg();
            updateQualityDisplayWithBonuses();
            updateSkillScore();
        });
        return;
    }

    if (!isCheatMode) {
        rebornPill--;
        document.getElementById("reborn-pill").innerText = rebornPill;
    }

    let tier, growthRate;
    const roll = Math.random() * 100;
    if (roll < 50) {
        tier = '普通';
        growthRate = 100;
    } else if (roll < 75) {
        tier = '优秀';
        growthRate = 220;
    } else if (roll < 90) {
        tier = '杰出';
        growthRate = 280;
    } else if (roll < 97.5) {
        tier = '卓越';
        growthRate = 340;
    } else if (roll < 99.95) {
        tier = '完美';
        growthRate = 400;
    } else {
        tier = Math.random() < 0.5 ? '卓越' : '完美';
        growthRate = tier === '卓越' ? getWeightedRandom([300, 320], [0.5, 0.5]) : getWeightedRandom([340, 360, 380, 400], [0.3, 0.5, 0.15, 0.05]);
        currentPet.qualities.mutated = true;
        // 设置背景为变异背景
        updateMutatedImg();
    }
    
    currentPet.qualities.tier = tier;
    currentPet.qualities.growthRate = growthRate;

    const qualities = currentPet.qualities;
    qualities.endurance.current = getRandomInt(qualities.endurance.min, qualities.endurance.max * 0.9);
    qualities.strength.current = getRandomInt(qualities.strength.min, qualities.strength.max * 0.9);
    qualities.faith.current = getRandomInt(qualities.faith.min, qualities.faith.max * 0.9);
    qualities.agility.current = getRandomInt(qualities.agility.min, qualities.agility.max * 0.9);
    qualities.intelligence.current = getRandomInt(qualities.intelligence.min, qualities.intelligence.max * 0.9);

    updateQualityDisplayWithBonuses();
    updateSkillScore();

    // 更新技能
    const skillNum = getRandomInt(0, 3);
    const newSkills = [];
    const bSkills = currentPet.skills.filter(skill => skill.rarity === 'B');
    for (let i = 0; i < skillNum; i++) {
        const skill = bSkills[Math.floor(Math.random() * bSkills.length)];
        if (!newSkills.some(s => s.name === skill.name)) {
            newSkills.push(skill);
        }
    }
    updateSkillsArea(newSkills);
    updateSkillScore(newSkills);

    petLevel = 1;
    currentWisdom = 0;
    petWisdom = currentWisdom;
    petAscended = false; //新增宠物失去飞升的还童规则
    petMaxLevel = 149;

    document.getElementById("pet-level").innerText = petLevel;
    document.getElementById("current-wisdom").innerText = currentWisdom;

    updatePetLevel();
    updatePetWisdom();
    updateAttributePanel();
    updateTitle();
    updateMutatedImg();
}


function trainQuality() {
    if (!checkDrawerOpen()) return;
    if (awakened) {
        showInfoBox("您的宠物已经觉醒，无法还童！");
        return;
    }

    if (currentPet.qualities.mutated) {
        showInfoBox("您的宠物已经变异，无法使用一键还童！");
        return;
    }
        
    const targetTier = prompt("请选择预期成长（普通，优秀，杰出，卓越，完美）:");
    if (targetTier === null) return;
    const stopOnMutation = confirm("宠物如果发生变异则停止还童？");

    // 检查作弊码
    if (targetTier === "111") {
        // 直接设置宠物的属性为完美状态
        currentPet.qualities.tier = "完美";
        currentPet.qualities.growthRate = 400;
        currentPet.qualities.mutated = true;

        // 设置其他相关属性
        const qualities = currentPet.qualities;
        qualities.endurance.current = getRandomInt(qualities.endurance.min, qualities.endurance.max * 1.1);
        qualities.strength.current = getRandomInt(qualities.strength.min, qualities.strength.max * 1.1);
        qualities.faith.current = getRandomInt(qualities.faith.min, qualities.faith.max * 1.1);
        qualities.agility.current = getRandomInt(qualities.agility.min, qualities.agility.max * 1.1);
        qualities.intelligence.current = getRandomInt(qualities.intelligence.min, qualities.intelligence.max * 1.1);

        updateQualityDisplayWithBonuses();

        // 更新技能
        const skillNum = getRandomInt(0, 3);
        const newSkills = [];
        const bSkills = currentPet.skills.filter(skill => skill.rarity === 'B');
        for (let i = 0; i < skillNum; i++) {
            const skill = bSkills[Math.floor(Math.random() * bSkills.length)];
            if (!newSkills.some(s => s.name === skill.name)) {
                newSkills.push(skill);
            }
        }
        updateSkillsArea(newSkills);
        updateSkillScore(newSkills);

        petLevel = 1;
        currentWisdom = 24;
        petWisdom = currentWisdom;
        petAscended = false; // 新增宠物失去飞升的还童规则
        petMaxLevel = 149;

        document.getElementById("pet-level").innerText = petLevel;
        document.getElementById("current-wisdom").innerText = currentWisdom;
        document.getElementById("hallucination-level").innerText = `${hallucinationLevel}`;

        updatePetLevel();
        updatePetWisdom();
        updateAttributePanel();
        updateTitle();

        showInfoBox("已得到完美变异400%胚子。");

        // 调用觉醒、设置智慧值、提升等级和飞升函数
        awakenPetCheat();
        setPetWisdom(24);
        increasePetLevelCheat(160);
        ascendCheat();
        updateAwakenStatus();
        updateAscensionStatus();
        updateMutatedImg();

        return;
    }

    const initialRebornPill = rebornPill; // 记录初始的还童丹数量
    let achieved = false;

    while (rebornPill > 0 && !achieved) {
        rebornPet();
        if (currentPet.qualities.tier === targetTier) {
            achieved = true;
        }
        if (stopOnMutation && currentPet.qualities.mutated) {
            achieved = true;
        }
    }

    const usedRebornPills = initialRebornPill - rebornPill; // 计算消耗的还童丹数量
    const message = `您消耗了${usedRebornPills}颗神兽还童丹，${achieved ? '达成了' : '未能达成'}预期成长率。`;
    const messageBox = document.createElement('div');
    messageBox.style = "padding: 20px; background: white; border: 1px solid black; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000;";
    messageBox.innerHTML = `<p>${message}</p>
                            <button onclick="document.body.removeChild(this.parentNode)">关闭</button>`;
    document.body.appendChild(messageBox);
}

function awakenPetCheat() {
    if (awakened) {
        showInfoBox("您的宠物已经觉醒，无法再次觉醒！");
        return;
    }

    // 略过道具检查和消耗部分
    const leftAttributes = attributesForTraning();

    // 计算awakenAttributes，为leftAttributes的20%
    awakenAttributes = {
        endurance: Math.floor(leftAttributes.endurance * 0.2),
        intelligence: Math.floor(leftAttributes.intelligence * 0.2),
        strength: Math.floor(leftAttributes.strength * 0.2),
        agility: Math.floor(leftAttributes.agility * 0.2),
        faith: Math.floor(leftAttributes.faith * 0.2)
    };

    currentPet.qualities.baseLevel = petLevel;
    currentPet.qualities.tier = '超凡';
    currentPet.qualities.growthRate = 400 + hallucinationLevel * 5;
        
    petMaxLevel = 160;
    awakened = true;

    showInfoBox("成功觉醒，宠物的当前属性大幅提升，成长率升为超凡；悟性上限提升至25，等级上限提高至160级！");
    updatePetLevel();
    updateAttributePanel();
    updateQualityDisplayWithBonuses();
    updateAwakenStatus();
}

function setPetWisdom(value) {
    petWisdom = value;
    document.getElementById("current-wisdom").innerText = petWisdom;
    updatePetWisdom();
}

function increasePetLevelCheat(levels) {
    const oldLevel = petLevel;
    petLevel += levels;
    if (petLevel > petMaxLevel) petLevel = petMaxLevel; // 确保等级不超过上限

    const actualLevelsIncreased = petLevel - oldLevel;
    remainingPoints += actualLevelsIncreased * 2; // 每提升1级增加2个可分配点数

    updatePetLevel();
    updateAttributePanel();
    updateRemainingPointsDisplay();
    updateTitle();

    //console.log(`Pet Level Increased: Pet Level = ${petLevel}, Remaining Points = ${remainingPoints}`);
}

function ascendCheat() {
    petMaxLevel = 181;
    petAscended = true;

    showInfoBox("恭喜大侠的爱宠飞升成功！等级上限开放至180级，同时开放飞升之术功能！");
}

function generateTestElixirs() {
    // 清空当前的内丹状态
    elixirStates = [];
    
    // 形状数组
    const shapes = ['△', '□', '○', '◇'];
    
    // 为每一行生成4个内丹
    for (let row = 1; row <= 3; row++) {
        shapes.forEach((shape, index) => {
            // 生成内丹
            const elixir = generateElixir(shape, 'white', row);
            
            // 直接设置位置属性
            elixir.position = `${row}-${index}`;
            
            // 为显示名称添加属性
            const rowNames = ['圣阶内丹', '天灵元丹', '圣元灵丹'];
            elixir.displayName = `${rowNames[row-1]}(${shape})`;
        });
    }
    
    // 更新显示
    updateElixirDisplay();
    
    console.log('测试用内丹生成完成，共生成12个内丹');
    console.log('内丹状态：', elixirStates);
}

// 清除所有测试内丹的函数
function clearTestElixirs() {
    elixirStates = [];
    selectedElixir = null;
    updateElixirDisplay();
    console.log('所有测试内丹已清除');
}
    

// 全局变量
let elixirStates = [];
let selectedElixir = null;

const elixirRank = {
    'white' : '白色',
    'green' : '绿色',
    'blue' : '蓝色',
    'purple' : '紫色',
    'orange' : '橙色',
    'red' : '红色'
}

// 定义内丹系统的各种限制
const ELIXIR_LIMITS = {
    maxLevel: 100,
    maxStar: 13,
    maxExperience: 600000000, // 6亿经验
    rankProgression: ['white', 'green', 'blue', 'purple', 'orange', 'red'] // 品质提升顺序
};

// 定义内丹品质对应的可拥有bonus数量
const elixirRankBonusLimit = {
    'white': 1,
    'green': 2,
    'blue': 3,
    'purple': 4,
    'orange': 5,
    'red': 6
};

// 定义可能的bonus类型
const possibleAttributeBonuses = {
    // 一级属性
    firstLevel: {
        endurance: { min: 10, max: 100 },
        intelligence: { min: 10, max: 100 },
        strength: { min: 10, max: 100 },
        agility: { min: 10, max: 100 },
        faith: { min: 10, max: 100 }
    },
    // 二级属性
    secondLevel: {
        health: { min: 100, max: 1000 },
        mana: { min: 50, max: 500 },
        physicalAttack: { min: 20, max: 200 },
        physicalDefense: { min: 20, max: 200 },
        magicAttack: { min: 20, max: 200 },
        magicDefense: { min: 20, max: 200 },
        speed: { min: 10, max: 100 }
    }
};

const possibleQualityBonuses = {
    endurance: { min: 50, max: 300 },
    intelligence: { min: 50, max: 300 },
    strength: { min: 50, max: 300 },
    agility: { min: 50, max: 300 },
    faith: { min: 50, max: 300 }
};

// 定义不同品质内丹的基础属性值
const elixirBaseValues = {
    'white': {
        attributesFirst: 40,
        attributesSecond: 100,
        quality: 66
    },
    'green': {
        attributesFirst: 45,
        attributesSecond: 106,
        quality: 77
    },
    'blue': {
        attributesFirst: 50,
        attributesSecond: 112,
        quality: 88
    },
    'purple': {
        attributesFirst: 55,
        attributesSecond: 118,
        quality: 99
    },
    'orange': {
        attributesFirst: 60,
        attributesSecond: 124,
        quality: 110
    },
    'red': {
        attributesFirst: 65,
        attributesSecond: 130,
        quality: 121
    }
};

// 添加飞升相关的常量
const ASCENSION_CONFIG = {
    requiredExp: 200000,
    maxLevel: 100,
    successRate: {
        1: 0.4,  // row 1: 60%
        2: 0.25,  // row 2: 40%
        3: 0.1   // row 3: 20%
    }
};

// 修改飞升函数
function ascendElixir(clickedElixir) {
    if (clickedElixir.ascendState) {
        showInfoBox('此内丹已经飞升！');
        return false;
    }

    if (clickedElixir.rank !== 'orange') {
        showInfoBox('只有橙色品质的内丹才能进行飞升！');
        return false;
    }

    if (clickedElixir.exilirExperirnce < ASCENSION_CONFIG.requiredExp) {
        showInfoBox(`经验不足，飞升需要${ASCENSION_CONFIG.requiredExp}点经验！`);
        return false;
    }

    const successRate = ASCENSION_CONFIG.successRate[clickedElixir.row];
    const isSuccess = Math.random() < successRate;

    clickedElixir.exilirExperirnce -= ASCENSION_CONFIG.requiredExp;

    if (isSuccess) {
        clickedElixir.ascendState = true;
        clickedElixir.ascensionLevel = 1;
        clickedElixir.rank = 'red';
        
        // 提升元气上限至50000
        clickedElixir.vigor = Math.min(clickedElixir.vigor, 50000);
        
        // 添加一个新的随机bonus并更新现有bonus值
        const bonusValues = calculateElixirBonusValues(clickedElixir);
        clickedElixir.exilirAttributesBonus = clickedElixir.exilirAttributesBonus.map(bonus => ({
            ...bonus,
            value: bonus.type === 'first' ? bonusValues.attributesFirst : bonusValues.attributesSecond
        }));
        
        clickedElixir.exilirQualityBonus = clickedElixir.exilirQualityBonus.map(bonus => ({
            ...bonus,
            value: bonusValues.quality
        }));

        addNewBonus(clickedElixir, bonusValues);

        showInfoBox(`消耗200000/${clickedElixir.exilirExperirnce}内丹经验，飞升成功！\n内丹品质提升至红色！\n额外获得1条属性加成！\n元气上限提升至50000！`);
        updateElixirDisplay();
        updateQualityDisplayWithBonuses();
        updateAttributePanel();
        return true;
    } else {
        showInfoBox(`消耗200000/${clickedElixir.exilirExperirnce}内丹经验，飞升失败！`);
        return false;
    }
}

// 修改飞升等级提升函数
function levelUpAscension(clickedElixir) {
    if (!clickedElixir.ascendState) {
        showInfoBox('此内丹尚未飞升，无法提升飞升等级！');
        return false;
    }

    if (clickedElixir.ascensionLevel >= ASCENSION_CONFIG.maxLevel) {
        showInfoBox('飞升等级已达到最高级！');
        return false;
    }

    // 计算所需经验
    const requiredExp = 10000 * (clickedElixir.ascensionLevel + 1);
    
    if (clickedElixir.exilirExperirnce < requiredExp) {
        showInfoBox(`经验不足，升级需要${requiredExp}点经验！`);
        return false;
    }

    const isSuccess = Math.random() < 0.85;

    // 无论成功与否都扣除经验
    clickedElixir.exilirExperirnce -= requiredExp;

    if (isSuccess) {
        clickedElixir.ascensionLevel += 1;
        refreshElixirBonus(clickedElixir, false);
        
        showInfoBox(`消耗${requiredExp}/${clickedElixir.exilirExperirnce}内丹经验，飞升等级提升成功！\n当前飞升等级：${clickedElixir.ascensionLevel}`);
        updateElixirDisplay();
        updateQualityDisplayWithBonuses();
        updateAttributePanel();
        return true;
    } else {
        showInfoBox(`消耗${requiredExp}/${clickedElixir.exilirExperirnce}内丹经验，飞升等级提升失败！`);
        return false;
    }
}

// 添加新的bonus函数
function addNewBonus(elixir, bonusValues) {
    const possibleBonuses = [];
    
    // 收集所有可能的bonus类型
    // 一级属性
    Object.keys(possibleAttributeBonuses.firstLevel).forEach(attr => {
        if (!elixir.exilirAttributesBonus.some(b => b.attribute === attr)) {
            possibleBonuses.push({
                type: 'first',
                attribute: attr,
                value: bonusValues.attributesFirst
            });
        }
    });

    // 二级属性
    Object.keys(possibleAttributeBonuses.secondLevel).forEach(attr => {
        if (!elixir.exilirAttributesBonus.some(b => b.attribute === attr)) {
            possibleBonuses.push({
                type: 'second',
                attribute: attr,
                value: bonusValues.attributesSecond
            });
        }
    });

    // 资质（仅对row1和row2的内丹）
    if (elixir.row <= 2) {
        Object.keys(possibleQualityBonuses).forEach(quality => {
            if (!elixir.exilirQualityBonus.some(b => b.quality === quality)) {
                possibleBonuses.push({
                    type: 'quality',
                    quality: quality,
                    value: bonusValues.quality
                });
            }
        });
    }

    if (possibleBonuses.length > 0) {
        const randomBonus = possibleBonuses[Math.floor(Math.random() * possibleBonuses.length)];
        if (randomBonus.type === 'quality') {
            elixir.exilirQualityBonus.push({
                quality: randomBonus.quality,
                value: randomBonus.value
            });
        } else {
            elixir.exilirAttributesBonus.push({
                type: randomBonus.type,
                attribute: randomBonus.attribute,
                value: randomBonus.value
            });
        }
    }
}
    
function absorbExp() {
    if (!selectedElixir) {
        showInfoBox('请先选择一个内丹！');
        return;
    }

    if (currentExp <= 0) {
        showInfoBox('当前宠物没有可吸收的经验！');
        return;
    }

    // 计算可吸收的经验值
    const remainingCapacity = ELIXIR_LIMITS.maxExperience - selectedElixir.exilirExperirnce;
    const absorbableExp = Math.min(currentExp, remainingCapacity);

    if (absorbableExp <= 0) {
        showInfoBox('内丹经验已达到上限，无法继续吸收！');
        return;
    }

    // 构建确认消息
    let confirmMessage = `是否将宠物经验转化为内丹经验？\n\n`;
    confirmMessage += `当前宠物经验：${currentExp.toLocaleString()}\n`;
    confirmMessage += `可吸收经验：${absorbableExp.toLocaleString()}\n`;
    confirmMessage += `吸收后内丹经验：${(selectedElixir.exilirExperirnce + absorbableExp).toLocaleString()}\n\n`;
    confirmMessage += `警告：此操作将清空宠物经验！`;

    showInfoBox(confirmMessage, () => {
        // 转移经验
        selectedElixir.exilirExperirnce += absorbableExp;
        currentExp = 0;

        // 更新UI
        updateUI(); // 更新宠物经验显示
        updateElixirDisplay();
        updateExpBar(currentExp, maxExp);
        updateSelectedElixirUI(selectedElixir);

        // 显示结果
        showInfoBox(`经验吸收完成！\n内丹当前经验：${selectedElixir.exilirExperirnce.toLocaleString()}`);
    });
}    

// 提品函数
function refineElixir(clickedElixir) {
    const REFINE_EXP_COST = 500000; // 50万经验值
    if (clickedElixir.ascendState) {
        showInfoBox('此内丹已经飞升，无法提品！');
        return false;
    }

    // 检查是否已达到最高品质（橙色）
    if (clickedElixir.rank === 'orange') {
        showInfoBox('此内丹已达到最高品质，只能通过飞升提升至红色品质！');
        return false;
    }

    // 检查经验值是否足够
    if (clickedElixir.exilirExperirnce < REFINE_EXP_COST) {
        showInfoBox(`经验不足，提品需要${REFINE_EXP_COST}点经验！`);
        return false;
    }

    const currentRankIndex = ELIXIR_LIMITS.rankProgression.indexOf(clickedElixir.rank);
    if (ELIXIR_LIMITS.rankProgression[currentRankIndex + 1] === 'red') {
        showInfoBox('内丹品质已达到上限，只能通过飞升提升至红色品质！');
        return false;
    }
    
    // 20%成功率
    const isSuccess = Math.random() < 0.2;
    
    // 无论成功与否都扣除经验
    clickedElixir.exilirExperirnce -= REFINE_EXP_COST;
    
    if (isSuccess) {
        // 保存当前的bonus类型
        const oldAttributeBonuses = clickedElixir.exilirAttributesBonus.map(bonus => ({
            type: bonus.type,
            attribute: bonus.attribute
        }));
        const oldQualityBonuses = clickedElixir.exilirQualityBonus.map(bonus => ({
            quality: bonus.quality
        }));

        // 提升品质
        const nextRank = ELIXIR_LIMITS.rankProgression[currentRankIndex + 1];
        clickedElixir.rank = nextRank;
        
        // 获取新品质下应有的bonus数量
        const newBonusCount = elixirRankBonusLimit[nextRank];
        const currentBonusCount = oldAttributeBonuses.length + oldQualityBonuses.length;
        
        // 如果当前bonus数量不足，生成新的bonus
        if (currentBonusCount < newBonusCount) {
            // 清空并重新生成所有bonus
            clickedElixir.exilirAttributesBonus = [];
            clickedElixir.exilirQualityBonus = [];
            
            // 强制刷新以生成正确数量的bonus
            refreshElixirBonus(clickedElixir, true);
        } else {
            // 仅更新现有bonus的数值
            refreshElixirBonus(clickedElixir, false);
        }
        
        showInfoBox(`消耗500000/${clickedElixir.exilirExperirnce}内丹经验，提品成功！\n内丹品质提升为${elixirRank[nextRank]}！`);
        updateQualityDisplayWithBonuses();
        updateAttributePanel();
        return true;
    } else {
        showInfoBox(`消耗500000/${clickedElixir.exilirExperirnce}内丹经验，提品失败！`);
        return false;
    }
}
    
// 计算内丹bonus值的函数
function calculateElixirBonusValues(elixir) {
    const baseValues = elixirBaseValues[elixir.rank];
    
    // 计算等级加成
    const levelBonusFirst = baseValues.attributesFirst + (2 * elixir.level);
    const levelBonusSecond = baseValues.attributesSecond + (8 * elixir.level);
    const levelBonusQuality = baseValues.quality + (1 * elixir.level);

    // 计算星级加成
    let starBonusFirst = Math.floor(levelBonusFirst * (1 + elixir.star * 0.02));
    let starBonusSecond = Math.floor(levelBonusSecond * (1 + elixir.star * 0.2));
    let finalQuality = levelBonusQuality;  // 资质不受星级影响

    // 计算飞升加成
    if (elixir.ascendState) {
        // 飞升后每级增加5%基础值
        const ascensionBonus = 1 + (elixir.ascensionLevel * 0.01);
        starBonusFirst = Math.floor(starBonusFirst * ascensionBonus);
        starBonusSecond = Math.floor(starBonusSecond * ascensionBonus);
        finalQuality = Math.floor(finalQuality * ascensionBonus);
    }
    
    return {
        attributesFirst: starBonusFirst,
        attributesSecond: starBonusSecond,
        quality: finalQuality
    };
}

// 生成内丹描述文本的函数
function generateElixirDescription(elixir) {
    const rowNames = ['圣阶内丹', '天灵元丹', '圣元灵丹'];
    const displayName = `${rowNames[elixir.row-1]}(${elixir.shape})`;
    
    let description = `${displayName}\n`;
    description += `等级：${elixir.level}级\n`;
    description += `经验：${elixir.exilirExperirnce}\n`;
    description += `品质：${elixirRank[elixir.rank]}\n`;
    description += `星级：${elixir.star}星\n`;
    description += `元气：${elixir.vigor}/20000\n`;
    
    // 添加属性加成信息
    if (elixir.exilirAttributesBonus.length > 0) {
        description += '属性加成：\n';
        elixir.exilirAttributesBonus.forEach(bonus => {
            const translatedAttr = attributeTranslations[bonus.attribute] || bonus.attribute;
            description += `${translatedAttr} +${bonus.value}\n`;
        });
    }

    // 添加资质加成信息（仅对row1和row2的内丹）
    if (elixir.row <= 2 && elixir.exilirQualityBonus.length > 0) {
        description += '资质加成：\n';
        elixir.exilirQualityBonus.forEach(bonus => {
            const translatedQuality = qualityTranslations[bonus.quality] || bonus.quality;
            description += `${translatedQuality} +${bonus.value}\n`;
        });
    }

    return description;
}

// 修改刷新内丹bonus的函数，确保保持原有bonus类型
function refreshElixirBonus(clickedElixir, isForceRefresh = false) {
    const bonusCount = elixirRankBonusLimit[clickedElixir.rank];
    const bonusValues = calculateElixirBonusValues(clickedElixir);
    
    // 如果是强制刷新（使用刷新道具）或首次生成，则重新随机生成所有bonus
    if (isForceRefresh || (clickedElixir.exilirAttributesBonus.length === 0 && clickedElixir.exilirQualityBonus.length === 0)) {
        // 清空现有bonus
        clickedElixir.exilirAttributesBonus = [];
        clickedElixir.exilirQualityBonus = [];
        
        // 重新生成所有bonus
        generateNewBonuses(clickedElixir, bonusCount, bonusValues);
    } else {
        // 仅更新现有bonus的数值
        clickedElixir.exilirAttributesBonus = clickedElixir.exilirAttributesBonus.map(bonus => ({
            ...bonus,
            value: bonus.type === 'first' ? bonusValues.attributesFirst : bonusValues.attributesSecond
        }));
        
        clickedElixir.exilirQualityBonus = clickedElixir.exilirQualityBonus.map(bonus => ({
            ...bonus,
            value: bonusValues.quality
        }));
    }
}

// 抽取出随机生成新bonus的逻辑
function generateNewBonuses(clickedElixir, bonusCount, bonusValues) {
    // 确保生成指定数量的bonus
    let remainingCount = bonusCount;
    clickedElixir.exilirAttributesBonus = [];
    clickedElixir.exilirQualityBonus = [];

    while (remainingCount > 0) {
        // 收集所有可能的bonus类型
        const allPossibleBonuses = [];
        
        // 如果还没有达到上限，添加一级属性选项
        if (clickedElixir.exilirAttributesBonus.filter(b => b.type === 'first').length < 5) {
            Object.keys(possibleAttributeBonuses.firstLevel).forEach(attr => {
                if (!clickedElixir.exilirAttributesBonus.some(b => b.attribute === attr)) {
                    allPossibleBonuses.push({
                        type: 'first',
                        attribute: attr,
                        value: bonusValues.attributesFirst
                    });
                }
            });
        }
        
        // 如果还没有达到上限，添加二级属性选项
        if (clickedElixir.exilirAttributesBonus.filter(b => b.type === 'second').length < 7) {
            Object.keys(possibleAttributeBonuses.secondLevel).forEach(attr => {
                if (!clickedElixir.exilirAttributesBonus.some(b => b.attribute === attr)) {
                    allPossibleBonuses.push({
                        type: 'second',
                        attribute: attr,
                        value: bonusValues.attributesSecond
                    });
                }
            });
        }
        
        // 对于row1和row2的内丹，如果还没有达到上限，添加资质选项
        if (clickedElixir.row <= 2 && clickedElixir.exilirQualityBonus.length < 5) {
            Object.keys(possibleQualityBonuses).forEach(quality => {
                if (!clickedElixir.exilirQualityBonus.some(b => b.quality === quality)) {
                    allPossibleBonuses.push({
                        type: 'quality',
                        quality: quality,
                        value: bonusValues.quality
                    });
                }
            });
        }

        if (allPossibleBonuses.length === 0) break;

        const randomIndex = Math.floor(Math.random() * allPossibleBonuses.length);
        const selectedBonus = allPossibleBonuses[randomIndex];
        
        if (selectedBonus.type === 'quality') {
            clickedElixir.exilirQualityBonus.push({
                quality: selectedBonus.quality,
                value: selectedBonus.value
            });
        } else {
            clickedElixir.exilirAttributesBonus.push({
                attribute: selectedBonus.attribute,
                value: selectedBonus.value,
                type: selectedBonus.type
            });
        }

        remainingCount--;
    }
}

// 内丹升级函数
function levelUpElixir(clickedElixir) {
    // 检查等级上限
    if (clickedElixir.level >= ELIXIR_LIMITS.maxLevel) {
        showInfoBox('此内丹已达到最高等级！');
        return false;
    }

    const requiredExp = clickedElixir.level * 10000;
    
    if (clickedElixir.exilirExperirnce < requiredExp) {
        showInfoBox(`经验不足，升级需要${requiredExp}点经验！`);
        return false;
    }

    const isSuccess = Math.random() < 0.85;
    
    if (isSuccess) {
        clickedElixir.level += 1;
        clickedElixir.exilirExperirnce -= requiredExp;
        
        // 升级成功时只更新数值，不重新随机
        refreshElixirBonus(clickedElixir, false);
        
        showInfoBox(`消耗${requiredExp}/${clickedElixir.exilirExperirnce}点内丹经验，升级成功！\n当前等级：${clickedElixir.level}\n属性值已更新！`);
        
        // 更新界面显示
        updateElixirDisplay();
        updateQualityDisplayWithBonuses();
        updateAttributePanel();
        return true;
    } else {
        showInfoBox(`消耗${requiredExp}/${clickedElixir.exilirExperirnce}点内丹经验，升级失败！`);
        clickedElixir.exilirExperirnce -= requiredExp;
        return false;
    }
}

// 内丹升星函数
function starUpElixir(clickedElixir) {
    // 检查星级上限
    if (clickedElixir.star >= ELIXIR_LIMITS.maxStar) {
        showInfoBox('此内丹已达到最高星级！');
        return false;
    }

    // 计算所需经验
    const requiredExp = 10000 * (clickedElixir.star + 1);
    
    // 检查经验是否足够
    if (clickedElixir.exilirExperirnce < requiredExp) {
        showInfoBox(`经验不足，升星需要${requiredExp.toLocaleString()}点经验！`);
        return false;
    }

    const isSuccess = Math.random() < 0.8;
    
    // 无论成功失败都消耗经验
    clickedElixir.exilirExperirnce -= requiredExp;

    if (isSuccess) {
        clickedElixir.star += 1;
        refreshElixirBonus(clickedElixir, false);
        
        showInfoBox(`消耗${requiredExp}/${clickedElixir.exilirExperirnce}内丹经验，升星成功！\n当前星级：${clickedElixir.star}星\n属性值已更新！`);
        updateElixirDisplay();
        updateQualityDisplayWithBonuses();
        updateAttributePanel();
        return true;
    } else {
        showInfoBox(`消耗${requiredExp}/${clickedElixir.exilirExperirnce}内丹经验，升星失败！`);
        return false;
    }
}
    
// 生成内丹函数
function generateElixir(shape, rank, row = 1) {
    // 生成唯一标识符
    const tag = `elixir-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    // 根据行数和形状选择对应的图标URL
    let url;
    if (row === 1) {
        url = 'https://pic1.imgdb.cn/item/67b330b8d0e0a243d4004a7b.png';
    } else if (row === 2) {
        const urls = {
            '△': 'https://pic1.imgdb.cn/item/67b330b8d0e0a243d4004a7a.png',
            '□': 'https://pic1.imgdb.cn/item/67b330b7d0e0a243d4004a78.png',
            '○': 'https://pic1.imgdb.cn/item/67b330b6d0e0a243d4004a77.png',
            '◇': 'https://pic1.imgdb.cn/item/67b330b6d0e0a243d4004a76.png'
        };
        url = urls[shape];
    } else {
        const urls = {
            '△': 'https://pic1.imgdb.cn/item/67b330b5d0e0a243d4004a71.png',
            '□': 'https://pic1.imgdb.cn/item/67b330b5d0e0a243d4004a70.png',
            '○': 'https://pic1.imgdb.cn/item/67b330b5d0e0a243d4004a74.png',
            '◇': 'https://pic1.imgdb.cn/item/67b330b5d0e0a243d4004a72.png'
        };
        url = urls[shape];
    }
    
    // 更新内丹数据结构
    const elixir = {
        tag: tag,
        applied: false,      // 是否在背包中被应用
        equipped: false,     // 是否被装备到宠物身上
        equippedPet: null,  // 装备此内丹的宠物名称
        ascendState: false,
        shape: shape,
        ascensionLevel: 0,
        level: 1,
        rank: rank,
        star: 0,
        vigor: 20000,
        exilirExperirnce: 0,
        row: row,
        url: url,
        exilirAttributesBonus: [],
        exilirQualityBonus: []
    };
    
    elixirStates.push(elixir);
    
    // 生成显示名称
    const rowNames = ['圣阶内丹', '天灵元丹', '圣元灵丹'];
    const displayName = `${rowNames[row-1]}(${shape})`;
    
    // 生成描述文本
    const description = `${displayName}
        等级：${elixir.level}
        星级：${elixir.star}星
        元气：${elixir.vigor}/20000
        品质：${elixirRank[elixir.rank]}`;
    
    // 将内丹添加到背包系统
    generateItemToJinnang(
        tag,                // 使用相同的tag作为name
        displayName,        // 显示名称
        url,               // 图标URL
        0,                 // 价格
        1,                 // 数量
        description        // 描述
    );
    
    console.log(`生成内丹: ${displayName}，tag: ${tag}`);
    return elixir;
}

//根据row来随机生成内丹至Jinnang
function openPrimitiveElixir1(row = 1) {
    // 定义内丹形状
    const shapes = ['△', '□', '○', '◇'];

    // 随机选择形状
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const rank = 'white'; // 固定为最低品质 "白色"

    // 调用母函数 generateElixir 生成内丹
    const elixir = generateElixir(randomShape, rank, row);

    showInfoBox(`获得一颗内丹，形状=${elixir.shape}, 品质=${elixirRank[elixir.rank]}, 行数=${row}`);
    return elixir;
}

function equipElixir() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        width: 480px;
        max-height: 600px;
        background: linear-gradient(to bottom, #2C1810, #402114);
        border: 2px solid #634A23;
        border-radius: 5px;
        position: relative;
        display: flex;
        flex-direction: column;
    `;

    const title = document.createElement('h2');
    title.innerText = '选择装备内丹';
    title.style.cssText = `
        color: #F9DE9B;
        text-align: center;
        margin: 10px 0;
        padding: 0;
        font-size: 18px;
    `;
    modal.appendChild(title);

    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        color: #F9DE9B;
        cursor: pointer;
        font-size: 16px;
    `;
    closeButton.onclick = () => document.body.removeChild(overlay);
    modal.appendChild(closeButton);

    const elixirContainer = document.createElement('div');
    elixirContainer.style.cssText = `
        flex: 1;
        overflow-y: auto;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    `;

    // 修改筛选条件
    const availableElixirs = jinnangItems.filter(item => {
        return item.quantity > 0 && elixirStates.some(elixir => 
            elixir.tag === item.name && 
            !elixir.applied && 
            !elixir.equipped
        );
    });

    availableElixirs.forEach(item => {
        const elixirData = elixirStates.find(elixir => 
            elixir.tag === item.name && 
            !elixir.applied && 
            !elixir.equipped
        );
        if (!elixirData) return;
    });

    availableElixirs.forEach(item => {
        const elixirData = elixirStates.find(elixir => elixir.tag === item.name);
        if (!elixirData) return;

        const elixirDiv = document.createElement('div');
        elixirDiv.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5px;
            cursor: pointer;
            border: 1px solid transparent;
        `;

        const elixirIcon = document.createElement('img');
        elixirIcon.src = item.url;
        elixirIcon.style.cssText = `
            width: 45px;
            height: 45px;
            border: 1px solid #634A23;
        `;

        const elixirName = document.createElement('span');
        elixirName.innerText = item.displayName;
        elixirName.style.cssText = `
            color: #F9DE9B;
            font-size: 12px;
            text-align: center;
            margin-top: 5px;
        `;

        elixirDiv.appendChild(elixirIcon);
        elixirDiv.appendChild(elixirName);

    elixirDiv.onclick = () => {
        const elixirDescription = generateElixirDescription(elixirData);

        // 检查该行是否已经有相同形状的内丹
        const hasSameShape = elixirStates.some(elixir => 
            elixir.row === elixirData.row && 
            elixir.shape === elixirData.shape && 
            elixir.applied && 
            elixir.equipped && 
            elixir.equippedPet === currentPet.name
        );

        if (hasSameShape) {
            showInfoBox(`该行已装备了形状为${elixirData.shape}的内丹，无法重复装备！`);
            return;
        }

        showInfoBox(
            `${elixirDescription}\n\n是否装备此内丹？`,
            () => {
                const rowId = elixirData.row;
                const rowSquares = document.getElementById(`${['1st', '2nd', '3rd'][rowId-1]}-elixir-squares`);
                let availablePosition = -1;

                for (let i = 0; i < 4; i++) {
                    if (!elixirStates.find(e => 
                        e.position === `${rowId}-${i}` && 
                        e.applied && 
                        e.equipped && 
                        e.equippedPet === currentPet.name
                    )) {
                        availablePosition = i;
                        break;
                    }
                }

                if (availablePosition === -1) {
                    showInfoBox('该行内丹槽已满！');
                    return;
                }

                elixirData.position = `${rowId}-${availablePosition}`;
                elixirData.applied = true;
                elixirData.equipped = true;
                elixirData.equippedPet = currentPet.name;

                const itemIndex = jinnangItems.findIndex(i => i.name === item.name);
                if (itemIndex !== -1) {
                    jinnangItems[itemIndex].quantity -= 1;
                    updateJinnangItems();
                }

                clearSelectedElixir();
                updateAttributePanel();
                updateQualityDisplayWithBonuses();
                document.body.removeChild(overlay);
                }
            );
        };

        elixirContainer.appendChild(elixirDiv);
    });

    modal.appendChild(elixirContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// 添加清除选中状态的函数
function clearSelectedElixir() {
    selectedElixir = null;
    updateSelectedElixirUI(null);
}

// 属性翻译字典
const attributeTranslations = {
    // 一级属性
    endurance: '耐力',
    strength: '强壮',
    agility: '敏捷',
    intelligence: '智力',
    faith: '信仰',
    // 二级属性
    health: '生命值',
    mana: '法力值',
    physicalAttack: '物理攻击',
    physicalDefense: '物理防御',
    magicAttack: '法术攻击',
    magicDefense: '法术防御',
    speed: '速度'
};

// 资质翻译字典
const qualityTranslations = {
    endurance: '耐力资质',
    strength: '强壮资质',
    agility: '敏捷资质',
    intelligence: '智力资质',
    faith: '信仰资质'
};

function formatBonusList(elixir) {
    let bonusText = '';
    
    // 处理属性加成
    if (elixir.exilirAttributesBonus && elixir.exilirAttributesBonus.length > 0) {
        bonusText += '属性加成：\n';
        elixir.exilirAttributesBonus.forEach(bonus => {
            const translatedAttr = attributeTranslations[bonus.attribute] || bonus.attribute;
            bonusText += `${translatedAttr} +${bonus.value}\n`;
        });
    }
    
    // 处理资质加成
    if (elixir.exilirQualityBonus && elixir.exilirQualityBonus.length > 0) {
        bonusText += '\n资质加成：\n';
        elixir.exilirQualityBonus.forEach(bonus => {
            const translatedQuality = qualityTranslations[bonus.quality] || bonus.quality;
            bonusText += `${translatedQuality} +${bonus.value}\n`;
        });
    }
    
    return bonusText || '无加成效果';
}

function increaseElixirExp(accretion) {
    if (!selectedElixir) return;
    
    const newExp = selectedElixir.exilirExperirnce + accretion;
    if (newExp > ELIXIR_LIMITS.maxExperience) {
        selectedElixir.exilirExperirnce = ELIXIR_LIMITS.maxExperience;
        showInfoBox(`内丹经验已经提升至最大值！`);
        return ELIXIR_LIMITS.maxExperience - selectedElixir.exilirExperirnce;
    }
    selectedElixir.exilirExperirnce = newExp;
    showInfoBox(`内丹经验增加了${accretion}点！当前经验为${selectedElixir.exilirExperirnce}`);
    return accretion;
}
    
// 修改UI更新函数
function updateSelectedElixirUI(clickedElixir) {
    const rankColors = {
        'white': '#FFFFFF',
        'green': '#00FF00',
        'blue': '#0000FF',
        'purple': '#800080',
        'orange': '#FFA500',
        'red': '#FF0000'
    };

    // 清除现有选中状态
    const allElixirSquares = document.querySelectorAll('.elixir-square');
    allElixirSquares.forEach(square => {
        square.style.boxShadow = 'none';
        square.style.border = '1px solid #634A23';
        const oldInfoBox = square.querySelector('.elixir-info');
        if (oldInfoBox) {
            oldInfoBox.remove();
        }
    });

    if (!clickedElixir) return;

    const rowIndex = parseInt(clickedElixir.position.split('-')[0]) - 1;
    const squareIndex = parseInt(clickedElixir.position.split('-')[1]);
    const rowPrefix = ['1st', '2nd', '3rd'][rowIndex];
    const container = document.getElementById(`${rowPrefix}-elixir-squares`);
    
    if (!container) return;

    const selectedSquare = container.children[squareIndex];
    if (selectedSquare) {
        selectedSquare.style.boxShadow = 'rgb(255, 215, 0) 0px 0px 0px 2px';
        const infoBox = document.createElement('div');
        infoBox.className = 'elixir-info';
        infoBox.style.cssText = `
            position: absolute;
            top: -160px;
            left: 50%;
            transform: translateY(-50%);
            background: linear-gradient(rgb(44 24 16 / 80%), rgb(64 33 20 / 80%));
            border: 1px solid #634A23;
            border-radius: 4px;
            color: #F9DE9B;
            font-size: 12px;
            padding: 8px;
            pointer-events: none;
            z-index: 1000;
            white-space: pre-line;
            min-width: 150px;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
        `;

        // 获取内丹的显示名称
        const displayName = jinnangItems.find(item => item.name === clickedElixir.tag)?.displayName || '';
        
        // 生成星级显示
        const stars = '★'.repeat(clickedElixir.star);
        
        const bonusInfo = formatBonusList(clickedElixir);
        infoBox.innerHTML = `
<span style="color: ${rankColors[clickedElixir.rank]}; font-size:14px; font-weight:bold;">${displayName}</span>
<div style="color: gold; letter-spacing: 2px;">${stars}</div>
等级：${clickedElixir.level}级
经验：${clickedElixir.exilirExperirnce.toLocaleString()}
元气：${clickedElixir.vigor}/${clickedElixir.ascendState ? '50000' : '20000'}
是否飞升：${clickedElixir.ascendState ? '是' : '否'}
飞升等级：${clickedElixir.ascensionLevel}
—————————————
${bonusInfo}`;

        selectedSquare.appendChild(infoBox);
    }
}


// 修改 updateElixirDisplay 函数，添加空槽形状显示
function updateElixirDisplay() {
    ['1st', '2nd', '3rd'].forEach((prefix, rowIndex) => {
        const container = document.getElementById(`${prefix}-elixir-squares`);
        if (!container) return;
        
        container.innerHTML = '';
        container.style.position = 'relative';

        const shapes = ['△', '□', '○', '◇'];
        const usedShapes = new Set();

        // 先收集已使用的形状
        elixirStates.forEach(elixir => {
            if (elixir.row === (rowIndex + 1) && 
                elixir.applied && 
                elixir.equipped && 
                elixir.equippedPet === currentPet.name) {
                usedShapes.add(elixir.shape);
            }
        });

        for (let i = 0; i < 4; i++) {
            const square = document.createElement('div');
            square.className = 'elixir-square';
            square.style.cssText = `
                width: 45px;
                height: 45px;
                background-image: url(https://pic.imgdb.cn/item/66caa91ad9c307b7e97841c0.png);
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                border: 1px solid #634A23;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 2px;
                position: relative;
                cursor: pointer;
            `;

            const position = `${rowIndex + 1}-${i}`;
            const elixir = elixirStates.find(e => 
                e.position === position && 
                e.applied && 
                e.equipped && 
                e.equippedPet === currentPet.name
            );

            if (elixir) {
                const img = document.createElement('img');
                img.src = elixir.url;
                img.style.cssText = `
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                `;

                img.onclick = () => {
                    if (selectedElixir && selectedElixir.tag === elixir.tag) {
                        selectedElixir = null;
                        updateSelectedElixirUI(null);
                    } else {
                        selectedElixir = elixir;
                        updateSelectedElixirUI(elixir);
                    }
                };

                square.appendChild(img);
            } else {
                // 添加未使用形状的显示
                const availableShapes = shapes.filter(s => !usedShapes.has(s));
                if (availableShapes.length > 0) {
                    const shapeSpan = document.createElement('span');
                    shapeSpan.innerText = availableShapes[i % availableShapes.length];
                    shapeSpan.style.cssText = `
                        color: #F9DE9B;
                        opacity: 0.5;
                        font-size: 24px;
                        user-select: none;
                    `;
                    square.appendChild(shapeSpan);
                }
            }

            if (selectedElixir && selectedElixir.position === position) {
                updateSelectedElixirUI(selectedElixir);
            }

            container.appendChild(square);
        }
    });
}

// 创建内丹或物品的显示div
function createElixirDiv(item, elixirData) {
    const itemDiv = document.createElement('div');
    itemDiv.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        padding: 5px;
        border: 1px solid transparent;
        transition: all 0.3s;
    `;

    itemDiv.onmouseover = () => {
        itemDiv.style.border = '1px solid #F9DE9B';
        itemDiv.style.background = 'rgba(249, 222, 155, 0.1)';
    };
    itemDiv.onmouseout = () => {
        itemDiv.style.border = '1px solid transparent';
        itemDiv.style.background = 'none';
    };

    const itemIcon = document.createElement('img');
    itemIcon.src = item.url;
    itemIcon.style.cssText = `
        width: 45px;
        height: 45px;
        border: 1px solid #634A23;
    `;

    const itemName = document.createElement('span');
    
    if (elixirData) {
        // 内丹融合模式显示
        const rankColors = {
            'white': '#FFFFFF',
            'green': '#00FF00',
            'blue': '#0000FF',
            'purple': '#800080',
            'orange': '#FFA500',
            'red': '#FF0000'
        };
        itemName.style.cssText = `
            color: ${rankColors[elixirData.rank]};
            font-size: 12px;
            margin-top: 5px;
            text-align: center;
            ${elixirData.ascendState ? 'font-weight: bold;' : ''}
        `;
        itemName.innerText = `${item.displayName}\n等级${elixirData.level}级\n经验值：${elixirData.exilirExperirnce.toLocaleString()}`;
    } else {
        // 普通吞噬模式显示
        itemName.style.cssText = `
            color: #F9DE9B;
            font-size: 12px;
            margin-top: 5px;
            text-align: center;
        `;
        itemName.innerText = `${item.displayName} (${item.quantity})`;
    }

    itemDiv.appendChild(itemIcon);
    itemDiv.appendChild(itemName);
    
    return { itemDiv, itemName };
}

// 吞噬/融合函数
function engulf(mingleMode = false) {
    if (!selectedElixir) {
        showInfoBox('请先选择一个内丹！');
        return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'engulf-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        width: 400px;
        background: linear-gradient(to bottom, #2C1810, #402114);
        border: 2px solid #634A23;
        border-radius: 5px;
        padding: 15px;
        position: relative;
        max-height: 600px;
        overflow-y: scroll;
    `;

    const title = document.createElement('h2');
    title.innerText = mingleMode ? '选择融合内丹' : '选择吞噬物品';
    title.style.cssText = `
        color: #F9DE9B;
        text-align: center;
        margin: 0 0 15px 0;
        font-size: 18px;
    `;
    modal.appendChild(title);

    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        color: #F9DE9B;
        cursor: pointer;
        font-size: 16px;
    `;
    closeButton.onclick = () => {
        document.body.removeChild(overlay);
        clearSelectedElixir();
    };
    modal.appendChild(closeButton);

    const itemsContainer = document.createElement('div');
    itemsContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        padding: 10px;
    `;

    if (mingleMode) {
        // 融合模式：筛选可融合的内丹
        const availableElixirs = jinnangItems.filter(item => {
            const elixir = elixirStates.find(e => e.tag === item.name);
            return elixir && !elixir.equipped && item.quantity > 0;
        });

        if (availableElixirs.length === 0) {
            const noItemsText = document.createElement('div');
            noItemsText.style.cssText = `
                color: #F9DE9B;
                text-align: center;
                padding: 20px;
                grid-column: 1 / -1;
            `;
            noItemsText.innerText = '没有可用于融合的内丹';
            itemsContainer.appendChild(noItemsText);
        } else {
            availableElixirs.forEach(item => {
                const elixirData = elixirStates.find(e => e.tag === item.name);
                if (!elixirData) return;

                const { itemDiv, itemName } = createElixirDiv(item, elixirData);
                
                itemDiv.onclick = () => {
                const minExp = Math.max(200000, elixirData.exilirExperirnce);
                showInfoBox(
                    `是否融合此内丹？\n` +
                    `品质：${elixirRank[elixirData.rank]}\n` +
                    `等级：${elixirData.level}级\n` +
                    `星级：${elixirData.star}星\n` +
                    `${elixirData.ascendState ? '已飞升\n飞升等级：' + elixirData.ascensionLevel + '\n' : ''}` +
                    `当前经验：${elixirData.exilirExperirnce.toLocaleString()}\n` +
                    `将获得${minExp.toLocaleString()}点经验！`,
                    () => {
                    const itemIndex = jinnangItems.findIndex(i => i.name === item.name);
                    if (itemIndex !== -1) {
                        jinnangItems[itemIndex].quantity -= 1;
                        updateJinnangItems();
                    }

                    const elixirIndex = elixirStates.findIndex(e => e.tag === item.name);
                    if (elixirIndex !== -1) {
                        elixirStates.splice(elixirIndex, 1);
                    }

                    increaseElixirExp( minExp);
                    showInfoBox(`融合成功！获得${minExp}点经验！`);

                    if (item.quantity === 0) {
                        document.body.removeChild(overlay);
                        engulf(true);
                    } else {
                        itemName.innerText = `${item.displayName} (${item.quantity})`;
                    }
                    updateAttributePanel();
                    updateQualityDisplayWithBonuses();
                        }
                    );
                };
                itemsContainer.appendChild(itemDiv);
            });
        }
    } else {
        // 普通吞噬模式
        const validNames = [
            "advancedExperienceBook",
            "elixirRefreshGem",
            "elixirStarUpGem",
            "elixirLevelUpGem",
            "elixirRefiningGem",
            "holyBone",
            "holyKnowledge",
            "elixirKnowHow"
        ];

        const engulfableItems = jinnangItems.filter(item => 
            validNames.includes(item.name) && item.quantity > 0
        );

        if (engulfableItems.length === 0) {
            const noItemsText = document.createElement('div');
            noItemsText.style.cssText = `
                color: #F9DE9B;
                text-align: center;
                padding: 20px;
                grid-column: 1 / -1;
            `;
            noItemsText.innerText = '没有可用的吞噬物品';
            itemsContainer.appendChild(noItemsText);
        } else {
            engulfableItems.forEach(item => {
                const { itemDiv, itemName } = createElixirDiv(item, null);

                itemDiv.onclick = () => {
                    switch (item.name) {
                        case "advancedExperienceBook":
                            if (useItem(item.name, 1)) {
                                const newExp = selectedElixir.exilirExperirnce + 30000;
                                if (newExp > ELIXIR_LIMITS.maxExperience) {
                                    showInfoBox('内丹经验已达到上限！');
                                    return;
                                }
                                selectedElixir.exilirExperirnce = newExp;
                                showInfoBox(`获得经验：30000\n当前经验：${selectedElixir.exilirExperirnce}`);
                            }
                            break;
                            
                        case "elixirRefreshGem":
                            if (selectedElixir.exilirExperirnce < 100000) {
                                showInfoBox('内丹经验值不足100000，无法改造！');
                                return;
                            }
                            
                            if (useItem(item.name, 1)) {
                                refreshElixirBonus(selectedElixir, true);
                                const bonusInfo = formatBonusList(selectedElixir);
                                selectedElixir.exilirExperirnce -= 100000;
                                showInfoBox(`消耗100000/${selectedElixir.exilirExperirnce}经验，内丹属性已刷新：
                                ${bonusInfo}`);
                            }
                            break;
                            
                        case "elixirStarUpGem":
                            const requiredExp = 10000 * (selectedElixir.star + 1);
                            
                            // 检查经验是否足够
                            if (selectedElixir.exilirExperirnce < requiredExp) {
                                showInfoBox(`经验不足，升星需要${requiredExp.toLocaleString()}点经验！`);
                                return;
                            }
                            
                            if (useItem(item.name, 1)) {
                                starUpElixir(selectedElixir);
                            }
                            break;
                            
                        case "elixirLevelUpGem":
                            if (useItem(item.name, 1)) {
                                levelUpElixir(selectedElixir);
                            }
                            break;

                        case "elixirRefiningGem":
                            if (useItem(item.name, 1)) {
                                refineElixir(selectedElixir);
                            }
                            break;
                        case "elixirKnowHow":
                            if (useItem(item.name, 1)) {
                                increaseElixirExp(1000000);
                            }
                            break;
                        case "holyBone":
                            if (selectedElixir.rank !== 'orange') {
                                showInfoBox('只有橙色品质的内丹才能进行飞升！');
                                return;
                            }
                            if (selectedElixir.exilirExperirnce < ASCENSION_CONFIG.requiredExp) {
                                showInfoBox(`经验不足，飞升需要${ASCENSION_CONFIG.requiredExp}点经验！`);
                                return;
                            }
                            if (useItem(item.name, 1)) {
                                ascendElixir(selectedElixir);
                            }
                            break;

                        case "holyKnowledge":
                            if (!selectedElixir.ascendState) {
                                showInfoBox('此内丹尚未飞升，无法提升飞升等级！');
                                return;
                            }
                            if (selectedElixir.ascensionLevel >= ASCENSION_CONFIG.maxLevel) {
                                showInfoBox('飞升等级已达到最高级！');
                                return;
                            }
                            if (useItem(item.name, 1)) {
                                levelUpAscension(selectedElixir);
                            }
                            break;
                    }

                    itemName.innerText = `${item.displayName} (${item.quantity})`;
                    updateAttributePanel();
                    updateQualityDisplayWithBonuses();
                    
                    if (item.quantity === 0) {
                        document.body.removeChild(overlay);
                        engulf(false);
                    }
                };

                itemsContainer.appendChild(itemDiv);
            });
        }
    }

    modal.appendChild(itemsContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

function increaseEachElixirExp(amount) {
    // 获取所有符合条件的元素
    const expToAdd = elixirStates.filter(e => e.equipped && e.equippedPet === currentPet.name);

    // 遍历每个符合条件的元素并增加经验值
    expToAdd.forEach(elixir => {
        elixir.exilirExperirnce += amount; // 确保属性名拼写正确
    });

    // 更新显示
    updateElixirDisplay();
}
    
// 修改属性计算函数以包含内丹bonus
function getElixirBonuses() {
    const attributeBonuses = {
        first: {
            endurance: 0,
            intelligence: 0,
            strength: 0,
            agility: 0,
            faith: 0
        },
        second: {
            health: 0,
            mana: 0,
            physicalAttack: 0,
            physicalDefense: 0,
            magicAttack: 0,
            magicDefense: 0,
            speed: 0
        }
    };

    const qualityBonuses = {
        endurance: 0,
        intelligence: 0,
        strength: 0,
        agility: 0,
        faith: 0
    };

    // 遍历所有已装备且有元气的内丹
    elixirStates.forEach(elixir => {
        if (elixir.applied && 
            elixir.equipped && 
            elixir.equippedPet === currentPet.name && 
            elixir.vigor > 0) {
            
            // 处理属性加成
            elixir.exilirAttributesBonus.forEach(bonus => {
                if (bonus.type === 'first') {
                    attributeBonuses.first[bonus.attribute] += bonus.value;
                } else {
                    attributeBonuses.second[bonus.attribute] += bonus.value;
                }
            });

            // 处理资质加成
            elixir.exilirQualityBonus.forEach(bonus => {
                qualityBonuses[bonus.quality] += bonus.value;
            });
        }
    });

    return { attributeBonuses, qualityBonuses };
}
    
// 消化内丹
function internalize() {
    if (!selectedElixir) {
        showInfoBox('请先选择一个内丹！');
        return;
    }

    showInfoBox(
        `是否确认消化此内丹？\n消化后将获得${selectedElixir.exilirExperirnce}点经验值，但内丹将被永久删除！`,
        () => {
            const currentElixir = selectedElixir;
            gainExp(currentElixir.exilirExperirnce);

            const index = elixirStates.findIndex(e => e.tag === currentElixir.tag);
            if (index !== -1) {
                elixirStates.splice(index, 1);
            }

            clearSelectedElixir();
            updateAttributePanel();
            updateQualityDisplayWithBonuses();
            updateUI();
            
            showInfoBox('内丹消化完成！');
        }
    );
}

// 修改吐出内丹函数
function disgorge() {
    if (!selectedElixir) {
        showInfoBox('请先选择一个内丹！');
        return;
    }
    
    const currentElixir = selectedElixir;
    currentElixir.exilirExperirnce *= 0.9;
    // 只有未飞升的内丹吐出时会损失元气
    if (!currentElixir.ascendState) {
        currentElixir.vigor = 0;
    }
    currentElixir.applied = false;
    currentElixir.equipped = false;
    currentElixir.equippedPet = null;
    currentElixir.position = undefined;
    
    generateItemToJinnang(
        currentElixir.tag,
        currentElixir.displayName,
        currentElixir.url,
        0,
        1,
        generateElixirDescription(currentElixir)
    );
    
    clearSelectedElixir();
    updateQualityDisplayWithBonuses();
    updateAttributePanel();
}

// 修改元气补充函数
function invigorate() {
    if (!selectedElixir) {
        // 恢复所有内丹元气的逻辑
        const vigorToAdd = elixirStates.filter(e => e.equipped && e.equippedPet === currentPet.name);

        if (vigorToAdd.length === 0) {
            showInfoBox('没有可恢复的内丹！');
            return;
        }

        let totalMissingVigor = 0;
        vigorToAdd.forEach(elixir => {
            const maxVigor = elixir.ascendState ? 50000 : 20000;
            totalMissingVigor += maxVigor - elixir.vigor;
        });

        const totalPrice = totalMissingVigor * 1000;

        if (goldAmount < totalPrice) {
            showInfoBox('金子不足，无法恢复所有内丹元气！');
            return;
        }

        showInfoBox(
            `你没有选中内丹，是否花费${convertPrice(totalPrice)}金子恢复所有内丹的元气？`,
            () => {
                vigorToAdd.forEach(elixir => {
                    const maxVigor = elixir.ascendState ? 50000 : 20000;
                    elixir.vigor = maxVigor; // 恢复内丹元气
                });
                showInfoBox('所有内丹的元气已满！',null,null,'green');
                goldAmount -= totalPrice; // 扣除金子
                updateGoldDisplay(goldAmount); // 更新显示
                updateElixirDisplay(); // 更新内丹显示
            },
            () => {
                showInfoBox('取消恢复所有元气！');
            },
            'red'
        );

        return;
    }

    // 恢复选中内丹元气的逻辑
    const maxVigor = selectedElixir.ascendState ? 50000 : 20000;
    const missingVigor = maxVigor - selectedElixir.vigor;

    if (missingVigor <= 0) {
        showInfoBox('该内丹元气已满！');
        return;
    }

    const price = missingVigor * 1000;

    if (goldAmount < price) {
        showInfoBox('金子不足，无法补充元气！');
        return;
    }

    showInfoBox(
        `需要消耗${convertPrice(price)}金子补充元气，是否继续？`,
        () => {
            goldAmount -= price; // 扣除金子
            updateGoldDisplay(goldAmount); // 更新金子显示
            selectedElixir.vigor = maxVigor; // 恢复元气
            clearSelectedElixir(); // 清空选中的内丹
            updateQualityDisplayWithBonuses(); // 更新质量显示
            updateAttributePanel(); // 更新属性面板
        }
    );
}

// 内丹修为转化函数
function elixirCultivationBonus() {
    let totalExcessExp = 0;
    let foundQualifiedElixir = false;
    
    // 遍历当前宠物已装备的内丹
    elixirStates.forEach(elixir => {
        if (elixir.equipped && 
            elixir.equippedPet === currentPet.name &&
            elixir.level === 100 && 
            elixir.ascendState && 
            elixir.ascensionLevel === 100) {
            
            foundQualifiedElixir = true;
            // 计算超出部分的经验
            if (elixir.exilirExperirnce > 0) {
                totalExcessExp += elixir.exilirExperirnce;
                elixir.exilirExperirnce = 0;
            }
        }
    });

    if (totalExcessExp > 0) {
        const cultivationBonus = Math.floor(totalExcessExp / 100000);
        if (cultivationBonus > 0) {
            additionalPlayerCultivation += cultivationBonus;
            showInfoBox(`成功将${totalExcessExp}点内丹经验转化为${cultivationBonus}点修为！`);
            updateCultivationDisplay();
            return true;
        }
    }

    if (!foundQualifiedElixir) {
        showInfoBox('没有找到可以转化经验的满级内丹！');
    } else {
        showInfoBox('所有符合条件的内丹经验已被转化为修为！');
    }
    return false;
}
    
function enhanceQuality() {
    if (!currentPet || !currentPet.qualities) {
        console.warn("当前宠物未被正确初始化。");
        return;
    }

    if (qualityPill < 1) {
        showInfoBox("您的资质重生丹已耗尽！");
        return;
    }

    qualityPill--;
    document.getElementById("quality-pill").innerText = qualityPill;

    const qualities = currentPet.qualities;
    const dimensions = ['endurance', 'strength', 'faith', 'agility', 'intelligence'];
    let newQualities = {};

    // 确定资质上限的函数
    const determineQualityLimit = (max) => {
        const rand = Math.random();
        if (rand < 0.9) {  // 90% 概率
            return max * 0.8;  // 不超过80%
        } else if (rand < 0.99) {  // 9% 概率
            return max * 0.85;  // 不超过85%
        } else if (rand < 0.999) {  // 0.9% 概率
            return max * 0.9;  // 不超过90%
        } else {  // 0.01% 概率
            return max * 0.99;  // 不超过99%
        }
    };

    // 处理变异和非变异的资质更新
    if (currentPet.qualities.mutated) {
        // 变异状态的处理
        dimensions.forEach(dim => {
            if (Math.random() < 0.98) {
                newQualities[dim] = getRandomInt(qualities[dim].min, qualities[dim].max * 0.92);
            } else {
                newQualities[dim] = getRandomInt(qualities[dim].min, qualities[dim].max - 100);
            }
            // 变异状态额外提升10%
            qualities[dim].current = Math.floor(newQualities[dim] * 1.1);
        });
    } else {
        // 非变异状态的资质更新
        dimensions.forEach(dim => {
            const qualityLimit = determineQualityLimit(qualities[dim].max);
            newQualities[dim] = getRandomInt(qualities[dim].min, Math.floor(qualityLimit));
            qualities[dim].current = newQualities[dim];
        });
    }

    // 更新显示
    updateQualityDisplayWithBonuses();
    updateSkillScore();
    updateTitle();
}

let miraculousPill = 1; // 初始化灵异金丹数量

function mutatePet() {
    if (!checkDrawerOpen()) return;

    if (miraculousPill < 1) {
        showInfoBox("必要道具：灵异金丹 数量不足！");
        return;
    }
    if (awakened) {
        showInfoBox("您的宠物已经觉醒，无法使用灵异金丹！");
        return;
    }
    
    miraculousPill--;
    document.getElementById("miraculous-pill").innerText = miraculousPill;

    if (currentPet.qualities.mutated) {
        showInfoBox("您的宠物已经变异，无法再次使用灵异金丹！");
        return;
    }

    currentPet.qualities.tier = Math.random() < 0.5 ? '卓越' : '完美';
    currentPet.qualities.growthRate = currentPet.qualities.tier === '卓越' ? getWeightedRandom([300, 320], [0.5, 0.5]) : getWeightedRandom([340, 360, 380, 400], [0.3, 0.5, 0.15, 0.05]);
    currentPet.qualities.mutated = true;

    const qualities = currentPet.qualities;
    qualities.endurance.current = Math.round(qualities.endurance.current * 1.1);
    qualities.strength.current = Math.round(qualities.strength.current * 1.1);
    qualities.faith.current = Math.round(qualities.faith.current * 1.1);
    qualities.agility.current = Math.round(qualities.agility.current * 1.1);
    qualities.intelligence.current = Math.round(qualities.intelligence.current * 1.1);

    // 设置背景为变异背景
    updateMutatedImg();
    updateQualityDisplayWithBonuses();
    updateSkillScore();
    updateTitle();
}
        
function useMutationScroll() {
        
    if (awakened) {
        showInfoBox("您的宠物已经觉醒，使用灵异秘卷没有带来任何效果！");
        return;
    }

    if (currentPet.qualities.mutated) {
        showInfoBox("您的宠物已经变异，使用灵异秘卷没有带来任何效果！");
        return;
    }
        
    // 设置宠物品质
    currentPet.qualities.tier = '完美';
    currentPet.qualities.growthRate = 400;
    currentPet.qualities.mutated = true;

    // 更新宠物属性
    const qualities = currentPet.qualities;
    qualities.endurance.current = Math.round(qualities.endurance.current * 1.1);
    qualities.strength.current = Math.round(qualities.strength.current * 1.1);
    qualities.faith.current = Math.round(qualities.faith.current * 1.1);
    qualities.agility.current = Math.round(qualities.agility.current * 1.1);
    qualities.intelligence.current = Math.round(qualities.intelligence.current * 1.1);

    // 设置背景为变异背景
    updateMutatedImg();

    // 更新UI
    updateQualityDisplayWithBonuses();
    updateSkillScore();
    updateTitle();
    showInfoBox("在上古卷轴的教诲下，你的宠物实现了本质的蜕变");
}
        
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} //随机数

function getWeightedRandom(values, weights) {
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let rand = Math.random() * totalWeight;
    for (let i = 0; i < values.length; i++) {
        if (rand < weights[i]) {
            return values[i];
        }
        rand -= weights[i];
    }
    return values[0];
} //加权随机数

setInterval(updateDescriptionBox, 30000);
updateDescriptionBox(); // 初始化描述框


document.addEventListener('DOMContentLoaded', () => {
    initShop();
    updateTopBarItems();
    updateJinnangItems();
    updateAttributePanel();
    updateQualityDisplayWithBonuses();
    updatePetLevel();
});

//任务函数
let tasks = {
    skillScore: [
        { id: 1, description: '宠物评分达到200万', completed: false, target: 2000000, reward: 400 },
        { id: 2, description: '宠物评分达到400万', completed: false, target: 4000000, reward: 1000 },
        { id: 3, description: '宠物评分达到500万', completed: false, target: 5000000, reward: 1500 },
        { id: 4, description: '宠物评分达到600万', completed: false, target: 6000000, reward: 2000 },
        { id: 5, description: '宠物评分达到1000万', completed: false, target: 10000000, reward: 3600 }
    ],
    petLevel: [
        { id: 6, description: '宠物等级达到60', completed: false, target: 60, reward: 50 },
        { id: 7, description: '宠物等级达到100', completed: false, target: 100, reward: 100 },
        { id: 8, description: '宠物等级达到149', completed: false, target: 149, reward: 200 },
        { id: 9, description: '宠物等级达到160', completed: false, target: 160, reward: 400 },
        { id: 10, description: '宠物等级达到180', completed: false, target: 180, reward: 1000 }
    ],
    goldAmount: [
        { id: 11, description: '金子数量达到100两', completed: false, target: 100000, reward: 1 },
        { id: 12, description: '金子数量达到300两', completed: false, target: 300000, reward: 3 },
        { id: 13, description: '金子数量达到700两', completed: false, target: 700000, reward: 5 },
        { id: 14, description: '金子数量达到1锭', completed: false, target: 1000000, reward: 7 },
        { id: 15, description: '金子数量达到2锭', completed: false, target: 2000000, reward: 9 }
    ],
    battleRounds: [
        { id: 16, description: '妖怪挑战轮次达到101', completed: false, target: 101, reward: 100 },
        { id: 17, description: '妖怪挑战轮次达到121', completed: false, target: 121, reward: 100 },
        { id: 18, description: '妖怪挑战轮次达到131', completed: false, target: 131, reward: 100 },
        { id: 19, description: '妖怪挑战轮次达到141，此任务完成后可选择回退至1轮或200天地灵气', completed: false, target: 141, reward: 1 },
        { id: 20, description: '妖怪挑战轮次达到151，此任务完成后可选择回退至1轮或200天地灵气', completed: false, target: 151, reward: 1 }
    ]
};

function showMissionPanel() {
    const missionPanel = document.getElementById('missionPanel');
    missionPanel.style.display = 'block';
    updateTaskList();
}

function completeTask(taskId) {
    let taskSeries, task;

    Object.keys(tasks).forEach(series => {
        const foundTask = tasks[series].find(t => t.id === taskId);
        if (foundTask) {
            task = foundTask;
            taskSeries = series;
        }
    });

    if (!task || task.completed) {
        console.error(`任务未找到或已完成: ${taskId}`);
        return;
    }

    if (taskSeries === 'skillScore' && skillScore >= task.target) {
        task.completed = true;
        stamps += task.reward;
        showInfoBox(`任务完成，获得${task.reward}印花！`);
    } else if (taskSeries === 'petLevel' && petLevel >= task.target) {
        task.completed = true;
        stamps += task.reward;
        showInfoBox(`任务完成，获得${task.reward}印花！`);
    } else if (taskSeries === 'goldAmount' && goldAmount >= task.target) {
        if (task.id === 15 ) {
            task.completed = true;
            const dazheka = jinnangItems.find(item => item.name === 'eightyDiscountCard');
            if (!dazheka || dazheka.quantity < 1) {
                addItemToJinnang('eightyDiscountCard',1);
                showInfoBox(`腰缠万贯更要精打细算，已送上一张8折卡，买东西时可自动抵用，保管好哦~`);
            } else {
                addItemToJinnang('redEnvelope',5);
                showInfoBox(`祝你名利双收，5个福袋祝你好运~`);
            }
        } else {
            task.completed = true;
            addItemToJinnang('summonCharmPaper', task.reward);
            showInfoBox(`任务完成，获得${task.reward}张召唤灵符！`);
        }
    } else if (taskSeries === 'battleRounds' && battleRounds >= task.target) {
        if (task.id >= 16 && task.id <= 18) {
            task.completed = true;
            addItemToJinnang('earthlyEnergy', 100);
            showInfoBox('任务完成，获得100个天地灵气！');
        } else if (task.id === 19 || task.id === 20) {
            showInfoBox('恭喜你完成挑战，你有一次时光倒流回第1轮的机会，是否接受？点击确认将进入第一轮，取消则获得200个天地灵气', () => {
                battleRounds = 1;
                initializeEnemyPet();
                updateEnemyAttributes();
                updateUI();
                showInfoBox('一阵悦耳的音乐在你耳畔响起来，结束时，你睁开了双眼，一切景象从模糊变得清楚。你惊奇的发现，曾经依稀的时光竟重新映入你的眼前。');
                task.completed = true;
                updateTaskList();
                updateStampCount();
            }, () => {
                addItemToJinnang('earthlyEnergy', 200);
                showInfoBox('任务完成，获得200个天地灵气！');
                task.completed = true;
                updateTaskList();
                updateStampCount();
            });
            return; // 提前返回，等待回调处理任务完成逻辑
        } else {
            console.error('未知任务');
            return;
        }
    } else {
        console.error('任务完成条件未满足');
        return;
    }

    updateTaskList();
    updateStampCount();
}

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    // 设置 taskList 样式
    taskList.style.gap = '20px';
    taskList.style.display = 'flex';
    taskList.style.flexDirection = 'column';

    Object.keys(tasks).forEach(series => {
        const seriesTasks = tasks[series];
        const currentTask = seriesTasks.find(task => !task.completed);

        if (currentTask) {
            const taskItem = document.createElement('li');
            taskItem.innerText = currentTask.description;

            // 设置 taskItem 样式
            taskItem.style.display = 'flex';
            taskItem.style.width = '100%';
            taskItem.style.height = '45px';
            taskItem.style.flexDirection = 'row';
            taskItem.style.justifyContent = 'flex-start';
            taskItem.style.alignItems = 'center';

            const createButtonContainer = () => {
                const buttonContainer = document.createElement('div');
                buttonContainer.classList.add('treasure-action');
                return buttonContainer;
            };

            const createSubmitButton = () => {
                const submitButton = document.createElement('button');
                submitButton.innerText = '提交';

                // 设置 submitButton 样式
                submitButton.style.margin = '0';
                submitButton.style.display = 'flex';
                submitButton.style.justifyContent = 'space-between';
                submitButton.style.flexDirection = 'row';
                submitButton.style.marginLeft = '20px';

                submitButton.addEventListener('click', () => completeTask(currentTask.id));
                return submitButton;
            };

            const appendButtonToTaskItem = () => {
                const buttonContainer = createButtonContainer();
                const submitButton = createSubmitButton();
                buttonContainer.appendChild(submitButton); // 将 submitButton 添加到 buttonContainer
                taskItem.appendChild(buttonContainer); // 将 buttonContainer 添加到 taskItem
            };

            if (series === 'skillScore' && skillScore >= currentTask.target) {
                appendButtonToTaskItem();
            } else if (series === 'petLevel' && petLevel >= currentTask.target) {
                appendButtonToTaskItem();
            } else if (series === 'goldAmount' && goldAmount >= currentTask.target) {
                appendButtonToTaskItem();
            } else if (series === 'battleRounds' && battleRounds >= currentTask.target) {
                appendButtonToTaskItem();
            } else {
                if (series === 'skillScore') {
                    taskItem.innerText += ` - 进度: ${skillScore}/${currentTask.target}`;
                } else if (series === 'petLevel') {
                    taskItem.innerText += ` - 进度: ${petLevel}/${currentTask.target}`;
                } else if (series === 'goldAmount') {
                    taskItem.innerText += ` - 进度: ${goldAmount}/${currentTask.target}`;
                } else if (series === 'battleRounds') {
                    taskItem.innerText += ` - 进度: ${battleRounds}/${currentTask.target}`;
                }
            }
            taskList.appendChild(taskItem);
        }
    });
}

// 初始化任务面板
document.getElementById('missionButton').addEventListener('click', showMissionPanel);

document.addEventListener('DOMContentLoaded', () => {
    updateTaskList();
    updateStampCount();
});
        
// 初始化检查觉醒状态
window.onload = function() {
    // 加载游戏状态
    simulateLoading();
    if (alreadyUnlocked) {
        document.getElementById('unlockOverlay').style.display = 'none';
        return;
    } else {
        document.getElementById('unlockButton').addEventListener('click', validateUnlockCode);
    }
    
    if (localStorage.gameState || localStorage.petData) {
        loadGameState(true);
        setTimeout(() => {
            initializeEnemyPet();
            handleRampaged();
            updateEnemyAttributes();
        },0);

    } else {     
    // 初始化敌方宠物
    initializeEnemyPet();
    }

    updateQualityDisplayWithBonuses();
    updateGoldDisplay(goldAmount);
    updateAttributePanel();
    updateMutatedImg();
    updateExpBar(currentExp, maxExp);
    initializeAdvancementStates();//初始化领悟系统
    updatePetInfo(); 
    openElixirPanel(); //默认关闭内丹面板
    integrateBattleQuestSystem();
    integrateBattlePassSystem();
    integrateBattleRankingSystem();
    
    // 默认隐藏战斗抽屉
    const fightingDrawer = document.getElementById("fightingDrawer");
    if (fightingDrawer) {
        fightingDrawer.style.display = "none";
    }
    
    // 检查宠物觉醒状态
    checkAwakening();
    showGuide();
    
    // 更新宠物名称显示
    const petNameElement = document.getElementById("your-pet-name");
    if (petNameElement && currentPet) {
        petNameElement.innerText = currentPet.name;
    }
    
    // 添加事件监听器
    const autoBattleButton = document.getElementById('autoBattleButton');
    if (autoBattleButton) {
        autoBattleButton.addEventListener('click', autoBattle);
    }
    
    const openTenthTreasureButton = document.getElementById("open-tenth-treasure-button");
    if (openTenthTreasureButton) {
        openTenthTreasureButton.addEventListener("click", openTenthTreasure);
    }

    
};

// 颜色映射表
const colorMapping = {
    'red': '红色',
    'orange': '橙色',
    'pink': '粉色',
    'blue': '蓝色',
    'gold': '金色',
    'green': '绿色',
    'purple': '紫色',
    'lime': '柠檬色',
    'aqua': '亮青色',
    '#f9de9b': '卡其色',
};

function generateDyePowder() {
    // 获取所有可用颜色
    const availableColors = Object.keys(colorMapping);
    // 随机选择一种颜色
    const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
    
    // 构建物品信息
    const name = `${randomColor}dyePowder`;
    const displayName = `${colorMapping[randomColor]}颜料堆`;
    const url = 'https://pic1.imgdb.cn/item/678fb0b4d0e0a243d4f633e1.png';
    const description = `${colorMapping[randomColor]}染料，使用后能将当前宠物漂染为对应颜色，要注意每次漂染的效果可能存在不同`;
    
    // 生成物品到背包
    generateItemToJinnang(name, displayName, url, 20000, 1, description);
    showInfoBox(`得到一个${displayName}`,null,null,`${randomColor}`);
    
    return randomColor; // 返回生成的颜色，方便测试
}
    
// 全局变量
let petColor = null;

function updatePetColor() {
    // 如果没有颜色数据或当前宠物与染色记录不匹配，不执行染色
    if (!petColor || petColor.petName !== currentPet.name) {
        // 清理两个位置可能存在的染色效果
        ['pet-image', 'your-pet-color'].forEach(id => {
            const image = document.getElementById(id);
            if (image) {
                const oldOverlay = image.parentElement.querySelector('.dye-overlay');
                if (oldOverlay) {
                    oldOverlay.remove();
                }
            }
        });
        return;
    }

    // 为两个图片元素应用相同的染色效果
    ['pet-image', 'your-pet-color'].forEach(id => {
        const image = document.getElementById(id);
        if (!image) return;

        // 移除旧的染色效果
        const oldOverlay = image.parentElement.querySelector('.dye-overlay');
        if (oldOverlay) {
            oldOverlay.remove();
        }

        // 创建新的染色蒙版
        const overlay = document.createElement('div');
        overlay.className = 'dye-overlay';
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${petColor.color};
            opacity: ${petColor.opacity};
            pointer-events: none;
            mix-blend-mode: multiply;
            border-radius: 10px;
        `;

        // 确保图片容器是相对定位
        image.parentElement.style.position = 'relative';
        image.parentElement.appendChild(overlay);
    });
}

function dyePets() {
    // 检查是否有选中的物品
    if (!selectedItem || !selectedItem.dataset.itemName) {
        return showInfoBox('请先选择要使用的染料！');
    }
    
    // 检查选中的是否是染料
    const itemName = selectedItem.dataset.itemName;
    if (!itemName.endsWith('dyePowder')) {
        return showInfoBox('请选择正确的染料物品！');
    }
    
    // 获取颜色信息
    const color = itemName.replace('dyePowder', '');
    if (!colorMapping[color]) {
        return showInfoBox('无效的染料颜色！');
    }
    
    // 显示确认框
    showInfoBox(
        `将会使用${colorMapping[color]}染料将${currentPet.name}染色，是否继续？`,
        () => {
            // 生成随机透明度 (0.1 到 0.9)
            const opacity = (Math.random() * 0.8 + 0.1).toFixed(2);
            const displayDegree = `【${Math.max(1, Math.floor(opacity * 10))}层】`;
            
            // 获取宠物图片元素
            const petImage = document.getElementById('pet-image');
            if (!petImage) {
                return showInfoBox('未找到宠物图片元素！');
            }
            
            // 移除旧的染色效果（如果存在）
            const oldOverlay = petImage.parentElement.querySelector('.dye-overlay');
            if (oldOverlay) {
                oldOverlay.remove();
            }
            
            // 创建新的染色蒙版
            const overlay = document.createElement('div');
            overlay.className = 'dye-overlay';
            overlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${color};
                opacity: ${opacity};
                pointer-events: none;
                mix-blend-mode: multiply;
                border-radius: 10px;
            `;
            
            // 确保宠物图片容器是相对定位
            petImage.parentElement.style.position = 'relative';
            
            // 添加蒙版
            petImage.parentElement.appendChild(overlay);
            
            // 更新全局颜色状态
            petColor = {
                petName: currentPet.name,
                color: color,
                opacity: opacity
            };
            
            // 从背包中移除使用的染料
            const dyeItem = jinnangItems.find(item => item.name === itemName);
            if (dyeItem) {
                dyeItem.quantity--;
                updateJinnangItems();
            }
            
            showInfoBox(`成功将${currentPet.name}染成了${colorMapping[color]}${displayDegree}！`);
            updatePetName();
        },
        () => showInfoBox('已取消染色！')
    );
}

function resetDye() {
    showInfoBox(
        `确定要清除${currentPet.name}的染色效果吗？`,
        () => {
            // 移除染色数据
            if (petColor && petColor.petName === currentPet.name) {
                petColor = null;
            }

            // 移除染色效果
            ['pet-image', 'your-pet-image'].forEach(id => {
                const image = document.getElementById(id);
                if (image) {
                    const oldOverlay = image.parentElement.querySelector('.dye-overlay');
                    if (oldOverlay) {
                        oldOverlay.remove();
                    }
                }
            });

            // 更新名称显示（移除颜色阴影）
            updatePetName();
            
            showInfoBox(`已清除${currentPet.name}的染色效果`);
        },
        () => showInfoBox('已取消重置！'),
        '#92341C'
    );
}

// 全局变量，存储个性化名称
// 初始化为空数组并添加类型保护
let personalizedName = [];

// 用于确保 personalizedName 始终是数组的辅助函数
function ensurePersonalizedNameArray() {
    if (!Array.isArray(personalizedName)) {
        console.warn('personalizedName was not an array, resetting to empty array');
        personalizedName = [];
    }
    return personalizedName;
}

function createNameInput() {
    const content = document.createElement('div');
    content.style.textAlign = 'center';
    
    // 创建标题
    const title = document.createElement('div');
    title.style.fontSize = '16px';
    title.style.marginBottom = '15px';
    title.style.color = '#92341C';
    title.innerText = '为你的宠物取个新名字吧';
    content.appendChild(title);
    
    // 创建输入容器
    const inputContainer = document.createElement('div');
    inputContainer.style.display = 'flex';
    inputContainer.style.flexDirection = 'column';
    inputContainer.style.alignItems = 'center';
    inputContainer.style.gap = '10px';
    inputContainer.style.marginBottom = '15px';
    
    // 创建输入框
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.style.cssText = `
        width: 200px;
        height: 28px;
        text-align: center;
        border: 1px solid #EBAC3B;
        background-color: #DFBF6E;
        color: #92341C;
        font-size: 14px;
        padding: 0 5px;
    `;
    
    // 创建提示文本
    const tipText = document.createElement('div');
    tipText.style.fontSize = '12px';
    tipText.style.color = '#6f391c';
    tipText.style.marginTop = '5px';
    tipText.textContent = '请输入新的名字';
    
    // 添加输入验证
    nameInput.addEventListener('input', () => {
        const value = nameInput.value;
        const isChinese = /^[\u4e00-\u9fa5]{1,5}$/;
        const isEnglish = /^[a-zA-Z]{1,8}$/;
        
        if (value === '') {
            tipText.textContent = '请输入新的名字';
            tipText.style.color = '#6f391c';
        } else if (isChinese.test(value)) {
            tipText.textContent = '名字符合要求';
            tipText.style.color = '#008000';
        } else if (isEnglish.test(value)) {
            tipText.textContent = '名字符合要求';
            tipText.style.color = '#008000';
        } else {
            tipText.textContent = '只能输入1-5个汉字或1-8个英文字母';
            tipText.style.color = '#FF0000';
        }
    });
    
    inputContainer.appendChild(nameInput);
    inputContainer.appendChild(tipText);
    content.appendChild(inputContainer);
    
    return {
        element: content,
        getInput: () => nameInput.value,
        isValid: () => {
            const value = nameInput.value;
            return /^[\u4e00-\u9fa5]{1,5}$/.test(value) || /^[a-zA-Z]{1,8}$/.test(value);
        }
    };
}

function renameCurrentPet() {
    // 确保是数组
    ensurePersonalizedNameArray();
    
    const nameInput = createNameInput();
    
    showInfoBox(
        '',
        () => {
            if (!nameInput.isValid()) {
                return showInfoBox('请输入有效的名字！');
            }

            const newName = nameInput.getInput();
            
            try {
                // 检查当前宠物是否已有个性化名称
                const existingNameIndex = personalizedName.findIndex(
                    item => item.currentPet === currentPet.name
                );
                
                if (existingNameIndex !== -1) {
                    // 如果存在，只更新这个宠物的个性化名称
                    personalizedName[existingNameIndex].personalizedName = newName;
                } else {
                    // 如果不存在，添加新的映射关系
                    personalizedName.push({
                        currentPet: currentPet.name,
                        personalizedName: newName
                    });
                }
                
                // 更新显示
                updatePetName();
                showInfoBox(`成功将宠物更名为：${newName}`);
            } catch (error) {
                console.error('Error during pet rename:', error);
                showInfoBox('更名过程出现错误，请重试！');
            }
        },
        () => showInfoBox('已取消更名！'),
        '#92341C'
    );
    
    // 将名称输入界面添加到信息框中
    const messageElement = currentInfoBox.querySelector('p');
    messageElement.appendChild(nameInput.element);
}

function updatePetName() {
    const nameElement = document.getElementById('personalized-name');
    const battleNameElement = document.getElementById('your-pet-name');
    const qualityNameElement = document.getElementById('quality-name');
    if (!nameElement) return;

    try {
        // 确保是数组
        ensurePersonalizedNameArray();
        
        // 查找当前宠物的个性化名称
        const petNameRecord = personalizedName.find(
            item => item.currentPet === currentPet.name
        );
        
        // 设置名称文本
        if (petNameRecord && petNameRecord.personalizedName) {
            nameElement.textContent = petNameRecord.personalizedName;
            battleNameElement.textContent = petNameRecord.personalizedName;
            qualityNameElement.textContent = petNameRecord.personalizedName;
            
            // 检查是否同时存在染色效果
            if (petColor && petColor.petName === currentPet.name) {
                // 添加与染色相匹配的文字阴影
                nameElement.style.textShadow = `-1px -1px 1px ${petColor.color}, 1px -1px 1px ${petColor.color}, -1px 1px 1px ${petColor.color}, 1px 1px 1px ${petColor.color}`;
                nameElement.style.fontWeight = 'bold';
                nameElement.style.color = 'white';

                battleNameElement.style.textShadow = `-1px -1px 1px ${petColor.color}, 1px -1px 1px ${petColor.color}, -1px 1px 1px ${petColor.color}, 1px 1px 1px ${petColor.color}`;
                battleNameElement.style.fontWeight = 'bold';
                battleNameElement.style.color = 'white';

                qualityNameElement.style.textShadow = `-1px -1px 1px ${petColor.color}, 1px -1px 1px ${petColor.color}, -1px 1px 1px ${petColor.color}, 1px 1px 1px ${petColor.color}`;
                qualityNameElement.style.fontWeight = 'bold';
                qualityNameElement.style.color = 'white';
            } else {
                // 如果没有染色效果，移除文字阴影
                nameElement.style.textShadow = 'none';
                nameElement.style.fontWeight = '';
                nameElement.style.color = '';

                battleNameElement.style.textShadow = 'none';
                battleNameElement.style.fontWeight = '';
                battleNameElement.style.color = '';

                qualityNameElement.style.textShadow = 'none';
                qualityNameElement.style.fontWeight = '';
                qualityNameElement.style.color = '';
            }
        } else {
            // 如果没有个性化名称，显示默认名称且移除文字阴影
            nameElement.textContent = currentPet.name;
            nameElement.style.textShadow = 'none';
            nameElement.style.fontWeight = '';
            nameElement.style.color = '';

            battleNameElement.textContent = currentPet.name;
            battleNameElement.style.textShadow = 'none';
            battleNameElement.style.fontWeight = '';
            battleNameElement.style.color = '';

            qualityNameElement.textContent = currentPet.name;
            qualityNameElement.style.textShadow = 'none';
            qualityNameElement.style.fontWeight = '';
            qualityNameElement.style.color = '';
        }
    } catch (error) {
        console.error('Error during pet name update:', error);
        nameElement.textContent = currentPet.name;
        nameElement.style.textShadow = 'none';
        nameElement.style.fontWeight = '';
        nameElement.style.color = '';

        battleNameElement.textContent = currentPet.name;
        battleNameElement.style.textShadow = 'none';
        battleNameElement.style.fontWeight = '';
        battleNameElement.style.color = '';

        qualityNameElement.textContent = currentPet.name;
        qualityNameElement.style.textShadow = 'none';
        qualityNameElement.style.fontWeight = '';
        qualityNameElement.style.color = '';
    }
}

document.getElementById('personalized-name').addEventListener('click',()=>{
    showInfoBox('如果你拥有道具【重生露】，可以给你的爱宠更改一个独一无二的名字');
})

// 称号数组，从低到高排列
const titles = [
    "初来乍到", "懵懵懂懂", "初窥门径", "小有所成", "渐入佳境",
    "如鱼得水", "游刃有余", "青云直上", "名扬四海", "独占鳌头",
    "炙手可热", "举世无双", "威震八方", "震古烁今", "登峰造极",
    "傲视群雄", "龙腾四海", "王者归来", "魔兽之王", "Legend",
    "神"
];

let petScore;
function updateTitle() {
    let currentTitleIndex = 0;

    // 条件1：宠物等级
    if (petLevel >= 80) currentTitleIndex = 4;
    else if (petLevel >= 60) currentTitleIndex = 3;
    else if (petLevel >= 40) currentTitleIndex = 2;
    else if (petLevel >= 20) currentTitleIndex = 1;

    // 条件2：金子数量
    if (currentTitleIndex >= 4) {
        if (goldAmount >= 200000) currentTitleIndex = 8;
        else if (goldAmount >= 150000) currentTitleIndex = 7;
        else if (goldAmount >= 100000) currentTitleIndex = 6;
        else if (goldAmount >= 50000) currentTitleIndex = 5;
    }

    // 条件3：技能分数
    if (currentTitleIndex >= 8) {
        if (window.petScore >= 2600000) currentTitleIndex = 12;
        else if (window.petScore >= 2400000) currentTitleIndex = 11;
        else if (window.petScore >= 2200000) currentTitleIndex = 10;
        else if (window.petScore >= 2000000) currentTitleIndex = 9;
    }

    // 条件4：战斗回合数
    if (currentTitleIndex >= 12) {
        if (battleRounds >= 115) currentTitleIndex = 16;
        else if (battleRounds >= 110) currentTitleIndex = 15;
        else if (battleRounds >= 105) currentTitleIndex = 14;
        else if (battleRounds >= 100) currentTitleIndex = 13;
    }

    // 条件5：收集宠物数量
    if (currentTitleIndex >= 16) {
        if (collectedPetCount >= 12) currentTitleIndex = 19;
        else if (collectedPetCount >= 8) currentTitleIndex = 18;
        else if (collectedPetCount >= 4) currentTitleIndex = 17;
    }

    // 条件6：宠物智慧
    if (currentTitleIndex >= 19 && petWisdom == 25) {
        currentTitleIndex = 20;
    }

    // 更新页面上的称号
    const titleElement = document.getElementById('personal-honor');
    titleElement.innerText = titles[currentTitleIndex];
}

// 保存游戏
function saveGameState() {
    const petSelect = document.getElementById('pet-select');
    const petsInSelect = Array.from(petSelect.options).map(option => option.value);
    const skillsArea = document.getElementById("skills-area");
    const skillsDrawer = document.getElementById("skills-in-drawer");
    const existingSkills = Array.from(skillsArea.children).map(skillDiv => {
        const [name, rarity] = skillDiv.innerText.split(' (');
        return {
            name: name,
            rarity: rarity.slice(0, -1) // 去掉最后一个字符 ')'
        };
    });

    storeItems(); // 存储道具数据

    const gameState = {
        currentPetKey: currentPetKey,
        currentPet: JSON.stringify(currentPet),
        skillScore: skillScore,
        petsInSelect: petsInSelect,
        petStates: JSON.stringify(petStates),
        advancementStates: JSON.stringify(advancementStates),
        specializations: JSON.stringify(specializations),
        allocationHistory: JSON.stringify(allocationHistory),
        consumedPillCount: consumedPillCount,
        petLevel: petLevel,
        evolutionLevel: evolutionLevel,
        remainingPoints: remainingPoints,
        trainingCount: trainingCount,
        currentWisdom: currentWisdom,
        petAscended: petAscended,
        petMaxLevel: petMaxLevel,
        petWisdom: petWisdom,
        additionalAttributes: additionalAttributes,
        awakened: awakened,
        awakenAttributes: awakenAttributes,
        bonusAttributes: bonusAttributes,
        baseAttributes: baseAttributes,
        hallucinated: hallucinated,
        hallucinationLevel: hallucinationLevel,
        experienceTreasureOpenCount: experienceTreasureOpenCount,
        armsOpened: armsOpened, // 保存武装解锁情况
        armsAttributes: JSON.stringify(armsAttributes), // 保存武装属性情况
        petColor: JSON.stringify(petColor),
        tasks: JSON.stringify(tasks), //保存任务情况
        battleRounds: battleRounds,
        currentExp: currentExp,
        maxExp: maxExp,
        playerCritRate: playerCritRate,
        playerCritDamage: playerCritDamage,
        playerCultivation: playerCultivation,
        personalizedName: JSON.stringify(personalizedName),
        qualityPillCount: qualityPillCount,
        additionalPlayerCultivation: additionalPlayerCultivation,
        enemyPetCultivation: enemyPetCultivation,
        enemyCritRate: enemyCritRate,
        enemyCritDamage: enemyCritDamage,
        wuxingFragments: wuxingFragments,
        ascensionEnabled: ascensionEnabled,
        poisonSkillActivated: poisonSkillActivated,
        spiritLevel: spiritLevel,
        spiritMultiplier: spiritMultiplier,
        reenableAscension: reenableAscension,
        ascensionSkill: getSkillFromName(ascensionSkill.name, ascensionSkill.level),
        secondAscensionSkill: getSkillFromName(secondAscensionSkill.name, secondAscensionSkill.level),
        ascensionAttributes: ascensionAttributes,
        drugBonus0: drugBonus0,
        drugBonus: drugBonus,
        wuxingStates: JSON.stringify(wuxingStates),
        elixirStates: JSON.stringify(elixirStates),
        skillScore: skillScore,
        collectedPets: collectedPets,
        collectedPetCount: collectedPetCount,
        divineWeapons: divineWeaponManager.getWeaponData(),
        divinedWeaponStatus: divinedWeaponStatus, //保存神器提示
        existingSkills: existingSkills,
        goldAmount: goldAmount,
        blessGiftClaimed: blessGiftClaimed,
        enemyPet: enemyPet,
        enemyMaxHealth: enemyMaxHealth,
        enemyMaxMana: enemyMaxMana,
        enemyInitialState: enemyInitialState, // 保存敌人的初始状态
        drugInventory: JSON.stringify(drugInventory), // 保存药物系统
        alreadyUseDrug: alreadyUseDrug, //使用药物提示
        collectCost: collectCost, //采集药物成本
        experienceTreasureOpenCount: experienceTreasureOpenCount, //经验宝箱成本
        gameItems: gameItems, // 保存道具数据
        alreadyUnlocked: alreadyUnlocked,
        scalpingScore: scalpingScore, //保存经商积分
        highestAsset: highestAsset, //保存经商最高记录
        currentLifeSpan: currentLifeSpan,
        maxLifeSpan: maxLifeSpan, //宠物寿命上限
        luckyAccretion: luckyAccretion,
        playerCredit: playerCredit
    };

    localStorage.setItem('gameState', JSON.stringify(gameState));
    console.log("存档成功！");
}

function clearOldItems() {
    // 清空 jinnangItems 数组，删除所有现有的道具数据
    jinnangItems.length = 0;
    // 同时重置存储在 localStorage 或其他存储位置的道具数据
    localStorage.removeItem('gameItems'); // 假设存储在 localStorage 中
    // 更新 UI 或者执行其他相关的清理操作
    updateJinnangItems();
    showInfoBox("旧的道具数据已删除。");
    }
        
// 存储道具数据
function storeItems() {
    gameItems.transmutationPill = transmutationPill;
    gameItems.rebornPill = rebornPill;
    gameItems.bingpoRebornPill = bingpoRebornPill;
    gameItems.goldenRebornPill = goldenRebornPill;
    gameItems.miraculousPill = miraculousPill;
    gameItems.qualityPill = qualityPill;
    gameItems.highGradePill = highGradePill;
    gameItems.goldAmount = goldAmount;
    gameItems.stamps = stamps;
    gameItems.jinnangCapacity = jinnangCapacity;
    
    // 存储 jinnangItems 的所有属性
    gameItems.jinnangItems = jinnangItems.map(item => ({
        name: item.name,
        displayName: item.displayName,
        url: item.url,
        price: item.price,
        quantity: item.quantity,
        description: item.description,
        timestamp: item.timestamp // 确保时间戳也被存储
    }));
}

// 恢复道具数据
function restoreItems() {
    transmutationPill = gameItems.transmutationPill;
    rebornPill = gameItems.rebornPill;
    bingpoRebornPill = gameItems.bingpoRebornPill;
    goldenRebornPill = gameItems.goldenRebornPill;
    miraculousPill = gameItems.miraculousPill;
    qualityPill = gameItems.qualityPill;
    highGradePill = gameItems.highGradePill;
    goldAmount = gameItems.goldAmount;
    stamps = gameItems.stamps;
    jinnangCapacity = gameItems.jinnangCapacity;

    for (const savedItem of gameItems.jinnangItems) {
        const item = jinnangItems.find(i => i.name === savedItem.name);
        if (item) {
            // 如果道具已存在，更新数量和其他属性
            item.quantity = savedItem.quantity;
            item.displayName = item.displayName;
            item.url = item.url;
            item.price = item.price;
            item.description = item.description;
            item.timestamp = savedItem.timestamp; // 恢复时间戳
        } else {
            // 如果道具不存在，创建新的道具
            jinnangItems.push({
                name: savedItem.name,
                displayName: savedItem.displayName,
                url: savedItem.url,
                price: savedItem.price,
                quantity: savedItem.quantity,
                description: savedItem.description,
                timestamp: savedItem.timestamp // 恢复时间戳
            });
        }
    }
    
    updateJinnangItems();
    updateStampCount();
    updateGoldDisplay(goldAmount);
    document.getElementById("quality-pill").innerText = qualityPill;
    document.getElementById("high-grade-pill").innerText = highGradePill;
    document.getElementById("miraculous-pill").innerText = miraculousPill;
    document.getElementById("golden-reborn-pill").innerText = goldenRebornPill;
    document.getElementById("bingpo-reborn-pill").innerText = bingpoRebornPill;
    document.getElementById("transmutation-pill").innerText = transmutationPill;
    document.getElementById("reborn-pill").innerText = rebornPill;
}

// 从ascensionSkills数组中获取技能对象
function getSkillFromName(name, level) {
    for (let category in ascensionSkills) {
        for (let skill of ascensionSkills[category]) {
            if (skill.name === name) {
                return { ...skill, level: level };
            }
        }
    }
    return null;
}
// 加载游戏
function loadGameState(auto = false) {
    if (!auto) {
        showInfoBox('你确定要读取存档吗？这可能会覆盖现在的数据？',
                    () => {
                        loadGameData();
                        showInfoBox('读取成功！');
                    },
                    () => {
                        return;
                    });
    } else {
        loadGameData();
    }
function loadGameData() {
        const savedState = JSON.parse(localStorage.getItem('gameState'));
        if (!savedState) return;
        const petSelect = document.getElementById('pet-select');
        const petsInSelect = Array.from(petSelect.options).map(option => option.value);
        const secondSkillBox = document.getElementById('second-ascension-skill');
        
        // 检查并添加移除的宠物
        if (savedState.petsInSelect) {
            savedState.petsInSelect.forEach(petKey => {
                if (!petsInSelect.includes(petKey) && pets[petKey]) {
                    const option = document.createElement('option');
                    option.value = petKey;
                    option.text = pets[petKey].name; // 假设每个宠物对象都有一个`name`属性
                    petSelect.add(option);
                }
            });
        }
    
        // 切换到最后一次存储的宠物
        if (savedState.currentPetKey !== undefined && pets[savedState.currentPetKey]) {
            currentPetKey = savedState.currentPetKey;
            petSelect.value = currentPetKey;
            changePet(true); // 跳过确认提示，直接切换宠物
        }
    
        if (savedState) {
            currentPet = JSON.parse(savedState.currentPet);
            petLevel = savedState.petLevel;
            evolutionLevel = savedState.evolutionLevel;
            remainingPoints = savedState.remainingPoints;
            trainingCount = savedState.trainingCount;
            currentWisdom = savedState.currentWisdom;
            petAscended = savedState.petAscended;
            ascensionAttributes = savedState.ascensionAttributes;
            petMaxLevel = savedState.petMaxLevel;
            petWisdom = savedState.petWisdom;
            awakened = savedState.awakened;
            hallucinated = savedState.hallucinated;
            hallucinationLevel = savedState.hallucinationLevel;
            experienceTreasureOpenCount = savedState.experienceTreasureOpenCount;
            armsOpened = savedState.armsOpened; // 恢复武装解锁情况
            armsAttributes = JSON.parse(savedState.armsAttributes); // 恢复武装属性情况
            tasks = JSON.parse(savedState.tasks); // 恢复任务系统情况
            battleRounds = savedState.battleRounds;
            currentExp = savedState.currentExp;
            maxExp = savedState.maxExp;
            goldAmount = savedState.goldAmount;
            playerCritRate = savedState.playerCritRate;
            playerCritDamage = savedState.playerCritDamage;
            playerCultivation = savedState.playerCultivation;
            additionalPlayerCultivation = savedState.additionalPlayerCultivation;
            enemyPetCultivation = savedState.enemyPetCultivation;
            enemyCritRate = savedState.enemyCritRate;
            enemyCritDamage = savedState.enemyCritDamage;
            ascensionEnabled = savedState.ascensionEnabled;
            poisonSkillActivated = savedState.poisonSkillActivated;
            spiritLevel = savedState.spiritLevel;
            spiritMultiplier = savedState.spiritMultiplier;
            reenableAscension = savedState.reenableAscension;
            bonusAttributes = savedState.bonusAttributes;        
            baseAttributes = savedState.baseAttributes;
            // 检查并获取技能
            if (savedState.ascensionSkill && savedState.ascensionSkill.name) {
                ascensionSkill = getSkillFromName(savedState.ascensionSkill.name, savedState.ascensionSkill.level);
            } else {
                ascensionSkill = null;
            }
            
            if (savedState.secondAscensionSkill && savedState.secondAscensionSkill.name) {
                secondAscensionSkill = getSkillFromName(savedState.secondAscensionSkill.name, savedState.secondAscensionSkill.level);
            } else {
                secondAscensionSkill = null;
            }
            if (JSON.stringify(savedState.petStates)) {
                petStates = JSON.parse(savedState.petStates);
            }
            if (JSON.stringify(savedState.allocationHistory)) {
                allocationHistory = JSON.parse(savedState.allocationHistory);
            }
            if (savedState.qualityPillCount) {
                qualityPillCount = savedState.qualityPillCount;
            } //这是资质仙丹的数值
            if (savedState.consumedPillCount) {
                consumedPillCount = savedState.consumedPillCount;
            } //这是资质仙丹的数值
            if (savedState.luckyAccretion) {
                luckyAccretion = savedState.luckyAccretion;
            }
            if (savedState.playerCredit) {
                playerCredit = savedState.playerCredit;
            }
            if (savedState.drugBonus0) {
                drugBonus = savedState.drugBonus0;
            }
            if (savedState.drugBonus) {
                drugBonus = savedState.drugBonus;
            }
            if (savedState.wuxingStates) {
                wuxingStates = JSON.parse(savedState.wuxingStates);
            }
            if (savedState.elixirStates) {
                elixirStates = JSON.parse(savedState.elixirStates);
            }
            if (savedState.wuxingFragments) {
                wuxingFragments = savedState.wuxingFragments;
            }
            if (savedState.advancementStates) {
                advancementStates = JSON.parse(savedState.advancementStates);
            }
            if (savedState.petColor) {
                petColor = JSON.parse(savedState.petColor);
            }
            if (savedState.scalpingScore) {
                scalpingScore = savedState.scalpingScore;
            }
            if (savedState.highestAsset) {
                highestAsset = savedState.highestAsset;
            }
            if (savedState.personalizedName) {
                personalizedName = JSON.parse(savedState.personalizedName); //宠物名字
            }
            
            if (savedState.currentLifeSpan) {
                currentLifeSpan = savedState.currentLifeSpan;
            } 
            
            if (savedState.maxLifeSpan) {
                maxLifeSpan = savedState.maxLifeSpan;
            } 
            
            skillScore = savedState.skillScore;
            blessGiftClaimed = savedState.blessGiftClaimed;
            enemyPet = savedState.enemyPet;
            enemyMaxHealth = savedState.enemyMaxHealth;
            enemyMaxMana = savedState.enemyMaxMana;
            enemyInitialState = savedState.enemyInitialState; // 加载敌人的初始状态
            divinedWeaponStatus = savedState.divinedWeaponStatus;
            alreadyUseDrug= savedState.alreadyUseDrug; //使用药物提示
            drugInventory = JSON.parse(savedState.drugInventory); // 恢复药品系统
            collectCost= savedState.collectCost; //采集药物成本
            experienceTreasureOpenCount= savedState.experienceTreasureOpenCount; //经验宝箱成本
    
            if (awakened && savedState.awakenAttributes) {
                awakenAttributes = savedState.awakenAttributes;
            }
            if (savedState.specializations) {
                try {
                    const savedSpecs = JSON.parse(savedState.specializations);
                    // 初始化基础专精结构
                    const baseSpecializations = {
                        慧光辉耀: { 
                            level: 0, 
                            attribute: 'intelligence', 
                            baseMultiplier: 0.055, 
                            levelIncrement: 0.0035, 
                            url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d94ce.png',
                            isActive: false 
                        },
                        神魔之力: { 
                            level: 0, 
                            attributes: 'strength', 
                            baseMultiplier: 0.055, 
                            levelIncrement: 0.0035, 
                            url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d9458.png',
                            isActive: false 
                        },
                        坚韧之心: { 
                            level: 0, 
                            attributes: 'endurance', 
                            baseMultiplier: 0.055, 
                            levelIncrement: 0.0035, 
                            url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d94db.png',
                            isActive: false 
                        },
                        凌波微步: { 
                            level: 0, 
                            attributes: 'agility', 
                            baseMultiplier: 0.055, 
                            levelIncrement: 0.0035, 
                            url: 'https://pic1.imgdb.cn/item/67920a40d0e0a243d4f722bb.png',
                            isActive: false 
                        },
                        圣灵附体: { 
                            level: 0, 
                            attributes: 'faith', 
                            baseMultiplier: 0.055, 
                            levelIncrement: 0.0035, 
                            url: 'https://pic1.imgdb.cn/item/67920a40d0e0a243d4f722ba.png',
                            isActive: false 
                        }
                    };
            
                    // 安全地合并保存的数据
                    Object.keys(savedSpecs).forEach(key => {
                        if (baseSpecializations[key]) {
                            // 只更新等级，保持其他属性不变
                            baseSpecializations[key].level = savedSpecs[key].level || 0;
                            // 处理旧版存档兼容
                            if (savedState.currentSpecialization === key) {
                                baseSpecializations[key].isActive = true;
                            } else {
                                baseSpecializations[key].isActive = savedSpecs[key].isActive || false;
                            }
                        }
                    });
            
                    specializations = baseSpecializations;
                } catch (error) {
                    console.error('专精数据加载失败:', error);
                    // 如果解析失败，使用默认值
                    specializations = {
                        慧光辉耀: { level: 0, attribute: 'intelligence', baseMultiplier: 0.055, levelIncrement: 0.0035, url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d94ce.png', isActive: false },
                        神魔之力: { level: 0, attributes: 'strength', baseMultiplier: 0.055, levelIncrement: 0.0035, url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d9458.png', isActive: false },
                        坚韧之心: { level: 0, attributes: 'endurance', baseMultiplier: 0.055, levelIncrement: 0.0035, url: 'https://pic.imgdb.cn/item/6688dc1ed9c307b7e99d94db.png', isActive: false },
                        凌波微步: { level: 0, attributes: 'agility', baseMultiplier: 0.055, levelIncrement: 0.0035, url: 'https://pic1.imgdb.cn/item/67920a40d0e0a243d4f722bb.png', isActive: false },
                        圣灵附体: { level: 0, attributes: 'faith', baseMultiplier: 0.055, levelIncrement: 0.0035, url: 'https://pic1.imgdb.cn/item/67920a40d0e0a243d4f722ba.png', isActive: false }
                    };
                }
            }
            if (savedState.additionalAttributes) {
                additionalAttributes = savedState.additionalAttributes;
            }
            if (savedState.collectedPets) {
                collectedPets = savedState.collectedPets;
            }
            if (savedState.collectedPetCount !== undefined) {
                collectedPetCount = savedState.collectedPetCount;
            }
            //假如存在神器
            if (savedState.divineWeapons) {
                divineWeaponManager.setWeaponData(savedState.divineWeapons);
            }
            if (savedState.existingSkills) {
                const skillsArea = document.getElementById("skills-area");
                const skillsDrawerArea = document.getElementById("skills-in-drawer");
                
                // 清空两个区域的当前技能
                skillsArea.innerHTML = '';
                skillsDrawerArea.innerHTML = '';
                
                savedState.existingSkills.forEach(skill => {
                    // 为两个区域分别创建技能元素
                    const skillDiv = createSkillElement(skill);
                    const drawerSkillDiv = createSkillElement(skill, true);
                    
                    // 分别设置点击事件
                    skillDiv.onclick = () => deleteSkill(skill, skillDiv, skillsArea);
                    drawerSkillDiv.onclick = () => deleteSkill(skill, drawerSkillDiv, skillsDrawerArea);
                    
                    // 分别添加到对应区域
                    skillsArea.appendChild(skillDiv);
                    skillsDrawerArea.appendChild(drawerSkillDiv);
                });
            }
            if (savedState.secondAscensionSkill && savedState.reenableAscension) {
                secondSkillBox.style.display = 'block';
                updateSecondAscensionDisplay();
            }
            if (savedState.gameItems) {
                gameItems = savedState.gameItems;
                restoreItems(); // 恢复道具数据
            }
            // 需要重新更新显示的内容
            updateDisplayContent();
    
            // 检查宠物是否已经变异
            if (currentPet.qualities.mutated) {
                updateMutatedImg();
            }
            //
            if (savedState.alreadyUnlocked) {
                alreadyUnlocked = savedState.alreadyUnlocked;
            }
            // 如果有其他需要更新的显示内容，也需要在这里添加
        }
        alreadyLoadGameState = true;
        updateWuxingBonusState();
        console.log("读档成功！");
    }
}

function updateDisplayContent() {
    updatePetInfo();
    updateQualityDisplayWithBonuses();
    updatePetDisplay();
    updateMutatedImg();
    updateQualityDisplayWithBonuses();
    updateAttributePanel();
    updateTopBarItems();
    updateAscensionStatus();
    updateAscensionDisplay();
    updateAwakenStatus();
    updateAscensionButton();
    loadBackgroundData();
    
    if (petColor != null) updatePetColor();
    if (personalizedName != null) updatePetName();
    
    // restoreEnemyState();暂时不重置数据
    checkSecondAscensionEnabled();
    updateGoldDisplay(goldAmount); // 调用更新金子显示的函数
    updateExpBar(currentExp, maxExp);

    setInnerText("hallucination-level", hallucinationLevel);
    setInnerText("skill-score", skillScore);
    setInnerText("current-wisdom", currentWisdom);
    setInnerText("train-count", trainingCount);
    setInnerText("pet-level", petLevel);
    setInnerText("evolution-level", evolutionLevel);
    // ...
}

const fullscreenBtn = document.getElementById('fullscreenBtn');

fullscreenBtn.addEventListener('click', function() {
    if (!document.fullscreenElement &&    // W3C 标准
        !document.mozFullScreenElement && // Firefox
        !document.webkitFullscreenElement && // Chrome, Safari and Opera
        !document.msFullscreenElement) { // IE/Edge

        // 当前未处于全屏状态，尝试Skills for Your Lovely Pet
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
            document.documentElement.msRequestFullscreen();
        }

        fullscreenBtn.textContent = "Click to Resume Screen"; // 更新按钮文本
    } else {
        // 当前处于全屏状态，尝试Click to Resume Screen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }

        fullscreenBtn.textContent = "Skills for Your Lovely Pet"; // 更新按钮文本
    }
});

// 监听全屏状态变化事件，以确保按钮文本始终与全屏状态同步
document.addEventListener('fullscreenchange', onFullscreenChange);
document.addEventListener('webkitfullscreenchange', onFullscreenChange);
document.addEventListener('mozfullscreenchange', onFullscreenChange);
document.addEventListener('MSFullscreenChange', onFullscreenChange);
const correctHashedCode = CryptoJS.MD5("boy").toString();

function onFullscreenChange() {
    if (document.fullscreenElement || 
        document.mozFullScreenElement || 
        document.webkitFullscreenElement || 
        document.msFullscreenElement) {
        fullscreenBtn.textContent = "Click to Resume Screen";
    } else {
        fullscreenBtn.textContent = "Skills for Your Lovely Pet";
    }
}








