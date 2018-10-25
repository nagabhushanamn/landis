

function teach() {
    let tnrName = "Nag";// will move to heap end of teach
    try {
        console.log(tnrName + ' teaching topic-1');
        //throw new Error('hate-topic-1');
        setTimeout(() => {
            console.log(tnrName + ' teaching topic-2');
            //throw new Error('hate-topic-2');
            console.log('teaching topic-2 ends');
        }, 3000);
        console.log('teaching topic-1 ends');
    } catch (e) {
        console.log('caught : ' + e.message);
    }
}

teach();