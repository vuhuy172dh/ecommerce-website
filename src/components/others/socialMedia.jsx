/*
Name: SocialMedia
Description: social media component
Properties: 
    Color: 'light'|'dark' (default: 'light')
*/

import { ButtonIcon } from '../buttons'

function SocialMedia({ Color = 'light' }) {
  return (
    <div className="flex min-w-fit w-full">
      <ButtonIcon Icon="linkedin" Color={Color} />
      <ButtonIcon Icon="facebook" Color={Color} />
      <ButtonIcon Icon="instagram" Color={Color} />
      <ButtonIcon Icon="skype" Color={Color} />
      <ButtonIcon Icon="twitter" Color={Color} />
      <ButtonIcon Icon="pinterest" Color={Color} />
    </div>
  )
}

export default SocialMedia
