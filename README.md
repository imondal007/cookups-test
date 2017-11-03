Let’s say you have a blog site which shows list of blogs in the main page. Blogs may be as simple as some texts. Now you want to add comment section for each blog. Each blog has different comments, so you need to know which comments are related to which blog. So your comment module needs to know the blog ID (or other unique identifier) so that it can show comments only related to that blog. Also you can add new comment using a text input and it’ll show up with the rest of the comments (like Facebook).


You don’t need to have a backend for the task, assume that comment module has already called backed api and stored previous comments in a variable. Just push new comments into that when you make a new comment.
