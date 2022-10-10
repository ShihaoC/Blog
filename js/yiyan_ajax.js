var data = "";
let author = "";
let from = "";
let hitokoto = "";
        $.ajax({
            type:"get",
            url:"https://v1.hitokoto.cn",
            data:JSON.stringify(data),
            success:(result)=>{
                if(result.from_who != null){
                    author = result.from_who
                }else{
                    author =  "暂无";
                }
                from = result.from
                hitokoto = result.hitokoto;
                inner()
            },error:(e)=>{
                console.log(e);
            }
        })

    let inner = ()=>{
        let hitokotoEle = $("#hitokoto_text");
        let fromEle = $("#from_text")
        hitokotoEle.html(hitokoto)
        fromEle.html("——"+from)
    }
    