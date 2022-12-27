import React from 'react';

function Info() {
    return (
        <>
            <label htmlFor="my-modal" className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
                </svg>
            </label>
            <input type="checkbox" id="my-modal" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"><span className="text-secondary">Phonade</span> was built with:</h3>
                    <ul className="list-disc list-inside">
                        <li><a className="link link-secondary" href="https://reactjs.org/">React</a></li>
                        <li><a className="link link-secondary" href="https://vitejs.dev/">Vite</a></li>
                        <li><a className="link link-secondary" href="https://daisyui.com/">DaisyUI</a></li>
                        <li><a className="link link-secondary" href="https://tailwindcss.com/">TailwindCSS</a></li>
                    </ul>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;