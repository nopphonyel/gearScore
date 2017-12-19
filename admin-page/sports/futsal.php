<?php
    session_start();
    if($_SESSION['Status'] != "ADMIN"){
        header('Location: ../login-page.html'); 
    }

    
?>

<?php include "../templates/header.php" ?>
    
    <h2>Futsal</h2>
    <form id="form1">
         <div>
            <label>หมายเลขการแข่งขัน: <input type="text" id="id_match" name="id"required></label>
            <table>
                <tr>
                    <td>ระหว่าง</td>
                    <td><input list="university-list" id="1st" placeholder="รายชื่อมหาลัย" name="u1name" required></td>
                    <td>พบกับ</td>
                    <td><input list="university-list" id="2nd" placeholder="รายชื่อมหาลัย" name="u2name" required></td>
                </tr>
                <tr>
                    <td>ผลการแข่งขัน</td>
                    <td><input type="text" id="score1" name="u1score" required></td>
                    <td>:</td>
                    <td><input type="text" id="score2" name="u2score" required></td>
                </tr>
               
            </table>
            <input type="submit" value="Submit">
        </div>
        
        
           <datalist id="university-list">
                <option value="จุฬาลงกรณ์มหาวิทยาลัย">
                <option value="มหาวิทยาลัยธรรมศาสตร์">
                <option value="มหาวิทยาลัยขอนแก่น">
                <option value="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ">
                <option value="มหาวิทาลัยศิลปากร">
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
    
    
    <script>
        
        
        $("#form1").submit(function(event){
            var url = "http://www.geargame29.en.kku.ac.th/theInterface/api/v1/post/update_futsal_score.php";
            var id2 = $("#id_match").val();
            var score1 = $("#score1").val();
            var score2 = $("#score2").val();
            alert("Done");
            
            $.post( url, { id: id2, u1score: score1, u2score: score2 }, function(data){
             
            });
            return false;    
            
        });
        
      
    </script>

<?php include "../templates/footer.php"?>