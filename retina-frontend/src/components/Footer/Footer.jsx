import React from 'react'

const Footer = () => {
    return (
        <div className="bg-black pl-9 pr-9 border-t-2 border-white pt-5 pb-5">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p className="text-white text-base mr-3">About</p>
                  <p className="text-white text-base mr-3">Terms</p>
                  <p className="text-white text-base">Privacy settings</p>
                </div>
                <div className="">
                   <p className="text-white text-base">© 2021 Gridhouse Inc, All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
