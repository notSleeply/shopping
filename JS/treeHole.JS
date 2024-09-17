/*-----------------下拉菜单----------------------------- */
// 光标经过变红
const H4 = document.querySelectorAll('.h4');
const Ulsonli = document.querySelectorAll('.ulsonli');
let changeColor = (ev) => {
  for (let i = 0; i < ev.length; i++) {
    ev[i].onmousemove = function () {
      ev[i].style.backgroundColor = '#f43b47';
    }
    ev[i].onmouseout = function () {
      // 这里属性值若添加属性，h4的背景色会覆盖掉nav的圆角效果，
      ev[i].style.backgroundColor = '';
    }
  }
}
// 鼠标经过显示子盒子，下拉菜单
changeColor(H4);
changeColor(Ulsonli);
const navli = document.querySelectorAll('.navli');
const Ulson = document.querySelectorAll('.ulson');
for (let i = 0; i < navli.length; i++) {
  navli[i].onmouseover = () => {
    Ulson[i].style.display = 'block';
  }
  navli[i].onmouseout = () => {
    Ulson[i].style.display = 'none';
  }
}

/*---------------------按钮转换背景------------------------- */

document.querySelector("#switch_input").addEventListener("click",
  () => {
    // document.body 指向 <body> 标签，.classList 是一个用于操作元素类的属性。
    // .toggle("dark") 方法用于切换类名。如果 <body> 元素当前有 "dark" 类，则移除它；如果没有，则添加它。
    document.body.classList.toggle("dark");
  })

/* ----------------进度条------------------ */

// 父元素 条长 
const fa = document.querySelector('#fa');
// 子元素 进度条长
const son = document.querySelector('#son');
// 百分比数值
const inp = document.querySelector('#inp');

// 定时器 更新百分比数值
setInterval(() => {
  // 计算子元素宽度与父元素宽度的比例，转换为整数百分比形式
  const num = `${parseInt(son.clientWidth / fa.clientWidth * 100)}%`;
  // 将计算出的百分比更新到输入框的值中
  inp.value = num;
}, 300)


/* ----------------图像拖拽------------------ */

// 拖拽时，穿送数据
let drag = (ev) => {
  ev.dataTransfer.setData("Text", ev.target.id);
}
// 拖拽到目标元素时，触发drop事件
let drop = (ev) => {
  let data = ev.dataTransfer.getData("Text");
  //用id时要 #
  let pData = document.querySelector("#" + data);
  ev.target.appendChild(pData);
}
//阻止默认行为
let dragover = (ev) => {
  ev.preventDefault();
}

/* ----------------无缝滚动图片轮播------------------ */

// 无缝滚动图
let oUI = document.querySelector('.oUI');
let aLi = document.querySelectorAll('.aLi');
let aBu = document.querySelectorAll('.bu');
// 定义速度
let speed = -2;
// 复制自己，使其可以无限循环
oUI.innerHTML += oUI.innerHTML;
// 加宽
oUI.style.width = oUI.offsetWidth * 2 + 'px';
// 运动函数
let move = () => {
  if (oUI.offsetLeft < -oUI.offsetWidth / 2) {
    oUI.style.left = '0';
  }
  if (oUI.offsetLeft > 0) {
    oUI.style.left = -oUI.offsetWidth / 2 + 'px';
  }
  oUI.style.left = oUI.offsetLeft + speed + 'px';
}
// 定时器
let timer = setInterval(move, 30);
oUI.addEventListener('mouseover', () => {
  clearInterval(timer);
})
oUI.addEventListener('mouseout', () => {
  // 打开时，先停，在开（防止BUG）
  clearInterval(timer);
  timer = setInterval(move, 30);
})

// 按钮
aBu[0].addEventListener('click', () => {
  speed = -2;
})
aBu[1].addEventListener('click', () => {
  speed = 2;
})