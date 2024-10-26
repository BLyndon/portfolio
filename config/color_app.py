from PIL import Image, ImageEnhance

# Cargar la imagen
image = Image.open('profile.jpeg')

# Convertir a escala de grises
gray_image = image.convert('L')

# Convertir la imagen a RGB para aplicar el tinte
colored_image = Image.new('RGB', gray_image.size)
colored_image.paste(gray_image)

# Aplicar un color de tono #365B6D (puedes ajustar la opacidad)
r, g, b = (54, 91, 109)  # Valores RGB del color #365B6D
tinted_image = ImageEnhance.Color(colored_image).enhance(0.0)  # Asegúrate de que esté en blanco y negro
tinted_image = Image.blend(tinted_image, Image.new('RGB', gray_image.size, (r, g, b)), alpha=0.5)

# Guardar la imagen resultante
tinted_image.save('profile_tinte_365B6D.jpg')

print('La imagen ha sido guardada con el tono #365B6D como profile_tinte_365B6D.jpg.')

