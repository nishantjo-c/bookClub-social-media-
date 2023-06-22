
// function Discussion(){
// 	return (
// 		<div>
// 			<h1>hey discussion!!!</h1>
// 		</div>
// 	);
// }

// export default Discussion;


import React, { useState, useEffect } from 'react';
import discussionCSS from './styles/discussion.module.css';

const Discussion = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [discussionData, setDiscussionData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('discussionData');
    if (storedData) {
      setDiscussionData(JSON.parse(storedData));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('discussionData', JSON.stringify(discussionData));
  }, [discussionData]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      name: name,
      comment: comment
    };

    setDiscussionData([...discussionData, newComment]);

    setName('');
    setComment('');
  };

  return (
    <div className={discussionCSS.discussionContainer}>
      <h2 className={discussionCSS.h2}>Discussion Form</h2>
      <form className={discussionCSS.form} onSubmit={handleSubmit}>
        <div className={discussionCSS.formGroup}>
          <label>Title:</label>
          <input className={discussionCSS.input} type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className={discussionCSS.formGroup}>
          <label>Description:</label>
          <textarea className={discussionCSS.textarea} value={comment} onChange={handleCommentChange}></textarea>
        </div>
        <button className={discussionCSS.button} type="submit">Submit</button>
      </form>
      <h3>Discussion Data:</h3>
      {discussionData.map((comment, index) => (
        <div className={discussionCSS.comment} key={index}>
          <p>Title: {comment.name}</p>
          <p>Description: {comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Discussion;
