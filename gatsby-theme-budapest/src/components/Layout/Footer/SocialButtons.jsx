/** @jsx jsx */
import { jsx } from 'theme-ui'
import { AwesomeButtonSocial } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'

const SocialButtons = () => {
  return (
    <div>
      <AwesomeButtonSocial size="icon" type="facebook" url="">
        <span sx={{ variant: 'styles.hidden' }}>Facebook</span>
      </AwesomeButtonSocial>
      {`  `}
      <AwesomeButtonSocial size="icon" type="instagram" url="">
        <span sx={{ variant: 'styles.hidden' }}>Instagramm</span>
      </AwesomeButtonSocial>
    </div>
  )
}

export default SocialButtons
