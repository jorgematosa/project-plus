import React from 'react';

import FourKIcon from '@material-ui/icons/FourK';

import classes from './Example.module.css';

const example = (props: any) => (
    <div className={classes.exampleCss}>
        <h1 className={classes.header}>Test Header  <FourKIcon /></h1>
    </div>
);

export default example;