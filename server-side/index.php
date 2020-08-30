<?php 

header('Content-Type: application/json;  charset=utf-8');

$cookieFunctionByType = [
    'normal' => function() {
        setcookie('normalCookie', '123');
        echo json_encode('Ok');
    },

    'withExpires' => function() {                  // day in seconds
        setcookie('expiresCookie', '123', time() + 86400);
        echo json_encode('Ok');
    },

    'cookieInPostMethod' => function() {
        echo json_encode($_COOKIE);
    },
     
    'secureCookie' => function() {
        setcookie('secureCookie', '123', ['secure' => true]); //not work because is http protocol. Works only if the protocol is https (secure);
        echo json_encode('Ok');
    }
]; 


if (!isset($_GET['cookie_type'])) {
    header('HTTP/1.0 404 Not Found');
    return;
}
 
call_user_func($cookieFunctionByType[$_GET['cookie_type']]);
