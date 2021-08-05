import dynamic from 'next/dynamic'
import { server } from '../config'
const SvgToImg = dynamic(() => import('../components/svgToImg'), { ssr: false })
const Canvas = dynamic(() => import('../components/Canvas'), { ssr: false })

export default function Home(props) {
  return (
    <Canvas>
      <SvgToImg image={props}></SvgToImg>
    </Canvas>
  )
}
Home.getInitialProps = async (ctx) => {
  const res = await fetch(`${server}/public/cat.svg`)
  console.log(res)
  return { res }
}
