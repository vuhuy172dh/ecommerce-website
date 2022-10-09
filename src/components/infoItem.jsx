import Icon from '../helper/icon'

function InfoItem({ icon, label, desc }) {
  return (
    <div className="px-6 py-9 bg-light_grey mt-6 col-span-4 laptop:col-span-3 laptop:mt-0">
      <Icon icon={icon} />
      <h4 className="text-h4 mt-4 mb-3">{label}</h4>
      <p className="text-body-sm">{desc}</p>
    </div>
  )
}

export default InfoItem
