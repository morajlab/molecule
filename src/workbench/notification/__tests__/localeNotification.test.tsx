import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import LocaleNotification from '../notificationPane/localeNotification';
import '@testing-library/jest-dom';

describe('The LocaleNotification Component', () => {
    test('Match Snapshot', () => {
        const component = create(<LocaleNotification locale="chinese" />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should support to reload via button', () => {
        const originalFunction = window.location.reload;
        const mockFn = jest.fn();
        Reflect.deleteProperty(window, 'location');
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { reload: mockFn },
        });
        const { getByText } = render(<LocaleNotification locale="chinese" />);

        fireEvent.click(getByText('Confirm Reload'));

        expect(jest.isMockFunction(window.location.reload)).toBeTruthy();
        expect(mockFn).toBeCalled();

        window.location.reload = originalFunction;
    });

    test('Should support to reload by pressing the Enter key.', async () => {
        const originalFunction = window.location.reload;
        const mockFn = jest.fn();
        Reflect.deleteProperty(window, 'location');
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { reload: mockFn },
        });
        const { container } = render(<LocaleNotification locale="zh-CN" />);
        const elem = container.querySelector('button')!;

        expect(elem).toBeInTheDocument();
        expect(elem === document.activeElement).toBeTruthy();

        fireEvent.click(elem);
        expect(mockFn).toBeCalled();
        window.location.reload = originalFunction;
    });
});
