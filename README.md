# Email API
Aplikasi ini adalah sebuah API (Application Programming Interface) yang digunakan untuk mengirimkan template email email. Aplikasi ini dibuat menggunakan bahasa pemrograman Node.js dan framework express js. 

## Authors

- [@fakhryhizballah](https://github.com/fakhryhizballah)


## Persyaratan

Sebelum menggunakan API ini, ada beberapa persyaratan yang perlu dipenuhi:

- sudah terinstall node.js
- sudah terinstall npm
- memiliki smtp server
- memiliki email



## Penggunaan

Untuk menggunakan API ini, ikuti langkah-langkah berikut:

1. Clone repository ini
2. Masuk ke dalam folder repository
3. Install dependencies
    
    ```bash
    npm install
    ```

4. Buat file .env dan isi dengan konfigurasi berikut:

    ```bash
    PORT=3000
    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=587
    SMTP_USER=your_email
    SMTP_PASS=your_password
    ```
5. Jalankan aplikasi

    ```bash
    npm start
    ```
## Referensi API

### 1. Send Email

- Method: POST
- Endpoint: /api/email/send
- Body: 
    ```json
    {
        "to": "email_penerima",
        "subject": "subject_email",
        "template": "template_email",
        "data": {
            "nama": "nama_penerima",
            "subject": "subject",
            "pesan": "pesan"
        }
    }
    ```
- Response:
    ```json
    {
        "status": "success",
        "message": "Email sent successfully"
    }
    ```
    ```json
    {
        "status": "error",
        "message": "Email failed to send"
    }
    ```
### 2. Send Email with Attachment

- Method: POST
- Endpoint: /api/email/send-attachment
- Body: 
    ```json
    {
        "to": "email_penerima",
        "subject": "subject_email",
        "template": "template_email",
        "data": {
            "nama": "nama_penerima",
            "pesan": "pesan_email"
        },
        "attachment": "path_file_attachment"
    }
    ```
- Response:
    ```json
    {
        "status": "success",
        "message": "Email sent successfully"
    }
    ```
    ```json
    {
        "status": "error",
        "message": "Email failed to send"
    }
    ```
### 3. Send Email with Multiple Attachment

- Method: POST
- Endpoint: /api/email/send-multiple-attachment
- Body: 
    ```json
    {
        "to": "email_penerima",
        "subject": "subject_email",
        "template": "template_email",
        "data": {
            "nama": "nama_penerima",
            "pesan": "pesan_email"
        },
        "attachment": [
            "path_file_attachment_1",
            "path_file_attachment_2",
            "path_file_attachment_3"
        ]
    }
    ```
- Response:
    ```json
    {
        "status": "success",
        "message": "Email sent successfully"
    }
    ```
    ```json
    {
        "status": "error",
        "message": "Email failed to send"
    }
    ```
### 4. Send Email with CC

- Method: POST
- Endpoint: /api/email/send-cc
- Body: 
    ```json
    {
        "to": "email_penerima",
        "subject": "subject_email",
        "template": "template_email",
        "data": {
            "nama": "nama_penerima",
            "pesan": "pesan_email"
        },
        "cc": "email_cc"
    }
    ```
- Response:
    ```json
    {
        "status": "success",
        "message": "Email sent successfully"
    }
    ```
    ```json
    {
        "status": "error",
        "message": "Email failed to send"
    }
    ```
### 5. Send Email with BCC

- Method: POST
- Endpoint: /api/email/send-bcc
- Body: 
    ```json
    {
        "to": "email_penerima",
        "subject": "subject_email",
        "template": "template_email",
        "data": {
            "nama": "nama_penerima",
            "pesan": "pesan_email"
        },
        "bcc": "email_bcc"
    }
    ```
- Response:
    ```json
    {
        "status": "success",
        "message": "Email sent successfully"
    }
    ```
    ```json
    {
        "status": "error",
        "message": "Email failed to send"
    }
    ```
### 6. Send Email with CC and BCC

- Method: POST
- Endpoint: /api/email/send-cc-bcc
- Body: 
    ```json
    {
        "to": "email_penerima",
        "subject": "subject_email",
        "template": "template_email",
        "data": {
            "nama": "nama_penerima",
            "pesan": "pesan_email"
        },
        "cc": "email_cc",
        "bcc": "email_bcc"
    }
    ```
- Response:
    ```json
    {
        "status": "success",
        "message": "Email sent successfully"
    }
    ```
    ```json
    {
        "status": "error",
        "message": "Email failed to send"
    }
    ```
### 7. Send Email with CC and Attachment

- Method: POST
- Endpoint: /api/email/send-cc-attachment
- Body: 
    ```json
    {
        "to": "email_penerima",
        "subject": "subject_email",
        "template": "template_email",
        "data": {
            "nama": "nama_penerima",
            "pesan": "pesan_email"
        },
        "cc": "email_cc",
        "attachment": "path_file_attachment"
    }
    ```
- Response:
    ```json
    {
        "status": "success",
        "message": "Email sent successfully"
    }
    ```
    ```json
    {
        "status": "error",
        "message": "Email failed to send"
    }
    ```
## Dependencies

- [express](https://www.npmjs.com/package/express)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ejs](https://www.npmjs.com/package/ejs)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
- [morgan](https://www.npmjs.com/package/morgan)
- [cors](https://www.npmjs.com/package/cors)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [mustache](https://www.npmjs.com/package/mustache)

