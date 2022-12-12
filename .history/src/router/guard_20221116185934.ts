class Guard{
    public run(){
        console.log('run...')
    }
}

export default  () =>{
    new Guard().run()
}