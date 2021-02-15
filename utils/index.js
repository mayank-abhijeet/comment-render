export const allComments = [
  {
    id: '1',
    username: 'Mayank',
    comment: 'this is a test comment',
    replies: [
      {
        replyId: 'r1',
        username: 'Mayank r1',
        comment: 'this is a test comment',
        replies: [
          {
            replyId: 'r3',
            username: 'Mayank r3',
            comment: 'this is a test comment',
            replies: [
              {
                replyId: 'r4',
                username: 'Mayank r4',
                comment: 'this is a test comment',
              },
            ],
          },
          {
            replyId: 'r5',
            username: 'Mayank r5',
            comment: 'this is a test comment',
          },
        ],
      },
      {
        replyId: 'r2',
        username: 'Mayank r2',
        comment: 'this is a test comment',
      },
    ],
  },
  {
    id: '2',
    username: 'Mayank 2',
    comment: 'this is a test comment',
  },
  {
    id: '3',
    username: 'Mayank 3',
    comment: 'this is a test comment',
  },
];

export const getNestedCommentLayer = (
  comments,
  nestedComments = [],
  nestedLevel = 1,
) => {
  const { replies = [] } = comments;
  if (replies.length) {
    replies.forEach((reply) => {
      const { replyId, username, comment, replies = [] } = reply;
      const nestedCommentObj = {
        replyId,
        username,
        comment,
        nestedLevel,
      };
      nestedComments.push(nestedCommentObj);
      getNestedCommentLayer(reply, nestedComments, nestedLevel + 1);
    });
  }
  return nestedComments;
};

// export const getNestedCommentLayer = (
//   comments,
//   nestedComments = [],
//   nestedLevel = 1,
// ) => {
//   comments.forEach((comment) => {
//     const { replies = [] } = comment;
//     console.log('replies', replies);
//     if (replies.length) {
//       replies.forEach((reply) => {
//         const { replyId, username, comment } = reply;
//         const nestedCommentObj = {
//           replyId,
//           username,
//           comment,
//           nestedLevel,
//         };
//         nestedComments.push(nestedCommentObj);
//       });
//       getNestedCommentLayer(replies, nestedComments, nestedLevel + 1);
//     }
//   });
//   return nestedComments;
// };
