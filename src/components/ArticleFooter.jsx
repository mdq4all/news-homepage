const ArticleFooter = ({ image, numArticle, title, paragraph }) => {
  return (
    <div className="flex pb-6">
      <img src={image} alt="imagen de articulo" className="w-24 md:h-28 md:w-28" />
      <div className="px-6 font-inter flex flex-col justify-between">
        <h2 className="text-3xl font-bold text-grayish-blue">{numArticle}</h2>
        <h3 className="font-black hover:text-soft-red cursor-pointer md:text-sm">{title}</h3>
        <p className="text-sm text-dark-grayish-blue leading-6 md:text-xs">{paragraph}</p>
      </div>
    </div>
  )
}

export default ArticleFooter
