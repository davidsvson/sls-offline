exports.handler = async (event, context ) => {
    const body = JSON.parse(event.body);

    const text = body.text;
    const key = body.key;

    let decryptedText = "";
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i) - key;

        decryptedText += String.fromCharCode(charCode);
    }

    return decryptedText;
}