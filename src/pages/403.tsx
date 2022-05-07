import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default (): React.ReactNode => {
  return (
    <PageHeaderWrapper content={'此页面仅管理员可见'}>
      <Card>
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> 管理员界面 <HeartTwoTone twoToneColor="#eb2f96" />{' '}
          You
        </Typography.Title>
      </Card>
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        Want to add more pages? Please refer to{' '}
        <a
          href="https://pro.ant.design/docs/block-cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          use block
        </a>
        。
      </p>
    </PageHeaderWrapper>
  );
};
