// scratchcard.js
(function() {
    // 游戏状态变量
    let scrapeGameState = {
        selectedCardType: 'normal',
        cardPrices: {
            normal: 500,
            premium: 2000,
            deluxe: 10000
        },
        isScratching: false,
        canBuy: true,
        stats: {
            totalSpent: 0,
            winCount: 0
        },
        history: []
    };
    
    // 初始化函数
    function initScrapeGame() {
        // 获取DOM元素
        const buyCardButton = document.getElementById('scrape-buy-card');
        const cardNormalButton = document.getElementById('scrape-card-normal');
        const cardPremiumButton = document.getElementById('scrape-card-premium');
        const cardDeluxeButton = document.getElementById('scrape-card-deluxe');
        const rulesButton = document.getElementById('scrape-show-rules');
        const resetButton = document.getElementById('scrape-reset-game');
        
        // 事件绑定
        buyCardButton.addEventListener('click', buyCard);
        cardNormalButton.addEventListener('click', () => selectCardType('normal'));
        cardPremiumButton.addEventListener('click', () => selectCardType('premium'));
        cardDeluxeButton.addEventListener('click', () => selectCardType('deluxe'));
        rulesButton.addEventListener('click', showRules);
        resetButton.addEventListener('click', resetStats);
        
        // 初始更新显示
        updateLotteryGoldDisplay();
        updateStats();
        
        // 初始选择普通卡
        selectCardType('normal');
    }
    
    // 选择卡片类型
    function selectCardType(type) {
        scrapeGameState.selectedCardType = type;
        
        // 更新按钮状态
        const cardNormalButton = document.getElementById('scrape-card-normal');
        const cardPremiumButton = document.getElementById('scrape-card-premium');
        const cardDeluxeButton = document.getElementById('scrape-card-deluxe');
        
        cardNormalButton.classList.remove('active');
        cardPremiumButton.classList.remove('active');
        cardDeluxeButton.classList.remove('active');
        
        if (type === 'normal') {
            cardNormalButton.classList.add('active');
        } else if (type === 'premium') {
            cardPremiumButton.classList.add('active');
        } else if (type === 'deluxe') {
            cardDeluxeButton.classList.add('active');
        }
    }
    
    // 购买卡片
    function buyCard() {
        if (!scrapeGameState.canBuy) return;
        
        const cardPrice = scrapeGameState.cardPrices[scrapeGameState.selectedCardType];
        
        // 检查金币是否足够
        if (window.goldAmount < cardPrice) {
            window.showInfoBox('金币不足，无法购买此刮刮卡！', null, null, 'red');
            return;
        }
        
        // 扣除金币并更新统计
        window.goldAmount -= cardPrice;
        scrapeGameState.stats.totalSpent += cardPrice;
        updateLotteryGoldDisplay();
        updateStats();
        
        // 准备刮刮卡
        prepareScratchCard();
    }
    
    // 准备刮刮卡
    function prepareScratchCard() {
        // 获取卡片元素
        const cardCover = document.getElementById('scrape-card-cover');
        const cardContent = document.getElementById('scrape-card-content');
        const prizeText = document.getElementById('scrape-prize-text');
        const prizeAmount = document.getElementById('scrape-prize-amount');
        const cardElement = document.getElementById('scrape-card');
        
        // 重置卡片状态
        scrapeGameState.isScratching = true;
        scrapeGameState.canBuy = false;
        
        // 设置卡片内容（还没被刮）
        prizeText.textContent = '试试手气！';
        prizeAmount.textContent = '???';
        prizeAmount.style.color = '#ff8c00';
        
        // 重置刮刮卡覆盖层
        cardCover.style.display = 'flex';
        cardCover.style.background = 'linear-gradient(135deg, #ff9900, #ffcc00, #ff9900)';
        cardCover.style.backgroundSize = '200% 200%';
        cardCover.innerHTML = '<span class="scrape-card-instruction">用鼠标刮开！</span>';
        
        // 移除之前可能的动画类
        cardContent.classList.remove('scrape-win-animation');
        
        // 生成奖品
        generatePrize();
        
        // 添加刮卡事件监听
        setupScratchEvents();
    }
    
    // 生成奖品
    function generatePrize() {
        let prizeData = {};
        const random = Math.random() * 100;
        
        switch (scrapeGameState.selectedCardType) {
            case 'normal':
                if (random < 45) { // 小奖
                    const prize = Math.floor(Math.random() * (900 - 450 + 1)) + 450;
                    prizeData = { text: '恭喜小奖！', amount: prize, type: 'small' };
                } else if (random < 55) { // 中奖
                    const prize = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
                    prizeData = { text: '恭喜中奖！', amount: prize, type: 'medium' };
                } else if (random < 58) { // 大奖
                    const prize = Math.floor(Math.random() * (8000 - 5000 + 1)) + 5000;
                    prizeData = { text: '恭喜大奖！', amount: prize, type: 'large' };
                } else if (random < 59) { // 顶级大奖
                    prizeData = { text: '顶级大奖！', amount: 10000, type: 'jackpot' };
                } else { // 未中奖
                    prizeData = { text: '很遗憾！', amount: 0, type: 'none' };
                }
                break;
                
            case 'premium':
                if (random < 50) { // 小奖
                    const prize = Math.floor(Math.random() * (3000 - 1500 + 1)) + 1500;
                    prizeData = { text: '恭喜小奖！', amount: prize, type: 'small' };
                } else if (random < 65) { // 中奖
                    const prize = Math.floor(Math.random() * (10000 - 4000 + 1)) + 4000;
                    prizeData = { text: '恭喜中奖！', amount: prize, type: 'medium' };
                } else if (random < 70) { // 大奖
                    const prize = Math.floor(Math.random() * (25000 - 15000 + 1)) + 15000;
                    prizeData = { text: '恭喜大奖！', amount: prize, type: 'large' };
                } else if (random < 72) { // 顶级大奖
                    prizeData = { text: '顶级大奖！', amount: 50000, type: 'jackpot' };
                } else { // 未中奖
                    prizeData = { text: '很遗憾！', amount: 0, type: 'none' };
                }
                break;
                
            case 'deluxe':
                if (random < 55) { // 小奖
                    const prize = Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000;
                    prizeData = { text: '恭喜小奖！', amount: prize, type: 'small' };
                } else if (random < 75) { // 中奖
                    const prize = Math.floor(Math.random() * (50000 - 20000 + 1)) + 20000;
                    prizeData = { text: '恭喜中奖！', amount: prize, type: 'medium' };
                } else if (random < 83) { // 大奖
                    const prize = Math.floor(Math.random() * (100000 - 60000 + 1)) + 60000;
                    prizeData = { text: '恭喜大奖！', amount: prize, type: 'large' };
                } else if (random < 86) { // 顶级大奖
                    prizeData = { text: '顶级大奖！', amount: 200000, type: 'jackpot' };
                } else { // 未中奖
                    prizeData = { text: '很遗憾！', amount: 0, type: 'none' };
                }
                break;
        }
        
        // 保存到状态
        scrapeGameState.currentPrize = prizeData;
    }
    
    // 设置刮卡事件
    function setupScratchEvents() {
        const cardCover = document.getElementById('scrape-card-cover');
        const cardContent = document.getElementById('scrape-card-content');
        const prizeText = document.getElementById('scrape-prize-text');
        const prizeAmount = document.getElementById('scrape-prize-amount');
        const cardElement = document.getElementById('scrape-card');
        
        let isScratching = false;
        let scratchProgress = 0;
        
        // 添加刮卡样式
        cardElement.classList.add('scrape-being-scratched');
        
        // 鼠标按下事件
        function handleMouseDown(e) {
            isScratching = true;
            scratchAt(e);
        }
        
        // 鼠标移动事件
        function handleMouseMove(e) {
            if (isScratching) {
                scratchAt(e);
            }
        }
        
        // 鼠标弹起事件
        function handleMouseUp() {
            isScratching = false;
            
            // 如果刮开了足够多，显示整个结果
            if (scratchProgress > 50) {
                revealFullCard();
            }
        }
        
        // 添加事件监听
        cardCover.addEventListener('mousedown', handleMouseDown);
        cardCover.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        
        // 刮卡功能
        function scratchAt(e) {
            const rect = cardCover.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // 创建径向渐变效果的透明区域
            const existingBg = window.getComputedStyle(cardCover).backgroundImage;
            cardCover.style.backgroundImage = `${existingBg}, radial-gradient(circle at ${x}px ${y}px, transparent 20px, rgba(255, 255, 255, 0.7) 21px)`;
            
            // 更新刮卡进度
            scratchProgress += 2;
            
            // 如果完成超过70%，自动揭示完整卡片
            if (scratchProgress >= 70) {
                revealFullCard();
            }
        }
        
        // 显示完整卡片
        function revealFullCard() {
            // 移除事件监听器
            cardCover.removeEventListener('mousedown', handleMouseDown);
            cardCover.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            
            cardCover.style.display = 'none';
            cardElement.classList.remove('scrape-being-scratched');
            
            // 显示奖品
            const prize = scrapeGameState.currentPrize;
            prizeText.textContent = prize.text;
            prizeAmount.textContent = prize.amount > 0 ? `+${prize.amount} 金币` : '未中奖';
            
            // 设置奖品样式
            if (prize.type === 'none') {
                prizeAmount.style.color = '#777';
            } else {
                prizeAmount.style.color = getPrizeColor(prize.type);
                cardContent.classList.add('scrape-win-animation');
                
                // 添加到中奖记录
                if (prize.amount > 0) {
                    addToHistory(prize);
                    scrapeGameState.stats.winCount++;
                    window.goldAmount += prize.amount;
                    updateLotteryGoldDisplay();
                    updateStats();
                }
            }
            
            // 重置状态
            setTimeout(() => {
                cardContent.classList.remove('scrape-win-animation');
                scrapeGameState.canBuy = true;
            }, 1500);
        }
    }
    
    // 获取奖品颜色
    function getPrizeColor(type) {
        switch (type) {
            case 'small': return '#4caf50';
            case 'medium': return '#2196f3';
            case 'large': return '#ff9800';
            case 'jackpot': return '#f44336';
            default: return '#777';
        }
    }
    
    // 添加到历史记录
    function addToHistory(prize) {
        // 获取历史记录元素
        const historyListElement = document.getElementById('scrape-history-list');
        
        // 创建新的历史记录项
        const newHistoryItem = {
            time: new Date(),
            cardType: scrapeGameState.selectedCardType,
            amount: prize.amount,
            type: prize.type
        };
        
        // 添加到历史记录数组前端
        scrapeGameState.history.unshift(newHistoryItem);
        
        // 最多保存10条记录
        if (scrapeGameState.history.length > 10) {
            scrapeGameState.history.pop();
        }
        
        // 更新历史记录显示
        updateHistoryDisplay();
    }
    
    // 更新历史记录显示
    function updateHistoryDisplay() {
        // 获取历史记录元素
        const historyListElement = document.getElementById('scrape-history-list');
        
        // 清空现有历史记录
        historyListElement.innerHTML = '';
        
        // 如果没有记录，显示提示
        if (scrapeGameState.history.length === 0) {
            historyListElement.innerHTML = '<div class="scrape-history-item">暂无中奖记录</div>';
            return;
        }
        
        // 添加每条历史记录
        scrapeGameState.history.forEach((item) => {
            const timeStr = formatTime(item.time);
            const cardTypeStr = getCardTypeName(item.cardType);
            
            const historyItem = document.createElement('div');
            historyItem.className = 'scrape-history-item';
            historyItem.innerHTML = `
                <span>${timeStr} - ${cardTypeStr}</span>
                <span class="scrape-history-amount" style="color: ${getPrizeColor(item.type)}">+${item.amount}</span>
            `;
            
            historyListElement.appendChild(historyItem);
        });
    }
    
    // 格式化时间
    function formatTime(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    
    // 获取卡片类型名称
    function getCardTypeName(type) {
        switch (type) {
            case 'normal': return '普通卡';
            case 'premium': return '高级卡';
            case 'deluxe': return '豪华卡';
            default: return '未知卡片';
        }
    }
    
    // 显示规则
    function showRules() {
        // 游戏规则内容
        const rulesContent = "...游戏规则内容..."; // 为简洁省略具体内容
        window.showInfoBox(rulesContent, null, null, 'black');
    }
    
// 重置统计数据
    function resetStats() {
        window.showInfoBox(
            '确定要重置所有统计数据吗？历史记录将被清空。', 
            function() {
                scrapeGameState.stats = {
                    totalSpent: 0,
                    winCount: 0
                };
                scrapeGameState.history = [];
                
                updateStats();
                updateHistoryDisplay();
                
                window.showInfoBox("统计数据已重置！", null, null, 'green');
            }, 
            function() {
                // 取消操作
            }, 
            'black'
        );
    }
    
    // 更新统计显示
    function updateStats() {
        const winCountElement = document.getElementById('scrape-win-count');
        const totalSpentElement = document.getElementById('scrape-total-spent');
        
        winCountElement.textContent = `中奖次数: ${scrapeGameState.stats.winCount}`;
        totalSpentElement.textContent = `总花费: ${scrapeGameState.stats.totalSpent}`;
    }
    
    // 更新金币显示
    function updateLotteryGoldDisplay() {
        const goldAmountElement = document.getElementById('scrape-gold-amount');
        
        // 确保goldAmount是定义的
        if (typeof window.goldAmount === 'undefined') {
            window.goldAmount = 0;
        }
        
        // 更新显示
        goldAmountElement.textContent = window.goldAmount;
        
        // 如果有全局更新函数，也调用它
        if (typeof window.updateLotteryGoldDisplay === 'function') {
            window.updateLotteryGoldDisplay(window.goldAmount);
        }
    }
    
    // 暴露切换抽屉的函数到全局
    window.toggleScrapeDrawer = function() {
        const content = document.getElementById('scrape-content-container');
        content.classList.toggle('open');
    };
    
    // 在DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrapeGame);
    } else {
        initScrapeGame();
    }
    
    // 暴露重置函数到全局，方便主游戏调用
    window.resetScrapeGame = function() {
        scrapeGameState.stats = {
            totalSpent: 0,
            winCount: 0
        };
        scrapeGameState.history = [];
        
        updateStats();
        updateHistoryDisplay();
    };
})();
