import InfoItem from './infoItem'

function InfoItemList() {
  const featureList = [
    {
      icon: 'delivery_24',
      label: 'Next day as standard',
      desc: 'Order before 3pm and get your order the next day as standard'
    },
    {
      icon: 'checkmark_24',
      label: 'Made by true artisans',
      desc: 'Handmade crafted goods made with real passion and craftmanship'
    },
    {
      icon: 'purchase_24',
      label: 'Unbeatable prices',
      desc: 'For our materials and quality you won’t find better prices anywhere'
    },
    {
      icon: 'sprout_24',
      label: 'Recycled packaging',
      desc: 'We use 100% recycled to ensure our footprint is more manageable'
    }
  ]

  return (
    // Feature list
    <section className="w-full">
      <h4 className="text-h4 mb-9 pr-20 laptop:text-center laptop:text-h3">
        What makes our brand different
      </h4>
      {/* Feature item */}
      <div className="grid grid-cols-4 gap-x-5 laptop:grid-cols-12 laptop:gap-y-5">
        {featureList.map((item) => (
          <InfoItem icon={item.icon} label={item.label} desc={item.desc} />
        ))}
      </div>
    </section>
  )
}

export default InfoItemList
