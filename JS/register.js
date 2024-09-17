//评论区输入框

const tx = document.querySelector('.remima')
const total = document.querySelector('.zhiti')
//当文本域获得焦点时，显示底部透明度为0的盒子
tx.addEventListener('focus', function () {
  total.style.opacity = 1
})
//失去焦点，隐藏
tx.addEventListener('blur', function () {
  total.style.opacity = 0
})
//检查用户输入
tx.addEventListener('input', function () {
  //覆盖原有文本：innerHTML（支持HTML标签）innerText（不支持）
  total.innerHTML = `${tx.value.length}/200字`  //  ``可将${}DOM转换出来
  //tx.value 获取input标签，内用输入的属性值；.length 长度
})