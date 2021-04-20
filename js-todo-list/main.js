// TO DO
document.addEventListener('DOMContentLoaded', function(){
  
  //選取
  document.querySelectorAll('li').forEach(function(item){
    item.addEventListener('click', function(e){
      e.target.classList.toggle('checked');
      //this.classList.toggle('checked');
    });
  })
  //刪除
  document.querySelectorAll('.close').forEach(function(item){
    item.addEventListener('click', function(e){
      e.target.parentElement.remove()
      //選span-close的上一層
    });
  })

  //增加???
  document.getElementById('addBtn').addEventListener('click',function(){
    let newin = document.querySelector('input').value;

    document.querySelector('ul').appendChild(addli(newin));
    
    //清空輸入欄
    
    document.querySelector('input').value ='';

  })

  function addli(newinput){
    let newli = document.createElement('li');
    let newspan = document.createElement('span');
    newli.textContent = newinput;

    newspan.classList.add('close');
    newspan.textContent = 'x';
    newli.appendChild(newspan);

    //出生的時候就有事件
    newli.addEventListener('click', function(e){
      e.target.classList.toggle('checked');
    })
    newspan.addEventListener('click', function(e){
      e.target.parentElement.remove();
    })
    
    return newli;
  }
})