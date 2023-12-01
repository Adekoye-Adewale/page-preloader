import React from 'react';
import { words } from './data';
import style from './Loader.module.css'

export default function index() {
    return (
        <div>
            {words.map((word, index) => {
                return (
                    <span key={index}>
                        {word}
                    </span>
                );
            })}
        </div>
    );
};
