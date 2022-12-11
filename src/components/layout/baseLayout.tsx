import Header from '@ui/header';

interface LayoutProps {
  children: React.ReactNode;
}

// We can replace LayoutProps to  React.PropsWithChildren<{}>
export default function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
