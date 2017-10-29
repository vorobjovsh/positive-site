<?php
$message = '';
if (isset($_GET['email']) && !empty($_GET['email'])){
  if (mail($_GET['email'], $_GET['subject'], $_GET['body'], '')){
    $message = "Email has been sent to <b>".$_GET['email']."</b>.<br>";
  }else{
    $message = "Failed sending message to <b>".$_GET['email']."</b>.<br>";
  }
}else{
  if (isset($_GET['submit'])){
    $message = "No email address specified!<br>";
  }
}

if (!empty($message)){
  $message .= "<br><br>n";
}
?>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>
      Mail test
    </title>
  </head>
  <body>
    <?php echo $message; ?>
    <form method="post" action="">
      <table>
        <tr>
          <td>
            e-mail
          </td>
          <td>
            <input name="email" value="<?php if (isset($_GET['email'])
            && !empty($_GET['email'])) echo $_GET['email']; ?>">
          </td>
        </tr>
        <tr>
          <td>
            subject
          </td>
          <td>
            <input name="subject">
          </td>
        </tr>
        <tr>
          <td>
            message
          </td>
          <td>
            <textarea name="body"></textarea>
          </td>
        </tr>
        <tr>
          <td>
            &nbsp;
          </td>
          <td>
            <input type="submit" value="send" name="submit">
          </td>
        </tr>
      </table>
    </form>
  </body>
</html>
