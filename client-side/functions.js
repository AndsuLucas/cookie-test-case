(function(){
    window.addEventListener('load', function() {

        const setNormalCookie = async () => {
            await fetch('/server-side/?cookie_type=normal', {method: 'GET'});
        }
        document.querySelector('.normalCookieButton').addEventListener('click', setNormalCookie);
        
        
        const setExpiresCookie = async () => {
            await fetch('/server-side/?cookie_type=withExpires', {method: 'GET'});
        }
        document.querySelector('.expireCookieButton').addEventListener('click', setExpiresCookie);
        
        const postData = async() => {
            const headers = new Headers();
            headers.append('Content-type', 'text/plain');
            
            const response = await fetch('/server-side/?cookie_type=cookieInPostMethod', {
                method: 'POST',
                headers: headers,
                body: { test: "test" }
            }).then((r) => r.json());
            
            console.log(response);
        }
        document.querySelector('.postData').addEventListener('click', postData);


        const secureCookie = async () => {
            await fetch('/server-side/?cookie_type=secureCookie', {method: 'GET'});
        }
        document.querySelector('.secureCookie').addEventListener('click', secureCookie);

    });
})();
