import Logo from '../assets/logo.svg'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <section className="pb-8 pt-4" id="home">
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="">
            <img src={ Logo } alt=""/>
          </a>
          <Link to='contact' activeClass='active' smooth="true" spy="true" className='btn btn-sm flex items-center'>Contact</Link>
        </div>
      </div>
    </section>
  )
}

export default Header