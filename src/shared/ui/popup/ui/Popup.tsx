import type { Ref } from 'react';

import { ShareIcons } from '../../icons/ShareIcons.tsx';
import styles from './Popup.module.css';

interface PopupProps {
  showPopup: () => void;
  modalOpen: boolean;
  hidePopup: () => void;
  shareRef?: Ref<HTMLDivElement>;
  popupPosition: {
    top: number;
    left: number;
  };
}

export const Popup = ({ popupPosition, showPopup, modalOpen, hidePopup, shareRef }: PopupProps) => {
  return (
    <div className={styles.sharePopupOverlay}>
      <div
        className={`${styles.shareContent} ${modalOpen ? styles.showContent : styles.hideContent}`}
        ref={shareRef}
        style={{
          top: `${popupPosition.top + -25}px`,
          left: `${popupPosition.left + -170}px`,
        }}
        onMouseEnter={showPopup}
        onMouseLeave={hidePopup}
      >
        <p>Share</p>
        <ShareIcons />
      </div>
    </div>
  );
};
