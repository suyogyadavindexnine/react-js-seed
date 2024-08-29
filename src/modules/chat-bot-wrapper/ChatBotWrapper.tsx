import { Container } from '@mui/material';
import React from 'react';
import ChatBotWidget from '../chat-bot/ChatBotWidget';
import { PageTitle, PageTitleWrapper } from '../../shared/components/index';
import { useTranslation } from 'react-i18next';

const ChatBotWrapper = () => {
  //Constants
  const { t } = useTranslation(['english']);

  //HTML
  return (
    <>
      <PageTitleWrapper>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <PageTitle heading={t('sidebar-menu.chat_bot')} />
        </div>
      </PageTitleWrapper>

      <Container sx={{ px: 5 }}>
        <ChatBotWidget />
      </Container>
    </>
  );
};

export default ChatBotWrapper;
