import React, { useState } from 'react'
import dataGlass from './dataGlasses.json'
import GlassStyle from './GlassStore.module.css'
export const GlassesStore = () => {
    const [glass, setGlass] = useState('')

    return (

        <div className={`${GlassStyle.bg}`} style={{

        }}>
            <div className="divOverlay bg-secondary p-4 ">
                <h3 className='text-center text-white'>Welcome to the glass store!</h3>
            </div>


            <div className="container mt-3 d-flex justify-content-around">
                {/* model__left */}
                <div className={`${GlassStyle.model__left}`}
                    style={{
                        width: '200px'
                    }}>
                    <img className={`${GlassStyle['card-img']}  ` + " card-img-top "} src="./glassesImage/model.jpg" alt />
                    <div className={`${GlassStyle['card-img-content']}  `}>
                        <span>ABC LVT</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <img className={`${GlassStyle.glass}`} src="./glassesImage/v7.png" alt="" />
                </div>
                {/* model__right */}

                <div className={`${GlassStyle.glass__right}`}
                    style={{
                        width: '200px'
                    }}>
                    <img className={`${GlassStyle['card-img']}  ` + " card-img-top "} src="./glassesImage/model.jpg" alt />
                    <img className={`${GlassStyle.glass1}`} src={glass} alt="" />

                </div>
            </div>

            {/* danh sach kinh */}

            <div className="container text-center mt-4 p-4"
                style={{
                    backgroundColor: 'rgba(17, 17, 18, 0.459)',
                    borderRadius: '20px',
                    boxShadow: '5px 7px 1px rgba(17, 17, 18, 0.7)'
                }}>
                {
                    dataGlass.map((glass) => {
                        return (
                            < img src={glass.url} className=''
                                style={{
                                    width: '10rem'
                                }} alt=""
                                onClick={() => {
                                    setGlass(glass.url)
                                }} />
                        )
                    })
                }
            </div>
        </div>

    )
}
