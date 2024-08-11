import React from 'react';

export default function HomeHero() {

    const hero_image = 'http://localhost:8000/media/' + localStorage.getItem("home_hero_image");

    return (
      <header style={{ paddingLeft: 0 }}>
        <div
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "url(" + hero_image + ")", height: 400 }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }