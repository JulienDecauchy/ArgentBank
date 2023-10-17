import React from "react";
import PropTypes from 'prop-types'

function ActivateButton({title, action}) {
    const name = title.toLowerCase().replace('', '-')
    return (
        <button className={`${name}-button`} onClick={action}>
        {title}
      </button>
    )
}

ActivateButton.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func,
}

export default ActivateButton