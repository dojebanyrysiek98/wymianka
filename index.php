<?php
$rootIndexPath = 'root/index.html';
if (file_exists($rootIndexPath)) {
    include $rootIndexPath;
} else {
    echo "Plik index.html nie został znaleziony.";
}
?>
