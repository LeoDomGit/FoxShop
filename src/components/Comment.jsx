/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { toast } from 'react-toastify';

function Comment({ productId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);
  const [users, setUsers] = useState([]);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasCommented, setHasCommented] = useState(false);

  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName') || 'Ẩn danh';

  // Kiểm tra nếu người dùng đã đăng nhập
  useEffect(() => {
    if (userId) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userId]);

  // Kiểm tra nếu người dùng đã mua sản phẩm
  const checkPurchased = async () => {
    try {
      const response = await axios.get(`/orders/check-purchase/${productId}`, {
        params: { userId },
      });

      if (response.data.hasPurchased) {
        setHasPurchased(true);
      } else {
        setHasPurchased(false);
      }
    } catch (error) {
      console.error('Error checking purchase:', error);
      setHasPurchased(false);
    }
  };

  const checkIfUserHasCommented = async () => {
    try {
      const response = await axios.get(`/comment/check-comment`, {
        params: { userId, productId },
      });

      if (response.data.hasCommented) {
        setHasCommented(true);
      } else {
        setHasCommented(false);
      }
    } catch (error) {
      console.error('Error checking comment:', error);
      setHasCommented(false);
    }
  };

  useEffect(() => {
    if (userId) {
      checkPurchased();
      checkIfUserHasCommented();
    }
  }, [userId, productId]);

  // Lấy danh sách người dùng từ API /user
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/user');
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('/comment');
        const filteredComments = response.data.filter(
          (comment) => comment.id_product === productId
        );
        const commentsWithUserNames = filteredComments.map((comment) => {
          const user = users.find((user) => user.id === comment.id_user);
          return {
            ...comment,
            userName: user ? user.name : 'Ẩn danh',
          };
        });

        setComments(commentsWithUserNames);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [productId, users]);

  const formatDate = (dateString) => {
    if (!dateString || isNaN(new Date(dateString).getTime())) {
      return 'Ngày không hợp lệ';
    }

    const date = new Date(dateString);

    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (commentText && rating) {
      try {
        const newComment = {
          id_product: productId,
          id_user: userId,
          comment: commentText,
          rating,
          status: 1,
          review_date: new Date().toISOString(),
          userName: userName,
        };

        await axios.post('/review', newComment);
        toast.success('Đã gửi bình luận');

        window.location.reload();
        setCommentText('');
        setRating(0);
      } catch (error) {
        console.error('Error posting comment:', error);
      }
    } else {
      toast.info('Vui lòng điền đầy đủ thông tin đánh giá.');
    }
  };

  const handleRatingChange = (value) => setRating(value);

  return (
    <div className='container mx-auto px-5 mb-2 mt-[100px] flex flex-col gap-10'>
      <div className='font-semibold text-[20px]'>Bình luận sản phẩm</div>
      {isLoggedIn && hasPurchased && !hasCommented ? (
        <form onSubmit={handleSubmit} className='mb-8'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Bình luận
            </label>
            <textarea
              className='w-full px-3 pt-3 pb-8 border border-gray-300 outline-none'
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder='Viết bình luận của bạn'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Đánh giá
            </label>
            <div className='flex space-x-2'>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type='button'
                  key={star}
                  className={`text-2xl ${
                    star <= rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  onClick={() => handleRatingChange(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button
            type='submit'
            className='px-4 py-2 bg-[#fe5c17] text-white hover:bg-[#fe3e17] shadow-md'
          >
            Gửi bình luận
          </button>
        </form>
      ) : hasCommented ? (
        <p className='text-red-500'>Bạn đã bình luận về sản phẩm này rồi.</p>
      ) : (
        <p className='text-red-500'>
          Bạn phải đăng nhập và mua sản phẩm này để bình luận.
        </p>
      )}

      {/* Hiển thị danh sách bình luận */}
      <div className='space-y-6'>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className='border p-4 shadow-sm'>
              <div className='flex items-center justify-between'>
                <h3 className='font-semibold text-base'>
                  {comment.userName || 'Ẩn danh'}{' '}
                  {formatDate(comment.created_at)}
                </h3>
                <div className='flex space-x-1 text-yellow-500'>
                  {[...Array(comment.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className='mt-2'>{comment.comment}</p>
            </div>
          ))
        ) : (
          <p>Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
        )}
      </div>
    </div>
  );
}

export default Comment;
