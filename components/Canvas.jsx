import { Layer, Stage } from 'react-konva'

const Canvas = (props) => {
  console.log(props)
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>{props.children}</Layer>
    </Stage>
  )
}

export default Canvas
