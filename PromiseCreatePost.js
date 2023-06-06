const posts=[

    {

      title:'Post One',

      body:'This is post one'

    },

    {

      title:'Post two',

      body:'This is post two'

    }

  ];

function getPosts(){

    setTimeout(()=>{

      let output=''

      posts.forEach((post,index)=>{

        console.log(post.title)

        output+=`<li>${post.title}</li>`

      });

      document.body.innerHTML=output;

    },1000)

}

function createPost(post){

    return new Promise((res,rej)=>{

        setTimeout(()=>{

            posts.push(post)

            res()

        },2000);

})

}

function updateLastUserActivityTime(tes){

    return new Promise((res,rej)=>{

        setTimeout(()=>{

            const date = new Date()

            console.log(`${tes} Post :${date}`)

        },1000)

    })

} 

function deletePost(){

    return new Promise((res,rej)=>{

        setTimeout(()=>{

            if (posts.length!=0){

                const delblog=posts.pop()

                res(delblog)

            }else{

                rej("ERROR:Empty Array")

            }

        },1000)

    })

}

updateLastUserActivityTime('Before  Creating')



const promise1=createPost({

    title:'Post three',

    body:'This is post three'

  });

  const promise2=createPost({

    title:'Post four',

    body:'This is post four'

  })

Promise.all([promise1,promise2]).then(()=>getPosts())

.then(()=>{

    updateLastUserActivityTime("after  Creating")

        

}).then(()=>{

    deletePost().then((msg)=>

    console.log(msg.title),

    updateLastUserActivityTime("after  deleting")

    )

})
async function fun1(){
    await createPost({

        title:'Post six',
    
        body:'This is post three'
    
      })
      await createPost({

        title:'Post delete',
    
        body:'This is post three'
    
      })
      let msg=await deletePost()
      console.log(msg)
}