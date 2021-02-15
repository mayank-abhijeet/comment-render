import React from 'react';

const Reply = ({ replyDetails }) => {
  const { username, comment } = replyDetails || {};

  return (
    <div>
      <div>{username}</div>
      <div>{comment}</div>
    </div>
  );
};

export default Reply;
