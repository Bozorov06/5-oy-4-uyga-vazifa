// ================================================================================================================================
// 1. Rasm galereyasini yaratish
// Vazifa: Sahifada bir nechta bo‘sh kvadratlar (div) bo‘lsin. Har bir kvadrat ustiga "Rasm qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi rasm (img elementi) kvadratning ichiga qo‘shilsin. Kvadrat ichida avvaldan rasm bo‘lsa, o‘sha rasmni o‘chirib, yangisini qo‘shsin.
// Ishlatiladigan mavzular: createElement, append, removeChild, classList.toggle.

// const buttons=document.querySelectorAll('.btn');
// const square=document.querySelectorAll('.square')
// buttons.forEach((button,index)=>{
//     button.addEventListener('click',function(){
//         const image=document.createElement('img');
//         image.setAttribute("src", "https://picsum.photos/seed/picsum321/223/300");
//         image.setAttribute('alt','new image')
//           image.style.maxWidth = "100%";
//           image.style.maxHeight = "100%";
//         square[index].append(image)
//     })
// })



// // ================================================================================================================================
// // 2. Uy elementlarini topish
// // Vazifa: HTML sahifasida daraxt shaklidagi tuzilma (ul, li) berilgan bo‘lsin. Foydalanuvchi har bir element ustiga bosganda, o‘sha elementning:
// // Ota elementi (parentNode),
// // Oldingi qoshni elementi (previousSibling),
// // Keyingi qoshni elementi (nextSibling),
// // Ichidagi barcha bolalari (childNodes) chiqarilsin (matn yoki alert orqali).
// // Ishlatiladigan mavzular: parentNode, siblings, childNodes.

// const items = document.querySelectorAll('#list li')

// items && items.forEach(item=>{
//    item && item.addEventListener('click', function(){
//     console.log("parent", this.parentNode);
//     console.log("prev sibling", this.previousElementSibling);
//     console.log("next sibling", this.nextElementSibling);
//    })
//    console.log("child", this.childNodes);
// })


// // ================================================================================================================================
// // 3. Sahifadagi elementlarni almashish
// // Vazifa: Sahifada ikkita kvadrat (div) bo‘lsin. Har bir kvadrat ichida matn yozilgan bo‘lsin. Foydalanuvchi tugma bosganda, ushbu kvadratlarning o‘z ichidagi matnlari almashib qolsin.
// // Ishlatiladigan mavzular: parentNode, appendChild, before, after.

// const card1 = document.getElementById('card1')
// const card2 = document.getElementById("card2");
// const btn = document.getElementById('btn')
// btn && btn.addEventListener('click', function(){
//     let temp;
//     temp=card1.innerHTML
//     card1.innerHTML = card2.innerHTML
//      card2.innerHTML=temp
// })
// // ================================================================================================================================
// // 4. "Qizil tugmalar" o‘yini
// // Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har safar foydalanuvchi sahifaga kirganda, tugmalardan biriga avtomatik ravishda "qizil" klassi qo‘shiladi. Foydalanuvchi boshqa tugmalarni bosganda, yangi tugmaga "qizil" klassi o‘tadi, avvalgisi esa "qizil" klassini yo‘qotadi.
// // Ishlatiladigan mavzular: classList.add, classList.remove, classList.contains.

// const buttons = document.querySelectorAll(".button")
//         buttons[0].classList.add("qizil");
//  buttons.forEach((button) => {
//    button.addEventListener("click", function () {
//      buttons.forEach((value) => value.classList.remove("qizil"));
//      this.classList.add("qizil");
//    });
//  });





// // ================================================================================================================================
// // 5. Maqolani o‘zgartirish
// // Vazifa: Sahifada bir nechta paragraflar va bitta "Yangi paragraf qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi paragraf qo‘shilsin va u maqolaning oxiriga yoki boshiga joylashtirilsin (foydalanuvchi oldindan tanlaydi).
// // Ishlatiladigan mavzular: createElement, append, prepend.

// const card = document.getElementById('card')
// const btn = document.getElementById("btn");
// btn && btn.addEventListener('click',function(){
//     this.parentElement.innerHTML = 'qandaydir matn'
//     if (this.checkVisibility.checked) {
//         card.prepend(p)
//     }else{
//         card.append(p)
//     }
// })



