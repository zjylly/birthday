// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",
        "心爱的小可爱",
        "李似三月的风",
        "凌近春分之时吹拂我心",
        "云卷云舒 晨昏更替",
        "我愿意陪你一同经历",
        "中途是有风风雨雨",
        "意然牵住彼此的手不放弃",
        "你是否愿意",
        "这是我陪你过的第一个生日",
        "你的过去我未能参与",
        "你的未来我不能缺席",
        "你说我欠你一个表白",
        "今天连同生日祝福一并送上",
        "愿你贪吃不胖",
        "愿你懒惰不丑",
        "愿你永远健康美丽依旧",
        "愿你开心快乐童真无邪",
        "若这一切太难",
        "我愿守你一世单纯",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式1
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/bg.jpg",
        "心爱的小可爱": "./imgs/bg.jpg",
        "李似三月的风": "./imgs/bg.jpg",
        "凌近春分之时吹拂我心": "./imgs/bg.jpg",
        "云卷云舒 晨昏更替": "./imgs/bg.jpg",
        "我愿意陪你一同经历": "./imgs/bg.jpg",
        "中途是有风风雨雨": "./imgs/bg.jpg",
        "意然牵住彼此的手不放弃": "./imgs/bg.jpg",
        "你是否愿意": "./imgs/bg.jpg",
        "这是我陪你过的第一个生日": "./imgs/bg.jpg",
        "你的过去我未能参与": "./imgs/bg.jpg",
        "你的未来我不能缺席": "./imgs/bg.jpg",
        "你说我欠你一个表白": "./imgs/bg.jpg",
        "今天连同生日祝福一并送上": "./imgs/bg.jpg",
        "愿你贪吃不胖": "./imgs/bg.jpg",
        "愿你懒惰不丑": "./imgs/bg.jpg",
        "愿你永远健康美丽依旧": "./imgs/bg.jpg",
        "愿你开心快乐童真无邪": "./imgs/bg.jpg",
        "若这一切太难": "./imgs/bg.jpg",
        "我愿守你一世单纯": "./imgs/bg.jpg"
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "背景",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
