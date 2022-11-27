import React from 'react'
import { annotate } from 'rough-notation'
import { useRef, useEffect } from 'react'
import { TechStack } from './Skill'

const About = () => {
  const highlightRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (highlightRef.current) {
        const annotation = annotate(highlightRef.current, {
          type: 'underline',
          color: '#ff614e80',
          strokeWidth: 5,
        })

        annotation.show()
      }
    }, 1000)
  }, [highlightRef])
  return (
    <>
      <div className=" mt-28  flex justify-start ml-16">
        <div className="h-full text-left">
          <h2 className="font-black text-5xl tracking-wider mb-2 ">
            Hey, I&lsquo;m <span ref={highlightRef}>Ashwath.</span>
          </h2>

          <h2 className="text-primary-400  text-3xl  font-semibold">Lazy react developer</h2>
          <p className="text-primary-400  mt-4 ">
            I love designing and developing fast and easy to use web applications.
          </p>
        </div>
      </div>
      <div className="ml-12 mt-12">
        <TechStack />
      </div>
    </>
  )
}

export default About
