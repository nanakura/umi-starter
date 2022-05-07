import React from 'react';
import type {
  BasicLayoutProps as ProLayoutProps,
} from '@ant-design/pro-layout';

export interface BasicLayoutProps extends ProLayoutProps {
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
	const {
		children,
		route,
		location = {
			pathname: '/'
		}
	} = props;

	  // get current page needed authority
		let authority;

		route.routes?.forEach((r) => {
			if (r.path === location.pathname) {
				authority = r.authority;
			}
		});
	return (
		<>
		  {children}
		</>
	)
}

export default BasicLayout;