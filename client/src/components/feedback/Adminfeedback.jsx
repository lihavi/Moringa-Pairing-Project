import React, { useEffect, useState } from 'react'
 import './feedback.css';
import axios from 'axios';

function Adminfeedback({token}) {
    const [feedback, setFeedback] = useState([]);

    const fetchfeedback = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/feedbacklist`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setFeedback(response.data);
          console.log(response.data)
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchfeedback();
      }, []);
  return (
    <div className="container d-flex pt-3 me-5 fcont">
      
                <div className="card cardf bg-white ms-5 mb-5 ">
                    <h5 className="mb-1 h5"><u>All FeedBacks</u></h5>
                    {feedback.map((feedback) => ( 
                    <div className="reviews-members pt-5 ms-5 mb-4">
                        <div className="media">
                            <div className="media-body">
                                <div className="reviews-members-header ms-3">
                                    <h6 className="mb-1"><a className="text-black" href="/">{feedback.fullname}</a></h6>
                                    <p className="text-black">{feedback.created_at}</p>
                                </div>
                                <div className="reviews-members-body text-black ms-4">
                                    <p>{feedback.comment}</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                       ))}

                    <div className="reviews-members pt-3 ms-5 mb-4">
                        <div className="media">
                            <div className="media-body">
                                <div className="reviews-members-header ms-3">
                                    <h6 className="mb-1"><a className="text-black" href="/">Singh Osahan</a></h6>
                                    <p className="text-black">Tue, 20 Mar 2020</p>
                                </div>
                                <div className="reviews-members-body text-black ms-4">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections </p>
                                </div>    
                            </div>
                        </div>
                    </div>

                    <div className="reviews-members pt-3 ms-5 mb-4">
                        <div className="media">
                            <div className="media-body">
                                <div className="reviews-members-header ms-3">
                                    <h6 className="mb-1"><a className="text-black" href="/">Singh Osahan</a></h6>
                                    <p className="text-black">Tue, 20 Mar 2020</p>
                                </div>
                                <div className="reviews-members-body text-black ms-4">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections </p>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className="reviews-members pt-3 ms-5 mb-5">
                        <div className="media">
                            <div className="media-body">
                                <div className="reviews-members-header ms-3">
                                    <h6 className="mb-1"><a className="text-black" href="/">Singh Osahan</a></h6>
                                    <p className="text-black">Tue, 20 Mar 2020</p>
                                </div>
                                <div className="reviews-members-body text-black ms-4">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections </p>
                                </div>    
                            </div>
                        </div>
                    </div>

                </div>

            </div>
  )
}

export default Adminfeedback
