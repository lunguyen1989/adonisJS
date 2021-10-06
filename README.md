# adonisJS
Make middlware to valid client token

-------------------------------------------------------------------------------------------------------------
Step 1 : Generate client token for test. This step should make at client, But i need to token to testing.
API generate client token:
Url : http://localhost:3333/api/user/get-token - METHOD - GET
Result :
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiVEhJU19JU19TRUNSRVRfS0VZX0FORF9ET19OT1RfVEFMS19UT19BTllfUEVSU09OIiwidmVyc2lvbiI6MSwiYXBwX25hbWUiOiJkZW1vIGFkb25pc2pzIiwiaWF0IjoxNjMzNTA4MTA2LCJleHAiOjE2MzM1MTE3MDZ9.UbDb8GI3NwjsrI80GoF_YIcNDjrztqqAKEufoTNn42A"
}
```

-------------------------------------------------------------------------------------------------------------
Step2 we will get the access_token at sep1 and to test for api register user via middlware
API : http://localhost:3333/api/user/register - METHOD - POST

add header with key : app_tocken and value access_token get step 1
header 
```
app-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiVEhJU19JU19TRUNSRVRfS0VZX0FORF9ET19OT1RfVEFMS19UT19BTllfUEVSU09OIiwidmVyc2lvbiI6MSwiYXBwX25hbWUiOiJkZW1vIGFkb25pc2pzIiwiaWF0IjoxNjMzNTA4MTA2LCJleHAiOjE2MzM1MTE3MDZ9.UbDb8GI3NwjsrI80GoF_YIcNDjrztqqAKEufoTNn42A
```
raw data
```
{
    "email" : "lunguyen12345@gmail.com",
    "password" : "12345",
    "username" : "lunguyen1"
}
```
