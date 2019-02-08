/**
 * @providesModule DText
 * @flow
 */

'use strict';

import React, { PropTypes } from 'react';
import ReactNative, { Dimensions, StyleSheet } from 'react-native';

export function Text({style, ...props}: Object): ReactElement {
    return <ReactNative.Text style={[styles.font, style]} {...props} />;
}

export function Heading1({style, ...props}: Object): ReactElement {
    return <ReactNative.Text style={[styles.font, styles.h1, style]} {...props} />;
}

export function Paragraph({style, ...props}: Object): ReactElement {
    return <ReactNative.Text style={[styles.font, styles.p, style]} {...props} />;
}

const scale = Dimensions.get('window').width / 375;

function normalize(size: number): number {
    return Math.round(scale * size);
}

const styles = StyleSheet.create({
    font: {
        fontFamily: 'Helvetica-Light',
    }
});

