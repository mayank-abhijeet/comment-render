import React, { useState, useEffect } from 'react';
import Reply from './reply';
import { getNestedCommentLayer } from '../utils/index';

const Comment = ({ commentDetails }) => {
  const [nestedComments, setNestedComments] = useState([]);
  const { username, comment } = commentDetails || {};

  useEffect(() => {
    if ([{ ...commentDetails }].length) {
      setNestedComments(getNestedCommentLayer(commentDetails) || []);
    }
  }, [commentDetails]);

  return (
    <div>
      {/* Parent username and comment */}
      <div>
        <div>{username}</div>
        <div>{comment}</div>
      </div>

      {/* Replies */}
      {nestedComments.map((commentDetails) => {
        const { id, nestedLevel } = commentDetails;
        return (
          <div style={{ marginLeft: nestedLevel * 30 }}>
            <Reply key={id} replyDetails={commentDetails} />
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
