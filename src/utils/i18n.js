import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import zhTw from '@/assets/i18n/zh_Tw.json';

const resources = {
  zh: {
    translation: zhTw,
  },
};

i18n.use(initReactI18next).init({
  resources, // 會是所有翻譯資源
  fallbackLng: 'zh', // 如果當前切換的語言沒有對應的翻譯則使用這個語言
  lng: 'zh', // 預設語言
  interpolation: {
    // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
    escapeValue: false,
  },
  react: {
    wait: true, // 等待翻譯完成才會 render 畫面
  },
});

export default i18n;
