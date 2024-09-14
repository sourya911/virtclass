import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LectureDiscussion = ({ sessionId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/api/session/${sessionId}/comments`);
        setComments(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchComments();
  }, [sessionId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/session/${sessionId}/comment`, { text: newComment });
      setComments([...comments, res.data]);
      setNewComment('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Discussion</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="border-b border-gray-200 py-2">
            <p>{comment.text}</p>
            {comment.replies && comment.replies.map(reply => (
              <div key={reply.id} className="ml-6 mt-2">
                <p>{reply.text}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border p-2 w-full"
          placeholder="Add a comment"
        />
        <button type="submit" className="bg-blue-500 text-white mt-2 px-4 py-2">Submit</button>
      </form>
    </div>
  );
};

export default LectureDiscussion;
