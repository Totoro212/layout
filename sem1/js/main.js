const btn = document.querySelector('.header-main__bottom-btn')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
btn.addEventListener('click', function(e){
  modal.classList.add('active')
})
close.addEventListener('click', function(e){
  modal.classList.remove('active')
})



const user_name = document.querySelector('#user_name');
const user_phone = document.querySelector('#user_phone')
const user_email = document.querySelector('#user_email')
const modal__btn = document.querySelector('.modal__form-btn')
const user_text = document.querySelector('#user_text')
let metka = true;
let metka_num = true;
modal__btn.addEventListener('click', function(e){
  if (user_name.value=="" || user_phone.value=="" || user_email.value=="") {
        alert("Ошибка: все поля должны быть заполнены");
        return;
    }


  for (let i = 0; i < user_name.value.length; i++) {
      if (!(user_name.value[i] >= 'A' && user_name.value[i] <= 'Z') && !(user_name.value[i] >= 'a' && user_name.value[i] <= 'z')) {
          metka = false;
          alert("Ошибка: в имени могут быть только буквы");
          break;z
      }
      else{
        metka = true;
      }}
  const phonePattern = /^[0-9]{10,15}$/;
  if (!phonePattern.test(user_phone.value)) {
      metka_num = false;
      alert("Ошибка: введите корректный телефонный номер");
  }
  else{
    metka_num = true;
  }

  if (metka == true && metka_num == true)
  {
    user_name.value = "";
    user_email.value = "";
    user_phone.value = "";
    user_text.value = "";
    alert("ваши данные отправленны")
  }
  
})