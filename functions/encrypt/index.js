exports.handler = async (event, context ) => {
    const body = JSON.parse(event.body);

    const text = body.text;
    const key = body.key;

    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) + key;

        encryptedText += String.fromCharCode(charCode);
    }

    return encryptedText;
}