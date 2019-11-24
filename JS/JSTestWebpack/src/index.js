//'use strict';

import  './css/test.css';

const allBlogs = document.getElementById('allBlogs');
const showBlogs = document.getElementById('showBlogs');
const viewPosts = document.getElementById('viewPosts');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        data.forEach(blog => {
            createBlog(blog.name, blog.website, blog.company, blog.id);
        });
    });

const createBlog = function (name, website, companyInfo, id) {

    const blogName = document.createElement("div");
    blogName.innerHTML = `Blog Author: ${name}`;
    blogName.className = "blogName";
    blogName.setAttribute('id', `${name}'s blog`);
    document.getElementById('allBlogs').appendChild(blogName);

    const web = document.createElement("div");
    web.className = 'web';
    web.innerHTML = `Website: ${website}`;

    document.getElementById(`${name}'s blog`).appendChild(web);

    const company = document.createElement("div");
    company.className = 'company';
    company.innerHTML = `Company: ${companyInfo.name} <br> ${companyInfo.catchPhrase} <br> ${companyInfo.bs}`;

    document.getElementById(`${name}'s blog`).appendChild(company);

    blogName.addEventListener('click', () => {
        showPosts(id);
    });
    blogName.addEventListener('mouseenter', () => blogName.style.backgroundColor = 'lightgrey');
    blogName.addEventListener('mouseleave', () => blogName.style.backgroundColor = 'white');
};

showBlogs.addEventListener('click', () => {
    clearPosts();
    allBlogs.style.display = 'block';
    showBlogs.style.display = 'none';
    viewPosts.style.display = 'none';
});

const clearPosts = function () {
    document.getElementById('post1').innerHTML = '';
    document.getElementById('post2').innerHTML = '';
    document.getElementById('post3').innerHTML = '';
};

const showComments = function (postID, thisSpot) {
    if (document.getElementById(`commentButton${thisSpot}`).innerHTML === 'Show Comments') {
        fetch(`https://jsonplaceholder.typicode.com	/comments?postId=${postID}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(comment => {
                    const allComments = document.createElement('div');
                    allComments.id = `allComments${thisSpot}`;
                    allComments.style.display = 'block';
                    document.getElementById(`post${thisSpot}`).appendChild(allComments);
                    const commentName = document.createElement('p');
                    commentName.innerHTML = `Commenters Name: ${comment.name}`;
                    document.getElementById(`allComments${thisSpot}`).appendChild(commentName);
                    const commentEmail = document.createElement('p');
                    commentEmail.innerHTML = `Commenters Email: ${comment.email}`;
                    document.getElementById(`allComments${thisSpot}`).appendChild(commentEmail);
                    const commetnBody = document.createElement('p');
                    commetnBody.innerHTML = `Comment: ${comment.body}`;
                    document.getElementById(`allComments${thisSpot}`).appendChild(commetnBody);
                });
            });
    }
    if (document.getElementById(`commentButton${thisSpot}`).innerHTML === 'Hide Comments') {
        if (document.getElementById(`allComments${thisSpot}`)) {
            const allComments = document.getElementById(`allComments${thisSpot}`);
            allComments.style.display = 'none';
        }
    }
};

const showPosts = function (id) {
    clearPosts();
    let postNum = 0;
    //
    let posts = [];
    allBlogs.style.display = 'none';
    showBlogs.style.display = 'block';
    viewPosts.style.display = 'block';
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < posts.length; i++) {
                posts[i].id = i;
            }
            data.forEach(post => {
                posts.push(post);
            });

            pick3(posts, postNum);

            document.getElementById('next').addEventListener('click', () => {
                if (postNum < posts.length - 2) {
                    postNum += 3;
                    pick3(posts, postNum);
                }
            });

            document.getElementById('prev').addEventListener('click', () => {
                if (postNum > 0) {
                    postNum -= 3;
                    pick3(posts, postNum);
                }
            });
        });
};

const pick3 = function (posts, postNum) {
    clearPosts();
    let postSpot = 1;
    for (let i = 0; i < 3; i++) {
        if (postNum >= posts.length - 1) {
            postNum = 0;
        } else {


            const postTitle = document.createElement("p");
            postTitle.innerHTML = `${posts[postNum].title}`;
            const postBody = document.createElement("p");
            postBody.innerHTML = `${posts[postNum].body}`;

            document.getElementById(`post${postSpot}`).appendChild(postTitle);
            document.getElementById(`post${postSpot}`).appendChild(postBody);

            const postID = posts[postNum].id;
            const commentButton = document.createElement("BUTTON");
            commentButton.id = `commentButton${postSpot}`;
            commentButton.innerHTML = 'Show Comments';
            const thisSpot = postSpot;
            commentButton.addEventListener('click', () => {
                showComments(postID, thisSpot);
                if (commentButton.innerHTML === 'Show Comments') {
                    commentButton.innerHTML = 'Hide Comments';
                } else {
                    commentButton.innerHTML = 'Show Comments';
                }
            });
            document.getElementById(`post${postSpot}`).appendChild(commentButton);

            postNum++;
            postSpot++;
        }
    }
};
