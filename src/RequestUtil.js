import Common from "./Common"

class RequestUtil {

    // Example POST method implementation:
    static    async  postData(url = 'localhost:8080/list', data = {}) {
        // Default options are marked with *
        //   Common.baseUrl
        if(!url.startsWith("http")){
            url= Common.baseUrl+url
        }
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        return response.json() // parses JSON response into native JavaScript objects
    }
}

export default RequestUtil
class Table3 extends Commonent {
    state = {
        selectedRowKeys: [],
        data: [],
        allList: [],
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({selectedRowKeys})
    }

    componentDidMount()
    {
        RequestUtil.postData('http://localhost:8080/list', {answer: 42}).then(res => {
            console.log("res") // JSON data parsed by `data.json()` call
            console.log(res)
            // data= res.data.content
            // data= res.Data.content

            // react 请求后端 放入数据
            // console.log('data')
            // console.log(data)

            let content = res.Data.content
            // content.
            for (let o of content) {
                // console.log("parse 之前");
                // console.log(o);
                // console.log("o.tags");
                console.log(o.tags);
                o.tags = JsonUtil.stringToArr(o.tags)
                // o.tags=JSON.parse(o.tags)
                o.key = o.id
                // console.log(o);
                console.log("o.tags 解析之后的");
                console.log(o.tags);
            }
            // console.log();
            this.setState({
                allList: content,
                data: content
            })
        })


        return <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.allList}/>
    }
}
