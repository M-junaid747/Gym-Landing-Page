document.addEventListener('DOMContentLoaded', ()=> {
const starsUL = document.querySelector(".stars");
        const output = document.querySelector(".output");
        const stars = document.querySelectorAll(".star");
        stars.forEach((star, index) => {
            star.starValue = index + 1;
            star.addEventListener("click", starRate);
        });
        function starRate(e) {
            output.innerHTML = `You Rated ${e.target.starValue} stars`;
            stars.forEach((star, index) => {
                if (index < e.target.starValue) {
                    star.classList.add("orange");
                } else {
                    star.classList.remove("orange");
                }
            });
        }
    });


document.addEventListener('DOMContentLoaded', ()=> {
    window.onload=build;
      const myArray = ["Junaid"];
      const message = document.getElementById("message");
      const addNew = document.getElementById("addNew");
      const newInput = document.getElementById("addFriend");
      const output = document.getElementById("output");
      addNew.onclick = function () {
        const newFriend = newInput.value;
        adder(newFriend, myArray.length, 0);
        myArray.push(newFriend);
      };
      function build() {
        myArray.forEach((item, index) => {
          adder(item, index, 0);
        });
      }
      function adder(name, index, counter) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.classList.add("box");
        td1.textContent = index + 1;
        const td2 = document.createElement("td");
        td2.textContent = name;
        const td3 = document.createElement("td");
        td3.textContent = counter;
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.onclick = function () {
          console.log(tr.lastChild);
          let val = Number(tr.lastChild.textContent);
          val++;
          tr.lastChild.textContent = val;
        };
        output.appendChild(tr);
      }
    });

    window.addEventListener('DOMContentLoaded', (event)=> {
      
      const e1= document.getElementById('e1');

      e1.addEventListener('mouseenter', ()=> {
        e1.classList.add('highlight');
      });

      
      e1.addEventListener('mouseleave', ()=> {
        e1.classList.remove('highlight');
      });

      const e2= document.getElementById('e2');

      e2.addEventListener('mouseenter', ()=> {
        e2.classList.add('highlight');
      });

      
      e2.addEventListener('mouseleave', ()=> {
        e2.classList.remove('highlight');
      });

      const e3= document.getElementById('e3');

      e3.addEventListener('mouseenter', ()=> {
        e3.classList.add('highlight');
      });

      
      e3.addEventListener('mouseleave', ()=> {
        e3.classList.remove('highlight');
      });

      const e4= document.getElementById('e4');

      e4.addEventListener('mouseenter', ()=> {
        e4.classList.add('highlight');
      });

      
      e4.addEventListener('mouseleave', ()=> {
        e4.classList.remove('highlight');
      });
    });

    document.addEventListener('DOMContentLoaded', ()=> {
    const menus = document.querySelectorAll(".title");
      const openText = document.querySelectorAll(".myText");
      menus.forEach((el) => {
        el.addEventListener("click", (e) => {
          console.log(el.nextElementSibling);
          remover();
          el.nextElementSibling.classList.toggle("active");
        });
      });
      function remover() {
        openText.forEach((ele) => {
          ele.classList.remove("active");
        });
      }
    })
