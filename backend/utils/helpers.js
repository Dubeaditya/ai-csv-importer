function cleanValue(value) {

    if (value === undefined || value === null)
        return "";

    return String(value).trim();

}

function splitPhone(phone) {

    phone = cleanValue(phone);

    if (!phone)
        return {
            country_code: "",
            mobile_without_country_code: ""
        };

    const match = phone.match(/^(\+\d+)\s*(.*)$/);

    if (match) {
        return {
            country_code: match[1],
            mobile_without_country_code: match[2]
        };
    }

    return {
        country_code: "",
        mobile_without_country_code: phone
    };

}

module.exports = {
    cleanValue,
    splitPhone
};