// // ================================================================================================================================
// // 6. Tugmalar bilan rang o‘zgartirish
// // Vazifa: Sahifada bir nechta rangli kvadratlar bo‘lsin. Har bir kvadratning tagida "Chapga qo‘shish" va "O‘ngga qo‘shish" tugmalari joylashtiriladi. Tugma bosilganda kvadratning chap yoki o‘ng tomoniga yangi kvadrat qo‘shilsin.
// // Ishlatiladigan mavzular: createElement, before, after, classList.add.


// const card = document.getElementById('card')
// const buttons = document.querySelectorAll('button')

// buttons.length>0 && buttons.forEach(button=>{
//     button&&button.addEventListener('click',function(){
//         let block = document.createElement('div')
//         block.style.width = '200px'
//         block.style.height = "200px";
//         block.style.marginLeft='20px'
//         block.style.display = "inline-block";
//         block.style.backgroundColor = "blue";
//         if (this.innerHTML == 'left') {
//             card.before(block)
//         }else{
//             card.after(block);
//         }
//     })
// })


// // ================================================================================================================================


// const hideButtons = document.querySelectorAll('.hide')
// const show = document.querySelector('#show')
// const mainButtons = document.querySelectorAll('.main')

// hideButtons.length && hideButtons.forEach(hide=>{
//    hide && hide.addEventListener('click', function(){
//     this.previousElementSibling.style.display = 'none'
//    })
// })

// show && show.addEventListener('click', function(){
//     mainButtons.style.display= 'inline'
// })


// // ================================================================================================================================
// // 8. Elementlarni qirqish va qayta joylashtirish
// // Vazifa: Sahifada bir nechta matnli elementlar (p) va "Kesish" tugmasi bo‘lsin. Foydalanuvchi biror matnni tanlab, uning yonidagi "Kesish" tugmasini bossa, o‘sha matn kesilib, boshqa bir bo‘sh joyga (kvadrat) o‘tkazilsin.
// // Ishlatiladigan mavzular: removeChild, appendChild.

//   const buttons = document.querySelectorAll(".btn");

//   buttons.forEach((btn) => {
//     btn && btn.addEventListener("click", function () {
//       const p = this.parentElement;
//       const Text = window.getSelection().toString(); 

//       if (selectedText) {
//         const yangiP = document.createElement("p");
//         yangiP.textContent = Text;
//         document.getElementsByClassName("square").appendChild(yangiP);
//         p.textContent = p.textContent.replace(Text, "");
//       }
//     });
//   });






// // ================================================================================================================================
// // 9. Rang tanlash
// // Vazifa: Sahifada bir nechta rang tugmalari bo‘lsin (masalan, "qizil", "ko‘k", "yashil"). Foydalanuvchi rang tugmalaridan birini bossa, asosiy blokning (katta kvadratning) foni tanlangan rangga o‘zgaradi. Tanlangan tugmaga "faol" klassi qo‘shilsin.
// // Ishlatiladigan mavzular: classList.add, classList.contains, style.backgroundColor.

//   const Buttons = document.querySelectorAll(".button");
//   const mainBlock = document.getElementById("main");
//   colorButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       Buttons.forEach((value) => value.classList.remove("clas"));
//       this.classList.add("clas");
//       mainBlock.style.backgroundColor = this.getAttribute("color");
//     });
//   });





// // ================================================================================================================================
// // 10. O‘chiriladigan ro‘yxat
// // Vazifa: Sahifada ul ro‘yxati va "Yangi element qo‘shish" tugmasi bo‘lsin. Har bir ro‘yxat elementida "O‘chirish" tugmasi bo‘lsin. Foydalanuvchi yangi element qo‘shganda, u ro‘yxatning oxiriga qo‘shiladi. O‘chirish tugmasi bosilganda, tegishli element ro‘yxatdan o‘chiriladi.
// // Ishlatiladigan mavzular: createElement, remove, append.

// // ================================================================================================================================
// // 11. "Ko‘rinadigan va Yashirin" elementlar
// // Vazifa: Sahifada bir nechta blok (div) elementlari bo‘lsin. Ularning barchasi ko‘rinadigan holatda bo‘lsin. Har bir blok yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda blok yashiringan bo‘lsin (display: none; usuli orqali). Sahifaning pastida "Hammasini ko‘rsatish" tugmasi bo‘lsin, bu barcha yashirilgan bloklarni qayta ko‘rsatadi.
// // Ishlatiladigan mavzular: style, classList.toggle, classList.add.


