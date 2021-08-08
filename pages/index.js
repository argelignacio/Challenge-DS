import dynamic from 'next/dynamic'
const { parseSync } = require('svgson')
const SvgToImg = dynamic(() => import('../components/svgToImg'), { ssr: false })
const Canvas = dynamic(() => import('../components/Canvas'), { ssr: false })

export default function Home({ svg }) {
  return (
    <Canvas>
      <SvgToImg image={svg.cat} pos={0} scale={1} />
      <SvgToImg image={svg.woman} pos={1} scale={5} />
      <SvgToImg image={svg.motorcycle} pos={2} scale={5} />
    </Canvas>
  )
}
Home.getInitialProps = async (ctx) => {
  const cat = await fetch('http://localhost:3000/cat.svg').then((response) =>
    response.text()
  )
  const motorcycle = await fetch('http://localhost:3000/motorcycle.svg').then(
    (response) => response.text()
  )
  const woman = await fetch('http://localhost:3000/woman.svg').then(
    (response) => response.text()
  )
  const catJSON = parseSync(cat)
  const womanJSON = parseSync(woman)
  const motorcycleJSON = parseSync(motorcycle)
  const svg = {
    cat: catJSON,
    woman: womanJSON,
    motorcycle: motorcycleJSON,
  }
  return { svg }
}
