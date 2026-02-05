import http from 'k6/http';
import { check, sleep } from 'k6';

// Gantilah dengan URL endpoint API yang kamu tuju
const API_URL = 'https://api.daytask.top/api/v1/auth/login'; 

// Gantilah dengan token yang valid
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE3NDMxNTIwNTIsImV4cCI6MTc0NTc0NDA1Mn0.IsJb_iTiLvu4xr_5ellsw38yS-Agwa30u-7y_OjwGVg'; 

// Konfigurasi untuk kontrol virtual users dan iterasi
export let options = {
    vus: 10,  // Jumlah virtual users
    iterations: 100,  // Jumlah total iterasi yang akan dijalankan oleh seluruh virtual users
    duration: '60s',  // Durasi pengujian (misalnya 30 detik)
};

export default function () {
    // Menambahkan header Authorization dengan Bearer Token
    const headers = {
        'Content-Type': 'application/json',
    };

    // Melakukan GET request ke API
    const response = http.post(API_URL, JSON.stringify({
        email: "anggasayogosm@gmail.com", 
        password: "12345678"
    }), { 
        headers: headers 
    });

    // Menambahkan jeda waktu antar request
    sleep(1); // Tidur selama 1 detik antar iterasi
}
