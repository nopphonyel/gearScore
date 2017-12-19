<?php
    session_start();
    if($_SESSION['Status'] != "ADMIN"){
        header('Location: ../login-page.html'); 
    }

    
?>

<?php include "../templates/header.php" ?>
    
    <h2>สรุปเหรียญรางวัลกีฬาฟุตซอล</h2>
    <form id="form1" >
         <div>
            <table>
                <tr>
                    <td style="text-align: left">เหรียญทอง</td>
                    <td><input list="university-list" id="1st" placeholder="รายชื่อมหาลัย" required></td>
                </tr>
                <tr>
                    <td style="text-align: left">เหรียญเงิน</td>
                    <td><input list="university-list" id="2nd" placeholder="รายชื่อมหาลัย" required></td>
                </tr>
                <tr>
                   <td style="text-align: left">เหรียญทองแดง</td>
                    <td><input list="university-list" id="3rd" placeholder="รายชื่อมหาลัย" required></td>
                </tr>
               
            </table>
            <input type="submit" value="Submit">
        </div>
        
        
        <datalist id="university-list">
                <option value="จุฬาลงกรณ์มหาวิทยาลัย">
                <option value="มหาวิทยาลัยธรรมศาสตร์">
                <option value="มหาวิทยาลัยขอนแก่น">
                <option value="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ">
                <option value="มหาวิทยาลัยศิลปากร">
                <option value="มหาวิทยาลัยเชียงใหม่">
                <option value="สถาบันเทคโนโลยีพระจอมกล้าเจ้าคุณทหารลาดกระบัง">
                <option value="มหาวิทยาลัยศรีนครินทรวิโรฒ">
                <option value="มหาวิทยาลัยเทคโนโลยีมหานคร">
                <option value="มหาวิทยาลัยมหาสารคาม">
                <option value="มหาวิทยาลัยเทคโนโลยีสุรนารี">
                <option value="มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร">
                <option value="มหาวิทยาลัยสงขลานครินทร์">
                <option value="มหาวิทยาลัยนเรศวร">
                <option value="มหาวิทยาลัยอุบลราชธานี">
                <option value="มหาวิทยาลัยศิลปากร">
                <option value="มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี">
                <option value="มหาวิทยาลัยบูรพา">
                <option value="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี">
                <option value="มหาวิทยาลัยรามคำแหง">       
        </datalist>
    
    </form>
    <div id="div3">
    </div>
    
    <script>
        
        
        $("#form1").submit(function(event){
            var url = "http://www.geargame29.en.kku.ac.th/theInterface/api/v1/post/set_futsal_medal.php";
            var first = $("#1st").val();
            var second = $("#2nd").val();
            var third = $("#3rd").val();
           
            $.post( url, { university: first, medal: "gold"} );
            $.post( url, { university: second, medal: "silver" } );
            $.post( url, { university: third, medal: "bronze" }, function(data){
              alert("ทำการเพิ่ม\n" + first + " ได้เหรียญทอง\n" + second + " ได้เหรียญเงิน\n" + third + " ได้เหรียญทองแดง");   
            });
            return false;    
            
        });
        
      
    </script>

<?php include "../templates/footer.php"?>