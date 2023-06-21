
const New = ({ title, paragraph }) => {
  return (
    <div className="text-off-white py-5">
      <h3 className="font-bold text-lg pt-2 hover:text-soft-orange cursor-pointer">{title}</h3>
      <p className="opacity-75 text-sm leading-7">{paragraph}</p>
    </div>
  )
}

export default New
