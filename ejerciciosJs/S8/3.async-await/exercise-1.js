const runTimeOut = async() => {
    await waitTimeOut();
    console.log('Time out!')
};

function waitTimeOut() {
    const promise = new Promise((resolve) => {
        setTimeout(function() {
            resolve();
        }, 2000);
    })
    return promise;
}

runTimeOut();