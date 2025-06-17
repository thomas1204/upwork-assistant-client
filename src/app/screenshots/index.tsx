import { useState } from 'react'

import SS3 from '../assets/ss3.png'
import SS2 from '../assets/ss2.png'
import SS1 from '../assets/ss1.png'
import SS4 from '../assets/ss4.png'

const images = [SS3, SS2, SS1, SS4]

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [currentImage, setCurrentImage] = useState(images[0])

  return (
    <div className="bg-white">
      <div className="px-6 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <figure>
            <img
              src={currentImage}
              alt="Screenshot"
              className={`aspect-video rounded-xl bg-[#181818] object-contain transition-opacity duration-700 ease-in-out ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </figure>
          <div className={'flex justify-end items-center py-2 pr-1'}>
            <button onClick={() => prevImage()} className={'mr-2'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button onClick={() => nextImage()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  function changeImage(newIndex: number) {
    setIsFading(true)
    const preloadImg = new Image()
    preloadImg.src = images[newIndex]
    preloadImg.onload = () => {
      setCurrentImage(images[newIndex])
      setCurrentIndex(newIndex)
      setTimeout(() => setIsFading(false), 50) // allow CSS fade-in
    }
  }

  function nextImage() {
    changeImage((currentIndex + 1) % images.length)
  }

  function prevImage() {
    changeImage((currentIndex - 1 + images.length) % images.length)
  }
}
