import React from 'react'
export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(err) {
    return {hasError: true}
  }
  componentDidCatch(err, info) {
    //发送服务
  }
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
/*
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
*/