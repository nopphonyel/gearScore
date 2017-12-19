<?php
    session_start();
    if($_SESSION['Status'] != "ADMIN"){
        header('Location: ../login-page.html'); 
    }

    
?>

<?php include "../templates/header.php" ?>
    
    <h2>สรุปเหรียญรางวัลกีฬาบาสเก็ตบอล</h2>
    <div>
        <input type="button" id="men" value="ทีมชาย">
        <input type="button" id="women" value="ทีมหญิง">
    </div>
    <form id="form1" >
         <div>
            <label>บาสเก็ตบอลชาย</label>
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
    
    </form>
    
    <form id="form2" >
         <div>
            <label>บาสเก็ตบอลหญิง</label>
            <table>
                <tr>
                    <td style="text-align: left">เหรียญทอง</td>
                    <td><input list="university-list" id="1st-w" placeholder="รายชื่อมหาลัย" required></td>
                </tr>
                <tr>
                    <td style="text-align: left">เหรียญเงิน</td>
                    <td><input list="university-list" id="2nd-w" placeholder="รายชื่อมหาลัย" required></td>
                </tr>
                <tr>
                   <td style="text-align: left">เหรียญทองแดง</td>
                    <td><input list="university-list" id="3rd-w" placeholder="รายชื่อมหาลัย" required></td>
                </tr>
               
            </table>
            <input type="submit" value="Submit">
        </div>
    
    </form>

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

    <div id="div3">
    </div>
    
    <script>
        $(document).ready(function(){
             $("#form1").hide();
             $("#form2").hide();
             $("#men").click(function(){
                 $("#form1").show();
                 $("#form2").hide();
            });
             $("#women").click(function(){
                 $("#form1").hide();
                 $("#form2").show();
            });
        });
        
        
        $("#form1").submit(function(event){
            var name_A = $("#1st").val();
            var name_B = $("#2nd").val();
            
           
            
            return false;
            
        });
        
      
    </script>

<?php include "../templates/footer.php"?>