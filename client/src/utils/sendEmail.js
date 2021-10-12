import { useEffect, useState } from 'react';


export const SendEmail = (url, options) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=> {
        const runFetch = async() => {
            setIsLoading(true);
            try {
                const res = await fetch(url, options, );
                console.log(res)
                setIsLoading(false);
            } catch (e) {
                setError(e);
            }
        };
        runFetch();
    }, []);

};

// curl --request POST \
//   --url https://api.sendgrid.com/v3/mail/send \
//   --header "Authorization: Bearer $SENDGRID_API_KEY" \
//   --header 'Content-Type: application/json' \
//   --data '{"personalizations": [{"to": [{"email": "test@example.com"}]}],"from": {"email": "test@example.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}'