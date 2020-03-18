import React, { Component, Fragment } from 'react';
import Link from 'next/link';

import DateFormatter from './DateFormatter';

export default class BlogItem extends Component {
  render() {
    const { title, intro, createdAt, userId, id, slug } = this.props.blog;
    return (
      <Fragment>
        <div className="content is-medium blog">
          <div>
            <h3 className="title has-text-centered">{title}</h3>
            <p className="subtitle is-6 has-text-centered">
              <Link href="#">
                <a>@rodin</a>
              </Link>{' '}
              &nbsp;
              <DateFormatter timestamp={createdAt} />
            </p>
            <p className="has-text-centered is-size-5 blog0-intro">{intro}</p>
            <div className="is-pulled-right is-size-7">
              <Link as={`/blog/${slug}`} href={`/blog?slug=${slug}`}>
                <a>Read more</a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          .blog {
            padding-bottom: 2rem;
            border-bottom: 2px solid;
          }
          .blog-intro {
            margin-top: 1rem;
          }
        `}</style>
      </Fragment>
    );
  }
}
