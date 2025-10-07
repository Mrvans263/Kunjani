import React from 'react';

const PostCard = ({ post }) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'all 0.2s ease-in-out',
    border: '1px solid #e5e7eb'
  };

  const cardHoverStyle = {
    ...cardStyle,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transform: 'translateY(-2px)'
  };

  const contentStyle = {
    padding: '1.5rem'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  };

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const avatarStyle = {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#dcfce7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#16a34a'
  };

  const userDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  };

  const userNameStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  };

  const userMetaStyle = {
    fontSize: '0.75rem',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const timeStyle = {
    fontSize: '0.75rem',
    color: '#9ca3af'
  };

  const postContentStyle = {
    marginBottom: '1rem',
    lineHeight: '1.6'
  };

  const postTextStyle = {
    fontSize: '0.875rem',
    color: '#374151',
    marginBottom: '1rem'
  };

  const postImageStyle = {
    width: '100%',
    height: '250px',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    objectFit: 'cover',
    backgroundColor: '#f3f4f6'
  };

  const imagePlaceholderStyle = {
    width: '100%',
    height: '250px',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
    fontSize: '3rem'
  };

  const actionsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid #f3f4f6'
  };

  const actionButtonsStyle = {
    display: 'flex',
    gap: '1rem'
  };

  const actionButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'none',
    border: 'none',
    fontSize: '0.875rem',
    color: '#6b7280',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    transition: 'all 0.2s'
  };

  const actionButtonHoverStyle = {
    backgroundColor: '#f3f4f6'
  };

  const statsStyle = {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.75rem',
    color: '#6b7280'
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(post.isLiked || false);
  const [likeCount, setLikeCount] = React.useState(post.likeCount || 0);
  const [imageError, setImageError] = React.useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInHours = Math.floor((now - postTime) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <div 
      style={isHovered ? cardHoverStyle : cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={contentStyle}>
        {/* Header - User Info */}
        <div style={headerStyle}>
          <div style={userInfoStyle}>
            <div style={avatarStyle}>
              {post.user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div style={userDetailsStyle}>
              <div style={userNameStyle}>{post.user.name}</div>
              <div style={userMetaStyle}>
                <span>@{post.user.username}</span>
                <span>•</span>
                <span>{post.user.university}</span>
              </div>
            </div>
          </div>
          <div style={timeStyle}>{formatTime(post.timestamp)}</div>
        </div>

        {/* Post Content */}
        <div style={postContentStyle}>
          <p style={postTextStyle}>{post.content}</p>
          
          {/* Post Image */}
          {post.image && !imageError ? (
            <img 
              src={post.image} 
              alt="Post content"
              style={postImageStyle}
              onError={handleImageError}
            />
          ) : post.image ? (
            <div style={imagePlaceholderStyle}>
              📸
            </div>
          ) : null}
        </div>

        {/* Actions */}
        <div style={actionsStyle}>
          <div style={actionButtonsStyle}>
            <button 
              onClick={handleLike}
              style={{
                ...actionButtonStyle,
                color: isLiked ? '#dc2626' : '#6b7280',
                ...(isHovered ? actionButtonHoverStyle : {})
              }}
            >
              {isLiked ? '❤️' : '🤍'} Like ({likeCount})
            </button>
            <button style={{...actionButtonStyle, ...(isHovered ? actionButtonHoverStyle : {})}}>
              💬 Comment ({post.commentCount || 0})
            </button>
            <button style={{...actionButtonStyle, ...(isHovered ? actionButtonHoverStyle : {})}}>
              🔄 Share
            </button>
          </div>
          
          <div style={statsStyle}>
            <span>{post.viewCount || 0} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;