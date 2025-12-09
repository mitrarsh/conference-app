import React from 'react'

import { Btn } from './components/navbar/btn'
import { Divider } from './components/divider'

export const Navbar = () => {
  return (
    <div className='bg-white color flex items-center py-1 '>
      <div className='mx-[57px] p-2.5'>Logo</div>
      <Divider />
      <div className='flex-1 flex justify-start px-4'>
        <Btn>tdryhfh</Btn>
      </div>
      <Divider />
      <Btn>ورود </Btn>
      <Btn btnPrimary={true}>ثبت نام</Btn>

    </div>
  )
}
