import React from 'react'

export default function Footer(props) {


    return (
        <div>
            {/* TODO>>>REMOVE BELOW>>>> ADD CONTENT */}
            hello im a footer
            <button onClick={() => props.switchTheme()}>{`DARK MODE ON: ${props.getTheme()}`}</button>
        </div>
    )
}
