let counter = 0;
        function count(){
            counter+=1
            document.querySelector('h1').innerHTML = counter
            if (counter % 10 ===0){
                alert(`The counter value now  is ${counter}`)
            }
            }

        document.addEventListener('DOMContentLoaded',function(){
            document.querySelector('button').onclick = count;
        })    