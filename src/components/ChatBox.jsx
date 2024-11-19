import { useEffect } from 'react';

const ChatBox = () => {
  useEffect(() => {
    window.chatwootSettings = {
      position: 'right',
      type: 'standard',
      launcherTitle: 'Trò chuyện với chúng tôi',
    };

    const script = document.createElement('script');
    script.src = 'https://app.ahaspot.com/packs/js/sdk.js';
    script.async = true;
    script.defer = true;

    // Khi script load xong, gọi hàm khởi chạy Chatwoot
    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: process.env.REACT_APP_URL_CHATBOX_TOKEN,
          baseUrl: 'https://app.ahaspot.com',
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatBox;
