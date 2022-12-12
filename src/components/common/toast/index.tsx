import React from 'react';
import type { CloseButtonProps } from 'react-toastify';
import { toast } from 'react-toastify';
import CloseToast from '@icons/toast/close.svg';
import ToastSuccess from '@icons/toast/success.svg';
import ToastInfo from '@icons/toast/info.svg';
import ToastError from '@icons/toast/error.svg';

/**
 * Toast Component
 */

const Toast = (
  message: string,
  type: 'success' | 'error' | 'info' | 'warning' | null
) => {
  switch (type) {
    case 'success':
      return toast.success(message, { icon: <ToastSuccess /> });
    case 'error':
      return toast.error(message, { icon: <ToastError /> });
    case 'info':
      return toast.info(message, { icon: <ToastInfo /> });
    case 'warning':
      return toast.warning(message, { icon: <ToastInfo /> });
    default:
      return toast.warning('Toast not defined...', { icon: <ToastError /> });
  }
};
export default Toast;

/**
 * Custom Toast Close Button
 */
export const CloseToastButton: React.FC<CloseButtonProps> = ({
  closeToast,
}) => {
  return (
    <button
      className="Toastify__close-button Toastify__close-button--light"
      onClick={closeToast}
    >
      <CloseToast />
    </button>
  );
};
