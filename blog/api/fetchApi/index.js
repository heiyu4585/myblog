import axios from "axios/index";

export function indexData(indexCurrentPage, indexPageItems) {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8080/api',
            data: {
                query:
                    `
                        {
                            articles(page_no:${indexCurrentPage},page_items:${indexPageItems}){
                              page_items
                              page_no
                              total_items
                              rows{
                                 art_id
                                art_title
                                art_content
                                art_des
                                art_create_time
                                category_name
                                category_url
                              }
                            }
                      categories {
                        category_id
                        category_name
                        category_des
                        category_url
                      }
}
                    `
            }
        })
            .then(function (response) {
                resolve(response.data.data)
            }).catch(reject);

    });
}

export function categoryData({currentPage,pageItems,categoryId}) {

    return new Promise(function (resolve, reject) {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8080/api',
                data: {
                    query:
                        `
                        {
                         articles(page_no:${currentPage},page_items:${pageItems},category_id:${categoryId}){
                          page_items
                          page_no
                          total_items
                          rows{
                         art_id
                        art_title
                        art_content
                        art_des
                        art_create_time
                        category_name
                        category_url
  }
}
             categories {
                        category_id
                        category_name
                        category_des
                        category_url
                      }
}
                    `
                }
            })
                .then(function (response) {
                    resolve(response.data.data)
                }).catch(reject);
    });
}

export function getArticle({articleId}) {

    return new Promise(function (resolve, reject) {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8080/api',
            data: {
                query:
                    `
                            {
                              article(art_id:${articleId}){
                                art_id
                                art_title
                                art_des
                                art_content
                                art_create_time
                                category_url
                                category_name
                              }
                            }
                    `
            }
        })
            // .then(function (response) {
            //     this.articleContent =response.data.data.article[0];
            // }.bind(this));
                .then(function (response) {
                    resolve(response.data.data)
                }).catch(reject);
    });
}

