/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness5Icon from '@material-ui/icons/Brightness5'

const ColorModeToggle = ({ isDark, toggle }) => {
  return (
    <IconButton
      onClick={toggle}
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      sx={{ outline: 'none', ml: '1.5rem' }}
    >
      {isDark ? (
        <Brightness5Icon sx={{ color: 'primary' }} />
      ) : (
        <Brightness4Icon sx={{ color: 'primary' }} />
      )}
    </IconButton>
  )
}

export default ColorModeToggle
