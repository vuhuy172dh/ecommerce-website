import { EmailField } from '../emails'
import { LinkButton } from '../buttons'
import { SocialMedia } from '../others'

function Footer() {
  return (
    <div className="w-full flex flex-col items-center bg-dark_primary dark:bg-secondary">
      {/* top footer */}
      <div className="w-full flex flex-col px-10 py-10 gap-10 text-white tablet:flex-row tablet:gap-0 tablet:items-start">
        {/* "categories" component */}
        <div className="flex flex-col gap-5 items-center py-5 border border-primary dark:border-light_grey/30 rounded-xl tablet:border-none tablet:items-start tablet:grow">
          <p className="text-h3 tablet:text-h5">Categories</p>
          <ul className="flex flex-col items-center gap-2 text-body-lg tablet:text-body-sm tablet:items-start">
            <li>
              <LinkButton size="small" path="/products/crockery">
                Crockery
              </LinkButton>
            </li>
            <li>
              <LinkButton size="small" path="/products/tableware">
                Tableware
              </LinkButton>
            </li>
            <li>
              <LinkButton size="small" path="/products/ceramics">
                Ceramics
              </LinkButton>
            </li>
            <li>
              <LinkButton size="small" path="/products/plant-pots">
                Plant pots
              </LinkButton>
            </li>
            <li>
              <LinkButton size="small" path="/products/chairs">
                Chairs
              </LinkButton>
            </li>
          </ul>
        </div>

        {/* 'menu' component */}
        <div className="flex flex-col gap-5 items-center py-5 border border-primary dark:border-light_grey/30 rounded-xl tablet:border-none tablet:items-start tablet:grow">
          <p className="text-h3 tablet:text-h5">Menu</p>
          <ul className="flex flex-col items-center gap-2 text-body-lg tablet:text-body-sm tablet:items-start">
            <li>
              <LinkButton path="/products">New arrivals</LinkButton>
            </li>
            <li>
              <LinkButton path="/products">Best sellers</LinkButton>
            </li>
            <li>
              <LinkButton path="/products">Recently viewed</LinkButton>
            </li>
            <li>
              <LinkButton path="/products">Popular this week</LinkButton>
            </li>
            <li>
              <LinkButton path="/products">All products</LinkButton>
            </li>
          </ul>
        </div>

        {/* 'our company' conponent */}
        <div className="flex flex-col gap-5 items-center py-5 border border-primary dark:border-light_grey/30 rounded-xl tablet:border-none tablet:items-start tablet:grow">
          <p className="text-h3 tablet:text-h5">Our company</p>
          <ul className="flex flex-col items-center gap-2 text-body-lg tablet:text-body-sm tablet:items-start">
            <li>
              <LinkButton path="/about">About us</LinkButton>
            </li>
            <li>
              <LinkButton path="/vacancies">Vacancies</LinkButton>
            </li>
            <li>
              <LinkButton path="/contactUs">Contact us</LinkButton>
            </li>
            <li>
              <LinkButton path="/privacy">Privacy</LinkButton>
            </li>
            <li>
              <LinkButton path="/returnPolicy">Returns Policy</LinkButton>
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
      <hr className="w-[calc(100%-4rem)] border-t border-t-primary dark:border-t-light_grey" />

      {/* footer bottom */}
      <div className="w-full py-5 tablet:px-8 tablet:flex tablet:flex-row tablet:items-center">
        {/* copyright */}
        <p className="text-body-sm text-white text-center mr-auto">
          Copyright 2022 Avion LTD
        </p>

        {/* social media */}
        <div className="hidden tablet:block">
          <SocialMedia Color="dark" />
        </div>
      </div>
    </div>
  )
}

export default Footer
