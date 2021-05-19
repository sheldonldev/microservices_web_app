import React, { PropsWithChildren } from 'react'
import AppHeader from './components/AppHeader';
import Menu from "./components/Menu";

const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div>
            <AppHeader></AppHeader>
            <div className="container-fluid">
                <div className="row">
                    <Menu></Menu>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Wrapper
 