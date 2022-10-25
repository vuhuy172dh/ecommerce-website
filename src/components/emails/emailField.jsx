/*
Name: EmailField
Discription: Where to text your email to sign up
Properties: 
  Color: 'dark' | 'light' (default 'dark')
*/

import { Button } from '../buttons'

const colors = {
  dark: ['bg-[rgba(255,255,255,0.15)]', 'white'],
  light: ['bg-light_grey', 'primary']
}

function EmailField({ Color = 'dark' }) {
  return (
    <div className="w-full flex">
      <input
        placeholder="your@email.com"
        className={`${colors[Color][0]} grow-[1] pl-5 overflow-auto`}
      />
      <Button Size="medium" State="default" Color={colors[Color][1]}>
        Sign up
      </Button>
    </div>
  )
}

export default EmailField
