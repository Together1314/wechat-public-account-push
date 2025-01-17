/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx60fa11bec95c83d6',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'da3e95bae2c250763303dc618df2b7b1',


  

  USERS: [
    {
      // 想要发送的人的名字
      name: '黄黄宝贝',
      //PROVINCE: '河北',
      //CITY: '邯郸',
       // 所在省份
      province: '河北',
      // 所在城市
      city: '邯郸',
      openUrl: 'http://chishenme.xyz/',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofX4j53NOmcUf0C2tERyIb75D7IY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '5lYnVfRhf60dFWethCU6P0m5FAxF25pEmKxNOkJ7G6o',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '黄宝贝', year: '2001', date: '09-10',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '韩臭臭', year: '2001', date: '11-15',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2020', date: '04-25',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-04-25' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '韩韩宝贝',
      //PROVINCE: '北京',
      //CITY: '东城区',
       // 所在省份
      province: '北京',
      // 所在城市
      city: '东城区',
      openUrl: 'http://chishenme.xyz/',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofX4j50PN_n5pd2GLAIbnLRqGoVY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '5lYnVfRhf60dFWethCU6P0m5FAxF25pEmKxNOkJ7G6o',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '黄宝贝', year: '2001', date: '09-10',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '韩臭臭', year: '2001', date: '11-15',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2020', date: '04-25',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-04-25' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '5lYnVfRhf60dFWethCU6P0m5FAxF25pEmKxNOkJ7G6o',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

