import request from '@/utils/request'

export default{
    //查询首页数据
    getIndexData(){
        return request({
            url: '/eduservice/indexfront/index',
            method: 'get'
        })
    }
}
