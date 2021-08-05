import Konva from 'konva'
import { Layer, Stage } from 'react-konva'

const Canvas = (props) => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>{props.image}</Layer>
    </Stage>
  )
}

export default Canvas
