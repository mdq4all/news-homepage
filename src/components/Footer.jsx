import image01 from '../assets/images/image-retro-pcs.jpg'
import image02 from '../assets/images/image-top-laptops.jpg'
import image03 from '../assets/images/image-gaming-growth.jpg'
import ArticleFooter from './ArticleFooter'

const Footer = () => {
  return (
    <footer className='md:flex'>
      <ArticleFooter image={image01}
                    numArticle={'01'}
                    title={'Reviving Retro PCs'}
                    paragraph={'What happens when old PCs are given modern upgrades?'} />
        <ArticleFooter image={image02}
                        numArticle={'02'}
                        title={'Top 10 Laptops of 2022'}
                        paragraph={'Our best picks of various needs and budgets.'} />
        <ArticleFooter image={image03}
                        numArticle={'03'}
                        title={'The Growth og Gaming'}
                        paragraph={'How the pandemic has sparked fresh opportunities.'} />
    </footer>
  )
}

export default Footer
