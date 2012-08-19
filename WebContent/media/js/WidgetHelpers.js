

function setEditText(edit_box_id, text) {
	$(edit_box_id).val(text);
};

function getShortAddress(address) {
	var addressParts = address.split(",");
	var result = addressParts[0];
	if (!isNaN(parseInt(addressParts[1])))
		result += ", " + addressParts[1];
	return result;
}
