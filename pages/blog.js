import React, { Component } from 'react';
import { withRouter } from 'next/router';
import fetchDocumentFromCollectionByFieldName from '../lib/utility';

class Blog extends Component {
  state = {
    blog: null
  };

  componentDidMount() {
    fetchDocumentFromCollectionByFieldName({
      collectionName: 'blogs',
      fieldName: 'slug',
      value: this.props.router.query.slug
    }).then(blog => {
      this.setState({ blog });
    });
  }

  render() {
    if (this.state.blog === null) {
      return <div>Not found</div>;
    }
    return (
      <div>
        <h1>This is blog page</h1>
        <h1>{this.props.router.query.slug}</h1>
        <h1>{this.state.blog.title}</h1>
      </div>
    );
  }
}

export default withRouter(Blog);
