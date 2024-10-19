import React, { useState, useEffect } from 'react';

function Comment() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);

  // Hàm giả lập việc lấy bình luận từ API (mock API)
  useEffect(() => {
    // Đây là dữ liệu mock, giả lập lấy từ API
    const mockComments = [
      { userName: 'Nguyễn Văn A', commentText: 'Sản phẩm rất tốt!', rating: 5 },
      {
        userName: 'Trần Thị B',
        commentText: 'Chất lượng ổn, giá cả hợp lý.',
        rating: 4,
      },
      {
        userName: 'Lê Minh C',
        commentText: 'Giao hàng nhanh chóng!',
        rating: 5,
      },
    ];

    // Mô phỏng thời gian lấy dữ liệu từ API
    setTimeout(() => {
      setComments(mockComments);
    }, 1000); // Giả lập việc "chờ đợi" API phản hồi trong 1 giây
  }, []);

  // Hàm xử lý khi người dùng gửi bình luận
  const handleSubmit = (e) => {
    e.preventDefault();

    if (commentText && rating) {
      const newComment = {
        commentText,
        rating,
      };

      // Cập nhật danh sách bình luận với bình luận mới
      setComments([...comments, newComment]);
      setCommentText('');
      setRating(0);
    } else {
      alert('Vui lòng điền đầy đủ thông tin và đánh giá.');
    }
  };

  // Hàm xử lý khi chọn đánh giá sao
  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mb-5 lg:mb-5 md:mb-5 flex flex-col gap-10'>
        <div className='font-semibold text-[20px]'>Bình luận sản phẩm</div>
        {/* Form thêm bình luận */}
        <form onSubmit={handleSubmit} className='mb-8'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Bình luận
            </label>
            <textarea
              className='w-full px-3 py-3 border border-gray-300 outline-none'
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder='Viết bình luận của bạn'
              required
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
            className='px-4 py-2 bg-[#fe5c17] text-white  hover:bg-[#fe3e17] shadow-md'
          >
            Gửi bình luận
          </button>
        </form>

        {/* Hiển thị danh sách các bình luận và đánh giá */}
        <div className='space-y-6'>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className='border p-4 shadow-sm'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-semibold text-base'>
                    {comment.userName}
                  </h3>
                  <div className='flex space-x-1 text-yellow-500'>
                    {[...Array(comment.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className='mt-2'>{comment.commentText}</p>
              </div>
            ))
          ) : (
            <p>Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
