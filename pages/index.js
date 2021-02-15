import React from 'react';
import Comment from '../components/comment';
import { allComments } from '../utils/index';

const HomePage = () => {
  return (
    <>
      {allComments.map((commentDetails) => {
        const { id } = commentDetails;
        return <Comment key={id} commentDetails={commentDetails} />;
      })}
    </>
  );
};

export default HomePage;
