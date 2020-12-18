import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import ActionBarContext from './ActionBarContext';
import classNames from 'classnames';
import useTimeout from '@restart/hooks/useTimeout';
import Fade from 'react-bootstrap/Fade';

import './styles.scss'

const propTypes = {
  /**
   * @default 'actionbar'
   */

  /**
   * Apply a CSS fade transition to the actionbar
   */
  animation: PropTypes.bool,

  /**
   * Auto hide the actionbar
   */
  autohide: PropTypes.bool,

  /**
   * Delay hiding the actionbar (ms)
   */
  delay: PropTypes.number,

  /**
   * A Callback fired when the close button is clicked.
   */
  onClose: PropTypes.func,

  /**
   * When `true` The modal will show itself.
   */
  show: PropTypes.bool,

  /**
   * A `react-transition-group` Transition component used to animate the Toast on dismissal.
   */
  transition: PropTypes.elementType,
};

//
// Custom Action Bar created from react-bootstrap Toast Component
//
const ActionBar = React.forwardRef(
  (
    {
      className,
      children,
      transition: Transition = Fade,
      show = true,
      animation = true,
      delay = 3000,
      autohide = false,
      onClose,
      ...props
    },
    ref,
  ) => {

    // We use refs for these, because we don't want to restart the autohide
    // timer in case these values change.
    const delayRef = useRef(delay);
    const onCloseRef = useRef(onClose);

    useEffect(() => {
      delayRef.current = delay;
      onCloseRef.current = onClose;
    }, [delay, onClose]);

    const autohideTimeout = useTimeout();
    const autohideActionBar = !!(autohide && show);

    const autohideFunc = useCallback(() => {
      if (autohideActionBar) {
        onCloseRef.current();
      }
    }, [autohideActionBar]);

    useEffect(() => {
      // Only reset timer if show or autohide changes.
      autohideTimeout.set(autohideFunc, delayRef.current);
    }, [autohideTimeout, autohideFunc]);

    const actionbarContext = useMemo(
      () => ({
        onClose,
      }),
      [onClose],
    );

    const hasAnimation = !!(Transition && animation);

    const actionbar = (
      <div
        {...props}
        ref={ref}
        className={classNames(
          className,
          !hasAnimation && (show ? 'show' : 'hide action-bar--invisible'),
        )}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        {children}
      </div>
    );

    return (
      <ActionBarContext.Provider value={actionbarContext}>
        {hasAnimation && Transition ? (
          <Transition in={show} unmountOnExit>
            {actionbar}
          </Transition>
        ) : (
          actionbar
        )}
      </ActionBarContext.Provider>
    );
  },
);

ActionBar.propTypes = propTypes;
ActionBar.displayName = 'ActionBar';

export default ActionBar;
