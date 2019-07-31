<?php
//error_reporting(E_ALL); ini_set('display_errors', 1);
if(!empty($_POST['data'])){
	$data=json_decode($_POST['data'],true);
	try {
			require_once('phpmailer/class.phpmailer.php');
			$mail = new PHPMailer(true);
			if(!$data['name'] || !$data['mobile'] || !$data['email'] || !$data['message']){
				echo json_encode(['status'=>0,'msg'=>"All parameters are required"]);
				exit();
			}
			$mail->isSMTP();
			$mail->Host = 'localhost';
			$mail->SMTPAuth = false;
			$mail->SMTPAutoTLS = false; 
			$mail->Port = 25;
			$mail->setFrom('prayansh.in@gmail.com',$data['name']);
			$mail->addAddress('manojkumar222mbd@gmail.com', 'Manoj Kumar');
			$mail->addAddress('prarthanashah97@gmail.com', 'Prarthana Shah');
			$mail->Subject = 'Prayansh Website Contact';
			$sendMsg='Hello,<br/>';
			$sendMsg.='Someone is trying to contact you. Below are the details-'.'<br/><br/>';
			$sendMsg.='<b>Name : </b>'.$data['name'].'<br/>';
			$sendMsg .= '<b>Mobile : </b>'.$data['mobile'].'<br/>';
			$sendMsg .= '<b>Email : </b>'.$data['email'].'<br/>';
			$sendMsg .= '<b>Message : </b>'.$data['message'];
			$mail->Body =$sendMsg;
			$mail->isHTML(true);
			$mail->send();
			echo 'success';
		} catch (Exception $e) {
			echo json_encode(['status'=>0,'msg'=>"Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
		}
}else{
	echo json_encode(['status'=>0,'msg'=>"Can not GET"]);
}
