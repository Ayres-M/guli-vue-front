import request from '@/utils/request'

export default{
    //获取所有评论
    getCommentPage(courseId, page, limit){
        return request({
            url: `/eduservice/comment/showComment/${courseId}/${page}/${limit}`,
            method: 'get'
        })
    },
    //添加评论
    addComment(comment){
        return request({
            url: `/eduservice/comment/addComment`,
            method: 'post',
            data: comment
        })
    },
}
