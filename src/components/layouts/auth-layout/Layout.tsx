import Header from '@/components/headers/auth-layout-header/Header'
import React, { ReactElement } from 'react'

type Props = {
    children: ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <div>
        <header>
            <Header />
        </header>

        <main>
            {children}
        </main>

        <footer>

        </footer>
    </div>
  )
}

export default Layout