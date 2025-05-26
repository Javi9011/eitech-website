<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    // Validar datos
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'Todos los campos son requeridos']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Por favor ingrese un correo electrónico válido']);
        exit;
    }

    // Configuración del correo
    $to = "info@eitech.com.co";
    $subject = "Nuevo mensaje de contacto - Eitech";
    $headers = "From: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Mensaje formateado
    $body = "<html><body>";
    $body .= "<h2>Nuevo mensaje de contacto</h2>";
    $body .= "<p><strong>Nombre:</strong> $name</p>";
    $body .= "<p><strong>Correo electrónico:</strong> $email</p>";
    $body .= "<p><strong>Mensaje:</strong><br>$message</p>";
    $body .= "</body></html>";

    // Enviar correo
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado exitosamente']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}
?>
