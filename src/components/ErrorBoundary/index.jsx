import React, { ErrorInfo } from 'react';
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './style';




class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>This Page is Broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
