import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import clsx from 'clsx';
import BotAvatar from '../../assets/icons/common-icons/bot-avatar.svg';
import UserAvatar from '../../assets/icons/common-icons/user-avatar.svg';

interface ChatBotWidgetProps {
  isBot?: boolean;
}

const ChatBotWidget = ({ isBot = false }: ChatBotWidgetProps) => {
  //Constants
  const { t } = useTranslation(['english']);

  /**
  This Use Effect is used to access the JS and the CSS file which then renders the Chat Bot
 */
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './chat/index.js';
    script.async = true;
    const link = document.createElement('link');
    link.href = './chat/index.css';
    link.rel = 'stylesheet';
    document.body.appendChild(script);
    document.body.appendChild(link);
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(link);
    };
  }, []);

  //Methods
  const getChatBotBody = () => {
    return (
      <Box
        className={clsx({
          ['bot-container']: isBot,
          ['full-screen-bot-container']: !isBot
        })}
      >
        <div
          className="chat_bot_widget"
          data-subreddit="javascript"
          data-botavatar={BotAvatar}
          data-useravatar={UserAvatar}
          data-endpointurl="https://iterm-v2-dev.indexnine.com/iterm/v2/tenants/1/bots/ind9761/send_message"
          data-botid="1"
        />
      </Box>
    );
  };

  return <>{getChatBotBody()}</>;
};

export default ChatBotWidget;
