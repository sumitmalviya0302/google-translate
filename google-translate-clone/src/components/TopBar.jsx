import {AiOutlineMenu} from 'react-icons/ai'
import {IoApps} from 'react-icons/io5'
import {VscAccount} from 'react-icons/vsc'


const TopBar = () => {
  return (
    <>
        <header className='flex justify-between w-full py-2 px-4 border-b-2 h-20'>
            <div className='flex w-10/12 h-18'>
                <AiOutlineMenu className='h-12 w-6 my-auto mx-2' />
                <img src='https://tse4.mm.bing.net/th?id=OIP.0ENm4nC-COxJtOl5EdvsOAHaEK&pid=Api&P=0&h=180' alt='logo' className='h-[60px] my-auto ' />
            </div>
                
            <div className='flex h-16 w-1/12 px-2'>
            <IoApps className='h-14 w-6 my-auto mx-4 ' />
            <VscAccount className='h-14 w-6 my-auto' />
            </div>
        </header>
    </>
  )
}

export default TopBar