console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie= async()=>{
    function PromisewifeBringTicks(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    });}
    const getPopcorn= new Promise((resolve,reject) => resolve(`popcorn`));
    const getButter = new Promise((resolve,reject) => resolve(`butter`));
    const getDrinks=new Promise((resolve,reject)=>resolve('Pepse'))
    let ticket=await PromisewifeBringTicks();

    let [popcorn,buttor,coke] =await Promise.all([getPopcorn,getButter,getDrinks])
    console.log(popcorn,coke,buttor)
    return ticket
}
preMovie().then((m)=>console.log(m))

console.log('person4: shows ticket');
console.log('person5: shows ticket');