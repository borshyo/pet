import { useTheme } from 'app/providers/ThemeProvider';
import {
    FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    portalTarget?: HTMLElement;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className, children, isOpen, onClose, portalTarget,
    } = props;

    const [isClosing, setIsClosing] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]: true,
    };
    return (
        <Portal element={portalTarget}>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div onClick={closeHandler} className={cls.overlay}>
                    <div onClick={onContentClick} className={classNames(cls.content)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
