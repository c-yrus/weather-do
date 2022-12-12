import { CloseToastButton } from '@components/common/toast';
import Header from '@ui/header';
import { ToastContainer } from 'react-toastify';
interface LayoutProps {
  children: React.ReactNode;
}

// We can replace LayoutProps to  React.PropsWithChildren<{}>
export default function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={CloseToastButton}
      />
    </>
  );
}
