import React from 'react'
import {FaReact} from 'react-icons/fa'
import {FormattedMessage} from 'react-intl'

const ParteOscura = () => {
    return <div className='oscura'>
        <p><FormattedMessage id='hechoReact' defaultMessage="made with ❤ in" /> <span><FaReact color='#5ED3F3' fontSize="20px" /></span></p>

        <p><FormattedMessage id='creator' defaultMessage="Creator Cristian Luduena" /></p>
    </div>
}

export default ParteOscura