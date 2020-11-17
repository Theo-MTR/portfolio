<?php

$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];

/* Si les variables sont bonne */
$to="theomonteiro@sfr.fr";

/*Le sujet du message qui apparaitra*/
$sujet="Message depuis le site";
$msg = '';
/*Le message en lui même*/
/*$msg = 'Mail envoye depuis le site' "rnrn";*/
$msg .= 'Nom : '.$nom;
$msg .= 'Email: '.$email;
$msg .= 'Message: '.$message;
/*Les en-têtes du mail*/
$headers = 'From: MESSAGE DU SITE';
/*L'envoi du mail - Et page de redirection*/
mail($to, $sujet, $msg, $headers);
?>