//  const hides = document.querySelectorAll(".hide");
//  const blocks = document.querySelectorAll(".block"); 
//  const show = document.getElementById("show");

 
//  hides.forEach((button, index) => {
//    button.addEventListener("click", () => {
//      blocks[index].style.display = "none"; 
//    });
//  });


//  show.addEventListener("click", () => {
//    blocks.forEach((block) => {
//      block.style.display = "block"; 
//    });
//  });





// // ================================================================================================================================
// // 12. Karta o‘yinlarini almashtirish
// // Vazifa: Sahifada bir nechta rangli kvadratlar (div) bo‘lsin. Har bir kvadratni boshqa kvadrat bilan almashtirish tugmasi bo‘lsin. Tugma bosilganda, o‘sha kvadrat boshqa tanlangan kvadrat bilan joylarini almashtirsin (ularni DOM ichida joylashtirish tartibi o‘zgaradi).
// // Ishlatiladigan mavzular: parentNode, replaceChild, appendChild.

// const container = document.getElementById("container");
// const swapButtons = document.querySelectorAll(".swapButton");

// swapButtons.forEach((button) => {
//   button.addEventListener("click", function () {
//     const square1 = this.parentNode;
//     let square2 = square1.nextElementSibling;
//     if (!square2) {
//       square2 = square1.previousElementSibling;
//     }

//     swapSquares(square1, square2);
//   });
// });

// function swapSquares(square1, square2) {
//   const parent = square1.parentNode;
//   parent.replaceChild(square2, square1);
//   parent.appendChild(square1);
// }

// // ================================================================================================================================
// // 13. Matn uzunligini ko‘rsatish
// // Vazifa: Sahifada bir nechta matn bo‘laklari (p) bo‘lsin. Har bir matnning yonida "Uzunligini ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda, matn uzunligi (belgilar soni) alert orqali foydalanuvchiga ko‘rsatiladi. Matn uzunligini ko‘rsatgandan so‘ng, "Qisqartirish" tugmasi paydo bo‘lib, u matnni kesib, oxiriga ... qo‘shadi.
// // Ishlatiladigan mavzular: textContent, createElement, remove.


// // ================================================================================================================================
// // 14. To‘plangan ballar hisoblagichi
// // Vazifa: Sahifada bir nechta div elementlar bo‘lsin, ular ustida "Ball qo‘shish" tugmasi bo‘lsin. Har safar tugma bosilganda, blok ichidagi matn sifatida 1 ball qo‘shiladi (0 dan boshlanadi). Foydalanuvchi sahifada qancha ball to‘plaganini hisoblash uchun pastda umumiy ball ko‘rsatadigan alohida blok bo‘lsin.
// // Ishlatiladigan mavzular: textContent, classList.add, classList.contains.

// let totalPoints = 0;
// document.querySelectorAll('.addscore').forEach(button =>{
//   button.addEventListener('click', function(){
//     const score = this.previousElementSibling
//     let currentScore = parseInt(score.textContent);
//     currentScore++
//     score.textContent = currentScore
//     totalPoints++
//     document.getElementById('totalPoint').textContent = totalPoints
//   })
// })





// ================================================================================================================================
// 15. Elementlarni tartiblash
// Vazifa: Sahifada bir nechta elementlar (matnli bloklar) bo‘lsin. Har bir element yonida "Yuqoriga" va "Pastga" tugmalari bo‘lsin. Tugmalar yordamida foydalanuvchi elementlarni yuqoriga yoki pastga surib tartibini o‘zgartira olsin.
// Ishlatiladigan mavzular: parentNode, before, after.


// document.getElementById("itemsContainer").addEventListener("click", function (event){
//     const button = event.target;
//     if (button.tagName === "BUTTON") {
//       const item = button.closest(".item");
//       const parent = item.parentNode;
//       if (button.classList.contains("moveUp") && item.previousElementSibling) {
//         parent.insertBefore(item, item.previousElementSibling);
//       }
//       if (button.classList.contains("moveDown") && item.nextElementSibling) {
//         parent.insertBefore(item, item.nextElementSibling.nextElementSibling);
//       }
//     }
//   });