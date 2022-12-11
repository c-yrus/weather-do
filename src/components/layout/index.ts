import { NextPage } from 'next';
import BaseLayout from './baseLayout';

export { default as BaseLayout } from './baseLayout';

type PageWithBaseLayoutType = NextPage & { layout: typeof BaseLayout };

type PageWithLayoutType = PageWithBaseLayoutType;

export default PageWithLayoutType;
