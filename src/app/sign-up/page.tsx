import React from 'react'
import Layout from '@/components/layouts/auth-layout/Layout'
import SignUpFormContainer from '@/components/containers/auth-containers/SignUpFormContainer'
import AuthBackgroundImageContainer from '@/components/containers/image-containers/AuthBackgroundImageContainer'


const page = () => {
  return (
    <Layout>
      <div
        className='size-full flex justify-center'
      >
        <div className='hide xl:block w-screen h-screen absolute -z-10 top-0 left-0'><AuthBackgroundImageContainer /></div>
        <SignUpFormContainer />
      </div>
    </Layout>
  )
}

export default page