import React, { useState } from 'react';

const CreatePost = ({ onClose, onCreate }) => {
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageType, setImageType] = useState('none'); // 'none', 'emoji', 'upload'

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '1rem'
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    maxWidth: '500px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto'
  };

  const headerStyle = {
    padding: '1.5rem',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827'
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#6b7280'
  };

  const formStyle = {
    padding: '1.5rem'
  };

  const textareaStyle = {
    width: '100%',
    minHeight: '120px',
    padding: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
    marginBottom: '1.5rem'
  };

  const imageSectionStyle = {
    marginBottom: '1.5rem'
  };

  const sectionTitleStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.75rem'
  };

  const imageOptionsStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem'
  };

  const imageOptionStyle = {
    flex: 1,
    padding: '1rem',
    border: '2px solid #d1d5db',
    borderRadius: '0.5rem',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };

  const selectedOptionStyle = {
    ...imageOptionStyle,
    borderColor: '#16a34a',
    backgroundColor: '#f0fdf4'
  };

  const emojiGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.5rem',
    marginBottom: '1rem'
  };

  const emojiButtonStyle = {
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    background: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };

  const selectedEmojiStyle = {
    ...emojiButtonStyle,
    borderColor: '#16a34a',
    backgroundColor: '#dcfce7'
  };

  const previewStyle = {
    backgroundColor: '#f8fafc',
    borderRadius: '0.5rem',
    padding: '2rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem'
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end'
  };

  const cancelButtonStyle = {
    padding: '0.75rem 1.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    color: '#374151',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer'
  };

  const postButtonStyle = {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    backgroundColor: '#16a34a',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer'
  };

  const disabledButtonStyle = {
    ...postButtonStyle,
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed'
  };

  const popularEmojis = [
    '❄️', '🏙️', '🧥', '✨', '✈️', '📦', '📚', '🎓',
    '🍛', '🇿🇼', '👨‍💻', '🌅', '💰', '💱', '🎉', '❤️'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postContent.trim()) return;

    const newPost = {
      id: Date.now(),
      user: {
        name: 'You',
        username: 'you',
        university: 'Your University'
      },
      content: postContent,
      image: selectedImage,
      timestamp: new Date().toISOString(),
      likeCount: 0,
      commentCount: 0,
      viewCount: 0,
      isLiked: false
    };

    onCreate(newPost);
    onClose();
  };

  const handleEmojiSelect = (emoji) => {
    setSelectedImage(emoji);
    setImageType('emoji');
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h2 style={titleStyle}>Create Post</h2>
          <button onClick={onClose} style={closeButtonStyle}>
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={formStyle}>
          {/* Post Content */}
          <textarea
            placeholder="What's on your mind? Share with the community..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            style={textareaStyle}
            maxLength={500}
          />

          {/* Character Count */}
          <div style={{ textAlign: 'right', fontSize: '0.75rem', color: '#6b7280', marginBottom: '1.5rem' }}>
            {postContent.length}/500 characters
          </div>

          {/* Image Section */}
          <div style={imageSectionStyle}>
            <h3 style={sectionTitleStyle}>Add an image (optional)</h3>
            
            {/* Image Type Selection */}
            <div style={imageOptionsStyle}>
              <div 
                style={imageType === 'none' ? selectedOptionStyle : imageOptionStyle}
                onClick={() => {
                  setImageType('none');
                  setSelectedImage(null);
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🚫</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>No Image</div>
              </div>
              
              <div 
                style={imageType === 'emoji' ? selectedOptionStyle : imageOptionStyle}
                onClick={() => setImageType('emoji')}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>😊</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Emoji</div>
              </div>
            </div>

            {/* Emoji Picker */}
            {imageType === 'emoji' && (
              <div>
                <div style={sectionTitleStyle}>Choose an emoji:</div>
                <div style={emojiGridStyle}>
                  {popularEmojis.map((emoji, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleEmojiSelect(emoji)}
                      style={selectedImage === emoji ? selectedEmojiStyle : emojiButtonStyle}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Preview */}
          {(selectedImage && imageType === 'emoji') && (
            <div style={imageSectionStyle}>
              <div style={sectionTitleStyle}>Preview:</div>
              <div style={previewStyle}>
                {selectedImage}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div style={buttonGroupStyle}>
            <button type="button" onClick={onClose} style={cancelButtonStyle}>
              Cancel
            </button>
            <button 
              type="submit" 
              style={!postContent.trim() ? disabledButtonStyle : postButtonStyle}
              disabled={!postContent.trim()}
            >
              Post to Feed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;