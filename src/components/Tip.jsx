import './styles/tip.less'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ThinQuestionMark from './icons/ThinQuestionMarkIcon.svg'
import Dropdown from './Dropdown'

const Tip = ({ title, message, top, className }) => {
    const tipClass = classNames('reactist tip__container', className)
    return (
        <Dropdown.Box top={top} className={tipClass}>
            <Dropdown.Trigger>
                <ThinQuestionMark />
            </Dropdown.Trigger>
            <Dropdown.Body>
                <div className="reactist tip">
                    <p className="reactist tip--title">{title}</p>
                    <p className="reactist tip--message">{message}</p>
                </div>
            </Dropdown.Body>
        </Dropdown.Box>
    )
}
Tip.displayName = 'Tip'
Tip.defaultProps = {
    top: false
}
Tip.propTypes = {
    /** Whether the tip content should be displayed to the top or not. Maps to the Dropdown.Box top property. */
    top: PropTypes.bool,
    /** Title of the tip. */
    title: PropTypes.string.isRequired,
    /** Message of the tip. */
    message: PropTypes.string.isRequired,
    /** Addtional css class that is applied to the Tip. */
    classname: PropTypes.string
}

export default Tip
