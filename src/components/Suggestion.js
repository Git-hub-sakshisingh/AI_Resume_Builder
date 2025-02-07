import React, { useState } from "react";
import Navbar from "./Navbar";

const Suggestions = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content:
        "Tip 1: Use a clean and simple layout for your resume. Focus on highlighting your skills and achievements rather than including unnecessary details. A clean design ensures your resume is easily readable and helps recruiters quickly spot your key skills and experience. Remember, less is more!",
      userName: "John Doe",
      author: "Jane Smith",
      reviewer: "Alex Lee",
      publishedDate: "2024-12-01",
      updatedDate: "2024-12-05",
      readTime: "3 min",
      likes: 0,
      dislikes: 0,
    },
    {
      id: 2,
      content:
        "Tip 2: Focus on your achievements, not just responsibilities. When listing your work experience, try to showcase specific accomplishments, metrics, or challenges you've overcome. This provides a clearer picture of what you've achieved and the value you can bring to potential employers.",
      userName: "Alice Johnson",
      author: "Mark Brown",
      reviewer: "Sally White",
      publishedDate: "2024-12-15",
      updatedDate: "2024-12-20",
      readTime: "4 min",
      likes: 0,
      dislikes: 0,
    },
  ]);
  const [newPost, setNewPost] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [author, setAuthor] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [readTime, setReadTime] = useState("");
  const [error, setError] = useState(""); // Error state for validation
  const [selectedPostId, setSelectedPostId] = useState(null); // Track selected post for expansion
  const [isPostFormVisible, setIsPostFormVisible] = useState(false); // Control visibility of post form

  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handlePostSubmit = () => {
    // Validate the required fields
    if (!userEmail.trim()) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(userEmail)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!userName.trim()) {
      setError("Name is required.");
      return;
    }

    if (!newPost.trim()) {
      setError("Post content is required.");
      return;
    }

    // Clear any previous errors
    setError("");

    // Save the new post
    const newPostData = {
      id: Date.now(),
      content: newPost,
      userName,
      author,
      reviewer,
      publishedDate,
      updatedDate,
      readTime,
      likes: 0,
      dislikes: 0,
    };

    setPosts([newPostData, ...posts]);
    // Reset the form fields after posting
    setNewPost("");
    setAuthor("");
    setReviewer("");
    setPublishedDate("");
    setUpdatedDate("");
    setReadTime("");
    setIsPostFormVisible(false); // Hide the form after post submission
  };

  const handlePostClick = (postId) => {
    // Toggle the selected post view
    if (selectedPostId === postId) {
      setSelectedPostId(null); // Close the post if it's already open
    } else {
      setSelectedPostId(postId); // Open the clicked post
    }
  };

  return (
    <div className="body">
    <Navbar/>
    <div
      style={{
        fontFamily: "'Lato', sans-serif",
        backgroundColor: "#f0f4f8", // Light grayish background
        paddingTop: "30px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <header
        style={{
          textAlign: "center",
          padding: "30px 50px",
          backgroundColor: "#4e4f88", // Stylish dark purple
          color: "#fff",
          borderRadius: "20px",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>AI Resume Builder Community</h1>
        <p style={{ fontSize: "1.3rem", fontWeight: "300" }}>
          Share tips and get advice from fellow professionals.
        </p>
      </header>

      {/* Main Content Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        {/* Left Section for Posts */}
        <div
          style={{
            flex: 2,
            marginRight: "30px",
            backgroundColor: "#fff",
            borderRadius: "15px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            overflowY: "auto",
            height: "calc(100vh - 220px)",
          }}
        >
          {/* Show Create Post Button */}
          {!isPostFormVisible && (
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <button
                onClick={() => setIsPostFormVisible(true)}
                style={{
                  backgroundColor: "#e63946", // Eye-catching red
                  color: "#fff",
                  padding: "14px 28px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.3rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                Create New Post
              </button>
            </div>
          )}

          {/* Recent Posts */}
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "2.2rem", color: "#4e4f88", fontWeight: "500" }}>
              Recent Posts:
            </h2>
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post.id}
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    marginBottom: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onClick={() => handlePostClick(post.id)}
                >
                  <h3
                    style={{
                      fontSize: "1.7rem",
                      color: "#9b4d96", // Soft purple color
                      fontWeight: "bold",
                    }}
                  >
                    {post.content}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      color: "#555",
                      fontWeight: "300",
                      marginTop: "10px",
                    }}
                  >
                    <strong>Written by:</strong> {post.author} <br />
                    <strong>Reviewed by:</strong> {post.reviewer} <br />
                    <strong>Published:</strong> {post.publishedDate} •{" "}
                    <strong>Updated:</strong> {post.updatedDate} •{" "}
                    <strong>Reading Time:</strong> {post.readTime}
                  </p>

                  {/* Show full post content when expanded */}
                  {selectedPostId === post.id && (
                    <div
                      style={{
                        marginTop: "20px",
                        fontSize: "1.2rem",
                        color: "#333",
                        lineHeight: "1.7",
                      }}
                    >
                      <p>{post.content}</p>
                      <p>
                        <strong>{post.userName}</strong> posted this.
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No posts yet. Be the first to share!</p>
            )}
          </div>
        </div>

        {/* Post Creation Form */}
        {isPostFormVisible && (
          <div
            style={{
              flex: 1,
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              marginLeft: "30px",
            }}
          >
            <h3
              style={{
                fontSize: "2.3rem",
                marginBottom: "30px",
                fontWeight: "700",
                color: "#4e4f88",
              }}
            >
              Create a New Post
            </h3>

            {/* User Info */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "25px",
                fontWeight: "300",
                fontSize: "1.1rem",
                color: "#777",
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  marginBottom: "10px",
                  padding: "14px",
                  fontSize: "1.2rem",
                  width: "100%",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
              <br />
              <input
                type="email"
                placeholder="Your Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                style={{
                  marginBottom: "10px",
                  padding: "14px",
                  fontSize: "1.2rem",
                  width: "100%",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
              {error && <p style={{ color: "red", fontSize: "1rem" }}>{error}</p>}
            </div>

            {/* Post Creation Fields */}
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
              style={{
                width: "100%",
                padding: "14px",
                fontSize: "1.2rem",
                height: "140px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            ></textarea>
            <br />

            {/* Additional Post Details */}
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={{
                marginBottom: "10px",
                padding: "14px",
                fontSize: "1.2rem",
                width: "100%",
                borderRadius: "10px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Reviewer"
              value={reviewer}
              onChange={(e) => setReviewer(e.target.value)}
              style={{
                marginBottom: "10px",
                padding: "14px",
                fontSize: "1.2rem",
                width: "100%",
                borderRadius: "10px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Published Date"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              style={{
                marginBottom: "10px",
                padding: "14px",
                fontSize: "1.2rem",
                width: "100%",
                borderRadius: "10px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Updated Date"
              value={updatedDate}
              onChange={(e) => setUpdatedDate(e.target.value)}
              style={{
                marginBottom: "10px",
                padding: "14px",
                fontSize: "1.2rem",
                width: "100%",
                borderRadius: "10px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Reading Time (e.g., 5 min)"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              style={{
                marginBottom: "10px",
                padding: "14px",
                fontSize: "1.2rem",
                width: "100%",
                borderRadius: "10px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
            <br />

            <button
              onClick={handlePostSubmit}
              style={{
                backgroundColor: "#e63946", // Red accent
                color: "#fff",
                padding: "14px 28px",
                border: "none",
                cursor: "pointer",
                fontSize: "1.3rem",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
            >
              Post
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Suggestions;
