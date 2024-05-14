# Proyecto 1


Este proyecto se centra en el desarrollo de una aplicación web de gestión de una clínica; además, requiere utilizar módulos que permitan el manejo de pacientes,asignación y cancelación de citas. Utilizando React como framework principal. 

## Authors

- [@marcortes20](https://github.com/marcortes20)
- [@JosePabloSG](https://github.com/JosePabloSG)
- [@Adriana](https://github.com/Adriana-06)
- [@Nazagomez](https://github.com/Nazagomez)
- [@Yeilinnn](https://github.com/Yeilinnn)

## Features Front End
Wireframes para la documentación y Aplicativo creado en React
### Será necesario incluir los siguientes aspectos técnicos:
• Hooks personalizados para llamar a funciones fetch  
• Servicios con funciones fetch  
• Modelos (Types de entidades)  
• Uso de React Hook Form  
• Uso de React Router, rutas privadas y públicas según el usuario Logueado (Investigación, Protected Routes)  
• Manejo de Json Web Token 
### Pantallas o UI necesario  
• Login (Ruta pública)  
• Registro (Ruta pública)  
• Lista principal de citas realizadas (Todo en una misma pantalla) o Se mostrará siempre el nombre, email y teléfono del usuario Logueado.
o En la misma pantalla deberá haber un formulario para ingresar la información de la cita a reservar  
▪ Escoger el tipo de cita  
▪ Escoger la fecha y la hora  
▪ Escoger la sucursal de la clínica  
▪ Un botón de reservar o Se mostrará un listado de las citas utilizando cards  
▪ Cada card mostrará Fecha y hora de la cita, sucursal y también el status.  
▪ Cada card servirá al mismo tiempo para editar inline los detalles de la cita o cancelar la misma.  
▪ También dentro del mismo card estará la opción Eliminar, pero esta solo podrá ser ejecutada por un usuario ADMIN, si un paciente (USER) ejecuta esta acción se le mostrará un mensaje
 indicando que no está autorizado.  
• Se deberán mostrar los mensajes de error correctos si no se cumplen las reglas de negocio del back end.
o Error si un usuario quiere cancelar una cita faltando 24 horas o menos de
su ejecución.
o Error si el usuario intenta crear una segunda cita para la misma fecha.  
• Pantalla para el ADMIN donde pueda ver en forma de tabla las citas del día de hoy.  
• El paciente (USER) no podrá acceder a la pantalla de citas del día de hoy, si
intenta acceder por url se le mostrará un mensaje indicando que no está
autorizado. (Rutas públicas y privadas)  
### Notas:
▪ No es necesario una pantalla para gestionar sucursales o tipos de cita, estos datos
deberán existir previamente en la base de datos para su correcto funcionamiento.  
▪ El registro será solo para los pacientes, el usuario ADMIN se puede crear
previamente en la base de datos, es decir cualquier usuario que utilice la página de
Registro será automáticamente del Rol USER  
