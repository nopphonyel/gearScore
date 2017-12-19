<?php
    session_start();
    if($_SESSION['Status'] != "ADMIN"){
        header('Location: ../login-page.html'); 
    }


?>

<?php include "../templates/header.php" ?>
    
    <h2>Swimming</h2>
    <h3>ชนิดการแข่งขัน</h3>
    <div>
          <input type="button" id="single" value="แบบเดี่ยว"> 
          <input type="button" id="team" value="แบบทีม"> 
    </div>
    
    <form id="form1">
        <div>
            <label>หมายเลขการแข่งขัน: <input type="text" id="id_match" required></label>
            <table>
                <tr>
                    <td>อันดับ 1</td>
                    <td><input type="text" placeholder="รหัสผู้แข่งขัน" id="1st" required></td>
                    <td>เวลา:</td>
                    <td><input type="text" id="1st-time" required></td>
                </tr>
                <tr>
                    <td>อันดับ 2</td>
                    <td><input type="text" placeholder="รหัสผู้แข่งขัน" id="2nd" required></td>
                    <td>เวลา:</td>
                    <td><input type="text" id="2nd-time" required></td>
                </tr>
                <tr>
                    <td>อันดับ 3</td>
                    <td><input type="text" placeholder="รหัสผู้แข่งขัน" id="3rd" required></td>
                    <td>เวลา:</td>
                    <td><input type="text" id="3rd-time" required></td>
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
                    <td>อันดับ 1</td>
                    <td><input list="university-list" id="1st" placeholder="รายชื่อมหาลัย" required></td>
                    <td>เวลา:</td>
                    <td><input type="text" id="1st-time" required></td>
                </tr>
                <tr>
                    <td>อันดับ 2</td>
                    <td><input list="university-list" id="2nd" placeholder="รายชื่อมหาลัย" required></td>
                    <td>เวลา:</td>
                    <td><input type="text" id="2nd-time" required></td>
                </tr>
                <tr>
                    <td>อันดับ 3</td>
                    <td><input list="university-list" id="3rd" placeholder="รายชื่อมหาลัย" required></td>
                    <td>เวลา:</td>
                    <td><input type="text" id="3rd-time" required></td>
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
            var id_match = $("#id_match").val();
            var name_A = $("#1st").val();
            var name_B = $("#2nd").val();
            var name_C = $("#3rd").val();
            var time_1st = $("#1st-time").val();
            var time_2nd = $("#2nd-time").val();
            var time_3rd = $("#3rd-time").val();
            $.post("http://www.geargame29.en.kku.ac.th/theInterface/api/v1/universities.php", function(data, status){
                alert("Data: " + data + "\nStatus: " + status);
            });
     
            
            return false;
            
        });
        
         $("#form2").submit(function(event){
            var name_A = $("#1st").val();
            var name_B = $("#2nd").val();
        
            
            return false;
            
        });
    </script>

<?php include "../templates/footer.php"?>