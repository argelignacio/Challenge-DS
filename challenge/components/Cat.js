import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Path, Image } from 'react-konva';



class Cat extends Component {
    
        
    
    state ={
        x:50,
        y:50,
        draggable:false
    }  
    

    render(){
        return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
            <Cat

                key = {1}
                x={this.state.x}
                y={this.state.y}
                draggable
                fill={this.state.isDragging ? 'green' : 'black'}
                onDragStart={() => {
                this.setState({
                    isDragging: true
                });
                }}
                onDragEnd={e => {
                this.setState({
                    isDragging: false,
                    x: e.target.x(),
                    y: e.target.y()
                });
                }}
            />
            </Layer>
        </Stage>
    );
    }
};

export default Cat;