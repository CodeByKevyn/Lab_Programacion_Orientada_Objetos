**Pregunta:**
¿Qué ventaja técnica tiene crear un molde (función constructora) en lugar de escribir un objeto literal estructurado individualmente para cada computador?

---

**Respuesta:**
La ventaja principal es que permite acceder a un mismo método múltiples veces, ordenar la información fácilmente y 
cambiar datos o lógica en un solo lugar sin tener que modificar todos los objetos literales uno por uno.

**Pregunta:**
¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?

---

**Respuesta:**
Porque this funciona como decir "mi": señala únicamente al objeto que está ejecutando la acción en ese momento, 
asegurando que lea o cambie solo sus propios datos sin confundirse con otros objetos.

**Pregunta:**
¿Qué ventajas a nivel de cohesión de software presenta el hecho de que el objeto conozca por sí mismo su estado lógico (si aprobó o no)?

---

**Respuesta:**
Mantiene el código ordenado y centralizado, evitando repetir validaciones por todo el programa y permitiendo que el objeto sea autónomo al gestionar sus propios datos y reglas.

**Pregunta:**
¿Qué ocurriría si el libro ya estaba prestado y alguien intenta prestarlo nuevamente sin controles de estado internos?

---

**Respuesta:**
El sistema sobrescribiría el préstamo actual sin verificar si el libro está disponible, perdiendo el orden del registro y el rastreo de quién lo tiene realmente lo que facilita su perdida.

**Pregunta:**
¿Qué ventajas tiene permitir que la información sea ingresada por el usuario en lugar de escribir los datos directamente en el código?

---

**Respuesta:**
Permite que la aplicación sea dinámica e interactiva procesando datos reales de cualquier cliente en tiempo real sin necesidad de modificar el código fuente ni requerir conocimientos de programación por parte del cliente.
