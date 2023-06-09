import {MdTranslate} from 'react-icons/md'
import {IoDocumentSharp, IoImageSharp } from 'react-icons/io5'
import {TbWorld} from 'react-icons/tb'

const NavBar = () => {
  return (
    <>
        <div className=" w-11/12 mt-2 mx-auto h-20 flex ">
            <div className='flex justify-between my-auto mx-4 border  h-10  px-2 rounded-md hover:bg-blue-100'>
                <MdTranslate className='text-blue-600 my-auto font-bold' />
                <p className='my-auto text-blue-600 '>Text</p>
            </div>
            <div className='flex justify-between my-auto mx-4 border h-10  px-2 rounded-md hover:bg-blue-100'>
                <IoImageSharp className='text-blue-600 my-auto mr-2 font-bold'/>
                <p className='my-auto text-blue-600  '>Images</p>
            </div>
            <div className='flex justify-between my-auto mx-4 border  h-10  px-2 rounded-md hover:bg-blue-100'>
                <IoDocumentSharp className='text-blue-600 my-auto mr-2 font-bold'/>
                <p className='my-auto text-blue-600 '>Documents</p>
            </div>
            <div className='flex justify-between my-auto mx-4 border  h-10 px-2 rounded-md hover:bg-blue-100'>
                <TbWorld className='text-blue-600 my-auto mr-2 font-bold'/>
                <p className='my-auto text-blue-600 '>Websites</p>
            </div>
        </div>
    </>
  )
}

export default NavBar