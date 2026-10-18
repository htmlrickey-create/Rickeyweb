

    const pagehref = document.getElementById("progress-href");

    pagehref.addEventListener('click',()=>{

        const checkValue = pagehref.dataset.page;

        if(checkValue === "coming-soon"){
            window.location.href = './Comming.html';
        }else if(checkValue === "progress"){
            window.location.href = './detile.html';
        }else{
            alert("予期せぬエラーなようです。(^~^;)");
        }

        console.log(checkValue);

    })

