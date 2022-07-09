import request from '@/utils/request'

export default{
    //条件分页课程查询
    getCourseList(page, limit, searchObj){
        return request({
            url: `/eduservice/coursefront/getFrontCOurseList/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },
    //查询所有分类
    getAllSubject(){
        return request({
            url: `/eduservice/subject/getAllSubject`,
            method: 'get'
        })
    },
    //课程详情
    getCourseInfo(courseId) {
        return request({
            url: `/eduservice/coursefront/getFrontCourseInfo/${courseId}`,
            method: 'get'
        })
    },
}
