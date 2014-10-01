<?php
$con = mysqli_connect('liispapps.uncc.edu','root','rM2FQT5UWXvCT6xd','fbphasergame');
if (mysqli_connect_errno())
  echo "Failed to connect to MySQL: " . mysqli_connect_error();

else
     echo 'success';
      $UserID = mysqli_real_escape_string($con, $_POST['UserID']);
      $GroupID = mysqli_real_escape_string($con, $_POST['GroupID']);
      $AppID = mysqli_real_escape_string($con, $_POST['AppID']);
      $PermissionName = mysqli_real_escape_string($con, $_POST['PermissionName']);
      $PermissionType = mysqli_real_escape_string($con, $_POST['PermissionType']);
      $PermissionSize = mysqli_real_escape_string($con, $_POST['PermissionSize']);
      $Decision = mysqli_real_escape_string($con, $_POST['Decision']);

      mysqli_query($con,"INSERT INTO userdata (UserID, GroupID, AppID, PermissionName, PermissionType, PermissionSize, Decision) VALUES('$UserID', '$GroupID', '$AppID', '$PermissionName', '$PermissionType', '$PermissionSize', '$Decision')" ) ;
      mysqli_close($con);
      
?>