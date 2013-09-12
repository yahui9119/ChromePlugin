String.prototype.format = function ()
{
    var val = arguments;
    return this.replace(/{(\d+)}/g, function (i,r) {
        return val[r];
    });
}
var urlfilter = {
    url: [
        { urlPrefix: 'http://query.u7u7.com/Validate/login.aspx' }
    ]
}
var setting = {
    query: {
        '#UserName': 'ljli',
        '#Password': 'Ferry!123',
        submit: function () {
            return "#ctl00";
        }
    }
}
var code = "var toolsQuery=document.querySelectorAll.bind(document)";
chrome.webNavigation.onCompleted.addListener(function (tabObj) {
    var _temp = [code];
    var _data=setting['query'];
    for (var i in _data)
    {
        if (typeof (_data[i]) == "string")
        {
            _temp.push('toolsQuery("{0}")[0].value="{1}"'.format(i, _data[i]));
        }
        else if (typeof (_data[i]) == "function")
        {
            _temp.push('toolsQuery("{0}")[0].submit()'.format(_data[i]()));
        }
    }
    //chrome.tabs.executeScript(tabObj.tabId, { code: _temp.join(';') });
}, urlfilter);