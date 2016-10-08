/**
 * Created by manuelo on 10/8/2016.
 */
exports.getUnixTime = function (time){
    return JSON.stringify({"unixtime" : new Date(time).getTime()});
}

exports.getTimeJson = function (time){
    var d = new Date(time);
    var r = {"hour": d.getHours(), "minute": d.getMinutes(), "second": d.getSeconds()};
    return JSON.stringify(r);
}

exports.toUpper = function (str){
    if(!str)
		return '';
	return str.toUpperCase();
}


exports.toLower = function (str){
    if(!str)
		return '';
	return str.toLowerCase();
}