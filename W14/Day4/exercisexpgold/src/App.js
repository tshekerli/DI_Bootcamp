import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.componentDidCatch = this.componentDidCatch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    
    this.state = {
      isModalOpened: false,
      error: null,
      errorInfo: null
    };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      isModalOpened: true,
      error: error,
      errorInfo: errorInfo,
    });
  }
  
  toggleModal() {
    this.setState(prevState => ({ isModalOpened: !prevState.isModalOpened }));
  }
  
  render() {
    const {
      isModalOpened,
      error,
      errorInfo,
    } = this.state;
    
    return (
      <div>
        <ErrorBoundaryApp />
        {
          isModalOpened && error && (
            <Modal>
              <div>
                {this.state.error && this.state.error.toString()}
              </div>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.errorInfo.componentStack}
                <br />
                Please try it again
                <br />

              </details>
              <button onClick={this.toggleModal}>Close</button>
            </Modal>
          )
        }
      </div>
    );
  }
}

class ErrorBoundaryApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
    this.occurError = this.occurError.bind(this);
  }
  
  occurError() {
    this.setState({ hasError: true });
  }
  
  render() {
    if (this.state.hasError) {
       throw new Error('Something went wrong!');
    }

    return (
      <button onClick={this.occurError}>
        Occur an error
      </button>
    );
  }
}

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      (
        <div className="modal-background">
          <div className="modal-body">
            {this.props.children}
          </div>
        </div>
      ),
      document.getElementById("modal-root")
    )
  }
}
export default App;
