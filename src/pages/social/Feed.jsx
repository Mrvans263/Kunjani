import React, { useState } from 'react';
import PostCard from '../../components/social/PostCard';
import CreatePost from '../../components/social/CreatePost';

const Feed = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'Tendai Moyo',
        username: 'tendai_m',
        university: 'Moscow State University',
        avatar: null
      },
      content: 'Just arrived in Moscow for the new semester! 🇷🇺 The winter is beautiful but definitely cold. Any tips for surviving Russian winter? ❄️ #NewInMoscow #WinterWonderland',
      image: '❄️🏙️',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      likeCount: 12,
      commentCount: 5,
      viewCount: 45,
      isLiked: false
    },
    {
      id: 2,
      user: {
        name: 'Kudzai Ndlovu',
        username: 'kudzai_n',
        university: 'Saint Petersburg State University',
        avatar: null
      },
      content: 'Selling my winter jacket before I head back to Zim. Size L, excellent condition. Perfect for Russian winter! DM me if interested. 🧥 #Marketplace #WinterGear',
      image: '🧥✨',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      likeCount: 8,
      commentCount: 3,
      viewCount: 67,
      isLiked: true
    },
    {
      id: 3,
      user: {
        name: 'Maria Chiweshe',
        username: 'maria_c',
        university: 'Peoples\' Friendship University',
        avatar: null
      },
      content: 'Looking for someone traveling to Harare next month. Need to send some important documents home. Will compensate for the help! ✈️📦 #TravelHelp #ZimbabweBound',
      image: '✈️📦',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      likeCount: 15,
      commentCount: 7,
      viewCount: 89,
      isLiked: false
    }
  ]);

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem 1rem'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '2rem',
    flexDirection: 'column'
  };

  const titleStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem'
  };

  const descriptionStyle = {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    backgroundColor: '#16a34a',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '1rem'
  };

  const postsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <div>
          <h1 style={titleStyle}>Social Feed</h1>
          <p style={descriptionStyle}>
            Connect with fellow Zimbabwean students in Russia
          </p>
        </div>
        <button 
          onClick={() => setShowCreatePost(true)}
          style={buttonStyle}
        >
          <span>📝</span>
          Create Post
        </button>
      </div>

      {/* Posts Container */}
      <div style={postsContainerStyle}>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePost 
          onClose={() => setShowCreatePost(false)}
          onCreate={handleCreatePost}
        />
      )}
    </div>
  );
};

export default Feed;