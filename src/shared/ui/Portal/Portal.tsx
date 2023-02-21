import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?:ReactNode;
    element?: HTMLAreaElement;
}

export const Portal = (props:PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;
    return createPortal(children, element);
};
