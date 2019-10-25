import React from 'react'
import Konva from 'konva'
import { Stage, Layer, Rect, Line } from 'react-konva';

const Shape = props => {
    console.log(props.grid)
    console.log(props.rooms)

    if (!props.grid) {
        return <div>Loading</div>
    }

    return (
        <Stage width={1000} height={600}>
            <Layer>
                {props.grid.map(room => {
                    return (
                        <>
                            <Rect
                                key={room.id}
                                x={room[1]}
                                y={room[2]}
                                height={15}
                                width={15}
                                fill={room[0] === props.user.id ? "black" : "green"}
                                onClick={() => console.log(room[0])} />
                            <Line stroke="black" points={[room[3], room[4], room[5], room[6]]} />
                        </>
                    )
                })}
            </Layer>
        </Stage>
    )
}

export default Shape

/*                <Rect
                    x={x}
                    y={y}
                    height={h}
                    width={w}
                    fill="red" />*/