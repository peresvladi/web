const message = '"00;71;ЗНАКОМСТВО, ВСТУПЛЕНИЕ.;0;0;0;0,JS_Stash11hours.';
let result = message.match(/[^\"а-яА-ЯёЁa-zA-Z0-9_-]/gi);
alert(result[0]);
