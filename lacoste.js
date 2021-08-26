const axios = require('axios');
const cheerio = require('cheerio');
const { cookie } = require('request');

var login_page = 'https://www.lacoste.com/on/demandware.store/Sites-BRECOM-Site/pt_BR/Authentication-Show'
var login_url = "https://www.lacoste.com/on/demandware.store/Sites-BRECOM-Site/pt_BR/LoginV2-Authenticate"


async function teste1(){
  const response1 = await axios({
    method: 'GET',
    url: login_page,
    headers: {
      'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"
    }
  }).then((res) => {
    return res
  })

  var cookies = response1

  for(i=0; i<cookies.length; i++) {
    cookies[i] = cookies[i].split(';')
  }

  //console.log(cookies)

  const $ = cheerio.load(response1.data)
  var secure_key = $('input[name="dwfrm_login_securekey"]').attr('value')

  const respoonse2 = await axios({
    method: 'POST',
    url: login_url,
    headers: {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'max-age=0',
    'content-length': '90',
    'content-type': 'application/x-www-form-urlencoded',
    'cookie': `${cookies[4][0]}; 52976=BR; _dy_c_exps=; 49929=; lcstBRrdrct=75372857; _ga=GA1.2.2094811808.1629235661; _gid=GA1.2.1433267932.1629235661; _dycnst=dg; _fbp=fb.1.1629235661430.1765494245; _gcl_aw=GCL.1629235661.Cj0KCQjwvO2IBhCzARIsALw3ASqT40THXNoAT-JEGuuW_wZ2oXOoOwUZMaxmZFcDdv9j_PP_RgFtBt0aAoOvEALw_wcB; _dyid=8606379331915885003; __cq_uuid=abj4hmDORtTgcFLaspgIjlG3Wx; _dy_c_att_exps=; cookieconsent=OK; einsteinUuid=3f94e700-ffa2-11eb-8e73-d16dd4f49f70; __cq_bc=%7B%22aaqm-BRECOM%22%3A%5B%7B%22id%22%3A%22PH4012-21%22%7D%2C%7B%22id%22%3A%22L1212-21%22%7D%2C%7B%22id%22%3A%22PH1875-21%22%7D%2C%7B%22id%22%3A%22DH2329-21%22%7D%5D%7D; InternalUserId=08708952; EnsightenUserId=ECBR008708952; ${cookies[0][0]}; ${cookies[1][0]}; cquid=||; ${cookie[3][0]}; __cq_dnt=0; dw_dnt=0; ${cookies[7][0]}; _dy_csc_ses=t; _dyjsession=34c48a9099c2dcb5c60dbb5831d0ed3e; _dy_geo=BR.SA.BR_SP.BR_SP_Guarulhos; _dy_df_geo=Brazil..Guarulhos; _dycst=dk.w.c.ss.; AKA_A2=A; 61034=; 61035=; 24998=; 62062=; _gac_UA-74249617-1=1.1629320988.CjwKCAjw3_KIBhA2EiwAaAAliglix1xevrieTjtrK03UXJ3a5WyzMYZKLzUCH3479hCP4NQeIyu-9BoCJ6AQAvD_BwE; dy_fs_page=www.lacoste.com%2Fbr%2F%3Fgclid%3Dcjwkcajw3_kibha2eiwaaaaliglix1xevrietjtrk03uxj3a5wyzmyzklzuch3479hcp4nqeiyu-9bocj6aqavd_bwe; _dy_toffset=0; cto_bundle=qq9ifF9vUktNcEtndzNXTjVpbUFYU3gxbGVaQzZ0b08lMkIyNTBHUUVDdmliZktCbHRsSnN4MEpSZTNGZDBIVyUyQm9ubW9zMWFmTEpFV3hxVmRMbFNxTiUyRlBqVXkxNDlHczUlMkJHd3M1ZSUyQmFPTVNwS2gydHUxYjNYR3k4UFU5ejcwdHNCaldTRzVwbTRhVjQ0ZFFqUDlYJTJGWWtyaEs4SlElM0QlM0Q; _dy_ses_load_seq=85085%3A1629321000215; _dy_soct=358570.593138.1629321000; _uetsid=f3c46710ffa111eb990a958246c52f38; _uetvid=f3c4aea0ffa111ebaf10019863fad268; _dy_lu_ses=34c48a9099c2dcb5c60dbb5831d0ed3e%3A1629321000416; __cq_seg=0~0.27!1~-0.34!2~-0.42!3~-0.16!4~-0.49!5~0.53!6~0.15!7~-0.03!8~-0.20!9~-0.17!f0~31~25; ak_bmsc=FD88AAB14EBFC0B7AE749E2A4C268AA5~000000000000000000000000000000~YAAQMCSIyElh8516AQAAb/IjWwz3DqDiutDqEVYHuQAcIW9aDUybnxy27IHSqzB/ZZ5SkjeVbBT9YxIZfnnPDmllZkQ0c5nVvcGcI4B0Ro1OSUPzqvuOz5cd2swCOaWucW+OJ6VI43CFpHArulwynj1CLdD2ZgmFY/muJnaC8EIrd0PPryyVF3d1TrmKulIDiDWd6E4HRKpbwB06FofOB7OoZbgC6jeWwfBVh472jdBhWQcUYdk9GCNguVkG7zpPqCSo7Fu7gy9ZZjZmLDyNCOn5ggPX8EgUXZTpBjKyo+qOyaDgBd9RvCd+RXIZmqO5btz3qm5cmBb0ywLeyHYoCfd2/CTeNTFoOszO7ADY48VOwCEHA1hi2f+4u6m+PUTPpgpd/pap3KMWjDnB; RT="z=1&dm=www.lacoste.com&si=6a335a87-e14c-4a65-990a-17c8f436dafd&ss=kshznaza&sl=3&tt=4ze&rl=1&ld=f1ar&r=1gy8wd348&ul=f1as"`,
    'origin': 'https://www.lacoste.com',
    'referer': 'https://www.lacoste.com/on/demandware.store/Sites-BRECOM-Site/pt_BR/LoginV2-Authenticate',
    'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
    },
    data: `email=davidoliveiramail94%40gmail.com&password=abacaxi1233&dwfrm_login_securekey=${secure_key}`
  }).then((res => {
    return res
  })).catch(err => {
    console.log('erro: ' + err)
  })

  console.log(respoonse2)

}

teste1()

