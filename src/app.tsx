import { PageLoading } from '@ant-design/pro-layout';
import React from 'react';
import { RecoilRoot } from 'recoil';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

export function rootContainer(container: any) {
  return React.createElement(RecoilRoot, null, container);
}