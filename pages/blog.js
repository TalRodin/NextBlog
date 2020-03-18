import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import fetchDocumentFromCollectionByFieldName from '../lib/utility';
import DateFormatter from '../components/DateFormatter';

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

    const { title, userId, intro, content, createdAt } = this.state.blog;

    return (
      <Fragment>
        <div className="content is-medium">
          <div>
            <h1 className="title has-text-centered">{title}</h1>
            <p className="subtitle is-6 has-text-centered">
              <Link href="#">
                <a>@rodin</a>
              </Link>{' '}
              &nbsp;
              <DateFormatter timestamp={createdAt} />
            </p>
            <p className="has-text-centered is-size-4">{intro}</p>
            <div className="columns">
              <div className="column is-9">
                <div className="is-size-6">{content}</div>
              </div>
              <div className="column is-3">
                Other blogs by @rodin
                <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Blog);
