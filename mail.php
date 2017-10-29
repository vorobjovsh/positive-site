<?php


$recepient = "positive_gc@mail.ru";
$sitename = "'Positive' - Печать фотокгниг в г.Астана";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);

$message = "Имя клиента: $name \nНомер телефона: $tel";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
