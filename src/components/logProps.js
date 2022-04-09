import React, { Component, forwardRef } from "react";

export default function logProps(WrapComponent) {
     class LogProps extends Component {
        componentDidUpdate(prevProps, prevState) {
            console.log('old props:', prevProps);
            console.log('current props:', this.props);
        }

        render() {
            console.log(this.props)
            const { forwardedRef, ...rest } = this.props;
            return <WrapComponent {...rest} ref = { forwardedRef }/>;
        }
    }

    function WrapLog(props, ref) {
        return <LogProps {...props} forwardedRef = { ref } />
    }

    return forwardRef(WrapLog)

/*     return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef = { ref } />
    }) */
}