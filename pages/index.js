import Head from 'next/head';
import '../assets/sass/styles.scss';
import React from 'react';
import { firebase, firestore } from '../lib/db';
import {
  fetchCollectionDocs,
  fetchDocumentFromCollection,
  fetchDocumentFromCollectionByFieldName
} from '../lib/utility';
 
import BlogList from '../components/BlogList';

class Index extends React.Component {
  state = {
    blogs: []
  };

  constructor(props) {
    super(props);
    this.collectionRef = firestore.collection('blogs');
  }

  static async getInitialProps() {
    const blogs = [];
    await firestore
      .collection('blogs')
      .get()
      .then(documentSet => {
        documentSet.forEach(doc => {
          blogs.push({
            id: doc.id,
            ...doc.data()
          });
        });
        return blogs;
      });
    return { blogs };
  }

  blogListener = () => {
    fetchCollectionDocs('blogs').then(blogs => {
      this.setState({ blogs });
    });
  };

  // real time changes
  componentDidMount() {
    this.unsubscribe = this.collectionRef.onSnapshot(
      this.blogListener,
      error => {
        console.log(`Error on firestore snapshot: ${error}`);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    console.log(this);
    return (
      <div>
        <Head>
          <title>{process.env.PROJECT_NAME}</title>
        </Head>
        <hr />
        <div>
          <h2>From State</h2>
          {this.state.blogs.map(blog => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </div>
        <hr />
        <div className="jass">
          <BlogList blogs={this.state.blogs} />
        </div>
      </div>
    );
  }
}

export default Index;
