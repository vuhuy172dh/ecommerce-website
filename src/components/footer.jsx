import ButtonIcon from './buttonIcon'
import EmailField from './emailField'
import LinkButton from './linkButton'

function Footer() {
  return (
    <div className="w-full flex flex-col items-center bg-dark_primary">
      {/* top footer */}
      <div className="w-full flex flex-col px-10 py-10 gap-10 text-white tablet:flex-row tablet:gap-0 tablet:items-start">
        {/* "categories" component */}
        <div className="flex flex-col gap-5 items-center py-5 border border-primary rounded-xl tablet:border-none tablet:items-start tablet:grow">
          <p className="text-h3 tablet:text-h5">Categories</p>
          <ul className="flex flex-col items-center gap-2 text-body-lg tablet:text-body-sm tablet:items-start">
            <li>
              <LinkButton size="small">Crockery</LinkButton>
            </li>
            <li>
              <LinkButton size="small">Furniture</LinkButton>
            </li>
            <li>
              <LinkButton size="small">Homeware</LinkButton>
            </li>
            <li>
              <LinkButton size="small">Plant pots</LinkButton>
            </li>
            <li>
              <LinkButton size="small">Chairs</LinkButton>
            </li>
          </ul>
        </div>

        {/* 'menu' component */}
        <div className="flex flex-col gap-5 items-center py-5 border border-primary rounded-xl tablet:border-none tablet:items-start tablet:grow">
          <p className="text-h3 tablet:text-h5">Menu</p>
          <ul className="flex flex-col items-center gap-2 text-body-lg tablet:text-body-sm tablet:items-start">
            <li>
              <LinkButton>New arrivals</LinkButton>
            </li>
            <li>
              <LinkButton>Best sellers</LinkButton>
            </li>
            <li>
              <LinkButton>Recently viewed</LinkButton>
            </li>
            <li>
              <LinkButton>Popular this week</LinkButton>
            </li>
            <li>
              <LinkButton>All products</LinkButton>
            </li>
          </ul>
        </div>

        {/* 'our company' conponent */}
        <div className="flex flex-col gap-5 items-center py-5 border border-primary rounded-xl tablet:border-none tablet:items-start tablet:grow">
          <p className="text-h3 tablet:text-h5">Our company</p>
          <ul className="flex flex-col items-center gap-2 text-body-lg tablet:text-body-sm tablet:items-start">
            <li>
              <LinkButton>About us</LinkButton>
            </li>
            <li>
              <LinkButton>Vacancies</LinkButton>
            </li>
            <li>
              <LinkButton>Contact us</LinkButton>
            </li>
            <li>
              <LinkButton>Privacy</LinkButton>
            </li>
            <li>
              <LinkButton>Returns Policy</LinkButton>
            </li>
          </ul>
        </div>

        {/* email field component */}
        <div className="flex flex-col gap-2 py-5 tablet:grow-[2]">
          {/* email title */}
          <p className="text-h5">Join our mailing list</p>

          {/* email field */}
          <EmailField />
        </div>
      </div>

      {/* divider */}
      <hr className="w-[calc(100%-4rem)] border-t border-t-primary" />

      {/* footer bottom */}
      <div className="w-full py-5 tablet:px-8 tablet:flex tablet:flex-row tablet:items-center">
        {/* copyright */}
        <p className="text-body-sm text-white text-center mr-auto">
          Copyright 2022 Avion LTD
        </p>

        {/* social media */}
        <div className="hidden tablet:flex justify-end text-white">
          <ButtonIcon Icon="linkedin" />
          <ButtonIcon Icon="facebook" />
          <ButtonIcon Icon="instagram" />
          <ButtonIcon Icon="skype" />
          <ButtonIcon Icon="twitter" />
          <ButtonIcon Icon="pinterest" />
        </div>
      </div>
    </div>
  )
}

export default Footer
