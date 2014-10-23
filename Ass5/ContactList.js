var fContacts;
var fCon;
var inpVal;
var par$;
var liId;
function createContactList(dataModel, div$) {

	div$.append('<form id = "search"> </form>');

	$('#search').append('<label for="searchInput">Search</label> <input type="text" id ="searchInp">');

	div$.append(updList(dataModel));
}

function updList(dataModel) {
	$('#viewNames ul').remove();

	var list$ = $('<ul> </ul>');

	for (var i in dataModel) {
		var con = dataModel[i];
		$(list$).append('<li>' + con.fname + ' ' + con.lname + '</li>');
	}
	fContacts = [];
	fContacts = $.extend(true, {}, dataModel);
	return list$;
}

function filterList(dataModel) {

	$('#viewNames ul').remove();
	fContacts = [];
	inpVal = $('input').val();
	if (inpVal != "") {
		for (var key in dataModel) {
			fCon = dataModel[key];
			if (!((fCon.fname.indexOf(inpVal) == -1 ) && (fCon.lname.indexOf(inpVal) == -1))) {
				fContacts.push(fCon);
			}
		}
	} else {
		fContacts = $.extend(true, {}, dataModel);
	}

	$('#viewNames').append(updList(fContacts));
}

function createContactDetailView(event, div$) {
	div$.children().remove();
	if (event.target.nodeName == 'LI') {
		liId = $(event.target).index();
		par$ = $('<p> </p>');
		par$.append(fContacts[liId].fname + '  ' + fContacts[liId].lname + '</br>');
		par$.append(fContacts[liId].email);
		div$.append(par$);
	}
}

function updateTips(t) {
	var tips = $(".validateTips");
	tips.text(t).addClass("ui-state-highlight");
	setTimeout(function() {
		tips.removeClass("ui-state-highlight", 1500);
	}, 500);
}

function checkLength(o, n, min, max) {
	if (o.val().length > max || o.val().length < min) {
		o.addClass("ui-state-error");
		updateTips("Length of " + n + " must be between " + min + " and " + max + ".");
		return false;
	} else {
		return true;
	}
}

function checkRegexp(o, regexp, n) {
	if (!( regexp.test(o.val()) )) {
		o.addClass("ui-state-error");
		updateTips(n);
		return false;
	} else {
		return true;
	}
}
