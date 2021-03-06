<?php
    session_start();
    if($_SESSION['Status'] != "ADMIN"){
        header('Location: ../login-page.html'); 
    }


?>

<?php include "../templates/header.php" ?>

    <h2>Tennis</h2>
    <h3>ชนิดการแข่งขัน</h3>
    <div>
          <input type="button" id="single" value="แบบเดี่ยว"> 
          <input type="button" id="team" value="แบบคู่"> 
    </div>
    
    <form id="form1">
        <div>
            <label>หมายเลขการแข่งขัน: <input type="text" id="id_match" required></label>
            <table>
                <tr>
                    <td>ระหว่าง</td>
                    <td><input type="text" placeholder="รหัสผู้แข่งขัน" id="1st" required></td>
                    <td>พบกับ</td>
                    <td><input type="text" placeholder="รหัสผู้แข่งขัน" id="2nd" required></td>
                </tr>
                <tr>
                    <td>ผลการแข่งขัน</td>
                    <td><input type="text" id="score1" required></td>
                    <td>:</td>
                    <td><input type="text" id="score2" required></td>
                </tr>
               
            </table>
            <input type="submit" value="Submit">
        </div>
    </form>
    
    <form id="form2" >
         <div>
            <label>หมายเลขการแข่งขัน: <input type="text" id="id_match" required></label>
            <table>
                <tr>
                    <td>ระหว่าง</td>
                    <td><input list="university-list" id="1st" placeholder="รายชื่อมหาลัย" required></td>
                    <td>พบกับ</td>
                    <td><input list="university-list" id="2nd" placeholder="รายชื่อมหาลัย" required></td>
                </tr>
                <tr>
                    <td>ผลการแข่งขัน</td>
                    <td><input type="text" id="score1" required></td>
                    <td>:</td>
                    <td><input type="text" id="score2" required></td>
                </tr>
               
            </table>
            <input type="submit" value="Submit">
        </div>
        
        
        <datalist id="university-list">
              <option value="จุฬาลงกรณ์มหาวิทยาลัย">
              <option value="มหาวิทยาลัยธรรมศาสตร์">
              <option value="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ">
              <option value="มหาวิทาลัยศิลปากร">
              <option value="มหาวิทยาลัยเชียงใหม่">
              <option value="สถาบันเทคโนโลยีพระจอมกล้าเจ้าคุณทหารลาดกระบัง">
              <option value="มหาวิทยาลัยศรีนครินทรวิโรฒ">
              <option value="มหาวิทยาลัยเทคโนโลยีมหานคร">
        </datalist>
    
    </form>
    <div id="div3">
    </div>
    
    <script>
         $(document).ready(function(){
             $("#form1").hide();
             $("#form2").hide();
             $("#single").click(function(){
                 $("#form1").show();
                 $("#form2").hide();
            });
             $("#team").click(function(){
                 $("#form1").hide();
                 $("#form2").show();
            });
        });
        
        $("#form1").submit(function(event){
            var name_A = $("#1st").val();
            var name_B = $("#2nd").val();
     
            
            return false;
            
        });
        
         $("#form2").submit(function(event){
            var name_A = $("#1st").val();
            var name_B = $("#2nd").val();
        
            
            return false;
            
        });
    </script>

<?php include "../templates/footer.php"?>