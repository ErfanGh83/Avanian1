import React from 'react'
import Layout from '@/components/layouts/auth-layout/Layout'
import SignUpFormContainer from '@/components/containers/auth-containers/SignUpFormContainer'


const page = () => {
  return (
    <Layout>
        <div
            className='size-full flex justify-center'
        >
            <SignUpFormContainer />
        </div>
    </Layout>
  )
}

export default page