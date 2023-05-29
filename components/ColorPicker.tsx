import React, { FC, use, useLayoutEffect, useState } from "react";


const ColorPicker: FC = ({ onColorApply }) => {
    const [color, setColor] = useState("#000000");


    const onColorChange = (event) => {
        setColor(event.target.value);
    }


    return (
        <div className={`bg-gray-300 w-8 h-8 rounded-full inline-block absolute`}>
            <input
                id="nativeColorPicker"
                className="rounded-full relative left-[11%] top-[10%]"
                type="color" value={color}
                onChange={onColorChange}
                onClick={()=>
                    onColorApply(color)
                }
            />
        </div>
    )
}

export default ColorPicker;