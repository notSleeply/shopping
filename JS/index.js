//用与隐藏盒子
const yincang = document.querySelector('.yincang')
const shopcar = document.querySelector('.shopcar')
shopcar.addEventListener('click', function () {
  yincang.classList.remove("hidden")
  yincang.style.marginTop = '15px'  //更改CSS属性值：对象.style.CSS属性='属性值'
})
shopcar.addEventListener("mouseleave", function () {
  // 隐藏盒子2
  yincang.classList.add("hidden");
  yincang.style.marginTop = '-15px' //当CSS属性有 - 时，要采用小驼峰
})


//定时轮播图

//轮播数据  对象数组
const sliderData = [
  { url: './Upload/IMG_0641.JPG' },
  { url: './Upload/IMG_0642.JPG' },
  { url: './Upload/IMG_0643.JPG' },
  { url: './Upload/IMG_0644.JPG' },
  { url: './Upload/IMG_0645.JPG' },
  { url: './Upload/IMG_0645.JPG' },
  { url: './Upload/IMG_0646.JPG' },
  { url: './Upload/IMG_0647.JPG' }]

//获取图片
const img = document.querySelector('.Focus img')
let i = 0 //需要++ 所是变量

//自动执行函数   函数,时间毫秒
let timerIs = setInterval(function () {   //赋值到变量，方便函数引用实参
  i++  //实现轮播
  if (i >= sliderData.length) { i = 0 }//无缝滚动 当i走到末尾时，再重新回头
  img.src = sliderData[i].url //更换图片
}, 1000)

const Focus = document.querySelector('.Focus')
//当鼠标经过时，停止定时器
Focus.addEventListener('mouseenter', function () {
  clearInterval(timerIs)   //停止事件，实参：所停止的事件变量       
})

//当鼠标离开时，打开定时器
Focus.addEventListener('mouseleave', function () {
  clearInterval(timerIs)  //这行代码可以不写，留下防止BUG
  //开启定时器 将自动执行函数内的代码重新一遍
  timerIs = setInterval(function () {
    i++
    if (i >= sliderData.length) { i = 0 }
    img.src = sliderData[i].url
  }, 1000)
})













