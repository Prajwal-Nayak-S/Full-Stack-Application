const person={
    name:'prajwal',
    address:{
        fline:'shanthipura',
        sline:'H D kote'
    },
    profiles:['twiteer','insta','facebook'],
    printProfiles:()=>{
        person.profiles.map(profile=>
            console.log(profile)
        )
    }

}


export default function LearnJavaScript(){
    return(
        <div>
        <div>{person.name}</div>
        <div>{person.address.fline}</div>
        <div>{person.address.sline}</div>
        <div>{person.printProfiles()}</div>
</div>
    )
}