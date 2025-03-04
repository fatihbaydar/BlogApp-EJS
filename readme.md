# BLOG APP WITH EJS

This is a blog app project where I have made a template that I already had dynamic with the help of ejs.

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    package.json
    readme.md
    public/
        assets/
            bs/
                css/
                    bootstrap.min.css
                    bootstrap.min.css.map
                    bootstrap.rtl.min.css
                    bootstrap.rtl.min.css.map
                js/
                    bootstrap.bundle.min.js
                    bootstrap.bundle.min.js.map
            js/
                color-modes.js
            blog.css
        components/
            categories.ejs
            footer.ejs
            header.ejs
            pagination.ejs
            posts.ejs
            recentPost.ejs
        error.ejs
        index.ejs
        loginForm.ejs
        postForm.ejs
        postRead.ejs

    src/
        controllers/
            api/
                blogCategoryController.js
                blogPostController.js
                userController.js
            view/
                blogCategoryController.js
                blogPostController.js
                userController.js
        helpers/
            generatePagination.js
            passwordEncrypt.js
            removeQueryParam.js
            sync.js
        middlewares/
            errorHandler.js
            queryHandler.js
        models/
            blogCategoryModel.js
            blogPostModel.js
            userModel.js
        routes/
            api/
                blogCategoryRoute.js
                blogPostRoute.js
                index.js
                userRoute.js
            view/
                blogCategoryRoute.js
                blogPostRoute.js
                index.js
                userRoute.js
        dbConnection.js
```
