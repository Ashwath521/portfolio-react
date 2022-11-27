import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNetlify,
} from 'react-icons/si'

export function TechStack() {
  return (
    <>
      <div className="flex  animate-wiggle w-96 8s">
        <div className=" h-8 w-8 fill-current  div1  text-yellow-500 mr-4 ">
          <SiJavascript className="animate-bounce" />
        </div>
        <div className=" h-8 w-8  fill-current div1 text-blue-600 mr-4">
          <SiCss3 className="animate-bounce" />
        </div>
        <div className=" h-12 w-12 fill-current div1  text-blue-500 mr-4">
          <SiReact className="animate-bounce" />
        </div>
        <div className=" h-12 w-12 fill-current div1 text-green-600 mr-4">
          <SiTailwindcss className="animate-bounce" />
        </div>
        <div className=" h-12 w-12 fill-current div1  text-blue-800 mr-4">
          <SiTypescript className="animate-bounce" />
        </div>
        <div className=" h-12 w-12  fill-current div1 text-green-600 mr-4">
          <SiNetlify className="animate-bounce" />
        </div>
      </div>
    </>
  )
}
