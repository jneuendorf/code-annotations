'use babel'

import React from 'react'


const icons = {
    text: 'file-text',
    image: 'file-media',
    html: 'file-code',
    frame: 'browser',
    link: 'link',
}


export default class AnnotationList extends React.PureComponent {
    render() {
        const {
            annotations,
            selectedIndex,
            selectAnnotation,
            deleteAnnotation,
            editAnnotation,
        } = this.props
        return <ol className='list-group'>
            {annotations.map((annotation, index) => {
                const {title, type} = annotation
                const isSelected = index === selectedIndex
                const icon = type in icons ? `icon-${icons[type]}` : ''
                return <li
                    className={`two-lines ${isSelected ? 'selected' : ''}`}
                    onClick={() => selectAnnotation(index)}
                    key={`${title}_${type}`}
                >
                    <div
                        className='status icon icon-trashcan'
                        onClick={event => {
                            event.preventDefault()
                            event.stopPropagation()
                            deleteAnnotation(index)
                        }}
                    />
                    <div
                        className='status icon icon-pencil'
                        onClick={event => {
                            event.preventDefault()
                            event.stopPropagation()
                            editAnnotation(index)
                        }}
                    />
                    <div className={`primary-line icon ${icon}`}>
                        {title}
                    </div>
                    <div className='secondary-line no-icon'>
                        {type}
                    </div>
                </li>
            })}
        </ol>
    }
}