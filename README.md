# arkademy soal 6.a database

1. Buka XAMPP jalankan mysql 
2. Buka Command Prompt ketikkan :
   mysql -u root -p
   https://imgur.com/lsdnIen
3. Buat Database : 
   create database arcademy;
   https://imgur.com/qVlo6HI
4. Pilih database yang telah dibuat :
   use arcademy;
   https://imgur.com/YBeYuRm
5. Buat table product :
   create table product(id int, name varchar(25), price int, id_category int, id_cashier int);
   https://imgur.com/jcKbo6u
6. Buat table category :
   create table category(id int, name varchar(15));
   https://imgur.com/LhXLrOs
7. Buat table cashier :
   create table cashier(id int, name varchar(25));
   https://imgur.com/g5PIBXV
8. Input data :
   insert into product values(1,'latte',10000,2,1);
   https://imgur.com/IE4Xfz2
9. insert into category values(1,'food');
   https://imgur.com/3BgZDfx
10.insert into cashier values(1,'pevita pearce);
   https://imgur.com/fgCuWRp
11.menampilkan data yang telah dibuat:
   https://imgur.com/x40z587
