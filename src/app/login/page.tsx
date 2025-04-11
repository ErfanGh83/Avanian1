import React from 'react'
import Layout from '@/components/layouts/auth-layout/Layout'
import LoginFormContainer from '@/components/containers/auth-containers/LoginFormContainer'

const page = () => {
  return (
    <Layout>
        <div
            className='size-full flex justify-center'
        >
            <LoginFormContainer />
        </div>
    </Layout>
  )
}

export default page