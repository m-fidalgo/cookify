import * as React from 'react';
import { Modal as RNModal } from 'react-native';

import { DEFAULT_SHADOW_STYLES } from 'app/constants';

import { ModalContent, OpacityLayover } from './styles';
import { ModalProps } from './types';

export * from './types';

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <RNModal transparent animationType="fade" visible={open} onRequestClose={onClose}>
      <OpacityLayover>
        <ModalContent style={DEFAULT_SHADOW_STYLES}>{children}</ModalContent>
      </OpacityLayover>
    </RNModal>
  );
};
