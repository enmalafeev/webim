import Model from './model';
import View from './view'

(async () => {
  try {
    const header = document.querySelector('#header');
    await Model.login(6907858, 2);
    const [me] = await Model.getUser({ name_case: 'gen' });

    header.innerHTML = View.render('header', me);
  } catch (e) {
    console.log(e);
    alert('Ошибка: ' + e.message);
  }
})();