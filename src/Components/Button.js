import React from 'react'

export default function Button(props) {
    return (
        <div class="btn-container">
            <a class={`btn ${props.getTheme()} ${props.color}`} href={props.href}>{props.text}</a>
        </div>
    )
}
