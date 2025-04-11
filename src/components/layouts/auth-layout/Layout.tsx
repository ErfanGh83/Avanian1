import React, { ReactElement } from 'react'

type Props = {
    children: ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <div>
        <header>

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