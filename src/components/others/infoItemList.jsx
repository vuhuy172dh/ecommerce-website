import InfoItem from './infoItem'
import { infos } from '../../constant/infoItemList'

function InfoItemList() {
  return (
    // Feature list
    <section className="w-full">
      <h4 className="text-h4 mb-9 pr-20 laptop:text-center laptop:text-h3 dark:text-light_grey">
        What makes our brand different
      </h4>
      {/* Feature item */}
      <div className="grid grid-cols-4 tablet:grid-cols-6 gap-x-5 laptop:grid-cols-12 laptop:gap-y-5">
        {infos.map((item, index) => (
          <InfoItem
            icon={item.icon}
            label={item.label}
            desc={item.desc}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

export default InfoItemList
