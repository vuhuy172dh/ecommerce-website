import ICONS from './constant'
import PropTypes from 'prop-types'

/*
  <Icon icon={"`NameIcon`"}/>
  Take instance: <Icon icon="delivery_24"/>
*/

function Icon({ icon }) {
  const IconReactElement = ICONS[icon]

  return IconReactElement
}

Icon.propTypes = {
  icon: PropTypes.string
}

Icon.defaultProps = {
  icon: 'search'
}

export default Icon
