import dynamic from 'next/dynamic'
const { parseSync } = require('svgson')
const SvgToImg = dynamic(() => import('../components/svgToImg'), { ssr: false })
const Canvas = dynamic(() => import('../components/Canvas'), { ssr: false })

export default function Home({ svg }) {
  return (
    <Canvas>
      <SvgToImg image={svg} />
    </Canvas>
  )
}
Home.getInitialProps = async (ctx) => {
  const cat = await fetch('http://localhost:3000/cat.svg').then((response) =>
    response.text()
  )
  const svg = parseSync(cat)
  return { svg }
}
