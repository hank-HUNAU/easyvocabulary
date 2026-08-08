// 丛书配置 - 词汇1000/2000/4000
// 每本书的数据文件在 data/ 目录下，按需 fetch 加载

const BOOKS = [
  // 词汇1000
  {id:'1000BEW1', series:'词汇1000', title:'Book 1', dataFile:'data/1000BEW1.json', audioDir:'1000BEW1_audio', available:true},
  {id:'1000BEW2', series:'词汇1000', title:'Book 2', dataFile:'data/1000BEW2.json', audioDir:'1000BEW2_audio', available:true},
  {id:'1000BEW3', series:'词汇1000', title:'Book 3', dataFile:'data/1000BEW3.json', audioDir:'1000BEW3_audio', available:true},
  {id:'1000BEW4', series:'词汇1000', title:'Book 4', dataFile:'data/1000BEW4.json', audioDir:'1000BEW4_audio', available:true},
  // 词汇2000
  {id:'2000CEW1', series:'词汇2000', title:'Book 1', dataFile:'data/2000CEW1.json', audioDir:'2000CEW1_audio', available:false},
  {id:'2000CEW2', series:'词汇2000', title:'Book 2', dataFile:'data/2000CEW2.json', audioDir:'2000CEW2_audio', available:false},
  {id:'2000CEW3', series:'词汇2000', title:'Book 3', dataFile:'data/2000CEW3.json', audioDir:'2000CEW3_audio', available:false},
  {id:'2000CEW4', series:'词汇2000', title:'Book 4', dataFile:'data/2000CEW4.json', audioDir:'2000CEW4_audio', available:false},
  // 词汇4000
  {id:'4000EEW1', series:'词汇4000', title:'Book 1', dataFile:'data/4000EEW1.json', audioDir:'4000EEW1_audio', available:true},
  {id:'4000EEW2', series:'词汇4000', title:'Book 2', dataFile:'data/4000EEW2.json', audioDir:'4000EEW2_audio', available:true},
  {id:'4000EEW3', series:'词汇4000', title:'Book 3', dataFile:'data/4000EEW3.json', audioDir:'4000EEW3_audio', available:true},
  {id:'4000EEW4', series:'词汇4000', title:'Book 4', dataFile:'data/4000EEW4.json', audioDir:'4000EEW4_audio', available:true},
  {id:'4000EEW5', series:'词汇4000', title:'Book 5', dataFile:'data/4000EEW5.json', audioDir:'4000EEW5_audio', available:true},
  {id:'4000EEW6', series:'词汇4000', title:'Book 6', dataFile:'data/4000EEW6.json', audioDir:'4000EEW6_audio', available:true},
];

const SERIES_ORDER = ['词汇1000', '词汇2000', '词汇4000'];
