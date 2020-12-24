import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';

export default {
  success() {
    PNotify.success({
      text: 'Успех',
    });
  },

  notice() {
    PNotify.notice({
      text: 'Выбери страну',
    });
  },

  error(textContent) {
    PNotify.error({
      text: textContent,
    });
  },
};
