import { toast, ToastOptions } from 'react-toastify';
import {
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage
} from '../../../../shared/components/index';
jest.mock('react-toastify');

const testMsg = 'testMsg';
describe('toastMessages without options', () => {
  const options: ToastOptions = {};
  test('showSuccessMessage()', () => {
    let res = showSuccessMessage(testMsg, options);
    expect(toast.success).toHaveBeenCalledTimes(1);
    expect(toast.success).toHaveBeenCalledWith(testMsg, options);
  });

  test('showErrorMessage()', () => {
    let res = showErrorMessage(testMsg, options);
    expect(toast.error).toHaveBeenCalledTimes(1);
    expect(toast.error).toHaveBeenCalledWith(testMsg, options);
  });

  test('showWarningMessage()', () => {
    let res = showWarningMessage(testMsg, options);
    expect(toast.warn).toHaveBeenCalledTimes(1);
    expect(toast.warn).toHaveBeenCalledWith(testMsg, options);
  });
});
describe('toastMessages with options', () => {
  const options: ToastOptions = {
    theme: 'dark'
  };
  test('showSuccessMessage()', () => {
    let res = showSuccessMessage(testMsg, options);
    expect(toast.success).toHaveBeenCalledTimes(1);
    expect(toast.success).toHaveBeenCalledWith(testMsg, options);
  });

  test('showErrorMessage()', () => {
    let res = showErrorMessage(testMsg, options);
    expect(toast.error).toHaveBeenCalledTimes(1);
    expect(toast.error).toHaveBeenCalledWith(testMsg, options);
  });

  test('showWarningMessage()', () => {
    let res = showWarningMessage(testMsg, options);
    expect(toast.warn).toHaveBeenCalledTimes(1);
    expect(toast.warn).toHaveBeenCalledWith(testMsg, options);
  });
});
