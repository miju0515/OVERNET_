
var wordlist = document.getElementById('wordlist');
  var defaultlist = document.getElementById('defaultWord');

  function clickword(t){
    var text = t.innerText;
    
    defaultlist.style.display='none';
    wordlist.style.display='block';

    var wordname = document.getElementById('wordname');
    wordname.innerText=text;

    var wordimg = document.getElementById('word_img');
    wordimg.src=text+'.png';


    console.log(text);
  }

  function closeword(){
    defaultlist.style.display='block';
    wordlist.style.display='none';
  }